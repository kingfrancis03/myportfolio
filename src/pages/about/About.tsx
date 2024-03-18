import React, { Component } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import coffePhoto from '../../assets/coffee.jpg';
import Button from 'react-bootstrap/Button';
import myResume from '../../assets/CV-Francis-Magtuto.pdf';

import './About.css'

interface AboutState {
  // Define state properties if needed
}

class About extends Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Initialize state properties if needed
    };
  }

  handleDownloadResume(): void {
    const resumeFilePath = myResume;
    const resumeFileURL = resumeFilePath;
    const downloadLink = document.createElement('a');

    downloadLink.href = resumeFileURL;
    downloadLink.download = 'francis_magtuto_cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  render() {
    return (
      <div className="about-page h-100">
         <div className='photo-banner'>
              <div className="overlay"></div>
              <img
                src={ coffePhoto }
                alt="Your Photo"
                className="coffee-img"
              />
          </div>
          <Container>
              <Row className='pt-5'>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Who am I Professionally?</Accordion.Header>
                    <Accordion.Body>
                      <p>&emsp;My Fullname is <b>Francis Oscar Timbol Magtuto</b>. I'm a Web Developer with a primary focus on <b>back-end APIs</b>(Python). Although my expertise lies in back-end development, I am also proficient in <b>front-end development</b>(VueJS) and handle those tasks when they are easy and no other developers are available. In my role, my main responsibility is to create REST APIs that <b>retrieve data from databases or other third-party APIs</b> and process it to meet the front-end requirements. I handle <b>data validation and ingestion</b> to ensure that the system's needs are met. Additionally, I am responsible for <b>debugging and investigating any bugs or errors</b> that may arise. In summary, my tasks primarily revolve around back-end development and coding; however, I also have the capability to handle front-end tasks when necessary.</p>
                      <Button variant="primary" onClick={this.handleDownloadResume}>Download my CV</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Get To Know Me More</Accordion.Header>
                    <Accordion.Body>
                      <p>&emsp;You can call me <b>Francis</b>. I'm a son, grandson, brother, uncle, churchmate, and a friend. I’m a proud follower and disciple of Jesus Christ. </p>
                      <p>&emsp;I love learning things that interest me. I'm kind of a geek when it comes to science and other stuff, but I'm not a genius like Sheldon from "The Big Bang Theory." If something catches my interest, I'll research and think about it. I enjoy thinking, which is why I chose programming. Coding, for me, is like solving a puzzle—addressing problems and finding solutions. However, I'm not exceptionally smart; I just enjoy the process of thinking. </p>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/kuyafrancis.magtuto" target="_blank" rel="noopener noreferrer">
                          <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/kingdawba/" target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                        <a href="https://twitter.com/KuysFrancis"  target="_blank" rel="noopener noreferrer">
                          <FaTwitter />
                        </a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Row>
            </Container>
      </div>
    );
  }
}

export default About
