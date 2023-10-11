

const {todo} = require('../models');


//POST - Membuat Todos Baru
const createNewTodo = async (req,res) => {
    try {
        const {title, description, status} = req.body

        const newTodo = await todo.create({title: title, description: description, status: status})

        return res.status(201).json(newTodo);
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// GET - Mendapatkan semua todos
const getAllTodo = async (req, res) => {

    try {
        const todos = await todo.findAll();

        return res.status(200).json({todos});

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
};


//GET BY ID - Mendapatkan Todos dengan Id
const getTodoById = async (req, res) => {

    try {
        const {id} = req.params;

        const data = await todo.findByPk(id)
        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data todo with id ${id} is not found`,
            })
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// PUT - Update Data Todos
const updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        const {title, description} = req.body

        const data = await todo.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        data.title = title,
        data.description = description,
        data.updateAt = new Date(),
        data.save();

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// PATCH - Update Status Todos
const updateStatusTodo = async (req, res) => {
    try {
        const {id} = req.params
        const { status } = req.body

        const data = await todo.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        data.status = status,
        data.updateAt = new Date(),
        data.save();

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// DEL - Menghapus Todos By Id
const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        const data = await todo.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        await data.destroy()

        res.status(200).json({
            message: `todo dengan id ${id} berhasil dihapus`
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}



module.exports = {getAllTodo, getTodoById, createNewTodo, updateTodo, deleteTodo, updateStatusTodo}







  
