const express = require("express");
const router = express.Router();

// Import your todo routes here
const todoRoutes = require("./todoRoutes");

// Define routes
router.use("/todos", todoRoutes);

module.exports = router;
