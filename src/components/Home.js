import React, { Component } from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import LandingPage from './LandingPage';

class Home extends Component {

  render(){
    return(
      <>
      <LandingPage />
      <hr />
      < Projects />
      <hr />
      < AboutMe />
      <hr />

      
      </>
    )
  }
}

export default Home;