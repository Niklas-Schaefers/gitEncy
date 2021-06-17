import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../Icons/HomeIcon";
import SavedDetailsIcon from "../Icons/SavedDetailsIcon";
import SearchFieldIcon from "../Icons/SearchFieldIcon";
import BubbleFooter from "../Styling Elements/BubbleFooter";
import styles from "./FooterMenu.module.css";

function FooterMenu(): JSX.Element {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.navBar}>
        <Link to="/">
          <HomeIcon />
        </Link>
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
