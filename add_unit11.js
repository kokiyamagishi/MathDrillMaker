const fs = require('fs');

const unit11 = `
  {
    unitNumber: 11,
    unitTitle: "ເລກສ່ວນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເລກສ່ວນພື້ນຖານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: [
      {
        title: "1. ເລກສ່ວນແມ່ນຫຍັງ?",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ fontSize: "20px" }}>{"ເລກສ່ວນໃຊ້ເພື່ອສະແດງຈຳນວນທີ່ແບ່ງອອກເປັນສ່ວນເທົ່າໆກັນ. ຕົວຢ່າງ: ແບ່ງເຄັກ 1 ກ້ອນອອກເປັນ 4 ສ່ວນເທົ່າໆກັນ, ຖ້າເອົາ 1 ສ່ວນ ຈະຂຽນເປັນ 1/4 (ໜຶ່ງສ່ວນສີ່)."}</p>
            <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <TapeDiagram totalParts={2} highlightedParts={1} label="1/2 (ເຄິ່ງໜຶ່ງ)" width={200} />
              </div>
              <div style={{ textAlign: "center" }}>
                <TapeDiagram totalParts={4} highlightedParts={1} label="1/4 (ໜຶ່ງສ່ວນສີ່)" width={200} />
              </div>
              <div style={{ textAlign: "center" }}>
                <TapeDiagram totalParts={4} highlightedParts={3} label="3/4 (ສາມສ່ວນສີ່)" width={200} />
              </div>
            </div>
          </div>
        )
      }
    ],
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນເລກສ່ວນທີ່ສະແດງສ່ວນທີ່ທາສີ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", parts: 3, h: 1 },
                { n: "(2)", parts: 5, h: 2 },
                { n: "(3)", parts: 6, h: 3 },
                { n: "(4)", parts: 8, h: 5 },
                { n: "(5)", parts: 10, h: 7 },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <TapeDiagram totalParts={item.parts} highlightedParts={item.h} width={300} />
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],
    challengeProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີເຂົ້າໜົມປັງ 1 ກ້ອນ. ຖ້າແບ່ງໃຫ້ເດັກນ້ອຍ 4 ຄົນເທົ່າໆກັນ, ແຕ່ລະຄົນຈະໄດ້ຮັບເຂົ້າໜົມປັງຈັກສ່ວນ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ມີໂບຍາວ 1 ແມັດ. ຕັດອອກເປັນ 5 ສ່ວນເທົ່າໆກັນ. ຖ້າເອົາໄປໃຊ້ 2 ສ່ວນ, ໂບທີ່ໃຊ້ໄປແມ່ນຈັກສ່ວນຂອງໂບທັງໝົດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປຽບທຽບເລກສ່ວນໂດຍໃຊ້ເຄື່ອງໝາຍ >, < ຫຼື =: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", a: "1/4", b: "3/4" },
                { n: "(2)", a: "2/5", b: "1/5" },
                { n: "(3)", a: "1/2", b: "1/2" },
                { n: "(4)", a: "4/8", b: "5/8" },
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
      }
    ],
    answers: {
      keyPoints: [],
      basic: [
        {
          questionNumber: "ຂໍ້ 1",
          answers: [
            <span key="1">{"(1) 1/3, (2) 2/5, (3) 3/6, (4) 5/8, (5) 7/10"}</span>
          ]
        }
      ],
      challenge: [
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="1">{"(1) 1/4 ກ້ອນ, (2) 2/5 ແມັດ"}</span>
          ]
        }
      ],
      summary: [
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="1">{"(1) <, (2) >, (3) =, (4) <"}</span>
          ]
        }
      ],
      advice: "ເລກສ່ວນທີ່ມີຕົວສ່ວນ (ຕົວເລກລຸ່ມ) ຄືກັນ, ເຮົາສາມາດປຽບທຽບຕົວເອົາ (ຕົວເລກເທິງ) ໄດ້ເລີຍ!"
    }
  }
`;

const file = 'src/data/units3.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the last "];"
const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex) + ',\n' + unit11 + '\n];';
  fs.writeFileSync(file, content, 'utf8');
  console.log("Unit 11 added successfully.");
} else {
  console.error("Could not find end of array.");
}
