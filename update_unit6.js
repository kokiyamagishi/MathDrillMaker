const fs = require('fs');
const path = require('path');

const filePath = path.join('/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newUnit6 = `  {
    unitNumber: 6,
    unitTitle: "ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່",
    unitGoal: "ຮຽນຮູ້ຈຳນວນເຖິງ 10000, ວິທີສະແດງການບວກ ແລະ ການລົບຈຳນວນຫຼາຍ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ຈຳນວນຫຼາຍສາມາດແບ່ງເປັນ ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"6. ຈຳນວນຫຼາຍ (ຮອດ 10000) ແລະ ການຄິດໄລ່"}</h3>
          <p style={{ fontSize: "20px" }}>{"ເຮົາມາເບິ່ງຈຳນວນທີ່ຫຼາຍຂຶ້ນນຳກັນ. ຕົວຢ່າງ: 3240 ແບ່ງອອກເປັນແຕ່ລະຫຼັກໄດ້ແນວໃດ?"}</p>
          <div style={{ backgroundColor: "#FFF3E0", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#E65100" }}>{"1. ການແບ່ງຈຳນວນຕາມຫຼັກ (3240)"}</div>
            <NumberCards thousands={3} hundreds={2} tens={4} ones={0} />
            <div style={{ textAlign: "center", fontSize: "20px", marginTop: "10px" }}>
              {"3240 = 3000 + 200 + 40 + 0"}
            </div>
          </div>
          <div style={{ backgroundColor: "#E3F2FD", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1565C0" }}>{"2. ການອ່ານເສັ້ນສະແດງຈຳນວນ (Number Line)"}</div>
            <NumberLine
              min={0}
              max={10000}
              step={1000}
              minorStep={500}
              arrows={[
                { value: 3000, label: "(1)", color: "#E53935", showAnswer: true },
                { value: 6500, label: "(2)", color: "#E53935", showAnswer: true }
              ]}
              width={700}
            />
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <p>{"ຈົ່ງບອກຈຳນວນທີ່ລູກສອນຊີ້ໃສ່ໃນເສັ້ນສະແດງຈຳນວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
              <NumberLine
                min={0}
                max={1000}
                step={100}
                minorStep={50}
                arrows={[
                  { value: 400, label: "(1)", color: "#1976D2", showAnswer: false },
                  { value: 850, label: "(2)", color: "#4CAF50", showAnswer: false }
                ]}
                width={700}
              />
              <div style={{ display: "flex", gap: "40px", paddingLeft: "16px", marginTop: "16px" }}>
                <div style={{ fontSize: "20px" }}>{"(1) "}<span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span></div>
                <div style={{ fontSize: "20px" }}>{"(2) "}<span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span></div>
              </div>
            </div>
            
            <div>
              <p>{"ຈົ່ງປະກອບບັດລຸ່ມນີ້ໃຫ້ເປັນຈຳນວນ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 2 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <div style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <NumberCards thousands={4} hundreds={1} tens={5} ones={2} />
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
            </div>

            <div>
              <p>{"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                  <VerticalMath top={352} bottom={426} operator="+" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                  <VerticalMath top={759} bottom={426} operator="-" />
                </div>
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
              <p>{"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍໃຊ້ເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ fontSize: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"4320"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"4302"}</span>
                </div>
                <div style={{ fontSize: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"8999"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"9000"}</span>
                </div>
              </div>

              <p style={{ marginTop: "16px" }}>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໂຮງຮຽນມີນັກຮຽນຍິງ 345 ຄົນ ແລະ ນັກຮຽນຊາຍ 321 ຄົນ. ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <VerticalMath top={345} bottom={321} operator="+" />
                    <div>
                      <span>{"ຕອບ:"}</span>
                      <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                      <span>{"ຄົນ"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເວລາປຽບທຽບ, ໃຫ້ເບິ່ງຕົວເລກຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ (ຫຼັກພັນ) ກ່ອນເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "16px" }}>
              
              <div style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຈຳນວນທີ່ປະກອບດ້ວຍ ຫຼັກພັນ 6, ຫຼັກຮ້ອຍ 0, ຫຼັກສິບ 5, ຫຼັກໜ່ວຍ 3 ແມ່ນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>

              <div style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຈົ່ງໃສ່ເຄື່ອງໝາຍປຽບທຽບ (<, >): 5010 "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{" 5100"}</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                  <VerticalMath top={678} bottom={111} operator="+" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                  <VerticalMath top={899} bottom={555} operator="-" />
                </div>
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
            <span key="1">{"(1) 400, (2) 850, (3) 4152, (4) 778, (5) 333"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) >, (2) <, (3) 666 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6053, (2) <, (3) 789, (4) 344"}</span>
          ]
        }
      ],
      advice: "ການອ່ານເສັ້ນສະແດງຈຳນວນ ຕ້ອງສັງເກດເບິ່ງວ່າ 1 ຕາກະໂຣນ້ອຍໆມີຄ່າເທົ່າໃດກ່ອນເດີ!"
    }
  },`;

const startIndex = content.indexOf('  {\n    unitNumber: 6,');
const endIndex = content.indexOf('  {\n    unitNumber: 7,');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newUnit6 + '\n' + content.substring(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated Unit 6');
} else {
  console.log('Could not find bounds of Unit 6');
}
