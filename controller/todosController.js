const { Todos } = require('../models')

//POST
const createTodos = async (req, res) => {
    try {
        const {title, description, status} = req.body

        const todosBaru = await Todos.create({
            title: title,
            description: description,
            status: status
        })

        res.status(200).json(todosBaru);
    }catch(error){
        console.log(error, '<-- Error Create Todos')
       } 
    }

//GET DATA
const getAllTodos = async(req, res) => {
   try{
const todos = await Todos.findAll()
res.status(200).json({ todos });
    
   }catch (error){
    res.status(404).json({ message: 'Todos tidak ditemukan' });
   }
    }

//GET BY ID
const getTodosById = async(req, res) => {
    try{
        const { id } = req.params

        const todos = await Todos.findByPk(id)
        if (todos === null){
            return res.status(404).json({ 
                error :'Todos tidak ditemukan'
            });
        }

        res.status(200).json(todos);
    } catch (error) {
        console.log(error, '<-- Error Get Todos by id')
    }
}


//PUT
const updateTodos = async (req, res) => {
        try{
            //mendapatkan req params -> mendapatkan data todos berdasarkan id
            const { id } = req.params
            //mendapatkan req body
            const {title, description, status} = req.body

            const todos = await Todos.findByPk(id)

            if (!todos) {
                return res.status(404).json({
                    error: 'Tidak ditemukan'
                });
            }
            //update
            todos.title = title
            todos.description = description
            todos.status = status
            todos.updateAt = new Date()

            //save data
            todos.save()
            //response
            res.status(200).json(todos);
        } catch(error) {
            console.log(error, '<-- Error Update Data Todos by ID')
        }
    }
    

    //PATCH
    const updateTodosStatus = async (req, res) => {
        try{
            //mendapatkan req params -> mendapatkan data user berdasarkan id
            const { id } = req.params
            //mendapatkan req body
            const { status} = req.body
            const todos = await Todos.findByPk(id)
            if (!todos) {
                return res.status(404).json({
                    error: 'Tidak ditemukan'
                });
            }
            //update
            todos.status = status
            todos.updateAt = new Date()

            //save data
            todos.save()
            //response
            res.status(200).json(todos);
        } catch(error) {
            console.log(error, '<-- Error Update Status Todos By ID')
        }
    }


    const deleteTodos = async (req, res) => {
        try{
            const { id } = req.params
            const todos = await Todos.findByPk(id)

            if (!todos) {
                res.status(404).json({ message: 'Todo tidak ditemukan' });
            }
            todos.destroy()
            res.status(200).json({ message: `Todo dengan id ${id} berhasil dihapus` });

        }catch(error){
            console.log(error, '<-- Error Destroy Todos')
        }
    }

module.exports = {createTodos, getAllTodos, getTodosById, updateTodos, updateTodosStatus, deleteTodos}