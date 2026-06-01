const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 2 ====
const u2BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"1 ມື້ (1 ວັນ) = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"60 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"2 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"1 ຊົ່ວໂມງເຄິ່ງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u2BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"1 ມື້ (1 ວັນ) = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"1 ຊົ່ວໂມງເຄິ່ງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
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
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "20px" }}>
                <span>{"(4) ນາງນ້ອຍໃຊ້ເວລາເຮັດວຽກບ້ານ 60 ນາທີ. ເທົ່າກັບຈັກຊົ່ວໂມງ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u2ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດກ່ຽວກັບໄລຍະເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນາງດາວເລີ່ມອ່ານປຶ້ມເວລາ 8:00 ໂມງ ແລະ ອ່ານແລ້ວເວລາ 9:30 ໂມງ. ລາວໃຊ້ເວລາອ່ານປຶ້ມດົນປານໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມອອກຈາກຄິວລົດເວລາ 10:00 ໂມງ. ໃຊ້ເວລາເດີນທາງ 2 ຊົ່ວໂມງ. ລົດເມຈະໄປຮອດສະຖານີປາຍທາງເວລາຈັກໂມງ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໄລຍະເວລາ = ເວລາສິ້ນສຸດ - ເວລາເລີ່ມຕົ້ນ"
    },`;

const u2ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາໄລຍະເວລາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນາງດາວເລີ່ມອ່ານປຶ້ມເວລາ 8:00 ໂມງ ແລະ ອ່ານແລ້ວເວລາ 9:30 ໂມງ. ລາວໃຊ້ເວລາອ່ານປຶ້ມດົນປານໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາເວລາສິ້ນສຸດລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມອອກຈາກຄິວລົດເວລາ 10:00 ໂມງ. ໃຊ້ເວລາເດີນທາງ 2 ຊົ່ວໂມງ. ລົດເມຈະໄປຮອດສະຖານີປາຍທາງເວລາຈັກໂມງ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໄລຍະເວລາ = ເວລາສິ້ນສຸດ - ເວລາເລີ່ມຕົ້ນ"
    },`;

const u2SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"2 ມື້ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"1 ໂມງແລງ ຂຽນເປັນຕົວເລກ (ລະບົບ 24 ຊົ່ວໂມງ) ແມ່ນ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"ຈາກ 7:00 ຫາ 8:15 ໃຊ້ເວລາເທົ່າໃດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u2SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"2 ມື້ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"1 ໂມງແລງ ຂຽນເປັນຕົວເລກ (ລະບົບ 24 ຊົ່ວໂມງ) ແມ່ນ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"ຈາກ 7:00 ຫາ 8:15 ໃຊ້ເວລາເທົ່າໃດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u2BasicOld, u2BasicNew);
content = content.replace(u2ChallengeOld, u2ChallengeNew);
content = content.replace(u2SummaryOld, u2SummaryNew);
// Update Unit 2 Answers
content = content.replace(/"\(1\) 60, \(2\) 24, \(3\) 1, \(4\) 120, \(5\) 90"/, '"(1) 60, (2) 24, (3) 90, (4) 1 ຊົ່ວໂມງ"');

// ==== Unit 3 ====
const u3BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "8 ÷ 2 =" }, { n: "(2)", q: "12 ÷ 3 =" },
                { n: "(3)", q: "15 ÷ 5 =" }, { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" }, { n: "(6)", q: "24 ÷ 8 =" },
                { n: "(7)", q: "36 ÷ 9 =" }, { n: "(8)", q: "42 ÷ 7 =" },
                { n: "(9)", q: "64 ÷ 8 =" }, { n: "(10)", q: "81 ÷ 9 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", minWidth: "200px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],`;

const u3BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "8 ÷ 2 =" }, { n: "(2)", q: "12 ÷ 3 =" },
                { n: "(3)", q: "15 ÷ 5 =" }, { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", minWidth: "200px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
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
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "20px" }}>
                <span>{"(6) ມີເຂົ້າໜົມ 24 ກ້ອນ, ແບ່ງໃຫ້ເດັກນ້ອຍ 4 ຄົນ ເທົ່າໆກັນ. ເດັກນ້ອຍຈະໄດ້ຄົນລະຈັກກ້ອນ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ກ້ອນ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u3ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີປຶ້ມ 48 ຫົວ, ແບ່ງໃສ່ກ່ອງ 6 ກ່ອງ ໃຫ້ເທົ່າກັນ. ແຕ່ລະກ່ອງຈະມີປຶ້ມຈັກຫົວ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 50 ພັນກີບ, ແບ່ງໃຫ້ລູກ 5 ຄົນ ຄົນລະເທົ່າໆກັນ. ລູກແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດພັນກີບ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ພັນກີບ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີດອກໄມ້ 36 ດອກ, ຈັດເປັນຊໍ່ ຊໍ່ລະ 4 ດອກ. ຈະໄດ້ດອກໄມ້ຈັກຊໍ່?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນ 63 ຄົນ ຈັດເປັນກຸ່ມ ກຸ່ມລະ 7 ຄົນ. ຈະໄດ້ທັງໝົດຈັກກຸ່ມ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກຸ່ມ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ການແບ່ງອອກເທົ່າໆກັນ ແມ່ນການຫານ. ລອງທ່ອງບັ້ງສູດຄູນຄືນເບິ່ງ!"
    },`;

const u3ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການແບ່ງປັນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີປຶ້ມ 48 ຫົວ, ແບ່ງໃສ່ກ່ອງ 6 ກ່ອງ ໃຫ້ເທົ່າກັນ. ແຕ່ລະກ່ອງຈະມີປຶ້ມຈັກຫົວ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 50 ພັນກີບ, ແບ່ງໃຫ້ລູກ 5 ຄົນ ຄົນລະເທົ່າໆກັນ. ລູກແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດພັນກີບ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ພັນກີບ"}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຈັດກຸ່ມ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີດອກໄມ້ 36 ດອກ, ຈັດເປັນຊໍ່ ຊໍ່ລະ 4 ດອກ. ຈະໄດ້ດອກໄມ້ຈັກຊໍ່?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນ 63 ຄົນ ຈັດເປັນກຸ່ມ ກຸ່ມລະ 7 ຄົນ. ຈະໄດ້ທັງໝົດຈັກກຸ່ມ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກຸ່ມ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ການແບ່ງອອກເທົ່າໆກັນ ແມ່ນການຫານ. ລອງທ່ອງບັ້ງສູດຄູນຄືນເບິ່ງ!"
    },`;

const u3SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "27 ÷ 3 =" },
                { n: "(2)", q: "56 ÷ 8 =" },
                { n: "(3)", q: "45 ÷ 5 =" },
                { n: "(4)", q: "100 ÷ 10 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              ))}
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
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "27 ÷ 3 =" },
                { n: "(2)", q: "56 ÷ 8 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
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
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px" }}>
              <div style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ marginLeft: "12px" }}>{"ມີນົກ 45 ໂຕ ເກາະຢູ່ຕົ້ນໄມ້ 5 ຕົ້ນເທົ່າໆກັນ. ຕົ້ນໄມ້ແຕ່ລະຕົ້ນມີນົກຈັກໂຕ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ໂຕ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u3BasicOld, u3BasicNew);
content = content.replace(u3ChallengeOld, u3ChallengeNew);
content = content.replace(u3SummaryOld, u3SummaryNew);
// Update Unit 3 Answers
content = content.replace(/"\(1\) 4, \(2\) 4, \(3\) 3, \(4\) 5, \(5\) 3, \(6\) 3, \(7\) 4, \(8\) 6, \(9\) 8, \(10\) 9"/, '"(1) 4, (2) 4, (3) 3, (4) 5, (5) 3, (6) 6 ກ້ອນ"');
content = content.replace(/"\(1\) 9, \(2\) 7, \(3\) 9, \(4\) 10"/, '"(1) 9, (2) 7, (3) 9 ໂຕ"');

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 2 and 3 updated');
