import React from "react";
import { useAuth, useUser } from "../../auth/AuthContext";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import LogoutIcon from "../../components/Icons/LogoutIcon";
import styles from "./Profile.module.css";

function Profile(): JSX.Element {
  const { logout } = useAuth();
  const user = useUser();

  function LogOutandMessage() {
    logout();
    return alert("Your are logged out now.");
  }

  return (
    <div className={styles.container}>
      <button className={styles.logoutButton} onClick={LogOutandMessage}>
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
