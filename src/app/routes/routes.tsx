import { ReactNode } from "react";

export type Route = {
  path: string;
  component: ReactNode;
};

import HomePage from "../pages/home/page";
// import AboutPage from "../pages/about";

export const routes: Route[] = [
  {
    path: "/",
    component: <HomePage />,
  },
  // {
  //   path: "/about",
  //   component: <AboutPage />,
  // },
  // Adicione outras rotas conforme necessário
];
