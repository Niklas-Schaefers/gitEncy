import React from "react";
import { useAuth } from "../../auth/AuthContext";
import styles from "./Logout.module.css";

function Logout(): JSX.Element {
  const { user, logout } = useAuth();
  return (
    <div className={styles.container}>
      <p>
        You are logged in as <div>{user.login}</div>
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;
