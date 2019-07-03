import React, { Component } from 'react';
import axios from 'axios';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer/Footer';

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }

  render() {
    return(
      <div>
        <HomeHeader />
        <form className="contact-form" onSubmit={ (e) => this.formSubmit(e) }>
          <label class="message-name" htmlFor="message-name">Name *</label><br />
          <input name="name" class="message-name" type="text" placeholder="Remi" required />
          <br /><br />
          <label class="message-email" htmlFor="message-email">Email *</label><br />
          <input name="email" class="message-email" type="email" placeholder="your@email.com" required />
          <br /><br />
          <label class="message-email" htmlFor="message-email">Phone</label><br />
          <input name="phone" class="phone" type="phone" placeholder="213-123-4567" required />
          <br /><br />
          <label class="message" htmlFor="message-input">Message*</label><br />
          <textarea name="message" class="message-input" type="text" placeholder="Please write your message here" required />
          <br /><br />
          <div>
            <p>Get on our list?</p><br />
            <p>Yes, sign me up!</p>
            <p>No, thank you.</p>
          </div>
          <br />
          <div className="button--container">
              <button type="submit" className="button button-primary">SEND MESSAGE</button>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;