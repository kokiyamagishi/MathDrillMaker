import React from "react";

interface VerticalMathProps {
  top: number | string;
  bottom: number | string;
  operator?: "+" | "-" | "×";
  showAnswerBlank?: boolean;
  /** 解説モード: 答えを赤で表示し、繰り上がりも小さく表示する */
  showAnswer?: boolean;
  /** 列数 (演算子列を含めた合計の列数。4列なら3桁＋演算子に対応) デフォルトは4 */
  columns?: number;
}

export const VerticalMath: React.FC<VerticalMathProps> = ({
  top,
  bottom,
  operator = "+",
  showAnswerBlank = true,
  showAnswer = false,
  columns = 4,
}) => {
  const topNum = typeof top === "string" ? parseInt(top, 10) : top;
  const botNum = typeof bottom === "string" ? parseInt(bottom, 10) : bottom;

  // 数字を指定の列数(桁数)に揃える (演算子列を除くため columns - 1)
  const digitCols = Math.max(1, columns - 1);
  const topDigits = String(top).padStart(digitCols, " ").split("");
  const botDigits = String(bottom).padStart(digitCols, " ").split("");

  // 答えと繰り上がり/繰り下がりを計算
  let answer = 0;
  const carries = [0, 0, 0, 0]; // [1000の位, 100の位, 10の位, なし]
  const crossed = [false, false, false, false];
  const borrowTexts = ["", "", "", ""];

  if (operator === "+") {
    answer = topNum + botNum;
    const onesSum = (topNum % 10) + (botNum % 10);
    if (onesSum >= 10) carries[2] = 1;
    const tensSum = Math.floor(topNum / 10) % 10 + Math.floor(botNum / 10) % 10 + carries[2];
    if (tensSum >= 10) carries[1] = 1;
    const hunsSum = Math.floor(topNum / 100) % 10 + Math.floor(botNum / 100) % 10 + carries[1];
    if (hunsSum >= 10) carries[0] = 1;
  } else if (operator === "-") {
    answer = topNum - botNum;
    let t1000 = Math.floor(topNum / 1000);
    let t100 = Math.floor(topNum / 100) % 10;
    let t10 = Math.floor(topNum / 10) % 10;
    const t1 = topNum % 10;
    
    const b100 = Math.floor(botNum / 100) % 10;
    const b10 = Math.floor(botNum / 10) % 10;
    const b1 = botNum % 10;

    if (t1 < b1) {
      if (t10 > 0) {
        crossed[2] = true;
        t10 -= 1;
        borrowTexts[2] = String(t10);
        borrowTexts[3] = "10";
      } else {
        crossed[1] = true;
        t100 -= 1;
        borrowTexts[1] = String(t100);
        crossed[2] = true;
        t10 = 9;
        borrowTexts[2] = "9";
        borrowTexts[3] = "10";
      }
    }
    if (t10 < b10) {
      crossed[1] = true;
      t100 -= 1;
      borrowTexts[1] = String(t100);
      borrowTexts[2] = "10";
    }
  } else if (operator === "×") {
    answer = topNum * botNum;
    // 一の位の掛け算による十の位への繰り上がり
    const onesProd = (topNum % 10) * botNum;
    if (onesProd >= 10) {
      carries[2] = Math.floor(onesProd / 10);
    }
    // 十の位の掛け算＋繰り上がりによる百の位への繰り上がり
    const tensProd = (Math.floor(topNum / 10) % 10) * botNum + carries[2];
    if (tensProd >= 10) {
      carries[1] = Math.floor(tensProd / 10);
    }
    // 百の位の掛け算＋繰り上がりによる千の位への繰り上がり
    const hunsProd = (Math.floor(topNum / 100) % 10) * botNum + carries[1];
    if (hunsProd >= 10) {
      carries[0] = Math.floor(hunsProd / 10);
    }
  }

  const answerDigits = String(Math.abs(answer)).padStart(columns, " ").split("");

  const cellStyle = {
    width: "36px",
    height: "40px",
    border: "1px solid #E0E0E0",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  };

  const thickLineStyle = {
    borderTop: "4px solid #000000",
  };

  const answerCellStyle = {
    ...cellStyle,
    ...thickLineStyle,
    height: "40px",
    color: "#E53935",
    fontWeight: "bold" as const,
  };

  const carryStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#E53935",
    fontWeight: "bold",
    textAlign: "center",
    height: "18px",
    lineHeight: "18px",
  };

  // 描画用の配列インデックスを計算 (内部のcarries等は常に4桁長なので)
  const renderIndices = Array.from({ length: digitCols }, (_, i) => i + (4 - digitCols));

  return (
    <div className="math-illustration" style={{ display: "inline-block", margin: "10px 16px" }}>
      <table style={{
        borderCollapse: "collapse",
        fontFamily: "var(--font-number)",
        fontSize: "24px",
        fontWeight: "bold",
        color: "var(--color-ink)"
      }}>
        <tbody>
          {showAnswer && (operator === "+" || operator === "×") && (carries.some(c => c > 0)) && (
            <tr>
              <td style={{ border: "none", padding: 0 }}></td>
              {renderIndices.map((origIndex) => (
                <td key={`c-${origIndex}`} style={{ ...carryStyle, border: "none", padding: 0 }}>
                  {carries[origIndex] > 0 ? carries[origIndex] : ""}
                </td>
              ))}
            </tr>
          )}
          {showAnswer && operator === "-" && (borrowTexts.some(b => b !== "")) && (
            <tr>
              <td style={{ border: "none", padding: 0 }}></td>
              {renderIndices.map((origIndex) => (
                <td key={`b-${origIndex}`} style={{ ...carryStyle, border: "none", padding: 0 }}>
                  {borrowTexts[origIndex]}
                </td>
              ))}
            </tr>
          )}
          <tr>
            <td style={cellStyle}></td>
            {topDigits.map((d, i) => {
              const origIndex = i + (4 - digitCols);
              if (showAnswer && operator === "-" && crossed[origIndex]) {
                return (
                  <td key={`t-${i}`} style={cellStyle}>
                    <span style={{ textDecoration: "line-through", textDecorationThickness: "2px", color: "var(--color-ink)" }}>
                      {d}
                    </span>
                  </td>
                );
              }
              return <td key={`t-${i}`} style={cellStyle}>{d}</td>;
            })}
          </tr>
          <tr>
            <td style={cellStyle}>{operator}</td>
            {botDigits.map((d, i) => (
              <td key={`b-${i}`} style={cellStyle}>{d}</td>
            ))}
          </tr>
          {showAnswer && (
            <tr>
              {answerDigits.map((d, i) => (
                <td key={`a-${i}`} style={answerCellStyle}>
                  {d.trim() ? d : ""}
                </td>
              ))}
            </tr>
          )}
          {!showAnswer && showAnswerBlank && (
            <tr>
              {Array.from({ length: columns }).map((_, i) => (
                <td key={`blank-${i}`} style={{ ...cellStyle, ...thickLineStyle }}></td>
              ))}
            </tr>
          )}
          {!showAnswer && !showAnswerBlank && (
            <tr>
              <td colSpan={columns} style={{ padding: 0, height: 0, borderTop: "4px solid #000000" }}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
