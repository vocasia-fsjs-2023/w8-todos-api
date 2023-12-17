// models/todo.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title cannot be null.',
        },
        notEmpty: {
          msg: 'Title cannot be an empty string.',
        },
        len: {
          args: [0, 255],
          msg: 'Title must be at most 255 characters long.',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description cannot be null.',
        },
        notEmpty: {
          msg: 'Description cannot be an empty string.',
        },
      },
    },
    status: {
      type: DataTypes.ENUM('created', 'in_progress', 'done'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  // Hooks
  Todo.beforeCreate((todo, options) => {
    if (!todo.status) {
      todo.status = 'created'; // Default value if status is empty
    }
  });

  return Todo;
};
