import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true})
const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    }
})
const Todos=mongoose.model('todos',todoSchema)
const User=mongoose.model('users',userSchema)
export {Todos,User}