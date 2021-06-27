import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import SavedResults from "./pages/SavedResults/SavedResults";
import Login from "./pages/Login/Login";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};
const routes: CustomRouteProps[] = [
  {
    path: "/login",
    Component: Login,
    exact: true,
  },
  {
    path: "/savedresults",
    Component: SavedResults,
  },
  {
    path: "/search",
    Component: Search,
  },
  { path: "/", Component: Home },
];
function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
