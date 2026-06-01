import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit28Data: UnitData = {
  unitNumber: 28,
  unitTitle: "ພາກທີ I - ບົດທີ 28: ອັດຕາສ່ວນພົວພັນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນ (Proportion), ຄຸນລັກສະນະຄູນໄຂວ້ ແລະ ການນຳໃຊ້ໃນການແກ້ໂຈດເລກຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 28 ໜ້າ 180-184",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນ (Definition of Proportion)",
      keyPoint: {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນ (Definition of Proportion)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ອັດຕາສ່ວນພົວພັນ ແມ່ນຄວາມເທົ່າກັນຂອງສອງອັດຕາສ່ວນ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              textAlign: "center",
              fontWeight: "bold",
              color: "#0D47A1",
            }}
          >
            <Fraction num="a" den="b" />
            {" = "}
            <Fraction num="c" den="d" />
            {"  (ຫຼື  a : b = c : d)"}
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ໃນນີ້, ພົດ a, b, c, d ເອີ້ນວ່າ ພົດຂອງອັດຕາສ່ວນພົວພັນ. ໂດຍທີ່ a, d ແມ່ນພົດນອກ ແລະ b, c ແມ່ນພົດໃນ."}
          </p>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ: ຜົນຄູນຂອງພົດນອກ ຈະເທົ່າກັບຜົນຄູນຂອງພົດໃນສະເໝີ (a × d = b × c) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງກວດສອບວ່າຄູ່ອັດຕາສ່ວນຕໍ່ໄປນີ້ປະກອບເປັນອັດຕາສ່ວນພົວພັນ ຫຼື ບໍ່ (ຕອບ 'ແມ່ນ' ຫຼື 'ບໍ່ແມ່ນ'): "}{" "}
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
              <span>{"(1) ອັດຕາສ່ວນ "} <Fraction num="3" den="4" /> {" ແລະ "} <Fraction num="6" den="8" /> {" ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ບໍ່?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ອັດຕາສ່ວນ "} <Fraction num="2" den="5" /> {" ແລະ "} <Fraction num="4" den="9" /> {" ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ບໍ່?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ຄຸນລັກສະນະຄູນໄຂວ້ (Cross-Multiplication)",
      keyPoint: {
      title: "2. ຄຸນລັກສະນະຄູນໄຂວ້ (Cross-Multiplication)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄຸນລັກສະນະພື້ນຖານຂອງອັດຕາສ່ວນພົວພັນແມ່ນການຄູນໄຂວ້:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2E7D32", textAlign: "center" }}>
              {"ຖ້າ "}
              <Fraction num="a" den="b" />
              {" = "}
              <Fraction num="c" den="d" />
              {"  →  a × d = b × c"}
            </div>
            <div>
              {"ຕົວຢ່າງ: ກວດສອບອັດຕາສ່ວນພົວພັນ "}
              <Fraction num="2" den="3" />
              {" = "}
              <Fraction num="4" den="6" />
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>
                {"→ ຄູນໄຂວ້: 2 × 6 = 12 ແລະ 3 × 4 = 12. ຜົນໄດ້ຮັບເທົ່າກັນ ດັ່ງນັ້ນແມ່ນອັດຕາສ່ວນພົວພັນທີ່ຖືກຕ້ອງ."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຄຸນລັກສະນະຄູນໄຂວ້ນີ້ມີປະໂຫຍດຫຼາຍໃນການຊອກຫາຕົວເລກທີ່ເຮົາບໍ່ທັນຮູ້ໃນອັດຕາສ່ວນພົວພັນ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຜົນຄູນໄຂວ້ຂອງອັດຕາສ່ວນພົວພັນ: "}{" "}
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
              <span>{"(1) ຖ້າ "} <Fraction num="5" den="x" /> {" = "} <Fraction num="10" den="6" /> {" ຕາມຫຼັກການຄູນໄຂວ້ ຈະໄດ້ 10 × x = 5 × 6. ດັ່ງນັ້ນ 10 × x ມີຄ່າເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄ່າຂອງ x ຈະເທົ່າກັບເທົ່າໃດ? (ຄຳແນະນຳ: x = ຜົນໄດ້ຮັບ ÷ 10):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຊ້ຫຼັກການຄູນໄຂວ້ເພື່ອຊອກຫາຄ່າຂອງຕົວລັບ. ບົດທ້າທາຍ 2: ຄິດໄລ່ອັດຕາສ່ວນພົວພັນໃນໂຈດບັນຫາຊີວິດປະຈຳວັນ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕົວຈິງ: "}{" "}
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
                <span>{"(1) ລົດຄັນໜຶ່ງແລ່ນໄດ້ 120 km ໃຊ້ເວລາ 2 ຊົ່ວໂມງ. ຖ້າແລ່ນດ້ວຍຄວາມໄວເທົ່າເດີມ ໄລຍະທາງ 240 km ຈະໃຊ້ເວລາຈັກ ຊົ່ວໂມງ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເຂົ້າໜົມ 3 ກ່ອງ ລາຄາ 45,000 ກີບ. ຖ້າຊື້ເຂົ້າໜົມ 6 ກ່ອງ ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກ ກີບ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
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
            {"ຈົ່ງທົດສອບຄວາມເຂົ້າໃຈລວມ: "}{" "}
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
              <span>{"(1) ຖ້າ "} <Fraction num="4" den="5" /> {" = "} <Fraction num="12" den="y" /> {" ຄ່າຂອງ y ແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຖ້າ "} <Fraction num="a" den="8" /> {" = "} <Fraction num="3" den="2" /> {" ຄ່າຂອງ a ແມ່ນເທົ່າໃດ?:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <span key="u28-ans-1-1">{"(1) ແມ່ນ (ເພາະ 3 × 8 = 24 ແລະ 4 × 6 = 24. ຜົນຄູນໄຂວ້ເທົ່າກັນ)"}</span>,
          <span key="u28-ans-1-2">{"(2) ບໍ່ແມ່ນ (ເພາະ 2 × 9 = 18 ແຕ່ 5 × 4 = 20. ຜົນຄູນໄຂວ້ບໍ່ເທົ່າກັນ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u28-ans-2-1">{"(1) 30 (ເພາະ 5 × 6 = 30)"}</span>,
          <span key="u28-ans-2-2">{"(2) 3 (ເພາະ 10 × x = 30 → x = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u28-ans-t1-1">{"(1) 4 (ເພາະອັດຕາສ່ວນແມ່ນ 120/2 = 240/t → t = (2 × 240) ÷ 120 = 4 ชົ່ວໂມງ)"}</span>,
          <span key="u28-ans-t1-2">{"(2) 90,000 (ເພາະ 6 ກ່ອງແມ່ນ 2 ເທົ່າຂອງ 3 ກ່ອງ ດັ່ງນັ້ນລາຄາແມ່ນ 45,000 × 2 = 90,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u28-ans-s1-1">{"(1) 15 (ເພາະ 4 × 3 = 12 ດັ່ງນັ້ນ y = 5 × 3 = 15)"}</span>,
          <span key="u28-ans-s1-2">{"(2) 12 (ເພາະ 2 × 4 = 8 ດັ່ງນັ້ນ a = 3 × 4 = 12)"}</span>,
        ],
      },
    ],
    advice: "ອັດຕາສ່ວນພົວພັນແມ່ນການສະແດງຄວາມເທົ່າກັນຂອງສອງອັດຕາສ່ວນ. ຄຸນລັກສະນະຄູນໄຂວ້ (Cross-multiplication) ແມ່ນເຄື່ອງມືທີ່ສຳຄັນທີ່ສຸດໃນການຄິດໄລ່ ເພາະມັນຊ່ວຍປ່ຽນເລກສ່ວນໃຫ້ເປັນສົມຜົນງ່າຍໆໄດ້ສະເໝີເດີ້!",
  },
};
