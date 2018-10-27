// @flow
import React from 'react';
import './index.css';

type Props = {|
  value: string,
|}

export default ({ value }: Props) => (<div className="post">{value}</div>)
