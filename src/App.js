import React, { Component } from 'react';
import NavBar from './NavBar.js';
import './App.css';

class App extends Component {
  render() {

  const navStyle = {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'red'
  };

    return (
      <div className="App">
        <NavBar style={navStyle} />
        <h2 style={navStyle}>Sam Sternberg</h2>
      </div>
    );
  }
}


export default App;