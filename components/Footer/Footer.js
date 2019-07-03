import React, { Component } from "react";
import axios from "axios";
import Link from 'next/link';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get("https://freckbeauty.com/wp-json/wp/v2/posts").then(posts => {
      this.setState({
        posts: posts.data.slice(0, 4)
      });
    });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
    <div id="container">
      <div id="uno">
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
      <div id="dos">
        This is the center div will all the links.
      </div>
      <div id="tres">
        RECENT NEWS
        {this.state.posts.map(post => (
          <div className="card" key={post.id}>
              <div className="card-content">
            <Link href={post.slug} key={post.id}>
                <a>
                  <h3>{post.title.rendered}</h3>
                </a>
            </Link>
              </div>
            </div>
        ))}
      </div>
      <style jsx>{`
        #container {
          display: grid;
          grid-template-rows: 25% 50% 25%;
          grid-template-columns: 25% 50% 25%;
        }
        #uno {
          background-color: lavender;
        }
        #dos {
          background-color: coral;
        }
        #tres {
          background-color: peachpuff;
        }
      `}</style>
    </div>
    );
  };
}

export default Footer;