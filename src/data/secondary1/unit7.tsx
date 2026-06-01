import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ທະວີຄູນຮ່ວມໜ້ອຍສຸດ ແລະ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍ ແລະ ວິທີຊອກຫາ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (ທ.ຮ.ນ / LCM), ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (ອ.ຮ.ລ / GCD) ແລະ ຈຳນວນມູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 49-53",
  subSections: [
    {
      title: "1. ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (ທ.ຮ.ນ)",
      keyPoint: {
      title: "1. ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (ທ.ຮ.ນ)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ທ.ຮ.ນ ແມ່ນຈຳນວນຄູນຮ່ວມທີ່ນ້ອຍທີ່ສຸດ (ຕ່າງຈາກ 0) ຂອງສອງ ຫຼື ຫຼາຍຈຳນວນ:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ຕົວທະວີຄູນຂອງ 3: {3, 6, 9, "}<strong>{"12"}</strong>{", 15, 18, 21, "}<strong>{"24"}</strong>{", ...}"}</div>
            <div>{"• ຕົວທະວີຄູນຂອງ 4: {4, 8, "}<strong>{"12"}</strong>{", 16, 20, "}<strong>{"24"}</strong>{", 28, ...}"}</div>
            <div>{"• ຕົວທະວີຄູນຮ່ວມຂອງ 3 ແລະ 4: {"}<strong>{"12"}</strong>{", "}<strong>{"24"}</strong>{", 36, ...}"}</div>
            <div style={{ color: "#0D47A1", fontWeight: "bold", borderTop: "1px solid #B3E5FC", paddingTop: "6px", marginTop: "4px" }}>
              {"→ ທ.ຮ.ນ (3, 4) = 12"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ທ.ຮ.ນ ແມ່ນຈຳນວນທີ່ນ້ອຍທີ່ສຸດ ທີ່ຫານໃຫ້ທັງສອງຕົວເລກນັ້ນຂາດເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບວ່າຈຳນວນລຸ່ມນີ້ ແມ່ນຈຳນວນມູນ ຫຼື ບໍ່ແມ່ນຈຳນວນມູນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) 2 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 13 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 15 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) 1 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5) 29 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (ອ.ຮ.ລ)",
      keyPoint: {
      title: "2. ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (ອ.ຮ.ລ)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ອ.ຮ.ລ ແມ່ນຕົວຫານຮ່ວມທີ່ໃຫຍ່ທີ່ສຸດ ຂອງສອງ ຫຼື ຫຼາຍຈຳນວນ:"}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ຕົວອຸປະຄູນ (ຕົວຫານ) ຂອງ 12: {"}<strong>{"1"}</strong>{", "}<strong>{"2"}</strong>{", "}<strong>{"3"}</strong>{", 4, "}<strong>{"6"}</strong>{", 12}"}</div>
            <div>{"• ຕົວອຸປະຄູນ (ຕົວຫານ) ຂອງ 18: {"}<strong>{"1"}</strong>{", "}<strong>{"2"}</strong>{", "}<strong>{"3"}</strong>{", "}<strong>{"6"}</strong>{", 9, 18}"}</div>
            <div>{"• ຕົວຫານຮ່ວມຂອງ 12 ແລະ 18: {"}<strong>{"1, 2, 3, 6"}</strong>{"}"}</div>
            <div style={{ color: "#2E7D32", fontWeight: "bold", borderTop: "1px solid #C8E6C9", paddingTop: "6px", marginTop: "4px" }}>
              {"→ ອ.ຮ.ລ (12, 18) = 6"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ອ.ຮ.ລ ແມ່ນຂະໜາດທີ່ໃຫຍ່ທີ່ສຸດ ທີ່ສາມາດຫານທັງສອງຈຳນວນນັ້ນໄດ້ລົງຕົວ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (ທ.ຮ.ນ / LCM) ຂອງຄູ່ຈຳນວນລຸ່ມນີ້: "}{" "}
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
              <span>{"(1) ທ.ຮ.ນ (6, 8) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ທ.ຮ.ນ (5, 12) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ຈຳນວນມູນ (Prime Numbers)",
      keyPoint: {
      title: "3. ຈຳນວນມູນ (Prime Numbers)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຈຳນວນມູນ ແມ່ນຈຳນວນທຳມະຊາດທີ່ໃຫຍ່ກວ່າ 1 ແລະ ມີຕົວຫານພຽງແຕ່ 2 ຕົວເທົ່ານັ້ນ ຄື: 1 ແລະ ຕົວມັນເອງ."}
          </p>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div>{"• ຈຳນວນມູນທີ່ນ້ອຍກວ່າ 20: "}<strong>{"2, 3, 5, 7, 11, 13, 17, 19"}</strong></div>
            <div style={{ color: "#D84315", fontWeight: "bold" }}>{"* ຈຳນວນ 1 ບໍ່ແມ່ນຈຳນວນມູນ!"}</div>
            <div>{"* ຈຳນວນ 2 ແມ່ນຈຳນວນມູນທີ່ເປັນເລກຄູ່ພຽງຕົວດຽວສະເໝີ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ເລກ 2, 3, 5, 7 ແມ່ນພື້ນຖານຂອງຈຳນວນມູນທັງໝົດເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຊອກຫາຕົວຫານຮ່ວມທີ່ໃຫຍ່ທີ່ສຸດຂອງຕົວເລກ. ບົດທ້າທາຍ 2 (1) ແມ່ນການຊອກຫາ ອ.ຮ.ລ ເພາະຕ້ອງການຂະໜາດຕັດເຈ້ຍໃຫຍ່ສຸດ, ສ່ວນ (2) ແມ່ນຊອກຫາ ທ.ຮ.ນ ເພື່ອຫາເວລາພົບກັນຄືນ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (ອ.ຮ.ລ / GCD) ຂອງຄູ່ຈຳນວນລຸ່ມນີ້: "}{" "}
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
                <span>{"(1) ອ.ຮ.ລ (12, 18) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ອ.ຮ.ລ (24, 36) ="}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້ໂດຍໃຊ້ຄວາມຮູ້ກ່ຽວກັບ ທ.ຮ.ນ ແລະ ອ.ຮ.ລ: "}{" "}
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
                <span>{"(1) ມີເຈ້ຍຮູບສີ່ແຈສາກ ກວ້າງ 12 cm ແລະ ຍາວ 18 cm. ຖ້າຕ້ອງການຕັດເປັນຮູບຈະຕຸລັດເທົ່າກັນ ແລະ ໃຫຍ່ທີ່ສຸດ ໂດຍບໍ່ໃຫ້ມີເສດເຈ້ຍ. ຖາມວ່າແຕ່ລະຂ້າງຂອງຮູບຈະຕຸລັດນັ້ນຈະຍາວຈັກ cm?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ລົດເມສອງຄັນອອກພ້ອມກັນ. ຄັນທີ 1 ຈະກັບມາຄິວທຸກໆ 12 ນາທີ, ຄັນທີ 2 ທຸກໆ 18 ນາທີ. ອີກຈັກນາທີທັງສອງຄັນຈຶ່ງຈະມາພົບກັນຢູ່ຄິວລົດພ້ອມກັນອີກ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: ອີກ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ນາທີ"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) ທ.ຮ.ນ (4, 6) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ອ.ຮ.ລ (15, 20) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ຈຳນວນມູນທີ່ນ້ອຍທີ່ສຸດແມ່ນເລກໃດ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(4) ຕົວອຸປະຄູນຂອງ 6 ແມ່ນ {1, 2, 3, 6}. (ຕື່ມ ∈ ຫຼື ∉: 3"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກຸ່ມຕົວອຸປະຄູນຂອງ 6)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(5) ທ.ຮ.ນ ຂອງສອງຈຳນວນມູນ 3 ແລະ 5 ແມ່ນ"}</span>
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
            {"ຈົ່ງຊອກຫາຜົນຄິດໄລ່ຂອງ 3 ຈຳນວນດັ່ງຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ອ.ຮ.ລ (24, 36, 48) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ທ.ຮ.ນ (8, 12, 24) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u7-ans-1-1">{"(1) ແມ່ນຈຳນວນມູນ (ເພາະມີແຕ່ 1 ແລະ 2 ຫານຂາດ)"}</span>,
          <span key="u7-ans-1-2">{"(2) ແມ່ນຈຳນວນມູນ"}</span>,
          <span key="u7-ans-1-3">{"(3) ບໍ່ແມ່ນຈຳນວນມູນ (ເພາະ 3 ແລະ 5 ກໍ່ຫານຂາດ)"}</span>,
          <span key="u7-ans-1-4">{"(4) ບໍ່ແມ່ນຈຳນວນມູນ (ເພາະບໍ່ໃຫຍ່ກວ່າ 1)"}</span>,
          <span key="u7-ans-1-5">{"(5) ແມ່ນຈຳນວນມູນ"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u7-ans-2-1">{"(1) 24 (ຕົວທະວີຄູນຄືກັນ: 24, 48...) "}</span>,
          <span key="u7-ans-2-2">{"(2) 60 (5 × 12 = 60)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u7-ans-t1-1">{"(1) 6 (ຕົວຫານຮ່ວມໃຫຍ່ສຸດຂອງ 12 ແລະ 18)"}</span>,
          <span key="u7-ans-t1-2">{"(2) 12"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u7-ans-t2-1">{"(1) 6 cm (ເພາະ ອ.ຮ.ລ (12, 18) = 6)"}</span>,
          <span key="u7-ans-t2-2">{"(2) 36 ນາທີ (ເພາະ ທ.ຮ.ນ (12, 18) = 36)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u7-ans-s1-1">{"(1) 12"}</span>,
          <span key="u7-ans-s1-2">{"(2) 5"}</span>,
          <span key="u7-ans-s1-3">{"(3) 2"}</span>,
          <span key="u7-ans-s1-4">{"(4) ∈"}</span>,
          <span key="u7-ans-s1-5">{"(5) 15 (3 × 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u7-ans-s2-1">{"(1) 12 (ຕົວຫານຮ່ວມຂອງ 24, 36, 48 ແມ່ນ 1, 2, 3, 4, 6, 12)"}</span>,
          <span key="u7-ans-s2-2">{"(2) 24 (ເພາະ 24 ຫານໃຫ້ 8 ແລະ 12 ຂາດ)"}</span>,
        ],
      },
    ],
    advice: "ຈຳນວນມູນມີພຽງ 1 ແລະ ຕົວມັນເອງທີ່ຫານຂາດ. ທ.ຮ.ນ ໃຊ້ແກ້ໂຈດເວລາພົບກັນຄືນ, ອ.ຮ.ລ ໃຊ້ແກ້ໂຈດການແບ່ງປັນໃຫ້ໃຫຍ່ທີ່ສຸດເດີ້!",
  },
};
