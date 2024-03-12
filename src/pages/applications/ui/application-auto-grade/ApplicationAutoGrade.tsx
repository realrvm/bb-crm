import { FC, memo, useCallback, useState } from "react";

import { ApplicationWrapper } from "../shared/ApplicationWrapper";
import { SimpleButton } from "@/shared/ui/simple-button";
import { ButtonThemes } from "@/shared/lib/types";
import { ApplicationRefusalModal } from "../shared/ApplicationRefusalModal";

export const ApplicationAutoGrade = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex">
        <ApplicationWrapper step="4" application_id={"43211"}>
          <ApplicationAutoGradeContent />
          <div className="flex items-center justify-between mb-6">
            <SimpleButton theme={ButtonThemes.DENY} onClick={toggleModal}>
              Отказ по заявке
            </SimpleButton>
            <SimpleButton theme={ButtonThemes.ACCENT}>
              Одобрить заявку
            </SimpleButton>
          </div>
        </ApplicationWrapper>
      </div>
      <ApplicationRefusalModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};

const ApplicationAutoGradeContent: FC = memo(() => {
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
      <div className="pt-6">
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
    </div>
  );
});
