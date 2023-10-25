const express = require("express");
const router = express.Router();

// Import Todo Controller
const todoController = require("../controllers/todoController");

// Define Todo routes
router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.patch("/:id", todoController.updateTodoStatus);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
