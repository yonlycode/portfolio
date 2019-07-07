import React from 'react'
import Welcome from '../../Components/Welcome/Welcome';
import Banner from '../../Components/stateless/banners/HomeBanner';
import Experience from '../../Components/Experiences/Experience';

const AboutMePage = () :React.FunctionComponentElement<{}> => {
  let content = <>
    <Banner/>
    <Welcome/>
    <Experience/>
  </>

  return content;
}
export default  AboutMePage 

