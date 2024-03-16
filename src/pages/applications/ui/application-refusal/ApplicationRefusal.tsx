import { FC } from "react";

import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";
import { ApplicationAutoDetails } from "../shared/ApplicatonAutoDetails";
import { ApplicationAutoImages } from "../shared/ApplicationAutoImages";

export const ApplicationRefusal: FC = () => {
  return (
    <>
      <div className="flex">
        <Wrapper step="8" application_id={"43211"}>
          <ApplicationRefusalContent />
        </Wrapper>
      </div>
    </>
  );
};

const ApplicationRefusalContent = () => {
  return (
    <ApplicationTopContentWrapper addClasses="my-6">
      <div style={{ opacity: ".5" }} className="border-b border-b-border pb-6">
        <ApplicationDetails phone="+7 (924) 114 44 23" date="06.08.2023" />
      </div>
      <div style={{ opacity: ".5" }} className="border-b border-b-border py-6">
        <ApplicationLoanDetails
          sum="15 000"
          term="24"
          interest_rate="24"
          payment="22 124"
        />
      </div>
      <div style={{ opacity: ".5" }} className="border-b border-b-border py-6">
        <ApplicationAutoDetails
          plate="A847АХ 190"
          make="Kia"
          model="K5"
          year="2019"
          vin="XYZ12-3456789"
        />
      </div>
      <div style={{ opacity: ".5" }} className="pt-6">
        <ApplicationAutoImages
          front="/front.png"
          back="/back.png"
          side="/side.png"
        />
      </div>
      <span className="inline-block p-3 rounded-lg mt-6 bg-annonce text-primary text-medium">
        Клиенту отправлено SMS-уведомление об отказе.
      </span>
    </ApplicationTopContentWrapper>
  );
};
