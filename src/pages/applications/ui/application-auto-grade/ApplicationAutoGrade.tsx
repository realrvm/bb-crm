import { FC, memo, useCallback, useState } from "react";

import { SimpleButton } from "@/shared/ui/simple-button";
import { ButtonThemes } from "@/shared/lib/types";
import { ApplicationRefusalModal } from "../shared/ApplicationRefusalModal";
import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";
import { ApplicationAutoDetails } from "../shared/ApplicatonAutoDetails";
import { ApplicationAutoImages } from "../shared/ApplicationAutoImages";

export const ApplicationAutoGrade = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex">
        <Wrapper step="4" application_id={"43211"}>
          <ApplicationAutoGradeContent />
          <div className="flex items-center justify-between mb-6">
            <SimpleButton theme={ButtonThemes.DENY} onClick={toggleModal}>
              Отказ по заявке
            </SimpleButton>
            <SimpleButton theme={ButtonThemes.ACCENT}>
              Одобрить заявку
            </SimpleButton>
          </div>
        </Wrapper>
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
    <ApplicationTopContentWrapper addClasses="my-6">
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
