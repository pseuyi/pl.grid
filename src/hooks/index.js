// @flow
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API;

type FormState = {|
  url: string,
  source: string,
|}


export const usePostForm = dispatch => {
  const initialValues = { url: '', source: 'youtube' };
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    () => {
      if (!!values.url) {
        setIsSubmitting(true);
        const data = { post: values };

        api(`${API}/posts`, 'post', { body: JSON.stringify(data) })
          .then(res => res.json())
          .then(({ payload }) => dispatch({ type: 'ADD_POST', payload }))
          .catch(error => dispatch({ type: 'ERROR', error }))
          .finally(() => {
            setIsSubmitting(false);
            setValues(initialValues);
          });
      }
    },
    [values.url]
  )

  return [
    { values, isSubmitting },
    { setValues },
  ];
}

const api = (endpoint, method = 'get', opts = {}) => {
  return fetch(endpoint, {
    method,
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
    },
    ...opts,
  })
}

export const fetchPosts = dispatch => {
  api(`${API}/posts`)
    .then(res => res.json())
    .then(({ payload }) => dispatch({ type: 'RECEIVE_POSTS', payload }))
    .catch(error => dispatch({ type: 'ERROR', error }));
}
