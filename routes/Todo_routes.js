const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Rute untuk menambahkan todo
router.post('/', todoController.createTodo);

// Rute untuk mengambil semua todo
router.get('/', todoController.getAllTodos);

// Rute untuk mengambil todo berdasarkan ID
router.get('/:id', todoController.getTodoById);

// Rute untuk mengupdate todo berdasarkan ID
router.put('/:id', todoController.updateTodo);

// Rute untuk mengupdate status todo berdasarkan ID
router.patch('/:id', todoController.updateTodoStatus);

// Rute untuk menghapus todo berdasarkan ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;