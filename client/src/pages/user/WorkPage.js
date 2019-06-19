import React, { Component } from 'react'
import HomeGallerie from '../../components/HomeGallerie';
import TwoPageBanner from '../../components/stateless/banners/TwoPageBanner/TwoPageBanner';

export default class WorkPage extends Component {
  render() {
    return (
      <div>
            <TwoPageBanner 
              currentUri="work"
            />
            <HomeGallerie/>
      </div>
    )
  }
}
