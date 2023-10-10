const { Todo } = require('../models')

class Controller {
  static async getTodosList(req, res) {
    try {
      const todos = await Todo.findAll();
      res.status(200).json({ todos });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  static async getTodoById(req, res) {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  static async createTodo(req, res) {
    try {
      const { title, description } = req.body;
      const todo = await Todo.create({ title, description });
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  static async updateTodo(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      todo.title = title;
      todo.description = description;
      await todo.save();
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  static async updateTodoStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      todo.status = status;
      await todo.save();
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  static async deleteTodo(req, res) {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      await todo.destroy();
      res.status(200).json({ message: `Todo dengan ID ${id} berhasil dihapus` });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
module.exports = Controller;