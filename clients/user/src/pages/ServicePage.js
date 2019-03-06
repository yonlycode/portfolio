import React, { Component } from 'react'
import ServiceFeature from '../components/ServiceFeature';
import ServiceTestimonial from '../components/ServiceTestimonial';
import ServiceBanner from '../components/ServiceBanner';

export default class ServicePage extends Component {
  render() {
    return (
      <div>
        <ServiceBanner/>
        <ServiceFeature/>
        <ServiceTestimonial/>
      </div>
    )
  }
}
