import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

import { ButtonThemes } from "@/shared/lib/types";

type SimpleButtonProps = {
  theme?: ButtonThemes;
} & ComponentPropsWithoutRef<"button">;

export const SimpleButton: FC<PropsWithChildren<SimpleButtonProps>> = (
  props,
) => {
  const { theme = ButtonThemes.PRIMARY, children, ...rest } = props;

  return (
    <button className={theme} {...rest}>
      {children}
    </button>
  );
};
