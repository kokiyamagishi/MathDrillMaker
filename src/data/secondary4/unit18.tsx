import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ II - ບົດທີ 18: ຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດຂອງຕຳລາຂັ້ນສອງ",
  unitGoal:
    "ຮຽນຮູ້ວິທີຊອກຫາຄ່າສູງສຸດ (Maximum) ແລະ ຄ່າຕ່ຳສຸດ (Minimum) ຂອງຕຳລາຂັ້ນສອງ ໂດຍການພິຈາລະນາເຄື່ອງໝາຍຂອງສຳປະສິດ a ແລະ ພິກັດຈຸດຈອມ (p, q)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 18 ໜ້າ 103-108",
  subSections: [
    {
      title: "1. ຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດໃນກໍລະນີບໍ່ມີກຳນົດຂອບເຂດ (Unbounded Domain)",
      keyPoint: {
      title: "1. ຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດໃນກໍລະນີບໍ່ມີກຳນົດຂອບເຂດ (Unbounded Domain)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອຕຳລາຂັ້ນສອງຢູ່ໃນຮູບຮ່າງ y = a(x - p)² + q, ຄ່າສູງສຸດ ຫຼື ຄ່າຕ່ຳສຸດຈະຂຶ້ນກັບສຳປະສິດ a ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ a > 0 (ປາຣາໂບນຫງາຍ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"ຕຳລາຈະມີ ຄ່າຕ່ຳສຸດ ເທົ່າກັບ q ຢູ່ຈຸດ x = p, ແລະ ບໍ່ມີຄ່າສູງສຸດ."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກໍລະນີ a < 0 (ປາຣາໂບນຄວ້ຳ):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"ຕຳລາຈະມີ ຄ່າສູງສຸດ ເທົ່າກັບ q ຢູ່ຈຸດ x = p, ແລະ ບໍ່ມີຄ່າຕ່ຳສຸດ."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ຈຳງ່າຍໆ: ຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດ ຂອງຕຳລາຂັ້ນສອງແມ່ນຄ່າຂອງ y ຢູ່ຈຸດຈອມ (ຄ່າ q) ສະເໝີເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງກຳນົດວ່າຕຳລາຕໍ່ໄປນີ້ມີຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດ ແລະ ມີຄ່າເທົ່າໃດ: "}{" "}
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
              <span>{"(1) ຕຳລາ y = 3(x - 2)² + 4 ມີຄ່າຕ່ຳສຸດເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຕຳລາ y = -2(x + 1)² + 9 ມີຄ່າສູງສຸດເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງຊອກຫາຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດ ຫຼັງຈາກຜັນປ່ຽນສົມຜົນທົ່ວໄປ: "}{" "}
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
              <span>{"(1) ຕຳລາ y = x² - 6x + 11 ມີຄ່າຕ່ຳສຸດເທົ່າໃດ? (ຄຳແນະນຳ: ຜັນປ່ຽນເປັນກຳລັງສອງສົມບູນກ່ອນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຕຳລາ y = -x² - 4x + 5 ມີຄ່າສູງສຸດເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
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
      "💡 ບົດທ້າທາຍ 1: ເມື່ອກຳນົດຂອບເຂດ x, ຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດອາດຈະຢູ່ຈຸດປາຍຂອງຂອບເຂດ ຫຼື ຢູ່ຈຸດຈອມ! ໃຫ້ແຕ້ມແຜນວາດ ຫຼື ແທນຄ່າເພື່ອປຽບທຽບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດ ໃນຂອບເຂດທີ່ກຳນົດ (Bounded Domain): "}{" "}
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
                <span>{"(1) ໃຫ້ຕຳລາ y = (x - 2)² + 3 ໃນຂອບເຂດ 0 ≤ x ≤ 3. ຄ່າສູງສຸດຂອງຕຳລານີ້ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ທຽບຄ່າ y ຢູ່ x=0, x=2, x=3):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ຄ່າສູງສຸດແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ຕຳລາ y = -(x - 1)² + 8 ໃນຂອບເຂດ -1 ≤ x ≤ 2. ຄ່າຕ່ຳສຸດຂອງຕຳລານີ້ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ຈຸດຈອມແມ່ນ x=1 ຢູ່ພາຍໃນຂອບເຂດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ຄ່າຕ່ຳສຸດແມ່ນ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຫາເນື້ອທີ່ສູງສຸດ (Maximum Area Optimization): "}{" "}
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
                <span>{"(1) ຊາວກະສິກອນມີຕາໜ່າງເຫຼັກຍາວ 40 ແມັດ ເພື່ອອ້ອມຮົ້ວສວນຮູບສີ່ແຈສາກ. ເນື້ອທີ່ສູງສຸດຂອງສວນທີ່ສາມາດອ້ອມໄດ້ແມ່ນຈັກ m²? (ຄຳແນະນຳ: ໃຫ້ຄວາມກວ້າງແມ່ນ x, ຄວາມຍາວແມ່ນ 20 - x, ເນື້ອທີ່ y = x(20 - x)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"m²"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ເພື່ອໃຫ້ໄດ້ເນື້ອທີ່ສູງສຸດນັ້ນ, ຄວາມກວ້າງຂອງຮົ້ວສວນຄວນຈະເປັນຈັກແມັດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ແມັດ"}</span>
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
            {"ຈົ່ງຊອກຫາຜົນບວກ ຫຼື ຜົນຕ່າງ ຂອງຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດ: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = x² - 2x + 4 ໃນຂອບເຂ端 0 ≤ x ≤ 3. ຈົ່ງຊອກຫາ ຜົນບວກ ຂອງຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດ ຂອງຕຳລານີ້:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຜົນບວກ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -x² + 6x - 2 ໃນຂອບເຂດ 1 ≤ x ≤ 4. ຈົ່ງຊອກຫາ ຜົນຕ່າງ (ຄ່າໃຫຍ່ລົບຄ່າຄ້ອຍ) ລະຫວ່າງຄ່າສູງສຸດ ແລະ ຄ່າຕ່ຳສຸດ ຂອງຕຳລານີ້:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຜົນຕ່າງ ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຜົນກຳໄລສູງສຸດຂອງຮ້ານຄ້າ (Profit Maximization): "}{" "}
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
              <span>{"(1) ຮ້ານຂາຍເສື້ອຢືດໜຶ່ງມີສົມຜົນກຳໄລປະຈຳວັນແມ່ນ P = -2x² + 80x - 300 (ພັນກີບ) ເຊິ່ງ x ແມ່ນຈຳນວນເສື້ອທີ່ຂາຍໄດ້. ກຳໄລສູງສຸດ P ທີ່ຮ້ານຄ້າຈະໄດ້ຮັບແມ່ນຈັກພັນກີບ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ສູງສຸດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ພັນກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເພື່ອໃຫ້ໄດ້ກຳໄລສູງສຸດນັ້ນ, ຮ້ານຄ້າຕ້ອງຂາຍເສື້ອໃຫ້ໄດ້ຈັກຜືນຕໍ່ວັນ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຜືນ"}</span>
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
          <span key="u18-ans-1-1">{"(1) 4 (ເພາະວ່າ a = 3 > 0, ດັ່ງນັ້ນມີຄ່າຕ່ຳສຸດແມ່ນ q = 4)"}</span>,
          <span key="u18-ans-1-2">{"(2) 9 (ເພາະວ່າ a = -2 < 0, ດັ່ງນັ້ນມີຄ່າສູງສຸດແມ່ນ q = 9)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u18-ans-2-1">{"(1) 2 (ເພາະວ່າ y = (x - 3)² + 2, ດັ່ງນັ້ນຄ່າຕ່ຳສຸດແມ່ນ 2)"}</span>,
          <span key="u18-ans-2-2">{"(2) 9 (ເພາະວ່າ y = -(x + 2)² + 9, ດັ່ງນັ້ນຄ່າສູງສຸດແມ່ນ 9)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u18-ans-t1-1">{"(1) 7 (ເພາະວ່າ y ຢູ່ x=2 ແມ່ນ 3 (ຕ່ຳສຸດ), ຢູ່ x=0 ແມ່ນ 7 (ສູງສຸດ), ຢູ່ x=3 ແມ່ນ 4)"}</span>,
          <span key="u18-ans-t1-2">{"(2) 4 (ເພາະວ່າ y ຢູ່ x=1 ແມ່ນ 8 (ສູງສຸດ), ຢູ່ x=-1 ແມ່ນ 4 (ຕ່ຳສຸດ), ຢູ່ x=2 ແມ່ນ 7)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u18-ans-t2-1">{"(1) 100 (ເພາະວ່າ y = -x² + 20x = -(x - 10)² + 100, ເນື້ອທີ່ສູງສຸດແມ່ນ 100 m²)"}</span>,
          <span key="u18-ans-t2-2">{"(2) 10 (ເພາະວ່າຄວາມກວ້າງທີ່ໃຫ້ເນື້ອທີ່ສູງສຸດແມ່ນ x = 10 ແມັດ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u18-ans-s1-1">{"(1) 10 (ເພາະວ່າ y = (x - 1)² + 3. ໃນ 0 ≤ x ≤ 3: ຕ່ຳສຸດແມ່ນ 3 (ຢູ່ x=1), ສູງສຸດແມ່ນ 7 (ຢູ່ x=3). ຜົນບວກແມ່ນ 3 + 7 = 10)"}</span>,
          <span key="u18-ans-s1-2">{"(2) 4 (ເພາະວ່າ y = -(x - 3)² + 7. ໃນ 1 ≤ x ≤ 4: ສູງສຸດແມ່ນ 7 (ຢູ່ x=3), ຕ່ຳສຸດແມ່ນ 3 (ຢູ່ x=1). ຜົນຕ່າງແມ່ນ 7 - 3 = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u18-ans-s2-1">{"(1) 500 (ເພາະ P = -2(x - 20)² + 500. ດັ່ງນັ້ນ ກຳໄລສູງສຸດແມ່ນ 500 ພັນກີບ)"}</span>,
          <span key="u18-ans-s2-2">{"(2) 20 (ເພາະວ່າຈຳນວນເສື້ອທີ່ຕ້ອງຂາຍແມ່ນ x = 20 ຜືນ)"}</span>,
        ],
      },
    ],
    advice: "ການຫາຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດ ແມ່ນຫົວໃຈຂອງວິຊາຄະນິດສາດການເພີ່ມປະສິດທິພາບ (Optimization)! ມັນຖືກນຳໃຊ້ຢ່າງກວ້າງຂວາງໃນການອອກແບບວິສະວະກຳ ແລະ ວິເຄາະທຸລະກິດເດີ້!",
  },
};
