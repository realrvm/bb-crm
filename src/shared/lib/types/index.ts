export const enum Routes {
  APPLICATIONS = "/",
  LOANS = "/loans",
  FINANCES = "/finances",
  SETTINGS = "/settings",
}

type TabCaption = "Заявки" | "Aктивные займы" | "Финансы" | "Настройки";

export type Tab = {
  caption: TabCaption;
  path: Routes;
};
