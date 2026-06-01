import React from "react";
import { SuroboCheering } from "@/components/surobo";
import { ProblemData } from "./BasicProblems";

interface UnitSummaryProps {
  pageNumber: number;
  unitNumber: number;
  unitTitle: string;
  problems: ProblemData[];
}

export const UnitSummary: React.FC<UnitSummaryProps> = ({ pageNumber, unitNumber, unitTitle, problems }) => {
  return (
    <div className="drill-page" style={{ textAlign: "left" }}>
      <div className="drill-header">
        <span className="drill-header__page-number number">{pageNumber}</span>
        <div className="drill-header__unit-info">
          <h2 className="drill-header__unit-title">
            {unitTitle.startsWith("ພາກທີ") ? `${unitTitle.split(":")[0]} - ບົດທົດສອບປະຈຳບົດ` : `ບົດທີ ${unitNumber} - ບົດທົດສອບປະຈຳບົດ`}
          </h2>
          <p className="drill-header__unit-goal">
            {unitTitle.startsWith("ພາກທີ") ? unitTitle.split(":")[1]?.trim() || unitTitle : unitTitle} ຂອງການທົດສອບຄວາມຮູ້
          </p>
        </div>
      </div>

      <div className="drill-meta">
        <div className="drill-meta__date">
          <span>ວັນທີ:</span>
          <span className="drill-meta__date-line"></span>
        </div>
        <div className="drill-meta__score">
          <span className="drill-meta__score-blank"></span>
          <span>/ 10 ຄະແນນ</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" }}>
        <div className="section-title" style={{ marginBottom: 0 }}>
          <div className="section-title__icon">👑</div>
          <span className="section-title__text">ບົດທົດສອບປະຈຳບົດ</span>
        </div>
        <SuroboCheering width={80} height={96} />
      </div>

      <div className="problem-area">
        {problems.map((problem, index) => (
          <div key={problem.number} className="problem" style={{ marginTop: index > 0 ? "36px" : "0px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", width: "100%" }}>
              <span className="problem__number">{problem.number}</span>
              <div className="problem__content" style={{ flex: 1, minWidth: 0 }}>{problem.content}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
