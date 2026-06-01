const fs = require('fs');

let content = fs.readFileSync('src/components/illustrations/VerticalMath.tsx', 'utf8');

// Update interface comment
content = content.replace(
  '/** 列数 (3列なら3桁、4列なら4桁に対応) デフォルトは4 */',
  '/** 列数 (演算子列を含めた合計の列数。4列なら3桁＋演算子に対応) デフォルトは4 */'
);

// Update digits calculation
const oldDigitsCalc = `  // 数字を指定の列数(桁数)に揃える
  const topDigits = String(top).padStart(columns, " ").split("");
  const botDigits = String(bottom).padStart(columns, " ").split("");`;

const newDigitsCalc = `  // 数字を指定の列数(桁数)に揃える (演算子列を除くため columns - 1)
  const digitCols = Math.max(1, columns - 1);
  const topDigits = String(top).padStart(digitCols, " ").split("");
  const botDigits = String(bottom).padStart(digitCols, " ").split("");`;
content = content.replace(oldDigitsCalc, newDigitsCalc);

// Update answerDigits
const oldAnswerDigits = `  const answerDigits = String(Math.abs(answer)).padStart(columns, " ").split("");`;
const newAnswerDigits = `  const answerDigits = String(Math.abs(answer)).padStart(columns, " ").split("");`;
// (No change needed, but just to be sure it's there)

// Update renderIndices
const oldRenderIndices = `  // 描画用の配列インデックスを計算 (内部のcarries等は常に4桁長なので)
  const renderIndices = Array.from({ length: columns }, (_, i) => i + (4 - columns));`;
const newRenderIndices = `  // 描画用の配列インデックスを計算 (内部のcarries等は常に4桁長なので)
  const renderIndices = Array.from({ length: digitCols }, (_, i) => i + (4 - digitCols));`;
content = content.replace(oldRenderIndices, newRenderIndices);

// Update answer rendering
const oldAnswerRender = `          {showAnswer && (
            <tr>
              <td style={{ ...cellStyle, ...thickLineStyle }}></td>
              {answerDigits.map((d, i) => (
                <td key={\`a-\${i}\`} style={answerCellStyle}>
                  {d.trim() ? d : ""}
                </td>
              ))}
            </tr>
          )}
          {!showAnswer && showAnswerBlank && (
            <tr>
              <td style={{ ...cellStyle, ...thickLineStyle }}></td>
              {Array.from({ length: columns }).map((_, i) => (
                <td key={\`blank-\${i}\`} style={{ ...cellStyle, ...thickLineStyle }}></td>
              ))}
            </tr>
          )}
          {!showAnswer && !showAnswerBlank && (
            <tr>
              <td colSpan={columns + 1} style={{ padding: 0, height: 0, borderTop: "4px solid #000000" }}></td>
            </tr>
          )}`;

const newAnswerRender = `          {showAnswer && (
            <tr>
              {answerDigits.map((d, i) => (
                <td key={\`a-\${i}\`} style={answerCellStyle}>
                  {d.trim() ? d : ""}
                </td>
              ))}
            </tr>
          )}
          {!showAnswer && showAnswerBlank && (
            <tr>
              {Array.from({ length: columns }).map((_, i) => (
                <td key={\`blank-\${i}\`} style={{ ...cellStyle, ...thickLineStyle }}></td>
              ))}
            </tr>
          )}
          {!showAnswer && !showAnswerBlank && (
            <tr>
              <td colSpan={columns} style={{ padding: 0, height: 0, borderTop: "4px solid #000000" }}></td>
            </tr>
          )}`;
content = content.replace(oldAnswerRender, newAnswerRender);

// Wait, the crossed lines in operator === "-" also use origIndex:
// origIndex = i + (4 - columns); -> Should be i + (4 - digitCols);
const oldCrossedIndex = `              const origIndex = i + (4 - columns);`;
const newCrossedIndex = `              const origIndex = i + (4 - digitCols);`;
content = content.replace(oldCrossedIndex, newCrossedIndex);

fs.writeFileSync('src/components/illustrations/VerticalMath.tsx', content, 'utf8');
console.log('VerticalMath updated for total columns');
