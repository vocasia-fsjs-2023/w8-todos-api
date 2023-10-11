const express = require('express');
const bodyParser = require("body-parser");
const todoController = require("./controller/todoController");
const app = express();
const port = 3000;
app.use(express.json());

const todos = [];

// ...

// Create (POST) - Membuat TODO baru
app.post('/todos', todoController.postTodo);

// Read (GET) - Mendapatkan semua TODOs
app.get('/todos', todoController.getAllasync);

// Read (GET) - Mendapatkan TODO berdasarkan ID
app.get('/todos/:id', todoController.getIdasync);

// Update (PUT) - Mengubah seluruh data TODO berdasarkan ID
app.put('/todos/:id', todoController.putTodoasync);

// Update (PATCH) - Mengubah sebagian data TODO berdasarkan ID
app.patch('/todos/:id', todoController.patchTodoasync);

// Delete - Menghapus TODO berdasarkan ID
app.delete('/todos/:id', todoController.delTodoasync);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
