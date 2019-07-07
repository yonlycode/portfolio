import React, { Component } from 'react'
import HomeFeature from '../../Components/Home-Feature/HomeFeature';
import TwoPageBanner from '../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class ServicePage extends Component {
  render() {
    return (
      <div>
        <TwoPageBanner 
          currentUri="service"
        />
        <HomeFeature/>
      </div>
    )
  }
}
