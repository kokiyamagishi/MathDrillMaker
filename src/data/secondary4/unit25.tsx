import React from "react";
import { UnitData } from "../units2";

export const unit25Data: UnitData = {
  unitNumber: 25,
  unitTitle: "ພາກທີ III - ບົດທີ 25: ໄຕມູມມິຕິໃນຮູບສາມແຈສາກ (Trigonometry in Right Triangles)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນໄຕມູມມິຕິ sin, cos, tan ໃນຮູບສາມແຈສາກ, ຄ່າຂອງມຸມພິເສດ (30°, 45°, 60°), ແລະ ເອກະລັກໄຕມູມມິຕິພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 111-115",
  subSections: [
    {
      title: "1. ອັດຕາສ່ວນໄຕມູມມິຕິໃນຮູບສາມແຈສາກ (Trigonometric Ratios in Right Triangles)",
      keyPoint: {
        title: "ນິຍາມ sin, cos, tan",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈສາກ ABC ທີ່ສາກຢູ່ C (ຂ້າງກົງສາກແມ່ນ c, ຂ້າງກົງໜ້າມຸມ A ແມ່ນ a, ຂ້າງຕິດແປະແມ່ນ b):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ສູດອັດຕາສ່ວນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຊີນ (sin A):"}</strong>{" sin A = ຂ້າງກົງໜ້າ / ຂ້າງກົງສາກ = a/c"}</li>
                <li><strong>{"ໂກຊີນ (cos A):"}</strong>{" cos A = ຂ້າງຕິດແປະ / ຂ້າງກົງສາກ = b/c"}</li>
                <li><strong>{"ຕັງ (tan A):"}</strong>{" tan A = ຂ້າງກົງໜ້າ / ຂ້າງຕິດແປະ = a/b = sin A / cos A"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີເອກະລັກພື້ນຖານ: sin² A + cos² A = 1 ແລະ tan A = sin A / cos A!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈສາກ ABC ສາກຢູ່ B ທີ່ມີຂ້າງ AB = 4 ແລະ BC = 3. ຈົ່ງຄິດໄລ່: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຂ້າງກົງສາກ AC (ໂດຍນຳໃຊ້ປີຕາກໍ) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າຂອງ sin A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແລະ cos A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາອັດຕາສ່ວນໄຕມູມມິຕິຈາກເອກະລັກ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ cos A = 4/5 ຂອງມຸມແຫຼມ A. ຄ່າຂອງ sin A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ sin A = 3/5 ຂອງມຸມແຫຼມ A. ຄ່າຂອງ tan A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄ່າໄຕມູມມິຕິຂອງມຸມພິເສດ ແລະ ເອກະລັກພົວພັນ (Trigonometry of Special Angles & Identities)",
      keyPoint: {
        title: "ຕາຕະລາງມຸມພິເສດ 30°, 45°, 60°",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.20rem", textAlign: "center" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5", borderBottom: "2px solid #DDD" }}>
                  <th style={{ padding: "10px" }}>{"ມຸມ A"}</th>
                  <th style={{ padding: "10px" }}>{"30°"}</th>
                  <th style={{ padding: "10px" }}>{"45°"}</th>
                  <th style={{ padding: "10px" }}>{"60°"}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #EEE" }}>
                  <td style={{ padding: "10px", fontWeight: "bold" }}>{"sin A"}</td>
                  <td style={{ padding: "10px" }}>{"1/2"}</td>
                  <td style={{ padding: "10px" }}>{"√2 / 2"}</td>
                  <td style={{ padding: "10px" }}>{"√3 / 2"}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #EEE" }}>
                  <td style={{ padding: "10px", fontWeight: "bold" }}>{"cos A"}</td>
                  <td style={{ padding: "10px" }}>{"√3 / 2"}</td>
                  <td style={{ padding: "10px" }}>{"√2 / 2"}</td>
                  <td style={{ padding: "10px" }}>{"1/2"}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #EEE" }}>
                  <td style={{ padding: "10px", fontWeight: "bold" }}>{"tan A"}</td>
                  <td style={{ padding: "10px" }}>{"√3 / 3"}</td>
                  <td style={{ padding: "10px" }}>{"1"}</td>
                  <td style={{ padding: "10px" }}>{"√3"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສູດມຸມປະກອບເພີ່ມ: sin(90° - A) = cos A ແລະ cos(90° - A) = sin A. ເຊັ່ນ sin 30° = cos 60° = 1/2!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນໄຕມູມມິຕິ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) sin 30° + cos 60° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) tan² 60° + sin² 45° = 3 + 1/2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມສູງຂອງຕົ້ນໄມ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຢືນຫ່າງຈາກຕົ້ນໄມ້ 10 ແມັດ. ຫຼຽວເບິ່ງຍອດໄມ້ດ້ວຍມຸມເງີຍ 30°. ຈົ່ງຊອກຫາຄວາມສູງຂອງຕົ້ນໄມ້ (ບໍ່ນັບຄວາມສູງຂອງຕາ, tan 30° = √3 / 3 ≈ 0.577)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: ຄວາມສູງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{" ແມັດ (ຂຽນຮູບຮ່າງ √3)"}</span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດເອກະລັກພິສູດ (Trigonometric Proof Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ sin A + cos A = 1.2. ຈົ່ງຊອກຫາຄ່າຂອງຜົນຄູນ sin A × cos A?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: sin A × cos A ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຊອກຫາ tan 15° (Trigonometry Challenge): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຮູບສາມແຈ ABC ມີ AB = AC = 2, ມຸມ A = 30° ແລະ ຫຼຸດລົງຈົນໄດ້ tan 15° = 2 - √3. ຈົ່ງຄິດໄລ່ tan 15° ເປັນຈຳນວນທົດສະນິຍົມ (√3 ≈ 1.732)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: tan 15° ≈"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ຂຶ້ນກຳລັງສອງ: (sin A + cos A)² = 1.2² ⇒ sin² A + cos² A + 2 sin A cos A = 1.44 ⇒ 1 + 2 sin A cos A = 1.44 ⇒ 2 sin A cos A = 0.44 ⇒ sin A cos A = 0.22! ສຳລັບ tan 15°: 2 - 1.732 = 0.268!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າຂອງ cos 30°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄ່າຂອງ cos 30° ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ເອກະລັກ sin² A + cos² A: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສໍາລັບທຸກໆມຸມແຫຼມ A, ຄ່າຂອງ sin² A + cos² A ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1-1">{"5 (ຄິດໄລ່: AC² = AB² + BC² = 16 + 9 = 25 ⇒ AC = 5)"}</span>,
          <span key="1-2">{"3/5 (ຄິດໄລ່: sin A = BC/AC = 3/5)"}</span>,
          <span key="1-3">{"4/5 (ຄິດໄລ່: cos A = AB/AC = 4/5)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"3/5 (ຄິດໄລ່: sin² A + cos² A = 1 ⇒ sin A = √(1 - 16/25) = 3/5)"}</span>,
          <span key="2-2">{"3/4 (ຄິດໄລ່: tan A = sin A / cos A = (3/5)/(4/5) = 3/4)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"1 (ຄິດໄລ່: sin 30° + cos 60° = 1/2 + 1/2 = 1)"}</span>,
          <span key="3-2">{"7/2 (ຄິດໄລ່: tan² 60° + sin² 45° = 3 + 1/2 = 7/2)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"10√3 / 3 (ຄິດໄລ່: h = 10 × tan 30° = 10√3 / 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0.22 (ຄິດໄລ່: (sin A + cos A)² = 1 + 2 sin A cos A = 1.44 ⇒ sin A cos A = 0.22)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"0.268 (ຄິດໄລ່: 2 - 1.732 = 0.268)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"√3 / 2 (ຄິດໄລ່: cos 30° = √3 / 2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"1 (ຄິດໄລ່: ເອກະລັກພື້ນຖານ sin² A + cos² A = 1 ສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າໄດ້ເຂົ້າໃຈພື້ນຖານຂອງອັດຕາສ່ວນໄຕມູມມິຕິໃນຮູບສາມແຈສາກຢ່າງສົມບູນ. ນີ້ແມ່ນຫົວຂໍ້ທີ່ສໍາຄັນ ແລະ ສວຍງາມຫຼາຍໃນເລຂາຄະນິດ!"
  }
};
