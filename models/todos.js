'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    title: {
      type :DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        max: 255
      }
    },
    description:{
      type : DataTypes.TEXT,
      allowNull : false,
      validate: {
        notEmpty: true
      }
    } ,
    status:{
      type : DataTypes.ENUM("created", "in_progress", "done")
    } 
  }, {
    //menambahkan hooks untuk memberi default value jika status kosong
    hooks: {
      beforeCreate: (todos, options) => {
        todos.status = 'created';
      }
    },
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};