// Routes.tsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/index";
import SetUp from "../pages/setup/index";
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" Component={Home} />
      <Route path="/setup" Component={SetUp} />
    </Switch>
  );
};

export default Routes;
