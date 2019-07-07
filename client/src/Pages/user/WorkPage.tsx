import React, { Component } from 'react'
import HomeGallerie from '../../Components/HomeGallerie';
import TwoPageBanner from '../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

const WorkPage = () => {
  let content = <>
    <TwoPageBanner 
      currentUri="work"
    />
    <HomeGallerie/>
  </>
  return content
}
export default WorkPage