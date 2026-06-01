const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// Unit 1 Replacement
const u1BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "3 x 2 =" }, { n: "(2)", q: "4 x 5 =" },
                { n: "(3)", q: "6 x 3 =" }, { n: "(4)", q: "7 x 4 =" },
                { n: "(5)", q: "8 x 6 =" }, { n: "(6)", q: "9 x 2 =" },
                { n: "(7)", q: "5 x 8 =" }, { n: "(8)", q: "2 x 9 =" },
                { n: "(9)", q: "6 x 7 =" }, { n: "(10)", q: "9 x 9 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],`;

const u1BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "3 x 2 =" }, { n: "(2)", q: "4 x 5 =" },
                { n: "(3)", q: "6 x 3 =" }, { n: "(4)", q: "7 x 4 =" },
                { n: "(5)", q: "8 x 6 =" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
                <span>{"(6) ມີໝາກກ້ຽງ 4 ຖົງ, ຖົງລະ 5 ໜ່ວຍ. ລວມທັງໝົດມີໝາກກ້ຽງຈັກໜ່ວຍ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u1ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີກ່ອງສໍສີ 5 ກ່ອງ, ແຕ່ລະກ່ອງມີສໍສີ 12 ກ້ານ. ລວມທັງໝົດມີສໍສີຈັກກ້ານ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກ້ານ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນຊັ້ນ ປ.3 ມີ 4 ຫ້ອງ, ແຕ່ລະຫ້ອງມີນັກຮຽນ 30 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ເຂົ້າໜົມ 6 ຖົງ, ຖົງລະ 5 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ພັນກີບ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມ 1 ຄັນ ນັ່ງໄດ້ 45 ຄົນ. ຖ້າມີລົດເມ 2 ຄັນ ຈະນັ່ງໄດ້ຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ອ່ານໂຈດໃຫ້ເຂົ້າໃຈວ່າ ແຕ່ລະກຸ່ມມີຈັກອັນ ແລະ ມີຈັກກຸ່ມ. ແລ້ວເອົາຈຳນວນມາຄູນກັນ."
    },`;

const u1ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບສິ່ງຂອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີກ່ອງສໍສີ 5 ກ່ອງ, ແຕ່ລະກ່ອງມີສໍສີ 12 ກ້ານ. ລວມທັງໝົດມີສໍສີຈັກກ້ານ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກ້ານ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ເຂົ້າໜົມ 6 ຖົງ, ຖົງລະ 5 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄົນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນຊັ້ນ ປ.3 ມີ 4 ຫ້ອງ, ແຕ່ລະຫ້ອງມີນັກຮຽນ 30 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມ 1 ຄັນ ນັ່ງໄດ້ 45 ຄົນ. ຖ້າມີລົດເມ 2 ຄັນ ຈະນັ່ງໄດ້ຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ອ່ານໂຈດໃຫ້ເຂົ້າໃຈວ່າ ແຕ່ລະກຸ່ມມີຈັກອັນ ແລະ ມີຈັກກຸ່ມ. ແລ້ວເອົາຈຳນວນມາຄູນກັນ."
    },`;

const u1SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "10 x 5 =" },
                { n: "(2)", q: "20 x 4 =" },
                { n: "(3)", q: "100 x 3 =" },
                { n: "(4)", q: "50 x 2 =" }
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

const u1SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "10 x 5 =" },
                { n: "(2)", q: "20 x 4 =" }
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
                <span style={{ marginLeft: "12px" }}>{"ມີປຶ້ມ 3 ແຖວ, ແຖວລະ 100 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຫົວ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u1BasicOld, u1BasicNew);
content = content.replace(u1ChallengeOld, u1ChallengeNew);
content = content.replace(u1SummaryOld, u1SummaryNew);
// Update Unit 1 Answers
content = content.replace(/"\(1\) 6, \(2\) 20, \(3\) 18, \(4\) 28, \(5\) 48, \(6\) 18, \(7\) 40, \(8\) 18, \(9\) 42, \(10\) 81"/, '"(1) 6, (2) 20, (3) 18, (4) 28, (5) 48, (6) 20 ໜ່ວຍ"');
content = content.replace(/"\(1\) 60 ກ້ານ \(5x12\), \(2\) 120 ຄົນ \(4x30\), \(3\) 30 ພັນກີບ \(6x5\), \(4\) 90 ຄົນ \(2x45\)"/, '"(1) 60 ກ້ານ, (2) 30 ພັນກີບ, (3) 120 ຄົນ, (4) 90 ຄົນ"');
content = content.replace(/"\(1\) 50, \(2\) 80, \(3\) 300, \(4\) 100"/, '"(1) 50, (2) 80, (3) 300 ຫົວ"');

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 1 updated');
