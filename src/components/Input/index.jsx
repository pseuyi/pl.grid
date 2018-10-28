// @flow
import React from "react";
import "./index.css";

type Props = {
  onSubmit: Function,
  setUrl: Function,
};

export default (props: Props) => {
  return (
    <form
      className="container"
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(true)
      }}
    >
      <input
        className="input"
        type="text"
        onChange={e => {
          props.setUrl({ url: e.target.value, source: 'youtube' })
        }}
      />
      <button type="submit">test</button>
    </form>
  );
};
