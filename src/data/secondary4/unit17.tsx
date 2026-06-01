import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພາກທີ II - ບົດທີ 17: ການຜັນປ່ຽນຮູບຮ່າງ ແລະ ເსັ້ນສະແດງ y = ax² + bx + c",
  unitGoal:
    "ຮຽນຮູ້ວິທີຜັນປ່ຽນຮູບຮ່າງທົ່ວໄປຂອງຕຳລາຂັ້ນສອງ y = ax² + bx + c ໃຫ້ກາຍເປັນຮູບຮ່າງມາດຕະຖານ y = a(x - p)² + q ໂດຍການນຳໃຊ້ວິທີຄັດສະເພາະເປັນກຳລັງສອງສົມບູນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 17 ໜ້າ 97-102",
  keyPoints: [
    {
      title: "1. ວິທີຜັນປ່ຽນເປັນກຳລັງສອງສົມບູນ (Completing the Square Method)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເພື່ອຊອກຫາຈຸດຈອມຂອງຕຳລາ y = ax² + bx + c, ເຮົາຕ້ອງຜັນປ່ຽນມັນໃຫ້ຢູ່ໃນຮູບຮ່າງ y = a(x - p)² + q ໂດຍມີສູດຄິດໄລ່ດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ສູດຊອກຫາພິກັດຈຸດຈອມ (p, q):"}</strong>
              <div style={{ paddingLeft: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontWeight: "bold", color: "#D84315" }}>
                  {"p = "} <Fraction num="-b" den="2a" />
                </span>
                <span style={{ fontWeight: "bold", color: "#D84315" }}>
                  {"q = c - "} <Fraction num="b²" den="4a" /> {" ຫຼັກການນີ້ຊ່ວຍໃຫ້ເຮົາຊອກຫາຈຸດຈອມໄດ້ໂດຍບໍ່ຕ້ອງແຕ້ມເສັ້ນສະແດງ!"}
                </span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຕົວຢ່າງການຜັນປ່ຽນຕົວຈິງ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"y = x² - 6x + 10  ⇒  y = (x² - 6x + 9) - 9 + 10  ⇒  y = (x - 3)² + 1"}
                <br />
                {"ດັ່ງນັ້ນ, ຈຸດຈອມ (Vertex) ແມ່ນ (3, 1) ແລະ ແກນເຄິ່ງຄືແມ່ນ x = 3."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ເຄັດລັບ: ຖ້າຄ່າ a = 1, ຄ່າ p ຈະມີຄ່າເທົ່າກັບ ເຄິ່ງໜຶ່ງຂອງສຳປະສິດ b ທີ່ມີເຄື່ອງໝາຍກົງກັນຂ້າມເດີ້!",
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
            {"ຈົ່ງຊອກຫາພິກັດຈຸດຈອມ (p, q) ຂອງຕຳລາຂັ້ນສອງຕໍ່ໄປນີ້ ໂດຍການຜັນປ່ຽນຮູບຮ່າງ: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = x² - 4x + 7. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (2, 3)):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = x² + 2x - 1. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (⚠️ ລະວັງເຄື່ອງໝາຍລົບ):"}</span>
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
            {"ຈົ່ງຜັນປ່ຽນຮູບຮ່າງ ແລະ ບອກຄ່າສຳປະສິດ a, p, q ໃຫ້ຖືກຕ້ອງ: "}{" "}
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
              <span>{"(1) ໃຫ້ຕຳລາ y = 2x² - 8x + 5. ເມື່ອຜັນປ່ຽນເປັນ y = 2(x - p)² + q, ຄ່າ q ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -x² + 6x - 4. ເມື່ອຜັນປ່ຽນເປັນ y = -(x - p)² + q, ຄ່າ q ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ສູດ p = -b/(2a) ແລະ q = c - b²/(4a) ຈະຊ່ວຍໃຫ້ຄິດໄລ່ໄດ້ໄວຂຶ້ນ! ບົດທ້າທາຍ 2: ຊອກຫາຈຸດຕັດກັບແກນ y ໂດຍການແທນ x = 0 ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາພິກັດຈຸດຈອມຂອງຕຳລາທີ່ມີສຳປະສິດ a ເປັນເລກສ່ວນ ຫຼື ເລກລົບ: "}{" "}
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
                <span>{"(1) ໃຫ້ຕຳລາ y = -2x² - 4x + 1. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>
                  {"(2) ໃຫ້ຕຳລາ y = "} <Fraction num="1" den="2" /> {"x² - 2x + 5. ພິກັດຈຸດຈອມ (p, q) ແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
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
              {"ຈົ່ງຊອກຫາພິກັດຈຸດຕັດລະຫວ່າງເສັ້ນສະແດງກັບແກນປະສານ (Intersection Points with Axes): "}{" "}
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
                <span>{"(1) ເສັ້ນສະແດງຂອງຕຳລາ y = 2x² - 5x + 3 ຕັດກັບແກນ y ຢູ່ເມັດທີ່ມີພິກັດແນວໃດ? (ຕອບແບບພິກັດ, ຕົວຢ່າງ: (0, 3)):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ເສັ້ນສະແດງຂອງຕຳລາ y = x² - 3x - 4 ຕັດກັບແກນ x ຢູ່ສອງເມັດ. ຖ້າຈຸດໜຶ່ງແມ່ນ (-1, 0), ອີກຈຸດໜຶ່ງຈະມີພິກັດແມ່ນເທົ່າໃດ? (ຕອບແບບພິກັດ):"}</span>
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
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຜັນປ່ຽນສົມຜົນໃຫ້ຢູ່ໃນຮູບຮ່າງມາດຕະຖານຢ່າງສົມບູນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄะແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ໃຫ້ຕຳລາ y = x² - 8x + 12. ຈົ່ງຜັນປ່ຽນໃຫ້ຢູ່ໃນຮູບຮ່າງ (x - p)² + q (ຕອບແບບ (x-p)^2+q, ຕົວຢ່າງ: (x-4)^2-4):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ຕຳລາ y = -x² - 10x - 20. ຈົ່ງຜັນປ່ຽນໃຫ້ຢູ່ໃນຮູບຮ່າງ -(x - p)² + q (ຕອບແບບ -(x+p)^2+q, ຕົວຢ່າງ: -(x+5)^2+5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: y ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບວິຖີກະສຸນຂອງໝາກບານ (Trajectory of a Soccer Ball): "}{" "}
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
              <span>
                {"(1) ນັກກິລາເຕະໝາກບານຂຶ້ນຟ້າ ໂດຍມີສົມຜົນລະດັບຄວາມສູງແມ່ນ h = -x² + 6x (m) ເຊິ່ງ x ແມ່ນໄລຍະທາງແນວນອນ. ຈົ່ງຊອກຫາລະດັບຄວາມສູງສູງສຸດທີ່ໝາກບານຂຶ້ນໄປຮອດ (m) (ຄຳແນະນຳ: ຄວາມສູງສູງສຸດແມ່ນຄ່າ q ຂອງຈຸດຈອມ):"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ສູງສຸດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ແມັດ (m)"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ໝາກບານຈະຕົກລົງຮອດພື້ນດິນ (h = 0) ຢູ່ຫ່າງຈາກຈຸດເຕະ x ເປັນໄລຍະທາງຈັກແມັດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: x ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m"}</span>
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
          <span key="u17-ans-1-1">{"(1) (2, 3) (ເພາະວ່າ y = (x - 2)² + 3)"}</span>,
          <span key="u17-ans-1-2">{"(2) (-1, -2) (ເພາະວ່າ y = (x + 1)² - 2)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u17-ans-2-1">{"(1) -3 (ເພາະວ່າ y = 2(x - 2)² - 3)"}</span>,
          <span key="u17-ans-2-2">{"(2) 5 (ເພາະວ່າ y = -(x - 3)² + 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u17-ans-t1-1">{"(1) (-1, 3) (ຍ້ອນວ່າ p = -(-4)/(2*(-2)) = -1, q = 1 - 16/(-8) = 3)"}</span>,
          <span key="u17-ans-t1-2">{"(2) (2, 3) (ຍ້ອນວ່າ p = -(-2)/(2*(1/2)) = 2, q = 5 - 4/2 = 3)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u17-ans-t2-1">{"(1) (0, 3) (ເພາະວ່າແທນ x = 0 ຈະໄດ້ y = 3)"}</span>,
          <span key="u17-ans-t2-2">{"(2) (4, 0) (ເພາະວ່າສົມຜົນ x² - 3x - 4 = 0 ມີສອງໃຈຜົນແມ່ນ x = -1 ແລະ x = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u17-ans-s1-1">{"(1) (x-4)^2-4 (ຍ້ອນວ່າ y = (x² - 8x + 16) - 16 + 12 = (x - 4)² - 4)"}</span>,
          <span key="u17-ans-s1-2">{"(2) -(x+5)^2+5 (ຍ້ອນວ່າ y = -(x² + 10x) - 20 = -(x² + 10x + 25) + 25 - 20 = -(x + 5)² + 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u17-ans-s2-1">{"(1) 9 (ຍ້ອນວ່າ h = -(x - 3)² + 9, ດັ່ງນັ້ນຄວາມສູງສູງສຸດແມ່ນ 9 ແມັດ)"}</span>,
          <span key="u17-ans-s2-2">{"(2) 6 (ຍ້ອນວ່າ -x² + 6x = 0 ⇒ x(-x + 6) = 0 ⇒ x = 0 ຫຼື x = 6)"}</span>,
        ],
      },
    ],
    advice: "ການຜັນປ່ຽນເປັນກຳລັງສອງສົມບູນ ແມ່ນທັກສະພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນພຶດຊະຄະນິດ! ຝຶກຝົນການໃຊ້ສູດ ແລະ ການແຍກຕົວປະກອບເປັນປະຈຳ ຈະຊ່ວຍໃຫ້ເກັ່ງຂຶ້ນຢ່າງແນ່ນອນເດີ້!",
  },
};
