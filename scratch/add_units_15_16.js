const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u15_u16_code = `  {
    unitNumber: 15,
    unitTitle: "ປະໂຫຍກສັນຍະລັກທີ່ໃຊ້ຕົວອັກສອນ",
    unitGoal: "ຮຽນຮູ້ການນຳໃຊ້ຕົວອັກສອນ (ເຊັ່ນ x, a) ເພື່ອສະແດງເຖິງປະລິມານທີ່ບໍ່ທັນຮູ້ ແລະ ຂຽນເປັນປະໂຫຍກສັນຍະລັກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 138-143",
    keyPoints: {
      hint: {
        text: "ເຮົາສາມາດໃຊ້ຕົວອັກສອນ x ຫຼື a ແທນຈຳນວນທີ່ບໍ່ທັນຮູ້ ເພື່ອເຮັດໃຫ້ການຂຽນສູດ ແລະ ປະໂຫຍກສັນຍະລັກງ່າຍຂຶ້ນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. การໃຊ້ຕົວອັກສອນແທນຈຳນວນ (Using Letters for Numbers)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: "18px" }}>
              {"ຕົວຢ່າງ: ຊື້ສໍດຳ 1 ກ້ານ ລາຄາ a ກີບ ຈຳນວນ 5 ກ້ານ. ປະໂຫຍກສັນຍະລັກແມ່ນ:"}
            </p>
            <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold", color: "#0D47A1" }}>
              {"a × 5 (ກີບ)"}
            </div>
            <p style={{ margin: "12px 0 0 0", fontSize: "16px", color: "#555" }}>
              {"ຖ້າ a = 500 ກີບ, 代金 (ລາຄາລວມ) ຈະແມ່ນ 500 × 5 = 2500 ກີບ."}
            </p>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ຊອກຫາຄຳຕອບ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຊື້ປຶ້ມຂຽນ 1 ຫົວ ລາຄາ x ກີບ ຈຳນວນ 6 ຫົວ. ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ x = 800 ກີບ. ລາຄາລວມທັງໝົດຈະແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ມີເຂົ້າໜົມທັງໝົດ a ກ້ອນ, ກິນໄປແລ້ວ 5 ກ້ອນ. ເຫຼືອເຂົ້າໜົມຈັກກ້ອນ (ຂຽນເປັນສັນຍະລັກ):"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຈາກຂໍ້ (3), ຖ້າ a = 12. ຈະເຫຼືອເຂົ້າໜົມ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກ້ອນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ສູດເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ ພື້ນ × ລວງສູງ ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລຂາຄະນິດລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span>{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນຍາວ a cm ແລະ ລວງສູງ 6 cm. ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່:"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ a = 8 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານຈະແມ່ນ"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍎 ຊື້ໝາກແອບເປິນ 1 ໜ່ວຍ ລາຄາ x ກີບ ຈຳນວນ 4 ໜ່ວຍ ແລະ ໃສ່ກ່ອງຂອງຂວັນລາຄາ 50 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
          answers: [<span key="1">{"(1) x × 6, (2) 4800 ກີບ (800 × 6), (3) a - 5, (4) 7 ກ້ອນ (12 - 5)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) a × 6, (2) 48 cm² (8 × 6)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"x × 4 + 50 (ຫຼື 4 × x + 50)"}</span>],
        },
      ],
      advice:
        "ການໃຊ້ຕົວອັກສອນ x ແລະ a ຊ່ວຍໃຫ້ເຮົາສ້າງສູດທົ່ວໄປໄດ້ງ່າຍ! ເມື່ອເຮົາປ່ຽນຕົວເລກໃສ່ຕົວອັກສອນນັ້ນ ເຮົາກໍຈະໄດ້ຄຳຕອບທັນທີ.",
    },
  },

  {
    unitNumber: 16,
    unitTitle: "ການປ່ຽນແປງຂອງສອງປະລິມານ ແລະ ອັດຕาສ່ວນພົວພັນ",
    unitGoal: "ຮຽນຮູ້ການສັງເກດຄວາມສຳພັນລະຫວ່າງສອງປະລິມານທີ່ປ່ຽນແປງໄປພ້ອມກັນ ແລະ ເຂົ້າໃຈແນວຄວາມຄິດຂອງອັດຕາສ່ວນພົວພັນ (比例)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 144-152",
    keyPoints: {
      hint: {
        text: "ເມື່ອປະລິມານໜຶ່ງເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ແລ້ວອີກປະລິມານໜຶ່ງກໍເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ຕາມກັນ, ເຮົາເອີ້ນວ່າ ສອງປະລິມານນັ້ນເປັນອັດຕາສ່ວນພົວພັນກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນພົວພັນ (Proportion)"}
          </h3>
          <p style={{ fontSize: "16px", margin: 0 }}>
            {"ຕົວຢ່າງ: ລາຄາຂອງປຶ້ມຂຽນ (1 ຫົວ ລາຄາ 80 ກີບ):"}
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "16px" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຈຳນວນປຶ້ມ (ຫົວ)"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"1"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"2"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"3"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"4"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ລາຄາລວມ (ກີບ)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"80"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"160"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"240"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"320"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງສັງເກດຕາຕະລາງລວດເຫຼັກ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ overflowX: "auto", padding: "8px" }}>
              <table style={{ minWidth: "300px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຄວາມຍາວ (m)"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"1"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"2"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"3"}</th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"4"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ນ້ຳໜັກ (g)"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"20"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"40"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(A)"}</td>
                    <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(B)"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ຈຳນວນ (A) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) จຳນວນ (B) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ຖ້າຄວາມຍາວເພີ່ມຂຶ້ນ 3 ເທື່ອ, ນ້ຳໜັກກໍຈະເພີ່ມຂຶ້ນຈັກເທື່ອ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ເທື່ອ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຖ້າຄວາມຍາວແມ່ນ x m ແລະ ນ້ຳໜັກແມ່ນ y g. ຈົ່ງຂຽນການພົວພັນ y = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "💧 ຄວາມເລິກຂອງນ້ຳຈະເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີຕາມເວລາທີ່ຜ່ານໄປເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>
                  {"🥤 ເປີດນ້ຳໃສ່ອ່າງ, ຜ່ານໄປ 2 ນາທີ ນ້ຳເລິກໄດ້ 6 cm. ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 6 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຖ້າຊື້ປຶ້ມຂຽນ 5 ຫົວ ຕ້ອງຈ່າຍເງິນ 400 ກີບ. ຖ້າຊື້ປຶ້ມຂຽນປະເພດດຽວກັນ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
          answers: [<span key="1">{"(1) 60, (2) 80, (3) 3 ເທື່ອ, (4) 20 × x"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"18 cm (ຍ້ອນເວລາເພີ່ມຂຶ້ນ 3 ເທື່ອ (6÷2), ຄວາມເລິກກໍເພີ່ມຂຶ້ນ 3 ເທື່ອ 6 × 3 = 18)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"1200 ກີບ (ຍ້ອນຈຳນວນປຶ້ມເພີ່ມຂຶ້ນ 3 ເທື່ອ (15÷5), ລາຄາກໍເພີ່ມ 3 ເທື່ອ 400 × 3 = 1200)"}</span>],
        },
      ],
      advice:
        "ອັດຕາສ່ວນພົວພັນແມ່ນມີປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ສິ່ງຕ່າງໆທີ່ເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີ! ຈົ່ງຊອກຫາວ່າປະລິມານເພີ່ມຂຶ້ນຈັກເທື່ອ ແລ້ວຄູນເຂົ້າໄດ້ເລີຍ.",
    },
  },
`;

const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// Check if there is already a comma right before the array ends (excluding whitespace)
const preSnippet = content.substring(0, replacementPoint).trimEnd();
const hasComma = preSnippet.endsWith(',');

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u15_u16_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 15 & 16 added successfully.");
