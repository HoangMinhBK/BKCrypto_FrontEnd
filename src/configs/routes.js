import React from "react";
import { LayoutOptions } from "../layouts";

const routeConfig = [
  {
    path: "/welcome",
    exact: true,
    component: React.lazy(() => import("../pages/LandingPage")),
    layout: LayoutOptions.BLANK,
  },
//   {
//     path: "/login",
//     exact: true,
//     component: React.lazy(() => import("../pages/Login")),
//     layout: LayoutOptions.BLANK,
//   },
//   {
//     path: "/register",
//     exact: true,
//     component: React.lazy(() => import("../pages/Register")),
//     layout: LayoutOptions.BLANK,
//   },
//   {
//     path: "/comics/:id",
//     exact: true,
//     component: React.lazy(() => import("../pages/Comics")),
//     layout: LayoutOptions.MAIN,
//   },
//   {
//     path: "/comics/:id/chapters/:chapterId",
//     exact: true,
//     component: React.lazy(() => import("../pages/Comics/Chapter")),
//     layout: LayoutOptions.MAIN,
//   },
];

export default routeConfig;
