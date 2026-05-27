import React from "react";
import { UnitData } from "../units2";

export const unit12Data: UnitData = {
  unitNumber: 12,
  unitTitle: "NaN", // Will be resolved dynamically by main components, or just matched
  unitGoal: "ຮຽນຮູ້ແנວຄວາມຄິດຂອງຮູບຂະຫຍາຍ (Enlarged) ແລະ ຮູບຫຍໍ້ (Reduced), ຄວາມສຳພັນດ້ານຂ້າງ ແລະ ມຸມ ພ້ອມທັງການຄິດໄລ່ມາດຕາສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 136-145",
  keyPoints: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ຄຸນລັກສະນະຂອງຮູບຂະຫຍາຍ ແລະ ຮູບຫຍໍ້"}
        </h3>
        <div style={{ padding: "16px", backgroundColor: "#FFE082", border: "2px solid #FFB300", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
          <div>{"• ຂະໜາດຂອງມຸມທີ່ສົມທຽບກັນ ແມ່ນເທົ່າກັນສະເໝີ (ບໍ່ປ່ຽນແປງ)."}</div>
          <div>{"• ອັດຕາສ່ວນຄວາມຍາວຂ້າງສົມທຽບ ແມ່ນຄືກັນທຸກຂ້າງ (ຂະຫຍາຍ/ຫຍໍ້ສະໝໍ່າສະເໝີ)."}</div>
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
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຖ້າຮູບ B ແມ່ນຮູບຂະຫຍາຍ 2 ເທື່ອຂອງຮູບ A, ຂ້າງທີ່ຍາວ 3 cm ໃນຮູບ A ຈະຍາວຈັກ cm ໃນຮູບ B?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າມຸມໜຶ່ງໃນຮູບ A ມີຂະໜາດ 60°, ມຸມສົມທຽບໃນຮູບ B ຈະມີຂະໜາດຈັກອົງສາ?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"°"}</span>
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
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບມາດຕາສ່ວນ ແລະ ຮູບຫຍໍ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 1000, ຄວາມຍາວໃນແຜນທີ່ 5 cm ຈະເທົ່າກັບໄລຍະທາງຈິງຈັກ m?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(4) ຖ້າຮູບ C ແມ່ນຮູບຫຍໍ້ 1/3 (Reduced to 1/3) ຂອງຮູບ A. ຂ້າງທີ່ຍາວ 15 cm ໃນຮູບ A ຈະຍາວຈັກ cm ໃນຮູບ C?"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"cm"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາມາດຕາສ່ວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px", fontSize: "20px" }}>
              {/* Sub-problem (1) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) 🌊 ຕ້ອງການຊອກຫາຄວາມກວ້າງຂອງແມ່ນ້ຳ. ໃນແຜນວາດຫຍໍ້ ມາດຕາສ່ວນ 1 : 500, ຄວາມກວ້າງຂອງແມ່ນ້ຳແທກໄດ້ 4 cm. ຄວາມກວ້າງຈິງຂອງແມ່ນ້ຳແມ່ນຈັກແມັດ?"}</span>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"m"}</span>
                </div>
              </div>

              {/* Sub-problem (2) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) 🗺️ ໃນແຜນຜັງໂຮງຮຽນ ມາດຕາສ່ວນ 1 : 200, ອາຄານຮຽນມີຄວາມກວ້າງຈິງ 30 m (3,000 cm). ຄວາມກວ້າງຂອງອາຄານຮຽນໃນແຜນຜັງນີ້ຈະແທກໄດ້ຈັກ cm?"}</span>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "24px", fontSize: "20px" }}>
            {/* Sub-problem (1) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) 🗺️ ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນແມ່ນ 1 km (100,000 cm). ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 25,000, ໄລຍະທາງລະຫວ່າງສອງໂຮງຮຽນນີ້ຈະແທກໄດ້ຈັກ cm?"}</span>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>

            {/* Sub-problem (2) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) 🌳 ຕົ້ນໄມ້ໃຫຍ່ຕົ້ນໜຶ່ງສູງ 12 m (1,200 cm). ຖ້າແຕ້ມຮູບຫຍໍ້ຂອງຕົ້ນໄມ້ນີ້ໂດຍໃຊ້ຄວາມສູງ 6 cm, ມາດຕາສ່ວນຂອງຮູບຫຍໍ້ນີ້ແມ່ນ 1 : ຈັກ?"}</span>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ: 1 :"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <span key="u12-ans-1-1">{"(1) 6 cm (ຍ້ອນ 3 × 2 = 6)"}</span>,
          <span key="u12-ans-1-2">{"(2) 60° (ຍ້ອນຂະໜາດມຸມບໍ່ປ່ຽນແປງ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u12-ans-2-1">{"(3) 50 m (ຍ້ອນ 5 × 1,000 = 5,000 cm = 50 m)"}</span>,
          <span key="u12-ans-2-2">{"(4) 5 cm (ຍ້ອນ 15 × 1/3 = 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u12-ans-t1-1">{"(1) 20 m (ຍ້ອນ 4 × 500 = 2,000 cm = 20 m)"}</span>,
          <span key="u12-ans-t1-2">{"(2) 15 cm (ຍ້ອນ 3,000 cm ÷ 200 = 15)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u12-ans-s1-1">{"(1) 4 cm (ຍ້ອນ 100,000 ÷ 25,000 = 4)"}</span>,
          <span key="u12-ans-s1-2">{"(2) 200 (ຍ້ອນ 1,200 cm ÷ 6 cm = 200)"}</span>,
        ],
      },
    ],
    advice: "",
  },
};
