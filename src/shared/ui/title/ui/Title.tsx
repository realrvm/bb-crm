import { ComponentPropsWithoutRef, FC } from "react";
import { z } from "zod";

import { cn } from "@/shared/lib/cn";

const TitleSchema = z.string();

type TitleType = {
  title: z.infer<typeof TitleSchema>;
  addClasses?: string;
} & ComponentPropsWithoutRef<"h1">;

export const Title: FC<TitleType> = (props) => {
  const { title, addClasses = "", ...rest } = props;

  TitleSchema.parse(title);

  return (
    <h1 className={cn("heading-2 text-primary", `${addClasses}`)} {...rest}>
      {title}
    </h1>
  );
};
