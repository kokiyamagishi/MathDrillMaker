const fs = require('fs');

const units = `
  {
    unitNumber: 11,
    unitTitle: "ຮູບສາມແຈ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈປະເພດຕ່າງໆ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຮູບສາມແຈທ່ຽງມີ 2 ຂ້າງເທົ່າກັນ ແລະ ຮູບສາມແຈສະເໝີມີ 3 ຂ້າງເທົ່າກັນເດີ! ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດ！"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"11. ຮູບສາມແຈ"}</h3>
          <div style={{ display: "flex", gap: "24px", justifyContent: "space-around", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", textAlign: "center", flex: 1, minWidth: "250px" }}>
              <Shape type="triangle" color="#2196F3" size={120} />
              <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px" }}>{"ຮູບສາມແຈທ່ຽງ"}</p>
              <p>{"ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈທ່ຽງ."}</p>
            </div>
            <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", textAlign: "center", flex: 1, minWidth: "250px" }}>
              <Shape type="triangle" color="#4CAF50" size={120} />
              <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "16px" }}>{"ຮູບສາມແຈສະເໝີ"}</p>
              <p>{"ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າ ຮູບສາມແຈສະເໝີ."}</p>
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
            <p>{"ຈົ່ງບອກຊື່ຂອງຮູບສາມແຈລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <Shape type="triangle" color="#FF9800" size={80} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                {/* Visual approximation of right-angled triangle */}
                <Shape type="triangle" color="#9C27B0" size={80} rotation={90} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <Shape type="triangle" color="#00BCD4" size={80} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                <Shape type="triangle" color="#E91E63" size={80} rotation={180} />
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
              <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ຮູບສາມແຈທີ່ມີທັງ 3 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຮູບສາມແຈທີ່ມີ 2 ຂ້າງເທົ່າກັນ ເອີ້ນວ່າຮູບຫຍັງ?"}</p>
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
      hintText: "ຢ່າລືມໃຊ້ໄມ້ບັນທັດແທກຄວາມຍາວຂອງຂ້າງໃຫ້ລະອຽດເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແຕ້ມຮູບລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(1) ຮູບສາມແຈທ່ຽງ:"}</span>
                <div style={{ border: "2px dashed #999", width: "150px", height: "150px", borderRadius: "8px" }}></div>
              </div>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(2) ຮູບສາມແຈສະເໝີ:"}</span>
                <div style={{ border: "2px dashed #999", width: "150px", height: "150px", borderRadius: "8px" }}></div>
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
            <span key="1">{"(1) ຮ�          <div style={{ display: "flex", flexDirection: "row", gap: "32px", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", border: "2px dashed #4CAF50", padding: "24px", borderRadius: "12px", backgroundColor: "#F1F8E9", flexShrink: 0 }}>
              <table style={{ borderCollapse: "collapse", fontFamily: "var(--font-number)", fontSize: "26px", fontWeight: "bold" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"76"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "4px 16px", textAlign: "left" }}>{"3"}</td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "3px solid #000", padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"6 "}</td>
                    <td style={{ borderLeft: "3px solid #000", borderTop: "3px solid #000", padding: "4px 16px", textAlign: "left" }}>{"25"}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"16"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "3px solid #000", padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{"15"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{" 1"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                </tbody>
              </table>
              <span style={{ color: "#D32F2F", fontWeight: "bold", fontSize: "20px" }}>{"ຄຳຕອບ: 25 ເສດ 1"}</span>
            </div>
            <div style={{ fontSize: "18px", flex: 1, lineHeight: "1.6" }}>
              <p style={{ margin: "4px 0", fontWeight: "bold", color: "#1976D2" }}>{"ຂັ້ນຕອນການຄິດໄລ່ 76 ÷ 3 ຕາມທາງຕັ້ງ:"}</p>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກສິບ (ຫານຫຼັກສິບກ່ອນ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 7 ÷ 3 = 2. ຂຽນ '2' ໃສ່ຫຼັກສິບຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 2 = 6. ຂຽນ '6' ໄວ້ກ້ອງເລກ 7."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 7 - 6 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 6."}</p>
              
              <p style={{ margin: "8px 0 4px 0" }}>{"② ຫຼັກໜ່ວຍ (ຊັກເລກຫຼັກໜ່ວຍລົງມາ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ชັກລົງມາ: ຊັກເລກ '6' ລົງມາໃສ່ທາງຂ້າງເລກ 1 ຈະໄດ້ '16'."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 16 ÷ 3 = 5. ຂຽນ '5' ໃສ່ຫຼັກໜ່ວຍຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 5 = 15. ຂຽນ '15' ໄວ້ກ້ອງເລກ 16."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 16 - 15 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 15 (ຕົວເສດ)."}</p>
              
              <p style={{ margin: "8px 0 0 0", fontWeight: "bold", color: "#D32F2F" }}>{"③ ຜົນຫານແມ່ນ 25, ເສດ 1."}</p>
            </div>
          </div>5"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 16px", textAlign: "right", whiteSpace: "pre" }}>{" 1"}</td>
                    <td style={{ borderLeft: "3px solid #000", padding: "0" }}></td>
                  </tr>
                </tbody>
              </table>
              <span style={{ color: "#D32F2F", fontWeight: "bold", fontSize: "20px" }}>{"ຄຳຕອບ: 25 ເສດ 1"}</span>
            </div>
            <div style={{ fontSize: "18px", maxWidth: "450px", lineHeight: "1.6" }}>
              <p style={{ margin: "4px 0", fontWeight: "bold", color: "#1976D2" }}>{"ขັ້ນຕອນການຄິດໄລ່ 76 ÷ 3 ຕາມທາງຕັ້ງ:"}</p>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກສິບ (ຫານຫຼັກສິບກ່ອນ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 7 ÷ 3 = 2. ຂຽນ '2' ໃສ່ຫຼັກສິບຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 2 = 6. ຂຽນ '6' ໄວ້ກ້ອງເລກ 7."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 7 - 6 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 6."}</p>
              
              <p style={{ margin: "8px 0 4px 0" }}>{"② ຫຼັກໜ່ວຍ (ຊັກເລກຫຼັກໜ່ວຍລົງມາ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຊັກລົງມາ: ຊັກເລກ '6' ລົງມາໃສ່ທາງຂ້າງເລກ 1 ຈະໄດ້ '16'."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຫານ: 16 ÷ 3 = 5. ຂຽນ '5' ໃສ່ຫຼັກໜ່ວຍຂອງຄຳຕອບ."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ຄູນ: 3 x 5 = 15. ຂຽນ '15' ໄວ້ກ້ອງເລກ 16."}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>{"• ລົບ: 16 - 15 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 15 (ຕົວເສດ)."}</p>
              
              <p style={{ margin: "8px 0 0 0", fontWeight: "bold", color: "#D32F2F" }}>{"③ ຜົນຫານແມ່ນ 25, ເສດ 1."}</p>
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
            <p>{"ຈົ່ງຄິດໄລ່ການຫານລຸ່ມນີ້ (ແນວຕັ້ງ): "} <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "48 ÷ 2 =" }, { n: "(2)", q: "69 ÷ 3 =" }, { n: "(3)", q: "84 ÷ 4 =" },
                { n: "(4)", q: "55 ÷ 5 =" }, { n: "(5)", q: "72 ÷ 6 =" }, { n: "(6)", q: "96 ÷ 8 =" },
                { n: "(7)", q: "85 ÷ 5 =" }, { n: "(8)", q: "91 ÷ 7 =" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              ))}
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
              <p>{"ຈົ່ງຄິດໄລ່ການຫານ (ມີຕົວເສດ): "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "47 ÷ 2 =" }, { n: "(2)", q: "80 ÷ 3 =" },
                  { n: "(3)", q: "95 ÷ 4 =" }, { n: "(4)", q: "61 ÷ 5 =" }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      ],
      hintText: "ຝຶກຫານເທື່ອລະຫຼັກ ແລ້ວຊັກຕົວເລກຖັດໄປລົງມາເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີເຂົ້າໜົມ 75 ກ້ອນ. ແບ່ງໃຫ້ເດັກນ້ອຍ 4 ຄົນເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກກ້ອນ ແລະ ຍັງເຫຼືອຈັກກ້ອນ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ມີສໍດຳ 89 ກ້ານ. ຈັດໃສ່ກ່ອງ ກ່ອງລະ 6 ກ້ານ. ຈະໄດ້ຈັກກ່ອງ ແລະ ຍັງເຫຼືອຈັກກ້ານ?"}</p>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 24, (2) 23, (3) 21, (4) 11, (5) 12, (6) 12, (7) 17, (8) 13"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 23 ເສດ 1, (2) 26 ເສດ 2, (3) 23 ເສດ 3, (4) 12 ເສດ 1"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ໄດ້ 18 ກ້ອນ ເສດ 3, (2) ໄດ້ 14 ກ່ອງ ເສດ 5"}</span>
          ]
        }
      ],
      advice: "ຖ້າຕົວເສດໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບຕົວຫານ, ສະແດງວ່າເຮົາຄິດໄລ່ຜິດເດີ! ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະເໝີ."
    }
  },
  {
    unitNumber: 13,
    unitTitle: "ການປຽບທຽບດ້ວຍຈຳນວນເທົ່າ",
    unitGoal: "ຮຽນຮູ້ການປຽບທຽບຄວາມຍາວ ແລະ ປະລິມານດ້ວຍຈຳນວນເທົ່າ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"13. ການປຽບທຽບດ້ວຍຈຳນວນເທົ່າ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ການປຽບທຽບວ່າຄວາມຍາວໜຶ່ງໃຫຍ່ກວ່າອີກຄວາມຍາວໜຶ່ງຈັກເທົ່າ, ເຮົາໃຊ້ການຫານ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <TapeDiagram totalParts={3} highlightedParts={3} label="ເຊືອກ ກ (9m)" width={450} color="#2196F3" />
              <TapeDiagram totalParts={3} highlightedParts={1} label="ເຊືອກ ຂ (3m)" width={450} color="#4CAF50" />
            </div>
            <p style={{ fontSize: "22px", margin: 0, fontWeight: "bold" }}>{"ເຊືອກ ກ ຍາວກວ່າ ເຊືອກ ຂ: 9 ÷ 3 = 3 (ເທົ່າ)"}</p>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຊອກຫາວ່າເປັນຈັກເທົ່າ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "ເຊືອກ 12m ແມ່ນຈັກເທົ່າຂອງ 4m?" },
                { n: "(2)", q: "ນ້ຳ 15L ແມ່ນຈັກເທົ່າຂອງ 3L?" },
                { n: "(3)", q: "ນ້ຳໜັກ 24kg ແມ່ນຈັກເທົ່າຂອງ 6kg?" },
                { n: "(4)", q: "ความຍາວ 35cm ແມ່ນຈັກເທົ່າຂອງ 7cm?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              ))}
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ແມ່ຊື້ນ້ຳປາ 2 ແກ້ວ, ແກ້ວໃຫຍ່ມິນ້ຳປາ 1000mL, ແກ້ວນ້ອຍມິນ້ຳປາ 200mL. ແກ້ວໃຫຍ່ມິນ້ຳປາຫຼາຍກວ່າແກ້ວນ້ອຍຈັກເທົ່າ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ພໍ່ມີເງິນ 50,000 ກີບ, ລູກມີເງິນ 5,000 ກີບ. ພໍ່ມີເງິນຫຼາຍກວ່າລູກຈັກເທົ່າ?"}</p>
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
      hintText: "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນເທົ່າເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຊອກຫາຄວາມຍາວ ແລະ ປະລິມານ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ໂບເສັ້ນໜຶ່ງຍາວ 6m. ຖ້າມີໂບທີ່ຍາວກວ່າເສັ້ນນີ້ 4 ເທົ່າ, ໂບເສັ້ນນັ້ນຈະຍາວຈັກແມັດ?"}</p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຄຸນ້ຳນ້ອຍບັນຈຸນ້ຳໄດ້ 3L. ຄຸນ້ຳໃຫຍ່ບັນຈຸນ້ຳໄດ້ 5 ເທົ່າຂອງຄຸນ້ຳນ້ອຍ. ຄຸນ້ຳໃຫຍ່ບັນຈຸນ້ຳໄດ້ຈັກລິດ?"}</p>
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
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 3 ເທົ່າ, (2) 5 ເທົ່າ, (3) 4 ເທົ່າ, (4) 5 ເທົ່າ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 5 ເທົ່າ, (2) 10 ເທົ່າ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 24m (6x4), (2) 15L (3x5)"}</span>
          ]
        }
      ],
      advice: "ຖ້າຊອກຫາວ່າໃຫຍ່ກວ່າຈັກເທົ່າໃຫ້ໃຊ້ 'ການຫານ', ຖ້າຮູ້ຈຳນວນເທົ່າແລ້ວຊອກຫາຄວາມຍາວທັງໝົດໃຫ້ໃຊ້ 'ການຄູນ'!"
    }
  }
`;

const file = 'src/data/units3.tsx';
let content = fs.readFileSync(file, 'utf8');

const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex) + ',\n' + units + '\n];';
  fs.writeFileSync(file, content, 'utf8');
  console.log("Units 11, 12, 13 added successfully.");
} else {
  console.error("Could not find end of array.");
}
