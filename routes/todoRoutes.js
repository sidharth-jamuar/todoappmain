const controllers=require("../controllers/todoControllers")
module.exports=app=>{
    app.post("/api/addTodo",controllers.addTodo);
    app.get("/api/fetchMyTodos",controllers.fetchMyTodos);
    app.delete("/api/deleteTodo",controllers.deleteTodo)
    app.put("/api/markDone",controllers.markDone);
    app.put("/api/markUndone",controllers.markUndone);
}