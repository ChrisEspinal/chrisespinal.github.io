import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar.css";

function Navbar() {
    return (
        <div className="navBar">
            <div className="navLinks">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About Me</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact </Link>
            </div>
        </div>
    );
}

export default Navbar;

{/* <div className="navBar">
<nav>
  <ul>
    <li>
      <Link className="links" to="/">Home</Link>
    </li>  
    <li>
      <Link className="links" to="/about">AboutMe</Link>
    </li>
    <li>
      <Link className="links" to="/projects">Projects</Link>
    </li>
    <li>
      <Link className="links" to="/contact">ContactMe</Link>
    </li>
  </ul>
</nav>
</div>  */}