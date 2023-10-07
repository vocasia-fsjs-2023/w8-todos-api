const { Router } = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  progressTodo,
  updateTodo,
} = require("../controllers/todos");

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.patch("/:id", progressTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
