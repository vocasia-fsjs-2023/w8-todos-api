// Import library yang dibutuhkan
const express = require('express');
const bodyParser = require('body-parser');
const { Todo } = require('./models'); // Sesuaikan path sesuai dengan struktur proyek kamu

// Inisialisasi Express
const app = express();
const port = 3000; // Sesuaikan port yang diinginkan

// Middleware untuk parsing body request
app.use(bodyParser.json());

// Endpoint untuk menambahkan Todo baru
app.post('/todos', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await Todo.create({
      title,
      description,
      status: 'created', // Default status
    });

    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mendapatkan semua Todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mendapatkan single Todo berdasarkan ID
app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);

    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mengedit single Todo berdasarkan ID
app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    if (updatedTodo[0] === 1) {
      res.status(200).json(updatedTodo[1][0]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mengedit status Todo berdasarkan ID
app.patch('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.update(
      { status: req.body.status },
      { where: { id: req.params.id }, returning: true }
    );

    if (updatedTodo[0] === 1) {
      res.status(200).json(updatedTodo[1][0]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk menghapus single Todo berdasarkan ID
app.delete('/todos/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.destroy({ where: { id: req.params.id } });

    if (deletedTodo === 1) {
      res.status(200).json({ message: `Todo dengan id ${req.params.id} berhasil dihapus` });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Jalankan server pada port yang telah ditentukan
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
