const mongoose=require("mongoose");
const {User}=require("../models/user")
exports.userSignup=(req,res,next)=>{
    console.log(req.body.Username)
User.findOne({Username:req.body.Username})
.then(found=>{

    if(found!==null){
    res.send("User Already Exists.Please try a different Username")
    }
    else{
    next();
    }
}
)
  
}