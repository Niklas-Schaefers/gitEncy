import React from "react";
import CatLogo from "../Icons/CatLogo";
import styles from "./HeaderBar.module.css";

function HeaderBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
      <h1 className={styles.headline}>
        Your saved <br /> Code
      </h1>
    </div>
  );
}

export default HeaderBar;
