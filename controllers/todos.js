const { Todo } = require("../models");

const createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const todo = await Todo.create({ title, description });
    return res.status(201).json({ todo });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    return res.status(200).json({ todos });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const todo = await Todo.findOne({ where: { id } });
    if (todo) {
      todo.title = title;
      todo.description = description;
      await todo.save();
      return res.status(200).json({ todo });
    }
    return res.status(404).json({ message: "Todo not found!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const progressTodo = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const todo = await Todo.findOne({ where: { id } });
    if (todo) {
      todo.status = status;
      await todo.save();
      return res.status(200).json({ todo });
    }
    return res.status(404).json({ message: "Todo not found!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ where: { id } });
    if (todo) {
      await todo.destroy();
      return res.status(200).json({ todo });
    }
    return res.status(404).json({ message: "Todo not found!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  progressTodo,
  deleteTodo,
};
