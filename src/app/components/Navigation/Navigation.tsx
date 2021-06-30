import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

function Navigation(): JSX.Element {
  const { user }: any = useContext(AuthContext);

  return (
    <div>
      <Link to="/home"> Home </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/login">Login</Link>
      {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
    </div>
  );
}
export default Navigation;
