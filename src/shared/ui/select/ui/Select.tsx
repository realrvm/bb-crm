import { cn } from "@/shared/lib/cn";
import { ComponentPropsWithoutRef, FC, memo } from "react";

type SelectType = {
  label: string;
  options: { value: string; text: string }[];
  addClasses?: string;
} & ComponentPropsWithoutRef<"select">;

export const Select: FC<SelectType> = memo((props) => {
  const { addClasses = "", label, options, ...rest } = props;

  return (
    <label className={cn("flex flex-col gap-2", addClasses)}>
      <span className="text-primary text-medium">{label}</span>
      <div className="relative">
        <select
          className="appearance-none bg-white outline-none border border-border rounded-lg py-2 px-3 focus:border-brand active:border-brand w-full"
          {...rest}
        >
          {options.map(({ text, value }) => (
            <option value={value} key={value}>
              {text}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-5 pointer-events-none">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="#969696"
            />
          </svg>
        </div>
      </div>
    </label>
  );
});
