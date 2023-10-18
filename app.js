const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); 
const todoRoutes = require('./routes/todoRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

sequelize.sync() 
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
