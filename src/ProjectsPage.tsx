import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Container } from '@mui/material';
import Project from './Project';



function ProjectsPage() {
  let projectList = data.Projects.map(project=><Project key={project.name} data={project}></Project>);
  return (
    <React.Fragment>
      <Header />
      <Container component='main' maxWidth='xl' className='root-container'>
        {projectList}
      </Container>
    </React.Fragment>
  );
}

export default ProjectsPage;