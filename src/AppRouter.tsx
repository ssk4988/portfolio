import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import Skills from './Skills';
import Awards from './Awards';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<ExperiencePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/awards" element={<Awards/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
