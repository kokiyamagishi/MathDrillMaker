import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພាកທີ I - ບົດທີ 27: ອັດຕາສ່ວນ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄວາມໝາຍຂອງອັດຕາສ່ວນ (Ratio), ການຂຽນອັດຕາສ່ວນໃນຮູບແບບຕ່າງໆ ແລະ ວິທີຊອກຫາອັດຕາສ່ວນທີ່ເທົ່າກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 27 ໜ້າ 175-179",
  keyPoints: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນ (Concept of Ratio)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ອັດຕາສ່ວນ ແມ່ນການປຽບທຽບລະຫວ່າງສອງປະລິມານ ໂດຍການຫານ:"}
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
            <div>{"• ອັດຕາສ່ວນລະຫວ່າງຈຳນວນ a ແລະ b (b ≠ 0) ສາມາດຂຽນໄດ້ 2 ແບບ:"}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px", fontWeight: "bold", fontSize: "1.5rem" }}>
              {"a : b  ຫຼື  "}
              <Fraction num="a" den="b" />
            </div>
            <div>{"• ຕົວຢ່າງ: ໃນຫ້ອງຮຽນມີນັກຮຽນຍິງ 15 ຄົນ ແລະ ຊາຍ 10 ຄົນ."}</div>
            <div style={{ color: "#0D47A1", paddingLeft: "16px" }}>
              {"→ ອັດຕາສ່ວນຂອງນັກຮຽນຍິງ ຕໍ່ ນັກຮຽນຊາຍ ແມ່ນ 15 : 10 (ຫຼື "}
              <Fraction num="15" den="10" />
              {" = "}
              <Fraction num="3" den="2" />
              {")"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ປົກກະຕິແລ້ວ ເພິ່ນນິຍົມຄັດຈ້ອນອັດຕາສ່ວນໃຫ້ເປັນອັດຕາສ່ວນນ້ອຍສຸດສະເໝີເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ອັດຕາສ່ວນເທົ່າກັນ (Equivalent Ratios)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຮົາສາມາດຊອກຫາອັດຕາສ່ວນທີ່ເທົ່າກັນໄດ້ ໂດຍການຄູນ ຫຼື ຫານທັງສອງພົດຂອງອັດຕາສ່ວນດ້ວຍຈຳນວນດຽວກັນ (ທີ່ຕ່າງຈາກ 0):"}
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
            <div>
              <strong>{"• ຫຼັກການຄູນ: "}</strong>{"a : b = (a × k) : (b × k)"}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 2 : 3 = (2 × 2) : (3 × 2) = 4 : 6"}</span>
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong>{"• ຫຼັກການຫານ (ຄັດຈ້ອນ): "}</strong>{"a : b = (a ÷ k) : (b ÷ k)"}
              <br />
              <span style={{ color: "#2E7D32", paddingLeft: "16px" }}>{"ຕົວຢ່າງ: 10 : 15 = (10 ÷ 5) : (15 ÷ 5) = 2 : 3"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສອງອັດຕາສ່ວນເທົ່າກັນ ເມື່ອຄູນໄຂວ້ກັນ ຈະໄດ້ຜົນຄູນເທົ່າກັນສະເໝີ (a × d = b × c)!",
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>
            {"ຈົ່ງຄັດຈ້ອນອັດຕາສ່ວນຕໍ່ໄປນີ້ໃຫ້ເປັນອັດຕາສ່ວນນ້ອຍສຸດ: "}{" "}
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
              <span>{"(1) ອັດຕາສ່ວນ 12 : 18 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ອັດຕາສ່ວນ 25 : 15 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) ອັດຕາສ່ວນ 40 : 10 ="}</span>
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
            {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງເພື່ອໃຫ້ໄດ້ອັດຕາສ່ວນເທົ່າກັນ: "}{" "}
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
              <span>{"(1) 3 : 5 = 9 :"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 24 : 32 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{": 4"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ປຽບທຽບຫົວໜ່ວຍໃຫ້ຄືກັນກ່ອນສະເໝີ. ຕົວຢ່າງ: 1 kg = 1,000 g, ດັ່ງນັ້ນ 300 g ຕໍ່ 1 kg ຈະເປັນ 300 : 1,000 = 3 : 10. ບົດທ້າທາຍ 2: ແກ້ໂຈດສົມທຽບອັດຕາສ່ວນຕົວຈິງ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>
              {"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບອັດຕາສ່ວນປະສົມ: "}{" "}
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
                <span>{"(1) ຈົ່ງຂຽນອັດຕາສ່ວນລະຫວ່າງຄວາມຍາວ 40 cm ຕໍ່ 2 m ໃນຮູບແບບອັດຕາສ່ວນນ້ອຍສຸດ: (ຄຳແນະນຳ: ປ່ຽນ 2 m = 200 cm ກ່ອນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຖ້າຂຽນໃນຮູບແບບເລກສ່ວນ ຈະໄດ້ເລກສ່ວນໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງ: "}{" "}
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
              <span>{"(1) ໃນກະປ໋ອງໜຶ່ງມີໝາກບີສີແດງ 18 ໜ່ວຍ ແລະ ໝາກບີສີຟ້າ 12 ໜ່ວຍ. ອັດຕາສ່ວນຂອງໝາກບີສີແດງ ຕໍ່ ໝາກບີສີຟ້າ ໃນຮູບແບບນ້ອຍສຸດແມ່ນເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ອັດຕາສ່ວນຂອງໝາກບີສີຟ້າ ຕໍ່ ໝາກບີທັງໝົດ ໃນຮູບແບບນ້ອຍສຸດແມ່ນເທົ່າໃດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
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
          <span key="u27-ans-1-1">{"(1) 2 : 3 (ເພາະທັງສອງພົດຫານໃຫ້ 6 ໄດ້ 12 ÷ 6 = 2 ແລະ 18 ÷ 6 = 3)"}</span>,
          <span key="u27-ans-1-2">{"(2) 5 : 3 (ເພາະທັງສອງພົດຫານໃຫ້ 5 ໄດ້ 25 ÷ 5 = 5 ແລະ 15 ÷ 5 = 3)"}</span>,
          <span key="u27-ans-1-3">{"(3) 4 : 1 (ຫຼື 4) (ເພາະທັງສອງພົດຫານໃຫ້ 10 ໄດ້ 40 ÷ 10 = 4 ແລະ 10 ÷ 10 = 1)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u27-ans-2-1">{"(1) 15 (ເພາະ 3 × 3 = 9 ດັ່ງນັ້ນພົດຫຼັງກໍຕ້ອງຄູນ 3 ຈະໄດ້ 5 × 3 = 15)"}</span>,
          <span key="u27-ans-2-2">{"(2) 3 (ເພາະ 32 ÷ 8 = 4 ດັ່ງນັ້ນພົດໜ້າກໍຕ້ອງຫານ 8 ຈະໄດ້ 24 ÷ 8 = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u27-ans-t1-1">{"(1) 1 : 5 (ເພາະ 40 cm : 200 cm = 40 : 200 = 1 : 5)"}</span>,
          <span key="u27-ans-t1-2">{"(2) "}<Fraction num="1" den="5" />{" (ເພາະຂຽນໃນຮູບແບບເລກສ່ວນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u27-ans-s1-1">{"(1) 3 : 2 (ເພາະ 18 : 12 ຫານໃຫ້ 6 ຈະໄດ້ 3 : 2)"}</span>,
          <span key="u27-ans-s1-2">{"(2) 2 : 5 (ເພາະໝາກບີທັງໝົດແມ່ນ 18 + 12 = 30 ໜ່ວຍ. ອັດຕາສ່ວນແມ່ນ 12 : 30 = 2 : 5)"}</span>,
        ],
      },
    ],
    advice: "ອັດຕາສ່ວນແມ່ນການປຽບທຽບຄວາມສຳພັນລະຫວ່າງສອງປະລິມານ. ສິ່ງສຳຄັນແມ່ນຕ້ອງຮັກສາລຳດັບຂອງການປຽບທຽບ ແລະ ແປງຫົວໜ່ວຍໃຫ້ຄືກັນກ່ອນສະເໝີເດີ້!",
  },
};
