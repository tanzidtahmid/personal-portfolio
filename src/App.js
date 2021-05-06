import React from 'react';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Home/Projects/Projects';
import Blogs from './components/Home/Blogs/Blogs';
import ContactWithMe from './components/ContactWithMe/ContactWithMe';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path ='/aboutMe'>
            <AboutMe></AboutMe>
          </Route>
          <Route path ='/projects'>
            <Projects></Projects>
          </Route>
          <Route path ='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path ='/contactWithMe'>
            <ContactWithMe></ContactWithMe>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;