import { FC, memo, useState } from "react";

import { ComplexButton } from "@/shared/ui/complex-button";
import { ApplicationWrapper } from "../shared/ApplicationWrapper";
import { ApplicationDocs } from "../shared/ApplicationDocs";

export const ApplicationLoanDetermined: FC = () => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="flex">
      <ApplicationWrapper step="2" application_id={"43211"}>
        <ApplicationLoanDeterminedTopContent showDocs={showDocs} />
        {showDocs ? (
          <ApplicationDocs setShowDocs={setShowDocs} />
        ) : (
          <ComplexButton
            icon="cross"
            handleComplexButton={() => setShowDocs(true)}
          >
            Добавить документы
          </ComplexButton>
        )}
      </ApplicationWrapper>
    </div>
  );
};

const ApplicationLoanDeterminedTopContent: FC<{ showDocs: boolean }> = memo(
  ({ showDocs }) => {
    return (
      <div className="border border-border rounded-lg p-6 my-6">
        <div className="border-b border-b-border pb-6">
          <h3 className="heading-3 mb-6">Данные заявки</h3>
          <div className="grid grid-cols-3 gap-y-6">
            <dl>
              <dt className="text-small text-secondary mb-1">Дата создания</dt>
              <dd className="heading-5 text-primary">06.08.2023</dd>
            </dl>
            <dl>
              <dt className="text-small text-secondary mb-1">
                Номер телефона клиента
              </dt>
              <dd className="heading-5 text-primary">+7 (924) 114 44 23</dd>
            </dl>
          </div>
        </div>
        <div className="pt-6">
          <h4 className="heading-4 mb-6">Данные займа</h4>
          <div className="grid grid-cols-3 gap-y-6">
            <dl>
              <dt className="text-small text-secondary mb-1">Сумма займа</dt>
              <dd className="heading-5 text-primary">15 000 ₽</dd>
            </dl>
            <dl>
              <dt className="text-small text-secondary mb-1">Срок</dt>
              <dd className="heading-5 text-primary">24 месяца</dd>
            </dl>
            <dl>
              <dt className="text-small text-secondary mb-1">
                Процентная ставка
              </dt>
              <dd className="heading-5 text-primary">24%</dd>
            </dl>
            <dl>
              <dt className="text-small text-secondary mb-1">
                Обязательный платёж
              </dt>
              <dd className="heading-5 text-primary">22 124 ₽</dd>
            </dl>
          </div>
          {showDocs && (
            <ComplexButton icon="cross" addClasses="mt-6">
              Добавить данные залогового автомобиля
            </ComplexButton>
          )}
        </div>
      </div>
    );
  },
);
