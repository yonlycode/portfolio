import React, { Component } from 'react'
import AboutMeBanner from '../components/AboutMeBanner';
import AboutMeWelcome from '../components/AboutMeWelcome';
import AboutMeTestimonial from '../components/AboutMeTestimonial';

export default class AboutMePage extends Component {
  render() {
    return (
      <div>
        <AboutMeBanner/>
        <AboutMeWelcome/>
        <AboutMeTestimonial/>
      </div>
    )
  }
}
