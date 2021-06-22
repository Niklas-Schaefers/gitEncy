import React from "react";
import CatLogo from "../Icons/CatLogo";
import styles from "./HeaderBar.module.css";

function HeaderBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
      <div className={styles.headline}>
        <h1>Saved Results</h1>
      </div>
    </div>
  );
}

export default HeaderBar;
