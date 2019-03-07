import React, { Component } from 'react'
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Contact"
          CurrentUri="contact"
        />
        <ContactForm/>
      </div>
    )
  }
}
