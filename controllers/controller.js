const { Todo } = require("../models");

//Mendapatkan Semua Data
const index = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json({ todos });
    } catch (error) {
        console.log(error, '<<< error find all todo');
    }
};

//Membuat Data
const store = async (req, res) => {
    //Mendapatkan Request Body
    const { title, description } = req.body;
    try {
        //Menambahkan Data Baru
        const todos = await Todo.create({
            title: title,
            description: description,
        });
        //Mengembalikan Response ke Client
        res.status(201).json(todos);
    } catch (error) {
        console.log(error);
    }
};
//Mengupdate Data Berdasarkan ID
const update = async (req, res) => {
    //Mendapatkan req.body
    const { title, description, status } = req.body;
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const todo = await Todo.findByPk(id);
        //Kondisi Data Jika tidak ditemukan
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        //Mengupdate Data
        todo.title = title || todo.title;
        todo.description = description || todo.description;
        todo.status = status || todo.status;
        //Menyimpan data
        todo.save();
        //Mengembalikan Response ke Client
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
};

//Mendapatkan Data Berdasarkan ID
const get = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const todo = await Todo.findByPk(id);
        //Kondisi Data Jika Tidak Ditemukan
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        //Mengembalikan Response ke Client
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
};
const updateStatusTodo = async (req, res) => {};
//Menghapus Data
const remove = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const todo = await Todo.findByPk(id);
        //Kondisi Data Jika Tidak Ditemukan
        if (!todo) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        //Menghapus Data
        todo.destroy();
        //Mengembalikan Response ke Client
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