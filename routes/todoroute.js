const express = require("express");
const todoController = require("../controller/todoController");
const router = express.Router();

router.post("/", todoController.postTodo);
router.get("/", todoController.getTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.patch("/:id", todoController.updateTodoStatus);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
