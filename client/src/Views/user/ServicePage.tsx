import React from 'react'
import HomeFeature from '../../Components/Home-Feature/HomeFeature';
import TwoPageBanner from '../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

const ServicePage = () => {
  let content = <>
    <TwoPageBanner 
      currentUri="service"
    />
    <HomeFeature/>
  </>
  return content
}
export default ServicePage