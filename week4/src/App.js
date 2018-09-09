import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubSearch from './components/GithubSearch';

class App extends Component {
  render() {
    return (
      <div id="app">
      <GithubSearch />
    </div>
    );
  }
}

export default App;
