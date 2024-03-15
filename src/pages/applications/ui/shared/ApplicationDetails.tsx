import { FC } from "react";

type AppliactionDetailsType = {
  date: string;
  phone: string;
  addClasses?: string;
};

export const ApplicationDetails: FC<AppliactionDetailsType> = ({
  date,
  phone,
}) => {
  return (
    <>
      <h3 className="heading-3 mb-6">Данные заявки</h3>
      <div className="flex gap-[130px]">
        <dl>
          <dt className="text-small text-secondary mb-1">Дата создания</dt>
          <dd className="heading-5 text-primary">{date}</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">
            Номер телефона клиента
          </dt>
          <dd className="heading-5 text-primary">{phone}</dd>
        </dl>
      </div>
    </>
  );
};
