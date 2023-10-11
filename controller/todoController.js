const {Todo} = require("../models");

class Controller{
    static postTodo (req, res) {
        const { title, description } = req.body;
        const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
      
        const newTodo = {
          id,
          title,
          description,
          status: 'created',
          createdAt,
          updatedAt,
        }    
            todos.push(newTodo);
            res.status(201).json(newTodo);
    }

    static async getAllasync (req, res) {
        res.status(200).json({ todos });
    }

    static async getIdasync (req, res) {
        const id = parseInt(req.params.id);
        const todo = todos.find((todo) => todo.id === id);
      
        if (!todo) {
          return res.status(404).json({ message: 'TODO not found' });
        }
      
        res.status(200).json(todo);
    }

    static async putTodoasync (req, res) {
        const id = parseInt(req.params.id);
        const { title, description } = req.body;
      
        const todoIndex = todos.findIndex((todo) => todo.id === id);
      
        if (todoIndex === -1) {
          return res.status(404).json({ error: 'To-Do not found.' });
        }
      
        todos[todoIndex] = {
          ...todos[todoIndex],
          title: title || todos[todoIndex].title,
          description: description || todos[todoIndex].description,
          updatedAt: new Date().toISOString(),
        };
      
        res.status(200).json(todos[todoIndex]);
    }

    static async patchTodoasync (req, res) {
        const id = parseInt(req.params.id);
        const { status } = req.body;
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) {
          return res.status(404).json({ error: 'To-Do not found.' });
        }
        if (status) {
          todo.status = status;
          todo.updatedAt = new Date().toISOString();
        }
        res.status(200).json(todo);
    }

    static async delTodoasync (req, res) {
        const id = parseInt(req.params.id);
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        if (todoIndex === -1) {
          return res.status(404).json({ error: 'To-Do not found.' });
        }
        const deletedTodo = todos.splice(todoIndex, 1)[0];
        res.status(200).json({
          message: `Todo dengan id ${deletedTodo.id} dan judul ${deletedTodo.title} berhasil dihapus`,
        });
      }
}

module.exports = Controller;