import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="navbar">
      <h4 id="brand">Lorent IT-Lösungen GmbH</h4>
      <ul id="link-container">
        <NavLink className="nav-link" activeClassName="active" exact to="/">
          Home
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
