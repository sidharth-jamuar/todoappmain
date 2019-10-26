import React from "react"
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {addTodo} from "../../actions/todo"
class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Category:"",
            Description:"",
            Title:"",
        }
    }
    handleChange=(value,name)=>{
        this.setState((prevstate)=>{
            return{
            [name]:value
            }
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
     const {Title,Category,Description}=this.state;
     const Creator=this.props.user.Username;
        this.props.addTodo({Title,Category,Description,Creator},this.props.closeCreateTodo)
    }
  
    renderTodoForm=()=>{
        const fields=[ {tag:"input",label:"Title",type:"text",className:"input-field",
        value:this.state.Title,onChange:this.handleChange},
        {tag:"input",label:"Category",type:"text",className:"input-field",
        value:this.state.Category,onChange:this.handleChange},
        {tag:"input",label:"Description",type:"text",className:"input-field",
        value:this.state.Description,onChange:this.handleChange}]
       return fields.map((field,i)=>{
           if(field.tag==="input"){
            return(
                <div className="field-container" key={i}>
                <label>{field.label}:</label>
                <input className="input-field" type={field.type} value={field.value} onChange={(e)=>field.onChange(e.target.value,field.label)} />
                </div>
            )
           }
        })
       
    }
    render(){
        const styleobj={
            color:"white",
           textAlign:"right",
            margin:"15px",
            cursor:"pointer",
            padding:"4px"
        }
        return(
            <React.Fragment>
                <form onSubmit={e=>this.onSubmit(e)}>
                    <div style={styleobj} onClick={e=>{this.props.closeCreateTodo()}}>X</div>
                    <div>
                {this.renderTodoForm()}
                </div>
                <button type="submit" className="btn-login">Create Todo</button>
                </form>
                
            </React.Fragment>
        )
    }
}

export default withRouter(connect(null,{addTodo})(CreateTodo));