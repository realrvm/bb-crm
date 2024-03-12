import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonThemes } from "@/shared/lib/types";
import { cn } from "@/shared/lib/cn";

type ComplexButtonProps = {
  icon: "cross" | "arrow-back";
  theme?: ButtonThemes;
  addClasses?: string;
  handleComplexButton?: () => void;
} & ComponentPropsWithoutRef<"button">;

export const ComplexButton: FC<PropsWithChildren<ComplexButtonProps>> = (
  props,
) => {
  const navigate = useNavigate();
  const {
    theme = ButtonThemes.ICON,
    handleComplexButton,
    icon,
    addClasses = "",
    children,
    ...rest
  } = props;

  const handleComplexButtonClick = () => {
    if (icon === "arrow-back") {
      navigate(-1);
    }

    if (icon === "cross") {
      handleComplexButton && handleComplexButton();
    }
  };

  return (
    <button
      className={cn(theme, addClasses)}
      {...rest}
      onClick={handleComplexButtonClick}
    >
      <img src={`/${icon}.svg`} alt={icon} />
      <span>{children}</span>
    </button>
  );
};
