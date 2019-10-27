import React,{Component} from "react";
import Login from "../login/login";
import "./homepage.css"
import Signup from "../signup/signup";
class Homepage extends Component{
    constructor(props){
        super(props);
       this.state={
           showLogin:false,
           showSignup:true
       }
    }
  showLogin=()=>{
   this.setState((prevstate)=>{
        return{
            showLogin:!prevstate.showLogin,
            showSignup:!prevstate.showSignup
            
        }
    })
  }
  showSignup=()=>{
      this.setState((prevstate)=>{
          return{
              showSignup:!prevstate.showSignup,
              showLogin:!prevstate.showLogin
          }
      })
  }
    render(){
        console.log(this.state)
        return(
            <div className="homepage-container">
                <div className="login-container">
                    <h3 className="headers" onClick={e=>this.showLogin()}>Login</h3>
             
                      <div className={this.state.showLogin?"form-container animate-form":"form-container deanimate-form"}>
                        
       <Login /></div>
                    </div>
               
                <div className="signup-container">
                <h3 className="headers" onClick={e=>this.showSignup()}>Signup</h3>
                <div className={this.state.showSignup?"form-container animate-form":"form-container deanimate-form"}>
                <Signup />
                </div>
                </div>
                
            </div>
        )
    }
}
export default Homepage;