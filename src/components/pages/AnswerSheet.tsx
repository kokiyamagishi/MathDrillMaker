import React from "react";
import { SuroboProfessor } from "@/components/surobo";
import { HintBox } from "./HintBox";

interface AnswerItem {
  questionNumber: number | string;
  answers: React.ReactNode[];
}

interface UnitAnswerData {
  unitNumber: number;
  unitTitle: string;
  items: AnswerItem[];
  advice?: string | React.ReactNode;
  startPage: number;
  endPage: number;
}

interface AnswerSheetProps {
  pageNumber: number;
  unitData: UnitAnswerData;
}

export const AnswerSheet: React.FC<AnswerSheetProps> = ({ pageNumber, unitData }) => {
  const totalItems = unitData.items.length;
  
  // Helper function to calculate approximate string length of react node/text answers
  const getAnswerTextLength = (node: React.ReactNode): number => {
    if (typeof node === "string" || typeof node === "number") {
      return String(node).length;
    }
    if (React.isValidElement(node) && node.props) {
      const props = node.props as any;
      if (props.children) {
        if (Array.isArray(props.children)) {
          return props.children.reduce((acc: number, child: React.ReactNode) => acc + getAnswerTextLength(child), 0);
        }
        return getAnswerTextLength(props.children);
      }
    }
    return 0;
  };

  // Calculate the actual total number of answers/lines across all questions
  const totalAnswersCount = unitData.items.reduce((acc: number, item) => acc + item.answers.length, 0);

  // Calculate total sheet text length and max single answer length to detect long text answers
  const totalSheetLength = unitData.items.reduce((acc: number, item) => {
    return acc + item.answers.reduce((ansAcc: number, ans) => ansAcc + getAnswerTextLength(ans), 0);
  }, 0);

  const maxSingleAnswerLength = unitData.items.reduce((acc: number, item) => {
    return Math.max(acc, item.answers.reduce((ansAcc: number, ans) => Math.max(ansAcc, getAnswerTextLength(ans)), 0));
  }, 0);

  // Dynamically scale font size, gaps, and padding based on the total items AND total answers count AND text lengths
  // to ensure everything fits into exactly one A4 page without cutoffs.
  let fontSize = "15px";
  let gap = "6px 10px";
  let professorWidth = 65;
  let professorHeight = 78;
  let titleMargin = "0 0 6px 0";
  let titleSize = "1.1rem";
  let adviceMargin = "6px";
  let lineHeight = "1.25";
  let hideAdvice = false;

  // Trigger super-squeeze if total answers are huge OR total sheet characters are massive (Lao text size) OR any single answer is extremely verbose
  if (totalAnswersCount >= 22 || totalItems >= 15 || totalSheetLength >= 350) {
    // Hyper-squeeze layout for absolute maximum density sheets
    gap = "0.5px 1px";
    professorWidth = 0;
    professorHeight = 0;
    titleMargin = "0 0 1px 0";
    titleSize = "0.74rem";
    adviceMargin = "0px";
    lineHeight = "1.04";
    hideAdvice = true;
  } else if (totalAnswersCount >= 14 || totalItems >= 10 || totalSheetLength >= 220 || maxSingleAnswerLength >= 50) {
    // Super-squeeze layout
    gap = "1px 1.5px";
    professorWidth = 0; // Hide avatar to maximize content width
    professorHeight = 0;
    titleMargin = "0 0 1px 0";
    titleSize = "0.80rem";
    adviceMargin = "1px";
    lineHeight = "1.08";
    hideAdvice = true; // Automatically hide advice box to gain 100px+ height
  } else if (totalAnswersCount >= 8 || totalItems >= 6 || totalSheetLength >= 140 || maxSingleAnswerLength >= 30) {
    // Squeeze layout for large units
    gap = "1.5px 2px";
    professorWidth = 30;
    professorHeight = 36;
    titleMargin = "0 0 2px 0";
    titleSize = "0.86rem";
    adviceMargin = "2px";
    lineHeight = "1.14";
  } else if (totalAnswersCount >= 5 || totalItems >= 4) {
    gap = "2.5px 4px";
    professorWidth = 40;
    professorHeight = 48;
    titleMargin = "0 0 3px 0";
    titleSize = "0.96rem";
    adviceMargin = "3px";
    lineHeight = "1.18";
  }

  return (
    <div className="drill-page" style={{ textAlign: "left" }}>
      <div className="drill-header">
        <span className="drill-header__page-number number">{pageNumber}</span>
        <div className="drill-header__unit-info">
          <h2 className="drill-header__unit-title">
            {unitData.unitTitle.startsWith("ພາກທີ") ? `ເຈ້ຍຄຳຕອບ (${unitData.unitTitle.split(":")[0]})` : `ເຈ້ຍຄຳຕອບ (ບົດທີ ${unitData.unitNumber})`}
          </h2>
          <p className="drill-header__unit-goal">ກວດຄຳຕອບ ແລະ ທົບທວນ</p>
        </div>
      </div>

      <div className="section-title" style={{ marginBottom: totalItems >= 8 ? "6px" : "12px" }}>
        <div className="section-title__icon">📝</div>
        <span className="section-title__text">ຄຳຕອບ</span>
      </div>

      <div style={{ display: "flex", gap: professorWidth > 0 ? "10px" : "0px", alignItems: "flex-start" }}>
        {professorWidth > 0 && <SuroboProfessor width={professorWidth} height={professorHeight} />}
        
        <div style={{ flex: 1 }}>
          <div className="answer-sheet">
            <div className="answer-sheet__unit">
              <h4 className="answer-sheet__title" style={{ fontSize: titleSize, margin: titleMargin }}>
                {unitData.unitTitle.startsWith("ພາກທີ") ? unitData.unitTitle : `ບົດທີ ${unitData.unitNumber}: ${unitData.unitTitle}`} (ໜ້າທີ່ {unitData.startPage}-{unitData.endPage})
              </h4>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(12, 1fr)", 
                gap: gap, 
                marginTop: "3px", 
                marginBottom: "3px", 
                fontSize: fontSize 
              }}>
                {unitData.items.map((item, idx) => {
                  const qNumStr = String(item.questionNumber);
                  
                  const totalAnswerLength = item.answers.reduce((acc: number, ans) => acc + getAnswerTextLength(ans), 0);
                  const maxSingleLength = item.answers.reduce((acc: number, ans) => Math.max(acc, getAnswerTextLength(ans)), 0);

                  // Intelligent span assignment (12-column grid)
                  let span = 4; // Default to 3 columns (span 4)

                  if (qNumStr.includes("ທ້າທາຍ") || qNumStr.includes("ທົດສອບປະຈຳບົດ") || qNumStr.includes("Challenge")) {
                    span = 6; // 2 columns (span 6) for challenge questions
                  }
                  
                  // Relaxed thresholds optimized for Lao explanation text lengths
                  if (maxSingleLength > 130 || totalAnswerLength > 220 || item.answers.length >= 5) {
                    span = 12; // 1 column (span 12) - only for exceptionally long paragraph answers
                  } else if (maxSingleLength > 55 || totalAnswerLength > 90 || item.answers.length >= 3) {
                    span = 6; // 2 columns (span 6) - medium length
                  } else if (totalItems >= 8) {
                    // For dense answer sheets, pack into 4 columns (span 3) if short
                    span = 3;
                  }

                  return (
                    <div key={idx} style={{ gridColumn: `span ${span}` }}>
                      <p style={{ marginBottom: "1px", fontWeight: "bold" }}>ຄຳຖາມ {item.questionNumber}:</p>
                      <div style={{ paddingLeft: "4px", lineHeight: lineHeight }}>
                        {item.answers.map((answer, aIdx) => (
                          <div key={aIdx} style={{ marginBottom: "1px" }}>{answer}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {unitData.advice && !hideAdvice && (
            <div style={{ marginTop: adviceMargin }}>
              <HintBox
                text={
                  <>
                    💡 <strong>ສູໂຣໂບ ບອກ:</strong> {unitData.advice}
                  </>
                }
                isBlue
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
