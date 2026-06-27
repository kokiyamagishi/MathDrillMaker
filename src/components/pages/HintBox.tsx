import React from "react";
import { SuroboThinking } from "@/components/surobo";
import { EditableText } from "../EditableText";

interface HintBoxProps {
  text: string | React.ReactNode;
  isBlue?: boolean;
  isScience?: boolean;
  dataPath?: string;
}

export const HintBox: React.FC<HintBoxProps> = ({ text, isBlue = false, isScience = false, dataPath }) => {
  if (!text) return null;
  return (
    <div className={`hint-box ${isBlue ? "hint-box--blue" : ""}`} style={isScience ? { paddingLeft: "20px" } : {}}>
      {!isScience && (
        <div className="hint-box__surobo" key="surobo-icon">
          <SuroboThinking width={50} height={60} />
        </div>
      )}
      <div className="hint-box__text" key="surobo-speech">
        <div className="hint-box__speech" style={isScience ? { padding: "12px 16px", marginTop: 0 } : {}}>
          {dataPath && typeof text === "string" ? (
            <EditableText dataPath={dataPath}>{text}</EditableText>
          ) : (
            text
          )}
        </div>
      </div>
    </div>
  );
};
