import { FC, PropsWithChildren, memo } from "react";

import { cn } from "@/shared/lib/cn";

type ApplicationTopContentWrapperType = {
  addClasses?: string;
};

export const ApplicationTopContentWrapper: FC<
  PropsWithChildren<ApplicationTopContentWrapperType>
> = memo(({ addClasses, children }) => {
  return (
    <div className={cn("border border-border rounded-lg p-6", addClasses)}>
      {children}
    </div>
  );
});
