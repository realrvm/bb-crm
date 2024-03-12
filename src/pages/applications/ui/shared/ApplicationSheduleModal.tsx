import { FC } from "react";

import { Modal } from "@/features/modal";
import { Cross } from "@/shared/assets/icons/Cross";
import { ButtonThemes } from "@/shared/lib/types";
import { SimpleButton } from "@/shared/ui/simple-button";
import { Title } from "@/shared/ui/title";

type ApplicationSheduleModalType = {
  isOpenSheduleModal: boolean;
  setIsOpenSheduleModal: (open: boolean) => void;
};

type SheduleType = {
  id: number;
  date: string;
  sum: string;
  duty: string;
  percents: string;
  comission: string;
  rest: string;
};

const shedule: SheduleType[] = [
  {
    id: 1,
    date: "3 января 2024 г.",
    sum: "17 520,14",
    duty: "3 437,90",
    percents: "14 000,00",
    comission: "83,33",
    rest: "196 562,20",
  },
  {
    id: 2,
    date: "3 января 2024 г.",
    sum: "17 520,14",
    duty: "3 437,90",
    percents: "14 000,00",
    comission: "83,33",
    rest: "196 562,20",
  },
  {
    id: 3,
    date: "3 января 2024 г.",
    sum: "17 520,14",
    duty: "3 437,90",
    percents: "14 000,00",
    comission: "83,33",
    rest: "196 562,20",
  },
  {
    id: 4,
    date: "3 января 2024 г.",
    sum: "17 520,14",
    duty: "3 437,90",
    percents: "14 000,00",
    comission: "83,33",
    rest: "196 562,20",
  },
  {
    id: 5,
    date: "3 января 2024 г.",
    sum: "17 520,14",
    duty: "3 437,90",
    percents: "14 000,00",
    comission: "83,33",
    rest: "196 562,20",
  },
];

export const ApplicationSheduleModal: FC<ApplicationSheduleModalType> = ({
  isOpenSheduleModal,
  setIsOpenSheduleModal,
}) => {
  return (
    <Modal
      isOpen={isOpenSheduleModal}
      onClose={() => setIsOpenSheduleModal(false)}
    >
      <>
        <div className="p-12 bg-white relative">
          <button
            className="absolute right-5 top-5"
            onClick={() => setIsOpenSheduleModal(false)}
          >
            <Cross />
          </button>
          <Title title="Подтвердите график платежей клиента" />
          <div className="rounded-lg border border-border overflow-hidden mt-5">
            <table className="w-full">
              <thead>
                <tr className="bg-hover">
                  <th className="text-small px-4 py-3 w-[36px] text-left">№</th>
                  <th className="text-small p-3 w-[160px] text-left">
                    Дата платежа
                  </th>
                  <th className="text-small p-3 w-[160px] text-right">
                    Сумма платежа
                  </th>
                  <th className="text-small p-3 w-[160px] text-right">
                    Основной долг
                  </th>
                  <th className="text-small p-3 w-[160px] text-right">
                    Проценты
                  </th>
                  <th className="text-small p-3 w-[160px] text-right">
                    Ежемес. комиссии
                  </th>
                  <th className="text-small p-3 w-[160px] text-right">
                    Остаток долга
                  </th>
                </tr>
              </thead>
              <tbody>
                {shedule.map((item, index, arr) => {
                  const { id } = item;

                  const isLast = arr.length - 1 === index;

                  return <SheduleItem key={id} item={item} isLast={isLast} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-end border-t border-t-border py-5 px-12 bg-white gap-3">
          <SimpleButton
            theme={ButtonThemes.DEFAULT}
            onClick={() => setIsOpenSheduleModal(false)}
          >
            Отмена
          </SimpleButton>
          <SimpleButton>Подтвердить</SimpleButton>
        </div>
      </>
    </Modal>
  );
};

const SheduleItem: FC<{ isLast: boolean; item: SheduleType }> = ({
  isLast,
  item,
}) => {
  const { id, date, sum, duty, percents, comission, rest } = item;

  return (
    <tr
      className={
        isLast
          ? "hover:bg-hover cursor-pointer"
          : "border-b border-border hover:bg-hover cursor-pointer"
      }
    >
      <td className="px-4 py-3 text-medium text-primary">{id}</td>
      <td className="p-3 text-medium text-primary">{date}</td>
      <td className="p-3 text-medium text-primary text-right">{sum}</td>
      <td className="p-3 text-medium text-primary text-right">{duty}</td>
      <td className="p-3 text-medium text-primary text-right">{percents}</td>
      <td className="p-3 text-medium text-primary text-right">{comission}</td>
      <td className="p-3 text-medium text-primary text-right">{rest}</td>
    </tr>
  );
};
