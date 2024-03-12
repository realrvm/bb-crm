import { ComponentPropsWithoutRef, FC, memo } from "react";

import { cn } from "@/shared/lib/cn";

type InputType = {
  label: string;
  placeholder: string;
  addClasses?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input: FC<InputType> = memo((props) => {
  const { addClasses = "", label, placeholder, ...rest } = props;

  return (
    <label className={cn("flex flex-col gap-2", addClasses)}>
      <span className="text-primary text-medium ">{label}</span>
      <input
        type="text"
        className="outline-none border border-border rounded-lg py-2 px-3 placeholder:text-secondary placeholder:text-medium focus:border-brand active:border-brand"
        placeholder={placeholder}
        {...rest}
      />
    </label>
  );
});
