import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between mt-5 mb-6">
      <div>
        <Link
          className="inline-block bg-logo bg-no-repeat w-[162px] h-9"
          to="/"
        />
        <span className="inline-block heading-6 text-brand align-top font-bold">CRM</span>
      </div>
      <div className="flex gap-2">
        <button>
          <span className="inline-block bg-exit bg-no-repeat w-5 h-[18px]"></span>
        </button>
        <span className="text-medium text-primary -translate-y-1">
          Александр
        </span>
      </div>
    </header>
  );
};
