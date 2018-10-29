// @flow
import React, { useState, useReducer, useEffect } from 'react';
import { postState, postReducer } from 'ducks';
import { usePostForm, fetchPosts } from 'hooks';
import Input from 'components/Input';
import Post from 'components/Post';
import './index.css';

function Feed() {
  const [state, dispatch] = useReducer(postReducer, postState);
  // const [formState, formActions] = usePostForm({}, dispatch);
  const { posts, error } = state;

  useEffect(
    () => {
      if (!posts.length) fetchPosts(dispatch);
    },
    [posts]
  );

  return (
    <div className="feed">
      feed component
      <Input dispatch={dispatch} />
      { error }
      {
        posts.map((post, idx) => (<Post key={idx} value={post}/>))
      }
    </div>
  )
}

export default Feed;
