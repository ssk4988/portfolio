import React from 'react';
import Header from './Header';
import './styles.css';
import data from './assets/data.json';
import { Card, CardContent, Container } from '@mui/material';



function Awards() {
  let skillsobj = data.Skills as { [key: string]: string[] };
  return (
    <React.Fragment>
      <Header />
      <Container component='main' maxWidth='xl' className='root-container'>
        {Object.keys(data.Skills).map((category: string) => {
          let skillList = skillsobj[category];
          return <Card className="card">
            <CardContent>
                <h4>{category}</h4>
                <div className='row'>
                  {/* {skillList.map((skill: string) => { return <Skill name={skill} /> })} */}
                </div>
            </CardContent>
          </Card>;
        })}
      </Container>
    </React.Fragment>
  );
}

export default Awards;
