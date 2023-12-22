const { Todos } = require('../models');

class Controller {

    
    static async postTodos(req, res) {
        try {
          const { title, description } = req.body;
          const todos = await Todos.create({ title, description });
          res.status(201).json(todos);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

    static async getTodo(req, res) {
        try {
          const todos = await Todos.findAll();
          res.status(200).json({ todos });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      
      static async getTodoById(req, res) {
        const { id } = req.params;
        try {
          const todos = await Todos.findByPk(id);
          if (!todos) {
            return res.status(404).json({ error: 'Todo not found' });
          }
          res.status(200).json(todo);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      
     
      static async updateTodo(req, res) {
        const { id } = req.params;
        const { title, description } = req.body;
        try {
            const todos = await Todos.findByPk(id);
            if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
            }
            todo.title = title;
            todo.description = description;
            
            await todos.save();
            res.status(200).json(todos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
      };

     
      static async updateTodoStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
          const todos = await Todos.findByPk(id);
          if (!todos) {
            return res.status(404).json({ error: 'Todo not found' });
          }
          todo.status = status;
          await todos.save();
          res.status(200).json(todos);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      
      static async deleteTodo(req, res) {
        const { id } = req.params;
        try {
          const todos = await Todos.findByPk(id);
          if (!todos) {
            return res.status(404).json({ error: 'Todo not found' });
          }
          await todos.destroy();
          res.status(200).json({ message: `todo dengan id ${id} dan judul ${todos.title} berhasil dihapus` });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
}

module.exports = Controller;