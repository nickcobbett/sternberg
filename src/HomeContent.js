import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader, Thumbnail} from 'react-bootstrap';

class HomeContent extends Component {
  render() {

    const styles = {
      label: {
        textAlign: 'center'
      }
    }

    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    return (
      <Grid style={styles}>
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <PageHeader>
              Samuel H. Sternberg, PhD
              <br />
              <small>A protein/RNA biochemist and CRISPR expert.</small>
            </PageHeader>

          </Col>
          <Col sm={6} md={6}>
            <Thumbnail alt="171x180" rounded src={"https://cdn.notonthehighstreet.com/system/product_images/images/002/055/115/original_glass-science-beaker.jpg"} />
            <h3 style={styles.label}>Look at this fucking beaker</h3>
          </Col>
        </Row>
      </Grid>
    )
  }
};

export default HomeContent;