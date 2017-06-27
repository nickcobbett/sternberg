import React, { Component } from 'react';
import Jumbo from './Jumbo';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import AboutContent from './AboutContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
  }

  handleHomeClick() {
    this.setState({currentPage: 'home'});
  }

  handleAboutClick() {
    this.setState({currentPage: 'about'});
  }

  render() {

  // const styles = {
  //   content : {
  //     borderWidth: '1px',
  //     borderStyle: 'dashed',
  //     borderColor: 'red'
  //   }
  // };
  const currentPage = this.state.currentPage;

    return (
      <div className="App">
        <NavBar goToHome={this.handleHomeClick} goToAbout={this.handleAboutClick}/>
        <Jumbo />

        {currentPage === 'home' ? (
          <HomeContent />
        ) :
        currentPage === 'about' ? (
          <AboutContent />
        ) : (
          null
        )}
      </div>
    );
  }
}


export default App;