const fs = require('fs');

const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// We find the Unit 3 block between "unitNumber: 3" and the start of Unit 4 "unitNumber: 4"
const u3StartIndex = content.indexOf('unitNumber: 3,');
const u4StartIndex = content.indexOf('unitNumber: 4,');

if (u3StartIndex === -1 || u4StartIndex === -1) {
  console.error("Could not find Unit 3 or Unit 4 boundary!");
  process.exit(1);
}

// Let's get the exact text of Unit 3
const unit3Text = content.substring(u3StartIndex, u4StartIndex);

// Let's define the new split content for Unit 3
const targetBasic = `    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingLeft: "16px",
              }}
            >
              {[
                { n: "(1)", q: "8 ÷ 2 =" },
                { n: "(2)", q: "10 ÷ 5 =" },
                { n: "(3)", q: "15 ÷ 3 =" },
                { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" },
                { n: "(6)", q: "24 ÷ 8 =" },
                { n: "(7)", q: "14 ÷ 7 =" },
                { n: "(8)", q: "30 ÷ 5 =" },
                { n: "(9)", q: "36 ÷ 6 =" },
                { n: "(10)", q: "81 ÷ 9 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],`;

const replacementBasic = `    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ 1: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingLeft: "16px",
              }}
            >
              {[
                { n: "(1)", q: "8 ÷ 2 =" },
                { n: "(2)", q: "10 ÷ 5 =" },
                { n: "(3)", q: "15 ÷ 3 =" },
                { n: "(4)", q: "20 ÷ 4 =" },
                { n: "(5)", q: "18 ÷ 6 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ 2: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingLeft: "16px",
              }}
            >
              {[
                { n: "(6)", q: "24 ÷ 8 =" },
                { n: "(7)", q: "14 ÷ 7 =" },
                { n: "(8)", q: "30 ÷ 5 =" },
                { n: "(9)", q: "36 ÷ 6 =" },
                { n: "(10)", q: "81 ÷ 9 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],`;

const targetChallenge = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}
                </span>
              </p>

              <div
                style={{
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "22px" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີປຶ້ມ 20 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ປຶ້ມຈັກຫົວ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "22px" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຄູມີສໍດຳ 30 ກ້ານ, ຢາກຈັດໃສ່ກ່ອງ ກ່ອງລະ 5 ກ້ານ. ຈະຕ້ອງໃຊ້ຈັກກ່ອງ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກ່ອງ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "22px" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີດອກໄມ້ 42 ດອກ, ມັດເປັນຊໍ່ ຊໍ່ລະ 7 ດອກ. ຈະໄດ້ດອກໄມ້ທັງໝົດຈັກຊໍ່?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "22px" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ເງິນ 50,000 ກີບ ແບ່ງໃຫ້ເດັກນ້ອຍ 5 ຄົນ. ແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກີບ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ການຫານ ແມ່ນກົງກັນຂ້າມກັບການຄູນ. ລອງຄິດເບິ່ງວ່າ ຫຍັງຄູນກັນແລ້ວອອກຈຳນວນນັ້ນ.",
    },`;

const replacementChallenge = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ 1: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>

              <div
                style={{
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "22px" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີປຶ້ມ 20 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ປຶ້ມຈັກຫົວ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຫົວ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "22px" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ຄູມີສໍດຳ 30 ກ້ານ, ຢາກຈັດໃສ່ກ່ອງ ກ່ອງລະ 5 ກ້ານ. ຈະຕ້ອງໃຊ້ຈັກກ່ອງ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກ່ອງ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຫານ 2: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>

              <div
                style={{
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "22px" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີດອກໄມ້ 42 ດອກ, ມັດເປັນຊໍ່ ຊໍ່ລະ 7 ດອກ. ຈະໄດ້ດອກໄມ້ທັງໝົດຈັກຊໍ່?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ຊໍ່"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "22px" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ເງິນ 50,000 ກີບ ແບ່ງໃຫ້ເດັກນ້ອຍ 5 ຄົນ. ແຕ່ລະຄົນຈະໄດ້ເງິນເທົ່າໃດ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <span>{"ຕອບ:"}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "120px",
                        height: "40px",
                        margin: "0 10px",
                      }}
                    ></span>
                    <span>{"ກີບ"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "การຫານ ແມ່ນກົງກັນຂ້າມກັບການຄູນ. ລອງຄິດເບິ່ງວ່າ ຫຍັງຄູນກັນແລ້ວອອກຈຳນວນນັ້ນ.",
    },`;

const targetAnswers = `    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 4, (2) 2, (3) 5, (4) 5, (5) 3, (6) 3, (7) 2, (8) 6, (9) 6, (10) 9"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 5 ຫົວ, (2) 6 ກ່ອງ, (3) 6 ຊໍ່, (4) 10,000 ກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4">{"(4) 4, 4 ທ່ອນ"}</span>],
        },
      ],
      advice:
        "ຖ້ານ້ອງໆທ່ອງບັ້ງສູດໄດ້ໄວ, ການຫານກໍຈະງ່າຍຂຶ້ນຫຼາຍ. ພະຍາຍາມຝຶກຄິດໃນໃຈເບິ່ງເດີ.",
    },`;

const replacementAnswers = `    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 4, (2) 2, (3) 5, (4) 5, (5) 3"
              }
            </span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="1b">
              {
                "(6) 3, (7) 2, (8) 6, (9) 6, (10) 9"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {"(1) 5 ຫົວ, (2) 6 ກ່ອງ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="2b">
              {"(3) 6 ຊໍ່, (4) 10,000 ກີບ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ແລະ 6, (2) 7 ແລະ 7, (3) 7 ແລະ 7"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4">{"(4) 4, 4 ທ່ອນ"}</span>],
        },
      ],
      advice:
        "ຖ້ານ້ອງໆທ່ອງບັ້ງສູດໄດ້ໄວ, ການຫານກໍຈະງ່າຍຂຶ້ນຫຼາຍ. ພະຍາຍາມຝຶກຄິດໃນໃຈເບິ່ງເດີ.",
    },`;

// Let's modify the unit3Text
let modifiedUnit3Text = unit3Text;

if (!modifiedUnit3Text.includes(targetBasic)) {
  console.error("Could not find target basicProblems in Unit 3!");
  process.exit(1);
}
modifiedUnit3Text = modifiedUnit3Text.replace(targetBasic, replacementBasic);

if (!modifiedUnit3Text.includes(targetChallenge)) {
  console.error("Could not find target challengeProblems in Unit 3!");
  process.exit(1);
}
modifiedUnit3Text = modifiedUnit3Text.replace(targetChallenge, replacementChallenge);

if (!modifiedUnit3Text.includes(targetAnswers)) {
  console.error("Could not find target answers in Unit 3!");
  process.exit(1);
}
modifiedUnit3Text = modifiedUnit3Text.replace(targetAnswers, replacementAnswers);

// Write back
const newContent = content.substring(0, u3StartIndex) + modifiedUnit3Text + content.substring(u4StartIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully split Unit 3 basicProblems and challengeProblems into multiple 大問!");
