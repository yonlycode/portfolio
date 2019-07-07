import React, { Component } from 'react'
import Welcome from '../../Components/Welcome/Welcome';
import Banner from '../../Components/stateless/banners/HomeBanner';
import Experience from '../../Components/Experiences/Experience';

export default class AboutMePage extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Welcome/>
        <Experience/>
      </div>
    )
  }
}
