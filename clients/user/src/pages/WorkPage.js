import React, { Component } from 'react'
import PageBanner from '../components/PageBanner';
import WorkGallery from '../components/WorkGallery';

export default class WorkPage extends Component {
  render() {
    return (
      <div>
            <PageBanner 
              CurrentPage="Portfolio"
              CurrentUri="works"
            />
            <WorkGallery/>
      </div>
    )
  }
}
