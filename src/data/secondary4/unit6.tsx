import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit6Data: UnitData = {
  unitNumber: 6,
  unitTitle: "ພາກທີ I - ບົດທີ 6: ອັດຕາສ່ວນ ແລະ ອັດຕາສ່ວນພົວພັນ",
  unitGoal:
    "ເຂົ້າໃຈນິຍາມຂອງອັດຕາສ່ວນ, ການພົວພັນກົງ (Direct Proportion) ແລະ ການພົວພັນປີ້ນ (Inverse Proportion) ພ້ອມທັງສາມາດແກ້ບັນຫາຕົວຈິງໄດ້",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 6 ໜ້າ 31-36",
  subSections: [
    {
      title: "1. ການພົວພັນກົງ ແລະ ການພົວພັນປີ້ນ (Direct & Inverse Proportions)",
      keyPoint: {
      title: "1. ການພົວພັນກົງ ແລະ ການພົວພັນປີ້ນ (Direct & Inverse Proportions)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການພົວພັນລະຫວ່າງສອງປະລິມານ x ແລະ y ມີສອງຮູບແບບພື້ນຖານຄື:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ color: "#E65100" }}>{"• ການພົວພັນກົງ (Direct Proportion): "}</strong>
              <span>{"ເມື່ອ x ເພີ່ມຂຶ້ນ y ກໍເພີ່ມຂຶ້ນຕາມອັດຕາສ່ວນຄົງທີ່:"}</span>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#555" }}>
                {"y = kx  (k ແມ່ນສຳປະສິດພົວພັນກົງ)  ⇒  "}
                <Fraction num="y" den="x" />
                {" = k"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"• ການພົວພັນປີ້ນ (Inverse Proportion): "}</strong>
              <span>{"ເມື່ອ x ເພີ່ມຂຶ້ນ y ຈະຫຼຸດລົງຕາມອັດຕາສ່ວນຄົງທີ່:"}</span>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#555" }}>
                {"y = "}
                <Fraction num="k" den="x" />
                {"  (k ແມ່ນສຳປະສິດພົວພັນປີ້ນ)  ⇒  x × y = k"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງຈື່ໄວ້ວ່າ ຖ້າເປັນພົວພັນກົງ ຜົນຫານຈະຄົງທີ່; ແຕ່ຖ້າເປັນພົວພັນປີ້ນ ຜົນຄູນຈະຄົງທີ່ສະເໝີ ເດີ້!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາສຳປະສິດ ແລະ ຄ່າຂອງຕົວປ່ຽນໃນອັດຕາສ່ວນພົວພັນກົງ: "}{" "}
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
              <span>{"(1) ໃຫ້ y ພົວພັນກົງກັບ x. ເມື່ອ x = 3 ຈະໄດ້ y = 12. ສຳປະສິດພົວພັນກົງ k ແມ່ນເທົ່າໃດ? (k = y/x):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈົ່ງຊອກຫາຄ່າຂອງ y ເມື່ອ x = 5 (y = kx):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ເສັ້ນສະແດງການພົວພັນ (Graphical Representation)",
      keyPoint: {
      title: "2. ເສັ້ນສະແດງການພົວພັນ (Graphical Representation)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Direct Proportion SVG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ພົວພັນກົງ (y = 2x)"}</span>
              <svg viewBox="0 0 120 100" style={{ width: "120px", height: "100px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                <line x1="15" y1="85" x2="105" y2="85" stroke="#333" strokeWidth="1" />
                <line x1="20" y1="90" x2="20" y2="10" stroke="#333" strokeWidth="1" />
                <line x1="20" y1="85" x2="90" y2="15" stroke="#E91E63" strokeWidth="2" />
                <text x="105" y="93" fill="#333" fontSize="8">{"x"}</text>
                <text x="12" y="15" fill="#333" fontSize="8">{"y"}</text>
              </svg>
            </div>
            {/* Inverse Proportion SVG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.125rem", color: "#666", marginBottom: "4px" }}>{"ພົວພັນປີ້ນ (y = 12/x)"}</span>
              <svg viewBox="0 0 120 100" style={{ width: "120px", height: "100px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                <line x1="15" y1="85" x2="105" y2="85" stroke="#333" strokeWidth="1" />
                <line x1="20" y1="90" x2="20" y2="10" stroke="#333" strokeWidth="1" />
                <path d="M 25,20 Q 35,70 95,80" fill="none" stroke="#2196F3" strokeWidth="2" />
                <text x="105" y="93" fill="#333" fontSize="8">{"x"}</text>
                <text x="12" y="15" fill="#333" fontSize="8">{"y"}</text>
              </svg>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເສັ້ນສະແດງການພົວພັນກົງຈະເປັນເສັ້ນຊື່ຜ່ານເມັດເຄົ້າ O, ສ່ວນການພົວພັນປີ້ນຈະເປັນເສັ້ນໂຄ້ງ (Hyperbola) ເດີ້!",
      },
    },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາສຳປະສິດ ແລະ ຄ່າຂອງຕົວປ່ຽນໃນອັດຕາສ່ວນພົວພັນປີ້ນ: "}{" "}
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
              <span>{"(1) ໃຫ້ y ພົວພັນປີ້ນກັບ x. ເມື່ອ x = 2 ຈະໄດ້ y = 6. ສຳປະສິດພົວພັນປີ້ນ k ແມ່ນເທົ່າໃດ? (k = x × y):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈົ່ງຊອກຫາຄ່າຂອງ y ເມື່ອ x = 4 (y = k/x):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຕັ້ງສົມຜົນພົວພັນໃຫ້ຖືກຕ້ອງກ່ອນ. ບົດທ້າທາຍ 2: ຄິດໄລ່ຕາມອັດຕາສ່ວນສາມຕົວແປ (Joint Variation or Multiple Ratio) ໂດຍການຄູນ ຫຼື ຫານຢ່າງເປັນລະບົບ ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບອັດຕາສ່ວນພົວພັນກົງ ແລະ ປີ້ນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ລົດຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວສະເໝີ. ຖ້າໃຊ້ເວລາ 2 ຊົ່ວໂມງ ແລ່ນໄດ້ 120 km. ຖ້າແລ່ນໄດ້ 300 km ຈະຕ້ອງໃຊ້ເວລາຈັກຊົ່ວໂມງ? (ພົວພັນກົງ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄົນງານ 6 ຄົນ ເຮັດວຽກຢ່າງໜຶ່ງແລ້ວໃນ 4 ວັນ. ຖ້າຕ້ອງການໃຫ້ວຽກນັ້ນແລ້ວພາຍໃນ 3 ວັນ, ຈະຕ້ອງໃຊ້ຄົນງານທັງໝົດຈັກຄົນ? (ພົວພັນປີ້ນ):"}</span>
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
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ແບ່ງປັນສ່ວນແບ່ງຕາມອັດຕາສ່ວນ (Dividing into ratios): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(1) ເຮົາຕ້ອງການແບ່ງເງິນ 120,000 ກີບ ໃຫ້ທ້າວ A ແລະ ນາງ B ຕາມອັດຕາສ່ວນ 2 : 3. ທ້າວ A ຈະໄດ້ຮັບເງິນຈັກກີບ? (ຄຳແນະນຳ: ສ່ວນແບ່ງ A = 120,000 × 2/(2+3)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A ໄດ້"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ນາງ B ຈະໄດ້ຮັບເງິນຫຼາຍກວ່າທ້າວ A ຈັກກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບສາກົນກ່ຽວກັບອັດຕາສ່ວນ ແລະ ແຜນທີ່: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ແຜນທີ່ແຜ່ນໜຶ່ງມີມາດຕາສ່ວນ (Scale) 1 : 50,000. ຖ້າວັດແທກໄລຍະທາງໃນແຜນທີ່ໄດ້ 4 cm, ໄລຍະທາງຈິງຈະແມ່ນຈັກກິໂລແມັດ (km)? (1 km = 100,000 cm):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ກິໂລແມັດ (km)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້າໄລຍະທາງຈິງລະຫວ່າງສອງບ້ານແມ່ນ 10 km, ໃນແຜນທີ່ມາດຕາສ່ວນ 1 : 50,000 ດຽວກັນນີ້ ຈະມີຄວາມຍາວຈັກຊັງຕີແມັດ (cm)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຊັງຕີແມັດ (cm)"}</span>
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
            {"ຈົ່ງຄິດໄລ່ອັດຕາສ່ວນຮູບສາມແຈຄ້າຍຄືກັນ (Proportional Triangles): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(1) ຮູບສາມແຈສອງຮູບຄ້າຍຄືກັນ ມີອັດຕາສ່ວນຄ້າຍຄືກັນແມ່ນ 2 : 3. ຖ້າຮູບສາມແຈນ້ອຍມີລວງຮອບ 24 cm, ລວງຮອບຂອງຮູບສາມແຈໃຫຍ່ຈະແມ່ນຈັກຊັງຕີແມັດ (cm)?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າອັດຕາສ່ວນເນື້ອທີ່ແມ່ນກຳລັງສອງຂອງອັດຕາສ່ວນຂ້າງ (2² : 3² = 4 : 9), ແລະ ຮູບສາມແຈນ້ອຍມີເນື້ອທີ່ 16 cm², ຮູບສາມແຈໃຫຍ່ຈະມີເນື້ອທີ່ຈັກຊັງຕີແມັດມົນທົນ (cm²)?:"}</span>
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
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u6-ans-1-1">{"(1) 4 (ເພາະວ່າ k = y/x = 12/3 = 4)"}</span>,
          <span key="u6-ans-1-2">{"(2) 20 (ເພາະວ່າ y = 4 × 5 = 20)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u6-ans-2-1">{"(1) 12 (ເພາະວ່າ k = 2 × 6 = 12)"}</span>,
          <span key="u6-ans-2-2">{"(2) 3 (ເພາະວ່າ y = 12 / 4 = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u6-ans-t1-1">{"(1) 5 (ເພາະວ່າອັດຕາສ່ວນຄວາມໄວແມ່ນ 60 km/ຊົ່ວໂມງ, ດັ່ງນັ້ນ 300 / 60 = 5 ຊົ່ວໂມງ)"}</span>,
          <span key="u6-ans-t1-2">{"(2) 8 (ເພາະວ່າຜົນຄູນຄົນງານ × ວັນ ຕ້ອງຄົງທີ່: 6 × 4 = 24. ດັ່ງນັ້ນ 24 / 3 = 8 ຄົນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u6-ans-t2-1">{"(1) 48,000 (ຫຼື 48000. ເພາະວ່າ A ໄດ້ 120,000 × 2/5 = 48,000 ກີບ)"}</span>,
          <span key="u6-ans-t2-2">{"(2) 24,000 (ຫຼື 24000. ເພາະວ່າ B ໄດ້ 120,000 × 3/5 = 72,000 ກີບ. ຜົນຕ່າງແມ່ນ 72,000 - 48,000 = 24,000 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u6-ans-s1-1">{"(1) 2 (ເພາະວ່າ 4 cm × 50,000 = 200,000 cm = 2 km)"}</span>,
          <span key="u6-ans-s1-2">{"(2) 20 (ເພາະວ່າ 10 km = 1,000,000 cm. ດັ່ງນັ້ນ 1,000,000 / 50,000 = 20 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u6-ans-s2-1">{"(1) 36 (ເພາະວ່າ ອັດຕາສ່ວນແມ່ນ 2/3 = 24 / L_ໃຫຍ່  ⇒  L_ໃຫຍ່ = 36 cm)"}</span>,
          <span key="u6-ans-s2-2">{"(2) 36 (ເພາະວ່າ ອັດຕາສ່ວນເນື້ອທີ່ແມ່ນ 4/9 = 16 / S_ໃຫຍ່  ⇒  S_ໃຫຍ່ = 36 cm²)"}</span>,
        ],
      },
    ],
    advice: "ຈົ່ງສັງເກດໃຫ້ດີວ່າ ປະລິມານທີ່ກຳນົດແມ່ນການພົວພັນກົງ (ຜົນຫານຄົງທີ່) ຫຼື ການພົວພັນປີ້ນ (ຜົນຄູນຄົງທີ່) ເພື່ອຈະໄດ້ຕັ້ງສົມຜົນໄດ້ຢ່າງຖືກຕ້ອງເດີ້!",
  },
};
