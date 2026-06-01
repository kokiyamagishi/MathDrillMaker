const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find start of Unit 4
const u4StartKey = 'unitNumber: 4,';
const u4StartIndex = content.indexOf(u4StartKey);
if (u4StartIndex === -1) {
  console.error("Could not find unitNumber: 4 in units3.tsx");
  process.exit(1);
}

// We want to find the brace `{` that starts Unit 4, which is shortly before unitNumber: 4
// Let's find the last `{` before u4StartIndex
const openBraceIndex = content.lastIndexOf('{', u4StartIndex);
if (openBraceIndex === -1) {
  console.error("Could not find opening brace before Unit 4");
  process.exit(1);
}

// Find start of Unit 6
const u6StartKey = 'unitNumber: 6,';
const u6StartIndex = content.indexOf(u6StartKey);
if (u6StartIndex === -1) {
  console.error("Could not find unitNumber: 6 in units3.tsx");
  process.exit(1);
}

// The brace `{` that starts Unit 6 is shortly before unitNumber: 6
const u6OpenBraceIndex = content.lastIndexOf('{', u6StartIndex);
if (u6OpenBraceIndex === -1) {
  console.error("Could not find opening brace before Unit 6");
  process.exit(1);
}

const prefix = content.substring(0, openBraceIndex);
const suffix = content.substring(u6OpenBraceIndex);

// Define clean Unit 4 and Unit 5 content
const u4_u5_replacement = `{
    unitNumber: 4,
    unitTitle: "ວົງມົນ ແລະ ໜ່ວຍມົນ",
    unitGoal: "ຮຽນຮູ້ວົງມົນ ແລະ ໜ່ວຍມົນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ວົງມົນມີຈຸດໃຈກາງ, ລັດສະໝີ ແລະ ເສັ້ນຜ່າກາງ" },
      content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"4. ວົງມົນ ແລະ ໜ່ວຍມົນ"}</h3>
        <p style={{ fontSize: "20px" }}>{"ວົງມົນແມ່ນຮູບຮ່າງແບນທີ່ມີຂອບໂຄ້ງ. ສ່ວນໜ່ວຍມົນແມ່ນຮູບຊົງສາມມິຕິ ເຊັ່ນ: ໝາກບານ. ວົງມົນມີຈຸດໃຈກາງ, ລັດສະໝີ ແລະ ເສັ້ນຜ່າກາງ."}</p>
        <div style={{ backgroundColor: "#E3F2FD", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div style={{ position: "relative", width: "150px", height: "150px" }}>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%", backgroundColor: "#2196F3" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", width: "75px", height: "2px", backgroundColor: "red", transformOrigin: "left", transform: "rotate(0deg)" }}></div>
              <div style={{ position: "absolute", top: "50%", left: "50%", width: "8px", height: "8px", backgroundColor: "black", borderRadius: "50%", transform: "translate(-50%, -50%)" }}></div>
            </div>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"\u0ea5\u0eb1\u0e94\u0eb1\u0e94\u0eb0\u0eab\u0ea1\u0eb5 (\u0ec0\u0e84\u0eb5\u0ec8\u0e87\u0ebb\u0ec8\u0e87)"}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div style={{ position: "relative", width: "150px", height: "150px" }}>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%", backgroundColor: "#2196F3" }} />
              <div style={{ position: "absolute", top: "50%", left: "0", width: "150px", height: "2px", backgroundColor: "green" }}></div>
              <div style={{ position: "absolute", top: "50%", left: "50%", width: "8px", height: "8px", backgroundColor: "black", borderRadius: "50%", transform: "translate(-50%, -50%)" }}></div>
            </div>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"\u0ec0\u0eaa\u0eb2\u0eb1\u0ec9\u0e99\u0e9c\u0ec8\u0eb2\u0e84\u0eb2\u0e87 (\u0ea5\u0eb1\u0e94\u0eb1\u0e94\u0eb0\u0eab\u0ea1\u0eb5 x 2)"}</span>
          </div>
        </div>
      </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບວົງມົນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຜ່ານຈຸດໃຈກາງ ຈາກຂอบໜຶ່ງຫາອີກຂອບໜຶ່ງ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຈາກຈຸດໃຈກາງ ຫາຂອບວົງມົນ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມສຳພັນ ແລະ ຮູບຊົງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ລັດສະໝີ ມີຄວາມຍາວເປັນແນວໃດ ທຽບກັບ ເສັ້ນຜ່າກາງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"ໝາກບານ ເປັນຕົວແທນຂອງຮູບຊົງຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              <p>{"ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນຜ່າກາງ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີລັດສະໝີຍາວ 4 cm. ເສັ້ນຜ່າກາງຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາຄວາມຍາວຂອງລັດສະໝີ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີເສັ້ນຜ່າກາງຍາວ 10 cm. ລັດສະໝີຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຜ່າກາງ = ລັດສະໝີ x 2. ລັດສະໝີ = ເສັ້ນຜ່າກາງ ÷ 2."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຖ້າວົງມົນມີລັດສະໝີ 15 cm, ເສັ້ນຜ່າກາງຈະແມ່ນເທົ່າໃດ cm?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຮູບຮ່າງຂອງໜ້າປັດໂມງທົ່ວໄປ ເປັນຮູບຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            <span key="1">{"(1) ເສັ້ນຜ່າກາງ, (2) ລັດສະໝີ"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(3) ເປັນເຄິ່ງໜຶ່ງຂອງເສັ້ນຜ່າກາງ (ເສັ້ນຜ່າກາງ ÷ 2), (4) ໜ່ວຍມົນ (ຮູບຊົງກົມ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 8 cm (4 x 2), (2) 5 cm (10 ÷ 2)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 30 cm (15 x 2), (2) ວົງມົນ (ຮູບວົງມົນ)"}</span>
          ]
        }
      ],
      advice: "ຈົ່ງຈື່ຈຳຄວາມແຕກຕ່າງລະຫວ່າງ 'ລັດສະໝີ' ແລະ 'ເສັ້ນຜ່າກາງ' ໃຫ້ດີເດີ້! ມັນມີປະໂຫຍດຫຼາຍໃນບົດຮຽນຕໍ່ໄປ."
    }
  },
  {
    unitNumber: 5,
    unitTitle: "ການຫານທີ່ມີເສດ",
    unitGoal: "ຮຽນຮູ້ການຫານທີ່ມີເສດ ແລະ ວິທີກວດຄືນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ" },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"5. ການຫານທີ່ມີເສດ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ເມື່ອແບ່ງສິ່ງຂອງອອກເປັນກຸ່ມເທົ່າໆກັນແລ້ວຍັງມີສ່ວນທີ່ເຫຼືອ, ສ່ວນນັ້ນເອີ້ນວ່າ 'ຕົວເສດ'. ສິ່ງສຳຄັນແມ່ນ: ຕົວເສດ ຕ້ອງນ້ອຍກວ່າ ຕົວຫານ ສະເໝີ!"}</p>
          <div style={{ backgroundColor: "#E8F5E9", padding: "20px", borderRadius: "12px" }}>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
              <div style={{ border: "2px solid #4CAF50", padding: "10px", borderRadius: "8px", minWidth: "120px", textAlign: "center" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{"ກຸ່ມທີ 1"}</div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div style={{ border: "2px solid #4CAF50", padding: "10px", borderRadius: "8px", minWidth: "120px", textAlign: "center" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{"ກຸ່ມທີ 2"}</div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div style={{ border: "2px solid #4CAF50", padding: "10px", borderRadius: "8px", minWidth: "120px", textAlign: "center" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{"ກຸ່ມທີ 3"}</div>
                <ItemGrid item="🍬" count={4} />
              </div>
              <div style={{ border: "2px dashed #9E9E9E", padding: "10px", borderRadius: "8px", minWidth: "120px", textAlign: "center" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#757575" }}>{"ຕົວເສດ"}</div>
                <ItemGrid item="🍬" count={2} />
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "24px" }}>
              {"ມີເຂົ້າໜົມ 14 ກ້ອນ ແບ່ງໃຫ້ 3 ກຸ່ມ ກຸ່ມລະເທົ່າກັນ."} <br/>
              {"ຈະໄດ້ກຸ່ມລະ 4 ກ້ອນ ແລະ ເຫຼືອ 2 ກ້ອນ."} <br/>
              <strong>{"14 ÷ 3 = 4 ເສດ 2"}</strong>
            </div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ ແລະ ຊອກຕົວເສດ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"10 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"15 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"19 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
            <div style={{ paddingLeft: "16px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
              <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໝາກກ້ວຍ 26 ໜ່ວຍ, ແບ່ງໃຫ້ລີງ 6 ໂຕເທົ່າໆກັນ. ແຕ່ລະໂຕຈະໄດ້ຈັກໜ່ວຍ ແລະ ເຫຼືອໝາກກ້ວຍຈັກໜ່ວຍ?"}</span>
              <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                <span>{"ຕອບ: ໄດ້ໂຕລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px", margin: "0 10px" }}></span>
                <span>{"ໜ່ວຍ, ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px", margin: "0 10px" }}></span>
                <span>{"ໜ່ວຍ."}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການແບ່ງປັນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີປຶ້ມ 25 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກຫົວ ແລະ ເຫຼືອຈັກຫົວ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 30 ໜ່ວຍ, ຈັດໃສ່ກ່ອງ ກ່ອງລະ 8 ໜ່ວຍ. ຈະໄດ້ຈັກກ່ອງ ແລະ ເຫຼືອໄຂ່ຈັກໜ່ວຍ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກ່ອງ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາທີ່ຕ້ອງພިຈາລະນາຕົວເສດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນ 17 ຄົນ ຕ້ອງການນັ່ງໂຕະ ໂຕະລະ 3 ຄົນ. ຕ້ອງໃຊ້ໂຕະຈັກໜ່ວຍ ຈຶ່ງຈະພອນັ່ງທຸກຄົນ? (ລະວັງ: ຕົວເສດກໍຕ້ອງນັ່ງໂຕະ)"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຕ້ອງໃຊ້ໂຕະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 45,000 ກີບ, ຢາກຊື້ປຶ້ມຫົວລະ 6,000 ກີບ. ຈະຊື້ໄດ້ຫຼາຍທີ່ສຸດຈັກຫົວ ແລະ ເງິນທອນເຫຼືອເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຊື້ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເງິນທອນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"กີບ."}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສຳລັບຂໍ້ 3, ຄົນທີ່ເຫຼືອ (ຕົວເສດ) ກໍຕ້ອງໄດ້ນັ່ງໂຕະຄືກັນ ສະນັ້ນຕ້ອງບວກໂຕະເພີ່ມອີກ 1 ໜ່ວຍ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຊອກຫາຄຳຕອບ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"13 ÷ 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"20 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ມີເຂົ້າໜົມ 19 ກ້ອນ ແບ່ງໃຫ້ 5 ຄົນ. ຈະໄດ້ຄົນລະເທົ່າໃດ ແລະ ເຫຼືອເທົ່າໃດ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "12px" }}>
                  <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ, ເຫຼືອ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ."}</span>
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
            <span key="1">{"(1) 3 ເສດ 1, (2) 3 ເສດ 3, (3) 3 ເສດ 4, (4) 4 ເສດ 2"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 6 ເສດ 1, (2) 6 ເສດ 2, (3) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 6 ເສດ 1, (2) 6 ເສດ 2, (3) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"}</span>
          ]
        }
      ],
      advice: "ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ. ຖ້າຕົວເສດໃຫຍ່ກວ່າຕົວຫານ ສະແດງວ່າຜົນຫານຍັງໃຫຍ່ໄດ້ອີກເດີ້!"
    }
  },
`;

const result = prefix + u4_u5_replacement + suffix;
fs.writeFileSync(filePath, result, 'utf8');
console.log("Successfully restored Unit 4 and Unit 5 in units3.tsx!");
