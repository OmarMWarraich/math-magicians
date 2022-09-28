import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', name: 'Welcome' },
    { id: 2, path: '/calculator', name: 'Calculator' },
    { id: 3, path: '/quote', name: 'Quote' },
  ];

  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active" exact>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
