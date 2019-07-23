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
        <div id="button-container">
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
                  <div id="ooze-news-container">
                    <div id="ooze-img-container" role="img">
                      <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="featured post" />
                    </div>
                    <div id="ooze-title-container" role="link">
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
            display: flex;
            justify-content: space-between;
            color: #e4d8c7;
            background-color: #af492f;
            height: 425px;
          }
          #button-container {
            padding-top: 9%;
            padding-left: 5%;
          }
          button {
            width: 200px;
            min-height: 45px;
            background-color: transparent;
            border: solid;
            border: 1px solid #e4d8c7;
            color: #e4d8c7;
            font-family: Helvetica, Verdana, Arial, sans-serif;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 18px;
          }
          h2 {
            font-size: 100px;
            text-transform: uppercase;
          }
          #post-container {
            display: flex;
            align-items: center;
          }
          #ooze-news-container {
            min-height: 370px;
          }
          #ooze-img-container {
            max-width: 300px;
            max-height: 300px;
            margin: 10px;
            overflow: hidden;
            object-fit: scale-down;
          }
          img {
            width: 150%;
          }
          #ooze-title-container {
            max-width: 300px;
            text-align: center;
          }
          a {
            color: #fff;
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

export default Ooze;