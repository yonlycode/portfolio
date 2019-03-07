import React, { Component } from 'react'
import HomeFeature from '../components/HomeFeature';
import PageBanner from '../components/PageBanner';

export default class ServicePage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Services"
          CurrentUri="service"
        />
        <HomeFeature/>
      </div>
    )
  }
}
