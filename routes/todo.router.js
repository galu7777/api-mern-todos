const express = require('express');
const router = express.Router();
const  {addTodo, updateTodo, getTodo, getTodos, deleteTodo, updateStatusTodo} = require('../controllers/todo.controller');
const {verifyToken} = require('../controllers/verify.controller');

router.get('/', verifyToken, getTodos);
router.get('/:id', verifyToken, getTodo);
router.put('/:id', verifyToken, updateTodo);
router.delete('/:id', verifyToken, deleteTodo);
router.post('/', verifyToken, addTodo);
router.post('/status/:id', verifyToken, updateStatusTodo);

module.exports = router;