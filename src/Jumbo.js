import React, { Component } from 'react';
import { Jumbotron, Button, PageHeader } from 'react-bootstrap';



class Jumbo extends Component {
  render() {

    const styles = {
      padding: '10px',
      textAlign: 'center'
    };


    return (
      <Jumbotron style={styles}>
        <h1>Samuel Sternberg's Science Lab</h1>
        <p>For Only the Scientiest Scientists &reg;</p>
      </Jumbotron>

     /* <PageHeader>Samuel H. Sternberg <small>The scientiest scientest</small></PageHeader> */
    )
  }
};

export default Jumbo;