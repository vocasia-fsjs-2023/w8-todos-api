const { Todo } = require('../models');

class Controller {

    //POST TODO
    static async postTodo(req, res) {
        try {
          const { title, description } = req.body;
          const todo = await Todo.create({ title, description });
          res.status(201).json(todo);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

    //GET ALL TODO
    static async getTodo(req, res) {
        try {
          const todos = await Todo.findAll();
          res.status(200).json({ todos });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      //GET BY ID TODO
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
      
      //PUT TODO
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
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      //PATCH TODO
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

      //DELETE TODO
      static async deleteTodo(req, res) {
        const { id } = req.params;
        try {
          const todo = await Todo.findByPk(id);
          if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
          }
          await todo.destroy();
          res.status(200).json({ message: `todo dengan id ${id} dan judul ${todo.title} berhasil dihapus` });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
}

module.exports = Controller;