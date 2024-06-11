import './styles.css';
import './About.css';
import data from './assets/data.json';
import pfp from './assets/linkedinpfp.jpg';
import Education from './Education';
import { Avatar, Container, IconButton, Link } from '@mui/material';
import { GitHub, LinkOutlined, LinkedIn } from '@mui/icons-material';

function About() {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sachin-sivakumar/');
  }
  const openGitHub = () => {
    window.open('https://github.com/ssk4988/');
  }
  const openPortfolio = () => {
    window.open('https://sachinsivakumar.netlify.app/');
  }
  let educationList = data.Education.map(val => <Education key={val.name} data={val}></Education>);
  return (
    <Container component='main' maxWidth='xl' className='root-container'>
      <div className='description'>
        <Avatar alt="Sachin Sivakumar" src={pfp} className='pfp' sx={{ width: '5rem', height: '5rem' }} />
        <p className='summary-statement'>Hi, I'm Sachin!
          I'm a competitive programmer, problem solver, and open-source contributor with an interest in software development, artificial intelligence, and cybersecurity.
          This is a portfolio I made for showing off what I've done so far. Feel free to check out what I'm working on!
        </p>
      </div>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={openLinkedIn}>
          <LinkedIn fontSize='large' />
        </IconButton>
        <IconButton onClick={openGitHub}>
          <GitHub fontSize='large' />
        </IconButton>
        <IconButton onClick={openPortfolio}>
          <LinkOutlined fontSize='large' />
        </IconButton>
      </Container>
      <h3>Education</h3>
      <div>
        {educationList}
      </div>
    </Container>
  );
}

export default About;
