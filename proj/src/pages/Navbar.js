import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-background">
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
