import React from "react";
import { Link } from "react-router-dom";
import CatLogo from "../../components/Icons/CatLogo";
import MainBubble from "../../components/Styling Elements/MainBubble";
import MainPinkBubble from "../../components/Styling Elements/MainPinkBubble";

import styles from "./Home.module.css";

function Search(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>gitEncy</h1>{" "}
      <h2 className={styles.subTitle}>organize your repos</h2>
      <div className={styles.mainBubble}>
        <MainBubble />
      </div>
      <div className={styles.mainPinkBubble}>
        <MainPinkBubble />
      </div>
      <Link className={styles.catLogo} to="/search">
        <div>
          <CatLogo />
        </div>
      </Link>
    </div>
  );
}

export default Search;
