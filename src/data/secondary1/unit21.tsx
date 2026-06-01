import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ II - ບົດທີ 21: ມາດຕາສ່ວນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄວາມໝາຍຂອງມາດຕາສ່ວນ, ວິທີອ່ານມາດຕາສ່ວນໃນແຜນທີ່ ແລະ ການຄິດໄລ່ຫາໄລຍະທາງຕົວຈິງ ຫຼື ໄລຍະທາງໃນແຜນທີ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 21 ໜ້າ 142-146",
  keyPoints: [
    {
      title: "1. ຄວາມໝາຍຂອງມາດຕາສ່ວນ (Definition of Scale)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ມາດຕາສ່ວນ ແມ່ນອັດຕາສ່ວນລະຫວ່າງ ໄລຍະທາງໃນແຜນທີ່ (ຫຼື ໃນຮູບແຕ້ມ) ຕໍ່ກັບ ໄລຍະທາງຕົວຈິງ:"}
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
            {"ມາດຕາສ່ວນ = "}
            <Fraction num="ໄລຍະທາງໃນແຜນທີ່" den="ໄລຍະທາງຕົວຈິງ" />
          </div>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"• ຕົວຢ່າງ: ມາດຕາສ່ວນ "}<strong>{"1:10,000"}</strong>{" (ຫຼື "}
            <Fraction num="1" den="10,000" />
            {") ໝາຍຄວາມວ່າ 1 cm ໃນແຜນທີ່ ເທົ່າກັບ 10,000 cm (ຫຼື 100 m) ໃນຕົວຈິງ."}
          </p>
        </div>
      ),
      hint: {
        text: "💡 ເວລາຄິດໄລ່ ຕ້ອງປ່ຽນຫົວໜ່ວຍຂອງໄລຍະທາງຕົວຈິງ ແລະ ໄລຍະທາງໃນແຜນທີ່ໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນກ່ອນສະເໝີ (ປົກກະຕິແມ່ນ cm)!",
        isBlue: true,
      },
    },
    {
      title: "2. ການຄິດໄລ່ໄລຍະທາງຕົວຈິງ (Calculating Real Distance)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ສູດຄິດໄລ່ຊອກຫາໄລຍະທາງຕົວຈິງ:"}
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
            <div style={{ fontWeight: "bold", color: "#2E7D32" }}>
              {"• ໄລຍະທາງຕົວຈິງ = ໄລຍະທາງໃນແຜນທີ່ × ພູດຂອງມາດຕາສ່ວນ"}
            </div>
            <div>
              {"ຕົວຢ່າງ: ໃນແຜນທີ່ມາດຕາສ່ວນ "}<strong>{"1:50,000"}</strong>{", ໄລຍະທາງລະຫວ່າງສອງເມັດແມ່ນ 4 cm."}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>
                {"→ ໄລຍະທາງຕົວຈິງ = 4 cm × 50,000 = 200,000 cm = 2,000 m = 2 km."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການແປງຫົວໜ່ວຍທີ່ຄວນຈື່: 1 m = 100 cm | 1 km = 1,000 m = 100,000 cm ເດີ້!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຊອກຫາໄລຍະທາງຕົວຈິງ (ຕອບເປັນຫົວໜ່ວຍທີ່ກຳນົດໃຫ້): "}{" "}
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
              <span>{"(1) ໃນແຜນທີ່ມາດຕາສ່ວນ 1:20,000. ໄລຍະທາງໃນແຜນທີ່ແມ່ນ 5 cm. ໄລຍະທາງຕົວຈິງແມ່ນຈັກ ແມັດ (m)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃນແຜນທີ່ມາດຕາສ່ວນ 1:100,000. ໄລຍະທາງໃນແຜນທີ່ແມ່ນ 3 cm. ໄລຍະທາງຕົວຈິງແມ່ນຈັກ ກິໂລແມັດ (km)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km"}</span>
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
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຊອກຫາໄລຍະທາງໃນແຜນທີ່ (ຕອບເປັນ cm): "}{" "}
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
              <span>{"(1) ໄລຍະທາງຕົວຈິງລະຫວ່າງສອງບ້ານແມ່ນ 1,500 m. ໃນແຜນທີ່ມາດຕາສ່ວນ 1:50,000, ໄລຍະທາງໃນແຜນທີ່ແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໄລຍະທາງຕົວຈິງແມ່ນ 10 km. ໃນແຜນທີ່ມາດຕາສ່ວນ 1:200,000, ໄລຍະທາງໃນແຜນທີ່ແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຊອກຫາມາດຕາສ່ວນໂດຍເອົາ ໄລຍະທາງໃນແຜນທີ່ ຫານໃຫ້ ໄລຍະທາງຕົວຈິງ ຫຼັງຈາກປ່ຽນຫົວໜ່ວຍໃຫ້ຄືກັນແລ້ວ. ບົດທ້າທາຍ 2: ຄິດໄລ່ໄລຍະທາງຕົວຈິງຈາກຄວາມກວ້າງ ແລະ ຄວາມຍາວໃນແຜນວາດ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງຊອກຫາມາດຕາສ່ວນ ແລະ ຄິດໄລ່ເນື້ອທີ່ຕົວຈິງ: "}{" "}
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
                <span>{"(1) ໄລຍະທາງຕົວຈິງແມ່ນ 4 km, ໃນແຜນທີ່ແທກໄດ້ 8 cm. ຖາມວ່າມາດຕາສ່ວນຂອງແຜນທີ່ນີ້ແມ່ນ 1 ຕໍ່ກັບເທົ່າໃດ? (ຕອບເປັນຕົວເລກພູດ ເຊັ່ນ 50000):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: 1 :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຫ້ອງຮຽນໜຶ່ງໃນແຜນວາດມາດຕາສ່ວນ 1:100 ມີຄວາມຍາວ 8 cm. ຄວາມຍາວຕົວຈິງຂອງຫ້ອງຮຽນນີ້ແມ່ນຈັກ ແມັດ (m)?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"m"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນກ່ຽວກັບມາດຕາສ່ວນ: "}{" "}
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
              <span>{"(1) ສວນຜັກຮູບສີ່ແຈສາກໜຶ່ງມີຄວາມຍາວຕົວຈິງ 50 m. ຖ້າແຕ້ມໃນແຜນຜັງມາດຕາສ່ວນ 1:500, ຄວາມຍາວໃນແຜນຜັງຈະແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຄວາມກວ້າງຕົວຈິງແມ່ນ 30 m, ຄວາມກວ້າງໃນແຜນຜັງຈະແມ່ນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
          <span key="u21-ans-1-1">{"(1) 1,000 (ເພາະ 5 cm × 20,000 = 100,000 cm = 1,000 m)"}</span>,
          <span key="u21-ans-1-2">{"(2) 3 (ເພາະ 3 cm × 100,000 = 300,000 cm = 3,000 m = 3 km)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u21-ans-2-1">{"(1) 3 (ເພາະ 1,500 m = 150,000 cm. ໄລຍະທາງໃນແຜນທີ່ = 150,000 ÷ 50,000 = 3 cm)"}</span>,
          <span key="u21-ans-2-2">{"(2) 5 (ເພາະ 10 km = 1,000,000 cm. ໄລຍະທາງໃນແຜນທີ່ = 1,000,000 ÷ 200,000 = 5 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u21-ans-t1-1">{"(1) 50000 (ເພາະ 4 km = 400,000 cm. ມາດຕາສ່ວນ = 8 : 400,000 = 1 : 50,000)"}</span>,
          <span key="u21-ans-t1-2">{"(2) 8 (ເພາະ 8 cm × 100 = 800 cm = 8 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u21-ans-s1-1">{"(1) 10 (ເພາະ 50 m = 5,000 cm. ໄລຍະທາງໃນແຜນຜັງ = 5,000 ÷ 500 = 10 cm)"}</span>,
          <span key="u21-ans-s1-2">{"(2) 6 (ເພາະ 30 m = 3,000 cm. ໄລຍະທາງໃນແຜນຜັງ = 3,000 ÷ 500 = 6 cm)"}</span>,
        ],
      },
    ],
    advice: "ມາດຕາສ່ວນຊ່ວຍໃຫ້ເຮົາສາມາດແຕ້ມວັດຖຸຂະໜາດໃຫຍ່ (ເຊັ່ນ ປະເທດ, ເມືອງ ຫຼື ອາຄານ) ລົງເທິງເຈ້ຍແຜ່ນນ້ອຍໆໄດ້ຢ່າງຖືກຕ້ອງຕາມອັດຕາສ່ວນຕົວຈິງ. ຢ່າລືມແປງຫົວໜ່ວຍເປັນ cm ກ່ອນສະເໝີເດີ້!",
  },
};
