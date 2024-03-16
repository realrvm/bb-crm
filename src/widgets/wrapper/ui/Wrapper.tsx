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
    const hasAppliction = step !== "0";
    const isRefusal = step === "8";

    return (
      <>
        <div className="flex-1">
          <ComplexButton icon="arrow-back">Назад</ComplexButton>
        </div>
        <div className="flex flex-col flex-[50%]">
          {hasAppliction ? (
            <div className="flex items-center justify-between">
              <Title title={`Заявка #${application_id}`} />
              <div className="flex items-center gap-3">
                {isRefusal ? null : <Steps step={step} />}
                <span
                  className={cn("heading-5", {
                    "text-accent": status === "Новая",
                    "text-deny": status === "Отказ",
                  })}
                >
                  {status}
                </span>
              </div>
            </div>
          ) : (
            <Title title={application_id} addClasses="text-center" />
          )}
          {children}
        </div>
        <div className="flex-1">{childElement && childElement()}</div>
      </>
    );
  },
);
