import { FC } from "react";

type ApplicationAutoImagesType = {
  front: string;
  side: string;
  back: string;
};

export const ApplicationAutoImages: FC<ApplicationAutoImagesType> = ({
  front,
  side,
  back,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-6">
        <div className="flex items-center gap-3">
          <img src={front} alt="" />
          <span className="heading-5 text-primary">Спереди</span>
        </div>
        <div className="flex items-center gap-3">
          <img src={side} alt="" />
          <span className="heading-5 text-primary">Сбоку</span>
        </div>
        <div className="flex items-center gap-3">
          <img src={back} alt="" />
          <span className="heading-5 text-primary">Сзади</span>
        </div>
      </div>
    </>
  );
};
