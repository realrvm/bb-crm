import { FC, PropsWithChildren } from "react";

export const AppRouter: FC<PropsWithChildren> = ({ children }) => {
  return <main className="container">{children}</main>;
};
