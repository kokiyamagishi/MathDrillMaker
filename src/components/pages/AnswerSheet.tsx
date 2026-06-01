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

      <div className="section-title">
        <div className="section-title__icon">📝</div>
        <span className="section-title__text">ຄຳຕອບ</span>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <SuroboProfessor width={100} height={120} />
        
        <div style={{ flex: 1 }}>
          <div className="answer-sheet">
            <div className="answer-sheet__unit">
              <h4 className="answer-sheet__title">
                {unitData.unitTitle.startsWith("ພາກທີ") ? unitData.unitTitle : `ບົດທີ ${unitData.unitNumber}: ${unitData.unitTitle}`} (ໜ້າທີ່ {unitData.startPage}-{unitData.endPage})
              </h4>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px 16px", marginTop: "12px", marginBottom: "12px" }}>
                {unitData.items.map((item, idx) => {
                  const qNumStr = String(item.questionNumber);
                  let span = 6; // default 1 column
                  
                  if (qNumStr === "1" || qNumStr === "2" || qNumStr === "3") {
                    span = 2; // 3 columns
                  } else if (qNumStr === "ທ້າທາຍ 1" || qNumStr === "ທ້າທາຍ 2") {
                    span = 3; // 2 columns
                  }
                  
                  return (
                    <div key={idx} style={{ gridColumn: `span ${span}` }}>
                      <p style={{ marginBottom: "2px" }}><strong>ຄຳຖາມ {item.questionNumber}:</strong></p>
                      <div style={{ paddingLeft: "8px" }}>
                        {item.answers.map((answer, aIdx) => (
                          <div key={aIdx} style={{ marginBottom: "2px" }}>{answer}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {unitData.advice && (
            <div style={{ marginTop: "12px" }}>
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
