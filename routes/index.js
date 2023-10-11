const router = require("express").Router()

// Create (POST) - Membuat TODO baru
router.post('/todos', todoController.postTodo);

// Read (GET) - Mendapatkan semua TODOs
router.get('/todos', todoController.getAllasync);

// Read (GET) - Mendapatkan TODO berdasarkan ID
router.get('/todos/:id', todoController.getIdasync);

// Update (PUT) - Mengubah seluruh data TODO berdasarkan ID
router.put('/todos/:id', todoController.putTodoasync);

// Update (PATCH) - Mengubah sebagian data TODO berdasarkan ID
router.patch('/todos/:id', todoController.patchTodoasync);

// Delete - Menghapus TODO berdasarkan ID
router.delete('/todos/:id', todoController.delTodoasync);

module.exports = router;