import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

function GitHubCallbackPage(): JSX.Element {
  const { loginWithCode, user } = useAuth();
  const search = new URLSearchParams(useLocation().search);
  const code = search.get("code");

  useEffect(() => {
    if (code) {
      loginWithCode(code);
    }
  }, [code, loginWithCode]);

  return <div>{user && <Redirect to="/profile" />}</div>;
}

export default GitHubCallbackPage;
