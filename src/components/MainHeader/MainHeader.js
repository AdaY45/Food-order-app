import React from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <header>
        <h2 className={styles["app-name"]}>Tasteful</h2>
        <HeaderCartButton />
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
