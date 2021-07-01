import React, { ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function ProtectedRoute(props: ReactElement): JSX.Element {
  const { user } = useAuth();

  return user ? <Route {...props} /> : <Redirect to="/login" />;
}
export default ProtectedRoute;
