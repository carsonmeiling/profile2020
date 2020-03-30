import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';




const App = () => (
  <Fragment>
    <NavBar />
    {/* <Container> */}
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/contact' component={ContactForm} />
      <Route exact path ='/projects' component={Projects} />
      <Route exact path ='/about' component={AboutMe} />
      <Route component={NoMatch} />
    </Switch>
    {/* </Container> */}
    <Footer />
  </Fragment>
)

export default App;
