import React from "react";
import LoginLogo from "../../components/Icons/LoginLogo";
import MainBubble from "../../components/Styling Elements/MainBubble";
import styles from "./Login.module.css";

function Login(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LoginLogo />
        </div>
        <a className={styles.loginButton} href="/oauth/githublogin">
          Log in with GitHub
        </a>
      </div>
      <div className={styles.mainBubble}>
        <MainBubble />
      </div>
    </div>
  );
}

export default Login;
