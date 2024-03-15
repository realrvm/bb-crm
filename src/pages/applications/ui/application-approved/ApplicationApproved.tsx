import { FC, memo, useCallback, useState } from "react";

import { Shedule } from "@/shared/assets/icons/Shedule";
import { ApplicationSheduleModal } from "../shared/ApplicationSheduleModal";
import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";
import { ApplicationAutoDetails } from "../shared/ApplicatonAutoDetails";
import { ApplicationAutoImages } from "../shared/ApplicationAutoImages";

export const ApplicationApproved = () => {
  const [isOpenSheduleModal, setIsOpenSheduleModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenSheduleModal((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <Wrapper
          step="5"
          application_id={"43211"}
          childElement={() => (
            <ApplicationApprovedModalButton toggleModal={toggleModal} />
          )}
        >
          <ApplicationApprovedContent />
        </Wrapper>
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
    <ApplicationTopContentWrapper addClasses="my-6">
      <div className="border-b border-b-border pb-6">
        <ApplicationDetails phone="8 (924) 114 44 23" date="06.08.2023" />
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
      <div className="py-6">
        <ApplicationAutoImages
          front="/front.png"
          back="/back.png"
          side="/side.png"
        />
      </div>
      <div className="bg-annonce rounded-lg p-3">
        Клиенту отправлено SMS-уведомление. Заявка дополнится, когда клиент
        пришлет фото документов.
      </div>
    </ApplicationTopContentWrapper>
  );
});

const ApplicationApprovedModalButton: FC<{ toggleModal: () => void }> = memo(
  ({ toggleModal }) => {
    return (
      <button
        className="border border-border outline-none flex flex-col rounded-lg p-4 mt-14 gap-2 focus:border-focus hover:bg-border"
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
