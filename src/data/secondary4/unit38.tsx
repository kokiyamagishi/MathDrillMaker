import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit38Data: UnitData = {
  unitNumber: 38,
  unitTitle: "ພາກທີ VI - ບົດທີ 38: ເນື້ອທີ່ໜ້າທັງໝົດຂອງຮູບທາດຈວຍ ແລະ ຮູບຈວຍ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ເນື້ອທີ່ໜ້າທັງໝົດ (Total Surface Area) ຂອງຮູບທາດຈວຍ (Pyramid) ແລະ ຮູບຈວຍ (Cone) ໂດຍການບວກເນື້ອທີ່ພື້ນ ແລະ ເນື້ອທີ່ອ້ອມຂ້າງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 38 ໜ້າ 223-228",
  keyPoints: [
    {
      title: "1. ເນື້ອທີ່ໜ້າທັງໝົດຂອງຮູບຈວຍ (Surface Area of a Cone)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຮູບຈວຍທີ່ມີລັດສະໝີພື້ນ r ແລະ ລວງເນັ່ງ (母線) L, ເນື້ອທີ່ໜ້າທັງໝົດ S ໄດ້ມາຈາກ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ເນື້ອທີ່ພື້ນ (Base Area):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"S_base = πr²"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເນື້ອທີ່ອ້ອມຂ້າງ (Lateral Area):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"S_lateral = πrL"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເນື້ອທີ່ໜ້າທັງໝົດ (Total Surface Area):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                {"S = S_base + S_lateral = πr² + πrL = πr(r + L)"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຮູບຈວຍມີ r = 3 cm, L = 5 cm  ⇒  S = π * 3 * (3 + 5) = 24π cm² ເດີ້!",
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
            {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ອ້ອມຂ້າງ ແລະ ເນື້ອທີ່ໜ້າທັງໝົດຂອງຮູບຈວຍ (ຕອບໃນຮູບຮ່າງຕິດຄ່າ π): "}{" "}
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
              <span>{"(1) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 4 cm ແລະ ລວງເນັ່ງ L = 6 cm. ເນື້ອທີ່ອ້ອມຂ້າງແມ່ນຈັກ π cm²? (ຕອບເປັນຕົວເລກຖ້ວນ, ຕົວຢ່າງ: 24):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"π"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ເນື້ອທີ່ໜ້າທັງໝົດ ຂອງຮູບຈວຍນີ້ແມ່ນຈັກ π cm²? (ຕອບເປັນຕົວເລກຖ້ວນ, ຕົວຢ່າງ: 40):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"π"}</span>
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
            {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ໜ້າທັງໝົດຂອງຮູບທາດຈວຍ (Pyramid Surface Area): "}{" "}
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
              <span>{"(1) ຮູບທາດຈວຍສີ່ແຈສະເໝີໜຶ່ງ ມີຂ້າງພື້ນຍາວ 6 cm. ເນື້ອທີ່ພື້ນ S_base ແມ່ນຈັກ cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm²"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເນື້ອທີ່ອ້ອມຂ້າງ (ຜົນບວກ 4 ໜ້າສາມແຈ) ແມ່ນ 48 cm², ເນື້ອທີ່ໜ້າທັງໝົດ ຈະແມ່ນຈັກ cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"cm²"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ທິດສະດີປີຕາກໍເພື່ອຊອກຫາລວງເນັ່ງ L ຈາກລວງສູງ h ແລະ ລັດສະໝີ r ກ່ອນ (L = √(r² + h²))! ບົດທ້າທາຍ 2: ໃຫ້ຄຳນວນມຸມຂອງຂະແໜງວົງມົນແຜນວາດຄລີ່ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ໜ້າທັງໝົດ ໂດຍນຳໃຊ້ທິດສະດີປີຕາກໍຊອກຫາລວງເນັ່ງ L: "}{" "}
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
                <span>{"(1) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 3 cm ແລະ ລວງສູງ h = 4 cm. ລວງເນັ່ງ L ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: L ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ເນື້ອທີ່ໜ້າທັງໝົດ ຂອງຮູບຈວຍນີ້ແມ່ນຈັກ π cm²? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"π"}</span>
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
              {"ຈົ່ງຄິດໄລ່ມຸມໃຈກາງ α ຂອງຂະແໜງວົງມົນແຜນວາດຄລີ່ (Sector angle of cone development): "}{" "}
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
                  {"(1) ມຸມໃຈກາງ α ຂອງແຜນວາດຄລີ່ດ້ານຂ້າງຮູບຈວຍ ຄິດໄລ່ດ້ວຍສູດ α = 360° · "} <Fraction num="r" den="L" /> {". ຖ້າ r = 2 cm, L = 8 cm, ມຸມ α ຈະແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກ):"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: α ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ r = 3 cm, L = 9 cm, ມຸມ α ຈະແມ່ນຈັກອົງສາ? (ຕອບເປັນຕົວເລກ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: α ="}</span>
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
          <p>
            {"ຈົ່ງຊອກຫາລັດສະໝີພື້ນ r ຈາກເນື້ອທີ່ທີ່ກຳນົດໃຫ້: "}{" "}
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
              <span>{"(1) ຮູບຈວຍໜຶ່ງມີລວງເນັ່ງ L = 10 cm, ເນື້ອທີ່ອ້ອມຂ້າງແມ່ນ 50π cm². ລັດສະໝີພື້ນ r ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: r ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຮູບຈວຍໜຶ່ງມີລັດສະໝີພື້ນ r = 5 cm, ເນື້ອທີ່ໜ້າທັງໝົດແມ່ນ 90π cm². ລວງເນັ່ງ L ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: L ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການທາສີຫຼັງຄາທາດຈວຍ (Painting the roof of a pagoda): "}{" "}
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
              <span>{"(1) ຫຼັງຄາພຣະທາດເປັນຮູບທາດຈວຍສີ່ແຈສະເໝີ ມີຂ້າງພື້ນ 8 m, ແລະ ແຕ່ລະໜ້າສາມແຈດ້ານຂ້າງມີລວງສູງ (Apothem) ແມ່ນ 5 m. ຈົ່ງຊອກຫາເນື້ອທີ່ຫຼັງຄາທັງໝົດທີ່ຕ້ອງທາສີ (ຄຳແນະນຳ: ທາສີແຕ່ສ່ວນອ້ອມຂ້າງ, ຜົນບວກ 4 ໜ້າສາມແຈ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ເນື້ອທີ່ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າສີ 1 ຖັງສາມາດທາໄດ້ 20 m², ຈະຕ້ອງໃຊ້ສີທັງໝົດຈັກຖັງຈຶ່ງຈະພໍດີ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: ໃຊ້ສີ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຖັງ"}</span>
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
          <span key="u38-ans-1-1">{"(1) 24 (ເພາະວ່າ S_lateral = πrL = π * 4 * 6 = 24π cm²)"}</span>,
          <span key="u38-ans-1-2">{"(2) 40 (ເພາະ S = S_base + S_lateral = π * 4² + 24π = 16π + 24π = 40π cm²)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u38-ans-2-1">{"(1) 36 (ເພາະວ່າ S_base = 6² = 36 cm²)"}</span>,
          <span key="u38-ans-2-2">{"(2) 72 (ເພາະວ່າ S = S_base + S_lateral = 36 + 48 = 72 cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u38-ans-t1-1">{"(1) 5 (ຍ້ອນວ່າ L = √(r² + h²) = √(3² + 4²) = √25 = 5 cm)"}</span>,
          <span key="u38-ans-t1-2">{"(2) 24 (ຍ້ອນວ່າ S = πr(r + L) = π * 3 * (3 + 5) = 24π cm²)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u38-ans-t2-1">{"(1) 90 (ຍ້ອນວ່າ α = 360° * 2/8 = 90°)"}</span>,
          <span key="u38-ans-t2-2">{"(2) 120 (ຍ້ອນວ່າ α = 360° * 3/9 = 120°)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u38-ans-s1-1">{"(1) 5 (ເພາະວ່າ r = S_lateral / (πL) = 50π / 10π = 5 cm)"}</span>,
          <span key="u38-ans-s1-2">{"(2) 13 (ເພາະວ່າ S = πr² + πrL = 25π + 5πL = 90π ⇒ 5πL = 65π ⇒ L = 13 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u38-ans-s2-1">{"(1) 80 (ເພາະວ່າເນື້ອທີ່ 1 ໜ້າແມ່ນ 1/2 * 8 * 5 = 20 m². ຜົນບວກ 4 ໜ້າແມ່ນ 20 * 4 = 80 m²)"}</span>,
          <span key="u38-ans-s2-2">{"(2) 4 (ເພາະວ່າ 80 / 20 = 4 ຖັງ)"}</span>,
        ],
      },
    ],
    advice: "ການຄິດໄລ່ເນື້ອທີ່ໜ້າທັງໝົດຂອງຮູບຈວຍ ແລະ ທາດຈວຍ ຕ້ອງແຍກແຍະລະຫວ່າງ 'ລວງສູງ h' ແລະ 'ລວງເນັ່ງ L' ໃຫ້ຖືກຕ້ອງສະເໝີເດີ້!",
  },
};
