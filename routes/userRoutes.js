const {userSignup}=require("../middlewares/userSignup")
const controllers=require("../controllers/userControllers")
module.exports=app=>{
    app.post("/api/signup",userSignup,controllers.signup);
    app.post("/api/login",controllers.login)
}