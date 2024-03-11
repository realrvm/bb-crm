import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonThemes } from "@/shared/lib/types";

type ComplexButtonProps = {
  icon: "cross" | "arrow-back";
  theme?: ButtonThemes;
} & ComponentPropsWithoutRef<"button">;

export const ComplexButton: FC<PropsWithChildren<ComplexButtonProps>> = (
  props,
) => {
  const navigate = useNavigate();
  const { theme = ButtonThemes.ICON, icon, children, ...rest } = props;

  const handleComplexButtonClick = () => {
    if (icon === "arrow-back") {
      navigate(-1);
    }

    if (icon === "cross") {
      console.log("docs");
    }
  };

  return (
    <button className={theme} {...rest} onClick={handleComplexButtonClick}>
      <img src={`/${icon}.svg`} alt={icon} />
      <span>{children}</span>
    </button>
  );
};
