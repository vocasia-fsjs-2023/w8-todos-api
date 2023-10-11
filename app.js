const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./routes/todo-routes');

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

