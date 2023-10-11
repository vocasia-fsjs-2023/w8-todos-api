"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {}

  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Title cannot be null" },
          notEmpty: { msg: "Title cannot be empty" },
          max: { args: 255, msg: "Title cannot be longer than 255 characters" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Description cannot be null" },
          notEmpty: { msg: "Description cannot be empty" },
        },
      },
      status: {
        type: DataTypes.ENUM,
        values: ["created", "in_progress", "done"],
      },
    },
    {
      sequelize,
      modelName: "Todo",
      hooks: {
        beforeValidate: (todo, options) => {
          if (!todo.status) {
            todo.status = "created";
          }
        },
      },
    }
  );

  return Todo;
};
