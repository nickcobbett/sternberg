import React, { Component } from 'react';
import { Jumbotron, Button, PageHeader } from 'react-bootstrap';



class Jumbo extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      jumbo: {
        padding: '10px',
        textAlign: 'center'
      },
      header: {
        textAlign: 'center'
      }
    };

    const currentPage = this.props.currentPage;
    console.log(currentPage);

    return (
      <div>

        {currentPage === 'home' ? (
          <Jumbotron style={styles.jumbo}>
            <h1>Samuel Sternberg's Science Lab</h1>
            <p>For Only the Scientiest Scientists &reg;</p>
          </Jumbotron>
        ) :
        currentPage === 'about' ? (
          <PageHeader style={styles.header}>
            <h1>Meet the Team</h1>
          </PageHeader>
        ) : (
          null
        )}
      </div>
    )

  }
};

export default Jumbo;

