import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Card, CardContent, Container } from '@mui/material';
import Skill from './Skill';



function Skills() {
  let skillsobj = data.Skills as { [key: string]: string[] };
  return (
    <Container component='main' maxWidth='xl' className='root-container' sx={{ textAlign: 'center' }}>
      {Object.keys(data.Skills).map((category: string) => {
        let skillList = skillsobj[category];
        return <Card className="skill-card" key={category} sx={{ display: 'inline-block', textAlign: 'center' }}>
          <CardContent>
            <h1>{category}</h1>
            <div className='row'>
              {skillList.map((skill: string) => { return <Skill name={skill} key={skill}/> })}
            </div>
          </CardContent>
        </Card>;
      })}
    </Container>
  );
}

export default Skills;
