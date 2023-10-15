const { Todo } = require('../models/todo');

// Fungsi untuk membuat Todo baru
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Todo' });
  }
};

// Fungsi untuk mendapatkan daftar semua Todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get Todos' });
  }
};

// Fungsi untuk mendapatkan detail Todo berdasarkan ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get Todo' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Todo' });
  }
};


exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.destroy();
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Todo' });
  }
};
