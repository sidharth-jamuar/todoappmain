const mongoose=require('mongoose')
const {Todo}=require("../models/todos")
exports.addTodo=(req,res)=>{
    const todo=new Todo({
        Title:req.body.Title,
    Creator:req.body.Creator,
    Category:req.body.Category,
    Description:req.body.Description
    })
    todo.save().then(result=>{
        Todo.find({Creator:req.body.Creator}).then(todos=>{
            res.send(todos)
        })
    })
}
exports.fetchMyTodos=(req,res)=>{
    Todo.find({Creator:req.query.Creator})
    .then(todos=>{
        console.log(todos);
        res.send(todos)
    })
}
exports.deleteTodo=(req,res)=>{
    Todo.findOneAndDelete({_id:req.query.id})
    .then(result=>{
        Todo.find({Creator:req.query.Creator})
        .then(todos=>{
            console.log(todos);
            res.send(todos)
    })})
}
exports.markDone=(req,res)=>{
    Todo.findOneAndUpdate({_id:req.body.id},{$set:{Done:true}},{new:true})
    .then(result=>{
       
        Todo.find({Creator:req.body.Creator})
        .then(todos=>{
            console.log(todos)
            res.send(todos)
    })
    })
}
exports.markUndone=(req,res)=>{
    Todo.findOneAndUpdate({_id:req.body.id},{$set:{Done:false}},{new:true})
    .then(result=>{
        
        Todo.find({Creator:req.body.Creator})
        .then(todos=>{
            console.log(todos)
            res.send(todos)
    })
    })
}
