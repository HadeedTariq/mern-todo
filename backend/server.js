import express from 'express'
import { connectDb } from './models/connection.js';
import cors from 'cors'
import todoRoute from './routes/todo.js'
import { router } from './routes/user.js';
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const PORT=process.env.PORT|5000
const url="mongodb://127.0.0.1:27017/full-app";
connectDb(url)
app.use(cors())
app.use('/user',router)
app.use('/todo',todoRoute)
app.get('/',(req,res)=>{
    res.send("<h1>Hello nice application<h1/>")
})
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))