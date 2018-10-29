// @flow
import React, { useState } from "react";
import "./index.css";
import { usePostForm } from 'hooks';

type Props = {|
  dispatch: Function,
|};

export default (props: Props) => {
  const [url, setUrl] = useState('');
  const [formState, formActions] = usePostForm(props.dispatch);

  return (
    <form
      className="container"
      onSubmit={e => {
        e.preventDefault();
        formActions.setValues({ url, source: 'youtube' });
        setUrl('');
      }}
    >
      <input
        className="input"
        type="text"
        onChange={e => setUrl(e.target.value)}
        value={url}
      />
      <button
        type="submit"
        disabled={formState.isSubmitting}
      >
        test
      </button>
    </form>
  );
};
