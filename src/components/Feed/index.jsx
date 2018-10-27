import React from 'react';
import Post from '../Post';
import './index.css';

class Feed extends React.PureComponent {
  state = {
    posts: ['foo', 'bar', 'baz']
  }
  render() {
    const { posts } = this.state;
    return(
      <div className="feed">
        feed component
        {
          posts.map(post => (<Post value={post}/>))
        }
      </div>
    )
  }
}

export default Feed;
