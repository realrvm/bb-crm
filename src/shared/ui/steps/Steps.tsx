import { cn } from "@/shared/lib/cn";
import { FC } from "react";

type StepsProps = {
  step: number;
};

export const Steps: FC<StepsProps> = ({ step }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 7 }).map((_, index) => {
        return (
          <div
            key={index}
            className={cn("w-2 h-2 rounded-full bg-steps", {
              "bg-brand": step === index + 1,
            })}
          ></div>
        );
      })}
    </div>
  );
};
