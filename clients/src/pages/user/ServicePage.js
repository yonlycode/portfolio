import React, { Component } from 'react'
import HomeFeature from '../../components/Home-Feature/HomeFeature';
import PageBanner from '../../components/stateless/banners/PageBanner';

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
