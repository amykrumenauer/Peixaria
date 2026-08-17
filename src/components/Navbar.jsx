import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">P e i x a r i a  &  E m p ó r i o  d o  V a l e</div>

      <ul className="nav-links">
        <li><a href="#home">H o m e</a></li>
        <li><a href="#produtos">P r o d u t o s</a></li>
        <li><a href="#sobre">S o b r e  n ó s</a></li>
        <li><a href="#contato">C o n t a t o</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
