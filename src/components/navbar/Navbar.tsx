import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

interface NavBarState {
  // Define state properties if needed
}

class NavBar extends Component<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Initialize state properties if needed
    };
  }

  render() {
   return(
    <Navbar expand="lg" className="bg-body-tertiary shadow">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
                About Me
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   )
  }
}

export default NavBar;