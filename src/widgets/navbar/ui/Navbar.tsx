import { cn } from "@/shared/lib/cn";
import { Routes, Tab } from "@/shared/lib/types";
import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

const tabs: Tab[] = [
  { caption: "Заявки", path: Routes.APPLICATIONS },
  { caption: "Aктивные займы", path: Routes.LOANS },
  { caption: "Финансы", path: Routes.FINANCES },
  { caption: "Настройки", path: Routes.SETTINGS },
];

export const Navbar: FC = () => {
  return (
    <ul className="flex">
      {tabs.map(({ caption, path }) => (
        <li key={caption}>
          <NavbarTab caption={caption} path={path} />
        </li>
      ))}
    </ul>
  );
};

const NavbarTab: FC<Tab> = memo(({ caption, path }) => {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn("inline-block py-4 px-3 heading-4 rounded-lg hover:bg-hover", isActive && "bg-tab")
        }
      >
        {caption}
      </NavLink>
    </div>
  );
});
