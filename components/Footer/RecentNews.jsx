import React, {Component} from "react";
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
    axios.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed")
      .then(posts => {
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
      <p className="footer-nav-title">RECENT NEWS</p>
      {this.state.posts.map(post => (
        <div className="card" key={post.id}>
          <Link href={post.slug} key={post.id}>
            <a>
              <div id="news-container">
                <div id="img-container" role="img">
                  <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="featured post" />
                </div>
                <div id="title-container" role="link">
                  {post.title.rendered.replace(`&#8217;`, `'`).replace(`&#038;`, '&')}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
      <div>
        <Link>
            <a className="see-all">SEE ALL</a>
        </Link>
      </div>
      <style jsx>{`
        #recent-news {
          padding-left: 5px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        #news-container {
          display: flex;
          padding-bottom: 20px;
        }
        #img-container {
          min-width: 75px;
          max-width: 75px;
          height: 75px;
          overflow: hidden;
        }
        #title-container {
          padding-left: 20px;
          display: flex;
          align-items: center;
        } 
        img {
          height: 75px;
        }
        .see-all {
          color: #9a8470;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      `}</style>
    </div>
    );
  };
}

export default RecentNews;