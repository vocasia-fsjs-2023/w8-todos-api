"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // tidak boleh null
        validate: {
          max: 255, // maksimal panjang string 255 karakter
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, // tidak boleh null
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
        beforeCreate(todo, option) {
          todo.status = "created"; //default value status
        },
      },
    }
  );
  return Todo;
};
