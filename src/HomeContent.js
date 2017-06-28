import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader, Thumbnail} from 'react-bootstrap';

class HomeContent extends Component {
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
        maxWidth: '100%',
        maxHeight: '100%'
      }
    }

    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    return (
      <Grid style={styles}>
        <Row className="show-grid">
          <Col sm={4} md={4}>
            <h1>
              A Science Lab with Nice Instruments and Algorithms</h1>
              <br />
              <h3>We specialize in using fancy algorithms to pour precise quantities of liquids.</h3>

          </Col>
          <Col style={styles.label} sm={4} md={4}>
            <Thumbnail alt="171x180" rounded src={"https://cdn.notonthehighstreet.com/system/product_images/images/002/055/115/original_glass-science-beaker.jpg"} />
            <h3>Quality Instruments</h3>
            <p>Look at this fucking beaker</p>
          </Col>

          <Col style={styles.label} sm={4} md={4}>
            <Thumbnail alt="171x180" rounded src={"http://www.thinkgeek.com/images/products/zoom/rubix_cube.jpg"} />
            <h3>Fancy Algorithms</h3>
            <p>2 + 2 = 5</p>
          </Col>
        </Row>
      </Grid>
    )
  }
};

export default HomeContent;