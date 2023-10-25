// app.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index"); // Pastikan Anda telah mengimpor rute yang sesuai

// const mainRouter = require("./routes/mainRouter"); // Mengimpor router yang telah Anda buat

// app.use("/", mainRouter);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(routes); // Gunakan rute yang telah diimpor

// Handle 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
