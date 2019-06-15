import React, { Component } from 'react'
import Welcome from '../../components/Welcome/Welcome';
import Experience from '../../components/Experiences/Experience';
import HomeFeature from '../../components/Home-Feature/HomeFeature';
import PageBanner from '../../components/stateless/banners/PageBanner';

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
