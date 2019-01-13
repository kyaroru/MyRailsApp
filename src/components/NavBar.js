import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className='navbar navbar-dark navbar-expand-sm navbar-fixed-top' style={{ backgroundColor: '#333' }}>
    <div className='container'>
      <button aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' className='navbar-toggler navbar-toggler-right' data-target='#navbarNav' data-toggle='collapse' type='button'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <NavLink to="/" className="nav-link" activeClassName="active">kyaroru.com</NavLink>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/apps" className="nav-link" activeClassName="active">My Apps</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar;