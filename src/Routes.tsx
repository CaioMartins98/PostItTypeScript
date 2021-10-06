import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./services/routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Switch>
            {routes.map(({ path, Component, exact }, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Route
                component={Component}
                key={i}
                {...{ Component, exact, path }}
              />
            ))}
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
