const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

const u3SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 24  ດັ່ງນັ້ນ, 24 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"5 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 35  ດັ່ງນັ້ນ, 35 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"7 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 49  ດັ່ງນັ້ນ, 49 ÷ 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"8 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 64  ດັ່ງນັ້ນ, 64 ÷ 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"9 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 72  ດັ່ງນັ້ນ, 72 ÷ 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u3SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 24  ດັ່ງນັ້ນ, 24 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"5 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 35  ດັ່ງນັ້ນ, 35 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"7 x"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"= 49  ດັ່ງນັ້ນ, 49 ÷ 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ມີເຊືອກຍາວ 12 ແມັດ. ຖ້າຕັດແບ່ງເປັນທ່ອນລະ 3 ແມັດ, ຈະໄດ້ເຊືອກທັງໝົດຈັກທ່ອນ?"}</span>
                </div>
                <TapeDiagram
                  type="single"
                  totalLabel="ເຊືອກທັງໝົດ 12 ແມັດ"
                  leftLabel="3 ແມັດ"
                  rightLabel="ສ່ວນທີ່ເຫຼືອ?"
                  leftWidthPercent={25}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍາລັກ: 12 ÷ 3 = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span style={{ marginLeft: "16px" }}>{"ຕອບ: "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ທ່ອນ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u3SummaryOld, u3SummaryNew);

const u3AnswersOld = `        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7, (4) 8 ແລະ 8, (5) 8 ແລະ 8"}</span>
          ]
        }`;

const u3AnswersNew = `        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4">{"(4) 4, 4 ທ່ອນ"}</span>
          ]
        }`;

content = content.replace(u3AnswersOld, u3AnswersNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 3 rope problem added');
