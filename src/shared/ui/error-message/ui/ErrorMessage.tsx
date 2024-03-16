import { ComponentPropsWithoutRef, FC } from "react";

import clsx from "clsx";

type ErrorMessageProps = {
  addClasses?: string;
} & ComponentPropsWithoutRef<"p">;

export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  const { addClasses = "", children, ...rest } = props;

  return (
    <p className={clsx("text-deny", "text-small", addClasses)} {...rest}>
      {children}
    </p>
  );
};
