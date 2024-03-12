import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

import { ButtonThemes } from "@/shared/lib/types";
import { cn } from "@/shared/lib/cn";

type SimpleButtonProps = {
  theme?: ButtonThemes;
  addClasses?: string;
} & ComponentPropsWithoutRef<"button">;

export const SimpleButton: FC<PropsWithChildren<SimpleButtonProps>> = (
  props,
) => {
  const {
    theme = ButtonThemes.PRIMARY,
    addClasses = "",
    children,
    ...rest
  } = props;

  return (
    <button className={cn(theme, addClasses)} {...rest}>
      {children}
    </button>
  );
};
