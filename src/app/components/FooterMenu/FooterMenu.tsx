import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import SavedDetailsIcon from "../Icons/SavedDetailsIcon";
import SearchFieldIcon from "../Icons/SearchFieldIcon";
import BubbleFooter from "../Styling Elements/BubbleFooter";
import styles from "./FooterMenu.module.css";

function FooterMenu(): JSX.Element {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.navBar}>
        <HomeIcon />
        <SavedDetailsIcon />
        <SearchFieldIcon />
      </div>
      <div className={styles.bubbleFooter}>
        <BubbleFooter />
      </div>
    </div>
  );
}

export default FooterMenu;
