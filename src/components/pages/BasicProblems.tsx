import React from "react";
import { SuroboCheering } from "@/components/surobo";

export interface ProblemData {
  number: number;
  content: React.ReactNode;
}

interface BasicProblemsProps {
  pageNumber: number;
  unitNumber: number;
  unitTitle: string;
  problems: ProblemData[];
}

export const BasicProblems: React.FC<BasicProblemsProps> = ({
  pageNumber,
  unitNumber,
  unitTitle,
  problems,
}) => {
  return (
    <div className="drill-page" style={{ textAlign: "left" }}>
      <div className="drill-header">
        <span className="drill-header__page-number number">{pageNumber}</span>
        <div className="drill-header__unit-info">
          <h2 className="drill-header__unit-title">
            {unitTitle.startsWith("ພາກທີ") ? unitTitle : `ບົດທີ ${unitNumber}: ${unitTitle}`}
          </h2>
          <p className="drill-header__unit-goal">ບົດຝຶກຫັດພື້ນຖານ — ຂັ້ນຕອນທີ 1</p>
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
          <div className="section-title__icon">✏️</div>
          <span className="section-title__text">ບົດຝຶກຫັດພື້ນຖານ</span>
          <span className="section-title__badge">ຂັ້ນຕອນ 1</span>
        </div>
        <SuroboCheering width={80} height={96} />
      </div>

      <div className="problem-area">
        {problems.map((problem, index) => (
          <div key={problem.number} className="problem" style={{ marginTop: index > 0 ? "36px" : "0px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", width: "100%" }}>
              <span className="problem__number">{index + 1}</span>
              <div className="problem__content" style={{ flex: 1, minWidth: 0 }}>{problem.content}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
