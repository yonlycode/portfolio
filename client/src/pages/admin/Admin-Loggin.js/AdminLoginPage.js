import React, { Component } from 'react'
import "../../../assets/css/adminLoginForm.css"
import {Redirect} from 'react-router-dom'
import Axios from 'axios';
import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class AdminLoginPage extends Component {
  constructor(props){
    super(props)
    this.state={
        mail:"",
        password:"",
        redirectToReferrer: false,
        errorMsg:null
    }
}
  /* get jwt  */
  checkLogin=()=>{
    Axios.post("/login-admin" , {
        mail:this.state.mail,
        password:this.state.password
    })
    .catch((e)=>{
        this.setState({
          errorMsg:e
        })
    })
    .then((r)=>{
        if(r.data===undefined){
          this.setState({
            errorMsg:"there is a problem here"
          })
        }else{
          window.localStorage.setItem('token' , r.data.token)
          window.localStorage.setItem('adminId',r.data.user.split('"')[1])
          this.setState({ redirectToReferrer: true })
        }
       
    })
  }

  cleanAlert=()=>{
    this.setState({
      errorMsg:null
    })
  }
  

  render() {
    let { from } = { from: { pathname: "/admin" } };
    let { redirectToReferrer,mail, password, errorMsg } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    const { checkLogin , cleanAlert } = this

    return (
      <div>
        <TwoPageBanner 
          currentUri="login"
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
