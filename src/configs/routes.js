import React from "react";
import { LayoutOptions } from "../layouts";

const routeConfig = [
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import("../pages/Login")),
    layout: LayoutOptions.MAIN,
  },
  {
    path: "/welcome",
    exact: true,
    component: React.lazy(() => import("../pages/LandingPage")),
    layout: LayoutOptions.BLANK,
  },
  {
    path: "/home/identity",
    exact: true,
    component: React.lazy(() => import("../pages/HomePage/Identity")),
    layout: LayoutOptions.MAIN,
  },
  {
    path: "/home/claims",
    exact: true,
    component: React.lazy(() => import("../pages/HomePage/Claims")),
    layout: LayoutOptions.MAIN,
  },
  {
    path: "/home/verifications",
    exact: true,
    component: React.lazy(() => import("../pages/HomePage/Verifications")),
    layout: LayoutOptions.MAIN,
  },
];

export default routeConfig;
