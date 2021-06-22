import React from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import styles from "./SavedResults.module.css";

function SavedResults(): JSX.Element {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <div className={styles.savedSearchElements}>searchElements</div>
      <FooterMenu />
    </div>
  );
}

export default SavedResults;
