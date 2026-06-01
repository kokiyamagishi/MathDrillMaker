import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit30Data: UnitData = {
  unitNumber: 30,
  unitTitle: "ພາກທີ I - ບົດທີ 30: ການຄິດໄລ່ສ່ວນຮ້ອຍ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (Percentage), ວິທີການແປງສ່ວນຮ້ອຍເປັນເລກສ່ວນ ແລະ ທົດສະນິຍົມ, ແລະ ການແກ້ໂຈດສ່ວນຮ້ອຍໃນຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 30 ໜ້າ 190-194",
  keyPoints: [
    {
      title: "1. ຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (Concept of Percentage)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສ່ວນຮ້ອຍ ແມ່ນອັດຕາສ່ວນທີ່ມີພູດແມ່ນ 100 ສະເໝີ, ສັນຍະລັກດ້ວຍ %:"}
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
            <div style={{ fontWeight: "bold", color: "#0D47A1", textAlign: "center", fontSize: "1.5rem" }}>
              {"x% = "}
              <Fraction num="x" den="100" />
              {" = x ÷ 100"}
            </div>
            <div>
              <strong>{"ຕົວຢ່າງຄວາມສຳພັນ: "}</strong>
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>
                {"• 25% = "}
                <Fraction num="25" den="100" />
                {" = "}
                <Fraction num="1" den="4" />
                {" = 0.25"}
              </span>
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>
                {"• 50% = "}
                <Fraction num="50" den="100" />
                {" = "}
                <Fraction num="1" den="2" />
                {" = 0.5"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ສ່ວນຮ້ອຍຊ່ວຍໃຫ້ເຮົາປຽບທຽບຂໍ້ມູນທີ່ມີຂະໜາດຕ່າງກັນໄດ້ງ່າຍຂຶ້ນ ໂດຍປ່ຽນຖານໃຫ້ເປັນ 100 ເທົ່າກັນສະເໝີ!",
        isBlue: true,
      },
    },
    {
      title: "2. ການຄິດໄລ່ຫາສ່ວນຮ້ອຍຂອງຈຳນວນໜຶ່ງ (Finding Percentage of a Quantity)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອຊອກຫາ x% ຂອງຈຳນວນ A, ເຮົາຈະເອົາ A ຄູນໃຫ້ x ແລ້ວຫານດ້ວຍ 100:"}
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
              {"ຜົນໄດ້ຮັບ = A × "}
              <Fraction num="x" den="100" />
            </div>
            <div>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຈົ່ງຄິດໄລ່ 20% ຂອງເງິນ 50,000 ກີບ."}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>
                {"→ ຄິດໄລ່: 50,000 × "}
                <Fraction num="20" den="100" />
                {" = 50,000 × 0.2 = 10,000 ກີບ."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການຫຼຸດລາຄາ ຫຼື ການເພີ່ມຂຶ້ນຂອງສິນຄ້າໃນຮ້ານຄ້າ ກໍໃຊ້ຫຼັກການຄິດໄລ່ນີ້ຄືກັນເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງແປງສ່ວນຮ້ອຍຕໍ່ໄປນີ້ໃຫ້ເປັນເລກທົດສະນິຍົມ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) 45% ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 8% ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 120% ="}</span>
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
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຫາຄ່າສ່ວນຮ້ອຍຂອງຈຳນວນທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) 10% ຂອງເງິນ 80,000 ກີບ ແມ່ນຈັກກີບ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) 25% ຂອງນ້ຳໜັກ 400 kg ແມ່ນຈັກ kg?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"kg"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຫຼຸດລາຄາ 15% ໝາຍຄວາມວ່າ ລາຄາທີ່ຕ້ອງຈ່າຍແມ່ນ 100% - 15% = 85% ຂອງລາຄາເດີມ. ບົດທ້າທາຍ 2: ຊອກຫາອັດຕາສ່ວນຮ້ອຍໂດຍເອົາ (ຈຳນວນນັກຮຽນຍິງ ÷ ຈຳນວນທັງໝົດ) × 100%.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາສ່ວນຮ້ອຍລະດັບສູງ: "}{" "}
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
                <span>{"(1) ເສື້ອໂຕໜຶ່ງລາຄາ 120,000 ກີບ. ທາງຮ້ານຫຼຸດລາຄາໃຫ້ 15%. ຖາມວ່າໄດ້ຫຼຸດລາຄາຈັກກີບ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຫຼັງຈາກຫຼຸດລາຄາແລ້ວ ຈະຕ້ອງຈ່າຍເງິນຊື້ເສື້ອໂຕນັ້ນຕົວຈິງຈັກກີບ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຫາອັດຕາສ່ວນຮ້ອຍຕົວຈິງ: "}{" "}
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
              <span>{"(1) ໃນຫ້ອງຮຽນໜຶ່ງມີນັກຮຽນທັງໝົດ 40 ຄົນ, ໃນນັ້ນມີນັກຮຽນຍິງ 24 ຄົນ. ຖາມວ່ານັກຮຽນຍິງຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງນັກຮຽນທັງໝົດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"%"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ນັກຮຽນຊາຍຈະຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງນັກຮຽນທັງໝົດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"%"}</span>
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
          <span key="u30-ans-1-1">{"(1) 0.45 (ເພາະ 45 ÷ 100 = 0.45)"}</span>,
          <span key="u30-ans-1-2">{"(2) 0.08 (ເພາະ 8 ÷ 100 = 0.08)"}</span>,
          <span key="u30-ans-1-3">{"(3) 1.2 (ເພາະ 120 ÷ 100 = 1.2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u30-ans-2-1">{"(1) 8,000 (ເພາະ 80,000 × 0.1 = 8,000 ກີບ)"}</span>,
          <span key="u30-ans-2-2">{"(2) 100 (ເພາະ 25% = 1/4, ດັ່ງນັ້ນ 400 ÷ 4 = 100 kg)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u30-ans-t1-1">{"(1) 18,000 (ເພາະ 120,000 × 0.15 = 18,000 ກີບ)"}</span>,
          <span key="u30-ans-t1-2">{"(2) 102,000 (ເພາະ 120,000 - 18,000 = 102,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u30-ans-s1-1">{"(1) 60 (ເພາະ (24 ÷ 40) × 100% = 0.6 × 100% = 60%)"}</span>,
          <span key="u30-ans-s1-2">{"(2) 40 (ເພາະນັກຮຽນຊາຍແມ່ນ 100% - 60% = 40%)"}</span>,
        ],
      },
    ],
    advice: "ການຄິດໄລ່ສ່ວນຮ້ອຍ ພຽງແຕ່ແປງເຄື່ອງໝາຍ % ໃຫ້ເປັນການຫານດ້ວຍ 100. ມັນມີປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ສ່ວນຫຼຸດສິນຄ້າ, ດອກເບ້ຍ ແລະ ອັດຕາການເຕີບໂຕຕ່າງໆໃນຊີວິດປະຈຳວັນເດີ້!",
  },
};
