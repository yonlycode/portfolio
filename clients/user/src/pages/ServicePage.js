import React, { Component } from 'react'
import ServiceFeature from '../components/ServiceFeature';
import ServiceTestimonial from '../components/ServiceTestimonial';
import PageBanner from '../components/PageBanner';

export default class ServicePage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Services"
          CurrentUri="service"
        />
        <ServiceFeature/>
        <ServiceTestimonial/>
      </div>
    )
  }
}
