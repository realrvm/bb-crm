import App from "@/app/App";
import { createBrowserRouter } from "react-router-dom";

import {
  ApplicationAgentWork,
  ApplicationApproved,
  ApplicationAutoDetermined,
  ApplicationAutoGrade,
  ApplicationDataChecking,
  ApplicationLoanDetermined,
  ApplicationMain,
  ApplicationNew,
  ApplicationRefusal,
  Applications,
} from "@/pages/applications";
import { Loans } from "@/pages/loans";
import { Finances } from "@/pages/finances";
import { Settings, SettingsCalculator, SettingsMain } from "@/pages/settings";
import { AppRoutes, Routes, SettingsRoutes } from "@/shared/lib/types";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: Routes.APPLICATIONS,
        element: <Applications />,
        children: [
          { path: AppRoutes.MAIN, element: <ApplicationMain /> },
          { path: `${AppRoutes.NEW}/:id`, element: <ApplicationNew /> },
          {
            path: `${AppRoutes.LOAN_DETERMINED}/:id`,
            element: <ApplicationLoanDetermined />,
          },
          {
            path: `${AppRoutes.AUTO_DETERMINED}/:id`,
            element: <ApplicationAutoDetermined />,
          },
          {
            path: `${AppRoutes.AUTO_GRADE}/:id`,
            element: <ApplicationAutoGrade />,
          },
          {
            path: `${AppRoutes.APPROVED}/:id`,
            element: <ApplicationApproved />,
          },
          {
            path: `${AppRoutes.DATA_CHECKING}/:id`,
            element: <ApplicationDataChecking />,
          },
          {
            path: `${AppRoutes.AGENT_WORK}/:id`,
            element: <ApplicationAgentWork />,
          },
          {
            path: `${AppRoutes.REFUSAL}/:id`,
            element: <ApplicationRefusal />,
          },
        ],
      },
      { path: Routes.LOANS, element: <Loans /> },
      { path: Routes.FINANCES, element: <Finances /> },
      {
        path: Routes.SETTINGS,
        element: <Settings />,
        children: [
          { path: SettingsRoutes.MAIN, element: <SettingsMain /> },
          { path: SettingsRoutes.CALCULATOR, element: <SettingsCalculator /> },
        ],
      },
    ],
  },
]);
