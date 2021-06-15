import React from "react";
import CatLogo from "../../../components/Icons/CatLogo";
import MainBubble from "../../../components/Styling Elements/MainBubble";
import MainPinkBubble from "../../../components/Styling Elements/MainPinkBubble";

import styles from "./Home.module.css";

function Search(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>gitEncy</h1>
      <h2 className={styles.subTitle}>organize your repos</h2>
      <div className={styles.mainBubble}>
        <MainBubble />
      </div>
      <div className={styles.mainPinkBubble}>
        <MainPinkBubble />
      </div>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
    </div>
  );
}

export default Search;
