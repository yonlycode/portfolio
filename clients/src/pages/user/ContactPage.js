import React, { Component } from 'react'
import PageBanner from '../../components/stateless/banners/PageBanner';
import ContactForm from '../../components/forms/Contact-Form/ContactForm';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <PageBanner 
          CurrentPage="Contact"
          CurrentUri="contact"
        />
        <section className="contact_area p_120">
          <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>Paris, France</h6>
                                <p>Gagny</p>
                            </div>
                            {/* <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><a href="#">00 (440) 9865 562</a></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div> */}
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><a href="#">contact@eazys-dev.fr</a></h6>
                                <p>Toujours présent en cas de besoin.</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
