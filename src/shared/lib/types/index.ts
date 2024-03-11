export const enum Routes {
  APPLICATIONS = "/",
  LOANS = "/loans",
  FINANCES = "/finances",
  SETTINGS = "/settings",
}

export const enum ButtonThemes {
  PRIMARY = "btn-primary",
  DENY = "btn-deny",
  ACCENT = "btn-accent",
  ICON = "btn-icon",
}

type TabCaption = "Заявки" | "Aктивные займы" | "Финансы" | "Настройки";

export type Tab = {
  caption: TabCaption;
  path: Routes;
};
