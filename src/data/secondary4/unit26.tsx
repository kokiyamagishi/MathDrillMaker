import React from "react";
import { UnitData } from "../units2";

export const unit26Data: UnitData = {
  unitNumber: 26,
  unitTitle: "ພາກທີ III - ບົດທີ 26: ໂກຊີນ, ຊີນ ແລະ ຕັງຂອງມຸມລະຫວ່າງ 0° ຫາ 180° (Trigonometry from 0° to 180°)",
  unitGoal: "ຮຽນຮູ້ການຂະຫຍາຍອັດຕາສ່ວນໄຕມູມມິຕິໃສ່ວົງມົນຫົວໜ່ວຍ (Unit Circle), ສຶກສາເຄື່ອງໝາຍຂອງ sin, cos, tan ໃນພາກສ່ວນຕ່າງໆ (Quadrants), ແລະ ນຳໃຊ້ສູດມຸມເພີ່ມ/ມຸມປະກອບ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 116-121",
  subSections: [
    {
      title: "1. ໄຕມູມມິຕິໃນວົງມົນຫົວໜ່ວຍ ແລະ ເຄື່ອງໝາຍ (Trigonometry in Unit Circle & Signs)",
      keyPoint: {
        title: "ນິຍາມເທິງວົງມົນຫົວໜ່ວຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສໍາລັບມຸມ θ ໃດໆ ລະຫວ່າງ 0° ຫາ 180°, ຈຸດ P(a, b) ເທິງວົງມົນຫົວໜ່ວຍ (ລັດສະໝີ R = 1) ຈະກຳນົດຄ່າດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" }}>{"ຈຸດປະສານໄຕມູມມິຕີ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ແກນນອນ Ox (ຄ່າຂອງ a):"}</strong>{" cos θ = a  (ມີຄ່າແຕ່ -1 ຫາ 1)."}</li>
                <li><strong>{"ແກນຕັ້ງ Oy (ຄ່າຂອງ b):"}</strong>{" sin θ = b  (ມີຄ່າແຕ່ 0 ຫາ 1)."}</li>
                <li><strong>{"ເສັ້ນສໍາຜັດ (tan θ):"}</strong>{" tan θ = b/a = sin θ / cos θ (ສໍາລັບ θ ≠ 90°)."}</li>
              </ul>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ເຄື່ອງໝາຍໃນແຕ່ລະພາກສ່ວນ (Quadrants):"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ພາກສ່ວນທີ I (0° ≤ θ ≤ 90°):"}</strong>{" sin θ ≥ 0, cos θ ≥ 0, tan θ ≥ 0."}</li>
                <li><strong>{"ພາກສ່ວນທີ II (90° ≤ θ ≤ 180°):"}</strong>{" sin θ ≥ 0, cos θ ≤ 0, tan θ ≤ 0 (cos ແລະ tan ຈະຕິດລົບ)."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ລະວັງ: ມຸມ 90° ຈະບໍ່ມີຄ່າ tan θ ເພາະ cos 90° = 0 (ຕົວຫານເປັນ 0)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກເຄື່ອງໝາຍ (+ ຫຼື -) ຂອງອັດຕາສ່ວນໄຕມູມມິຕິດຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) cos 120° (ພາກສ່ວນທີ II) ມີເຄື່ອງໝາຍ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແລະ sin 120° (ພາກສ່ວນທີ II) ມີເຄື່ອງໝາຍ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) tan 135° (ພາກສ່ວນທີ II) ມີເຄື່ອງໝາຍ"}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຈາກວົງມົນຫົວໜ່ວຍໂດຍກົງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ມຸມ θ = 180° ມີຕົວປະສານແມ່ນ P(-1, 0). ດັ່ງນັ້ນ cos 180° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ມຸມ θ = 90° ມີຕົວປະສານແມ່ນ P(0, 1). ດັ່ງນັ້ນ sin 90° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສູດມຸມປະກອບເພີ່ມ ແລະ ມຸມພົວພັນ (Reduction Formulas)",
      keyPoint: {
        title: "ສູດຫຼຸດມຸມໃຫຍ່ກວ່າ 90°",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການພົວພັນລະຫວ່າງມຸມປະກອບເພີ່ມ (180° - θ) ແລະ ມຸມປະກອບ (90° ± θ):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#4A148C" }}>{"ມຸມປະກອບເພີ່ມ (180° - θ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- sin(180° - θ) = sin θ"}
                <br />
                {"- cos(180° - θ) = -cos θ"}
                <br />
                {"- tan(180° - θ) = -tan θ"}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ມຸມປະກອບ (90° + θ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- sin(90° + θ) = cos θ"}
                <br />
                {"- cos(90° + θ) = -sin θ"}
                <br />
                {"- tan(90° + θ) = -1 / tan θ"}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: cos 135° = cos(180° - 45°) = -cos 45° = -√2/2. sin 120° = sin(180° - 60°) = sin 60° = √3/2!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງມຸມຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) cos 150° = -cos 30° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) sin 135° = sin 45° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນໄຕມູມມິຕິ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນ: A = cos 135° × sin 120° × tan 150° / cos 60°?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: A ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
              {"ໂຈດການພິສູດຜົນບວກສຳນວນ (Trigonometric Expression Simplification): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນ: B = sin 80° + cos 110° + sin 160° + cos 170°?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: B ="}</span>
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
              {"ໂຈດການຊອກຫາມຸມຈາກຄ່າ cos (Finding Angle from Value): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ cos θ = -1/2 ສໍາລັບ 0° ≤ θ ≤ 180°. ຈົ່ງຊອກຫາຄ່າຂອງມຸມ θ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
              <span>{"ຕອບ: θ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" ອົງສາ"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: " B = sin 80° + cos 110° + sin 160° + cos 170°. ຍ້ອນ sin 80° = cos 10°, cos 110° = -sin 20°, sin 160° = sin 20°, cos 170° = -cos 10° ⇒ B = cos 10° - sin 20° + sin 20° - cos 10° = 0! ສໍາລັບ cos θ = -1/2 ⇒ θ = 180° - 60° = 120°!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າຂອງ sin 150°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄ່າຂອງ sin 150° ແມ່ນເທົ່າໃດ?"}
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
            {"ຄ່າຂອງ cos 135°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄ່າຂອງ cos 135° ແມ່ນເທົ່າໃດ?"}
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
          <span key="1-1">{"ລົບ (ຄິດໄລ່: cos 120° = -1/2 < 0)"}</span>,
          <span key="1-2">{"ບວກ (ຄິດໄລ່: sin 120° = √3/2 > 0)"}</span>,
          <span key="1-3">{"ລົບ (ຄິດໄລ່: tan 135° = -1 < 0)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"-1 (ຄິດໄລ່: ຈາກຕົວປະສານ x ຂອງ P(-1, 0))"}</span>,
          <span key="2-2">{"1 (ຄິດໄລ່: ຈາກຕົວປະສານ y ຂອງ P(0, 1))"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"-√3 / 2 (ຄິດໄລ່: cos 150° = -cos 30° = -√3/2)"}</span>,
          <span key="3-2">{"√2 / 2 (ຄິດໄລ່: sin 135° = sin 45° = √2/2)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"√2 / 2 (ຄິດໄລ່: A = (-√2/2) × (√3/2) × (-√3/3) / (1/2) = (√2/2) × (3/6) / (1/2) = √2/2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0 (ຄິດໄລ່: ປ່ຽນຮູບຮ່າງໄດ້ cos 10° - sin 20° + sin 20° - cos 10° = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"120 (ຄິດໄລ່: cos θ = -1/2 ⇒ θ = 180° - 60° = 120°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1/2 (ຄິດໄລ່: sin 150° = sin 30° = 1/2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"-√2 / 2 (ຄິດໄລ່: cos 135° = -cos 45° = -√2/2)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າເລີ່ມມີຄວາມຊໍານານໃນການນໍາໃຊ້ວົງມົນຫົວໜ່ວຍ ແລະ ສູດຫຼຸດມຸມໄຕມູມມິຕິແລ້ວ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
