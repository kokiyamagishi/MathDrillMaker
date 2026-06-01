import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit4Data: UnitData = {
  unitNumber: 4,
  unitTitle: "ພາກທີ I - ບົດທີ 4: ການບວກ ແລະ ການລົບ ເລກສ່ວນປົກກະຕິ",
  unitGoal:
    "ເຂົ້າໃຈວິທີການ通分 (ຊອກຫາພູດຮ່ວມ) ແລະ ສາມາດຄິດໄລ່ການບວກ ແລະ ການລົບເລກສ່ວນປົກກະຕິໄດ້ຢ່າງຖືກຕ້ອງ ພ້ອມທັງຄັດຈ້ອນຜົນຮັບໃຫ້ງ່າຍດາຍທີ່ສຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 4 ໜ້າ 21-25",
  keyPoints: [
    {
      title: "1. ການບວກລົບທີ່ມີພູດຄືກັນ (Addition/Subtraction with Same Denominator)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອເລກສ່ວນປົກກະຕິມີພູດຄືກັນ, ໃຫ້ເອົາຈຳນວນພູດບວກ ຫຼື ລົບກັນ ແລະ ຮັກສາພູດໄວ້ຄືເກົ່າ:"}
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
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ສູດຄິດໄລ່: "}</strong>
              <Fraction num="A" den="C" />
              {" + "}
              <Fraction num="B" den="C" />
              {" = "}
              <Fraction num="A + B" den="C" />
              {" (C ≠ 0)"}
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <span style={{ color: "#555" }}>
                {"ຕົວຢ່າງ: "}
                <Fraction num="x + 2" den="x - 1" />
                {" + "}
                <Fraction num="2x - 5" den="x - 1" />
                {" = "}
                <Fraction num="(x + 2) + (2x - 5)" den="x - 1" />
                {" = "}
                <Fraction num="3x - 3" den="x - 1" />
                {" = "}
                <Fraction num="3(x - 1)" den="x - 1" />
                {" = 3"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຫຼັງຈາກບວກລົບແລ້ວ ຢ່າລືມກວດເບິ່ງວ່າສາມາດແຍກສ່ວນຄູນ ແລະ ຄັດຈ້ອນໃຫ້ເປັນຮູບຮ່າງງ່າຍດາຍໄດ້ບໍ່ເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ການບວກລົບທີ່ມີພູດຕ່າງກັນ (Finding Least Common Denominator - LCD)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອພູດຕ່າງກັນ, ເຮົາຕ້ອງຊອກຫາ ພູດຮ່ວມ (LCD) ໂດຍການຄູນສ່ວນຂາດໃສ່ທັງຈຳນວນພູດ ແລະ ພູດ ກ່ອນຈະບວກລົບກັນ:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12px" }}>
            <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "6px" }}>{"ຂັ້ນຕອນການເຮັດ通分 (ຊອກຫາພູດຮ່ວມ)"}</span>
            <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: "320px", height: "auto", border: "1px solid #ccc", backgroundColor: "#fff", borderRadius: "4px" }}>
              {/* Left Term */}
              <text x="40" y="32" fill="#333" fontSize="10" textAnchor="middle">{"1"}</text>
              <line x1="25" y1="40" x2="55" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="40" y="55" fill="#E65100" fontSize="10" textAnchor="middle">{"x"}</text>

              {/* Plus */}
              <text x="70" y="44" fill="#333" fontSize="12" textAnchor="middle">{"+"}</text>

              {/* Right Term */}
              <text x="100" y="32" fill="#333" fontSize="10" textAnchor="middle">{"1"}</text>
              <line x1="85" y1="40" x2="115" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="100" y="55" fill="#2196F3" fontSize="10" textAnchor="middle">{"x + 1"}</text>

              {/* Arrow */}
              <text x="140" y="44" fill="#333" fontSize="12" textAnchor="middle">{"⇒"}</text>

              {/* Common denominator fraction */}
              <text x="240" y="32" fill="#333" fontSize="10" textAnchor="middle">{"(x + 1) + x"}</text>
              <line x1="170" y1="40" x2="310" y2="40" stroke="#333" strokeWidth="1.5" />
              <text x="240" y="55" fill="#2E7D32" fontSize="10" textAnchor="middle">{"x(x + 1)"}</text>
            </svg>
          </div>
          <p style={{ fontSize: "1.375rem", margin: "10px 0 0 0" }}>
            {"ຜົນຮັບແມ່ນ "} 
            <Fraction num="2x + 1" den="x(x + 1)" />
            {"."}
          </p>
        </div>
      ),
      hint: {
        text: "⚠️ ຂໍ້ຄວນລະວັງ: ເວລາລົບເລກສ່ວນ, ຢ່າລືມປ່ຽນເຄື່ອງໝາຍຂອງທຸກໆພົດໃນຈຳນວນພູດຂອງໂຕລົບ ເມື່ອເອົາມາລວມກັນເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ການບວກ ແລະ ລົບເລກສ່ວນປົກກະຕິທີ່ມີພູດຄືກັນ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="3x" den="x + 2" /> {" + "} <Fraction num="6" den="x + 2" /> {" = (ຕອບຜົນຮັບງ່າຍດາຍທີ່ສຸດ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="x²" den="x - 3" /> {" - "} <Fraction num="9" den="x - 3" /> {" ="}</span>
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
            {"ຈົ່ງຄິດໄລ່ໂດຍການຊອກຫາພູດຮ່ວມ (ພູດຕ່າງກັນ): "}{" "}
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="3" den="x" /> {" + "} <Fraction num="2" den="y" /> {" = (ຕອບແບບເລກສ່ວນ, ຕົວຢ່າງ: (3y+2x)/(xy)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="1" den="x - 1" /> {" - "} <Fraction num="1" den="x + 1" /> {" = (ຕອບແບບເລກສ່ວນ, ຕົວຢ່າງ: 2/(x²-1)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຊອກຫາພູດຮ່ວມ LCD ໃຫ້ລະອຽດກ່ອນ. ບົດທ້າທາຍ 2: ຖ້າມີເຄື່ອງໝາຍລົບຢູ່ທາງໜ້າເລກສ່ວນ, ໃຫ້ໃສ່ວົງເລັບໃສ່ຈຳນວນພູດກ່ອນ ແລ້ວຈຶ່ງແຕກວົງເລັບເພື່ອປ້ອງກັນການຫຼົງເຄື່ອງໝາຍ (+/-) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ການບວກ ແລະ ລົບທີ່ມີພູດເປັນພະຫຸພົດຂັ້ນສອງ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: "} <Fraction num="x" den="x² - 4" /> {" + "} <Fraction num="1" den="x - 2" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: "} <Fraction num="2" den="x² - x" /> {" - "} <Fraction num="2" den="x - 1" /> {" ="}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ສົມຜົນທີ່ມີການ通分 ແລະ ຈັດກຸ່ມໃຫ້ງ່າຍດາຍ: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: "} <Fraction num="2x" den="x - 1" /> {" - "} <Fraction num="2" den="x - 1" /> {" (ຕອບຜົນຮັບງ່າຍດາຍ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: "} <Fraction num="x + 1" den="x² + 2x" /> {" - "} <Fraction num="1" den="x" /> {" = (ຕອບແບບເລກສ່ວນງ່າຍດາຍ):"}</span>
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
            {"ຈົ່ງຄິດໄລ່ການບວກ ແລະ ລົບສາມສຳນວນທີ່ມີພູດເປັນຕົວປ່ຽນ: "}{" "}
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
              <span>{"(1) ຄິດໄລ່: "} <Fraction num="1" den="x" /> {" + "} <Fraction num="1" den="2x" /> {" + "} <Fraction num="1" den="3x" /> {" ="}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄິດໄລ່: "} <Fraction num="x" den="x - 1" /> {" - "} <Fraction num="1" den="x" /> {" - 1 ="}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຄວາມໄວສະເລ່ຍ (Average speed fraction formula): "}{" "}
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
              <span>{"(1) ຖ້າການເດີນທາງໄປກັບໄລຍະທາງ d (km) ດ້ວຍຄວາມໄວໄປ v₁ = x (km/h) ແລະ ຄວາມໄວຂາກັບ v₂ = x + 2 (km/h). ສຳນວນເວລາທັງໝົດ T = T₁ + T₂ = "} <Fraction num="d" den="x" /> {" + "} <Fraction num="d" den="x + 2" /> {" ເມື່ອ通分ແລ້ວ ຈະມີຮູບຮ່າງແບບໃດ? (ຕອບແບບເລກສ່ວນແຍກ d ໄວ້ທາງໜ້າ, ຕົວຢ່າງ: d(2x+2)/(x(x+2))):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: T ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "220px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າໄລຍະທາງ d = 10 km ແລະ v₁ = 3 km/h. ເວລາທັງໝົດ T ທີ່ໃຊ້ແມ່ນຈັກຊົ່ວໂມງ? (ຕອບເປັນເລກສ່ວນງ່າຍດາຍ ຫຼື ຈຳນວນທົດສະນິຍົມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: T ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ (h)"}</span>
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
          <span key="u4-ans-1-1">{"(1) 3 (ເພາະວ່າ (3x + 6) / (x + 2) = 3(x + 2) / (x + 2) = 3)"}</span>,
          <span key="u4-ans-1-2">{"(2) x + 3 (ເພາະວ່າ (x² - 9) / (x - 3) = (x - 3)(x + 3) / (x - 3) = x + 3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u4-ans-2-1">{"(1) (3y+2x)/(xy) (ເພາະວ່າ ພູດຮ່ວມແມ່ນ xy)"}</span>,
          <span key="u4-ans-2-2">{"(2) 2/(x²-1) (ເພາະວ່າ [(x + 1) - (x - 1)] / [(x - 1)(x + 1)] = 2 / (x² - 1))"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u4-ans-t1-1">{"(1) (2x+2)/(x²-4) (ເພາະວ່າ [x + (x + 2)] / [(x - 2)(x + 2)] = (2x + 2) / (x² - 4))"}</span>,
          <span key="u4-ans-t1-2">{"(2) (2-2x)/(x²-x) (ເພາະວ່າ [2 - 2x] / [x(x - 1)] = 2(1 - x) / [x(x - 1)] = -2/x)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u4-ans-t2-1">{"(1) 2 (ເພາະວ່າ (2x - 2) / (x - 1) = 2(x - 1) / (x - 1) = 2)"}</span>,
          <span key="u4-ans-t2-2">{"(2) -1/(x²+2x) (ເພາະວ່າ [(x + 1) - (x + 2)] / [x(x + 2)] = -1 / (x(x + 2)) = -1 / (x² + 2x))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u4-ans-s1-1">{"(1) 11/(6x) (ເພາະວ່າ [6 + 3 + 2] / 6x = 11/(6x))"}</span>,
          <span key="u4-ans-s1-2">{"(2) 1/(x²-x) (ເພາະວ່າ [x² - (x - 1) - (x² - x)] / [x(x - 1)] = [x² - x + 1 - x² + x] / [x(x - 1)] = 1 / (x² - x))"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u4-ans-s2-1">{"(1) d(2x+2)/(x(x+2)) (ເພາະວ່າ d[x + 2 + x] / [x(x + 2)] = d(2x + 2)/(x(x + 2)))"}</span>,
          <span key="u4-ans-s2-2">{"(2) 16/3 (ຫຼື 5.33. ເພາະວ່າ T = 10/3 + 10/5 = 50/15 + 30/15 = 80/15 = 16/3 = 5.33)"}</span>,
        ],
      },
    ],
    advice: "ການ通分 (ຊອກຫາພູດຮ່ວມ) ແມ່ນຂັ້ນຕອນທີ່ສຳຄັນທີ່ສຸດໃນການບວກລົບເລກສ່ວນປົກກະຕິ! ແລະ ຢ່າລືມກວດເບິ່ງເຄື່ອງໝາຍລົບໃຫ້ດີສະເໝີເດີ້!",
  },
};
