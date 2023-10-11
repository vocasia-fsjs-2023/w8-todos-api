const { Todo } = require("../models");

const index = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json({ todos });
    } catch (error) {
        console.log(error);
    }
};
const store = async (req, res) => {
    const { title, description } = req.body;
    try {
        const todos = await Todo.create({
            title: title,
            description: description,
        });

        res.status(201).json(todos);
    } catch (error) {
        console.log(error);
    }
};
const update = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }

        todo.title = title || todo.title;
        todo.description = description || todo.description;
        todo.status = status || todo.status;
        todo.save();

        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
};
const get = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }

        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
};
const updateStatusTodo = async (req, res) => {};
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }

        todo.destroy();
        res.status(200).json({
            message: `todo dengan id ${todo.id} dan judul ${todo.title} berhasil dihapus`,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    index,
    store,
    update,
    get,
    updateStatusTodo,
    remove,
};