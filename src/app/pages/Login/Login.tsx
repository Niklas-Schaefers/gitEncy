import React from "react";
import LoginIcon from "../../components/Icons/LoginIcon";
import MainBubble from "../../components/Styling Elements/MainBubble";
import styles from "./Login.module.css";
import gitHubLogo from "/src/app/components/Icons/gitHubLogo.png";

function Login(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LoginIcon className={styles.logo} />
        <a className={styles.loginButton} href="/oauth/githublogin">
          <img src={gitHubLogo} alt="GitHub Logo" />
          Log in with GitHub
        </a>
      </div>
      <MainBubble className={styles.mainBubble} />
    </div>
  );
}

export default Login;
