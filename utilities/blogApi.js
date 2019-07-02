blogApi = 'https://freckbeauty.com/wp-json/wp/v2/posts';

async function getAll() {
  posts = await fetch(blogApi)
  .then(res => res.json())
  .then(post => {
    this.setState({
      post: postData[0]
    })
  })
}

module.exports = {
  getAll
}