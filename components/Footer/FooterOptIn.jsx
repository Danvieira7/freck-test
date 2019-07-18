import React, {Component} from 'react';

class FooterOptIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
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

      if (this.state) {
        this.state.value = '';
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div id="opt-in">
          <h3>Enter the Freck Fam</h3>
          <br/>
          <p>We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam.</p>
          <form onSubmit={this.handleSubmit}>
              <div>
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
              </div>
              <button type="submit">
                JOIN
              </button>
          </form>
        </div>
        <style jsx>{`
        `}</style>
      </div>
    );
  }
}

export default FooterOptIn;