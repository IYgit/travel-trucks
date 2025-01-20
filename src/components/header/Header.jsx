import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.css';
import logo from '../../img/logo.svg'; // імпортуємо SVG файл

const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/catalog", label: "Catalog" }
];

const Header = () => {
  return (
    <header>
      <div className={css.header_wrapper}>
        <Link to="/">
          <img src={logo} alt="Logo" className={css.header_logo} />
        </Link>
        <nav className={css.header_navigation}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              className={({ isActive }) => (isActive ? css.active_link : css.navigation_link)}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
