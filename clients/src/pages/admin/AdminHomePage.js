import React, { Component } from 'react'
import PageBanner from '../../components/stateless/banners/PageBanner';

export default class AdminHomePage extends Component {
  render() {
    return (
      <div>
       <PageBanner 
          CurrentPage="Administration"
          CurrentUri="admin"
        />
        <h1>admin Home page</h1>
      </div>
    )
  }
}
