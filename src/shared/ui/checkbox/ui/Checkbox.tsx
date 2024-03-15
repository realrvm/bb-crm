import { ComponentPropsWithoutRef, FC, memo } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type CheckboxProps = {
  isChecked?: boolean;
  handleCheck: (value: boolean) => void;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox: FC<CheckboxProps> = memo((props) => {
  const { isChecked = false, handleCheck, ...rest } = props;

  return (
    <input
      type="checkbox"
      className={clsx(styles["checkbox"], { [styles["checked"]]: isChecked })}
      checked={isChecked}
      onChange={(e) => handleCheck(e.target.checked)}
      {...rest}
    />
  );
});
