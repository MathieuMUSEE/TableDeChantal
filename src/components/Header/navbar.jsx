import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href='/' className='Logo'>
        <img src='assets/logo.png' alt=" " style={{width: "50px", height: "50px", float: "left"}}/>
      </a>
      <p className='titre'>La table de Chantal</p>
      <ul>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/boissons">Boissons</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

// <img src='assets/facebook.png' alt = " "/>