import React, { Component } from 'react'
import PageBanner from '../../components/stateless/banners/PageBanner';
import Axios from 'axios';
import AdminBlogRecap from '../../components/Admin/Admin-Blog-Recap/AdminBlogRecap';


export default class AdminHomePage extends Component {
  
  /* constructor(props){
    super(props);
    this.state={
      api : null
    }
  }

  componentDidMount(){
    let api = this.BindToken()
    this.setState({
      api : api
    })
  }

  BindToken=()=>{
    return Axios.create({
      baseURL: '/api/',
      timeout: 1000,
      headers: {'Authorization': `Bearer ${window.localStorage.getItem("token")}`}
    })
  } */
  render() {
    return (
      <div>
        <PageBanner 
            CurrentPage="Administration"
            CurrentUri="admin"
          />
          <AdminBlogRecap/>
      </div>
          
    )
  }
}
