import React from "react";
import { SuroboTeaching } from "@/components/surobo";
import { HintBox } from "./HintBox";
import { EditableText } from "../EditableText";

interface KeyPointsProps {
  pageNumber: number;
  unitNumber: number;
  unitTitle: string;
  unitGoal: string;
  textbookRef: string;
  title?: string;
  content: React.ReactNode;
  hint?: {
    text: string | React.ReactNode;
    isBlue?: boolean;
  };
  isScience?: boolean;
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
  isScience,
}) => {
  return (
    <div className="drill-page" style={{ textAlign: "left" }}>
      <div className="drill-header">
        <span className="drill-header__page-number number">{pageNumber}</span>
        <div className="drill-header__unit-info">
          <h2 className="drill-header__unit-title">
            {unitTitle.startsWith("ພາກທີ") ? (
              <EditableText dataPath="unitTitle">{unitTitle}</EditableText>
            ) : (
              <>
                {"ບົດທີ "}{unitNumber}{": "}
                <EditableText dataPath="unitTitle">{unitTitle}</EditableText>
              </>
            )}
          </h2>
          <p className="drill-header__unit-goal">
            {"ຈຸດປະສົງ: "}
            <EditableText dataPath="unitGoal">{unitGoal}</EditableText>
          </p>
          <p className="drill-header__textbook-ref">
            <EditableText dataPath="textbookRef">{textbookRef}</EditableText>
          </p>
        </div>
      </div>

      <div className="section-title">
        <div className="section-title__icon">📖</div>
        <span className="section-title__text">{isScience ? "ສະຫຼຸບຈຸດສຳຄັນ" : "ສູໂຣໂບ ສອນຈຸດສຳຄັນ"}</span>
        <span className="section-title__badge">ສະຫຼຸບ</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {title && (
          <div style={{ fontWeight: "bold", fontSize: "18px", color: "#E65100", margin: 0 }}>
            <EditableText dataPath="title">{title}</EditableText>
          </div>
        )}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {!isScience && <SuroboTeaching width={120} height={144} />}
          <div className="keypoints-content" style={{ flex: 1 }}>{content}</div>
        </div>
      </div>

      {hint && (
        <HintBox
          text={hint.text}
          isBlue={hint.isBlue}
          isScience={isScience}
          dataPath="keyPoints.hintText"
        />
      )}
    </div>
  );
};
