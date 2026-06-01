const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

// Find Unit 8 start
const u8Match = content.match(/\{[\s]*\n[\s]*unitNumber:\s*8,/);
const u9Match = content.match(/\{[\s]*\n[\s]*unitNumber:\s*9,/);

if (!u8Match || !u9Match) {
  console.error("Could not find Unit 8 or Unit 9 start!");
  process.exit(1);
}

const u8Start = u8Match.index;
const u9Start = u9Match.index;

console.log(`Unit 8 starts at: ${u8Start}, Unit 9 starts at: ${u9Start}`);

// Extract the Unit 8 segment
let u8Segment = content.substring(u8Start, u9Start);

// We want to replace the summaryProblems and answers section of Unit 8.
// Let's find "summaryProblems: [" inside the Unit 8 segment.
const summaryProblemsStart = u8Segment.indexOf('summaryProblems: [');
if (summaryProblemsStart === -1) {
  console.error("Could not find summaryProblems in Unit 8!");
  process.exit(1);
}

// We want to replace everything from "summaryProblems: [" to the end of the answers advice block,
// which is followed by the closing of the Unit 8 object.
// The Unit 8 segment ends with:
//   },
// 
//   {  (which starts Unit 9)
// So u8Segment ends with the closing of the answers object, then "  }," or "  },,"
// Let's find the last advice block or last closing.
const targetEndMarker = '    },\n  },';
const targetEndMarkerAlt = '    },\n  },,';

let replacementEndIndex = u8Segment.lastIndexOf(targetEndMarker);
let endMarkerLength = targetEndMarker.length;

if (replacementEndIndex === -1) {
  replacementEndIndex = u8Segment.lastIndexOf(targetEndMarkerAlt);
  endMarkerLength = targetEndMarkerAlt.length;
}

if (replacementEndIndex === -1) {
  console.error("Could not find target end marker in Unit 8 segment!");
  process.exit(1);
}

// Extract prefix and suffix of u8Segment
const u8Prefix = u8Segment.substring(0, summaryProblemsStart);
const u8Suffix = u8Segment.substring(replacementEndIndex + endMarkerLength);

// Design the replacement for summaryProblems, answers, and the advice block of Unit 8
const u8NewSummaryAndAnswers = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 485 ÷ 21 ="}</span>
                <span
                  className="answer-blank"
                  style={{ display: "inline-block", width: "100px", height: "40px" }}
                ></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 422 ÷ 15 ="}</span>
                <span
                  className="answer-blank"
                  style={{ display: "inline-block", width: "100px", height: "40px" }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງກຸ່ມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                paddingLeft: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "⛵ ມີນັກຮຽນທັງໝົດ 47 ຄົນ ຕ້ອງການຂີ່ເຮືອທ່ອງທ່ຽວ. ຖ້າເຮືອແຕ່ລະລຳສາມາດບັນຈຸຄົນໄດ້ຫຼາຍສຸດ 4 ຄົນ, ຈະຕ້ອງໃຊ້ເຮືອຢ່າງໜ້ອຍຈັກລຳ ຈຶ່ງຈະສາມາດພານັກຮຽນໄປໄດ້ທັງໝົດ?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{ display: "inline-block", width: "120px", height: "40px" }}
                ></span>
                <span>{"ລຳ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 23 ເսດ 2, (2) 28 ເսດ 2"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 13 ເսດ 3, (4) 13 ເສດ 1"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"ໄດ້ 15 ຖົງ, ເຫຼືອ 5 ກ້ອນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="4">{"15 ÷ 3 = 5"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">
              {"(1) 23 ເսດ 2, (2) 28 ເսດ 2"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="6">
              {"12 ລຳ (ຍ້ອນ 47 ÷ 4 = 11 ເສດ 3, ຕ້ອງເພີ່ມເຮືອອີກ 1 ລຳ ສຳລັບ 3 ຄົນທີ່ເຫຼືອ)"}
            </span>,
          ],
        },
      ],
      advice:
        "ໃນໂຈດບັນຫາຕົວຈິງ, ບາງເທື່ອເຮົາຕ້ອງບວກ 1 ໃສ່ຜົນຫານ ຖ້າຕົວເສດທີ່ເຫຼືຍັງຕ້ອງການກຸ່ມ ຫຼື ພາຫະນະເພື່ອບັນຈຸເດີ້!",
    },
  },`;

// Reconstruct u8Segment
u8Segment = u8Prefix + u8NewSummaryAndAnswers + u8Suffix;

// Reconstruct entire file
const newContent = content.substring(0, u8Start) + u8Segment + content.substring(u9Start);

fs.writeFileSync(path, newContent, 'utf8');
console.log("SUCCESS: Unit 8 page 33 has been successfully reorganized and normalized!");
