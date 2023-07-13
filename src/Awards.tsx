import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Card, CardContent, Container } from '@mui/material';
import Award from './Award';



function Awards() {
  return (
    <Container component='main' maxWidth='xl' className='root-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.Awards.map(award => <Award key={award.award} data={award} />)}
    </Container>
  );
}

export default Awards;
