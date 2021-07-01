import React from "react";
import styles from "./App.module.css";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect,
} from "react-router-dom";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import SavedResultsPage from "./pages/SavedResults/SavedResultsPage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import AuthProvider from "./auth/AuthContext";
import Logout from "./pages/Logout/Logout";
import ProtectedRoute from "./routing/ProtectedRoute";
import GitHubCallbackPage from "./auth/GitHubCallbackPage";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};
const routes: CustomRouteProps[] = [
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/savedresults",
    Component: SavedResultsPage,
  },
  {
    path: "/search",
    Component: Search,
  },
];
function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route
              path="/auth/github/callback"
              component={GitHubCallbackPage}
            />
            {routes.map(({ Component, ...routeProps }) => (
              <ProtectedRoute key={routeProps.path} {...routeProps}>
                <Component />
              </ProtectedRoute>
            ))}
            <ProtectedRoute path="/logout" component={Logout} />
            <Route path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
