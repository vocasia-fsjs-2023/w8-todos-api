const { createTodos, getAllTodos, getTodosById, updateTodos, updateTodosStatus, deleteTodos } = require('../controller/todosController')

const router = require('express').Router()


router.post('/todos', createTodos)
router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodosById)
router.put('/todos/:id', updateTodos)
router.patch('/todos/:id', updateTodosStatus)
router.delete('/todos/:id', deleteTodos)


module.exports = router