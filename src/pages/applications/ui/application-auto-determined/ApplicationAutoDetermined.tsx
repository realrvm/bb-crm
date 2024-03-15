import { FC, memo, useState } from "react";

import { ComplexButton } from "@/shared/ui/complex-button";
import { ApplicationDocs } from "../shared/ApplicationDocs";
import { SimpleButton } from "@/shared/ui/simple-button";
import { ButtonThemes } from "@/shared/lib/types";
import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";
import { ApplicationAutoDetails } from "../shared/ApplicatonAutoDetails";

export const ApplicationAutoDetermined: FC = () => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="flex">
      <Wrapper step="3" application_id={"43211"}>
        <ApplicationAutoDeterminedTopContent />
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
      </Wrapper>
    </div>
  );
};

const ApplicationAutoDeterminedTopContent: FC = memo(() => {
  return (
    <ApplicationTopContentWrapper addClasses="my-6">
      <div className="border-b border-b-border pb-6">
        <ApplicationDetails date="06.08.2023" phone="+7 (924) 114 44 23" />
      </div>
      <div className="border-b border-b-border py-6">
        <ApplicationLoanDetails
          sum="15 000"
          term="24"
          interest_rate="24"
          payment="22 124"
        />
      </div>
      <div className="py-6">
        <ApplicationAutoDetails
          plate="A847АХ 190"
          make="Kia"
          model="K5"
          year="2019"
          vin="XYZ12-3456789"
        />
      </div>
      <SimpleButton theme={ButtonThemes.DEFAULT}>Изменить данные</SimpleButton>
    </ApplicationTopContentWrapper>
  );
});
