const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

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

const u6BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <p>{"ຈົ່ງບອກຈຳນວນທີ່ລູກສອນຊີ້ໃສ່ໃນເສັ້ນສະແດງຈຳນວນ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}</span></p>
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
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກບວກລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={352} bottom={468} operator="+" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={579} bottom={246} operator="+" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(6)"}</span>
                <VerticalMath top={895} bottom={145} operator="+" columns={4} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 4,
        content: (
          <div>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກລົບລຸ່ມນີ້ (ມີຕົວຢືມ): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(7)"}</span>
                <VerticalMath top={752} bottom={426} operator="-" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(8)"}</span>
                <VerticalMath top={815} bottom={347} operator="-" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(9)"}</span>
                <VerticalMath top={603} bottom={258} operator="-" columns={4} />
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

const u6ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍໃຊ້ເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}</span></p>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການບວກລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໂຮງຮຽນມີນັກຮຽນຍິງ 345 ຄົນ ແລະ ນັກຮຽນຊາຍ 386 ຄົນ. ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <VerticalMath top={345} bottom={386} operator="+" columns={4} />
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
        },
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການລົບລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 850 ພັນກີບ. ຊື້ເຄື່ອງໄປ 475 ພັນກີບ. ຈະເຫຼືອເງິນເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <VerticalMath top={850} bottom={475} operator="-" columns={4} />
                    <div>
                      <span>{"ຕອບ:"}</span>
                      <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                      <span>{"ພັນກີບ"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຢ່າລືມການຈື່ສຳລັບການບວກ ແລະ ການຢືມສຳລັບການລົບ."
    },`;

const u6SummaryOld = `    summaryProblems: [
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

const u6SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈຳນວນແລະການປຽບທຽບ "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
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
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກບວກ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={678} bottom={254} operator="+" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={496} bottom={135} operator="+" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={782} bottom={349} operator="+" columns={4} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 3,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກລົບ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(6)"}</span>
                <VerticalMath top={892} bottom={555} operator="-" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(7)"}</span>
                <VerticalMath top={624} bottom={378} operator="-" columns={4} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(8)"}</span>
                <VerticalMath top={405} bottom={169} operator="-" columns={4} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u6BasicOld, u6BasicNew);
content = content.replace(u6ChallengeOld, u6ChallengeNew);
content = content.replace(u6SummaryOld, u6SummaryNew);

// Update Unit 6 answers
const u6AnswersOld = `    answers: {
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
      advice: "ການອ່ານຈຳນວນຫຼັກພັນ ແມ່ນໃຫ້ເລີ່ມອ່ານແຕ່ຫຼັກພັນ ໄປຫາຫຼັກໜ່ວຍຕາມລຳດັບ."
    }`;

const u6AnswersNew = `    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 400, (2) 850"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(3) 4152"}</span>
          ]
        },
        {
          questionNumber: 3,
          answers: [
            <span key="3">{"(4) 820, (5) 825, (6) 1040"}</span>
          ]
        },
        {
          questionNumber: 4,
          answers: [
            <span key="4">{"(7) 326, (8) 468, (9) 345"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="5">{"(1) >, (2) <"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="6">{"(3) 731 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 3",
          answers: [
            <span key="7">{"(4) 375 ພັນກີບ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="8">{"(1) 6053, (2) <"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="9">{"(3) 932, (4) 631, (5) 1131"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 3",
          answers: [
            <span key="10">{"(6) 337, (7) 246, (8) 236"}</span>
          ]
        }
      ],
      advice: "ການບວກ ແລະ ການລົບເລກຫຼາຍຫຼັກ ແມ່ນໃຫ້ຕັ້ງຫຼັກໃຫ້ຊື່ກັນ ແລ້ວຄິດໄລ່ແຕ່ຫຼັກໜ່ວຍໄປຫາຫຼັກທີ່ໃຫຍ່ກວ່າສະເໝີ. ຢ່າລືມຕົວຈື່ ແລະ ຕົວຢືມເດີ້!"
    }`;

content = content.replace(u6AnswersOld, u6AnswersNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 6 Basic, Challenge, Summary, and Answers updated');
