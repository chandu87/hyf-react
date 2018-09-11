import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubSearch from './components/GithubSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello Week4 homework</h1>
      <GithubSearch/>
      </div>
    );
  }
}

export default App;
