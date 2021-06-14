import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import SavedDetailsIcon from "../Icons/SavedDetailsIcon";
import SearchFieldIcon from "../Icons/SearchFieldIcon";
import BubbleFooter from "../Styling Elements/BubbleFooter";
import styles from "./HeaderSearch.module.css";

function HeaderSearch(): JSX.Element {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.bubbleHeader}>
        <BubbleFooter />
      </div>
      <div className={styles.navBar}>
        <HomeIcon />
        <SavedDetailsIcon />
        <SearchFieldIcon />
      </div>
    </div>
  );
}

export default HeaderSearch;
