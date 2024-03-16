import { ComponentPropsWithoutRef, FC, forwardRef } from "react";

import { cn } from "@/shared/lib/cn";

type InputProps = {
  label: string;
  placeholder: string;
  addClasses?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input: FC<InputProps> = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "ref">
>((props, ref) => {
  const { addClasses = "", label, placeholder, ...rest } = props;

  return (
    <label className={cn("flex flex-col gap-2", addClasses)}>
      <span className="text-primary text-medium ">{label}</span>
      <input
        type="text"
        className="outline-none border border-border rounded-lg py-2 px-3 placeholder:text-secondary placeholder:text-medium focus:border-brand active:border-brand"
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </label>
  );
});
