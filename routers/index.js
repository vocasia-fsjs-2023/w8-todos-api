const router = require("express").Router();
const todo = require("./todos/index");

router.use("/todos", todo);
module.exports = router;
