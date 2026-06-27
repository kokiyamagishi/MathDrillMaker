import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "ຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້",
  unitGoal: "ຮຽນຮູ້ແນວຄວາມຄິດຂອງຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້, ຄວາມສຳພັນດ້ານຂ້າງ ແລະ ມຸມ ພ້ອມທັງການຄິດໄລ່ມາດຕາສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 136-145",
  keyPoints: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ຄຸນລັກສະນະຂອງຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້"}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#FFE082",
            border: "2px solid #FFB300",
            borderRadius: "8px",
          }}
        >
          {/* SVG Visual Explanation */}
          <div style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", width: "500px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <svg width="468" height="170">
              {/* Triangle A (Original) */}
              <text x="110" y="20" textAnchor="middle" style={{ fontSize: "12px", fontWeight: "bold" }} fill="#2196F3">{"ຮູບ A (ຕົ້ນສະບັບ)"}</text>
              <polygon points="35,130 95,130 95,75" fill="none" stroke="#2196F3" strokeWidth="2"/>
              <text x="65" y="155" textAnchor="middle" style={{ fontSize: "11px" }} fill="#555">{"3 cm"}</text>
              <text x="130" y="105" textAnchor="middle" style={{ fontSize: "11px" }} fill="#555">{"4 cm"}</text>
              {/* Angle Arc A */}
              <path d="M 50,130 A 15,15 0 0,0 47,118" fill="none" stroke="red" strokeWidth="1"/>
              <text x="10" y="116" style={{ fontSize: "10px" }} fill="red">{"37°"}</text>
 
              {/* Scaling Arrow */}
              <path d="M 130,95 Q 190,75 250,95" fill="none" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="2,2"/>
              <polygon points="250,95 244,91 247,98" fill="#1565C0"/>
              <text x="190" y="65" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"ຂະຫຍາຍ 2 ເທື່ອ (×2)"}</text>
 
              {/* Triangle B (2x Enlarged) */}
              <text x="330" y="20" textAnchor="middle" style={{ fontSize: "12px", fontWeight: "bold" }} fill="#1565C0">{"ຮູບ B (ຮູບຂະຫຍາຍ)"}</text>
              <polygon points="270,130 390,130 390,20" fill="none" stroke="#1565C0" strokeWidth="2.5"/>
              <text x="330" y="155" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"6 cm"}</text>
              <text x="430" y="75" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#1565C0">{"8 cm"}</text>
              {/* Angle Arc B */}
              <path d="M 288,130 A 18,18 0 0,0 284,115" fill="none" stroke="red" strokeWidth="1.5"/>
              <text x="260" y="112" style={{ fontSize: "10px", fontWeight: "bold" }} fill="red">{"37° (ເທົ່າກັນ)"}</text>
            </svg>
          </div>

          <div style={{ flex: "1 1 240px", fontSize: "22px", lineHeight: "1.6" }}>
            <div style={{ fontWeight: "bold", color: "#E65100", marginBottom: "8px" }}>
              {"ຫຼັກການຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້:"}
            </div>
            <div style={{ fontSize: "18px", color: "#333" }}>
              <div>{"• ມຸມທີ່ສົມທຽບກັນແມ່ນ "}<strong>{"ເທົ່າກັນສະເໝີ (ບໍ່ປ່ຽນແປງ)"}</strong></div>
              <div style={{ marginTop: "4px" }}>
                {"• ອັດຕາສ່ວນຄວາມຍາວຂ້າງສົມທຽບແມ່ນ "}<strong>{"ຄືກັນທຸກຂ້າງ (ຂະຫຍາຍ/ຫຍໍ້ສະໝໍ່າສະເໝີ)"}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບຂະຫຍາຍ ແລະ ມຸມ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "8px 16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ຖ້າຮູບ B ແມ່ນຮູບຂະຫຍາຍ 2 ເທື່ອຂອງຮູບ A. ຂ້າງທີ່ຍາວ 3 cm ໃນຮູບ A ຈະຍາວຈັກ cm ໃນຮູບ B?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າມຸມໜຶ່ງໃນຮູບ A ມີຂະໜາດ 60°, ມຸມສົມທຽບໃນຮູບ B ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບມາດຕາສ່ວນ ແລະ ຮູບຫຍໍ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "8px 16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 1000, ຄວາມຍາວໃນແຜນທີ່ 5 cm ຈະເທົ່າກັບໄລຍະທາງຈິງຈັກ m?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                {"(2) ຖ້າຮູບ C ແມ່ນຮູບຫຍໍ້ "}
                <Fraction num="1" den="3" />
                {" ຂອງຮູບ A. ຂ້າງທີ່ຍາວ 15 cm ໃນຮູບ A ຈະຍາວຈັກ cm ໃນຮູບ C?"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText: "📐 ໄລຍະທາງຈິງ = ໄລຍະທາງໃນແຜນທີ່ × ຕົວຫານຂອງມາດຕາສ່ວນ! ຫຼັງຈາກນັ້ນ ປ່ຽນຫົວໜ່ວຍຈາກ cm ໃຫ້ເປັນ m ຫຼື km ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມກວ້າງຈິງຂອງແມ່ນ້ຳ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 🌊 ຕ້ອງການຊອກຫາຄວາມກວ້າງຂອງແມ່ນ້ຳ. ໃນແຜນວາດຫຍໍ້ ມາດຕາສ່ວນ 1 : 500, ຄວາມກວ້າງຂອງແມ່ນ້ຳແທກໄດ້ 4 cm. ຄວາມກວ້າງຈິງຂອງແມ່ນ້ຳແມ່ນຈັກແມັດ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"m"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມກວ້າງໃນແຜນຜັງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 🗺️ ໃນແຜນຜັງໂຮງຮຽນ ມາດຕາສ່ວນ 1 : 200, ອາຄານຮຽນມີຄວາມກວ້າງຈິງ 30 m (3,000 cm). ຄວາມກວ້າງຂອງອາຄານຮຽນໃນແຜນຜັງນີ້ຈະແທກໄດ້ຈັກ cm?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງໃນແຜນທີ່: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 🗺️ ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນແມ່ນ 1 km (100,000 cm). ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 25,000, ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນນີ້ຈະແທກໄດ້ຈັກ cm?"}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
              <span>{"ຄຳຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"cm"}</span>
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
            {"ຈົ່ງຊອກຫາແນວຄິດມາດຕາສ່ວນຂອງຮູບຫຍໍ້: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 🌳 ຕົ້ນໄມ້ໃຫຍ່ຕົ້ນໜຶ່ງສູງ 12 m (1,200 cm). ຖ້າແຕ້ມຮູບຫຍໍ້ຂອງຕົ້ນໄມ້ນີ້ໂດຍໃຊ້ຄວາມສູງ 6 cm, ມາດຕາສ່ວນຂອງຮູບຫຍໍ້ນີ້ແມ່ນ 1 : ຈັກ?"}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
              <span>{"ຄຳຕອບ: 1 :"}</span>
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
          <span key="u12-ans-1-1">{"(1) 6 cm (ຍ້ອນ 3 × 2 = 6)"}</span>,
          <span key="u12-ans-1-2">{"(2) 60° (ຍ້ອນຂະໜາດມຸມບໍ່ປ່ຽນແປງ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u12-ans-2-1">{"(1) 50 m (ຍ້ອນ 5 × 1,000 = 5,000 cm = 50 m)"}</span>,
          <span key="u12-ans-2-2">{"(2) 5 cm (ຍ້ອນ 15 × (1/3) = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u12-ans-t1-1">{"(1) 20 m (ຍ້ອນ 4 × 500 = 2,000 cm = 20 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u12-ans-t2-1">{"(1) 15 cm (ຍ້ອນ 3,000 cm ÷ 200 = 15 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u12-ans-s1-1">{"(1) 4 cm (ຍ້ອນ 100,000 ÷ 25,000 = 4 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u12-ans-s2-1">{"(1) 200 (ຍ້ອນ 1,200 cm ÷ 6 cm = 200)"}</span>,
        ],
      },
    ],
    advice: "ການຮຽນຮູ້ກ່ຽວກັບຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້ ຊ່ວຍໃຫ້ເຮົາສາມາດແຕ້ມແຜນຜັງ ຫຼື ແຜນທີ່ໄດ້ຢ່າງຖືກຕ້ອງຕາມຄວາມເປັນຈິງ!",
  },
};
