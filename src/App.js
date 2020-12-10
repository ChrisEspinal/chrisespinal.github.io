import React, { Component } from 'react';
import logo from './chris.png';
// import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>  
          <li>
            <Link to="/about">AboutMe</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">ContactMe</Link>
          </li>
        </ul>
      </nav>   */}

     <div>
       <Link to="/">Home </Link>
       <Link to="/about">AboutMe </Link>
       <Link to="/projects">Projects </Link>
       <Link to="/contact">ContactMe </Link>
     </div>


        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={ContactMe}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

// function Navbar() {
//   return (
//     <div>
//       <Link to="/">Home </Link>
//       <Link to="/about">AboutMe </Link>
//       <Link to="/projects">Projects </Link>
//       <Link to="/contact">ContactMe </Link>
//     </div>
//   );
// };

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Chris and I'm going to master React!!!
        </p>
        <a
          className="App-link"
          href="https://github.com/ChrisEspinal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header> */}
