const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Find the start of Unit 9 precisely.
const u9Index = content.indexOf('unitNumber: 9,');
if (u9Index === -1) {
  console.error("Could not find Unit 9 start!");
  process.exit(1);
}

// Find the opening brace of Unit 9 object before u9Index.
let openBraceIndex = -1;
for (let i = u9Index; i >= 0; i--) {
  if (content[i] === '{') {
    openBraceIndex = i;
    break;
  }
}

if (openBraceIndex === -1) {
  console.error("Could not find open brace before Unit 9!");
  process.exit(1);
}

// Keep everything before the open brace of Unit 9
const header = content.substring(0, openBraceIndex);

// Define correct Unit 9
const unit9Text = `  {
    unitNumber: 9,
    unitTitle: "ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກນ້ຳໜັກ kg, g",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 ກິໂລກຣາມ (kg) = 1000 ກຣາມ (g)" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"9. ວິທີຊັ່ງ ແລະ ຫົວໜ່ວຍຂອງນ້ຳໜັກ (kg, g)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ພວກເຮົາໃຊ້ນ້ຳໜັກເພື່ອບອກວ່າສິ່ງຂອງໜັກເທົ່າໃດ. ຫົວໜ່ວຍທີ່ໃຊ້ຫຼາຍແມ່ນ ກິໂລກຣາມ (kg) ແລະ ກຣາມ (g)."}</p>
          <div style={{ backgroundColor: "#FCE4EC", padding: "20px", borderRadius: "12px", minWidth: "120px", textAlign: "center" }}>
            <div style={{ fontSize: "60px", marginBottom: "10px" }}>{"⚖️"}</div>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: "#E91E63" }}>
              {"1 kg = 1000 g"}
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
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກເປັນກຣາມ (g): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span><span>{"1 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span><span>{"2 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span><span>{"1000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span><span>{"5000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span><span>{"1 kg ເຄິ່ງ ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການລວມນ້ຳໜັກ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໝາກໂມໜ່ວຍໜຶ່ງໜັກ 2 kg, ໝາກຫຸ່ງໜ່ວຍໜຶ່ງໜັກ 500 g. ທັງສອງໜ່ວຍລວມກັນໜັກເທົ່າໃດ g?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການລົບນ້ຳໜັກ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊີ້ນໝູ 1 kg. ຖ້າແບ່ງອອກໄປ 300 g ຈະເຫຼືອຊີ້ນໝູເທົ່າໃດ g?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນກຣາມ (g) ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບເດີ. (1 kg = 1000 g)"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(1)"}</span>{" 3 kg = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(2)"}</span>{" 4000 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" kg"}</div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ນ້ຳໜັກປະສົມ ແລະ ການເລືອກຫົວໜ່ວຍ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(3)"}</span>{" 1 kg 200 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(4)"}</span>{" ນ້ຳໜັກຄົນເຮົາຄວນໃຊ້ຫົວໜ່ວຍອັນໃດ? (kg ຫຼື g) = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span></div>
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
            <span key="1">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 2500 g, (2) 700 g"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3000 g, (2) 4 kg, (3) 1200 g, (4) kg"}</span>
          ]
        }
      ],
      advice: "ເວັບຊັ່ງນ້ຳໜັກເຄື່ອງຢູ່ຕະຫຼາດ ແມ່ຄ້າຈະມັກໃຊ້ 'ກິໂລ' (kg) ແລະ 'ຂີດ'. (1 ຂີດ = 100 g)"
    }
  }`;

// Define correct Unit 10
const unit10Text = `  {
    unitNumber: 10,
    unitTitle: "ການຄູນຕາມທາງຕັ້ງ ຕໍ່",
    unitGoal: "ຮຽນຮູ້ການຄູນແບບຕັ້ງບັ້ງເລກ ທີ່ມີຕົວຈື່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ຖ້າຄູນແລ້ວເກີນ 10 ຕ້ອງຈື່ (ທົດ) ໄປຫຼັກຖັດໄປ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"10. ການຄູນຕາມທາງຕັ້ງ ຕໍ່ (ມີຕົວຈື່)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ບາງຄັ້ງ ເວລາຄູນຫຼັກຫົວໜ່ວຍອາດຈະໄດ້ຜົນຫຼາຍກວ່າ 10, ເຮົາຕ້ອງ 'ຈື່' ແລ້ວເອົາໄປບວກໃສ່ຫຼັກຖັດໄປ. ຕົວຢ່າງ: 14 x 3"}</p>
          <div style={{ backgroundColor: "#E8F5E9", padding: "20px", borderRadius: "12px", minWidth: "120px", display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
            <VerticalMath top={14} bottom={3} operator="×" showAnswer={true} columns={3} />
            <div style={{ fontSize: "18px", maxWidth: "400px", lineHeight: "1.6" }}>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກໜ່ວຍ: 4 x 3 = 12. ຂຽນ 2 ໃສ່ຫຼັກໜ່ວຍ ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ (ຂຽນ 1 ແດງນ້ອຍໆໄວ້ເທິງຫຼັກສິບ)."}</p>
              <p style={{ margin: "4px 0" }}>{"② ຫຼັກສິບ: 1 x 3 = 3. ເອົາ 3 ບວກກັບ 1 (ຈື່) = 4. ຂຽນ 4 ໃສ່ຫຼັກສິບ."}</p>
              <p style={{ margin: "4px 0" }}>{"③ ຜົນຄູນທັງໝົດແມ່ນ 42."}</p>
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
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={15} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={24} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={16} bottom={5} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={38} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບໄຂ່: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 4 ແຕະ, ແຕ່ລະແຕະມີ 24 ໜ່ວຍ. ລວມທັງໝົດມີໄຂ່ຈັກໜ່ວຍ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຈ່າຍເງິນ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ເຂົ້າໜົມ 5 ຖົງ, ຖົງລະ 15 ພັນກີບ. ຕ້ອງຈ່າຍເງິນເທົ່າໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"ພັນກີບ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຢ່າລືມເອົາຕົວຈື່ໄປບວກໃສ່ຫຼັງຈາກຄູນຫຼັກຫົວສິບແລ້ວ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 1 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={17} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={28} bottom={3} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 2 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={19} bottom={5} operator="×" columns={3} />
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
            <span key="1">{"(1) 45, (2) 96, (3) 80, (4) 76, (5) 90"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 96 ໜ່ວຍ (24 x 4), (2) 75 ພັນກີບ (15 x 5)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 68, (2) 84, (3) 90, (4) 95"}</span>
          ]
        }
      ],
      advice: "การຈື່ (ການທົດ) ຕົວເລກ ເປັນຈຸດທີ່ນັກຮຽນມັກຫຼົງລືມ. ພະຍາຍາມຂຽນຕົວຈື່ນ້ອຍໆໄວ້ເທິງຫົວເລກຈະຊ່ວຍໄດ້ເດີ!"
    }
  }`;

// Load Unit 11-13 from add_units_11_13.js
const addUnits11To13 = fs.readFileSync(path.join(__dirname, '../add_units_11_13.js'), 'utf8');
const u11To13Match = addUnits11To13.match(/const units = \`([\s\S]*?)\`;/);
if (!u11To13Match) {
  console.error("Could not parse units in add_units_11_13.js!");
  process.exit(1);
}
let u11To13Text = u11To13Match[1].trim();
// Safely remove trailing backslash if regex match included it
if (u11To13Text.endsWith('\\\\') || u11To13Text.endsWith('\\')) {
  u11To13Text = u11To13Text.slice(0, -1).trim();
}

// Load Unit 14-17 from add_units_14_17.js
const addUnits14To17 = fs.readFileSync(path.join(__dirname, '../add_units_14_17.js'), 'utf8');
const u14To17Match = addUnits14To17.match(/const units = \`([\s\S]*?)\`;/);
if (!u14To17Match) {
  console.error("Could not parse units in add_units_14_17.js!");
  process.exit(1);
}
let u14To17Text = u14To17Match[1].trim();
if (u14To17Text.endsWith('\\\\') || u14To17Text.endsWith('\\')) {
  u14To17Text = u14To17Text.slice(0, -1).trim();
}

// Rebuild content
const rebuiltContent = header.trim() + '\n' + unit9Text.trim() + ',\n' + unit10Text.trim() + ',\n' + u11To13Text.trim() + ',\n' + u14To17Text.trim() + '\n];\n';

fs.writeFileSync(filePath, rebuiltContent, 'utf8');
console.log("Successfully rebuilt units3.tsx with fully restored Unit 9-10 and modified Units 11-17.");
