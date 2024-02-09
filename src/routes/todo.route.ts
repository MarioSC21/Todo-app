import { Router } from 'express'
import { createTodos, deleteTodos, getTodos, updateTodos } from '../controllers/todo.controller'

const router = Router()

router.get('/todo', getTodos)
router.post('/todo', createTodos)
router.put('/todo/:id', updateTodos)
router.delete('/todo/:id', deleteTodos)

export default router
