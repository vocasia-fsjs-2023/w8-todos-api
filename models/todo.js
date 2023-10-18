'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Tidak boleh null
        validate: {
          notEmpty: true, // Tidak boleh string kosong
          len: [1, 255], // Panjang maksimal 255 karakter
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false, // Tidak boleh null
        validate: {
          notEmpty: true, // Tidak boleh string kosong
        },
      },
      status: {
        type: DataTypes.ENUM('created', 'in_progress', 'done'), // ENUM dengan nilai yang diizinkan
        allowNull: false, // Tidak boleh null
        defaultValue: 'created', // Nilai default jika tidak disediakan
      },
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );

  // Hook beforeCreate untuk menambahkan nilai default 'created' jika status tidak disediakan
  Todo.beforeCreate((todo) => {
    if (!todo.status) {
      todo.status = 'created';
    }
  });

  return Todo;
};
