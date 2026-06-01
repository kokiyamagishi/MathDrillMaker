const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 6 ====
const u6BasicOld = `    basicProblems: [
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
    ],`;

const u6BasicNew = `    basicProblems: [
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
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div>
            <p>{"ຈົ່ງປະກອບບັດລຸ່ມນີ້ໃຫ້ເປັນຈຳນວນ: "} <span className="point-label">{"(2 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px" }}>
              <div style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <NumberCards thousands={4} hundreds={1} tens={5} ones={2} />
                <span>{" = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 3,
        content: (
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
        )
      }
    ],`;

const u6ChallengeOld = `    challengeProblems: {
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
    },`;

const u6ChallengeNew = `    challengeProblems: {
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
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
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
    },`;

const u6SummaryOld = `    summaryProblems: [
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
    ],`;

const u6SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈຳນວນແລະການປຽບທຽບ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
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
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", paddingLeft: "16px" }}>
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
        )
      }
    ],`;

content = content.replace(u6BasicOld, u6BasicNew);
content = content.replace(u6ChallengeOld, u6ChallengeNew);
content = content.replace(u6SummaryOld, u6SummaryNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 6 updated');
