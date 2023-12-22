const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.post('/', todoController.postTodos);
router.get("/", todoController.getTodos);
router.get('/:id', todoController.getTodosById);
router.put('/:id', todoController.updateTodos);
router.patch('/:id', todoController.updateTodosStatus);
router.delete('/:id', todoController.deleteTodos);

module.exports = router;