import React from "react";

interface PlaceValueTableProps {
  hundreds: number;
  tens: number;
  ones: number;
  showAnswer?: boolean;
  hideHundreds?: boolean;
  hideTens?: boolean;
  hideOnes?: boolean;
}

export const PlaceValueTable: React.FC<PlaceValueTableProps> = ({
  hundreds,
  tens,
  ones,
  showAnswer = false,
  hideHundreds = false,
  hideTens = false,
  hideOnes = false,
}) => {
  const cellStyle: React.CSSProperties = {
    border: "2px solid #555",
    padding: "8px 16px",
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "var(--font-number)",
    minWidth: "50px",
  };

  const headerStyle: React.CSSProperties = {
    ...cellStyle,
    backgroundColor: "#E8EAF6",
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "inherit",
  };

  const renderCell = (value: number, isHidden: boolean) => {
    if (isHidden && !showAnswer) {
      return <span className="answer-blank" style={{ minWidth: "30px", verticalAlign: "bottom", display: "inline-block", transform: "translateY(4px)" }}></span>;
    }
    return <span style={{ fontWeight: "bold", color: showAnswer && isHidden ? "#E53935" : "#333" }}>{value}</span>;
  };

  return (
    <table className="math-illustration" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
      <thead>
        <tr>
          <th style={headerStyle}>{"ຫຼັກຫົວຮ້ອຍ"}</th>
          <th style={headerStyle}>{"ຫຼັກຫົວສິບ"}</th>
          <th style={headerStyle}>{"ຫຼັກຫົວໜ່ວຍ"}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>{renderCell(hundreds, hideHundreds)}</td>
          <td style={cellStyle}>{renderCell(tens, hideTens)}</td>
          <td style={cellStyle}>{renderCell(ones, hideOnes)}</td>
        </tr>
      </tbody>
    </table>
  );
};

interface NumberLineProps {
  start: number;
  end: number;
  step: number;
  marks?: { position: number; label?: string; hidden?: boolean }[];
  showAnswers?: boolean;
}

const OldNumberLine: React.FC<NumberLineProps> = ({
  start,
  end,
  step,
  marks = [],
  showAnswers = false,
}) => {
  const totalRange = end - start;
  const tickCount = Math.floor(totalRange / step) + 1;

  return (
    <div style={{ position: "relative", margin: "32px 16px 48px 16px", userSelect: "none" }}>
      {/* Main line */}
      <div style={{
        position: "absolute",
        top: "20px",
        left: "0",
        right: "0",
        height: "3px",
        backgroundColor: "#555",
      }} />
      {/* Arrow at end */}
      <div style={{
        position: "absolute",
        top: "14px",
        right: "-8px",
        width: "0",
        height: "0",
        borderTop: "7px solid transparent",
        borderBottom: "7px solid transparent",
        borderLeft: "12px solid #555",
      }} />

      {/* Ticks and labels */}
      {Array.from({ length: tickCount }, (_, i) => {
        const value = start + i * step;
        const percent = ((value - start) / totalRange) * 95;
        const isMajor = value % (step * 5 === 0 ? step * 5 : (value % 100 === 0 ? 100 : step * 10)) === 0 || value === start || value === end;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${percent}%`,
              top: isMajor ? "10px" : "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{
              width: "2px",
              height: isMajor ? "20px" : "12px",
              backgroundColor: "#555",
            }} />
            {value % (step * 5 === 0 ? step * 5 : 100) === 0 || value === start || value === end ? (
              <span style={{
                marginTop: "4px",
                fontSize: "12px",
                fontFamily: "var(--font-number)",
                fontWeight: "bold",
              }}>
                {value}
              </span>
            ) : null}
          </div>
        );
      })}

      {/* Custom marks */}
      {marks.map((mark, idx) => {
        const percent = ((mark.position - start) / totalRange) * 95;
        return (
          <div
            key={`mark-${idx}`}
            style={{
              position: "absolute",
              left: `${percent}%`,
              top: "-8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{
              width: "0",
              height: "0",
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid #E53935",
              marginBottom: "2px",
            }} />
            {mark.label && (
              <span style={{
                position: "absolute",
                top: "-20px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#E53935",
                whiteSpace: "nowrap",
              }}>
                {mark.hidden && !showAnswers ? (
                  <span className="answer-blank" style={{ minWidth: "30px" }}></span>
                ) : (
                  mark.label
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
