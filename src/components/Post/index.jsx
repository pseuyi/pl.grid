// @flow
import React from 'react';
import './index.css';
import { type Post } from 'components/types';

type Props = {|
  value: Post,
|}

export default ({ value }: Props) => (<div className="post">{value.url}</div>)
