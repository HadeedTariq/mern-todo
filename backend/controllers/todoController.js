import {Todos} from '../models/schema.js'
const createTodo=async(req,res)=>{
    const {email,todo}=req.body
    if(!email||!todo)return res.status(404).json({message:"Please fill the field"})
    try {
        const todos=await Todos.create({email,todo})
        res.status(201).json({message:"Success"})
    } catch (error) {
        res.status(404).json({message:"Something went wrong"})
    }
}
const sendTodo=async(req,res)=>{
    const {email}=req.body
    try {
        const todos=await Todos.find({email})
        res.status(201).json(todos)
    } catch (error) {
        res.status(404).json({message:"Something went wrong"})
    }
}
const deleteTodo=async(req,res)=>{
    const {todo,email}=req.body
    try {
        const todos=await Todos.findOneAndDelete({todo,email})
        res.status(201).json(todos)
    } catch (error) {
        res.status(404).json({message:"Something went wrong"})
    }   
}
export {createTodo,deleteTodo,sendTodo}