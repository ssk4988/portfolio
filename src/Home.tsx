import React from 'react';
import Header from './Header';
import './styles.css';

function Home() {
  return (
    <React.Fragment>
      <Header/>
      <div className='root-container'></div>
    </React.Fragment>
  );
}

export default Home;
