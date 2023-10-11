'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Kolom tidak boleh null
      validate: {
          notNull: {
            msg: 'Username tidak boleh null', // Pesan kesalahan kustom jika null
          },
          notEmpty: {
            msg: 'Username tidak boleh kosong', // Pesan kesalahan kustom jika string kosong
          },
          len: {
            args: [1, 255], // Batasi panjang string antara 1 hingga 255 karakter
            msg: 'Panjang string harus antara 1 hingga 255 karakter', // Pesan kesalahan kustom
          },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false, // Kolom tidak boleh null
      validate: {
          notNull: {
            msg: 'Username tidak boleh null', // Pesan kesalahan kustom jika null
          },
          notEmpty: {
            msg: 'Username tidak boleh kosong', // Pesan kesalahan kustom jika string kosong
          },
      },
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['created', 'in_progress', 'done'],
    },
  }, {
    sequelize,
    modelName: 'todo',
    hooks: {
      beforeCreate: (todo, options) => {
        if (!todo.status) {
          todo.status = 'created'; // Ganti dengan nilai default yang Anda inginkan
        }
      },
    },
  });
  return todo;
};