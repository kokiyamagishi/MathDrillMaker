const fs = require('fs');

const units = `
  {
    unitNumber: 14,
    unitTitle: "ຈຳນວນທົດສະນິຍົມ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທົດສະນິຍົມ, ການບວກ ແລະ ການລົບທົດສະນິຍົມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ! 10 ເທື່ອຂອງ 0.1 ແມ່ນ 1."
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"14. ຈຳນວນທົດສະນິຍົມ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ຖ້າແບ່ງ 1 ອອກເປັນ 10 ສ່ວນເທົ່າໆກັນ, 1 ສ່ວນນັ້ນຂຽນເປັນ 0.1 (ສູນຈຸດໜຶ່ງ)."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <NumberLine min={0} max={1} step={0.1} showLabels={true} width={600} />
            <div style={{ display: "flex", gap: "40px" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E53935" }}>{"10 ເທື່ອຂອງ 0.1 ແມ່ນ 1"}</span>
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
            <p>{"ຈົ່ງຂຽນຈຳນວນທົດສະນິຍົມທີ່ກົງກັບຈຳນວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "0.1 ມີ 8 ເທື່ອ" },
                { n: "(2)", q: "0.1 ມີ 15 ເທື່ອ" },
                { n: "(3)", q: "0.1 ມີ 23 ເທື່ອ" },
                { n: "(4)", q: "0.1 ມີ 3 ເທື່ອ" },
                { n: "(5)", q: "0.1 ມີ 30 ເທື່ອ" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              <p>{"ຈົ່ງຄິດໄລ່ເລກບວກ ແລະ ລົບທົດສະນິຍົມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "0.4 + 0.3 = " },
                  { n: "(2)", q: "1.2 + 0.5 = " },
                  { n: "(3)", q: "0.8 - 0.2 = " },
                  { n: "(4)", q: "2.5 - 1.2 = " },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px" }}>
                    <span style={{ fontWeight: "bold" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      ],
      hintText: "ບວກລົບເລກທົດສະນິຍົມໃຫ້ເອົາຕົວເລກຫຼັງຈຸດມາບວກລົບກັນເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປຽບທຽບຈຳນວນທົດສະນິຍົມ ໂດຍໃຊ້ເຄື່ອງໝາຍ >, < ຫຼື =: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", a: "0.6", b: "0.8" },
                { n: "(2)", a: "1.5", b: "1.2" },
                { n: "(3)", a: "2.0", b: "2" },
                { n: "(4)", a: "3.4", b: "4.3" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.a}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{item.b}</span>
                </div>
              ))}
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
            <span key="1">{"(1) 0.8, (2) 1.5, (3) 2.3, (4) 0.3, (5) 3.0"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 0.7, (2) 1.7, (3) 0.6, (4) 1.3"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) <, (2) >, (3) =, (4) <"}</span>
          ]
        }
      ],
      advice: "ຕົວເລກຫຼັງຈຸດທົດສະນິຍົມ ບອກເຖິງສ່ວນທີ່ບໍ່ເຕັມ 1 ເດີ!"
    }
  },
  {
    unitNumber: 15,
    unitTitle: "ກຣາບເສົາ ແລະ ຕາຕະລາງ",
    unitGoal: "ອ່ານ ແລະ ສ້າງກຣາບເສົາພື້ນຖານ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ! ພະຍາຍາມອ່ານຄວາມສູງຂອງເສົາໃຫ້ລະອຽດເດີ້."
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"15. ກຣາບເສົາ ແລະ ຕາຕະລາງ"}</h3>
          <p style={{ fontSize: "20px" }}>{"ກຣາບເສົາຊ່ວຍໃຫ້ເຮົາປຽບທຽບຂໍ້ມູນໄດ້ຢ່າງຈະແຈ້ງ ແລະ ວ່ອງໄວ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "400px" }}>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>{"ໝາກໄມ້ທີ່ມັກ"}</p>
              <div style={{ display: "flex", alignItems: "flex-end", height: "150px", borderLeft: "2px solid #000", borderBottom: "2px solid #000", gap: "20px", padding: "10px" }}>
                <div style={{ height: "100px", width: "40px", backgroundColor: "#FFCDD2", border: "1px solid #D32F2F" }}></div>
                <div style={{ height: "60px", width: "40px", backgroundColor: "#FFE082", border: "1px solid #FFA000" }}></div>
                <div style={{ height: "120px", width: "40px", backgroundColor: "#C8E6C9", border: "1px solid #388E3C" }}></div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "10px", marginLeft: "10px" }}>
                <div style={{ width: "40px", textAlign: "center" }}>{"ໝາກໂປມ"}</div>
                <div style={{ width: "40px", textAlign: "center" }}>{"ກ້ວຍ"}</div>
                <div style={{ width: "40px", textAlign: "center" }}>{"ໝາກມ່ວງ"}</div>
              </div>
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
            <p>{"ເບິ່ງກຣາບແລ້ວຕອບຄຳຖາມ: (ໝາກມ່ວງມີ 12 ຄົນ, ໝາກໂປມມີ 10 ຄົນ, ກ້ວຍມີ 6 ຄົນ)"} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "ໝາກໄມ້ຊະນິດໃດທີ່ຄົນມັກຫຼາຍທີ່ສຸດ?" },
                { n: "(2)", q: "ໝາກໄມ້ຊະນິດໃດທີ່ຄົນມັກໜ້ອຍທີ່ສຸດ?" },
                { n: "(3)", q: "ຄົນມັກໝາກມ່ວງຫຼາຍກວ່າກ້ວຍຈັກຄົນ?" },
                { n: "(4)", q: "ລວມມີຄົນທັງໝົດຈັກຄົນ?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              <p>{"ນຳເອົາຂໍ້ມູນລຸ່ມນີ້ມາຂຽນໃສ່ຕາຕະລາງໃຫ້ຄົບຖ້ວນ: "} <span className="point-label">{"(ຂໍ້ລະ 10 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <p>{"ມີເດັກນ້ອຍ 20 ຄົນ. ມັກສີແດງ 8 ຄົນ, ມັກສີຟ້າ 7 ຄົນ, ມັກສີຂຽວ 5 ຄົນ."}</p>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000" }}>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold", textAlign: "center", backgroundColor: "#E0F7FA" }}>{"ສີທີ່ມັກ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີແດງ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີຟ້າ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>{"ສີຂຽວ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center", fontWeight: "bold" }}>{"ລວມ"}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #000", padding: "8px", fontWeight: "bold", textAlign: "center", backgroundColor: "#E0F7FA" }}>{"ຈຳນວນຄົນ"}</td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                      <td style={{ border: "1px solid #000", padding: "8px" }}><span className="answer-blank" style={{ display: "inline-block", width: "100%", height: "24px" }}></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      ],
      hintText: "ອ່ານຂໍ້ມູນຈາກໂຈດແລ້ວນຳມາຕື່ມໃສ່ຕາຕະລາງແຕ່ລະຊ່ອງໃຫ້ຖືກຕ້ອງເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແຕ້ມກຣາບເສົາສະແດງຈຳນວນສັດລ້ຽງ: (ໝາ 4 ໂຕ, ແມວ 5 ໂຕ, ໄກ່ 8 ໂຕ)"} <span className="point-label">{"(ຂໍ້ລະ 10 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ border: "2px dashed #999", height: "200px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" }}>
              <span style={{ color: "#999" }}>{"(ນັກຮຽນແຕ້ມກຣາບເສົາໃσ່ໜ້ານີ້)"}</span>
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
            <span key="1">{"(1) ໝາກມ່ວງ, (2) ກ້ວຍ, (3) 6 ຄົນ, (4) 28 ຄົນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ສີແດງ: 8, ສີຟ້າ: 7, ສີຂຽວ: 5, ລວມ: 20"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(ນັກຮຽນແຕ້ມເອງ, ກວດເບິ່ງຄວາມສູງຂອງເສົາໃຫ້ຖືກຕ້ອງ)"}</span>
          ]
        }
      ],
      advice: "ກຣາບເສົາທີ່ສູງກວ່າ ໝາຍເຖິງມີຈຳນວນຫຼາຍກວ່າ!"
    }
  },
  {
    unitNumber: 16,
    unitTitle: "ເລກສ່ວນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບເລກສ່ວນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມຮັກສາໄວ້ຄືເກົ່າເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"16. ເລກສ່ວນ (ຕໍ່)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ການບວກເລກສ່ວນທີ່ມີພູດ (ຕົວລຸ່ມ) ຄືກັນ, ໃຫ້ເອົາຈຳນວນພູດ (ຕົວເທິງ) ບວກກັນເລີຍ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>{"1/4 + 2/4 = 3/4"}</span>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ເລກບວກເລກສ່ວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "1/5 + 2/5 =" },
                { n: "(2)", q: "3/7 + 1/7 =" },
                { n: "(3)", q: "2/8 + 5/8 =" },
                { n: "(4)", q: "4/9 + 3/9 =" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                  <span>{item.q}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              <p>{"ຈົ່ງຄິດໄລ່ເລກລົບເລກສ່ວນລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", paddingLeft: "16px" }}>
                {[
                  { n: "(1)", q: "3/4 - 1/4 =" },
                  { n: "(2)", q: "5/6 - 2/6 =" },
                  { n: "(3)", q: "7/8 - 3/8 =" },
                  { n: "(4)", q: "6/9 - 4/9 =" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{item.n}</span>
                    <span>{item.q}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      ],
      hintText: "ຕົວເລກພູດທາງລຸ່ມບໍ່ຕ້ອງລົບກັນເດີ້, ຮັກສາໄວ້ຄືເກົ່າ ແລ້ວເອົາທາງເທິງລົບກັນ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 10 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີໂބເສັ້ນໜຶ່ງ. ນາງ ໄມ ຕັດເອົາໄປ 2/5 ແມັດ. ທ້າວ ສົມ ຕັດເອົາໄປ 1/5 ແມັດ. ສອງຄົນຕັດເອົາໄປທັງໝົດຈັກແມັດ?"}</p>
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
            <span key="1">{"(1) 3/5, (2) 4/7, (3) 7/8, (4) 7/9"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 2/4, (2) 3/6, (3) 4/8, (4) 2/9"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"3/5 ແມັດ"}</span>
          ]
        }
      ],
      advice: "ການບວກ ແລະ ລົບເລກສ່ວນແມ່ນພຽງແຕ່ເອົາຕົວເລກຂ້າງເທິງມາບວກຫຼືລົບກັນ, ສ່ວນຕົວລຸ່ມຮັກສາໄວ້ຄືເກົ່າເດີ!"
    }
  },
  {
    unitNumber: 17,
    unitTitle: "ທະນະບັດ (ເງິນກີບ)",
    unitGoal: "ຮູ້ຈັກ ແລະ ຄິດໄລ່ເງິນກີບ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!"
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"17. ທະນະບັດ (ເງິນກີບ)"}</h3>
          <p style={{ fontSize: "20px" }}>{"ເງິນທີ່ເຮົາໃຊ້ແມ່ນມີຫຼາຍໃບ ເຊັ່ນ: ໃບ 10,000 ກີບ, ໃບ 20,000 ກີບ, ໃບ 50,000 ກີບ, ໃບ 100,000 ກີບ."}</p>
          <div style={{ backgroundColor: "#F5F5F5", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "center", gap: "20px" }}>
            <div style={{ border: "2px solid #2196F3", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 10,000 ກີບ"}</div>
            <div style={{ border: "2px solid #F44336", padding: "12px", backgroundColor: "#FFEBEE", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 20,000 ກີບ"}</div>
            <div style={{ border: "2px solid #FF9800", padding: "12px", backgroundColor: "#FFF3E0", borderRadius: "8px", fontWeight: "bold" }}>{"ໃບ 50,000 ກີບ"}</div>
          </div>
        </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "16px" }}>
              {[
                { n: "(1)", q: "<b>ເງິນໃບ 10,000 ກີບ 5 ໃບ ເປັນເງິນຈັກກີບ?</b>", rawHtml: true },
                { n: "(2)", q: "ເງິນໃບ 20,000 ກີບ 3 ໃບ ເປັນເງິນຈັກກີບ?" },
                { n: "(3)", q: "ເງິນໃບ 50,000 ກີບ 2 ໃບ ເປັນເງິນຈັກກີບ?" },
                { n: "(4)", q: "ເງິນໃບ 100,000 ກີບ 1 ໃບ ເປັນເງິນຈັກກີບ?" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>{item.n}</span>
                  {item.rawHtml ? (
                    <span dangerouslySetInnerHTML={{ __html: item.q }} />
                  ) : (
                    <span>{item.q}</span>
                  )}
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ຊື້ປຶ້ມຫົວໜຶ່ງລາຄາ 35,000 ກີບ. ໃຫ້ເງິນໃບ 50,000 ກີບ 1 ໃບ. ຈະໄດ້ເງິນທອນຈັກກີບ?"}</p>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "22px", margin: 0 }}>{"(2) ຊື້ກະເປົາລາຄາ 75,000 ກີບ. ໃຫ້ເງິນໃບ 100,000 ກີບ 1 ໃບ. ຈະໄດ້ເງິນທອນຈັກກີບ?"}</p>
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
      hintText: "ໃຊ້ການລົບເພື່ອຊອກຫາເງິນທອນເດີ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ຈຳນວນເງິນລວມທັງໝົດ: "} <span className="point-label">{"(ຂໍ້ລະ 10 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "22px", margin: 0 }}>{"(1) ມີເງິນໃບ 100,000 ກີບ 1 ໃບ, ໃບ 50,000 ກີບ 1 ໃບ ແລະ ໃບ 10,000 ກີບ 3 ໃບ. ລວມທັງໝົດເປັນເງິນຈັກກີບ?"}</p>
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
            <span key="1">{"(1) 50,000 ກີບ, (2) 60,000 ກີບ, (3) 100,000 ກີບ, (4) 100,000 ກີບ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 15,000 ກີບ, (2) 25,000 ກີບ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"180,000 ກີບ"}</span>
          ]
        }
      ],
      advice: "ການຄິດໄລ່ເງິນກີບໃຫຍ່ໆ, ລອງປິດຕົວເລກ 0 ໄວ້ສາມໂຕ ຈະຊ່ວຍໃຫ້ບວກລົບງ່າຍຂຶ້ນເດີ!"
    }
  }
`;

const file = 'src/data/units3.tsx';
let content = fs.readFileSync(file, 'utf8');

const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex) + ',\n' + units + '\n];';
  fs.writeFileSync(file, content, 'utf8');
  console.log("Units 14-17 added successfully.");
} else {
  console.error("Could not find end of array.");
}
