import React from "react";
import { SuroboGreeting } from "@/components/surobo";

interface CoverPageProps {
  title: string;
  subtitle: string;
}

export const CoverPage: React.FC<CoverPageProps> = ({ title, subtitle }) => {
  return (
    <div className="drill-page drill-page--cover">
      <div className="cover">
        <SuroboGreeting width={180} height={216} />
        <h1 className="cover__title">{title}</h1>
        <p className="cover__subtitle">{subtitle}</p>
        <div className="cover__input-area">
          <div className="cover__input-row">
            <span>ຊື່ ແລະ ນາມສະກຸນ:</span>
            <span className="cover__input-line"></span>
          </div>
          <div className="cover__input-row">
            <span>ຫ້ອງ:</span>
            <span className="cover__input-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
