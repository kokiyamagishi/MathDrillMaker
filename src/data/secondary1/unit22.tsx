import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ II - ບົດທີ 22: ມາດຕາສ່ວນ (ຕໍ່)",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການຂະຫຍາຍ ແລະ ຍໍ້ຮູບ, ມາດຕາສ່ວນຂະຫຍາຍ (ເຊັ່ນ 5:1) ແລະ ຄວາມສຳພັນລະຫວ່າງມາດຕາສ່ວນຄວາມຍາວ ແລະ ເນື້ອທີ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 22 ໜ້າ 147-152",
  keyPoints: [
    {
      title: "1. ມາດຕາສ່ວນຍໍ້ ແລະ ມາດຕາສ່ວນຂະຫຍາຍ (Reduction & Enlargement)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ມາດຕາສ່ວນມີ 2 ປະເພດຫຼັກ ຂຶ້ນກັບການນຳໃຊ້:"}
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
              gap: "12px",
            }}
          >
            <div>
              <strong>{"• ມາດຕາສ່ວນຍໍ້ (Reduction Scale): "}</strong>{"ໃຊ້ແຕ້ມສິ່ງຂອງໃຫຍ່ໃຫ້ຢູ່ເທິງເຈ້ຍ."}
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 1:100, 1:5,000 (ຄ່າຂອງມາດຕາສ່ວນ < 1)"}</span>
            </div>
            <div style={{ borderTop: "1px solid #BBDEFB", paddingTop: "8px" }}>
              <strong>{"• ມາດຕາສ່ວນຂະຫຍາຍ (Enlargement Scale): "}</strong>{"ໃຊ້ແຕ້ມສິ່ງຂອງນ້ອຍໆ (ແມງໄມ້, ອົງປະກອບເອເລັກໂຕຣນິກ) ໃຫ້ໃຫຍ່ຂຶ້ນ."}
              <br />
              <span style={{ color: "#0D47A1", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 5:1, 10:1 (ຄ່າຂອງມາດຕາສ່ວນ > 1)"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ມາດຕາສ່ວນຂະຫຍາຍ 5:1 ໝາຍຄວາມວ່າ ຄວາມຍາວ 5 cm ໃນຮູບແຕ້ມ ເທົ່າກັບ 1 cm ຕົວຈິງເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ມາດຕາສ່ວນຂອງເນື້ອທີ່ (Area Scale Relation)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຄວາມສຳພັນລະຫວ່າງ ມາດຕາສ່ວນຄວາມຍາວ (k) ແລະ ມາດຕາສ່ວນເນື້ອທີ່:"}
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
              {"• ມາດຕາສ່ວນເນື້ອທີ່ = (ມາດຕາສ່ວນຄວາມຍາວ)² = k²"}
            </div>
            <div>
              {"ຕົວຢ່າງ: ຖ້າມາດຕາສ່ວນຄວາມຍາວແມ່ນ 1:100 (k = "}
              <Fraction num="1" den="100" />
              {")"}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>
                {"→ ມາດຕາສ່ວນເນື້ອທີ່ = ( "}
                <Fraction num="1" den="100" />
                {" )² = "}
                <Fraction num="1" den="10,000" />
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າຂະຫຍາຍຄວາມຍາວເປັນ 2 ເທົ່າ, ເນື້ອທີ່ຈະຂະຫຍາຍເປັນ 2² = 4 ເທົ່າສະເໝີ!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ກ່ຽວກັບມາດຕາສ່ວນຂະຫຍາຍ: "}{" "}
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
              <span>{"(1) ແຕ້ມຕົວມົດໜຶ່ງທີ່ມີຄວາມຍາວຕົວຈິງ 6 mm ດ້ວຍມາດຕາສ່ວນຂະຫຍາຍ 5:1. ຄວາມຍາວໃນຮູບແຕ້ມຈະແມ່ນຈັກ mm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄວາມຍາວໃນຮູບແຕ້ມຄິດເປັນຈັກ cm?:"}</span>
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
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄິດໄລ່ຄວາມສຳພັນລະຫວ່າງ ມາດຕາສ່ວນຄວາມຍາວ ແລະ ເນື້ອທີ່: "}{" "}
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
              <span>{"(1) ຖ້າມາດຕາສ່ວນຄວາມຍາວຂອງສອງຮູບຄ້າຍຄືກັນແມ່ນ 1:10, ມາດຕາສ່ວນເນື້ອທີ່ຂອງພວກມັນຈະແມ່ນ 1 ຕໍ່ກັບເທົ່າໃດ? (ຕອບຕົວເລກພູດ ເຊັ່ນ 100):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: 1 :"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າມາດຕາສ່ວນຄວາມຍາວແມ່ນ 3:1 (ຂະຫຍາຍ 3 ເທົ່າ), ເນື້ອທີ່ຂອງຮູບຂະຫຍາຍຈະໃຫຍ່ກວ່າເນື້ອທີ່ຕົວຈິງຈັກເທົ່າ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ເທົ່າ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຖ້າຮູ້ເນື້ອທີ່ຕົວຈິງ ແລະ ມາດຕາສ່ວນເນື້ອທີ່, ສາມາດຊອກຫາເນື້ອທີ່ໃນແຜນຜັງໄດ້. ບົດທ້າທາຍ 2: ປ່ຽນຫົວໜ່ວຍເນື້ອທີ່ຈາກ m² ໄປ cm² ໂດຍ 1 m² = 10,000 cm².",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດກ່ຽວກັບເນື້ອທີ່ໃນແຜນຜັງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ลວມ 5 ຄະແນນ)"}</span>
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
                <span>{"(1) ເຮືອນຫຼັງໜຶ່ງມີເນື້ອທີ່ຕົວຈິງ 150 m². ໃນແຜນຜັງມາດຕາສ່ວນຄວາມຍາວ 1:100. ຖາມວ່າມີມາດຕາສ່ວນເນື້ອທີ່ແມ່ນ 1 ຕໍ່ກັບເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: 1 :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ເນື້ອທີ່ຂອງເຮືອນໃນແຜນຜັງຈະມີຈັກ cm²? (ຄຳແນະນຳ: 150 m² = 1,500,000 cm²):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຂະຫຍາຍຮູບໃນຫ້ອງທົດລອງ: "}{" "}
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
              <span>{"(1) ເຊວພືດຊະນິດໜຶ່ງມີຄວາມກວ້າງຕົວຈິງ 0.2 mm. ໃນແຕ້ມດ້ວຍມາດຕາສ່ວນຂະຫຍາຍ 100:1. ຄວາມກວ້າງໃນແຕ້ມຈະແມ່ນຈັກ mm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຄວາມກວ້າງໃນຮູບແຕ້ມຄິດເປັນຈັກ cm?:"}</span>
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
          <span key="u22-ans-1-1">{"(1) 30 (ເພາະ 6 mm × 5 = 30 mm)"}</span>,
          <span key="u22-ans-1-2">{"(2) 3 (ເພາະ 30 mm ÷ 10 = 3 cm)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u22-ans-2-1">{"(1) 100 (ເພາະ (1/10)² = 1/100)"}</span>,
          <span key="u22-ans-2-2">{"(2) 9 (ເພາະ 3² = 9 ເທົ່າ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u22-ans-t1-1">{"(1) 10000 (ເພາະ (1/100)² = 1/10,000)"}</span>,
          <span key="u22-ans-t1-2">{"(2) 150 (ເພາະ 1,500,000 ÷ 10,000 = 150 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u22-ans-s1-1">{"(1) 20 (ເພາະ 0.2 mm × 100 = 20 mm)"}</span>,
          <span key="u22-ans-s1-2">{"(2) 2 (ເພາະ 20 mm ÷ 10 = 2 cm)"}</span>,
        ],
      },
    ],
    advice: "ໃນມາດຕາສ່ວນຂະຫຍາຍ ເຊັ່ນ A:B (ທີ່ A > B), ເຮົາຈະເອົາຄ່າຕົວຈິງຄູນໃຫ້ A ເພື່ອໃຫ້ໄດ້ຂະໜາດໃນຮູບແຕ້ມ. ແລະ ຢ່າລືມວ່າ ມາດຕາສ່ວນເນື້ອທີ່ ແມ່ນເທົ່າກັບ ມາດຕາສ່ວນຄວາມຍາວຍົກກຳລັງສອງ ສະເໝີເດີ້!",
  },
};
