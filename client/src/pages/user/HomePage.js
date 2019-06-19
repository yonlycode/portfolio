import React, { Component } from 'react'
import Welcome from '../../components/Welcome/Welcome';
import Experience from '../../components/Experiences/Experience';
import HomeFeature from '../../components/Home-Feature/HomeFeature';
import HomeBanner from '../../components/stateless/banners/Home-Banner/HomeBanner'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeBanner title="Bienvenue"/>
        <Welcome/>
        <Experience/>
        <HomeFeature/>
        {/* <HomeGallerie/> */}
      </div>
    )
  }
}
