import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Avatar, Container } from '@mui/material';
import Experience from './Experience';



function ExperiencePage() {
  let experienceList = data.Experience.map(experience => <Experience key={experience.company} experience={experience}></Experience>);
  return (
    <Container component='main' maxWidth='xl' className='root-container'>
      {experienceList}
    </Container>
  );
}

export default ExperiencePage;
