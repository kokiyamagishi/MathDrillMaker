import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit31Data: UnitData = {
  unitNumber: 31,
  unitTitle: "ພາກທີ I - ບົດທີ 31: ອັດຕາສ່ວນພົວພັນປີ້ນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈກ່ຽວກັບອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse Proportion), ຄວາມແຕກຕ່າງຈາກອັດຕາສ່ວນພົວພັນກົງ ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 31 ໜ້າ 195-200",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນປີ້ນ (Definition of Inverse Proportion)",
      keyPoint: {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນປີ້ນ (Definition of Inverse Proportion)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສອງປະລິມານ x ແລະ y ມີອັດຕາສ່ວນພົວພັນປີ້ນນຳກັນ ຖ້າປະລິມານໜຶ່ງເພີ່ມຂຶ້ນ k ເທື່ອ ແລ້ວອີກປະລິມານໜຶ່ງຫຼຸດລົງ k ເທື່ອ:"}
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
            <div style={{ fontWeight: "bold", color: "#0D47A1", textAlign: "center" }}>
              {"x × y = C  (ຄ່າຄົງທີ່)  ຫຼື  y = "}
              <Fraction num="C" den="x" />
            </div>
            <div>{"• ຕົວຢ່າງ: ໂຈດກ່ຽວກັບ ຈຳນວນກຳມະກອນ ແລະ ເວລາເຮັດວຽກ."}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px" }}>
              {"→ ຖ້າກຳມະກອນເພີ່ມຂຶ້ນ → ເວລາທີ່ໃຊ້ຈະຫຼຸດລົງ (ເຮັດແລ້ວໄວຂຶ້ນ)."}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ໄວ້ວ່າ: ຜົນຄູນລະຫວ່າງສອງປະລິມານທີ່ພົວພັນປີ້ນ ຈະມີຄ່າຄົງທີ່ສະເໝີ (x₁ × y₁ = x₂ × y₂) ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຄ່າຄົງທີ່ ແລະ ຕົວລັບໃນອັດຕາສ່ວນພົວພັນປີ້ນ: "}{" "}
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
              <span>{"(1) ຖ້າ x ແລະ y ພົວພັນປີ້ນນຳກັນ, ໂດຍ x = 3, y = 8. ຖ້າ x = 6, ຖາມວ່າ y ຈະເທົ່າກັບເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າ x ແລະ y ພົວພັນປີ້ນນຳກັນ, ໂດຍ x = 5, y = 12. ຖ້າ y = 10, ຖາມວ່າ x ຈະເທົ່າກັບເທົ່າໃດ?:"}</span>
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
    },
    {
      title: "2. ວິທີຄິດໄລ່ ແລະ ປຽບທຽບ (Calculation Strategy)",
      keyPoint: {
      title: "2. ວິທີຄິດໄລ່ ແລະ ປຽບທຽບ (Calculation Strategy)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສົມຜົນພົວພັນປີ້ນລະຫວ່າງສອງສະຖານະການ:"}
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
              {"x₁ × y₁ = x₂ × y₂"}
            </div>
            <div>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ກຳມະກອນ 4 ຄົນ ເຮັດວຽກແລ້ວໃນ 6 ວັນ. ຖ້າໃຊ້ກຳມະກອນ 8 ຄົນ ຈະແລ້ວໃນຈັກວັນ?"}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>
                {"→ ເຮົາໄດ້: 4 ຄົນ × 6 ວັນ = 8 ຄົນ × d ວັນ"}
                <br />
                <span style={{ paddingLeft: "16px" }}>
                  {"→ d = (4 × 6) ÷ 8 = 24 ÷ 8 = 3 ວັນ."}
                </span>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສັງເກດເບິ່ງດີໆວ່າ ຖ້າກຳມະກອນເພີ່ມຂຶ້ນ 2 ເທົ່າ (ຈາກ 4 ເປັນ 8), ເວລາກໍຈະຫຼຸດລົງ 2 ເທົ່າ (ຈາກ 6 ເປັນ 3) ພໍດີເລີຍ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງພິຈາລະນາປະເພດການພົວພັນ (ຕອບ 'ພົວພັນກົງ' ຫຼື 'ພົວພັນປີ້ນ'): "}{" "}
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
              <span>{"(1) ຄວາມສຳພັນລະຫວ່າງ ຄວາມໄວຂອງລົດ (v) ແລະ ເວລາທີ່ໃຊ້ໃນການເດີນທາງ (t) ຢູ່ເທິງໄລຍະທາງຄົງທີ່ ແມ່ນແນວໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຄວາມສຳພັນລະຫວ່າງ ນ້ຳໜັກຂອງໝາກກ້ຽງ (kg) ແລະ ລາຄາທີ່ຕ້ອງຈ່າຍ (ກີບ) ແມ່ນແນວໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ຕັ້ງສົມຜົນ ຄວາມໄວ × ເວລາ = ຄວາມໄວໃໝ່ × ເວລາໃໝ່. ບົດທ້າທາຍ 2: ຕັ້ງສົມຜົນ ກຳມະກອນ × ເວລາ = ກຳມະກອນໃໝ່ × ເວລາໃໝ່.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາພົວພັນປີ້ນໃນຊີວິດປະຈຳວັນ: "}{" "}
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
                <span>{"(1) ລົດຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວ 60 km/h ຈະຮອດຈຸດໝາຍປາຍທາງໃນ 4 ຊົ່ວໂມງ. ຖ້າຕ້ອງການໃຫ້ຮອດໃນ 3 ຊົ່ວໂມງ ຈະຕ້ອງແລ່ນດ້ວຍຄວາມໄວຈັກ km/h?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"km/h"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ມີກຳມະກອນ 6 ຄົນ ແຕ້ມຮູບຝາຫ້ອງແລ້ວໃນ 10 ວັນ. ຖ້າຕ້ອງການໃຫ້ແຕ້ມແລ້ວພາຍໃນ 5 ວັນ ຈະຕ້ອງໃຊ້ກຳມະກອນທັງໝົດຈັກຄົນ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາພົວພັນປີ້ນປະສົມ: "}{" "}
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
              <span>{"(1) ມີອາຫານກຽມໄວ້ໃຫ້ໄກ່ 20 ໂຕ ກິນໄດ້ 15 ວັນ. ຖ້າຊື້ໄກ່ມາເພີ່ມອີກ 10 ໂຕ (ລວມເປັນ 30 ໂຕ), ອາຫານນັ້ນຈະກິນໄດ້ຈັກວັນ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ວັນ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າໄກ່ຫຼຸດລົງເຫຼືອພຽງແຕ່ 10 ໂຕ, ອາຫານນັ້ນຈະກິນໄດ້ທັງໝົດຈັກວັນ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ວັນ"}</span>
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
          <span key="u31-ans-1-1">{"(1) 4 (ເພາະຜົນຄູນຄົງທີ່ x × y = 3 × 8 = 24. ດັ່ງນັ້ນຖ້າ x = 6 → y = 24 ÷ 6 = 4)"}</span>,
          <span key="u31-ans-1-2">{"(2) 6 (ເພາະຜົນຄູນຄົງທີ່ x × y = 5 × 12 = 60. ດັ່ງນັ້ນຖ້າ y = 10 → x = 60 ÷ 10 = 6)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u31-ans-2-1">{"(1) ພົວພັນປີ້ນ (ເພາະຄວາມໄວເພີ່ມຂຶ້ນ ເວລາທີ່ໃຊ້ໃນການເດີນທາງຈະຫຼຸດລົງ)"}</span>,
          <span key="u31-ans-2-2">{"(2) ພົວພັນກົງ (ເພາະນ້ຳໜັກເພີ່ມຂຶ້ນ ລາຄາທີ່ຕ້ອງຈ່າຍກໍເພີ່ມຂຶ້ນຕາມອັດຕາສ່ວນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u31-ans-t1-1">{"(1) 80 (ເພາະ 60 km/h × 4 h = v₂ × 3 h → v₂ = 240 ÷ 3 = 80 km/h)"}</span>,
          <span key="u31-ans-t1-2">{"(2) 12 (ເພາະ 6 ຄົນ × 10 ວັນ = n₂ × 5 ວັນ → n₂ = 60 ÷ 5 = 12 ຄົນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u31-ans-s1-1">{"(1) 10 (ເພາະ 20 ໂຕ × 15 ວັນ = 30 ໂຕ × d ວັນ → d = 300 ÷ 30 = 10 ວັນ)"}</span>,
          <span key="u31-ans-s1-2">{"(2) 30 (ເພາະ 20 ໂຕ × 15 ວັນ = 10 ໂຕ × d ວັນ → d = 300 ÷ 10 = 30 ວັນ)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງສັງເກດຄວາມແຕກຕ່າງ: ອັດຕາສ່ວນພົວພັນກົງແມ່ນ ຫານກັນຄົງທີ່ (y/x = k), ສ່ວນອັດຕາສ່ວນພົວພັນປີ້ນແມ່ນ ຄູນກັນຄົງທີ່ (x × y = C). ຄວາມເຂົ້າໃຈນີ້ຈະຊ່ວຍໃຫ້ເຮົາເລືອກວິທີແກ້ໂຈດໄດ້ຖືກຕ້ອງ ແລະ ວ່ອງໄວສະເໝີເດີ້!",
  },
};
