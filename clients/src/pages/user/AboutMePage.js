import React, { Component } from 'react'
import Welcome from '../../components/Welcome';
import Banner from '../../components/HomeBanner';
import Experience from '../../components/Experience';

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
