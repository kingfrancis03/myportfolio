import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import pythonLogo from '../../assets/python.png'

interface CardSkillProp {
    logoImage: string,
    skill: string,
    skillDetails: {
      years: string,
      tools: string
    }
  }

class CardSkill extends Component<CardSkillProp, {}> {
  constructor(props: CardSkillProp) {
    super(props);
    
  }

  render() {
   return(
    <Card className='bg-light m-2' style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={this.props.logoImage}
        className="img-fluid mx-auto d-block p-4"
        style={{ width: '150px', height: '150px' }}
    />
      <Card.Body className="text-left">
        <Card.Title> <h2>{this.props.skill}</h2> </Card.Title>
        <div style={{ fontSize: '1rem'  }}>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><b>Years of Experience: </b> {this.props.skillDetails.years}</ListGroup.Item>
            <ListGroup.Item><b>Details: </b>{this.props.skillDetails.tools}</ListGroup.Item>
          </ListGroup>          
        </div>
      </Card.Body>
    </Card>
   )
  }
}

export default CardSkill;