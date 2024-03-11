import { FC } from "react";

import { Navbar } from "@/widgets/navbar";
import { Steps } from "@/shared/ui/steps/Steps";

export const Applications: FC = () => {
  return (
    <section>
      <Navbar />
      <div className="rounded-lg border border-border overflow-hidden mt-4">
        <table className="w-full">
          <thead>
            <tr className="bg-hover">
              <th className="text-small pl-4 py-3 w-[100px] text-left">ID</th>
              <th className="text-small py-3 w-[140px] text-left">
                Дата создания
              </th>
              <th className="text-small py-3 w-[256px] text-left">Телефон</th>
              <th className="text-small py-3 w-[140px] text-left">Сумма, ₽</th>
              <th className="text-small py-3 w-[240px] text-left">Срок</th>
              <th className="text-small py-3 text-left">Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b border-border hover:bg-hover"
              onClick={() => console.log("clicked")}
            >
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">---</td>
              <td className="py-3 text-medium text-primary">---</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Новая</span>
                <Steps step={1} />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">10 000</td>
              <td className="py-3 text-medium text-primary">24 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Сумма займа определена</span>
                <Steps step={2} />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">10 000</td>
              <td className="py-3 text-medium text-primary">24 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Данные авто определены</span>
                <Steps step={3} />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">20 000</td>
              <td className="py-3 text-medium text-primary">48 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Оценка авто</span>
                <Steps step={4} />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">30 000</td>
              <td className="py-3 text-medium text-primary">24 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Одобрена</span>
                <Steps step={5} />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">10 000</td>
              <td className="py-3 text-medium text-primary">36 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5 text-deny">Отказ</span>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">25 000</td>
              <td className="py-3 text-medium text-primary">36 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Проверка данных </span>
                <Steps step={6} />
              </td>
            </tr>
            <tr>
              <td className="pl-4 py-3 text-medium text-primary">123456</td>
              <td className="py-3 text-medium text-primary">06.08.2023</td>
              <td className="py-3 text-medium text-primary">
                +7 (924) 114 44 23
              </td>
              <td className="py-3 text-medium text-primary">25 000</td>
              <td className="py-3 text-medium text-primary">36 месяца</td>
              <td className="py-3 pr-4 text-medium text-primary flex justify-between">
                <span className="heading-5">Работа агента</span>
                <Steps step={7} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
