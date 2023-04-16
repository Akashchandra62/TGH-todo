import express from "express";
const route = express.Router();
import User from "../database/models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Todo from "../database/models/todo.js";

route.get("/home", async (req, res) => {
    const token = req.cookies.token;
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(id)
    if(!user){
        return res.redirect("/")
    }
    const Todos = await Todo.find({user: id}).sort('priority')
    const completed = await Todo.count({user: id, status: 'completed'})
    const pending = await Todo.count({user: id, status: 'pending'})
    const canceled = await Todo.count({user: id, status: 'canceled'})
    res.render('home', {Todos, user, data: {
        completed,
        pending,
        canceled
    }})
})

route.post("/addtodo", async (req, res) => {
    const token = req.cookies.token;
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    if(req.body.todo || req.body.priority){
        const todo = await Todo.create({
            todo: req.body.todo,
            priority: req.body.priority,
            user: id
        })
    }

    res.redirect("/home")
}) 


route.delete("/todo/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.redirect('/home')
})  
route.get("/todo/complete/:id", async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, {
        status: "completed"
    })

    res.redirect('/home')
})  
route.get("/todo/cancel/:id", async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, {
        status: "canceled"
    })

    res.redirect('/home')
}) 


export default route;
