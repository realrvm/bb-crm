import { FC, useState } from "react";

import { Wrapper } from "@/widgets/wrapper";
import { Input } from "@/shared/ui/input";
import { Checkbox } from "@/shared/ui/checkbox";
import { SimpleButton } from "@/shared/ui/simple-button";
import { SettingsCalculatorType, useAppForm } from "./SettingsCalculatorSchema";
import { ErrorMessage } from "@/shared/ui/error-message";

const inputs: {
  id: number;
  key: keyof SettingsCalculatorType;
  placeholder: number;
  label: string;
}[] = [
  {
    id: 1,
    key: "monthly_rate",
    placeholder: 18,
    label: "Процентная ставка в месяц, %",
  },
  {
    id: 2,
    key: "commission_on_issue",
    placeholder: 0,
    label: "Комиссия при выдаче, ₽",
  },
  {
    id: 3,
    key: "commission_monthly",
    placeholder: 0,
    label: "Ежемесячная комиссия, ₽",
  },
  {
    id: 4,
    key: "monthly_insurance",
    placeholder: 0,
    label: "Страхование ежемесячно, ₽",
  },
  {
    id: 5,
    key: "last_installment",
    placeholder: 0,
    label: "Последний взнос, ₽",
  },
];

export const SettingsCalculator: FC = () => {
  return (
    <div className="flex mt-10">
      <Wrapper step="0" application_id="Настройка калькулятора">
        <SettingsCalculatorContent />
      </Wrapper>
    </div>
  );
};

const SettingsCalculatorContent: FC = () => {
  const [checkComission, setCheckComission] = useState(false);
  const [checkPercents, setCheckPercents] = useState(false);

  const { register, handleSubmit, errors } = useAppForm();

  const handleCheckComission = (state: boolean) => {
    setCheckComission(state);
  };

  const handleCheckPercents = (state: boolean) => {
    setCheckPercents(state);
  };

  return (
    <form
      className="w-[408px] mx-auto my-9"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="flex flex-col gap-4">
        {inputs.map((input) => {
          const { id, key, placeholder, label } = input;

          return (
            <div key={id} className="flex flex-col gap-2">
              <Input
                placeholder={placeholder.toString()}
                label={label}
                {...register(key)}
              />
              {errors[key] && (
                <ErrorMessage>{errors[key]?.message}</ErrorMessage>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 my-9">
        <Checkbox
          label="Разбить комиссию при выдаче в ежемесячные платежи"
          handleCheck={handleCheckComission}
          name="comission"
          checked={checkComission}
        />
        <Checkbox
          label="Начислять проценты на последний взнос"
          handleCheck={handleCheckPercents}
          name="percents"
          checked={checkPercents}
        />
      </div>
      <SimpleButton type="submit" addClasses="w-full">
        Сохранить
      </SimpleButton>
    </form>
  );
};
