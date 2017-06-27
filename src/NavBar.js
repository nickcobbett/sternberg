import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {

  render() {

    const styles = {
      marginBottom: '0'
      // backgroundColor: 'black',
      // borderWidth: '20px',
      // borderColor: 'black'
    };

    return (
      <Navbar style={styles} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={this.props.goToHome}>Home</NavItem>
            <NavItem onClick={this.props.goToAbout}>About</NavItem>
            <NavItem eventKey={2} href="#">Publications</NavItem>
            <NavDropdown eventKey={3} title="Favorite Sexual Positions" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;