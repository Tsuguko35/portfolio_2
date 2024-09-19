import React from "react";

const LandingPage = React.lazy(() =>
  import("../pages/LandingPage/LandingPage")
);

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "*",
    component: <LandingPage />,
  },
];

export default routes;
