import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CardSkill from 'components/card';
import { connect } from 'react-redux';
import { Skills as Skill } from 'typings/skills';

interface SkillsState {
  readonly skills: Skill[]
}

interface SkillsProp {
  readonly skills: Skill[]
}


class Skills extends Component<SkillsProp, SkillsState> {
  constructor(props: SkillsProp) {
    super(props);
  }

  render() {
  const skills = this.props.skills
  
  return(
     <Container className="mt-4 d-flex flex-wrap justify-content-around">
        {skills.map((item, __) => (
           <CardSkill
            logoImage={item.logoImage}
            skill={item.title}
            skillDetails={item.skillDetails}
          />
        ))
        }
     </Container>
   )
  }
}

const mapStateToProps: any = (state: any) => {

  return {
    skills: state.skillStore.skills
  };
};

export default connect(mapStateToProps)(Skills);