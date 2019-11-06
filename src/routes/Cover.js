
import React from 'react';
import { Link } from 'react-router-dom';
import bear from 'images/bear.png';

const Cover = () => (
  <div className="site-wrapper">
    <div className="masthead clearfix">
      <div className="inner">
        <h3 className="masthead-brand">kyaroru.com</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/apps" className="nav-link">My Apps</Link>
        </nav>
      </div>
    </div>
    <div className="talk">
      <p className="bubble thought">Welcome! My owner loves bear xD and Coding too!</p>
    </div>
    <div className="inner cover clearfix">
      <div className="bear-cub">
        <div className="body">
          <div className="leg leg-left" />
          <div className="leg leg-right" />
          <div className="leg leg-left-behind" />
          <div className="leg leg-right-behind" />
        </div>
        <div className="head">
          <div className="nose" />
          <div className="mouth" />
          <div className="eye eye-left" />
          <div className="eye eye-right" />
          <div className="ear ear-left" />
          <div className="ear ear-right" />
        </div>
      </div>
    </div>
    <footer className="fixed-bottom">
      <p className="text-white">
        <img src={bear} alt="bear" className="inline-icon" />
         Bear credits to:
        <a href="https://codepen.io/dark_mefody/pen/Pppaaa">Nikita Dubko</a>
      </p>
    </footer>
  </div>
);

export default Cover;
