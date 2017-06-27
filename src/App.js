import React, { Component } from 'react';
import Jumbo from './Jumbo';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  render() {

  // const styles = {
  //   content : {
  //     borderWidth: '1px',
  //     borderStyle: 'dashed',
  //     borderColor: 'red'
  //   }
  // };

    return (
      <div className="App">
        <NavBar />
        <Jumbo />

        {this.state.currentPage === 'home' ?

        <HomeContent /> :
        null

        }
      </div>
    );
  }
}


export default App;