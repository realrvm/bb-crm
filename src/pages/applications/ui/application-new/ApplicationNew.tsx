import { Wrapper } from "@/widgets/wrapper";
import { ApplicationDetails } from "../shared/ApplicationDetails";
import { ApplicationTopContentWrapper } from "../shared/ApplicationTopContentWrapper";

export const ApplicationNew = () => {
  return (
    <div className="flex">
      <Wrapper step="1" application_id={"43211"}>
        <ApplicationTopContentWrapper addClasses="mt-6">
          <ApplicationDetails date="06.08.2023" phone="+7 (924) 114 44 23" />
        </ApplicationTopContentWrapper>
      </Wrapper>
    </div>
  );
};
