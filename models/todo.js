'use strict';
const {
  Model
} = require('sequelize');
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
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    }, 
    description: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: true,
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['created', 'in_progress', 'done'],
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Todo',
  });

  Todo.beforeCreate((todo, options) => {
    if (!todo.status) {
      todo.status = 'created'; // Nilai default
    }
  });

  return Todo;
};