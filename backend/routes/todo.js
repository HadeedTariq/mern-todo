import express from 'express'
import { createTodo, deleteTodo, sendTodo} from '../controllers/todoController.js'
const router=express.Router()
router.post('/create',createTodo)
router.post('/delete',deleteTodo)
router.post('/get',sendTodo)
export default router