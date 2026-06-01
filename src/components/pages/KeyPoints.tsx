import React from "react";
import { SuroboTeaching } from "@/components/surobo";
import { HintBox } from "./HintBox";

interface KeyPointsProps {
  pageNumber: number;
  unitNumber: number;
  unitTitle: string;
  unitGoal: string;
  textbookRef: string;
  title?: string;
  content: React.ReactNode;
  hint?: {
    text: string;
    isBlue?: boolean;
  };
}

export const KeyPoints: React.FC<KeyPointsProps> = ({
  pageNumber,
  unitNumber,
  unitTitle,
  unitGoal,
  textbookRef,
  title,
  content,
  hint,
}) => {
  return (
    <div className="drill-page" style={{ textAlign: "left" }}>
      <div className="drill-header">
        <span className="drill-header__page-number number">{pageNumber}</span>
        <div className="drill-header__unit-info">
          <h2 className="drill-header__unit-title">
            {unitTitle.startsWith("ພາກທີ") ? unitTitle : `ບົດທີ ${unitNumber}: ${unitTitle}`}
          </h2>
          <p className="drill-header__unit-goal">ຈຸດປະສົງ: {unitGoal}</p>
          <p className="drill-header__textbook-ref">{textbookRef}</p>
        </div>
      </div>

      <div className="section-title">
        <div className="section-title__icon">📖</div>
        <span className="section-title__text">ສູໂຣໂບ ສອນຈຸດສຳຄັນ</span>
        <span className="section-title__badge">ສະຫຼຸບ</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {title && (
          <div style={{ fontWeight: "bold", fontSize: "18px", color: "#E65100", margin: 0 }}>
            {title}
          </div>
        )}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <SuroboTeaching width={120} height={144} />
          <div className="keypoints-content" style={{ flex: 1 }}>{content}</div>
        </div>
      </div>

      {hint && (
        <HintBox text={hint.text} isBlue={hint.isBlue} />
      )}
    </div>
  );
};
