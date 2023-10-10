const express = require("express");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todoRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todos", todoRoute);
app.get("/", (req, res) => {
    res.send("Server Todos ready!!!");
});
app.listen(PORT, () => {
    console.log(`Server berjalan di Port:${PORT}...`);
});