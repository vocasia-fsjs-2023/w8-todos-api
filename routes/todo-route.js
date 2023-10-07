const express = require("express");
const todoController = require("../controllers/todo-controller");
const router = express.Router();

router.post("/", todoController.store);
router.get("/", todoController.index);
router.get("/:id", todoController.get);
router.route("/:id").put(todoController.update).patch(todoController.update);
// router.put("/:id", todoController.updateTodo);
// router.patch("/:id", todoController.updateStatusTodo);
router.delete("/:id", todoController.remove);

module.exports = router;
