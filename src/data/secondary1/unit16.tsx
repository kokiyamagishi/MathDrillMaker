import React from "react";
import { UnitData } from "../units2";

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ II - ບົດທີ 16: ການວັດແທກລວງຍາວ (ຕໍ່)",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີການປ່ຽນຫົວໜ່ວຍການວັດແທກລວງຍາວ, ການຄຳນວນ ແລະ ການປຽບທຽບລວງຍາວທີ່ມີຫົວໜ່ວຍຕ່າງກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ບົດທີ 16 ໜ້າ 111-115",
  keyPoints: [
    {
      title: "1. ຕາຕະລາງຫົວໜ່ວຍການວັດແທກລວງຍາວ (Length Conversion Table)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຫົວໜ່ວຍວັດແທກລວງຍາວພື້ນຖານແມ່ນ ແມັດ (m). ຫົວໜ່ວຍອື່ນໆມີຄວາມສຳພັນກັນຕາມຕາຕະລາງນີ້:"}
          </p>
          <table
            className="drill-table math-illustration"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              fontSize: "1.125rem",
              marginBottom: "12px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#F5F5F5" }}>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"km"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"hm"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"dam"}</th>
                <th style={{ border: "1px solid #333", padding: "6px", backgroundColor: "#E3F2FD", fontWeight: "bold" }}>{"m"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"dm"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"cm"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"mm"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"1000 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"100 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"10 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px", backgroundColor: "#E3F2FD", fontWeight: "bold" }}>{"1 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"0.1 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"0.01 m"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"0.001 m"}</td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#FFF8E1",
              border: "2px solid #FFB300",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"• ປ່ຽນຈາກຫົວໜ່ວຍໃຫຍ່ ຫາ ຫົວໜ່ວຍນ້ອຍ → ໃຫ້ຄູນດ້ວຍ 10 ໃນແຕ່ລະຂັ້ນ."}</div>
            <div>{"• ປ່ຽນຈາກຫົວໜ່ວຍນ້ອຍ ຫາ ຫົວໜ່ວຍໃຫຍ່ → ໃຫ້ຫານດ້ວຍ 10 ໃນແຕ່ລະຂັ້ນ."}</div>
            <div style={{ color: "#E65100", fontWeight: "bold" }}>{"ຕົວຢ່າງ: 1 km = 1,000 m | 1 m = 100 cm | 1 mm = 0.1 cm"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຈື່ຈຳງ່າຍໆ: ທຸກຄັ້ງທີ່ຍ້າຍໄປທາງຂວາ 1 ຫ້ອງໃຫ້ຕື່ມເລກ 0 ໃສ່ຫຼັງໜຶ່ງໂຕ, ຍ້າຍໄປທາງຊ້າຍ 1 ຫ້ອງໃຫ້ເລື່ອນຈຸດໄປທາງຊ້າຍໜຶ່ງຕຳແໜ່ງເດີ້!",
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
            {"ຈົ່ງປ່ຽນຫົວໜ່ວຍການວັດແທກລວງຍາວຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນน, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) 5 km ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 3.5 m ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 250 cm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) 450 mm ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5) 12 dam ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງຄິດໄລ່ ແລະ ປຽບທຽບລວງຍາວ (ຕື່ມເຄື່ອງໝາຍ <, > ຫຼື =): "}{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) 120 cm + 1.8 m ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 2.5 km"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"2,400 m"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ປ່ຽນຫົວໜ່ວຍທັງໝົດໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນກ່ອນ ແລ້ວຈຶ່ງນຳມາບວກລົບກັນເດີ້! ບົດທ້າທາຍ 2: ຄິດໄລ່ຄວາມຍາວອ້ອມຮອບຮູບສາມແຈ ໂດຍເອົາຄວາມຍາວຂອງສາມຂ້າງມາບວກກັນ ຫຼັງຈາກປ່ຽນຫົວໜ່ວຍໃຫ້ຄືກັນແລ້ວ.",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ຜົນບວກ ແລະ ຜົນລົບລວງຍາວຕໍ່ໄປນີ້: "}{" "}
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
                <span>{"(1) ຄິດໄລ່: 4 m 25 cm + 1 m 80 cm. ຜົນໄດ້ຮັບເທົ່າກັບຈັກ cm?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຄິດໄລ່: 5 km - 1,200 m. ຜົນໄດ້ຮັບເທົ່າກັບຈັກ m?:"}</span>
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
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດເລຂາຄະນິດກ່ຽວກັບຄວາມຍາວອ້ອມຮອບ: "}{" "}
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
                <span>{"(1) ຮູບສາມແຈໜຶ່ງມີສາມຂ້າງຍາວ 1.2 m, 80 cm, ແລະ 150 cm. ຄວາມຍາວອ້ອມຮອບຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຄວາມຍາວອ້ອມຮອບດັ່ງກ່າວ ຄິດເປັນຈັກ m?:"}</span>
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
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບລວງຍາວຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ທ້າວ ສົມພອນ ມີລວງສູງ 1.65 m, ສ່ວນ ທ້າວ ອານຸສອນ ສູງ 158 cm. ຖາມວ່າໃຜສູງກວ່າ ແລະ ສູງກວ່າກັນຈັກ cm?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ຜູ້ສູງກວ່າແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
                <span>{", ສູງກວ່າ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຖ້ານ້ຳຢາລ້າງຈານໜຶ່ງຕຸກໜາ 4 cm. ຖ້າເອົາຕຸກນ້ຳຢາມາລຽງກັນ 25 ຕຸກ ຈະຍາວທັງໝົດຈັກ m?:"}</span>
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
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຄິດໄລ່ຫາອັດຕາສ່ວນ ແລະ ຫົວໜ່ວຍວັດແທກ: "}{" "}
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
              <span>{"(1) ເສັ້ນທາງຍາວ 3,600 m. ຖ້າແບ່ງອອກເປັນ 4 ພາກສ່ວນເທົ່າກັນ, ແຕ່ລະພາກສ່ວນຈະຍາວຈັກ km?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"km"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໄມ້ບັນທັດຍາວ 30 cm ປະກອບມີຈັກ mm? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mm"}</span>
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
          <span key="u16-ans-1-1">{"(1) 5,000 (ເພາະ 5 × 1,000 = 5,000 m)"}</span>,
          <span key="u16-ans-1-2">{"(2) 350 (ເພາະ 3.5 × 100 = 350 cm)"}</span>,
          <span key="u16-ans-1-3">{"(3) 2.5 (ເພາະ 250 ÷ 100 = 2.5 m)"}</span>,
          <span key="u16-ans-1-4">{"(4) 45 (ເພາະ 450 ÷ 10 = 45 cm)"}</span>,
          <span key="u16-ans-1-5">{"(5) 120 (ເພາະ 12 × 10 = 120 m)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u16-ans-2-1">{"(1) 3.0 (ເພາະ 120 cm = 1.2 m, ແລະ 1.2 + 1.8 = 3.0 m)"}</span>,
          <span key="u16-ans-2-2">{"(2) > (ເພາະ 2.5 km = 2,500 m, ເຊິ່ງ 2,500 m > 2,400 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u16-ans-t1-1">{"(1) 605 (ເພາະ 4.25 m = 425 cm, 1.8 m = 180 cm, ດັ່ງນັ້ນ 425 + 180 = 605 cm)"}</span>,
          <span key="u16-ans-t1-2">{"(2) 3,800 (ເພາະ 5 km = 5,000 m, ດັ່ງນັ້ນ 5,000 - 1,200 = 3,800 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u16-ans-t2-1">{"(1) 350 (ເພາະ 1.2 m = 120 cm. ດັ່ງນັ້ນ 120 + 80 + 150 = 350 cm)"}</span>,
          <span key="u16-ans-t2-2">{"(2) 3.5 (ເພາະ 350 cm = 3.5 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u16-ans-s1-1">{"(1) ສົມພອນ, ສູງກວ່າ 7 (ເພາະ ສົມພອນ ສູງ 1.65 m = 165 cm, ດັ່ງນັ້ນ 165 - 158 = 7 cm)"}</span>,
          <span key="u16-ans-s1-2">{"(2) 1 (ເພາະ 25 × 4 = 100 cm = 1 m)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u16-ans-s2-1">{"(1) 0.9 (ເພາະ 3,600 ÷ 4 = 900 m = 0.9 km)"}</span>,
          <span key="u16-ans-s2-2">{"(2) 300 (ເພາະ 30 × 10 = 300 mm)"}</span>,
        ],
      },
    ],
    advice: "ເວລາຄິດໄລ່ກ່ຽວກັບລວງຍາວ ຢ່າລືມກວດເບິ່ງຫົວໜ່ວຍກ່ອນເດີ້! ຕ້ອງປ່ຽນໃຫ້ເປັນຫົວໜ່ວຍດຽວກັນກ່ອນ ແລ້ວຈຶ່ງນຳມາບວກ, ລົບ, ຄູນ, ຫຼື ຫານກັນ ຈະເຮັດໃຫ້ບໍ່ຜິດພາດສະເໝີ!",
  },
};
