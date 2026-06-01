import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit42Data: UnitData = {
  unitNumber: 42,
  unitTitle: "ພາກທີ VII - ບົດທີ 42: ຖານນິຍົມ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີກຳນົດຖານນິຍົມ (Mode) ຂອງຊຸດຂໍ້ມູນ ພ້ອມທັງວິເຄາະຄວາມຖີ່ຂອງຂໍ້ມູນໃນຊີວິດປະຈຳວັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 42 ໜ້າ 247-251",
  subSections: [
    {
      title: "1. ນິຍາມຂອງຖານນິຍົມ (Definition of Mode)",
      keyPoint: {
      title: "1. ນິຍາມຂອງຖານນິຍົມ (Definition of Mode)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຖານນິຍົມ (ໝາຍດ້ວຍ "}
            <strong style={{ color: "#E65100" }}>{"Mo"}</strong>
            {") ແມ່ນຄຸນຄ່າຂອງຂໍ້ມູນທີ່ມີຄວາມຖີ່ສູງສຸດ (ປະກົດຂຶ້ນຫຼາຍເທື່ອທີ່ສຸດໃນຊຸດຂໍ້ມູນນັ້ນ):"}
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
              gap: "12px",
            }}
          >
            <div>
              {"• "}<strong>{"ກໍລະນີມີຖານນິຍົມດຽວ:"}</strong>{" ເຊັ່ນ ຊຸດຂໍ້ມູນ {2, 3, 5, 5, 7, 8} ມີຄ່າ 5 ປະກົດ 2 ເທື່ອ ຫຼາຍກວ່າໝູ່. ຖານນິຍົມແມ່ນ "}<strong>{"5"}</strong>
            </div>
            <div>
              {"• "}<strong>{"ກໍລະນີມີຫຼາຍກວ່າໜຶ່ງຖານນິຍົມ:"}</strong>{" ເຊັ່ນ {1, 2, 2, 3, 3, 4} ມີຄ່າ 2 ແລະ 3 ປະກົດ 2 ເທື່ອເທົ່າກັນ. ຖານນິຍົມແມ່ນ "}<strong>{"2 ແລະ 3"}</strong>
            </div>
            <div>
              {"• "}<strong>{"ກໍລະນີບໍ່ມີຖານນິຍົມ:"}</strong>{" ເຊັ່ນ {4, 6, 8, 10} ທຸກຕົວມີຄວາມຖີ່ເທົ່າກັນ (1 ເທື່ອ). ຖືວ່າຊຸດຂໍ້ມູນນີ້ "}<strong>{"ບໍ່ມີຖານນິຍົມ"}</strong>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຊອກຫາງ່າຍໆ: ເບິ່ງວ່າຕົວເລກໃດປະກົດຂຶ້ນຫຼາຍເທື່ອທີ່ສຸດໃນຊຸດຂໍ້ມູນນັ້ນເດີ້! ຖ້າບໍ່ມີຕົວຊ້ຳກັນເລີຍ ແມ່ນບໍ່ມີຖານນິຍົມ!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຖານນິຍົມ (Mode) ຂອງຊຸດຂໍ້ມູນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ้ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຊຸດຂໍ້ມູນ: 3, 5, 7, 5, 8, 5, 9, 10. ຖານນິຍົມແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນ: 12, 15, 12, 18, 15, 20. ຖານນິຍົມແມ່ນຕົວເລກໃດແດ່? (ຕອບລຽງຈາກນ້ອຍຫາໃຫຍ່ ຄັ່ນດ້ວຍ ',' ບໍ່ມີຍະຫວ່າງ ເຊັ່ນ: 12,15):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ບົດຮຽນພື້ນຖານ",
      keyPoint: { content: <span /> },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາຖານນິຍົມຈາກຕາຕະລາງຄວາມຖີ່ຕໍ່ໄປນີ້: "}{" "}
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
              <span>{"(1) ຕາຕະລາງຄະແນນສອບເສັງຂອງນັກຮຽນຫ້ອງໜຶ່ງ:"}</span>
              <table style={{ borderCollapse: "collapse", width: "300px", textAlign: "center", fontSize: "1.2rem", margin: "8px 0" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ border: "1px solid #CCC", padding: "6px" }}>{"ຄະແນນ"}</th>
                    <th style={{ border: "1px solid #CCC", padding: "6px" }}>{"ຈຳນວນນັກຮຽນ (ຄວາມຖີ່)"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"6"}</td>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"5 ຄົນ"}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"7"}</td>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"12 ຄົນ"}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"8"}</td>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"8 ຄົນ"}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"9"}</td>
                    <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"4 ຄົນ"}</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"ຄະແນນທີ່ເປັນຖານນິຍົມຂອງນັກຮຽນຫ້ອງນີ້ແມ່ນຈັກຄະແນນ?:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EEE", paddingTop: "12px" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນຄະແນນທີ່ປະກົດຄື: 1, 2, 3, 4, 5. ຖານນິຍົມຂອງຊຸດຂໍ້ມູນນີ້ແມ່ນຫຍັງ? (ຕອບເປັນພາສາລາວ: ບໍ່ມີຖານນິຍົມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="answer-blank" style={{ display: "inline-block", width: "240px", height: "40px" }}></span>
              </div>
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
      "💡 ບົດທ້າທາຍ 1: ຖ້າຖານນິຍົມຖືກກຳນົດໃຫ້ເປັນຄ່ານັ້ນ, ສະແດງວ່າຕົວລັບ x ຕ້ອງປ່ຽນໄປເປັນຕົວເລກນັ້ນເພື່ອໃຫ້ມັນມີຄວາມຖີ່ຫຼາຍທີ່ສຸດ! ບົດທ້າທາຍ 2: ຊອກຫາຊັ້ນທີ່ມີຄວາມຖີ່ສູງສຸດ ເຊິ່ງເອີ້ນວ່າ 'ຊັ້ນຖານນິຍົມ' (Modal Class)!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄົ້ນຫາຄ່າຂອງຕົວລັບຈາກເງື່ອນໄຂຖານນິຍົມ: "}{" "}
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
                <span>{"(1) ຊຸດຂໍ້ມູນ: 4, 5, 5, 6, x, 7, 8. ຖ້າຖານນິຍົມຂອງຂໍ້ມູນນີ້ແມ່ນ 5, ຄ່າຂອງ x ທີ່ເປັນໄປໄດ້ສາມາດເປັນເລກໃດແດ່? (ຕອບສະເພາະຕົວເລກໜຶ່ງຕົວທີ່ຮັບປະກັນໃຫ້ 5 ເປັນຖານນິຍົມດຽວ ເຊັ່ນ 5):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຊຸດຂໍ້ມູນ: 2, 4, 4, 6, 6, 8, y. ຖ້າຖານນິຍົມຂອງຂໍ້ມູນນີ້ແມ່ນ 6 ພຽງຕົວດຽວ, ຄ່າຂອງ y ຕ້ອງເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາຊັ້ນຖານນິຍົມ (Modal Class) ຂອງຂໍ້ມູນຈັດກຸ່ມ: "}{" "}
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
                <span>{"(1) ຕາຕະລາງຄວາມສູງຂອງເດັກນ້ອຍ:"}</span>
                <table style={{ borderCollapse: "collapse", width: "350px", textAlign: "center", fontSize: "1.2rem", margin: "8px 0" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#F5F5F5" }}>
                      <th style={{ border: "1px solid #CCC", padding: "6px" }}>{"ຊ່ວງຄວາມສູງ (cm)"}</th>
                      <th style={{ border: "1px solid #CCC", padding: "6px" }}>{"ຈຳນວນເດັກ (ຄວາມຖີ່)"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"90 - 100"}</td>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"4 ຄົນ"}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"100 - 110"}</td>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"15 ຄົນ"}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"110 - 120"}</td>
                      <td style={{ border: "1px solid #CCC", padding: "6px" }}>{"9 ຄົນ"}</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span>{"ຊ່ວງຄວາມສູງໃດທີ່ເປັນຊັ້ນຖານນິຍົມ? (ຕອບໃນຮູບແບບ 'A-B' ເຊັ່ນ: 90-100):"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EEE", paddingTop: "12px" }}>
                <span>{"(2) ຈາກຕາຕະລາງຂ້າງເທິງ, ຄ່າເຄິ່ງກາງ (Midpoint) ຂອງຊັ້ນຖານນິຍົມນັ້ນແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການວິເຄາະຍອດຂາຍສິນຄ້າໃນທຸລະກິດ: "}{" "}
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
              <span>{"(1) ຮ້ານຂາຍເກີບແຫ່ງໜຶ່ງບັນທຶກຂະໜາດ (Size) ຂອງເກີບຜູ້ຊາຍທີ່ຂາຍໄດ້ໃນໜຶ່ງວັນດັ່ງນີ້: 39, 40, 41, 40, 42, 40, 41, 43, 40. ເກີບບີມາດ (Size) ໃດທີ່ເປັນຖານນິຍົມທີ່ທາງຮ້ານຄວນສັ່ງເຂົ້າມາຫຼາຍທີ່ສຸດ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"Size:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ບໍລິສັດຜະລິດນ້ຳດື່ມສຳຫຼວດລົດຊາດທີ່ລູກຄ້າມັກທີ່ສຸດ: ສົ້ມ (120 ຄົນ), ສະຕໍເບີຣີ (250 ຄົນ), ອະງຸ່ນ (180 ຄົນ), ໝາກພ້າວ (250 ຄົນ). ລົດຊາດໃດແດ່ທີ່ເປັນຖານນິຍົມ? (ຕອບຊື່ພາສາລາວ ລຽງຕາມຕົວອັກສອນ, ຄັ່ນດ້ວຍ ',' ບໍ່ມີຍະຫວ່າງ ເຊັ່ນ: ສະຕໍເບີຣີ,ໝາກພ້າວ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "260px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາສະຖິຕິການຈະລາຈອນ ແລະ ຍານພາຫະນະ: "}{" "}
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
              <span>{"(1) ການກວດສອບສີລົດທີ່ແລ່ນຜ່ານສີ່ແຍກໄຟແດງ: ແດງ (15 ຄັນ), ຂາວ (40 ຄັນ), ດຳ (45 ຄັນ), ເງິນ (20 ຄັນ). ສີລົດໃດທີ່ເປັນຖານນິຍົມ? (ຕອບເປັນພາສາລາວ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈຳນວນຜູ້ໂດຍສານໃນລົດເມແຕ່ລະຖ້ຽວວັດໄດ້: 15, 20, 15, 22, 15, 20, 20 ຄົນ. ຖານນິຍົມຂອງຈຳນວນຜູ້ໂດຍສານແມ່ນເລກໃດແດ່? (ຕອບລຽງຈາກນ້ອຍຫາໃຫຍ່ ຄັ່ນດ້ວຍ ',' ບໍ່ມີຍະຫວ່າງ ເຊັ່ນ: 15,20):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="u42-ans-1-1">{"(1) 5 (ເພາະວ່າເລກ 5 ປະກົດຂຶ້ນ 3 ເທື່ອ ເຊິ່ງຫຼາຍກວ່າຕົວເລກອື່ນໆທັງໝົດ)"}</span>,
          <span key="u42-ans-1-2">{"(2) 12,15 (ເພາະວ່າທັງເລກ 12 ແລະ 15 ປະກົດຂຶ້ນ 2 ເທື່ອເທົ່າກັນ ແລະ ຫຼາຍທີ່ສຸດ)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u42-ans-2-1">{"(1) 7 (ເພາະຄະແນນ 7 ມີຄວາມຖີ່ສູງສຸດຄື 12 ຄົນ)"}</span>,
          <span key="u42-ans-2-2">{"(2) ບໍ່ມີຖານນິຍົມ (ເພາະທຸກຂໍ້ມູນມີຄວາມຖີ່ເທົ່າກັນໝົດຄື 1 ເທື່ອ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u42-ans-t1-1">{"(1) 5 (ເພາະຖ້າ x = 5 ຈະເຮັດໃຫ້ເລກ 5 ມີຄວາມຖີ່ເປັນ 3 ເທື່ອ ແລະ ເປັນຖານນິຍົມດຽວຢ່າງສົມບູນ)"}</span>,
          <span key="u42-ans-t1-2">{"(2) 6 (ເພາະຖ້າ y = 6 ຈະເຮັດໃຫ້ເລກ 6 ມີຄວາມຖີ່ 3 ເທື່ອ ເຊິ່ງຫຼາຍກວ່າເລກ 4 ທີ່ມີຄວາມຖີ່ 2 ເທື່ອ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u42-ans-t2-1">{"(1) 100-110 (ເພາະຊ່ວງນີ້ມີຄວາມຖີ່ສູງສຸດຄື 15 ຄົນ)"}</span>,
          <span key="u42-ans-t2-2">{"(2) 105 (ເພາະຄ່າເຄິ່ງກາງຄິດໄລ່ຈາກ (100 + 110) ÷ 2 = 105)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u42-ans-s1-1">{"(1) 40 (ເພາະເກີບ Size 40 ປະກົດຂຶ້ນ 4 ເທື່ອ ເຊິ່ງຫຼາຍກວ່າໝູ່)"}</span>,
          <span key="u42-ans-s1-2">{"(2) ສະຕໍເບີຣີ,ໝາກພ້າວ (ເພາະທັງສອງລົດຊາດມີຄວາມຖີ່ສູງສຸດເທົ່າກັນຄື 250 ຄົນ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u42-ans-s2-1">{"(1) ດຳ (ເພາະລົດສີດຳມີຄວາມຖີ່ສູງສຸດຄື 45 ຄັນ)"}</span>,
          <span key="u42-ans-s2-2">{"(2) 15,20 (ເພາະທັງເລກ 15 ແລະ 20 ມີຄວາມຖີ່ 3 ເທື່ອເທົ່າກັນ)"}</span>,
        ],
      },
    ],
    advice: "ຖານນິຍົມແມ່ນເຄື່ອງມືທີ່ດີຫຼາຍໃນການວິເຄາະຂໍ້ມູນຄຸນນະພາບ (ເຊັ່ນ: ຄວາມນິຍົມຂອງສິນຄ້າ, ສີ, ຫຼື ລົດຊາດ) ເຊິ່ງບໍ່ສາມາດໃຊ້ຄ່າສະເລ່ຍເລກຄະນິດໄດ້ເດີ້!",
  },
};
