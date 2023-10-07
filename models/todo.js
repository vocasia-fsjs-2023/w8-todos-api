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
                allowNull: false,
                validate: {
                    max: 255,
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
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
                    todo.status = "created";
                },
            },
        }
    );
    return Todo;
};
