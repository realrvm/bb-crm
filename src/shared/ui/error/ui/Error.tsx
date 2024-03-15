import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/shared/lib/cn";

type ErrorType = {
  addClasses?: string;
} & ComponentPropsWithoutRef<"p">;

export const Error: FC<ErrorType> = (props) => {
  const { addClasses, children, ...rest } = props;

  return (
    <p className={cn("text-small text-deny", addClasses)} {...rest}>
      {children}
    </p>
  );
};
