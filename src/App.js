import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import NoMatch from './components/NoMatch';




const App = () => (
  <Fragment>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/contact' component={ContactForm} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
