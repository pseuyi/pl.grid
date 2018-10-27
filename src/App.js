// @flow
import React, { Component } from 'react';
import Feed from './components/Feed';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="header">
          pl.grid
        </header>
        <content className="content">
          <Feed/>
        </content>
      </div>
    );
  }
}

export default App;
