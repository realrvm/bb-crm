import { FC, PropsWithChildren, ReactNode, memo } from "react";

import { ComplexButton } from "@/shared/ui/complex-button";
import { Steps } from "@/shared/ui/steps/Steps";
import { Title } from "@/shared/ui/title";

import { getApplicationStatus } from "@/shared/lib/utils/getApplicationStatus";
import { cn } from "@/shared/lib/cn";

type WrapperType = {
  step: string;
  application_id: string;
  childElement?: () => ReactNode;
};

export const Wrapper: FC<PropsWithChildren<WrapperType>> = memo(
  ({ step, children, application_id, childElement }) => {
    const status = getApplicationStatus(step);

    return (
      <>
        <div className="flex-1">
          <ComplexButton icon="arrow-back">Назад</ComplexButton>
        </div>
        <div className="flex flex-col flex-[50%]">
          <div className="flex items-center justify-between">
            <Title title={`Заявка #${application_id}`} />
            <div className="flex items-center gap-3">
              <Steps step={step} />
              <span
                className={cn("heading-5", {
                  "text-accent": status === "Новая",
                })}
              >
                {status}
              </span>
            </div>
          </div>
          {children}
        </div>
        <div className="flex-1">{childElement && childElement()}</div>
      </>
    );
  },
);
