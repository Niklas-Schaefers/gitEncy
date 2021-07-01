import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../Icons/ProfileIcon";
import SavedDetailsIcon from "../Icons/SavedDetailsIcon";
import SearchFieldIcon from "../Icons/SearchFieldIcon";
import styles from "./FooterMenu.module.css";

function FooterMenu(): JSX.Element {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.navBar}>
        <Link to="/profile">
          <ProfileIcon />
        </Link>
        <Link to="/search">
          <SearchFieldIcon />
        </Link>
        <Link to="/savedresults">
          <SavedDetailsIcon />
        </Link>
      </div>
    </div>
  );
}

export default FooterMenu;
