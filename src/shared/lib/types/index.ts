export const enum Routes {
  APPLICATIONS = "/",
  LOANS = "/loans",
  FINANCES = "/finances",
  SETTINGS = "/settings",
}

export const enum AppRoutes {
  NEW = "new",
  LOAN_DETERMINED = "loan-determined",
  AUTO_DETERMINED = "auto-determined",
  AUTO_GRADE = "auto-grade",
  APPROVED = "approved",
  DATA_CHECKING = "data-checking",
  AGENT_WORK = "agent-work",
  REFUSAL = "refusal",
  MAIN = "",
}

export const enum SettingsRoutes {
  MAIN = "",
  CALCULATOR = "calculator",
}

export const enum ButtonThemes {
  PRIMARY = "btn-primary",
  DENY = "btn-deny",
  ACCENT = "btn-accent",
  ICON = "btn-icon",
  DEFAULT = "btn-default",
}

type TabCaption = "Заявки" | "Aктивные займы" | "Финансы" | "Настройки";

export type Tab = {
  caption: TabCaption;
  path: Routes;
};
