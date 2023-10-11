const express = require("express");
const bodyParser = require("body-parser");
// const { todo } = require("./models");
const routers = require("./routers/index");

const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.use(routers);
// app.get("/todos", async (req, res) => {
//   let response;
//   try {
//     const todos = await todo.findAll();
//     response = todos;
//   } catch (error) {
//     response = "ERROR";
//   }
//   res.status(200).json(response);
// });

// app.get("/todos/:id", async (req, res) => {
//   let id = Number(req.params["id"]);
//   const findId = await todo.findByPk(id);
//   if (!findId) {
//     return res.status(404).json({ message: "Todo tidak ditemukan" });
//   }
//   let response;
//   try {
//     const todos = await todo.findAll({
//       where: {
//         id: id,
//       },
//     });
//     response = todos;
//   } catch (error) {
//     console.log(error);
//     response = JSON.stringify(error);
//   }
//   res.status(200).json(response);
// });

// app.post("/todos", (req, res) => {
//   const { title, description } = req.body;

//   todo
//     .create({
//       title,
//       description,
//     })
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// });

// app.put("/todos/:id", async (req, res) => {
//   const { title, description, status } = req.body;
//   let id = Number(req.params["id"]);
//   const findId = await todo.findByPk(id);
//   if (!findId) {
//     return res.status(404).json({ message: "Todo tidak ditemukan" });
//   }
//   let response;
//   try {
//     await todo.update(
//       {
//         title,
//         description,
//         status,
//       },
//       {
//         where: {
//           id: id,
//         },
//       }
//     );
//     response = `Todo dengan id ${id} berhasil diupdate`;
//   } catch (error) {
//     console.log(error);
//     response = JSON.stringify(error);
//   }
//   res.status(200).json(response);
// });

// app.patch("/todos/:id", async (req, res) => {
//   const { status } = req.body;
//   let id = Number(req.params["id"]);
//   const findId = await todo.findByPk(id);
//   if (!findId) {
//     return res.status(404).json({ message: "Todo tidak ditemukan" });
//   }
//   let response;
//   try {
//     await todo.update(
//       { status },
//       {
//         where: {
//           id: id,
//         },
//       }
//     );
//     response = `Todo dengan id ${id} berhasil diupdate`;
//   } catch (error) {
//     console.log(error);
//     response = JSON.stringify(error);
//   }
//   res.status(200).json(response);
// });

// app.delete("/todos/:id", async (req, res) => {
//   let id = Number(req.params["id"]);
//   const findId = await todo.findByPk(id);
//   if (!findId) {
//     return res.status(404).json({ message: "Todo tidak ditemukan" });
//   }

//   await todo.destroy({
//     where: {
//       id: id,
//     },
//   });
//   res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
// });

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}...`);
});
