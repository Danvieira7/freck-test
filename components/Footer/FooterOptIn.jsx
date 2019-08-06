import React, { Component } from 'react';
import { subscribeToNewsletter } from '../../config/public';

class FooterOptIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      value: '',
      subscribed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const email = (this.state && this.state.value) || null;
    if (this.state && !email) {
      return;
    }

    try {
      await subscribeToNewsletter({ email });
      this.setState({subscribed: !this.state.subscribed});
      if (this.state) {
        this.state.value = '';
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const hide = {
      display: this.state.subscribed ? 'none' : 'block'
    };
    const show = {
      display: this.state.subscribed ? 'block' : 'none'
    }
    return (
      <div id="opt-in">
        <div>
          <h3>Enter the Freck Fam</h3>
          <br/>
          <p>We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam.</p>
          <form onSubmit={this.handleSubmit}>
              <div id="form-container" style={hide}>
                <label
                  className="form-label"
                  htmlFor="email"
                >
                  Email *
                </label>
                <br/>
                <input
                  value={this.state.value}
                  className="form-input"
                  type="email"
                  required
                  id="email"
                  onChange={this.handleChange}
                />
                <br/>
                <button type="submit">
                  JOIN
                </button>
              </div>
              <p style={show}>Thank you for joining the Freck Fam!</p>
          </form>
        </div>
        <style jsx>{`
          p {
            padding-bottom: 20px;
          }
          input {
            padding: 8.5px 10px;
            margin-top: 4px;
          }
          button {
            margin-top: 15px;
            font-size: 16px;
            line-height: 1.2em;
            border-radius: 0px;
            background: #a73e24;
            border-color: #a73e24;
            color: #f7f8f6;
            padding: 8.5px 40px;
          }
          h3 {
            font-family: 'Eksell Display Medium';
            src: url('../.next/static/fonts/Eksell-Display-Medium.otf');
            font-size: 28px;
          }
        `}</style>
      </div>
    );
  }
}

export default FooterOptIn;