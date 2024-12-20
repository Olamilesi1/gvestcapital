import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import style from "../../styles/Header.module.css";

function Header() {

    const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
    <>
      <div className={style.headHi}>
        <div className={style.imgnav}>
          <img src="./images/logo.png" alt="img" className={style.logo} />

          <ul className={style.navUl}>
            <p className={style.ab} onClick={toggleDetails}>About</p>
            {showDetails && (
        <div className={style.about}>
          <p className={style.navLi}>
            <NavLink to="/overview">Overview</NavLink>
          </p>
          <p className={style.navLi}>
            <NavLink to="/team">Team</NavLink>
          </p>
          <p className={style.navLi}>
            <NavLink to="/gc-insight">GC's Insights</NavLink>
          </p>
        </div>
      )}
            <li className={style.navLi}>
              <NavLink to="/investment">Investments</NavLink>
            </li>
            <li className={style.navLi}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className={style.navLi}>
              <NavLink to="/ira-info">IRA</NavLink>
            </li>
          </ul>
        </div>

        <div className={style.numLog}>
          <p>097764842679</p> 
          <ul className={style.navUl}>
            <li className={style.navLi}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>

          <button className={style.invest}>Ready To Invest?</button>
        </div>

      </div>
    </>
  );
}

export default Header;
