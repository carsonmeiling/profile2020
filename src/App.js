import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';




const App = () => (
  <Fragment>
    <NavBar />
    <Container>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/contact' component={ContactForm} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
)

export default App;
