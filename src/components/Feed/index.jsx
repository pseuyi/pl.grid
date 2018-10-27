// @flow
import React from 'react';
import Input from '../Input';
import Post from '../Post';
import './index.css';

type Props = {};
type State = {
  posts: string[],
};

class Feed extends React.PureComponent<Props, State> {
  state = {
    posts: ['foo', 'bar', 'baz']
  }
  render() {
    const { posts } = this.state;
    return(
      <div className="feed">
        feed component
        <Input/>
        {
          posts.map((post, idx) => (<Post key={idx} value={post}/>))
        }
      </div>
    )
  }
}

export default Feed;
