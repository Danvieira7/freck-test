import React, { Component } from "react";
import axios from "axios";
import Link from 'next/link';
import FooterOptIn from './FooterOptIn';
import FooterNav from './FooterNav';
import RecentNews from './RecentNews';

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
      <div>
        <FooterOptIn />
      </div>
      <div>
        <FooterNav />
      </div>
      <div>
        <RecentNews />
      </div>
      <style jsx>{`
        #container {
          display: grid;
          grid-template-rows: 25% 50% 25%;
          grid-template-columns: 25% 50% 25%;
          background-color: #1c150f;
          color: #fff;
        }
      `}</style>
    </div>
    );
  };
}

export default Footer;