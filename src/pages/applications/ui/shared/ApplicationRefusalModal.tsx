import { FC } from "react";

import { Modal } from "@/features/modal";
import { Title } from "@/shared/ui/title";
import { ButtonThemes } from "@/shared/lib/types";
import { SimpleButton } from "@/shared/ui/simple-button";

type ApplicationRefusalModalType = {
  isOpenModal: boolean;
  setIsOpenModal: (val: boolean) => void;
};

export const ApplicationRefusalModal: FC<ApplicationRefusalModalType> = ({
  isOpenModal,
  setIsOpenModal,
}) => {
  return (
    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <div className="p-9 bg-white">
        <Title title="Отказ по заявке" />
        <p className="text-primary text-medium mt-3 mb-6">
          Клиенту будет отправлено SMS-уведомление об отказе.
        </p>
        <div className="flex items-center justify-end gap-3">
          <SimpleButton
            theme={ButtonThemes.DEFAULT}
            onClick={() => setIsOpenModal(false)}
          >
            Отмена
          </SimpleButton>
          <SimpleButton theme={ButtonThemes.DENY}>Отказать</SimpleButton>
        </div>
      </div>
    </Modal>
  );
};
