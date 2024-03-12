import { ApplicationWrapper } from "../shared/ApplicationWrapper";

export const ApplicationNew = () => {
  return (
    <div className="flex">
      <ApplicationWrapper step="1" application_id={"43211"}>
        <div className="border border-border rounded-lg p-6 mt-6">
          <h3 className="heading-3 mb-6">Данные заявки</h3>
          <div className="flex gap-[130px]">
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
      </ApplicationWrapper>
    </div>
  );
};
