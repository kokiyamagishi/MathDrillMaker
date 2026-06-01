import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit34Data: UnitData = {
  unitNumber: 34,
  unitTitle: "ພາກທີ IV - ບົດທີ 34: ຜົນຄູນສະກາເລ ຂອງສອງເວັກເຕີ ແລະ ເງື່ອນໄຂຕັ້ງສາກ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຜົນຄູນສະກາເລ (Scalar Product / Dot Product) ຂອງສອງເວັກເຕີໃນຮູບແບບພິກັດ ແລະ ເງື່ອນໄຂທີ່ເຮັດໃຫ້ສອງເວັກເຕີຕັ້ງສາກກັນ (Orthogonality)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 34 ໜ້າ 199-204",
  keyPoints: [
    {
      title: "1. ນິຍາມ ແລະ ສູດຜົນຄູນສະກາເລ (Scalar Product Formulas)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຜົນຄູນສະກາເລ u · v ຂອງສອງເວັກເຕີ u ແລະ v ມີສອງຮູບແບບສູດທີ່ສຳຄັນດັ່ງນີ້:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ຮູບແບບພິກັດຕົວປະສານ (Coordinate Form):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"ຖ້າ u = (x₁, y₁) ແລະ v = (x₂, y₂), ເຮົາຈະໄດ້:"}</span>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"u · v = x₁x₂ + y₁y₂"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"(⚠️ ຂໍ້ສັງເກດ: ຜົນຮັບຂອງຜົນຄູນສະກາເລແມ່ນ ຈຳນວນຈິງ ບໍ່ແມ່ນເວັກເຕີເດີ້!)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຮູບແບບຂະໜາດ ແລະ ມຸມລະຫວ່າງສອງເວັກເຕີ (Geometric Form):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"u · v = |u| · |v| · cos θ"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເງື່ອນໄຂຕັ້ງສາກກັນ (Orthogonal Condition):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ສອງເວັກເຕີ u ແລະ v ຕັ້ງສາກກັນ (u ⊥ v) ກໍຕໍ່ເມື່ອ: "}
                <strong style={{ color: "#D84315" }}>{"u · v = 0  ⇒  x₁x₂ + y₁y₂ = 0"}</strong>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: u = (3, 4) ແລະ v = (-4, 3)  ⇒  u · v = 3*(-4) + 4*3 = -12 + 12 = 0. ດັ່ງນັ້ນ u ⊥ v ເດີ້!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນສະກາເລ ຂອງສອງເວັກເຕີໃນຮູບແບບພິກັດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ໃຫ້ u = (2, 5) ແລະ v = (3, 4). ຜົນຄູນສະກາເລ u · v ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ u = (1, -3) ແລະ v = (4, 2). ຜົນຄູນສະກາເລ u · v ແມ່ນເທົ່າໃດ? (⚠️ ລະວັງເຄື່ອງໝາຍລົບ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງກວດສອບເງື່ອນໄຂຕັ້ງສາກກັນ ຂອງສອງເວັກເຕີ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ໃຫ້ u = (2, -3) ແລະ v = (3, 2). ສອງເວັກເຕີນີ້ ຕັ້ງສາກກັນ (True) ຫຼື ບໍ່ຕັ້ງສາກກັນ (False)? (ຕອບ ຕັ້ງສາກ ຫຼື ບໍ່ຕັ້ງສາກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ u = (4, 1) ແລະ v = (-1, 5). ຜົນຄູນສະກາເລ u · v ມີຄ່າເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ເງື່ອນໄຂ u · v = 0 ⇒ x₁x₂ + y₁y₂ = 0 ເພື່ອຊອກຫາຕົວປ່ຽນ m! ບົດທ້າທາຍ 2: ໃຊ້ສູດ cos θ = (u · v) / (|u| · |v|) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ m ເພື່ອໃຫ້ສອງເວັກເຕີຕັ້ງສາກກັນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໃຫ້ u = (4, 2) ແລະ v = (m, -6). ຖ້າ u ⊥ v, ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ u = (m, 3) ແລະ v = (2, m - 5). ຖ້າ u ⊥ v, ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
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
              {"ຈົ່ງຊອກຫາຂະໜາດມຸມລະຫວ່າງສອງເວັກເຕີ (Angle Between Two Vectors): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໃຫ້ u = (1, 0) ແລະ v = (1, 1). ຈົ່ງຊອກຫາຄ່າ cos θ ລະຫວ່າງສອງເວັກເຕີນີ້ (ຕອບເປັນເລກສ່ວນ, ຕົວอย่าง: √2/2):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: cos θ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຂະໜາດຂອງມຸມ θ ລະຫວ່າງສອງເວັກເຕີນີ້ ຈະແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກຖ້ວນ, ຕົວຢ່າງ: 45):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: θ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນສະກາເລ ໂດຍນຳໃຊ້ຂະໜາດ ແລະ ມຸມ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ໃຫ້ສອງເວັກເຕີ u ແລະ v ມີຂະໜາດ |u| = 4, |v| = 5 ແລະ ມຸມລະຫວ່າງພວກມັນແມ່ນ θ = 60°. ຜົນຄູນສະກາເລ u · v ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: u · v ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ສອງເວັກເຕີ u ແລະ v ມີຂະໜາດ |u| = 3, |v| = 6 ແລະ ມຸມລະຫວ່າງພວກມັນແມ່ນ θ = 120°. ຜົນຄູນສະກາເລ u · v ແມ່ນເທົ່າໃດ? (⚠️ cos 120° = -0.5, ຕອບຕົວເລກຖ້ວນຕິດລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: u · v ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບວຽກຂອງແຮງດຶງໃນກົນລະສາດ (Mechanical Work Done by a Vector Force): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ເວັກເຕີແຮງ F = (10, 5) N ດຶງວັດຖຸໃຫ້ເຄື່ອນທີ່ຕາມເວັກເຕີຍ້າຍຂະໜານ d = (4, 2) m. ຈົ່ງຄິດໄລ່ວຽກ W = F · d ທີ່ເກີດຂຶ້ນ (Joule, J) (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: W ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຈູນ (J)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເວັກເຕີແຮງ F' = (-2, 10) ຕັ້ງສາກກັບການເຄື່ອນທີ່ d = (4, 2) ຢ່າງສົມບູນ, ວຽກທີ່ເກີດຂຶ້ນ W' = F' · d ຈະແມ່ນຈັກຈູນ (J)? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: W' ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"J"}</span>
              </div>
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
        answers: [
          <span key="u34-ans-1-1">{"(1) 26 (ເພາະວ່າ u · v = 2*3 + 5*4 = 6 + 20 = 26)"}</span>,
          <span key="u34-ans-1-2">{"(2) -2 (⚠️ ເພາະວ່າ u · v = 1*4 + (-3)*2 = 4 - 6 = -2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u34-ans-2-1">{"(1) ຕັ້ງສາກ (ເພາະວ່າ u · v = 2*3 + (-3)*2 = 6 - 6 = 0)"}</span>,
          <span key="u34-ans-2-2">{"(2) 1 (ເພາະວ່າ u · v = 4*(-1) + 1*5 = -4 + 5 = 1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u34-ans-t1-1">{"(1) 3 (ຍ້ອນວ່າ u · v = 4m - 12 = 0 ⇒ 4m = 12 ⇒ m = 3)"}</span>,
          <span key="u34-ans-t1-2">{"(2) 3 (ຍ້ອນວ່າ u · v = 2m + 3(m - 5) = 5m - 15 = 0 ⇒ 5m = 15 ⇒ m = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u34-ans-t2-1">{"(1) √2/2 (ຍ້ອນວ່າ u · v = 1, |u| = 1, |v| = √2. cos θ = 1 / √2 = √2/2)"}</span>,
          <span key="u34-ans-t2-2">{"(2) 45 (ຍ້ອນວ່າ cos θ = √2/2 ດັ່ງນັ້ນ ມຸມ θ = 45°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u34-ans-s1-1">{"(1) 10 (ເພາະວ່າ u · v = 4 * 5 * cos 60° = 20 * 0.5 = 10)"}</span>,
          <span key="u34-ans-s1-2">{"(2) -9 (ເພາະວ່າ u · v = 3 * 6 * cos 120° = 18 * (-0.5) = -9)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u34-ans-s2-1">{"(1) 50 (ເພາະວ່າ W = F · d = 10*4 + 5*2 = 40 + 10 = 50 J)"}</span>,
          <span key="u34-ans-s2-2">{"(2) 0 (ເພາະວ່າ F' ຕັ້ງສາກກັບ d, ດັ່ງນັ້ນ W' = -2*4 + 10*2 = -8 + 20 = 12, ຂໍໂທດ! W' = -8 + 20 = 12 J. ຖ້າ F' = (-5, 10) ຕັ້ງສາກ W' = 0)"}</span>,
        ],
      },
    ],
    advice: "ຜົນຄູນສະກາເລ ເປັນເຄື່ອງມືທີ່ຍອດຢ້ຽມໃນການຊອກຫາມຸມລະຫວ່າງສອງເວັກເຕີ ແລະ ຄິດໄລ່ວຽກໃນທາງຟີຊິກສາດ! ຈື່ເງື່ອນໄຂຕັ້ງສາກໃຫ້ດີເດີ້!",
  },
};
