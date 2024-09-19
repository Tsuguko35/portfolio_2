import React from "react";
import { LandingPage, ProjectsPage } from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/projects",
    component: <ProjectsPage />,
  },
  {
    path: "*",
    component: <LandingPage />,
  },
];

export default routes;
