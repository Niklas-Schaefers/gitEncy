import React, { useState } from "react";
import { useAuth, useUser } from "../../auth/AuthContext";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import CatLogo from "../../components/Icons/CatLogo";
import CloseIcon from "../../components/Icons/CloseIcon";
import LogoutIcon from "../../components/Icons/LogoutIcon";
import styles from "./Profile.module.css";

function Profile(): JSX.Element {
  const [showLogoutMessage, setShowLogoutMessage] = useState<boolean>(false);
  const { logout } = useAuth();
  const user = useUser();

  if (showLogoutMessage)
    return (
      <div className={styles.logoutMessage}>
        <CatLogo className={styles.catLogo} />
        <h1>Logout?</h1>
        <button className={styles.confirmLogoutButton} onClick={() => logout()}>
          <LogoutIcon className={styles.confirmLogoutButton__logoutIcon} /> Log
          out
        </button>
        <button
          className={styles.stayButton}
          onClick={() => setShowLogoutMessage(false)}
        >
          <CloseIcon />
          No, I want to stay
        </button>
      </div>
    );

  return (
    <div className={styles.container}>
      <button
        className={styles.logoutButton}
        onClick={() => setShowLogoutMessage(true)}
      >
        <LogoutIcon className={styles.logoutIcon} />
      </button>
      <h1 className={styles.userName}>{user.name}</h1>
      <img className={styles.userPhoto} src={user.avatar_url} alt="" />
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Profile;
