// Routes.tsx
import React from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import SetUp from "../pages/setup/index";

const routes = [
  { path: "/", component:Home },
  { path: "/setup", component: SetUp },
  // { path: "*", component: Home }
];
/**
* @opptoom
 */
const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default routes;