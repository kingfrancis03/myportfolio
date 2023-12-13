import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from 'components/banner';
import myPhoto from '../../assets/22_francis.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page p-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={12} xl={6} className="text-center order-md-1 order-xl-2">
              <Col xs={10} md={8} lg={8} xl={8} className="mx-auto">
                  <img
                    src={myPhoto}
                    alt="Your Photo"
                    className="img-fluid rounded-circle shadow my-image"
                    style={{
                      padding: '10px',
                    }}
                  />
              </Col>
          </Col>
          <Col xs={12} md={12} lg={12} xl={6} className="mt-5 order-md-2 order-xl-1">
            <Banner />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
