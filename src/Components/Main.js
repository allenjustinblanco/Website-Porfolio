import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import LandingPage from './Landingpage';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Aboutme" component={AboutMe} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Contact" component={Contact} />
  </Switch>
)

export default Main;
