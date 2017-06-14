import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Reader from "./reader/Reader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome  to my Rss Reader on React</h2>
        </div>
      <Reader/>
      </div>
    );
  }
}

export default App;
