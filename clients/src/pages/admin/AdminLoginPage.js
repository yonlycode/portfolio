import React, { Component } from 'react'
import LoginForm from '../../components/forms/Login-Form/LoginForm';
import "../../assets/css/adminLoginForm.css"
import PageBanner from '../../components/stateless/banners/PageBanner';

export default class AdminLoginPage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Connection"
          CurrentUri="admin"
        />
        <LoginForm/>
      </div>
    )
  }
}
