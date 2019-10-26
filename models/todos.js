const mongoose=require('mongoose');
const {Schema}=mongoose;

const todoSchema=new Schema({
    Title:String,
    Creator:String,
    Id:String,
    Category:String,
    Description:String,
    Done:{type:Boolean,default:false}
})
const Todo=mongoose.model('todo',todoSchema)

module.exports={Todo}