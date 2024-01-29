import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CardSkill from 'components/card';
import pythonLogo from '../../assets/python.png'
import javaScriptLogo from '../../assets/JavaScript-logo.png'
import mySqlLogo from '../../assets/mysql.png'
import VueLogo from '../../assets/vue.png'
import htmlCSSLogo from '../../assets/html-css.png'

interface SkillDetails {
  years: string,
  tools: string
}

interface Skill {
  logoImage: string,
  title: string,
  skillDetails: SkillDetails
}

interface SkillsState {
  // Define state properties if needed
  readonly skills: Skill[]
}

class Skills extends Component<{}, SkillsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
     skills: [
      {
        logoImage: pythonLogo,
        title: 'Python',
        skillDetails: {
          years: '> 3',
          tools: 'Used of Flask, Flask-sqlalchemy, Flask-restx, Flask-APScheduler. Back-end development'
        }
      },
      {
        logoImage: htmlCSSLogo,
        title: 'HTML and CSS',
        skillDetails: {
          years: '> 2',
          tools: 'Front-end Development'
        }
      },
      {
        logoImage: javaScriptLogo,
        title: 'JavaScript',
        skillDetails: {
          years: '> 2',
          tools: 'Vanilla, Front-end Development'
        }
      },
      {
        logoImage: mySqlLogo,
        title: 'MySql',
        skillDetails: {
          years: '> 3',
          tools: 'Relational Databases, Filtering, Back-end development'
        }
      },
      {
        logoImage: VueLogo,
        title: 'VueJS',
        skillDetails: {
          years: '> 2',
          tools: 'Used of Nuxt Framework Integrated in TypeScript'
        }
      }
      ]
    }
  }

  render() {
   return(
     <Container className="mt-4 d-flex flex-wrap justify-content-around">
        {this.state.skills.map((item, __) => (
           <CardSkill
            logoImage={item.logoImage}
            skill={item.title}
            skillDetails={item.skillDetails}
          />
        ))}
     </Container>
   )
  }
}

export default Skills;