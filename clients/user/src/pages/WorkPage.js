import React, { Component } from 'react'
import WorkBanner from '../components/WorkBanner';
import WorkGallery from '../components/WorkGallery';

export default class WorkPage extends Component {
  render() {
    return (
      <div>
            <WorkBanner/>
            <WorkGallery/>
      </div>
    )
  }
}
