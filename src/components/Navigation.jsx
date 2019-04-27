import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav class="nav">
    <ul className="horizontal-list">
      <li>
        <NavLink activeClassName="is-active" exact={true} to="/">
          Home
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
