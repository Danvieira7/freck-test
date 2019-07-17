import React, {Component} from 'react';
import axios from 'axios';
import Link from 'next/link';

class Ooze extends Component {
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
          posts: posts.data.slice(0, 3)
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div id="ooze-container">
        <h2>
          Ooze
        </h2>
        <Link href="blog">
          <button>Read the blog</button>
        </Link>
        <div id="post-container">
          {this.state.posts.map(post => (
            <div className="card" key={post.id}>
              <Link href={post.slug} key={post.id}>
                <a>
                  <div id="news-container">
                    <div id="img-container" role="img">
                      <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="featured post" />
                    </div>
                    <div id="title-container" role="link">
                      {post.title.rendered}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <style jsx>{`
          #ooze-container {
            color: #e4d8c7;
            background-color: #af492f;
            height: 425px;
          }
          #post-container {
            display: flex;
            flex-wrap: wrap;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          #img-container {
            min-width: 75px;
            max-width: 75px;
            height: 75px;
            overflow: hidden;
            margin: 10px;
          }
          #title-container {
            width: 75px;
          } 
          img {
            height: 75px;
          }
        `}</style>
      </div>
    );
  }
};

export default Ooze;