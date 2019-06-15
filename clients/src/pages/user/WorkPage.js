import React, { Component } from 'react'
import PageBanner from '../../components/stateless/banners/PageBanner';
import HomeGallerie from '../../components/HomeGallerie';

export default class WorkPage extends Component {
  render() {
    return (
      <div>
            <PageBanner 
              CurrentPage="Portfolio"
              CurrentUri="works"
            />
            <HomeGallerie/>
      </div>
    )
  }
}
