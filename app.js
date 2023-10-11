const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./routes/todos.js')

const { Todos } = require("./models");

app.use(bodyParser.json());
app.use(express.json());
app.use(router)

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
