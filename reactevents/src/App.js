import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import TimerButton from './TimerButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            <TimerButton/>
        </header>
          <h3>Score: <br/></h3>
          <ScoreKeeper score= {0}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
