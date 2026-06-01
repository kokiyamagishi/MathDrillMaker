import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit14Data: UnitData = {
  unitNumber: 14,
  unitTitle: "ພາກທີ II - ບົດທີ 14: ການບວກ, ການລົບ ແລະ ການຄູນລວງຍາວ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບການບວກ, ການລົບ ແລະ ການຄູນລວງຍາວໃນຫົວໜ່ວຍວັດແທກທີ່ຕ່າງກັນ ໂດຍການປ່ຽນຫົວໜ່ວຍໃຫ້ເປັນລະບົບດຽວກັນກ່ອນຄິດໄລ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 97-102",
  subSections: [
    {
      title: "1. ພື້ນຖານຫົວໜ່ວຍວັດແທກລວງຍາວ (Length Conversion)",
      keyPoint: {
      title: "1. ພື້ນຖານຫົວໜ່ວຍວັດແທກລວງຍາວ (Length Conversion)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອຄິດໄລ່ລວງຍາວໃຫ້ຖືກຕ້ອງ, ເຮົາຕ້ອງເຂົ້າໃຈການພົວພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກລະບົບແມັດ:"}
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
              gap: "8px",
            }}
          >
            <div>{"• 1 km (ກິໂລແມັດ) = 1,000 m"}</div>
            <div>{"• 1 m (ແມັດ) = 100 cm"}</div>
            <div>{"• 1 m = 10 dm (ເດຊີແມັດ)"}</div>
            <div>{"• 1 dm = 10 cm"}</div>
            <div>{"• 1 m = 1,000 mm (ມິລິແມັດ)"}</div>
            <div>{"• 1 cm = 10 mm"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ຫົວໜ່ວຍແມັດ (m), ຊັງຕີແມັດ (cm) ແລະ ມິລິແມັດ (mm) ແມ່ນຫົວໜ່ວຍທີ່ນິຍົມໃຊ້ຫຼາຍທີ່ສຸດເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຜົນບວກລວງຍາວລຸ່ມນີ້ ໂດຍຕອບເປັນຫົວໜ່ວຍທີ່ກຳນົດໃຫ້: "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) 1 m + 50 cm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 2.5 m + 30 cm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) 12 cm + 50 mm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ການບວກ ແລະ ການລົບລວງຍາວ (Addition & Subtraction)",
      keyPoint: {
      title: "2. ການບວກ ແລະ ການລົບລວງຍາວ (Addition & Subtraction)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຫຼັກການສຳຄັນ: ຖ້າຫົວໜ່ວຍວັດແທກຕ່າງກັນ, ເຮົາຕ້ອງ ປ່ຽນໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນ ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບກັນ:"}
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
              <strong>{"ຕົວຢ່າງ 1 (ການບວກ): "}</strong>{"1.5 m + 45 cm"}
              <br />
              <span style={{ paddingLeft: "40px" }}>{"= 150 cm + 45 cm = 195 cm (ຫຼື 1.95 m)"}</span>
            </div>
            <div style={{ borderTop: "1px solid #C8E6C9", paddingTop: "8px" }}>
              <strong>{"ຕົວຢ່າງ 2 (ການລົບ): "}</strong>{"3 m - 80 cm"}
              <br />
              <span style={{ paddingLeft: "40px" }}>{"= 300 cm - 80 cm = 220 cm (ຫຼື 2.2 m)"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ປົກກະຕິແລ້ວ ປ່ຽນຫົວໜ່ວຍໃຫຍ່ໃຫ້ເປັນຫົວໜ່ວຍນ້ອຍ (ເຊັ່ນ ແມັດ ເປັນ ຊັງຕີແມັດ) ຈະຊ່ວຍໃຫ້ບໍ່ຕິດເລກຈຸດທົດສະນິຍົມ ແລະ ຄິດໄລ່ງ່າຍຂຶ້ນ!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຜົນລົບລວງຍາວລຸ່ມນີ້ ໂດຍຕອບເປັນຫົວໜ່ວຍທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) 3 m - 80 cm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 1.5 km - 500 m ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "3. ການຄູນລວງຍາວ (Multiplication of Lengths)",
      keyPoint: {
      title: "3. ການຄູນລວງຍາວ (Multiplication of Lengths)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຄູນລວງຍາວແມ່ນການຄິດໄລ່ເມື່ອເອົາລວງຍາວທີ່ເທົ່າກັນຫຼາຍໆສ່ວນມາຕໍ່ກັນ:"}
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
              gap: "6px",
            }}
          >
            <div>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ເຊືອກເສັ້ນໜຶ່ງຍາວ 80 cm. ຖ້າເອົາ 5 ເສັ້ນມາຕໍ່ກັນ ຈະຍາວທັງໝົດຈັກແມັດ?"}
              <br />
              <span style={{ paddingLeft: "80px", color: "#E65100", fontWeight: "bold" }}>{"ຄິດໄລ່: 80 cm × 5 = 400 cm"}</span>
              <br />
              <span style={{ paddingLeft: "80px", color: "#E65100", fontWeight: "bold" }}>{"→ ປ່ຽນເປັນແມັດ: 400 cm = 4 m"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຢ່າລືມກວດສອບເດີວ່າ ໂຈດຖາມຫາຫົວໜ່ວຍແມັດ (m) ຫຼື ຊັງຕີແມັດ (cm) ເພື່ອປ່ຽນຄຳຕອບໃຫ້ຖືກຕ້ອງ!",
        isBlue: true,
      },
    },
      problems: [
        
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໄລຍະທາງທັງໝົດຂອງການຕໍ່ໄມ້ ຫຼື ເຊືອກ ແມ່ນການຄູນລວງຍາວໜຶ່ງເສັ້ນໃຫ້ຈຳນວນເສັ້ນ (80 cm × 5 = 400 cm = 4 m). ບົດທ້າທາຍ 2: ປ່ຽນທຸກຢ່າງໃຫ້ເປັນແມັດ ຫຼື ຊັງຕີແມັດກ່ອນບວກກັນ ແລ້ວຈຶ່ງປ່ຽນເປັນ km ຫຼື cm ຕາມທີ່ໂຈດຖາມເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການຄູນລວງຍາວຕໍ່ໄປນີ້: "}{" "}
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
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ໄມ້ເສັ້ນໜຶ່ງຍາວ 80 cm. ຖ້າເອົາ 5 ເເສັ້ນມາຕໍ່ກັນ ຈະຍາວທັງໝົດຈັກ ແມັດ (m)?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"m"}</span>
                </div>
              </div>
              <div style={{ display: "column", gap: "8px" }}>
                <span>{"(2) ເຊືອກເສັ້ນໜຶ່ງຍາວ 1.2 m. ຖ້າຊື້ມາ 3 ເສັ້ນ ຈະຍາວທັງໝົດຈັກ ຊັງຕີແມັດ (cm)?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px", marginTop: "8px" }}>
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
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຊີວິດປະຈຳວັນກ່ຽວກັບລວງຍາວລຸ່ມນີ້: "}{" "}
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
                <span>{"(1) ນາງ ຈຳພາ ຍ່າງໄດ້ໄລຍະທາງ 1 km 200 m ໃນຕອນເຊົ້າ ແລະ 800 m ໃນຕອນແລງ. ລວມທັງໝົດລາວຍ່າງໄດ້ຈັກ ກິໂລແມັດ (km)?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"km"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ປຶ້ມແບບຮຽນວິຊາຄະນິດສາດໜາ 8 mm. ຖ້າວາງຊ້ອນກັນ 10 ຫົວ ຈະສູງທັງໝົດຈັກ ຊັງຕີແມັດ (cm)?"}</span>
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
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈທັງໝົດ: "}{" "}
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
              <span>{"(1) 4.5 m + 150 cm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 500 m × 4 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"km"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) 80 cm - 300 mm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາລວງຍາວປະສົມຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ໂຕະນັກຮຽນໜຶ່ງຍາວ 1.8 m. ຖ້າເອົາໂຕະ 4 ໂຕມາຕໍ່ລຽງກັນ ຈະຍາວທັງໝົດຈັກ ແມັດ (m)?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ເສັ້ນທາງແລ່ນຮອບສະໜາມກິລາແຫ່ງໜຶ່ງຍາວ 400 m. ຖ້າແລ່ນໄດ້ 5 ຮອບ ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ ກິໂລແມັດ (km)?"}</span>
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
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u14-ans-1-1">{"(1) 150 cm (ເພາະ 1 m = 100 cm, ດັ່ງນັ້ນ 100 + 50 = 150)"}</span>,
          <span key="u14-ans-1-2">{"(2) 280 cm (2.5 m = 250 cm, ດັ່ງນັ້ນ 250 + 30 = 280)"}</span>,
          <span key="u14-ans-1-3">{"(3) 17 cm (50 mm = 5 cm, ດັ່ງນັ້ນ 12 + 5 = 17)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u14-ans-2-1">{"(1) 220 cm (3 m = 300 cm, ດັ່ງນັ້ນ 300 - 80 = 220)"}</span>,
          <span key="u14-ans-2-2">{"(2) 1000 m (1.5 km = 1500 m, ດັ່ງນັ້ນ 1500 - 500 = 1000)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u14-ans-t1-1">{"(1) 4 m (80 cm × 5 = 400 cm = 4 m)"}</span>,
          <span key="u14-ans-t1-2">{"(2) 360 cm (1.2 m = 120 cm, 120 × 3 = 360 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u14-ans-t2-1">{"(1) 2 km (1 km 200 m = 1200 m, 1200 + 800 = 2000 m = 2 km)"}</span>,
          <span key="u14-ans-t2-2">{"(2) 8 cm (8 mm × 10 = 80 mm = 8 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u14-ans-s1-1">{"(1) 6 m (4.5 m = 450 cm, 450 + 150 = 600 cm = 6 m)"}</span>,
          <span key="u14-ans-s1-2">{"(2) 2 km (500 m × 4 = 2000 m = 2 km)"}</span>,
          <span key="u14-ans-s1-3">{"(3) 50 cm (300 mm = 30 cm, 80 - 30 = 50)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u14-ans-s2-1">{"(1) 7.2 m (1.8 m × 4 = 7.2)"}</span>,
          <span key="u14-ans-s2-2">{"(2) 2 km (400 m × 5 = 2000 m = 2 km)"}</span>,
        ],
      },
    ],
    advice: "ໃນການຄິດໄລ່ລວງຍາວ ຕ້ອງປ່ຽນຫົວໜ່ວຍໃຫ້ຄືກັນກ່ອນສະເໝີ. ຢ່າລືມການພົວພັນຫຼັກ: 1 km = 1,000 m ແລະ 1 m = 100 cm = 1,000 mm ເດີ້!",
  },
};
