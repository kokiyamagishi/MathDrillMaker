import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ I - ບົດທີ 29: ຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນພົວພັນ",
  unitGoal:
    "ຝຶກທັກສະການແກ້ສົມຜົນອັດຕາສ່ວນພົວພັນ, ຊອກຫາຄ່າຂອງຕົວລັບ (x) ໂດຍການນຳໃຊ້ຫຼັກການຄູນໄຂວ້ ແລະ ການຫານຢ່າງຄ່ອງແຄ້ວ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 29 ໜ້າ 185-189",
  subSections: [
    {
      title: "1. ວິທີຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ (Finding the Unknown Term)",
      keyPoint: {
      title: "1. ວິທີຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ (Finding the Unknown Term)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ (ຕົວລັບ x) ໃນອັດຕາສ່ວນພົວພັນ, ເຮົາຈະໃຊ້ຫຼັກການຄູນໄຂວ້ ແລ້ວຫານອອກ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#0D47A1" }}>
              {"• ຖ້າ "}
              <Fraction num="a" den="b" />
              {" = "}
              <Fraction num="c" den="x" />
              {"  →  a × x = b × c  →  x = "}
              <Fraction num="b × c" den="a" />
            </div>
            <div style={{ borderTop: "1px solid #BBDEFB", paddingTop: "8px" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຊອກຫາ x ຈາກ "}
              <Fraction num="3" den="5" />
              {" = "}
              <Fraction num="12" den="x" />
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>
                {"→ ຄິດໄລ່: x = "}
                <Fraction num="5 × 12" den="3" />
                {" = "}
                <Fraction num="60" den="3" />
                {" = 20."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງຈື່ໄວ້ງ່າຍໆ: ເອົາສອງຕົວເລກທີ່ຢູ່ເສັ້ນແນວໄຂວ້ກັນມາຄູນກັນ, ແລ້ວຫານໃຫ້ຕົວເລກທີ່ເຫຼືອທີ່ຢູ່ໄຂວ້ກັບຕົວລັບ x ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ x ໃນແຕ່ລະອັດຕາສ່ວນພົວພັນລຸ່ມນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຖ້າ "} <Fraction num="2" den="3" /> {" = "} <Fraction num="8" den="x" /> {", ຈະໄດ້ x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າ "} <Fraction num="5" den="4" /> {" = "} <Fraction num="x" den="12" /> {", ຈະໄດ້ x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຖ້າ "} <Fraction num="x" den="10" /> {" = "} <Fraction num="6" den="20" /> {", ຈະໄດ້ x ="}</span>
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
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຊອກຫາຄ່າຂອງຕົວລັບໃນກໍລະນີເລກຈຸດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຖ້າ "} <Fraction num="1.2" den="3" /> {" = "} <Fraction num="x" den="5" /> {", ຄ່າຂອງ x ແມ່ນເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າ "} <Fraction num="4" den="0.5" /> {" = "} <Fraction num="24" den="y" /> {", ຄ່າຂອງ y ແມ່ນເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
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
      "💡 ບົດທ້າທາຍ 1: ຕັ້ງອັດຕາສ່ວນພົວພັນລະຫວ່າງ ນ້ຳໜັກ ແລະ ລາຄາ. ບົດທ້າທາຍ 2: ຕັ້ງສົມຜົນອັດຕາສ່ວນພົວພັນ ໂດຍໃຫ້ x ແມ່ນປະລິມານທີ່ຕ້ອງການຊອກ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໝາກກ້ຽງ 4 kg ລາຄາ 60,000 ກີບ. ຖ້າມີເງິນ 90,000 ກີບ ຈະຊື້ໝາກກ້ຽງໄດ້ຈັກ kg?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"kg"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ລົດຈັກຄັນໜຶ່ງໃຊ້ນ້ຳມັນ 2 ລິດ ສາມາດແລ່ນໄດ້ໄລຍະທາງ 90 km. ຖ້າຕ້ອງການແລ່ນໄລຍະທາງ 225 km ຈະຕ້ອງໃຊ້ນ້ຳມັນຈັກລິດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ລິດ"}</span>
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
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈລວມ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຖ້າ "} <Fraction num="x + 1" den="5" /> {" = "} <Fraction num="6" den="10" /> {", ຄ່າຂອງ x ແມ່ນເທົ່າໃດ? (ຄຳແນະນຳ: ຊອກຫາຄ່າຂອງ x + 1 ກ່ອນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້ານົມ 5 ກ່ອງ ມີປະລິມານລວມ 1,250 mL. ນົມ 8 ກ່ອງ ຈະມີປະລິມານລວມຈັກ mL?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"mL"}</span>
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
          <span key="u29-ans-1-1">{"(1) 12 (ເພາະ x = (3 × 8) ÷ 2 = 24 ÷ 2 = 12)"}</span>,
          <span key="u29-ans-1-2">{"(2) 15 (ເພາະ x = (5 × 12) ÷ 4 = 60 ÷ 4 = 15)"}</span>,
          <span key="u29-ans-1-3">{"(3) 3 (ເພາະ x = (10 × 6) ÷ 20 = 60 ÷ 20 = 3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u29-ans-2-1">{"(1) 2 (ເພາະ x = (1.2 × 5) ÷ 3 = 6 ÷ 3 = 2)"}</span>,
          <span key="u29-ans-2-2">{"(2) 3 (ເພາະ y = (0.5 × 24) ÷ 4 = 12 ÷ 4 = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u29-ans-t1-1">{"(1) 6 (ເພາະ 4/60,000 = x/90,000 → x = (4 × 90,000) ÷ 60,000 = 360,000 ÷ 60,000 = 6 kg)"}</span>,
          <span key="u29-ans-t1-2">{"(2) 5 (ເພາະ 2/90 = x/225 → x = (2 × 225) ÷ 90 = 450 ÷ 90 = 5 ລິດ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u29-ans-s1-1">{"(1) 2 (ເພາະ x + 1 = (5 × 6) ÷ 10 = 30 ÷ 10 = 3 → x = 3 - 1 = 2)"}</span>,
          <span key="u29-ans-s1-2">{"(2) 2000 (ເພາະ 5/1250 = 8/V → V = (1,250 × 8) ÷ 5 = 10,000 ÷ 5 = 2,000 mL)"}</span>,
        ],
      },
    ],
    advice: "ການຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນພົວພັນ ຈະງ່າຍທີ່ສຸດເມື່ອເຮົາຄູນໄຂວ້ ແລ້ວຫານດ້ວຍຕົວເລກທີ່ເຫຼືອ. ວິທີນີ້ສາມາດນຳໃຊ້ເຂົ້າໃນຊີວິດປະຈຳວັນໄດ້ຫຼາກຫຼາຍ ເຊັ່ນ ການຄິດໄລ່ລາຄາສິນຄ້າ, ໄລຍະທາງ ຫຼື ການປະສົມອາຫານເດີ້!",
  },
};
