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
  { name: "首页", path: "/Home", component: Home },
  { name: "设置", path: "/setup", component: SetUp },
  { name: "写作", path: "/Writing", component: Writing },
  { name: "旅游地点", path: "/Travel", component: Travel },
  { name: "音乐", path: "/Music", component: Music },
  { name: "关于", path: "/About", component: About },
];
/**
 * @opptoom
 */
const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default routes;
