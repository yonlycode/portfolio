import React, { Component } from 'react'
import Banner from '../components/HomeBanner';
import Welcome from '../components/Welcome';
import HomeFeature from '../components/HomeFeature';
import HomeGallerie from '../components/HomeGallerie';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Welcome/>
        <HomeFeature/>
        <HomeGallerie/>
      </div>
    )
  }
}
