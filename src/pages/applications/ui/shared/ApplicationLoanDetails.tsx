import { FC } from "react";

type ApplicationLoanDetailsType = {
  sum: string;
  term: string;
  interest_rate: string;
  payment: string;
};

export const ApplicationLoanDetails: FC<ApplicationLoanDetailsType> = ({
  sum,
  term,
  interest_rate,
  payment,
}) => {
  return (
    <>
      <h4 className="heading-4 mb-6">Данные займа</h4>
      <div className="grid grid-cols-3 gap-y-6">
        <dl>
          <dt className="text-small text-secondary mb-1">Сумма займа</dt>
          <dd className="heading-5 text-primary">{sum} ₽</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Срок</dt>
          <dd className="heading-5 text-primary">{term} месяца</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Процентная ставка</dt>
          <dd className="heading-5 text-primary">{interest_rate}%</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">
            Обязательный платёж
          </dt>
          <dd className="heading-5 text-primary">{payment} ₽</dd>
        </dl>
      </div>
    </>
  );
};
