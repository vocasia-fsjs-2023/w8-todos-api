const express = require("express");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todo-route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

app.use("/todos", todoRoute);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}...`);
});
