import { FC, memo, useCallback, useState } from "react";

import { ApplicationDocs } from "../shared/ApplicationDocs";
import { SimpleButton } from "@/shared/ui/simple-button";
import { ButtonThemes } from "@/shared/lib/types";
import { Shedule } from "@/shared/assets/icons/Shedule";
import { Contract } from "@/shared/assets/icons/Contract";
import { ApplicationRefusalModal } from "../shared/ApplicationRefusalModal";
import { ApplicationSheduleModal } from "../shared/ApplicationSheduleModal";
import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";
import { ApplicationAutoDetails } from "../shared/ApplicatonAutoDetails";
import { ApplicationAutoImages } from "../shared/ApplicationAutoImages";

export const ApplicationAgentWork = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSheduleModal, setIsOpenSheduleModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  const toggleSheduleModal = useCallback(() => {
    setIsOpenSheduleModal((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <Wrapper
          step="7"
          application_id={"43211"}
          childElement={() => (
            <ApplicationAgentWorkModalButtons
              toggleModal={toggleSheduleModal}
            />
          )}
        >
          <ApplicationAgentWorkContent />
          <ApplicationDocs isShowBtns={false} />
          <ApplicationAgentWorkButtons toggleModal={toggleModal} />
        </Wrapper>
      </div>
      <ApplicationRefusalModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <ApplicationSheduleModal
        isOpenSheduleModal={isOpenSheduleModal}
        setIsOpenSheduleModal={setIsOpenSheduleModal}
      />
    </>
  );
};

const ApplicationAgentWorkContent: FC = memo(() => {
  return (
    <ApplicationTopContentWrapper addClasses="mt-6">
      <div className="border-b border-b-border pb-6">
        <ApplicationDetails phone="+7 (924) 114 44 23" date="06.08.2023" />
      </div>
      <div className="border-b border-b-border py-6">
        <ApplicationLoanDetails
          sum="15 000"
          term="24"
          interest_rate="24"
          payment="22 124"
        />
      </div>
      <div className="border-b border-b-border py-6">
        <ApplicationAutoDetails
          plate="A847АХ 190"
          make="Kia"
          model="K5"
          year="2019"
          vin="XYZ12-3456789"
        />
      </div>
      <div className="pt-6">
        <ApplicationAutoImages
          front="/front.png"
          back="/back.png"
          side="/side.png"
        />
      </div>
    </ApplicationTopContentWrapper>
  );
});

const ApplicationAgentWorkButtons: FC<{ toggleModal: () => void }> = memo(
  ({ toggleModal }) => {
    return (
      <div className="flex items-center justify-between mb-6">
        <SimpleButton theme={ButtonThemes.DENY} onClick={toggleModal}>
          Отказ по заявке
        </SimpleButton>
        <SimpleButton>Перенести в активные займы</SimpleButton>
      </div>
    );
  },
);

const ApplicationAgentWorkModalButtons: FC<{ toggleModal: () => void }> = memo(
  ({ toggleModal }) => {
    return (
      <div className="flex flex-col gap-2 mt-14">
        <button
          className="border border-border outline-none flex flex-col rounded-lg p-4 gap-2 focus:border-focus hover:bg-border"
          onClick={toggleModal}
        >
          <div className="grid place-items-center w-10 h-10 rounded-full bg-tab">
            <Shedule />
          </div>
          <span className="text-left heading-5">График платежей клиента</span>
        </button>
        <button className="border border-border outline-none flex flex-col rounded-lg p-4 gap-2 focus:border-focus hover:bg-border">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-hover">
            <Contract />
          </div>
          <span className="text-left heading-5">Договор с клиентом</span>
        </button>
      </div>
    );
  },
);
