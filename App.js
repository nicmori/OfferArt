import React, { Component } from 'react';

import NavBar from './components/NavBar'
import ArtList from './components/ArtList'

import './App.css';

class App extends Component {
  render() {
    var searchInput;
    return (
      <div>
        <NavBar />
        <ArtList />
      </div>
    );
  }
}

export default App;
