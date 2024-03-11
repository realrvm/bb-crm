import App from "@/app/App";
import { createBrowserRouter } from "react-router-dom";

import { Applications } from "@/pages/applications";
import { Loans } from "@/pages/loans";
import { Finances } from "@/pages/finances";
import { Settings } from "@/pages/settings";
import { Routes } from "@/shared/lib/types";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: Routes.APPLICATIONS, element: <Applications /> },
      { path: Routes.LOANS, element: <Loans /> },
      { path: Routes.FINANCES, element: <Finances /> },
      { path: Routes.SETTINGS, element: <Settings /> },
    ],
  },
]);
