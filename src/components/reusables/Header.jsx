import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import style from "../../styles/Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <div className={style.headHi}>
      {/* Logo Section */}
      <div className={style.logoH}>
        <NavLink to="/">
          <img
            src="./images/gVestLogo.png"
            alt="gVest Logo"
            className={style.logo}
          />
        </NavLink>
      </div>

      {/* Navigation Menu */}
      <nav
        ref={menuRef}
        className={`${style.nav} ${isMenuOpen ? style.showMenu : ""}`}
      >
        <ul className={style.navUl}>
          <li className={style.navLi}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink
              to="/investment"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Investments
            </NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink
              to="/ira-info"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              IRA
            </NavLink>
          </li>
        </ul>

        {/* Responsive numLog */}
        <div className={style.numLogR}>
          <ul className={style.navUl}>
            <li className={style.navLi}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
          <button className={style.invest}>Ready To Invest?</button>
        </div>
      </nav>

      {/* Always Visible Section */}
      <div className={style.numLog}>
        <ul className={style.navUl}>
          <li className={style.navLi}>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <button className={style.invest}>Ready To Invest?</button>
      </div>

      {/* Hamburger Menu */}
      <div className={style.menuIcon} onClick={toggleMenu}>
        <div className={isMenuOpen ? style.barOpen : style.bar}></div>
        <div className={isMenuOpen ? style.barOpen : style.bar}></div>
        <div className={isMenuOpen ? style.barOpen : style.bar}></div>
      </div>
    </div>
  );
}

export default Header;
