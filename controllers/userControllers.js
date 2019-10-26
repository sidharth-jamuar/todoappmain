const mongoose=require("mongoose");
const {User} =require("../models/user");
exports.signup=(req,res)=>{
    console.log("here")
    const user=new User({
        Username:req.body.Username,
        Password:req.body.Password
    })
    user.save().then(user=>{
        res.send(user)
    })
}
exports.login=(req,res)=>{
    console.log(req.body)
    User.find({Username:req.body.Username,Password:req.body.Password})
    .then(user=>{
        if(user.length>0){
        res.send({Username:user[0].Username,Id:user[0]._id})}
        else{
            res.end()
        }
    })
}