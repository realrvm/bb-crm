import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/shared/lib/cn";
import {
  getApplicationStatus,
  getPathsByStep,
  getStatusByApplication,
} from "@/shared/lib/utils/getApplicationStatus";
import { Steps } from "@/shared/ui/steps/Steps";
import { Navbar } from "@/widgets/navbar";

type ApplicationType = {
  uid: number;
  id: number;
  date: string;
  phone: string;
  sum: string;
  term: string;
  step: string;
};

type OptionType = {
  value: string;
};

// моковые данные. Потом переписать && удалить
const applicationsArray: ApplicationType[] = [
  {
    uid: 1,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 114 44 23	",
    sum: "---",
    term: "---",
    step: "1",
  },
  {
    uid: 2,
    id: 654321,
    date: "06.08.2023",
    phone: "+7 (924) 115 44 23	",
    sum: "20 000",
    term: "36",
    step: "2",
  },
  {
    uid: 3,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 115 44 23	",
    sum: "30 000",
    term: "36",
    step: "3",
  },
  {
    uid: 4,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 116 44 23	",
    sum: "40 000",
    term: "48",
    step: "4",
  },
  {
    uid: 5,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 114 44 23	",
    sum: "10 000",
    term: "48",
    step: "5",
  },
  {
    uid: 6,
    id: 654321,
    date: "06.08.2023",
    phone: "+7 (924) 114 44 23	",
    sum: "20 000",
    term: "24",
    step: "8",
  },
  {
    uid: 7,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 114 44 23	",
    sum: "30 000",
    term: "36",
    step: "6",
  },
  {
    uid: 8,
    id: 123456,
    date: "06.08.2023",
    phone: "+7 (924) 114 44 23	",
    sum: "40 000",
    term: "24",
    step: "7",
  },
];

const termOptions: OptionType[] = [
  { value: "Срок: Все" },
  { value: "24" },
  { value: "36" },
  { value: "48" },
  { value: "60" },
];

const statusOptions: OptionType[] = [
  { value: "Статус: Все" },
  { value: "Новая" },
  { value: "Сумма займа определена" },
  { value: "Данные авто определены" },
  { value: "Оценка авто" },
  { value: "Одобрена" },
  { value: "Проверка данных" },
  { value: "Работа агента" },
  { value: "Отказ" },
];

const terms = ["24", "36", "48", "60"];

export const ApplicationMain = () => {
  const { applications } = useGetApplications();
  const [filteredApplications, setFilteredApplications] = useState<
    ApplicationType[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (applications.length > 0) {
      setFilteredApplications(applications);
    }
  }, [applications]);

  const filterApplications = useCallback(
    (condition: string, key: keyof ApplicationType) => {
      const filtered = applications.filter((application) => {
        if (
          condition.includes("Срок: Все") ||
          condition.includes("Статус: Все")
        ) {
          return true;
        }

        if (key === "id") {
          return (
            application.id.toString().includes(condition.toLowerCase()) ||
            application.phone.toLowerCase().includes(condition.toLowerCase())
          );
        }

        if (key === "term") {
          return application.term
            .toLowerCase()
            .includes(condition.toLowerCase());
        }

        if (key === "step") {
          const step = getStatusByApplication(condition);
          return application.step.toLowerCase().includes(step.toLowerCase());
        }

        return true;
      });

      setFilteredApplications(filtered);
    },
    [applications],
  );
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center mt-6 mb-4">
        <ApplictionSearchInput
          onChangeCb={filterApplications}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className="flex gap-2">
          <ApplicationSearchSelect
            options={termOptions}
            width={200}
            onChangeCb={filterApplications}
            setInputValue={setInputValue}
          />
          <ApplicationSearchSelect
            options={statusOptions}
            width={316}
            onChangeCb={filterApplications}
            setInputValue={setInputValue}
          />
        </div>
      </div>
      <div className="rounded-lg border border-border overflow-hidden mt-4">
        <table className="w-full">
          <thead>
            <tr className="bg-hover">
              <th className="text-small pl-4 py-3 w-[100px] text-left">ID</th>
              <th className="text-small py-3 w-[140px] text-left">
                Дата создания
              </th>
              <th className="text-small py-3 w-[256px] text-left">Телефон</th>
              <th className="text-small py-3 w-[140px] text-left">Сумма, ₽</th>
              <th className="text-small py-3 w-[240px] text-left">Срок</th>
              <th className="text-small py-3 text-left">Статус</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((application, index, arr) => {
              const isLast = index === arr.length - 1;

              return (
                <Application
                  key={application.uid}
                  application={application}
                  isLast={isLast}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const Application = ({
  application,
  isLast,
}: {
  application: ApplicationType;
  isLast: boolean;
}) => {
  const { uid, id, date, phone, sum, term, step } = application;
  const status = getApplicationStatus(step);

  const navigate = useNavigate();

  const navigateToApplication = useCallback(() => {
    const path = getPathsByStep(step);

    navigate(`${path}/${uid}`);
  }, [step, navigate, uid]);

  return (
    <tr
      className={
        isLast
          ? "hover:bg-hover cursor-pointer"
          : "border-b border-border hover:bg-hover cursor-pointer"
      }
      onClick={navigateToApplication}
    >
      <td className="pl-4 py-3 text-medium text-primary">{id}</td>
      <td className="py-3 text-medium text-primary">{date}</td>
      <td className="py-3 text-medium text-primary">{phone}</td>
      <td className="py-3 text-medium text-primary">{sum}</td>
      <td className="py-3 text-medium text-primary">
        {term !== "---" ? `${term} месяца` : "---"}
      </td>
      <td className="py-3 pr-4 text-medium text-primary flex justify-between">
        <span
          className={cn("heading-5 text-primary", {
            "text-deny": status === "Отказ",
          })}
        >
          {status}
        </span>
        <Steps step={step} />
      </td>
    </tr>
  );
};

const ApplictionSearchInput = memo(
  ({
    onChangeCb,
    inputValue,
    setInputValue,
  }: {
    onChangeCb: (inputValue: string, key: keyof ApplicationType) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
  }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      setInputValue(inputValue);

      onChangeCb && onChangeCb(inputValue, "id");
    };

    return (
      <div className="relative">
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          className="border border-border rounded  pl-2 py-3 pr-12 outline-none focus:border-brand active:border-brand placeholder:text-secondary"
          placeholder="Поиск по тел. или ID"
        />
        <div className="absolute right-4 top-4 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z"
              fill="#969696"
            />
          </svg>
        </div>
      </div>
    );
  },
);

const ApplicationSearchSelect = memo(
  ({
    options,
    width,
    onChangeCb,
    setInputValue,
  }: {
    options: OptionType[];
    width: number;
    onChangeCb: (value: string, key: keyof ApplicationType) => void;
    setInputValue: (value: string) => void;
  }) => {
    const [selectedValue, setSelectedValue] = useState<string>("");

    useEffect(() => {
      onChangeCb &&
        onChangeCb(
          selectedValue,
          terms.includes(selectedValue) ? "term" : "step",
        );
      setInputValue("");
    }, [selectedValue, onChangeCb, setInputValue]);

    return (
      <div className="relative">
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          style={{ width: `${width}px` }}
          className="border border-border bg-white rounded py-3 pl-2 pr-12 outline-none appearance-none text-medium focus:border-brand active:border-brand"
        >
          {options.map(({ value }) => (
            <option key={value} value={value}>
              {value}
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
    );
  },
);

function useGetApplications() {
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  useEffect(() => {
    // async fetch here
    setApplications(applicationsArray);
  }, [applications]);

  return { applications };
}
