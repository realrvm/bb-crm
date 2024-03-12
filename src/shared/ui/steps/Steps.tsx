import { FC } from "react";

import { APPLICATION_STEPS_AMOUNT } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/cn";

type StepsProps = {
  step: string;
};

export const Steps: FC<StepsProps> = ({ step }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: APPLICATION_STEPS_AMOUNT }).map((_, index) => {
        return (
          <div
            key={index}
            className={cn("w-2 h-2 rounded-full bg-steps", {
              "bg-brand": Number(step) === index + 1,
            })}
          ></div>
        );
      })}
    </div>
  );
};
