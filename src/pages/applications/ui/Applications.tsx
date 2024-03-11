import { Steps } from "@/shared/ui/steps/Steps";
import { Navbar } from "@/widgets/navbar";
import { FC } from "react";

export const Applications: FC = () => {
  return (
    <section>
      <Navbar />
      <p className="text-medium text-brand">main</p>
      <Steps step={1} />
    </section>
  );
};
