import React from "react";
import { UnitData } from "../units2";

export const unit18Data: UnitData = {
  unitNumber: 18,
  unitTitle: "ພາກທີ II - ບົດທີ 18: ມຸມ, ການວັດແທກມຸມ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈກ່ຽວກັບປະເພດຂອງມຸມ (ມຸມແຫຼມ, ມຸມສາກ, ມຸມຫວາ, ມຸມພຽງ), ການວັດແທກຂະໜາດຂອງມຸມ ແລະ ການຄິດໄລ່ມຸມພື້ນຖານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 18 ໜ້າ 122-128",
  keyPoints: [
    {
      title: "1. ປະເພດຂອງມຸມ (Types of Angles)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ມຸມປະກອບມາຈາກສອງເສັ້ນເຄິ່ງຊື່ທີ່ມີເມັດຕົ້ນຮ່ວມກັນ. ຂະໜາດຂອງມຸມວັດແທກເປັນອົງສາ (°):"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div>{"• ມຸມແຫຼມ (Acute Angle): ມຸມທີ່ມີຂະໜາດນ້ອຍກວ່າ 90°"}</div>
            <div>{"• ມຸມສາກ (Right Angle): ມຸມທີ່ມີຂະໜາດເທົ່າກັບ 90°"}</div>
            <div>{"• ມຸມຫວາ (Obtuse Angle): ມຸມທີ່ໃຫຍ່ກວ່າ 90° ແຕ່ ນ້ອຍກວ່າ 180°"}</div>
            <div>{"• ມຸມພຽງ (Straight Angle): ມຸມທີ່ມີຂະໜາດເທົ່າກັບ 180°"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ມຸມສາກແມ່ນມຸມທີ່ພົບເຫັນຫຼາຍທີ່ສຸດ ເຊັ່ນ ມຸມຂອງປຶ້ມ, ມຸມຂອງໂຕະ ຫຼື ມຸມຂອງຫ້ອງຮຽນເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ມຸມປະກອບສອງ ແລະ ມຸມເພີ່ມສອງ (Complementary & Supplementary)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄວາມສຳພັນລະຫວ່າງສອງມຸມທີ່ຄວນຈື່:"}
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
            <div>{"• ມຸມປະກອບສອງ (Complementary): ສອງມຸມທີ່ມີຜົນບວກເທົ່າກັບ 90°"}</div>
            <div style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 30° + 60° = 90°"}</div>
            <div>{"• ມຸມເພີ່ມສອງ (Supplementary): ສອງມຸມທີ່ມີຜົນບວກເທົ່າກັບ 180°"}</div>
            <div style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 120° + 60° = 180°"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າຮູ້ມຸມໜຶ່ງ ເຮົາສາມາດຊອກຫາມຸມທີ່ເຫຼືອໄດ້ງ່າຍໆ ໂດຍເອົາ 90° ຫຼື 180° ມາລົບອອກ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງບອກປະເພດຂອງມຸມທີ່ມີຂະໜາດຕໍ່ໄປນີ້ (ຕອບ 'ມຸມແຫຼມ', 'ມຸມສາກ', 'ມຸມຫວາ' ຫຼື 'ມຸມພຽງ'): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ມຸມ 45° ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ມຸມ 90° ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) ມຸມ 135° ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) ມຸມ 180° ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຊອກຫາຂະໜາດຂອງມຸມທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ມຸມ x ປະກອບກັບມຸມ 35° ເປັນມຸມສາກ (90°). ມຸມ x ມີຂະໜາດຈັກອົງສາ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ມຸມ y ເພີ່ມກັບມຸມ 110° ເປັນມຸມພຽງ (180°). ມຸມ y ມີຂະໜາດຈັກອົງສາ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ມຸມອ້ອມເມັດໜຶ່ງມີຜົນບວກເທົ່າກັບ 360° ສະເໝີ. ບົດທ້າທາຍ 2: ຜົນບວກຂອງມຸມໃນຮູບສາມແຈເທົ່າກັບ 180°.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບມຸມຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) ມີ 3 ມຸມອ້ອມເມັດຮ່ວມກັນ. ຖ້າຮູ້ 2 ມຸມແມ່ນ 120° ແລະ 150°, ມຸມທີ 3 ຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຮູບສາມແຈໜຶ່ງມີສອງມຸມໃນເທົ່າກັບ 50° ແລະ 60°. ມຸມໃນທີສາມຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາປະສົມ: "}{" "}
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
              <span>{"(1) ຖ້າມຸມສອງມຸມເພີ່ມກັນ ແລະ ມີຂະໜາດເທົ່າກັນ, ແຕ່ລະມຸມຈະມີຂະໜາດຈັກອົງສາ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ເຄິ່ງໜຶ່ງຂອງມຸມພຽງ ບວກກັບ ເຄິ່ງໜຶ່ງຂອງມຸມສາກ ຈະເທົ່າກັບຈັກອົງສາ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
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
          <span key="u18-ans-1-1">{"(1) ມຸມແຫຼມ (ເພາະ 45° < 90°)"}</span>,
          <span key="u18-ans-1-2">{"(2) ມຸມສາກ (ເພາະເທົ່າກັບ 90° ພໍດີ)"}</span>,
          <span key="u18-ans-1-3">{"(3) ມຸມຫວາ (ເພາະ 90° < 135° < 180°)"}</span>,
          <span key="u18-ans-1-4">{"(4) ມຸມພຽງ (ເພາະເທົ່າກັບ 180° ພໍດີ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u18-ans-2-1">{"(1) 55 (ເພາະ 90° - 35° = 55°)"}</span>,
          <span key="u18-ans-2-2">{"(2) 70 (ເພາະ 180° - 110° = 70°)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u18-ans-t1-1">{"(1) 90 (ເພາະຜົນບວກມຸມອ້ອມເມັດແມ່ນ 360°, ດັ່ງນັ້ນ 360° - (120° + 150°) = 90°)"}</span>,
          <span key="u18-ans-t1-2">{"(2) 70 (ເພາະຜົນບວກມຸມໃນຮູບສາມແຈແມ່ນ 180°, ດັ່ງນັ້ນ 180° - (50° + 60°) = 70°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u18-ans-s1-1">{"(1) 90 (ເພາະສອງມຸມເພີ່ມກັນມີຜົນບວກ 180°, ຖ້າເທົ່າກັນແມ່ນ 180° ÷ 2 = 90°)"}</span>,
          <span key="u18-ans-s1-2">{"(2) 135 (ເພາະເຄິ່ງໜຶ່ງຂອງມຸມພຽງແມ່ນ 180° ÷ 2 = 90°, ເຄິ່ງໜຶ່ງຂອງມຸມສາກແມ່ນ 90° ÷ 2 = 45°. ຜົນບວກແມ່ນ 90° + 45° = 135°)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ຈຳປະເພດຂອງມຸມໃຫ້ດີ! ມຸມແຫຼມຈະແຫຼມໆນ້ອຍໆ (< 90°), ມຸມຫວາຈະກວ້າງໆ (> 90°), ມຸມສາກແມ່ນ 90° ແລະ ມຸມພຽງແມ່ນເສັ້ນຊື່ 180° ເດີ້!",
  },
};
