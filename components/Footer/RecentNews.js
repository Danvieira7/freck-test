import React, { Component } from "react";
import axios from "axios";
import Link from 'next/link';
class RecentNews extends Component {
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
    <div id="recent-news">
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
      <style jsx>{`
        #recent-news {
          height: 100%;
        }
        a {
          color: #fff
        }
      `}</style>
    </div>
    );
  };
}

export default RecentNews;