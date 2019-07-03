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
    axios.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed").then(posts => {
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
    <div>
      RECENT NEWS
      {this.state.posts.map(post => (
        <div className="card" key={post.id}>
          <Link href={post.slug} key={post.id}>
            <a>
              <div id="news-container">
                <div id="img-container">
                  <img src={post._embedded['wp:featuredmedia']['0'].source_url} />
                </div>
                <div id="title-container">
                  {post.title.rendered}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        a {
          color: #fff
        }
        #news-container {
          display: flex;
        }
        #img-container {
          min-width: 75px;
          max-width: 75px;
          height: 75px;
          overflow: hidden;
        }
        #title-container {
        } 
        img {
          height: 75px;
        }
      `}</style>
    </div>
    );
  };
}

export default RecentNews;