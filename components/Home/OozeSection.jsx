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
        <div>
          <h2>
            Ooze
          </h2>
          <Link href="blog">
            <button>Read the blog</button>
          </Link>
        </div>
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
          #ooze-container {
            color: #e4d8c7;
            background-color: #af492f;
            height: 425px;
            display: flex;
            justify-content: space-between;
          }
          #post-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          #img-container {
            max-width: 300px;
            max-height: 300px;
            margin: 10px;
            overflow: hidden;
            object-fit: scale-down;
          }
          img {
            width: 150%;
          }
          #title-container {
            width: 300px;
            margin-left: 10px;
            text-align: center;
          }
          i {
            text-transform: uppercase;
          }
        `}</style>
      </div>
    );
  }
};

export default Ooze;