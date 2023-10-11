const express = require("express");
const todoController = require("../controllers/controller");
const router = express.Router();

//Membuat Data
router.post("/", todoController.store);
//Mendapatkan Semua Data
router.get("/", todoController.index);
//Mendapatkan Data Berdasarkan ID
router.get("/:id", todoController.get);
//Mengaksesk Data Berdasarkan ID
router.route("/:id").put(todoController.update).patch(todoController.update);
//Mengambil Data Berdasarkan ID
router.put("/:id", todoController.updateTodo);
//Mengupdate Data
router.patch("/:id", todoController.updateStatusTodo);
//Menghapus Data
router.delete("/:id", todoController.remove);

module.exports = router;