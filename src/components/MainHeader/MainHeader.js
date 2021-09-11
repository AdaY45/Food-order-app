import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/meals" className={styles.logo}>
          <h2 className={styles["app-name"]}>Tasteful</h2>
        </Link>
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.contact}>
              <NavLink className={styles["nav-btn"]} to="/contacts" activeClassName={styles.active}>
                Contacts
              </NavLink>
            </li>
            <li className={styles.about}>
              <NavLink className={styles["nav-btn"]} to="/about-us" activeClassName={styles.active}>
                About us
              </NavLink>
            </li>
            <li>
              <HeaderCartButton />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
