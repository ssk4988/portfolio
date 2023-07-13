import React from 'react';
import Header from './Header';
import './styles.css';
import './About.css';
import data from './assets/data.json';
import pfp from './assets/linkedinpfp.jpg';
import Education from './Education';
import { Avatar, Container } from '@mui/material';


function About() {
  let educationList = data.Education.map(val => <Education key={val.name} data={val}></Education>);
  return (
    <Container component='main' maxWidth='xl' className='root-container'>
      <div className='description'>
        <Avatar alt="Sachin Sivakumar" src={pfp} className='pfp' sx={{ width: '5rem', height: '5rem' }} />
        <p className='summary-statement'>Hi, I’m Sachin!
          I’m an aspiring competitive programmer with an interest in software development, artificial intelligence, and cybersecurity.
          This is a portfolio I made for showing off what I've done so far. Feel free to check out what I'm working on!
        </p>
      </div>
      <h3>Education</h3>
      <div>
        {educationList}
      </div>
    </Container>
  );
}

export default About;
