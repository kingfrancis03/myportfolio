import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface FooterState {
  // Define state properties if needed
}

class Footer extends Component<{}, FooterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Initialize state properties if needed
    };
  }

  render() {
   return(
    <footer className="bg-transparent py-4 mt-auto">
        <Container>
        <Row>
            <Col>
            <p className="text-center small text-muted">
                © 2023 Francis Oscar Magtuto. All rights reserved.
            </p>
            </Col>
        </Row>
        </Container>
    </footer>
   )
  }
}

export default Footer;