// src/Components/Header.js

import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <NavLink to="/">
        <div className='main_header head'>
          <p>The</p>
          <h1 className='siren'>Siren</h1>
        </div>
      </NavLink>
      <div className="started">
        Get Started
      </div>
    </div>
  );
};

export default Header;
