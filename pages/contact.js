import React, { Component } from 'react';
import axios from 'axios';
import MainHeader from '../components/MainHeader';
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
        <MainHeader />
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <label className="message-name" htmlFor="message-name">
            Name *<link rel="icon" href="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/11/fav.png" />
          </label>
          <br />
          <input name="name" className="message-name" type="text" placeholder="Remi" required />
          <br />
          <br />
          <label className="message-email" htmlFor="message-email">
            Email *
          </label>
          <br />
          <input name="email" className="message-email" type="email" placeholder="your@email.com" required />
          <br />
          <br />
          <label className="message-email" htmlFor="message-email">
            Phone
          </label>
          <br />
          <input name="phone" className="phone" type="phone" placeholder="213-123-4567" required />
          <br />
          <br />
          <label className="message" htmlFor="message-input">
            Message*
          </label>
          <br />
          <textarea name="message" className="message-input" type="text" placeholder="Please write your message here" required />
          <br />
          <br />
          <div>
            <p>Get on our list?</p>
            <br />
            <p>Yes, sign me up!</p>
            <p>No, thank you.</p>
          </div>
          <br />
          <div className="button--container">
            <button type="submit" className="button button-primary">
              SEND MESSAGE
            </button>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;