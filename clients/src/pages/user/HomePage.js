import React, { Component } from 'react'
import Welcome from '../../components/Welcome';
import Experience from '../../components/Experience';
import HomeFeature from '../../components/HomeFeature';
import PageBanner from '../../components/PageBanner';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Home"
          CurrentUri="/"
        />
        <Welcome/>
        <Experience/>
        <HomeFeature/>
        {/* <HomeGallerie/> */}
      </div>
    )
  }
}
