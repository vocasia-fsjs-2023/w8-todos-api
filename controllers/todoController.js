const { Todo } = require("../models");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({
      title,
      description,
      status: "created",
    });
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByPk(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const todo = await Todo.findByPk(id);
    if (todo) {
      todo.title = title;
      todo.description = description;
      await todo.save();
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update todo status
exports.updateTodoStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    const todo = await Todo.findByPk(id);
    if (todo) {
      todo.status = status;
      await todo.save();
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(200).json({
        message: `Todo dengan ID ${id} berhasil dihapus`,
        todo,
      });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
