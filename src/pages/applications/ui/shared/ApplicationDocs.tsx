import { FC } from "react";

import { ButtonThemes } from "@/shared/lib/types";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { SimpleButton } from "@/shared/ui/simple-button";

export const ApplicationDocs: FC<{
  setShowDocs?: (state: boolean) => void;
  isShowBtns?: boolean;
}> = ({ setShowDocs = () => {}, isShowBtns = true }) => {
  return (
    <div className="border border-border rounded-lg p-6 my-6">
      <div className="flex gap-6 items-center mb-6">
        <h3 className="heading-3">Документы</h3>
        {isShowBtns && (
          <SimpleButton
            theme={ButtonThemes.DENY}
            onClick={() => setShowDocs(false)}
            addClasses="px-3 py-1.5"
          >
            Удалить
          </SimpleButton>
        )}
      </div>
      <ApplicationDocsForm isShowBtns={isShowBtns} />
    </div>
  );
};

const ApplicationDocsForm: FC<{ isShowBtns?: boolean }> = ({
  isShowBtns = true,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="border-b border-b-border pb-6">
        <div className="flex gap-6 items-center mb-4">
          <img src="/placeholder.png" alt="passport" />
          <h4 className="heading-4">Разворот паспорта с фото</h4>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Input
            label="ФИО"
            placeholder="Иванов Иван Иванович"
            addStyles="col-span-2"
          />
          <Input
            label="Серия и номер паспорта"
            placeholder="0000 000000"
            addStyles="col-span-1"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Input label="Дата рождения" placeholder="00.00.0000" />
          <Input label="Место рождения" placeholder="" />
          <Select
            label="Пол"
            options={[
              { value: "male", text: "Мужской" },
              { value: "female", text: "Женский" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 mb-4">
          <Input label="Кем выдан" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input label="Дата выдачи" placeholder="00.00.0000" />
          <Input label="Код подразделения" placeholder="000-000" />
        </div>
      </div>
      <div className="border-b border-b-border py-6">
        <div className="flex gap-6 items-center mb-4">
          <img src="/placeholder.png" alt="passport" />
          <h4 className="heading-4">Разворот с пропиской</h4>
        </div>
        <div className="grid grid-cols-1">
          <Input label="Адрес регистрации" placeholder="" />
        </div>
      </div>
      <div className="pt-6">
        <div className="flex gap-6 items-center mb-4">
          <div className="flex items-center gap-2">
            <img src="/placeholder.png" alt="passport" />
            <img src="/placeholder.png" alt="passport" />
            <img src="/placeholder.png" alt="passport" />
          </div>
          <h4 className="heading-4">ПТС</h4>
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input label="1. Идентификационный номер (VIN)" placeholder="" />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input label="2. Марка, модель ТС" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="3. Наименование (тип ТС)" placeholder="" />
          <Input label="4. Категория ТС (A, B, C, D, прицеп)" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="5. Год изготовления ТС" placeholder="" />
          <Input label="6. Модель, № двигателя" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="7. Шасси (рама) №" placeholder="" />
          <Input label="8. Кузов (кабина, прицеп) №" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="9. Цвет кузова (кабины, прицепа)" placeholder="" />
          <Input label="10. Мощность двигателя, л. с. (кВт)" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="11. Рабочий объем двигателя, куб. см" placeholder="" />
          <Input label="12. Тип двигателя" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="13. Экологический класс" placeholder="" />
          <Input
            label="14. Разрешенная максимальная масса, кг"
            placeholder=""
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="15. Масса без нагрузки, кг" placeholder="" />
          <Input
            label="16. Организация-изготовитель ТС (страна)"
            placeholder=""
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="17. Одобрение типа ТС №" placeholder="" />
          <Input label="18. Страна вывоза ТС" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Input label="19. Серия, № ТД, ТПО" placeholder="" />
          <Input label="20. Таможенное ограничения" placeholder="" />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input
            label="21. Наименование (ф. и. о.) собственника ТС"
            placeholder=""
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input label="22. Адрес" placeholder="" />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input
            label="23. Наименование организации, выдавшей паспорт"
            placeholder=""
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <Input label="24. Адрес" placeholder="" />
        </div>
        <div className="grid grid-cols-1">
          <Input label="25. Дата выдачи паспорта" placeholder="" />
        </div>
      </div>
      {isShowBtns && (
        <div className="flex items-center justify-between mt-6">
          <SimpleButton type="submit">Добавить документы</SimpleButton>
          <SimpleButton theme={ButtonThemes.DENY}>Удалить</SimpleButton>
        </div>
      )}
    </form>
  );
};
