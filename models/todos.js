const mongoose=require('mongoose');
const {Schema}=mongoose;

const todoSchema=new Schema({
    Title:String,
    Creator:String,
    Id:String,
    Category:String,
    Description:String,
    Done:{type:Boolean,default:false},
    Bucket:{type:String,default:"No Bucket assigned"}
})
const Todo=mongoose.model('todo',todoSchema)

module.exports={Todo}