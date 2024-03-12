import { FC, memo, useCallback, useState } from "react";

import { ApplicationWrapper } from "../shared/ApplicationWrapper";
import { Shedule } from "@/shared/assets/icons/Shedule";
import { ApplicationSheduleModal } from "../shared/ApplicationSheduleModal";

export const ApplicationApproved = () => {
  const [isOpenSheduleModal, setIsOpenSheduleModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenSheduleModal((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <ApplicationWrapper
          step="5"
          application_id={"43211"}
          childElement={() => (
            <ApplicationApprovedModalButton toggleModal={toggleModal} />
          )}
        >
          <ApplicationApprovedContent />
        </ApplicationWrapper>
      </div>
      <ApplicationSheduleModal
        isOpenSheduleModal={isOpenSheduleModal}
        setIsOpenSheduleModal={setIsOpenSheduleModal}
      />
    </>
  );
};

const ApplicationApprovedContent: FC = memo(() => {
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
      <div className="border-b border-b-border py-6">
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
      </div>
      <div className="border-b border-b-border py-6">
        <h4 className="heading-4 mb-6">Данные залогового автомобиля</h4>
        <div className="grid grid-cols-3 gap-y-6">
          <dl>
            <dt className="text-small text-secondary mb-1">Гос. номер</dt>
            <dd className="heading-5 text-primary">A847АХ 190</dd>
          </dl>
          <dl>
            <dt className="text-small text-secondary mb-1">Марка авто</dt>
            <dd className="heading-5 text-primary">Kia</dd>
          </dl>
          <dl>
            <dt className="text-small text-secondary mb-1">Модель авто</dt>
            <dd className="heading-5 text-primary">K5</dd>
          </dl>
          <dl>
            <dt className="text-small text-secondary mb-1"></dt>
            <dd className="heading-5 text-primary"></dd>
          </dl>
          <dl>
            <dt className="text-small text-secondary mb-1">Год выпуска</dt>
            <dd className="heading-5 text-primary">2019</dd>
          </dl>
          <dl>
            <dt className="text-small text-secondary mb-1">Номер кузова/VIN</dt>
            <dd className="heading-5 text-primary">XYZ12-3456789</dd>
          </dl>
        </div>
      </div>
      <div className="py-6">
        <div className="grid grid-cols-3 gap-y-6">
          <div className="flex items-center gap-3">
            <img src="/front.png" alt="" />
            <span className="heading-5 text-primary">Спереди</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/side.png" alt="" />
            <span className="heading-5 text-primary">Сбоку</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/back.png" alt="" />
            <span className="heading-5 text-primary">Сзади</span>
          </div>
        </div>
      </div>
      <div className="bg-annonce rounded-lg p-3">
        Клиенту отправлено SMS-уведомление. Заявка дополнится, когда клиент
        пришлет фото документов.
      </div>
    </div>
  );
});

const ApplicationApprovedModalButton: FC<{ toggleModal: () => void }> = memo(
  ({ toggleModal }) => {
    return (
      <button
        className="border border-border outline-none flex flex-col rounded-lg p-4 mt-14 gap-2 focus:border-brand active:border-brand hover:border-brand"
        onClick={toggleModal}
      >
        <div className="grid place-items-center w-10 h-10 rounded-full bg-tab">
          <Shedule />
        </div>
        <span className="text-left heading-5">График платежей клиента</span>
      </button>
    );
  },
);
