import React, { Component } from "react";
import axios from 'axios';
import Link from 'next/link';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed")
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div id="container">
        <div id="posts-container">
          {this.state.posts.map(post => (
            <div className="card" key={post.id}>
              <Link href={`/post?slug=${post.slug}&apiRoute=post`} as={post.slug} key={post.id}>
                <a>
                  <div id="single-post-container">
                    <div id="img-container" role="img">
                      <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="featured post" />
                    </div>
                    <div id="title-container" role="link">
                      <p>{post.title.rendered.replace(`&#8217;`, `'`).replace(`&#038;`, '&')}</p>
                      <p className="category"><i>{post._embedded['wp:term']['0']['0'].name}</i></p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <style jsx>{`
          #container {
            display: flex;
            justify-content: center;
          }
          #posts-container {
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            justify-content: center;
          }
          #single-post-container {
            min-height: 370px;
          }
          #img-container {
            max-width: 300px;
            max-height: 300px;
            margin: 20px;
            overflow: hidden;
            object-fit: scale-down;
          }
          img {
            width: 150%;
          }
          #title-container {
            max-width: 300px;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          i {
            text-transform: uppercase;
          }
          `}</style>
      </div>
    );
  }
};

export default PostList;