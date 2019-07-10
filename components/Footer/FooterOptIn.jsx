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
          <form action="/signup" method="POST">
              <div className="form-group">
                  <label className="form-label" htmlFor="firstname">First Name</label>
                  <input className="form-input" type="text" name="firstname" id="firstname"/>
              </div>
              <div className="form-group">
                  <label className="form-label" htmlFor="lastname">Last Name</label>
                  <input className="form-input" type="text" name="lastname" id="lastname"/>
              </div>
              <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-input" type="text" name="email" id="email"/>
              </div>
              <input type="submit" value="JOIN"/>
          </form>
        </div>
        <style jsx>{`
        `}</style>
      </div>
    );
  }
}

export default FooterOptIn;