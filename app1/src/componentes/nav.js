import React from 'react';
import logo from '../logo.svg';
import './nav.scss';

let nav = () => {
  return(
    <div className="nav">
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <ul>
          <li>PORTAFOLIO</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default nav;