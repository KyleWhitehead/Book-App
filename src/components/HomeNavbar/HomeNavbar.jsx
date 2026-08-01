import React, { useState } from 'react';
import Auth from '../Auth/Auth';
import logo from '../../assets/logo.png';
import './HomeNavbar.css';

const HomeNavbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__wrapper">

      <figure className="nav__img--mask">
        <img className="nav__img"
        src={logo} 
        alt="Logo" />
      </figure>
      <ul className="nav__list--wrapper">
        <li className="nav__list nav__list--login"
        onClick={() => setShowAuth(true)}
        >Login</li>

        <li className="nav__list nav__list--mobile">About</li>
        <li className="nav__list nav__list--mobile">Contact</li>
        <li className="nav__list nav__list--mobile">Help</li>
      </ul>
        </div>
        <Auth isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </nav>
  );
};

export default HomeNavbar;