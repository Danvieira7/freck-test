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
      <div>
        <div id="opt-in">
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
                <button type="submit">
                  JOIN
                </button>
              </div>
              <p style={show}>Thank you for joining the Freck Fam!</p>
          </form>
        </div>
      </div>
    );
  }
}

export default FooterOptIn;