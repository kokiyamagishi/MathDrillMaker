import React from "react";
import { SuroboThinking } from "@/components/surobo";

interface HintBoxProps {
  text: string | React.ReactNode;
  isBlue?: boolean;
}

export const HintBox: React.FC<HintBoxProps> = ({ text, isBlue = false }) => {
  if (!text) return null;
  return (
    <div className={`hint-box ${isBlue ? "hint-box--blue" : ""}`}>
      <div className="hint-box__surobo">
        <SuroboThinking width={50} height={60} />
      </div>
      <div className="hint-box__text">
        <div className="hint-box__speech">{text}</div>
      </div>
    </div>
  );
};
