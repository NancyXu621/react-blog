// Routes.tsx
import React from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import SetUp from "../pages/setup/index";
import Writing from "../pages/writing/index";
import Travel from "../pages/Travel/index";
import Music from "../pages/Music/index";
import About from "../pages/About/index";
const routes = [
  { path: "/Home", component: Home },
  { path: "/setup", component: SetUp },
  { path: "/Writing", component: Writing },
  { path: "/Travel", component: Travel },
  { path: "/Music", component: Music },
  { path: "/About", component: About}
];
/**
 * @opptoom
 */
const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default routes;
