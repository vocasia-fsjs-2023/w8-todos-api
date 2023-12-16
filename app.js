const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const todoRoutes = require('./routes/todosRoutes');

app.use('/todos', todoRoutes);

const todos = [
  {
    id: 1,
    title: 'Membuat Aplikasi todo',
    description: 'deskripsi',
    status: 'created',
    created_at: '2023-09-26T04:06:55.158Z',
    updated_at: '2023-09-26T04:06:55.158Z'
  }
];

app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  const id = todos.length + 1;
  const newTodo = {
    id,
    title,
    description,
    status: 'created',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  todos.push(newTodo);
  res.json(`Todos ${title} berhasil ditambahkan`);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json('Todo not found');
  }

  res.json(todo);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json('Todo not found');
  }
  todo.title = title;
  todo.description = description;
  todo.updated_at = new Date().toISOString();
  res.json(`Todos ${id} berhasil diedit`);
});

app.patch('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json('Todo not found');
  }
  todo.status = status;
  todo.updated_at = new Date().toISOString();
  res.json(`Status id ${id} berhasil diubah`);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json('Todo not found');
  }
  todos.splice(index, 1);
  res.json(`Todos ${id} berhasil dihapus`);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} aktif`);
});
