import App from "@/app/App";
import { createBrowserRouter } from "react-router-dom";

import { Main } from "@/pages/main";

import { Routes } from "../types";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: Routes.MAIN, element: <Main /> }],
  },
]);
