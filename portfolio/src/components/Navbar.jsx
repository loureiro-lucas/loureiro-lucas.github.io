import React from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="menu-icon">
        { /* ícone do menu */ }
      </div>
      <ul className='menu-items-container'>
        { MenuItems.map(({ title, url, navClass }, index) => (
          <li
            key={ index }
            className={ navClass }
          >
            <Link to={ url }>
              { title }
            </Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default Navbar;
