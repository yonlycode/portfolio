import React, { Component } from 'react'
import "../../assets/css/adminLoginForm.css"
import PageBanner from '../../components/stateless/banners/PageBanner';
import {Redirect} from 'react-router-dom'
import Axios from 'axios';

export default class AdminLoginPage extends Component {
  constructor(props){
    super(props)
    this.state={
        mail:"",
        password:"",
        redirectToReferrer: false
    }
}
  /* get jwt  */
  checkLogin=()=>{
    Axios.post("/login-admin" , {
        mail:this.state.mail,
        password:this.state.password
    })
    .catch((e)=>{
        console.log(e)
    })
    .then((r)=>{
        window.localStorage.setItem('token' , r.data.token)
        this.setState({ redirectToReferrer: true })
    })
}
  

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    const { checkLogin } = this
    const { mail, password } = this.state

    return (
      <div>
        <PageBanner 
          CurrentPage="Connection"
          CurrentUri="admin"
        />
          <div className="wrapper">
            <div className="login">
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
              </div>
            </div>
      </div>
    )
  }
}
