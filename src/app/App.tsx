import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import Search from "./pages/Search/Search";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};
const routes: CustomRouteProps[] = [{ path: "/search", Component: Search }];
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
