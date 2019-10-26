import React from "react";
import {connect} from "react-redux"
import "./todos.css"
import {fetchMyTodos,deleteTodo,markDone,markUndone} from "../../actions/todo"
import CreateTodo from "../createTodo/createTodo";
class Todos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showCreateTodo:false,
            showMyTodos:true
        }
    }
    componentDidMount(){
        this.props.fetchMyTodos({Creator:this.props.user.Username})
    }
    renderTodos=()=>{
        return this.props.todos.map((todo,i)=>{
            return(
                <div className="todos-list" key={i}>
                <div className="todo-data"><span>Title:</span>{todo.Title}</div>
               <div className="todo-data"> <span>Category:</span>{todo.Category}</div>
               <div className="todo-data"> <span>Description:</span>{todo.Description}</div>
               {todo.Done ? <button className="btn btn-done" disabled>Mark as Done</button>:
            <button className="btn btn-done"
             onClick={e=>{this.props.markDone(todo._id,todo.Creator)}}>Mark as Done</button>}
               {todo.Done ? <button className="btn btn-undone"
               onClick={e=>this.props.markUndone(todo._id,todo.Creator)}>Mark as Undone</button>:
               <button className="btn btn-undone" disabled>Mark as Undone</button>
            }
                <span className="work-btn">
                <button className="btn btn-edit">Edit Todo</button>
                <button className="btn btn-delete"
                 onClick={e=>{this.props.deleteTodo(todo._id,todo.Creator)}}>Delete</button>
                </span>
               </div>
            )
        })
    }
    showMyTodos=()=>{
        this.setState((prevstate)=>{
            return{
            showMyTodos:!prevstate.showMyTodos,
            showCreateTodo:false
            }
        })
    }
    showCreateTodo=()=>{
        this.setState((prevstate)=>{
            return{
            showCreateTodo:!prevstate.showCreateTodo,
            showMyTodos:false
            }
        })
    }
    closeCreateTodo=()=>{
        this.setState({showCreateTodo:false,showMyTodos:true})
    }
    render(){
        console.log(this.props)
        if(this.props.todos && this.props.todos.length > 0){
        return(
            <React.Fragment>
            <div className="todos-container">
          
            <div className='todos-headers' onClick={e=>this.showMyTodos()}>My Todos</div>

            <div className="todos-headers">My Buckets</div>
            
            <div className="todos-headers" onClick={e=>{this.showCreateTodo()}}>Create Todos
         
            </div>
            </div>
              <div className={this.state.showCreateTodo?"todo-form-container animate-form":"remove-form-container"}>
              <CreateTodo user={this.props.user} closeCreateTodo={this.closeCreateTodo}/>
          </div>
         {this.state.showMyTodos &&<div className="todos-list-container">
             
             {this.renderTodos()}
             
         </div>} 
          </React.Fragment>
        )
    }
    else{
        return <div>Loading your profile please wait...</div>
    }
}
}
const mapStateToProps=(state)=>{
    return{
        user:state.User.user,
        todos:state.Todos.myTodos
    }
}
export default connect(mapStateToProps,{fetchMyTodos,deleteTodo,markDone,markUndone})(Todos);