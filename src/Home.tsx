import React from 'react';
import Header from './Header';
import './styles.css';
import ReactFullpage from '@fullpage/react-fullpage';
import About from './About';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import Skills from './Skills';
import Awards from './Awards';
import Wrapper from './Wrapper';

function Home() {
  return (
    <ReactFullpage.Wrapper>
      <Wrapper name="About Me" id="about"><About /></Wrapper>
      <Wrapper name="Experience" id="experience"><ExperiencePage /></Wrapper>
      <Wrapper name="Projects" id="projects"><ProjectsPage /></Wrapper>
      <Wrapper name="Skills" id="skills"><Skills /></Wrapper>
      <Wrapper name="Awards" id="awards"><Awards /></Wrapper>
    </ReactFullpage.Wrapper>
  );
}

export default Home;
