import { FC, memo, useState } from "react";

import { ComplexButton } from "@/shared/ui/complex-button";
import { ApplicationDocs } from "../shared/ApplicationDocs";
import { Wrapper } from "@/widgets/wrapper";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationLoanDetails } from "../shared/ApplicationLoanDetails";

export const ApplicationLoanDetermined: FC = () => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="flex">
      <Wrapper step="2" application_id={"43211"}>
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
      </Wrapper>
    </div>
  );
};

const ApplicationLoanDeterminedTopContent: FC<{ showDocs: boolean }> = memo(
  ({ showDocs }) => {
    return (
      <ApplicationTopContentWrapper addClasses="my-6">
        <div className="border-b border-b-border pb-6">
          <ApplicationDetails phone="+7 (924) 114 44 23" date="06.08.2023" />
        </div>
        <div className="pt-6">
          <ApplicationLoanDetails
            sum="15 000"
            term="24"
            interest_rate="24"
            payment="22 124"
          />
          {showDocs && (
            <ComplexButton icon="cross" addClasses="mt-6">
              Добавить данные залогового автомобиля
            </ComplexButton>
          )}
        </div>
      </ApplicationTopContentWrapper>
    );
  },
);
