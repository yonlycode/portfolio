import React, { Component } from 'react'
import axios from 'axios';


export default class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state={
            mail:"",
            password:"",
        }
    }


    /* get jwt  */
    checkLogin=()=>{
        axios.get(url , {
            mail:this.state.mail,
            password:this.state.password
        })
        .catch((e)=>{
            console.log(e)
        })
        .then((r)=>{
            console.log(r);
            this.handleLogin()
        })
    }


    /* change auth status */
    handleLogin=()=>{
        axios.head.
        this.props.handleLogin()
    }
    
  render() {
    console.log(this.state)
    const { checkLogin } = this
    const { mail, password } = this.state
    return (
        <div className="wrapper">
            <form className="login">
                <p className="title">Log in</p>
                <input 
                    type="mail" 
                    placeholder="Mail" 
                    value={mail}
                    onChange={(e)=>this.setState({mail:e.target.value})}
                    autofocus
                />
                <i className="fa fa-user"></i>

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>this.setState({password:e.target.value})}
                />
                <i className="fa fa-key"></i>


                <a href="#">Forgot your password?</a>
                <button onClick={ checkLogin }>
                    <i className="spinner"></i>
                    <span className="state">Connection</span>
                </button>
            </form>
            </div>
    )
  }
}
