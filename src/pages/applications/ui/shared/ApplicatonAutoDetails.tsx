import { FC } from "react";

type ApplicationAutoDetailsType = {
  plate: string;
  make: string;
  model: string;
  year: string;
  vin: string;
};

export const ApplicationAutoDetails: FC<ApplicationAutoDetailsType> = ({
  plate,
  make,
  model,
  year,
  vin,
}) => {
  return (
    <>
      <h4 className="heading-4 mb-6">Данные залогового автомобиля</h4>
      <div className="grid grid-cols-3 gap-y-6">
        <dl>
          <dt className="text-small text-secondary mb-1">Гос. номер</dt>
          <dd className="heading-5 text-primary">{plate}</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Марка авто</dt>
          <dd className="heading-5 text-primary">{make}</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Модель авто</dt>
          <dd className="heading-5 text-primary">{model}</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1"></dt>
          <dd className="heading-5 text-primary"></dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Год выпуска</dt>
          <dd className="heading-5 text-primary">{year}</dd>
        </dl>
        <dl>
          <dt className="text-small text-secondary mb-1">Номер кузова/VIN</dt>
          <dd className="heading-5 text-primary">{vin}</dd>
        </dl>
      </div>
    </>
  );
};
