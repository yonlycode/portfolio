import React, { Component } from 'react'
import HomeFeature from '../../components/Home-Feature/HomeFeature';
import TwoPageBanner from '../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

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
