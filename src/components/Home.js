import React, { Component } from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import LandingPage from './LandingPage';
import { Container } from 'semantic-ui-react';

class Home extends Component {
  

  render(){
    return(
      <>
      <LandingPage />
      <hr />
      < AboutMe />
      <hr />
      < Projects />
      <hr />

      
      </>
    )
  }
}

export default Home;