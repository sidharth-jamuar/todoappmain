import React from "react";
import "./header.css"
import {connect} from "react-redux"
import {logout} from "../../actions/user"
import {withRouter} from "react-router-dom"
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header-container">
                <div className="logo" onClick={e=>{this.props.history.push("/")}}>Todo App</div>
            {this.props.user ? <div className="logout" onClick={e=>{
                this.props.logout();this.props.history.push("/")
            }}>Logout</div>:null}
            </div>
        )
    }
}
const mapStateToProps=state=>{
return{
    user:state.User.user
}
}
export default withRouter(connect(mapStateToProps,{logout})(Header));