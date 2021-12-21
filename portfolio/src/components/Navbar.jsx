import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="menu-icon" onClick={ () => setIsMenuShown(!isMenuShown) }>
        <i className={ isMenuShown ? 'fas fa-times' : 'fas fa-bars' }></i>
      </div>
      <ul className={ isMenuShown ? 'menu-items-container active' : 'menu-items-container'} >
        { MenuItems.map(({ title, url, navClass }, index) => (
          <li key={ index }>
            <Link
              to={ url }
              className={ navClass }
            >
              { title }
            </Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default Navbar;
