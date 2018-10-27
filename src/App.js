import React, { Component } from 'react';
import Feed from './components/Feed';
import './App.css';

class App extends Component {
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
