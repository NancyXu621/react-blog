import React from "react";

const Home = React.lazy(
  () => import(/*webpackchunkname:Home*/ "../pages/home/index")
);
const SetUp = React.lazy(
  () => import(/*webpackchunkname:Home*/ "../pages/setup/index")
);

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/setup",
    component: SetUp,
  },
];
