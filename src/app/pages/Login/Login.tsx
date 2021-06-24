import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginLogo from "../../components/Icons/LoginLogo";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import MainBubble from "../../components/Styling Elements/MainBubble";
import styles from "./Login.module.css";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LoginLogo />
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form}>
            <LabeledInput
              placeholder="E-Mail"
              label="email"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />
            <LabeledInput
              placeholder="Password"
              label="password"
              type="password"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <Link to="/search" className={styles.buttonLink}>
            <button className={styles.loginButton}>Log in</button>
          </Link>
        </form>
      </div>
      <div className={styles.mainBubble}>
        <MainBubble />
      </div>
    </div>
  );
}

export default Login;
