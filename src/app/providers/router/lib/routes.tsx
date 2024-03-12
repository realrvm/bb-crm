import App from "@/app/App";
import { createBrowserRouter } from "react-router-dom";

import {
  ApplicationAgentWork,
  ApplicationApproved,
  ApplicationAutoDetermined,
  ApplicationAutoGrade,
  ApplicationDataChecking,
  ApplicationLoanDetermined,
  ApplicationNew,
  Applications,
} from "@/pages/applications";
import { Loans } from "@/pages/loans";
import { Finances } from "@/pages/finances";
import { Settings } from "@/pages/settings";
import { AppRoutes, Routes } from "@/shared/lib/types";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: Routes.APPLICATIONS,
        element: <Applications />,
      },
      { path: Routes.LOANS, element: <Loans /> },
      { path: Routes.FINANCES, element: <Finances /> },
      { path: Routes.SETTINGS, element: <Settings /> },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.NEW}/:id`,
        element: <ApplicationNew />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.LOAN_DETERMINED}/:id`,
        element: <ApplicationLoanDetermined />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.AUTO_DETERMINED}/:id`,
        element: <ApplicationAutoDetermined />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.AUTO_GRADE}/:id`,
        element: <ApplicationAutoGrade />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.APPROVED}/:id`,
        element: <ApplicationApproved />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.DATA_CHECKING}/:id`,
        element: <ApplicationDataChecking />,
      },
      {
        path: `${Routes.APPLICATIONS}/${AppRoutes.AGENT_WORK}/:id`,
        element: <ApplicationAgentWork />,
      },
    ],
  },
]);
