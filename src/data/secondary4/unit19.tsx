import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit19Data: UnitData = {
  unitNumber: 19,
  unitTitle: "ພາກທີ II - ບົດທີ 19: ເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ",
  unitGoal:
    "ຮຽນຮູ້ວິທີພິຈາລະນາເຄື່ອງໝາຍບວກ ຫຼື ເຄື່ອງໝາຍລົບ ຂອງໄຕພົດຂັ້ນສອງ y = ax² + bx + c ໂດຍອີງໃສ່ຄ່າສຳປະສິດ a ແລະ ຄ່າຂອງແດນຕາ Δ (Discriminant)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 19 ໜ້າ 109-114",
  keyPoints: [
    {
      title: "1. ເງື່ອນໄຂເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ (Sign Conditions of Quadratic Trinomial)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຄື່ອງໝາຍຂອງໄຕພົດ f(x) = ax² + bx + c ໃນທຸກໆຄ່າ x ∈ ℝ ແມ່ນຂຶ້ນກັບ ແດນຕາ (Δ = b² - 4ac) ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ Δ < 0 (ບໍ່ມີໃຈຜົນເປັນຈຳນວນຈິງ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- f(x) ຈະມີ ເຄື່ອງໝາຍດຽວກັບ a ສະເໝີ ສຳລັບທຸກໆ x."}
                <br />
                <span style={{ fontWeight: "bold", color: "#D84315", paddingLeft: "20px" }}>
                  {"ຖ້າ a > 0 ⇒ f(x) > 0 (ເປັນບວກສະເໝີ)"}
                </span>
                <br />
                <span style={{ fontWeight: "bold", color: "#D84315", paddingLeft: "20px" }}>
                  {"ຖ້າ a < 0 ⇒ f(x) < 0 (ເປັນລົບສະເໝີ)"}
                </span>
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ Δ > 0 (ມີສອງໃຈຜົນ x₁ ແລະ x₂ ເຊິ່ງ x₁ < x₂):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ລະຫວ່າງສອງໃຈຜົນ [x₁, x₂]: f(x) ຈະມີເຄື່ອງໝາຍ ກົງກັນຂ້າມກັບ a."}
                <br />
                {"- ຢູ່ນອກສອງໃຈຜົນ: f(x) ຈະມີເຄື່ອງໝາຍ ຄືກັນກັບ a."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ຈຳຄຳເວົ້າສັ້ນໆ: 'ໃນກົງກັນຂ້າມ, ນອກຄືກັນ' ກັບເຄື່ອງໝາຍຂອງ a ເມື່ອ Δ > 0 ເດີ້!",
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
            {"ຈົ່ງຊອກຫາຄ່າຂອງແດນຕາ (Δ = b² - 4ac) ແລະ ກຳນົດເຄື່ອງໝາຍ: "}{" "}
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
              <span>{"(1) ໃຫ້ໄຕພົດ f(x) = x² - 4x + 5. ຄ່າຂອງແດນຕາ Δ ແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເນື່ອງຈາກ a = 1 > 0 ແລະ Δ < 0, ໄຕພົດນີ້ຈະເປັນບວກ (>) ຫຼື ເປັນລົບ (<) ກັບສູນ ສະເໝີ? (ຕອບ > ຫຼື <):"}</span>
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
            {"ຈົ່ງພິຈາລະນາເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງທີ່ມີສອງໃຈຜົນ: "}{" "}
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
              <span>{"(1) ໃຫ້ f(x) = x² - 5x + 6 ເຊິ່ງມີສອງໃຈຜົນແມ່ນ x₁=2, x₂=3. ຖ້າ 2 < x < 3, ຄ່າຂອງ f(x) ຈະມີເຄື່ອງໝາຍບວກ (+) ຫຼື ລົບ (-)?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ f(x) = -x² + 4x - 3 ເຊິ່ງມີສອງໃຈຜົນແມ່ນ x₁=1, x₂=3. ຖ້າ x < 1 ຫຼື x > 3, ຄ່າຂອງ f(x) ຈະມີເຄື່ອງໝາຍບວກ (+) ຫຼື ລົບ (-)?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ເພື່ອໃຫ້ໄຕພົດເປັນບວກສະເໝີ, ຕ້ອງມີເງື່ອນໄຂ a > 0 ແລະ Δ < 0 ພ້ອມກັນ! ບົດທ້າທາຍ 2: ໃຫ້ຄິດໄລ່ຄຸນຄ່າແດນຕາ Δ ໂດຍອີງໃສ່ຕົວປ່ຽນ m ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເງື່ອນໄຂຂອງຕົວປ່ຽນ m ເພື່ອໃຫ້ໄຕພົດມີເຄື່ອງໝາຍທີ່ກຳນົດສະເໝີ: "}{" "}
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
                <span>{"(1) ຊອກຫາຄ່າ m ເພື່ອໃຫ້ f(x) = x² - 2x + m > 0 (ເປັນບວກສະເໝີ) ສຳລັບທຸກໆ x ∈ ℝ. ຄ່າ m ຕ້ອງໃຫຍ່ກວ່າຕົວເລກໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m >"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊອກຫາຄ່າ m ເພື່ອໃຫ້ f(x) = -x² + 4x + m < 0 (ເປັນລົບສະເໝີ) ສຳລັບທຸກໆ x ∈ ℝ. ຄ່າ m ຕ້ອງນ້ອຍກວ່າຕົວເລກໃດ? (ຕອບເປັນຕົວເລກ, ຕົວຢ່າງ: -4):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m <"}</span>
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
              {"ຈົ່ງກວດສອບເຄື່ອງໝາຍຂອງໄຕພົດ ໂດຍການແທນຄ່າ x ຕົວຈິງ: "}{" "}
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
                <span>{"(1) ໃຫ້ f(x) = 2x² - 3x - 5. ຈົ່ງຄິດໄລ່ f(2) ວ່າເປັນບວກ (+) ຫຼື ເປັນລົບ (-)?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ f(x) = -3x² + 2x + 1. ຈົ່ງຄິດໄລ່ f(0) ວ່າເປັນບວກ (+) ຫຼື ເປັນລົບ (-)?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງຕື່ມຂໍ້ມູນຕາຕະລາງເຄື່ອງໝາຍ (Sign Table Analysis): "}{" "}
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
              <span>{"(1) ໃຫ້ໄຕພົດ f(x) = x² - x - 12 ເຊິ່ງມີສອງຮາກແມ່ນ -3 ແລະ 4. ເຄື່ອງໝາຍຂອງ f(x) ໃນຫວ່າງ (-3, 4) ແມ່ນເຄື່ອງໝາຍຫຍັງ? (ຕອບ ບວກ ຫຼື ລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ໄຕພົດ f(x) = -x² - 2x + 8 ເຊິ່ງມີສອງຮາກແມ່ນ -4 ແລະ 2. ເຄື່ອງໝາຍຂອງ f(x) ໃນຫວ່າງ (-4, 2) ແມ່ນເຄື່ອງໝາຍຫຍັງ? (ຕອບ ບວກ ຫຼື ລົບ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຄວາມປອດໄພຂອງການຂຶ້ນຍົນ (Flight Path Safety Zone): "}{" "}
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
              <span>{"(1) ເຮືອບິນລຳໜຶ່ງບິນຕາມເສັ້ນທາງ h(x) = x² - 8x + 20 (ຮ້ອຍແມັດ) ເໜືອພູເຂົາ. ພູເຂົາສູງສຸດແມ່ນ 5 ຮ້ອຍແມັດ. ຖ້າ Δ ຂອງ h(x) - 5 ຕ່າງຈາກສູນ, ຈະຖືວ່າປອດໄພ. ຈົ່ງຄິດໄລ່ Δ ຂອງສົມຜົນ x² - 8x + 15 = 0 (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: Δ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເນື່ອງຈາກ Δ = 4 > 0, ໝາຍຄວາມວ່າເສັ້ນທາງບິນຈະຕັດກັບເຂດຄວາມສູງ 5 ຮ້ອຍແມັດ ຫຼື ບໍ່? (ຕອບ ຕັດ ຫຼື ບໍ່ຕັດ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <span key="u19-ans-1-1">{"(1) -4 (ຍ້ອນວ່າ Δ = (-4)² - 4*1*5 = 16 - 20 = -4)"}</span>,
          <span key="u19-ans-1-2">{"(2) > (ຍ້ອນ Δ < 0, ດັ່ງນັ້ນ f(x) ມີເຄື່ອງໝາຍຄື a = 1 > 0 ສະເໝີ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u19-ans-2-1">{"(1) - (ຍ້ອນວ່າ a = 1 > 0, ດັ່ງນັ້ນໃນຫວ່າງ [2, 3] ຈະມີເຄື່ອງໝາຍກົງກັນຂ້າມ ເປັນລົບ)"}</span>,
          <span key="u19-ans-2-2">{"(2) - (ຍ້ອນວ່າ a = -1 < 0, ດັ່ງນັ້ນຢູ່ນອກຫວ່າງ [1, 3] ຈະມີເຄື່ອງໝາຍຄືເກົ່າ ເປັນລົບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u19-ans-t1-1">{"(1) 1 (ເພາະວ່າ Δ = 4 - 4m < 0 ⇒ 4 < 4m ⇒ m > 1)"}</span>,
          <span key="u19-ans-t1-2">{"(2) -4 (ເພາະວ່າ a = -1 < 0, ແລະ Δ = 16 - 4*(-1)*m = 16 + 4m < 0 ⇒ 4m < -16 ⇒ m < -4)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u19-ans-t2-1">{"(1) - (ເພາະວ່າ f(2) = 2*(2)² - 3*(2) - 5 = 8 - 6 - 5 = -3 < 0)"}</span>,
          <span key="u19-ans-t2-2">{"(2) + (ເພາະວ່າ f(0) = 1 > 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u19-ans-s1-1">{"(1) ລົບ (ເພາະວ່າ a = 1 > 0, ໃນຫວ່າງໃຈຜົນຈະມີເຄື່ອງໝາຍກົງກັນຂ້າມ ເປັນລົບ)"}</span>,
          <span key="u19-ans-s1-2">{"(2) ບວກ (ເພາະວ່າ a = -1 < 0, ໃນຫວ່າງໃຈຜົນຈະມີເຄື່ອງໝາຍກົງກັນຂ້າມ ເປັນບວກ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u19-ans-s2-1">{"(1) 4 (ເພາະ Δ = (-8)² - 4*1*15 = 64 - 60 = 4)"}</span>,
          <span key="u19-ans-s2-2">{"(2) ຕັດ (ເພາະວ່າ Δ > 0 ໝາຍຄວາມວ່າສົມຜົນມີ 2 ໃຈຜົນ, ເສັ້ນສະແດງຈະຕັດກັນ 2 ຈຸດ)"}</span>,
        ],
      },
    ],
    advice: "ການວິເຄາະເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ ແມ່ນຄວາມຮູ້ພື້ນຖານທີ່ນຳໄປໃຊ້ແກ້ອະສົມຜົນ ແລະ ສຶກສາທິດທາງການຜັນປ່ຽນຂອງຕຳລາໃນຂັ້ນສູງຕໍ່ໄປເດີ້!",
  },
};
