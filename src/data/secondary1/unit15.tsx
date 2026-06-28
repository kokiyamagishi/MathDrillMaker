import React from "react";
import { UnitData } from "../units2";

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ II - ບົດທີ 15: ການວັດແທກຄວາມຍາວ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຫົວໜ່ວຍວັດແທກຄວາມຍາວໃນລະບົບເມດຕຣິກ (Metric System) ເຊັ່ນ: km, hm, dam, m, dm, cm, mm, ການພົວພັນ ແລະ ການປ່ຽນຫົວໜ່ວຍວັດແທກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 109-114",
  subSections: [
    {
      title: "1. ຫົວໜ່ວຍວັດແທກຄວາມຍາວໃນລະບົບເມດຕຣິກ (Metric Units of Length)",
      keyPoint: {
        title: "ຕາຕະລາງການພົວພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຫົວໜ່ວຍພື້ນຖານຂອງການວັດແທກຄວາມຍາວແມ່ນ ແມດ (m). ເຮົາມີທະວີຄູນ ແລະ ອຸປະຄູນດັ່ງນີ້:"}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ການພົວພັນກັບ ແມດ (m):"}</span>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.20rem", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #2E7D32" }}>
                    <th style={{ padding: "6px" }}>{"ຫົວໜ່ວຍໃຫຍ່ກວ່າ (ທະວີຄູນ)"}</th>
                    <th style={{ padding: "6px" }}>{"ຫົວໜ່ວຍນ້ອຍກວ່າ (ອຸປະຄູນ)"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #C8E6C9" }}>
                    <td style={{ padding: "6px", whiteSpace: "nowrap" }}>{"1 ກິໂລແມດ (km) = 1,000 m"}</td>
                    <td style={{ padding: "6px" }}>{"1 ເດຊີແມດ (dm) = 0.1 m "}<span style={{ whiteSpace: "nowrap" }}>{"(1 m = 10 dm)"}</span></td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #C8E6C9" }}>
                    <td style={{ padding: "6px", whiteSpace: "nowrap" }}>{"1 ເຮັກໂຕແມດ (hm) = 100 m"}</td>
                    <td style={{ padding: "6px" }}>{"1 ຊັງຕີແມດ (cm) = 0.01 m "}<span style={{ whiteSpace: "nowrap" }}>{"(1 m = 100 cm)"}</span></td>
                  </tr>
                  <tr>
                    <td style={{ padding: "6px", whiteSpace: "nowrap" }}>{"1 ເດກາແມດ (dam) = 10 m"}</td>
                    <td style={{ padding: "6px" }}>{"1 ມິລິແມດ (mm) = 0.001 m "}<span style={{ whiteSpace: "nowrap" }}>{"(1 m = 1,000 mm)"}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ທຸກໆການຍ້າຍຫົວໜ່ວຍຂຶ້ນ 1 ຂັ້ນແມ່ນຫານໃຫ້ 10, ແລະ ລົງ 1 ຂັ້ນແມ່ນຄູນໃຫ້ 10!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"3.7 m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"cm"}</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"712 mm ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"dm"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປຽບທຽບຄວາມຍາວລະຫວ່າງ 518.03 cm ແລະ 51.31 dm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"(ແນະນຳ: ປ່ຽນໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນກ່ອນປຽບທຽບ ໂດຍຕື່ມເຄື່ອງໝາຍ <, > ຫຼື =)"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: 518.03 cm"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"51.31 dm"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປ່ຽນຫົວໜ່ວຍວັດແທກ (Unit Conversion)",
      keyPoint: {
        title: "ວິທີການປ່ຽນຫົວໜ່ວຍວັດແທກດ້ວຍຕາຕະລາງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດນຳໃຊ້ຕາຕະລາງໃນການປ່ຽນຫົວໜ່ວຍໄດ້ຢ່າງງ່າຍດາຍ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF8E1", borderRadius: "8px", border: "1px solid #FFE082", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#F57F17" , whiteSpace: "nowrap"}}>{"ລຳດັບຫົວໜ່ວຍ:"}</span>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.30rem", fontWeight: "bold", padding: "8px", backgroundColor: "#FFF" }}>
                <span>{"km"}</span>
                <span>{"hm"}</span>
                <span>{"dam"}</span>
                <span>{"m"}</span>
                <span>{"dm"}</span>
                <span>{"cm"}</span>
                <span>{"mm"}</span>
              </div>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6" }}>
                {"*ຕົວຢ່າງ: ປ່ຽນ 3.4 km ເປັນ m. ເຮົາຕື່ມເລກ 3 ໃນຫ້ອງ km, ເລກ 4 ໃນຫ້ອງ hm, ແລ້ວຕື່ມ 0 ໃສ່ໃນຫ້ອງ dam ແລະ m, ຈະໄດ້ 3,400 m."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫົວໜ່ວຍວັດແທກພື້ນຖານແບບພື້ນເມືອງຂອງລາວ: 1 ວາ = 4 ສອກ, 1 ສອກ = 2.5 ຄືບ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວຕໍ່ໄປນີ້ເປັນ ແມດ (m): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"5 hm 40 dam 3 m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"m"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"1.2 km 5 dam 13 m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"m"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປ່ຽນ 139.5 hm ເປັນ ກິໂລແມດ (km)? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: 139.5 hm ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"km"}</span>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍພື້ນເມືອງລາວ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊາວບ້ານວັດແທກຄວາມຍາວຂອງໄມ້ໄຜ່ໄດ້ "}<strong>{"20 ວາ"}</strong>{". ຖ້າຢາກຮູ້ວ່າໄມ້ໄຜ່ນີ້ຍາວຈັກຄືບ, ໂດຍຮູ້ວ່າ: 1 ວາ = 4 ສອກ, ແລະ 1 ສອກ = 2.5 ຄືບ. ຈົ່ງຄິດໄລ່ຫາຄວາມຍາວເປັນຄືບ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຍາວທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຄືບ."}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຄິດໄລ່ໄລຍະທາງໃນຊີວິດຈິງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວສົມສີ ຍ່າງແຕ່ເຮືອນຫາໂຮງຮຽນເປັນໄລຍະທາງ 1.25 km. ຖ້ານັບກ້າວຍ່າງຂອງລາວ ເຫັນວ່າ 1 ກ້າວເທົ່າກັບ 50 cm. ຖາມວ່າລາວຕ້ອງຍ່າງຈັກກ້າວຈຶ່ງຈະຮອດໂຮງຮຽນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ລາວຕ້ອງຍ່າງທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ກ້າວ"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: ""
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຄິດໄລ່ຄວາມຍາວທ່ອນຊື່ BC: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຈຸດ A, B, C, D ລຽງແຖວຊື່ດຽວກັນ ໂດຍຮູ້ວ່າ: AB = 7.4 cm, CD = 0.3 dm, ແລະ AD = 1.25 dm. ຈົ່ງຊອກຫາຄວາມຍາວຂອງ BC ເປັນ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: BC ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດປ່ຽນຫົວໜ່ວຍຫຼາຍຂັ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຄວາມຍາວ 28.016 km. ຖ້າຢາກຂຽນຄວາມຍາວນີ້ເປັນ ແມດ (m), ຈະເທົ່າກັບຈັກ ແມດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 28.016 km ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"m."}</span>
          </div>
        </div>
      )
    }
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="1-1">{"(1) 370"}</span>,
          <span key="1-2">{"(2) 7.12 (ເນື່ອງຈາກ 712 mm = 71.2 cm = 7.12 dm)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"{ \" > \" } (ເນື່ອງຈາກ 518.03 cm = 51.803 dm, ແລະ 51.803 > 51.31)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 903 (5 hm = 500m, 40 dam = 400m, 3m; 500+400+3 = 903 m)"}</span>,
          <span key="3-2">{"(2) 1,263 (1.2 km = 1,200m, 5 dam = 50m, 13m; 1200+50+13 = 1,263 m)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"13.95 (ເນື່ອງຈາກ 1 km = 10 hm, ດັ່ງນັ້ນ 139.5 / 10 = 13.95)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"200 (ຄິດໄລ່: 20 × 4 × 2.5 = 200 ຄືບ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"2,500 (1.25 km = 125,000 cm; 125,000 / 50 = 2,500 ກ້າວ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"2.1 (AD = 12.5 cm, AB = 7.4 cm, CD = 3.0 cm; BC = 12.5 - 7.4 - 3.0 = 2.1 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"28,016 (ເນື່ອງຈາກ 28.016 × 1,000 = 28,016)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການປ່ຽນຫົວໜ່ວຍວັດແທກຄວາມຍາວໄດ້ຢ່າງຄ່ອງແຄ້ວ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດແກ້ໂຈດບັນຫາ ແລະ ວັດແທກສິ່ງຕ່າງໆໃນຊີວິດຈິງໄດ້ຢ່າງຖືກຕ້ອງ!"
  }
};
