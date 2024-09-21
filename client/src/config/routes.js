import React from "react";
import {
  LandingPage,
  ProjectOverviewPage,
  ProjectsPage,
  AboutPage,
} from "../pages";

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
    path: "/projects/:project_name",
    component: <ProjectOverviewPage />,
  },
  {
    path: "/about",
    component: <AboutPage />,
  },
  {
    path: "*",
    component: <LandingPage />,
  },
];

export default routes;
