import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Contract } from "@/shared/assets/icons/Contract";
import { Title } from "@/shared/ui/title";
import { Navbar } from "@/widgets/navbar";
import { Pen } from "@/shared/assets/icons/Pen";

export const Settings: FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Navbar />
      <div className="mt-9">
        <Title title="Шаблоны документов" />
        <div className="flex flex-col gap-4 mt-4 mb-9">
          <button
            className="flex items-center gap-3 self-start"
            onClick={() => navigate("/")}
          >
            <Contract />
            <span>Договор микрозайма</span>
          </button>
          <button
            className="flex items-center gap-3 self-start"
            onClick={() => navigate("/")}
          >
            <Contract />
            <span>Договор залога</span>
          </button>
        </div>
        <Title title="Калькулятор" />
        <button
          className="flex items-center gap-3 mt-4"
          onClick={() => navigate("/")}
        >
          <Pen />
          <span>Настроить</span>
        </button>
      </div>
    </section>
  );
};
