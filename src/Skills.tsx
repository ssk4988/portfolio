import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Container } from '@mui/material';



function Skills() {
  // let projectList = data.Projects.map(project=><Project key={project.name} data={project}></Project>);
  return (
    <React.Fragment>
      <Header />
      <Container component='main' maxWidth='xl' className='root-container'>
        {/* {Object.keys(data.Skills).map((category: string)=>{
          // let skillList = data.Skills[category];
          // console.log(skillList);
          console.log(category);
          return <></>;
        })} */}
      </Container>
    </React.Fragment>
  );
}

export default Skills;
