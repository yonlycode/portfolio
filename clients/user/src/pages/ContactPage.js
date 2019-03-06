import React, { Component } from 'react'
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <ContactBanner/>
        <ContactForm/>
      </div>
    )
  }
}
