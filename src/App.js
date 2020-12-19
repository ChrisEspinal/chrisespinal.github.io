import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={ContactMe}/>
            <Route components={Error}/>
          </Switch>
      </Router>
    </main>
  );
}


export default App;
