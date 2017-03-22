import React, { Component } from 'react';
import Enter from './page/Enter';
import History from './page/History';
import Taiwan from './page/Taiwan';
import International from './page/International';
import Civilservant from './page/Civilservant';
import Solution from './page/Solution';
import Hacker from './page/Hacker';
import License from './page/License';
import './Analytics';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Enter />
        <History />
        <Taiwan />
        <International />
        <Civilservant />
        <Solution />
        <Hacker />
        <License />
      </div>
    );
  }
}

export default App;
