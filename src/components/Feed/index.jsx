// @flow
import React, { useEffect, useState } from 'react';
import { usePostForm } from 'hooks';
import Input from 'components/Input';
import Post from 'components/Post';
import './index.css';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const { response, setFormValue, submit } = usePostForm({});

  useEffect(
    () => {
      if (response.error) {
        setError(response.error);
      } else if (response.post) {
        setPosts([response.post, ...posts]);
      }
    },
    [response],
  )

  return (
    <div className="feed">
      feed component
      <Input onSubmit={submit} setUrl={setFormValue}/>
      { error }
      {
        posts.map((post, idx) => (<Post key={idx} value={post}/>))
      }
    </div>
  )
}

export default Feed;
