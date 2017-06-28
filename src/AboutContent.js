import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader, Thumbnail} from 'react-bootstrap';

class About extends Component {
  render() {

    const styles = {
      label: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'center'
      },
      thumbnail: {
        width: '100%',
        height: '0',
        paddingBottom: '100%'
        // maxWidth: '100%',
        // maxHeight: '100%'
      }
    }

    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    return (
      <Grid style={styles}>
        <Row className="show-grid">
          <Col sm={4} md={4}>
            <h1>Samuel H. Sternberg, PhD, is a protein/RNA biochemist and CRISPR expert.</h1>
            <br />
            <h3>He is the co-author, along with Jennifer Doudna, of A Crack in Creation, a forthcoming book about the discovery, development, and applications of CRISPR—Cas9 gene editing technology.</h3>

          </Col>
          <Col style={styles.label} sm={4} md={4}>
            <Thumbnail style={styles.thumbnail} alt="171x180" rounded src={"https://static1.squarespace.com/static/577844db9de4bb402782717f/t/590b6bfff5e23194d9b3d1d8/1493937588434/sam-sternberg-lab.jpg?format=300w"} />
          </Col>


        </Row>
      </Grid>
    )
  }
};

export default About;
