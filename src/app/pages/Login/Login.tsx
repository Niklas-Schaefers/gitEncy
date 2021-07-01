import React from "react";
import LoginIcon from "../../components/Icons/LoginIcon";
import MainBubble from "../../components/Styling Elements/MainBubble";
import styles from "./Login.module.css";

function Login(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LoginIcon />
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
