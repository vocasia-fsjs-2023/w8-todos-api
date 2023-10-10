const express = require("express");
const todoController = require("../controller/todoController");
const router = express.Router();

router.get("/", todoController.getTodosList);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.patch('/:id', todoController.updateTodoStatus);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;