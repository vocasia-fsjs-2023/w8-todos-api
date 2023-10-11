const {createNewTodo, getAllTodo, getTodoById, updateTodo, updateStatusTodo, deleteTodo } = require('../controller/todo-controller')
const router = require('express').Router()



router.post('/todos', createNewTodo);
router.get('/todos', getAllTodo);
router.get('/todos/:id', getTodoById);
router.put('/todos/:id', updateTodo);
router.patch('/todos/:id', updateStatusTodo);
router.delete('/todos/:id', deleteTodo);




module.exports = router