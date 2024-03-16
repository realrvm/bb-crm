import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/navbar";

export const Settings: FC = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};
