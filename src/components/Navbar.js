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