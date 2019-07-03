import React, {Component} from "react";
import axios from "axios";
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
    axios.get("https://freckbeauty.com/wp-json/wp/v2/posts").then(posts => {
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
      <div>
        This is the Post List within the Blog Page
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
    );
  }
}

export default PostList;