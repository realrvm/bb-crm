import { AppRoutes } from "../types";

export function getApplicationStatus(step: string) {
  switch (step) {
    case "1":
      return "Новая";
    case "2":
      return "Сумма займа определена";
    case "3":
      return "Данные авто определены";
    case "4":
      return "Оценка авто";
    case "5":
      return "Одобрена";
    case "6":
      return "Проверка данных";
    case "7":
      return "Работа агента";
    default:
      return "Отказ";
  }
}

export function getStatusByApplication(status: string) {
  switch (status) {
    case "Новая":
      return "1";
    case "Сумма займа определена":
      return "2";
    case "Данные авто определены":
      return "3";
    case "Оценка авто":
      return "4";
    case "Одобрена":
      return "5";
    case "Проверка данных":
      return "6";
    case "Работа агента":
      return "7";
    default:
      return "-";
  }
}

export function getPathsByStep(step: string): AppRoutes {
  switch (step) {
    case "1":
      return AppRoutes.NEW;
    case "2":
      return AppRoutes.LOAN_DETERMINED;
    case "3":
      return AppRoutes.AUTO_DETERMINED;
    case "4":
      return AppRoutes.AUTO_GRADE;
    case "5":
      return AppRoutes.APPROVED;
    case "6":
      return AppRoutes.DATA_CHECKING;
    case "7":
      return AppRoutes.AGENT_WORK;
    default:
      return AppRoutes.DEFAULT;
  }
}
