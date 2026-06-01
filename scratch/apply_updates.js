const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units5.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Scoring label updates (Units 1, 3, 4, 7, 8)
const replacements = [
  // Unit 1 basic
  {
    target: `            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນ ແລະ ການຫານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນ ແລະ ການຫານຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
            </p>`
  },
  // Unit 1 challenge
  {
    target: `              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງສ້າງຈຳນວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>`,
    replacement: `              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງສ້າງຈຳນວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>`
  },
  // Unit 3 basic 1
  {
    target: `            <p>
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງຮູບຊົງລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>`
  },
  // Unit 3 basic 2
  {
    target: `            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈົ່ງປ່ຽນຫົວໜ່ວຍບໍລິມາດຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>`
  },
  // Unit 4 basic
  {
    target: `            <p>
              {"ຈາກຮູບສາມແຈສອງຮູບ ABC ແລະ DEF ທີ່ທຽບເທົ່າກັນດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈາກຮູບສາມແຈສອງຮູບ ABC ແລະ DEF ທີ່ທຽບເທົ່າກັນດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
            </p>`
  },
  // Unit 7 basic
  {
    target: `            <p>
              {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈົ່ງຊອກຫາຄ່າສະເລ່ຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>`
  },
  // Unit 8 basic
  {
    target: `            <p>
              {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>`,
    replacement: `            <p>
              {"ຈົ່ງຄິດໄລ່ຕາມສູດຄວາມໄວຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 7.5 ຄະແນນ)"}</span>
            </p>`
  }
];

replacements.forEach(({ target, replacement }, idx) => {
  if (!content.includes(target)) {
    console.warn(`Warning: Target replacement #${idx + 1} not found in file!`);
  } else {
    content = content.replace(target, replacement);
    console.log(`Success: Applied replacement #${idx + 1}`);
  }
});

// 2. Unit 2 keyPoints: flexDirection: "column", remove hint, French long division, red arrow for multiplication
const unit2OldBlock = `    keyPoints: {
      hint: {
        text: "ເວລາຄູນຈຳນວນທົດສະນິຍົມຕາມທາງຕັ້ງ, ໃຫ້ຄູນຄືເລກທຳມະດາ ແລ້ວຈຶ່ງນັບຈຳນວນຫຼັກທົດສະນິຍົມທັງໝົດເພື່ອໝາຍຈຸດໃສ່ຜົນຄູນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* 1. ການຄູນຈຳນວນທົດສະນິຍົມ (かけ算カード) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#2E7D32", margin: "0 0 12px 0" }}
              >
                {"1. ການຄູນຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 2.4 × 1.3 = ? (ມີຫຼັກທົດສະນິຍົມລວມກັນ 2 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* Decimal Vertical Calculation illustration using custom table layout */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"4"}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "30px" }}>{"×"}</td>
                      <td style={{ width: "30px" }}>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"3"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td>{"7"}</td>
                      <td></td>
                      <td>{"2"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{"2"}</td>
                      <td></td>
                      <td>{"4"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td>{"3"}</td>
                      <td style={{ color: "red" }}>{"."}</td>
                      <td>{"1"}</td>
                      <td>{"2"}</td>
                    </tr>
                  </tbody>
                </table>`;

const unit2NewBlock = `    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {/* 1. ການຄູນຈຳນວນທົດສະນິຍົມ (かけ算カード) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#E8F5E9",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#2E7D32", margin: "0 0 12px 0" }}
              >
                {"1. ການຄູນຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 2.4 × 1.3 = ? (ມີຫຼັກທົດສະນິຍົມລວມກັນ 2 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* Decimal Vertical Calculation illustration using custom table layout */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"4"}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "30px" }}>{"×"}</td>
                      <td style={{ width: "30px" }}>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"3"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td>{"7"}</td>
                      <td></td>
                      <td>{"2"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{"2"}</td>
                      <td></td>
                      <td>{"4"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td>{"3"}</td>
                      <td style={{ color: "red" }}>{"."}</td>
                      <td>{"1"}</td>
                      <td>{"2"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td style={{ color: "red", fontSize: "14px", verticalAlign: "top" }}>{"↑"}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>`;

if (content.includes(unit2OldBlock)) {
  content = content.replace(unit2OldBlock, unit2NewBlock);
  console.log("Success: Replaced Unit 2 keyPoints container and multiplication table");
} else {
  console.error("Error: Could not find Unit 2 keyPoints old block for replacement!");
}

// 3. Unit 2 French long division
const divisionOldBlock = `            {/* 2. ການຫານຈຳນວນທົດສະນິຍົມ (わり算カード - 新規追加) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#E65100", margin: "0 0 12px 0" }}
              >
                {"2. ການຫານຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 6.5 ÷ 2.5 = ? (ເລື່ອນຈຸດໄປທາງຂວາ 1 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* わり算の筆算テーブル (HTML Table) */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"2"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "red",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"6"}</td>
                    </tr>
                    <tr style={{ borderBottom: "2px solid #000" }}>
                      <td style={{ width: "30px" }}>{"25"}</td>
                      <td
                        style={{
                          width: "15px",
                          borderRight: "2px solid #000",
                          borderTopLeftRadius: "10px",
                        }}
                      >
                        {")"}
                      </td>
                      <td style={{ width: "30px" }}>{"6"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "#ccc",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>{"5"}</td>
                      <td></td>
                      <td>{"0"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td></td>
                      <td>{"1"}</td>
                      <td
                        style={{
                          width: "10px",
                          fontSize: "22px",
                          color: "red",
                          verticalAlign: "bottom",
                        }}
                      >
                        {"."}
                      </td>
                      <td>{"5"}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>{"1"}</td>
                      <td></td>
                      <td>{"5"}</td>
                    </tr>
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{"0"}</td>
                    </tr>
                  </tbody>
                </table>`;

const divisionNewBlock = `            {/* 2. ການຫານຈຳນວນທົດສະນິຍົມ (わり算カード - 新規追加) */}
            <div
              style={{
                padding: "12px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
              }}
            >
              <h3
                style={{ fontSize: "22px", color: "#E65100", margin: "0 0 12px 0" }}
              >
                {"2. ການຫານຈຳນວນທົດສະນິຍົມ"}
              </h3>
              <p style={{ margin: "0 0 10px 0", fontSize: "22px" }}>
                {"ຕົວຢ່າງ: 6.5 ÷ 2.5 = ? (ເລື່ອນຈຸດໄປທາງຂວາ 1 ຫຼັກ):"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* French Style long division table */}
                <table
                  className="math-illustration"
                  style={{
                    borderCollapse: "collapse",
                    fontSize: "22px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <tbody>
                    {/* Row 1: Dividend 65 and Divisor 25 */}
                    <tr>
                      <td style={{ width: "30px" }}></td>
                      <td style={{ width: "30px" }}>{"6"}</td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                      <td style={{ width: "15px", borderRight: "2px solid #000" }}></td>
                      <td colSpan={3} style={{ width: "70px", borderBottom: "2px solid #000" }}>{"25"}</td>
                    </tr>
                    {/* Row 2: Subtraction -50 and Quotient 2.6 (aligned vertically using paddingTop: "15px") */}
                    <tr>
                      <td style={{ width: "30px" }}>{"-"}</td>
                      <td style={{ width: "30px" }}>{"5"}</td>
                      <td style={{ width: "30px" }}>{"0"}</td>
                      <td style={{ borderRight: "2px solid #000" }}></td>
                      <td style={{ width: "30px", paddingTop: "15px" }}>{"2"}</td>
                      <td style={{ width: "10px", color: "red", paddingTop: "15px" }}>{"."}</td>
                      <td style={{ width: "30px", paddingTop: "15px" }}>{"6"}</td>
                    </tr>
                    {/* Row 3: Remainder 15 and pointing red arrow ↑ */}
                    <tr>
                      <td></td>
                      <td style={{ borderTop: "2px solid #000" }}>{"1"}</td>
                      <td style={{ borderTop: "2px solid #000" }}>{"5"}</td>
                      <td style={{ borderRight: "2px solid #000" }}></td>
                      <td></td>
                      <td style={{ color: "red", fontSize: "14px", verticalAlign: "top" }}>{"↑"}</td>
                      <td></td>
                    </tr>
                    {/* Row 4: Bring down 0 to make 150 */}
                    <tr>
                      <td></td>
                      <td>{"1"}</td>
                      <td>{"5"}</td>
                      <td>{"0"}</td>
                      <td style={{ borderRight: "2px solid #000" }}></td>
                      <td colSpan={3}></td>
                    </tr>
                    {/* Row 5: Subtract 150 */}
                    <tr>
                      <td>{"-"}</td>
                      <td>{"1"}</td>
                      <td>{"5"}</td>
                      <td>{"0"}</td>
                      <td style={{ borderRight: "2px solid #000" }}></td>
                      <td colSpan={3}></td>
                    </tr>
                    {/* Row 6: Final Remainder 0 */}
                    <tr style={{ borderTop: "2px solid #000" }}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{"0"}</td>
                      <td style={{ borderRight: "2px solid #000" }}></td>
                      <td colSpan={3}></td>
                    </tr>
                  </tbody>
                </table>`;

if (content.includes(divisionOldBlock)) {
  content = content.replace(divisionOldBlock, divisionNewBlock);
  console.log("Success: Replaced Division table with French style");
} else {
  console.error("Error: Could not find Division old block for replacement!");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Completed modifying src/data/units5.tsx");
