import React, { Component } from 'react'
import Welcome from '../../components/Welcome/Welcome';
import Banner from '../../components/stateless/banners/HomeBanner';
import Experience from '../../components/Experiences/Experience';

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
