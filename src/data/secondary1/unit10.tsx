import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ I - ບົດທີ 10: ເລກຄຳນວນ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບລຳດັບການຄິດໄລ່ເລກທີ່ມີວົງເລັບ ແລະ ສີ່ປະການປົນກັນ, ການນໍາໃຊ້ກົດເກນຕ່າງໆ ແລະ ການຄິດໄລ່ເລກສ່ວນປົນທົດສະນິຍົມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 71-75",
  keyPoints: [
    {
      title: "1. ລຳດັບການຄິດໄລ່ (Order of Operations)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອມີຫຼາຍເຄື່ອງໝາຍປະສົມກັນໃນບັ້ງເລກດຽວ, ເຮົາຕ້ອງປະຕິບັດຕາມລຳດັບຄວາມສຳຄັນດັ່ງນີ້:"}
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
            <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"ລຳດັບຄວາມສຳຄັນ:"}</div>
            <div>{"1. ຄິດໄລ່ໃນວົງເລັບກ່ອນສະເໝີ: ວົງເລັບມົນ ( ) → ວົງເລັບຂໍ [ ] → ວົງເລັບປີກກາ { }"}</div>
            <div>{"2. ຄິດໄລ່ ເລກຄູນ (×) ແລະ ເລກຫານ (÷) ຈາກຊ້າຍຫາຂວາ"}</div>
            <div>{"3. ຄິດໄລ່ ເລກບວກ (+) ແລະ ເລກລົບ (-) ຈາກຊ້າຍຫາຂວາ"}</div>
            <div style={{ borderTop: "1px solid #B3E5FC", paddingTop: "8px", marginTop: "4px" }}>
              {"• ຕົວຢ່າງ: 12 - 3 × 2 = 12 - 6 = 6"}
              <br />
              {"• ຕົວຢ່າງ: (12 - 3) × 2 = 9 × 2 = 18"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຢ່າລືມຄູນຫານກ່ອນບວກລົບ ແລະ ເລີ່ມເຮັດຈາກໃນວົງເລັບອອກມາທາງນອກເດີ້!",
        isBlue: true,
      },
    },
    {
      title: "2. ການນຳໃຊ້ກົດເກນການແຈກສ່ວນ (Distribution Law)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເຮົາສາມາດນຳໃຊ້ກົດເກນການແຈກສ່ວນ ເພື່ອຊ່ວຍໃຫ້ການຄິດໄລ່ງ່າຍຂຶ້ນ ແລະ ໄວຂຶ້ນ:"}
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
              gap: "10px",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#2E7D32" }}>{"ສູດ: a × (b + c) = a × b + a × c"}</div>
            <div>
              <strong>{"ຕົວຢ່າງ 1: "}</strong>{"25 × 104 = 25 × (100 + 4)"}
              <br />
              <span style={{ paddingLeft: "80px" }}>{"= (25 × 100) + (25 × 4)"}</span>
              <br />
              <span style={{ paddingLeft: "80px" }}>{"= 2500 + 100 = 2600"}</span>
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong>{"ຕົວຢ່າງ 2 (ກົດເກນປີ້ນ): "}</strong>{"47 × 15 + 47 × 85"}
              <br />
              <span style={{ paddingLeft: "155px" }}>{"= 47 × (15 + 85)"}</span>
              <br />
              <span style={{ paddingLeft: "155px" }}>{"= 47 × 100 = 4700"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການແຍກຕົວເລກເປັນຫຼັກຮ້ອຍ (100 + 4) ຫຼື ຫຼັກສິບ ຈະຊ່ວຍໃຫ້ເຮົາຄິດໄລ່ໃນໃຈໄດ້ງ່າຍຂຶ້ນຫຼາຍ!",
      },
    },
    {
      title: "3. ເລກສ່ວນປົນເລກທົດສະນິຍົມ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເມື່ອມີເລກສ່ວນ ແລະ ເລກທົດສະນິຍົມປົນກັນ, ວິທີທີ່ດີທີ່ສຸດແມ່ນປ່ຽນໃຫ້ເປັນປະເພດດຽວກັນ (ແນະນຳປ່ຽນເປັນເລກສ່ວນເພື່ອປ້ອງກັນເລກເສດບໍ່ສິ້ນສຸດ):"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>
              <strong>{"ຕົວຢ່າງ 1: "}</strong>
              <Fraction num="1" den="2" />
              {" + 0.5 = "}
              <Fraction num="1" den="2" />
              {" + "}
              <Fraction num="1" den="2" />
              {" = 1"}
            </div>
            <div>
              <strong>{"ຕົວຢ່າງ 2: "}</strong>
              <Fraction num="3" den="5" />
              {" × 0.2 = "}
              <Fraction num="3" den="5" />
              {" × "}
              <Fraction num="1" den="5" />
              {" = "}
              <Fraction num="3" den="25" />
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "0.5 ເທົ່າກັບເຄິ່ງໜຶ່ງ (1/2), 0.2 ເທົ່າກັບ 1/5 ແລະ 0.25 ເທົ່າກັບ 1/4 ເດີ້!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຜົນຄິດໄລ່ຂອງເລກທີ່ມີວົງເລັບຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1.66 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) 20 - 4 × 3 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) (20 - 4) × 3 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 15 + 30 ÷ (6 - 1) ="}</span>
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
            {"ຈົ່ງຄິດໄລ່ເລກທີ່ມີວົງເລັບຂໍ [ ] ດັ່ງຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) 5 × [18 - (3 + 5)] ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 40 - [2 × (15 - 5)] ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ນຳໃຊ້ກົດເກນການແຈກສ່ວນເພື່ອຄິດໄລ່ໄດ້ງ່າຍຂຶ້ນ (25 × 104 = 25 × (100 + 4)). ບົດທ້າທາຍ 2: ປ່ຽນເລກທົດສະນິຍົມເປັນເລກສ່ວນກ່ອນ ແລ້ວຈຶ່ງດຳເນີນການບວກ ຫຼື ຄູນ (0.5 = 1/2, 0.2 = 1/5)!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງນຳໃຊ້ກົດເກນການແຈກສ່ວນ ເພື່ອຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
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
                <span>{"(1) 25 × (100 + 4) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) 18 × (10 - 0.1) ="}</span>
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
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນປົນເລກທົດສະນິຍົມລຸ່ມນີ້ (ຕອບເປັນເລກສ່ວນ ຫຼື ເລກຖ້ວນ): "}{" "}
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
                <span>{"(1)"} <Fraction num="1" den="2" /> {"+ 0.5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2)"} <Fraction num="3" den="5" /> {"× 0.2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ຜົນລຸ່ມນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) 50 - 2 × [15 - (6 ÷ 2)] ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) (12 + 8) × (30 - 25) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3)"} <Fraction num="3" den="4" /> {"- 0.5 ="}</span>
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
            {"ຈົ່ງນຳໃຊ້ກົດເກນການແຈກສ່ວນແບບປີ້ນ ເພື່ອຄິດໄລ່ເລກຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) 47 × 15 + 47 × 85 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 125 × 8.8 ="}</span>
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
          <span key="u10-ans-1-1">{"(1) 8 (ຄິດໄລ່ຄູນກ່ອນ: 20 - 12 = 8)"}</span>,
          <span key="u10-ans-1-2">{"(2) 48 (ຄິດໄລ່ໃນວົງເລັບກ່ອນ: 16 × 3 = 48)"}</span>,
          <span key="u10-ans-1-3">{"(3) 21 (ຄິດໄລ່ໃນວົງເລັບ (6-1)=5, ຈາກນັ້ນຫານ 30÷5=6, ສຸດທ້າຍບວກ 15+6=21)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u10-ans-2-1">{"(1) 50 (ຄິດໄລ່ໃນວົງເລັບ (3+5)=8, ວົງເລັບຂໍ [18-8]=10, ສຸດທ້າຍຄູນ 5×10=50)"}</span>,
          <span key="u10-ans-2-2">{"(2) 20 (ຄິດໄລ່ໃນວົງເລັບ (15-5)=10, ວົງເລັບຂໍ [2×10]=20, ສຸດທ້າຍລົບ 40-20=20)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u10-ans-t1-1">{"(1) 2600 (ຄິດໄລ່ຈາກ 25×100 + 25×4 = 2500 + 100 = 2600)"}</span>,
          <span key="u10-ans-t1-2">{"(2) 178.2 (ຄິດໄລ່ຈາກ 18×10 - 18×0.1 = 180 - 1.8 = 178.2)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u10-ans-t2-1">{"(1) 1 (ປ່ຽນ 0.5 ເປັນ 1/2, ຈະໄດ້ 1/2 + 1/2 = 1)"}</span>,
          <span key="u10-ans-t2-2">{"(2) "} <Fraction num="3" den="25" /> {" ຫຼື 0.12 (ປ່ຽນ 0.2 ເປັນ 1/5, ຈະໄດ້ 3/5 × 1/5 = 3/25)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u10-ans-s1-1">{"(1) 26 (ຄິດໄລ່ 6÷2=3, ວົງເລັບຂໍ [15-3]=12, ຄູນ 2×12=24, ສຸດທ້າຍລົບ 50-24=26)"}</span>,
          <span key="u10-ans-s1-2">{"(2) 100 (ຄິດໄລ່ (12+8)=20, (30-25)=5, ສຸດທ້າຍຄູນ 20×5=100)"}</span>,
          <span key="u10-ans-s1-3">{"(3) "} <Fraction num="1" den="4" /> {" ຫຼື 0.25 (ປ່ຽນ 0.5 ເປັນ 2/4, ຈະໄດ້ 3/4 - 2/4 = 1/4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u10-ans-s2-1">{"(1) 4700 (ແຍກຕົວຄູນຮ່ວມ: 47 × (15 + 85) = 47 × 100 = 4700)"}</span>,
          <span key="u10-ans-s2-2">{"(2) 1100 (ຄິດໄລ່ຈາກ 125 × (8 + 0.8) = 125×8 + 125×0.8 = 1000 + 100 = 1100)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງຈື່ໄວ້ວ່າ ວົງເລັບຕ້ອງມາເປັນອັນດັບ 1, ຕາມດ້ວຍຄູນຫານ ແລະ ບວກລົບ. ການນຳໃຊ້ກົດເກນການແຈກສ່ວນຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ໄວຂຶ້ນຫຼາຍເດີ້!",
  },
};
