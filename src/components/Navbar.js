import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar.css";

function Navbar() {
    return (
        <div class="navBar">
            <div class="navLinks">
                <Link class="link" to="/">Home</Link>
                <Link class="link" to="/about">About Me</Link>
                <Link class="link" to="/projects">Projects</Link>
                <Link class="link" to="/contact">Contact </Link>
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