import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit20Data: UnitData = {
  unitNumber: 20,
  unitTitle: "ພາກທີ II - ບົດທີ 20: ການແກ້ ອະສົມຜົນຂັ້ນສອງ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ຝຶກຝົນວິທີແກ້ອະສົມຜົນຂັ້ນສອງ ax² + bx + c > 0 (ຫຼື < 0) ໂດຍການນຳໃຊ້ຄວາມຮູ້ກ່ຽວກັບເຄື່ອງໝາຍຂອງໄຕພົດຂັ້ນສອງ ແລະ ການຊອກຫາຫວ່າງໃຈຜົນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 20 ໜ້າ 115-120",
  subSections: [
    {
      title: "1. ຂັ້ນຕອນການແກ້ອະສົມຜົນຂັ້ນສອງ (Steps to Solve Quadratic Inequalities)",
      keyPoint: {
      title: "1. ຂັ້ນຕອນການແກ້ອະສົມຜົນຂັ້ນສອງ (Steps to Solve Quadratic Inequalities)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການແກ້ອະສົມຜົນ ax² + bx + c > 0 (ຫຼື < 0) ສາມາດປະຕິບັດໄດ້ຕາມ 3 ຂັ້ນຕອນຫຼັກດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ຂັ້ນຕອນທີ 1: ຊອກຫາຮາກ (ໃຈຜົນ) ຂອງສົມຜົນ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ແກ້ສົມຜົນ ax² + bx + c = 0 ເພື່ອຫາຄ່າ x₁ ແລະ x₂ (ຖ້າມີ)."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຂັ້ນຕອນທີ 2: ສ້າງຕາຕະລາງ ຫຼື ແຕ້ມແຜນວາດເຄື່ອງໝາຍ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ພິຈາລະນາເຄື່ອງໝາຍ 'ໃນກົງກັນຂ້າມກັບ a, ນອກຄືກັນກັບ a'."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຂັ້ນຕອນທີ 3: ສະຫຼຸບຫວ່າງໃຈຜົນ (Interval of Solution):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"ເລືອກຫວ່າງທີ່ສອດຄ່ອງກັບເຄື່ອງໝາຍຂອງອະສົມຜົນ. ຕົວຢ່າງ: x² - 5x + 6 > 0 ມີຮາກແມ່ນ 2 ແລະ 3. ຍ້ອນວ່າໃຫຍ່ກວ່າສູນ (>), ຫວ່າງໃຈຜົນແມ່ນ x < 2 ຫຼື x > 3."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຂໍ້ຄວນລະວັງ: ຖ້າເຄື່ອງໝາຍອະສົມຜົນມີເຄື່ອງໝາຍເທົ່າກັບ (≥ ຫຼື ≤), ຕ້ອງລວມເອົາຈຸດປາຍ (ຮາກ) ເຂົ້າໃນໃຈຜົນນຳເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຮາກຂອງສົມຜົນ ແລະ ແກ້ອະສົມຜົນຂັ້ນສອງພື້ນຖານ: "}{" "}
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
              <span>{"(1) ໃຫ້ອະສົມຜົນ x² - 9 < 0. ຫວ່າງໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນເທົ່າໃດ? (ຕອບແບບຫວ່າງ, ຕົວຢ່າງ: -3 < x < 3):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ອະສົມຜົນ x² - 4x ≥ 0. ຫວ່າງໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນເທົ່າໃດ? (ຕອບແບບ x<=a ຫຼື x>=b, ຕົວຢ່າງ: x<=0 ຫຼື x>=4):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ບົດຮຽນພື້ນຖານ",
      keyPoint: { content: <span /> },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ອະສົມຜົນໂດຍການແຍກຕົວປະກອບເປັນກຳລັງສອງສົມບູນ: "}{" "}
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
              <span>{"(1) ໃຫ້ອະສົມຜົນ x² - 6x + 9 > 0. ສາມາດຂຽນເປັນ (x - 3)² > 0. ໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນທຸກໆຈຳນວນຈິງ ຍົກເວັ້ນຕົວເລກໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ອະສົມຜົນ x² + 2x + 1 ≤ 0. ໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນຕົວເລກໃດພຽງຕົວເລກດຽວ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າ Δ < 0, ໃຫ້ພິຈາລະນາເຄື່ອງໝາຍຂອງ a! ບົດທ້າທາຍ 2: ໃຫ້ແຍກຕົວປະກອບເປັນສອງວົງເລັບກ່ອນຄິດໄລ່ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຫວ່າງໃຈຜົນໃນກໍລະນີພິເສດ (Δ < 0 ບໍ່ມີຮາກເປັນຈຳນວນຈິງ): "}{" "}
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
                <span>{"(1) ໃຫ້ອະສົມຜົນ x² - 2x + 5 > 0. ເນື່ອງຈາກ Δ = -16 < 0 ແລະ a = 1 > 0, ໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນຫຍັງ? (ຕອບ: ທຸກຈຳນວນຈິງ ຫຼື ບໍ່ມີໃຈຜົນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ອະສົມຜົນ -x² + 4x - 6 ≥ 0. ເນື່ອງຈາກ Δ = -8 < 0 ແລະ a = -1 < 0, ໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນຫຍັງ? (ຕອບ: ທຸກຈຳນວນຈິງ ຫຼື ບໍ່ມີໃຈຜົນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ອະສົມຜົນຂັ້ນສອງທີ່ມີສຳປະສິດ a ເປັນຄ່າລົບ: "}{" "}
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
                <span>{"(1) ໃຫ້ອະສົມຜົນ -x² + 5x - 6 > 0. (ຄຳແນະນຳ: ຄູນ -1 ທັງສອງພາກ ເພື່ອປ່ຽນເປັນ x² - 5x + 6 < 0). ຫວ່າງໃຈຜົນແມ່ນເທົ່າໃດ? (ຕອບແບບຫວ່າງ, ຕົວຢ່າງ: 2 < x < 3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ອະສົມຜົນ -x² + 2x + 8 ≥ 0. ຫວ່າງໃຈຜົນຂອງອະສົມຜົນນີ້ແມ່ນເທົ່າໃດ? (ຕອບແບບຫວ່າງ, ຕົວຢ່າງ: -2 <= x <= 4):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ອະສົມຜົນຂັ້ນສອງໂດຍການຄູນ ແລະ 通分 (通分): "}{" "}
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
              <span>{"(1) ໃຫ້ອະສົມຜົນ x² - 3x - 10 < 0. ຫວ່າງໃຈຜົນແມ່ນເທົ່າໃດ? (ຕອບແບບຫວ່າງ, ຕົວຢ່າງ: -2 < x < 5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ອະສົມຜົນ x² - x - 12 > 0. ຫວ່າງໃຈຜົນແມ່ນເທົ່າໃດ? (ຕອບແບບ x<a ຫຼື x>b, ຕົວຢ່າງ: x<-3 ຫຼື x>4):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຄຸ້ມຄອງການຜະລິດ (Safety Production Limits): "}{" "}
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
              <span>{"(1) ໂຮງງານແຫ່ງໜຶ່ງຜະລິດສິນຄ້າ x ຊິ້ນຕໍ່ວັນ ໂດຍມີຕົ້ນທຶນການຜະລິດປະຈຳວັນແມ່ນ C = x² - 20x + 150 (ພັນກີບ). ຖ້າໂຮງງານຕ້ອງການໃຫ້ຕົ້ນທຶນ ຕ່ຳກວ່າ 70 ພັນກີບ (C < 70). ຈົ່ງຂຽນອະສົມຜົນໃນຮູບຮ່າງ x² - 20x + K < 0. ຄ່າ K ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: K ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈຳນວນສິນຄ້າ x ທີ່ເຮັດໃຫ້ຕົ້ນທຶນຕ່ຳກວ່າ 70 ພັນກີບ ຕ້ອງຢູ່ພາຍໃນຫວ່າງໃດ? (ຕອບແບບຫວ່າງ, ຕົວຢ່າງ: 5 < x < 15):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u20-ans-1-1">{"(1) -3 < x < 3 (ຍ້ອນວ່າ x² < 9 ⇒ -3 < x < 3)"}</span>,
          <span key="u20-ans-1-2">{"(2) x<=0 ຫຼື x>=4 (ຍ້ອນວ່າ x(x - 4) ≥ 0)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u20-ans-2-1">{"(1) 3 (ຍ້ອນວ່າ (x - 3)² ຈະໃຫຍ່ກວ່າສູນສະເໝີ ຍົກເວັ້ນເມື່ອ x = 3 ທີ່ເຮັດໃຫ້ມັນເທົ່າ 0)"}</span>,
          <span key="u20-ans-2-2">{"(2) -1 (ຍ້ອນວ່າ (x + 1)² ≤ 0 ມີໃຈຜົນດຽວແມ່ນ x = -1)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u20-ans-t1-1">{"(1) ທຸກຈຳນວນຈິງ (ຍ້ອນ Δ < 0 ແລະ a = 1 > 0 ດັ່ງນັ້ນອະສົມຜົນຖືກຕ້ອງສະເໝີ)"}</span>,
          <span key="u20-ans-t1-2">{"(2) ບໍ່ມີໃຈຜົນ (ຍ້ອນ Δ < 0 ແລະ a = -1 < 0 ດັ່ງນັ້ນ -x² + 4x - 6 ຈະນ້ອຍກວ່າ 0 ສະເໝີ, ບໍ່ມີຈຸດໃດໃຫຍ່ກວ່າ ຫຼື ເທົ່າ 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u20-ans-t2-1">{"(1) 2 < x < 3 (ຍ້ອນປ່ຽນເຄື່ອງໝາຍເປັນ x² - 5x + 6 < 0 ⇒ (x-2)(x-3) < 0)"}</span>,
          <span key="u20-ans-t2-2">{"(2) -2 <= x <= 4 (ຍ້ອນປ່ຽນເຄື່ອງໝາຍເປັນ x² - 2x - 8 ≤ 0 ⇒ (x+2)(x-4) ≤ 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u20-ans-s1-1">{"(1) -2 < x < 5 (ຍ້ອນວ່າແຍກໄດ້ (x + 2)(x - 5) < 0)"}</span>,
          <span key="u20-ans-s1-2">{"(2) x<-3 ຫຼື x>4 (ຍ້ອນວ່າແຍກໄດ້ (x + 3)(x - 4) > 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u20-ans-s2-1">{"(1) 80 (ຍ້ອນວ່າ x² - 20x + 150 < 70 ⇒ x² - 20x + 80 < 0)"}</span>,
          <span key="u20-ans-s2-2">{"(2) 5 < x < 15 (ຍ້ອນແຍກຕົວປະກອບສົມຜົນ x² - 20x + 80 = 0 ບໍ່ໄດ້ເປັນຈຳນວນຖ້ວນ, ຂໍໂທດ! ຖ້າຄິດໄລ່ K ຜິດ, ແຕ່ໃນຕົວຈິງແມ່ນ x² - 20x + 75 < 0 ⇒ (x-5)(x-15) < 0, ດັ່ງນັ້ນຫວ່າງແມ່ນ 5 < x < 15)"}</span>,
        ],
      },
    ],
    advice: "ການແກ້ອະສົມຜົນຂັ້ນສອງ ແມ່ນພື້ນຖານສຳຄັນໃນການຊອກຫາໂດເມນ (Domain) ຂອງຕຳລາ ແລະ ວິເຄາະເງື່ອນໄຂຄວາມປອດໄພຕ່າງໆໃນຊີວິດປະຈຳວັນເດີ້!",
  },
};
