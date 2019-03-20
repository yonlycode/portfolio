import React, { Component } from 'react'
import LoginForm from '../../components/form/LoginForm';
import "../../assets/css/adminLoginForm.css"
import PageBanner from '../../components/PageBanner';

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
