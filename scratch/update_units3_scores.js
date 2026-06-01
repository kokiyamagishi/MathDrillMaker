const fs = require('fs');
const path = require('path');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const boundary = '{\n    unitNumber: 11,';
const boundaryIndex = content.indexOf(boundary);

if (boundaryIndex === -1) {
  console.error("Could not find the boundary for Unit 11 in units3.tsx!");
  process.exit(1);
}

const headerAndUnits1To10 = content.substring(0, boundaryIndex);

const scoreAdjustedUnits11To17 = `
{
    unitNumber: 11,
    unitTitle: "ຮູບສາມແຈ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ! ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດ！"
      },
      content: (
        <div style={{ display: "flex", gap: "24px", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", textAlign: "center", flex: 1, minWidth: "250px" }}>
            <Shape type="triangle" color="#2196F3" size={120} />
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px" }}>{"ຮູບສາມແຈທ່ຽງ"}</p>
            <p>{"ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈທ່ຽງ."}</p>
          </div>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", textAlign: "center", flex: 1, minWidth: "250px" }}>
            <Shape type="triangle" color="#4CAF50" size={120} />
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px" }}>{"ຮູບສາມແຈສະເໝີ"}</p>
            <p>{"ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈສະເໝີ."}</p>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກຊື່ຂອງຮູບສາມແຈລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <Shape type="triangle" color="#FF9800" size={80} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <Shape type="triangle" color="#9C27B0" size={80} rotation={90} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <Shape type="triangle" color="#00BCD4" size={80} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                <Shape type="triangle" color="#E91E63" size={80} rotation={180} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມຍາວຂອງຂ້າງ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງໜຶ່ງແມ່ນ 6cm. ຂ້າງອື່ນໆຈະຍາວຈັກ cm?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວຮອບຮູບ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(3) ຮູບສາມແຈສະເໝີຮູບໜຶ່ງ ມີຄວາມຍາວຂ້າງລະ 5cm. ຄວາມຍາວຮອບຮູບທັງໝົດແມ່ນຈັກ cm?"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບສາມແຈ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "20px", margin: 0 }}>{"(1) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 4cm, 4cm ແລະ 4cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "20px", margin: 0 }}>{"(2) ຮູບສາມແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ 3cm, 5cm ແລະ 5cm ແມ່ນຮູບສາມແຈຊະນິດໃດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຮອບຮູບສາມແຈທ່ຽງ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(3) ມີຮູບສາມແຈທ່ຽງຮູບໜຶ່ງ ເຊິ່ງມີສອງຂ້າງຍາວ 7cm และ ຂ້າງທີ່ເຫຼືອຍາວ 4cm. ຄວາມຍາວຮອບຮູບແມ່ນຈັກ cm?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) ຮູບສາມແຈສະເໝີ, (4) ຮູບສາມແຈທ່ຽງ, (5) 6cm (ທຸກຂ້າງຍາວເທົ່າກັນ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 15cm (5 x 3)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ຮູບສາມແຈສະເໝີ, (2) ຮູບສາມແຈທ່ຽງ, (3) 18cm (7 + 7 + 4)"}</span>
          ]
        }
      ],
      advice: "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ!"
    }
  },
  {
    unitNumber: 12,
    unitTitle: "ການຫານຕາມທາງຕັ້ງ",
    unitGoal: "ຮຽນຮູ້ການຫານຕາມທາງຕັ້ງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຫານເລກຫຼາຍຫຼັກຕ້ອງເລີ່ມຈາກຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ (ຊ້າຍຫາຂວา) ສະເໝີ! ຢ່າລືມຂັ້ນຕອນ: ຫານ -> ຄູນ -> ລົບ -> ຊັກລົງມາ."
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"12. ວິທີຄິດໄລ່ການຫານຕາມທາງຕັ້ງ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ຕົວຢ່າງ: 76 ÷ 3. ພວກເຮົາເລີ່ມຫານຈາກຫຼັກສິບ (ຫຼັກໃຫຍ່ສຸດ) ແລ້ວຈຶ່ງຫານຫຼັກໜ່ວຍ."}</p>
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "32px", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", border: "2px dashed #4CAF50", padding: "24px", borderRadius: "12px", backgroundColor: "#F1F8E9" }}>
              <table style={{ borderCollapse: "collapse", fontFamily: "var(--font-number)", fontSize: "26px", fontWeight: "bold" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"76"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "4px 16px", textAlign: "left" }}>{"3"}</td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "3px solid #000", padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"6 "}</td>
                    <td style={{ borderLeft: "3px solid #000", borderTop: "3px solid #000", padding: "4px 16px", textAlign: "left" }}>{"25"}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"16"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "3px solid #000", padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"15"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{" 1"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                </tbody>
              </table>
              <span style={{ color: "#D32F2F", fontWeight: "bold", fontSize: "20px" }}>{"ຄຳຕອບ: 25 ເສດ 1"}</span>
            </div>
            <div style={{ fontSize: "18px", maxWidth: "450px", lineHeight: "1.6" }}>
              <p style={{ margin: "4px 0", fontWeight: "bold", color: "#1976D2" }}>{"ขັ້ນຕອນການຄິດໄລ່ 76 ÷ 3 ຕາມທາງຕັ້ງ:"}</p>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກສິບ (ຫານຫຼັກສິບກ່ອນ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 7 ÷ 3 = 2. ຂຽນ '2' ໃສ່ຫຼັກສິບຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 2 = 6. ຂຽນ '6' ໄວ້ກ້ອງເລກ 7."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 7 - 6 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 6."}</p>
              
              <p style={{ margin: "8px 0 4px 0" }}>{"② ຫຼັກໜ່ວຍ (ชັກເລກຫຼັກໜ່ວຍລົງມາ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ชັກລົງມາ: ຊັກເລກ '6' ລົງມາໃສ່ທາງຂ້າງເລກ 1 ຈະໄດ້ '16'."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 16 ÷ 3 = 5. ຂຽນ '5' ໃສ່ຫຼັກໜ່ວຍຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 5 = 15. ຂຽນ '15' ໄວ້ກ້ອງເລກ 16."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 16 - 15 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 15 (ຕົວເສດ)."}</p>
              
              <p style={{ margin: "8px 0 0 0", fontWeight: "bold", color: "#D32F2F" }}>{"③ ຜົນຫານແມ່ນ 25, ເສດ 1."}</p>
            </div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ການຫານລຸ່ມນີ້ (ແນວຕັ້ງ): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "48 ÷ 2 =" }, { n: "(2)", q: "69 ÷ 3 =" }, { n: "(3)", q: "84 ÷ 4 =" },
                { n: "(4)", q: "55 ÷ 5 =" }, { n: "(5)", q: "72 ÷ 6 =" }, { n: "(6)", q: "96 ÷ 8 =" },
                { n: "(7)", q: "85 ÷ 5 =" }, { n: "(8)", q: "91 ÷ 7 =" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການຫານ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(9) ມີໝາກກ້ຽງ 84 ໜ່ວຍ, ແບ່ງໃຫ້ 4 ຄົນເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກໜ່ວຍ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ໜ່ວຍ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ການຫານ (ມີຕົວເສດ): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "37 ÷ 3 =" }, { n: "(2)", q: "58 ÷ 4 =" },
                  { n: "(3)", q: "79 ÷ 5 =" }, { n: "(4)", q: "86 ÷ 6 =" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການຫານທີ່ມີເສດ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(5) ມີປຶ້ມຂຽນ 76 ຫົວ, ຢາກຢາຍໃຫ້ 3 ຄົນເທົ່າໆກັນ. ຈະໄດ້ຄົນລະຈັກຫົວ ແລະ ຈະເຫຼືອຈັກຫົວ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                  <span>{"ຄຳຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຫົວ, ເຫຼືອ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຫົວ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ຝຶກຫານເທື່ອລະຫຼັກ ແລ້ວຊັກຕົວເລກຖັດໄປລົງມາເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ການຫານຕໍ່ໄປນີ້ຕາມທາງຕັ້ງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "87 ÷ 3 =" }, { n: "(2)", q: "95 ÷ 4 =" },
                { n: "(3)", q: "68 ÷ 5 =" }, { n: "(4)", q: "99 ÷ 9 =" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ບ່ອນວ່າງໃນການກວດຄືນການຫານ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ຈາກບັ້ງເລກ 47 ÷ 3 = 15 ເສດ 2. ຈົ່ງຕື່ມຕົວເລກກວດຄືນໃຫ້ຖືກຕ້ອງ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "22px" }}>
                <span>{"3 x "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{" + "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{" = 47"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 24, (2) 23, (3) 21, (4) 11, (5) 12, (6) 12, (7) 17, (8) 13, (9) 21 ໜ່ວຍ (84 ÷ 4)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 12 ເສດ 1, (2) 14 ເສດ 2, (3) 15 ເສດ 4, (4) 14 ເສດ 2, (5) ໄດ້ຄົນລະ 25 ຫົວ, ເຫຼືອ 1 ຫົວ (76 ÷ 3 = 25 ເສດ 1)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 29, (2) 23 ເສດ 3, (3) 13 ເສດ 3, (4) 11, (5) 3 x 15 + 2 = 47"}</span>
          ]
        }
      ],
      advice: "ຖ້າຕົວເສດໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບຕົວຫານ, ສະແດງວ່າເຮົາຄິດໄລ່ຜິດເດີ! ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະεໝີ."
    }
  },
  {
    unitNumber: 13,
    unitTitle: "ການຫານ ແລະ ຄຳນວນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"13. ຄວາມສຳພັນລະຫວ່າງການຄູນ ແລະ ການຫານ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ການປຽບທຽບວ່າຄວາມຍາວໜຶ່ງໃຫຍ່ກວ່າອີກຄວາມຍາວໜຶ່ງຈັກເທົ່າ, ເຮົາໃຊ້ການຫານ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: "22px", fontWeight: "bold", width: "120px" }}>{"ແຖບສີແດງ:"}</span>
              <div style={{ height: "30px", width: "100px", backgroundColor: "#E53935", borderRadius: "4px" }}></div>
              <span style={{ fontSize: "20px" }}>{"2 m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: "22px", fontWeight: "bold", width: "120px" }}>{"ແຖບສີຟ້າ:"}</span>
              <div style={{ height: "30px", width: "300px", backgroundColor: "#1E88E5", borderRadius: "4px" }}></div>
              <span style={{ fontSize: "20px" }}>{"6 m (ໃຫຍ່ກວ່າ 3 ເທື່ອ)"}</span>
            </div>
            <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginTop: "10px" }}>
              {"6 ÷ 2 = 3 (ເທື່ອ)"}
            </div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຈຳນວນເທື່ອລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "ເຊືອກຍາວ 15 ແມັດ ຍາວເປັນຈັກເທື່ອຂອງເຊືອກ 3 ແມັດ?" },
                { n: "(2)", q: "ປຶ້ມ 24 ຫົວ ມີຈຳນວນເປັນຈັກເທື່ອຂອງປຶ້ມ 6 ຫົວ?" },
                { n: "(3)", q: "ນ້ຳ 32 ລິດ ມີປະລິມານເປັນຈັກເທື່ອຂອງນ້ຳ 4 ລິດ?" },
                { n: "(4)", q: "ເງິນ 50 ພັນກີບ ມີຄ່າເປັນຈັກເທື່ອຂອງເງິນ 10 ພັນກີບ?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ເທື່ອ"}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ເเชືອກເສັ້ນໜຶ່ງຍາວ 24 ແມັດ, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງເຊືອກສີແດງ. ເຊືອກສີແດງຍາວຈັກແມັດ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ແມັດ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ເພື່ອຊອກຫາຄຳຕອບ: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ຖ້າຮູ້ວ່າແຖບສີແດງຍາວ 4m ແລະ ແຖບສີຟ້າຍາວເປັນ 5 ເທື່ອຂອງແຖບສີແດງ. ແຖບສີຟ້າຍາວຈັກແມັດ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                    <span>{"ແມັດ"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຖ້າຮູ້ວ່າແຖບສີເyellowືອງຍາວ 15m, ເຊິ່ງຍາວເປັນ 3 ເທື່ອຂອງແຖບສີຂຽວ. ແຖບສີຂຽວຍາວຈັກແມັດ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                    <span>{"ແມັດ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມຍາວຂອງໄມ້ບັນທັດ: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(3) ໄມ້ບັນທັດອັນໜຶ່ງຍາວ 30cm, ໄມ້ບັນທັດອັນທີສອງຍາວເປັນ 2 ເທື່ອຂອງອັນທຳອິດ. ໄມ້ບັນທັດອັນທີສອງຍາວຈັກ cm?"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນເທື່ອເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີແຖບເຈ້ຍສີຟ້າຍາວ 18 ແມັດ. ແຖບເຈ້ຍສີແດງຍາວ 6 ແມັດ. ແຖບເຈ້ຍສີຟ້າຍາວເປັນຈັກເທື່ອຂອງສີແດງ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ເທື່ອ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມສູງຂອງຕົ້ນໄມ້: "} <span className="point-label">{"(5 - ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(2) ຕົ້ນໄມ້ A ສູງ 12 ແມັດ, ຕົ້ນໄມ້ B ສູງ 4 ແມັດ. ຕົ້ນໄມ້ A ສູງເປັນຈັກເທື່ອຂອງຕົ້ນໄມ້ B?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ເທື່ອ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 5 ເທື່ອ, (2) 4 ເທື່ອ, (3) 8 ເທື່ອ, (4) 5 ເທື່ອ, (5) 8 ແມັດ (24 ÷ 3)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 20 ແມັດ (4 x 5), (2) 5 ແມັດ (15 ÷ 3), (3) 60cm (30 x 2)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3 ເທື່ອ (18 ÷ 6), (2) 3 ເທື່ອ (12 ÷ 4)"}</span>
          ]
        }
      ],
      advice: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!"
    }
  },
  {
    unitNumber: 14,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທົດສະນິຍົມ, ການບວກ ແລະ ການລົບທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ! 10 ເທື່ອຂອງ 0.1 ແມ່ນ 1."
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"14. ຈຳນວນທົດສະນິຍົມ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ຖ້າແບ່ງ 1 ອອກເປັນ 10 ສ່ວນເທົ່າໆກັນ, 1 ສ່ວນນັ້ນຂຽນເປັນ 0.1 (ສູນຈຸດໜຶ່ງ)."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <NumberLine min={0} max={1} step={0.1} showLabels={true} width={600} />
            <div style={{ display: "flex", gap: "40px" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E53935" }}>{"10 ເທື່ອຂອງ 0.1 ແມ່ນ 1"}</span>
            </div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຈຳນວນທົດສະນິຍົມທີ່ກົງກັບຈຳນວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "0.1 ມີ 8 ເທື່ອ" },
                { n: "(2)", q: "0.1 ມີ 15 ເທື່ອ" },
                { n: "(3)", q: "0.1 ມີ 23 ເທື່ອ" },
                { n: "(4)", q: "0.1 ມີ 3 ເທື່ອ" },
                { n: "(5)", q: "0.1 ມີ 30 ເທື່ອ" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມຢ່າງງ່າຍ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", paddingLeft: "16px" }}>
              {[
                { n: "(6)", q: "0.3 + 0.4 = " },
                { n: "(7)", q: "1.5 - 0.7 = " },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ເລກບວກ ແລະ ລົບທົດສະນິຍົມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "0.4 + 0.3 = " },
                  { n: "(2)", q: "1.2 + 0.5 = " },
                  { n: "(3)", q: "0.8 - 0.2 = " },
                  { n: "(4)", q: "2.5 - 1.2 = " },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px" }}>
                    <span style={{ fontWeight: "bold" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາເລກທົດສະນິຍົມ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(5) ນ້ຳໃນຕຸກມີ 0.8 ລິດ, ນາງ ຄຳດີ ດື່ມໄປ 0.3 ລິດ. ຈະເຫຼືອນ້ຳໃນຕຸກຈັກລິດ?"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ລິດ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ບວກລົບເລກທົດສະນິຍົມໃຫ້ເອົາຕົວເລກຫຼັງຈຸດມາບວກລົບກັນເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປຽບທຽບຈຳນວນທົດສະນິຍົມ ໂດຍໃຊ້ເຄື່ອງໝາຍ >, < ຫຼື =: "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", a: "0.6", b: "0.8" },
                { n: "(2)", a: "1.5", b: "1.2" },
                { n: "(3)", a: "2.0", b: "2" },
                { n: "(4)", a: "3.4", b: "4.3" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.a}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{item.b}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປຽບທຽບນ້ຳໜັກຕໍ່ໄປນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ສົ້ມໜັກ 1.2 kg ແລະ ໝາກມ່ວງໜັກ 0.9 kg. ໝາກໄມ້ໃດໜັກກວ່າກັນ ແລະ ໜັກກວ່າຈັກ kg?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ໜັກກວ່າ,"}</span>
                <span>{"ໜັກກວ່າຈັກ kg:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"kg"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 0.8, (2) 1.5, (3) 2.3, (4) 0.3, (5) 3.0, (6) 0.7, (7) 0.8"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 0.7, (2) 1.7, (3) 0.6, (4) 1.3, (5) 0.5 ລິດ (0.8 - 0.3)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) <, (2) >, (3) =, (4) <, (5) ສົ້ມໜັກກວ່າ, ໜັກກວ່າ 0.3 kg (1.2 - 0.9)"}</span>
          ]
        }
      ],
      advice: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ!"
    }
  },
  {
    unitNumber: 15,
    unitTitle: "ກຣາບເສົາ ແລະ ຕາຕະລາງ",
    unitGoal: "ອ່ານ ແລະ ສ້າງກຣາບເສົາພື້ນຖານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ! ພະຍາຍາມອ່ານຄວາມສູງຂອງເສົາໃຫ້ລະອຽດເດີ້."
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"15. ກຣາບເສົາ ແລະ ຕາຕະລາງ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ກຣາບເສົາຊ່ວຍໃຫ້ເຮົາປຽບທຽບຂໍ້ມູນໄດ້ຢ່າງຈະແຈ້ງ ແລະ ວ່ອງໄວ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "400px" }}>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>{"ໝາກໄມ້ທີ່ມັກ"}</p>
              <div style={{ display: "flex", alignItems: "flex-end", height: "150px", borderLeft: "2px solid #000", borderBottom: "2px solid #000", gap: "20px", padding: "10px" }}>
                <div style={{ height: "100px", width: "40px", backgroundColor: "#FFCDD2", border: "1px solid #D32F2F" }}></div>
                <div style={{ height: "60px", width: "40px", backgroundColor: "#FFE082", border: "1px solid #FFA000" }}></div>
                <div style={{ height: "120px", width: "40px", backgroundColor: "#C8E6C9", border: "1px solid #388E3C" }}></div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "10px", marginLeft: "10px" }}>
                <div style={{ width: "40px", textAlign: "center" }}>{"ໝາກໂປມ"}</div>
                <div style={{ width: "40px", textAlign: "center" }}>{"ກ້ວຍ"}</div>
                <div style={{ width: "40px", textAlign: "center" }}>{"ໝາກມ່ວງ"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ເບິ່ງກຣາບແລ້ວຕອບຄຳຖາມ: (ໝາກມ່ວງມີ 12 ຄົນ, ໝາກໂປມມີ 10 ຄົນ, ກ້ວຍມີ 6 ຄົນ)"} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "ໝາກໄມ້ຊະນິດໃດທີ່ຄົນມັກຫຼາຍທີ່ສຸດ?" },
                { n: "(2)", q: "ໝາກໄມ້ຊະນິດໃດທີ່ຄົນມັກໜ້ອຍທີ່ສຸດ?" },
                { n: "(3)", q: "ຄົນມັກໝາກມ່ວງຫຼາຍກວ່າກ້ວຍຈັກຄົນ?" },
                { n: "(4)", q: "ລວມມີຄົນທັງໝົດຈັກຄົນ?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມຈາກຂໍ້ມູນຕາຕະລາງຕໍ່ໄປນີ້: (ຜັກກາດ 8 ຄົນ, ຜັກບົ້ງ 12 ຄົນ, ຜັກຫອມ 6 ຄົນ)"} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ຜັກຊະນິດໃດທີ່ມີຈຳນວນຄົນມັກຫຼາຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{", ຈຳນວນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງໃຫ້ຄົບຖ້ວນ: "} <span className="point-label">{"(8 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <p>{"มีເດັກນ້ອຍ 20 ຄົນ. ມັກສີແດງ 8 ຄົນ, ມັກສີຟ້າ 7 ຄົນ, ມັກສີຂຽວ 5 ຄົນ."}</p>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000" }}>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold", textAlign: "center", backgroundColor: "#E0F7FA" }}>{"ສີທີ່ມັກ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີແດງ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີຟ້າ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີຂຽວ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center", fontWeight: "bold" }}>{"ລວມ"}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold", textAlign: "center", backgroundColor: "#E0F7FA" }}>{"ຈຳນວນຄົນ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຕອບຄຳຖາມຈາກຕາຕະລາງຂ້າງເທິງ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(2) ຈາກຕາຕະລາງຂ້າງເທິງ, ສີໃດທີ່ມີຄົນມັກໜ້ອຍທີ່ສຸດ ແລະ ມີຈັກຄົນ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{", ຈຳນວນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ອ່ານຂໍ້ມູນຈາກໂຈດແລ້ວນຳມາຕື່ມໃສ່ຕາຕະລາງແຕ່ລະຊ່ອງໃຫ້ຖືກຕ້ອງເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແຕ້ມກຣາບເສົາສະແດງຈຳນວນສັດລ້ຽງ: (ໝາ 4 ໂຕ, ແມວ 5 ໂຕ, ໄກ່ 8 ໂຕ)"} <span className="point-label">{"(8 ຄະແນນ)"}</span></p>
            <div style={{ border: "2px dashed #999", height: "200px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" }}>
              <span style={{ color: "#999" }}>{"(ນັກຮຽນແຕ້ມກຣາບເສົາໃສ່ໜ້ານີ້)"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບກຣາບເສົາ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(2) ລະຫວ່າງ ກຣາບເສົາ ແລະ ຕາຕະລາງ, ອັນໃດຊ່ວຍໃຫ້ປຽບທຽບຄວາມແຕກຕ່າງຂອງຂໍ້ມູນໄດ້ງ່າຍ ແລະ ຈະແຈ້ງກວ່າ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) ໝາກມ່ວງ, (2) ກ້ວຍ, (3) 6 ຄົນ, (4) 28 ຄົນ, (5) ຜັກບົ້ງ, 12 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ສີແດງ: 8, ສີຟ້າ: 7, ສີຂຽວ: 5, ລວມ: 20, (2) ສີຂຽວ, 5 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) (ນັກຮຽນແຕ້ມເອງ, ກວດເບິ່ງຄວາມສູງຂອງເສົາໃຫ້ຖືກຕ້ອງ), (2) ກຣາບເສົາ (ເພາະເຫັນຄວາມສູງປຽບທຽບກັນໄດ້ທັນທີ)"}</span>
          ]
        }
      ],
      advice: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ!"
    }
  },
  {
    unitNumber: 16,
    unitTitle: "ເລກສ່ວນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມຮັກສາໄວ້ຄືເກົ່າເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"16. ເލກສ່ວນ (ຕໍ່)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ການບວກເລກສ່ວນທີ່ມີພູດ (ຕົວລຸ່ມ) ຄືກັນ, ໃຫ້ເອົາຈຳນວນພູດ (ຕົວເທິງ) ບວກກັນເລີຍ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>{"1/4 + 2/4 = 3/4"}</span>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ເລກບວກເລກສ່ວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "1/5 + 2/5 =" },
                { n: "(2)", q: "3/7 + 1/7 =" },
                { n: "(3)", q: "2/8 + 5/8 =" },
                { n: "(4)", q: "4/9 + 3/9 =" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການບວກ): "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ນ້ຳໃນຈອກມີ 2/5 ລິດ ແລະ ໃນຕຸກມີ 1/5 ລິດ. ລວມທັງໝົດມີນ້ຳຈັກລິດ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"ລິດ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ເລກລົບເລກສ່ວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "3/4 - 1/4 =" },
                  { n: "(2)", q: "5/6 - 2/6 =" },
                  { n: "(3)", q: "7/8 - 3/8 =" },
                  { n: "(4)", q: "6/9 - 4/9 =" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນ (ການລົບ): "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(5) ເຊືອກເສັ້ນໜຶ່ງຍາວ 5/6 ແມັດ, ຕັດອອກໄປ 2/6 ແມັດ. ຈະເຫຼືອເຊືອກຈັກແມັດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ແມັດ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ຕົວເລກພູດທາງລຸ່ມບໍ່ຕ້ອງລົບກັນເດີ້, ຮັກສາໄວ້ຄືເກົ່າ ແລ້ວເອົາທາງເທິງລົບກັນ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີໂບເສັ້ນໜຶ່ງ. ນາງ ໄມ ຕັດເອົາໄປ 2/5 ແມັດ. ທ້າວ ສົມ ຕັດເອົາໄປ 1/5 ແມັດ. ສອງຄົນຕັດເອົາໄປທັງໝົດຈັກແມັດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມໝາຍຂອງເລກສ່ວນ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(2) ເລກສ່ວນ 3/5 ແມ່ນໄດ້ມາຈາກ 1/5 ບວກກັນຈັກເທື່ອ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ເທື່ອ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 3/5, (2) 4/7, (3) 7/8, (4) 7/9, (5) 3/5 ລິດ (2/5 + 1/5)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 2/4, (2) 3/6, (3) 4/8, (4) 2/9, (5) 3/6 ແມັດ (5/6 - 2/6)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3/5 ແມັດ, (2) 3 ເທື່ອ"}</span>
          ]
        }
      ],
      advice: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມຮັກສາໄວ້ຄືເກົ່າເດີ!"
    }
  },
  {
    unitNumber: 17,
    unitTitle: "ທະນະບັດ (ເງິນກີບ)",
    unitGoal: "ຮູ້ຈັກ ແລະ ຄິດໄລ່ເງິນກີບ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"17. ທະນະບັດ (ເງິນກີບ)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ເງິນທີ່ເຮົາໃຊ້ແມ່ນມີຫຼາຍໃບ ເຊັ່ນ: ໃບ 10,000 ກີບ, ໃບ 20,000 ກີບ, ໃບ 50,000 ກີບ, ໃບ 100,000 ກີບ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", gap: "20px" }}>
            <div style={{ border: "2px solid #2196F3", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 10,000 ກີບ"}</div>
            <div style={{ border: "2px solid #F44336", padding: "12px", backgroundColor: "#FFEBEE", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 20,000 ກີບ"}</div>
            <div style={{ border: "2px solid #FF9800", padding: "12px", backgroundColor: "#FFF3E0", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 50,000 ກີບ"}</div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "ເງິນໃບ 10,000 ກີບ 5 ໃບ ເປັນເງິນຈັກກີບ?" },
                { n: "(2)", q: "ເງິນໃບ 20,000 ກີບ 3 ໃບ ເປັນເງິນຈັກກີບ?" },
                { n: "(3)", q: "ເງິນໃບ 50,000 ກີບ 2 ໃບ ເປັນເງິນຈັກກີບ?" },
                { n: "(4)", q: "ເງິນໃບ 100,000 ກີບ 1 ໃບ ເປັນເງິນຈັກກີບ?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(5) ມີເງິນໃບ 20,000 ກີບ 2 ໃບ ແລະ ໃບ 10,000 ກີບ 1 ໃບ. ລວມທັງໝົດເປັນເງິນຈັກກີບ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ຊື້ປຶ້ມຫົວໜຶ່ງລາຄາ 35,000 ກີບ. ໃຫ້ເງິນໃບ 50,000 ກີບ 1 ໃບ. ຈະໄດ້ເງິນທອນຈັກກີບ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຊື້ກະເປົາລາຄາ 75,000 ກີບ. ໃຫ້ເງິນໃບ 100,000 ກີບ 1 ໃບ. ຈະໄດ້ເງິນທອນຈັກກີບ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ເຄື່ອງ ແລະ ທອນເງິນ: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p>{"(3) ຊື້ປຶ້ມຂຽນ 12,000 ກີບ ແລະ ປາກກາ 8,000 ກີບ. ໃຫ້ເງິນໃບ 50,000 ກີບ 1 ໃບ. ຈະໄດ້ເງິນທອນຈັກກີບ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintText: "ໃຊ້ການລົບເພື່ອຊອກຫາເງິນທອນເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມທັງໝົດ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີເງິນໃບ 100,000 ກີບ 1 ໃບ, ໃບ 50,000 ກີບ 1 ໃບ ແລະ ໃບ 10,000 ກີບ 3 ໃບ. ລວມທັງໝົດເປັນເງິນຈັກກີບ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການຊື້ກະເປົາ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p>{"(2) ຕ້ອງການຊື້ກະເປົາລາຄາ 180,000 ກີບ. ປັດຈຸບັນມີເງິນໃບ 50,000 ກີບ 3 ໃບ ແລະ ໃບ 20,000 ກີບ 1 ໃບ. ເງິນພໍຊື້ຫຼືບໍ່ ແລະ ຍັງຂາດອີກຈັກກີບ?"}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ: ເງິນພໍຫຼືບໍ່:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{", ຍັງຂາດອີກ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 50,000 ກີບ, (2) 60,000 ກີບ, (3) 100,000 ກີບ, (4) 100,000 ກີບ, (5) 50,000 ກີບ (20,000 x 2 + 10,000)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 15,000 ກີບ, (2) 25,000 ກີບ, (3) 30,000 ກີບ [50,000 - (12,000 + 8,000)]"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 180,000 ກີບ, (2) ບໍ່ພໍ, ຍັງຂາດອີກ 10,000 ກີບ (ມີທັງໝົດ 170,000 ກີບ, ຂາດອີກ 180,000 - 170,000 = 10,000)"}</span>
          ]
        }
      ],
      advice: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!"
    }
  }
];
`;

const finalContent = headerAndUnits1To10 + scoreAdjustedUnits11To17.trim() + '\n';
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully adjusted units3.tsx scores to strictly equal 10 points.");
