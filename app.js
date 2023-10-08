const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Import objek sequelize
const todoRoutes = require('./routes/todoRoutes'); // Import file routes todoRoutes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
sequelize.sync() // Menggunakan Sequelize untuk menginisialisasi koneksi ke basis data
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
