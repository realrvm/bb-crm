import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Applications: FC = () => {
  return (
    <section>
      <Outlet />
    </section>
  );
};
