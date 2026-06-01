import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit30Data: UnitData = {
  unitNumber: 30,
  unitTitle: "ພາກທີ IV - ບົດທີ 30: ພື້ນຖານກ່ຽວກັບເວັກເຕີ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມຂອງເວັກເຕີ, ທິດທາງ, ລວງ, ຂະໜາດ ພ້ອມທັງເງື່ອນໄຂຂອງສອງເວັກເຕີທີ່ເທົ່າກັນ, ຂະໜານກັນ ແລະ ເວັກເຕີກົງກັນຂ້າມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 30 ໜ້າ 175-180",
  keyPoints: [
    {
      title: "1. ນິຍາມ ແລະ ອົງປະກອບຂອງເວັກເຕີ (Vector Definition)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ເວັກເຕີ (Vector) ແມ່ນສ່ວນຊື່ທີ່ມີທິດທາງ ເຊິ່ງກຳນົດດ້ວຍຈຸດເລີ່ມຕົ້ນ A ແລະ ຈຸດປາຍ B. ສັນຍາລັກແມ່ນ AB (ມີລູກສອນຢູ່ເທິງ):"}
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
              <strong style={{ color: "#E65100" }}>{"• ສາມອົງປະກອບຫຼັກຂອງເວັກເຕີ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- 1. ລວງ (Direction Line): ເສັ້ນຊື່ທີ່ເວັກເຕີວາງຢູ່."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>{"- 2. ທິດທາງ (Sense): ຈາກຈຸດເລີ່ມຕົ້ນຫາຈຸດປາຍ."}</span>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- 3. ຂະໜາດ (Magnitude): ລວງຍາວຂອງສ່ວນຊື່ AB, ສັນຍາລັກແມ່ນ |AB|."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເວັກເຕີທີ່ເທົ່າກັນ, ຂະໜານກັນ ແລະ ກົງກັນຂ້າມ:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- "}
                <strong style={{ color: "#2E7D32" }}>{"ເວັກເຕີເທົ່າກັນ (u = v):"}</strong>
                {" ມີລວງຂະໜານກັນ, ມີທິດທາງດຽວກັນ ແລະ ມີຂະໜາດເທົ່າກັນ."}
                <br />
                {"- "}
                <strong style={{ color: "#1976D2" }}>{"ເວັກເຕີຂະໜານກັນ (u || v):"}</strong>
                {" ພວກມັນມີລວງດຽວກັນ ຫຼື ຂະໜານກັນ (ທິດທາງອາດຄືກັນ ຫຼື ກົງກັນຂ້າມ)."}
                <br />
                {"- "}
                <strong style={{ color: "#D84315" }}>{"ເວັກເຕີກົງກັນຂ້າມ (-u):"}</strong>
                {" ມີລວງຂະໜານກັນ, ມີຂະໜາດເທົ່າກັນ ແຕ່ມີທິດທາງກົງກັນຂ້າມ."}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຂໍ້ຄວນຈື່: ເວັກເຕີ AB ແລະ BA ມີຂະໜາດເທົ່າກັນ ແຕ່ເປັນເວັກເຕີກົງກັນຂ້າມກັນ: AB = -BA ເດີ້!",
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
            {"ຈົ່ງກວດສອບຄວາມເຂົ້າໃຈກ່ຽວກັບອົງປະກອບ ແລະ ຄຸນລັກສະນະຂອງເວັກເຕີ: "}{" "}
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
              <span>{"(1) ຖ້າເວັກເຕີ AB ມີຂະໜາດແມ່ນ 8 cm, ຂະໜາດຂອງເວັກເຕີກົງກັນຂ້າມ BA ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ສອງເວັກເຕີທີ່ມີທິດທາງກົງກັນຂ້າມກັນ ແລະ ມີຂະໜາດເທົ່າກັນ ເອີ້ນວ່າເວັກເຕີຫຍັງກັນ? (ຕອບ: ເທົ່າກັນ, ຂະໜານກັນ, ຫຼື ກົງກັນຂ້າມ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
            {"ຈົ່ງວິເຄາະຄວາມສຳພັນລະຫວ່າງເວັກເຕີໃນຮູບເລຂາຄະນິດ (ຕົວຢ່າງ: ຮູບສີ່ແຈຂ້າງຂະໜານ ABCD ທີ່ມີເສັ້ນເນັ່ງຈອມຕັດກັນຢູ່ O): "}{" "}
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
              <span>{"(1) ໃນຮູບສີ່ແຈຂ້າງຂະໜານ ABCD, ເວັກເຕີ AB ເທົ່າກັບເວັກເຕີໃດ? (ຕອບ: BC, CD, ດຽວ ຫຼື DC):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ໃນຮູບສີ່ແຈຂ້າງຂະໜານ ABCD, ເວັກເຕີກົງກັນຂ້າມຂອງ AD ແມ່ນເວັກເຕີໃດ? (ຕອບ: BC, CB, CD ຫຼື DA):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ໃຊ້ຄຸນລັກສະນະຂອງຈຸດເຄິ່ງກາງ O ເພື່ອຊອກຫາເວັກເຕີທີ່ເທົ່າກັນ ຫຼື ກົງກັນຂ້າມ! ບົດທ້າທາຍ 2: ເວັກເຕີ u ແລະ v ມີຂະໜາດເທົ່າກັນ ແຕ່ທິດທາງຕ່າງກັນ ບໍ່ຖືວ່າເທົ່າກັນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຄວາມສຳພັນຂອງເວັກເຕີ ໂດຍອີງໃສ່ຈຸດເຄິ່ງກາງ O ຂອງຮູບສີ່ແຈຂ້າງຂະໜານ ABCD: "}{" "}
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
                <span>{"(1) ຖ້າ O ແມ່ນຈຸດເຄິ່ງກາງຂອງເສັ້ນເນັ່ງຈອມ AC, ເວັກເຕີ AO ເທົ່າກັບເວັກເຕີໃດ? (ຕອບ: OA, CO, ຫຼື OC):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຖ້າ O ແມ່ນຈຸດເຄິ່ງກາງຂອງເສັ້ນເນັ່ງຈອມ BD, ເວັກເຕີກົງກັນຂ້າມຂອງ OB ແມ່ນເວັກເຕີໃດ? (ຕອບ: BO, OD, ດຽວ ຫຼື DO):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
              {"ຈົ່ງຕັດສິນຄວາມຖືກຕ້ອງຂອງປະໂຫຍກທາງຄະນິດສາດ (True or False Statements): "}{" "}
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
                <span>{"(1) 'ຖ້າສອງເວັກເຕີ u ແລະ v ມີຂະໜາດເທົ່າກັນ (|u| = |v|), ພວກມັນຈະຕ້ອງເທົ່າກັນສະເໝີ'. ປະໂຫຍກນີ້ ຖືກ (True) ຫຼື ຜິດ (False)?: (ຕອບ ຖືກ ຫຼື ຜິດ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) 'ຖ້າສອງເວັກເຕີ u ແລະ v ຂະໜານກັນ (u || v), ພວກມັນສາມາດມີທິດທາງກົງກັນຂ້າມກັນໄດ້'. ປະໂຫຍກນີ້ ຖືກ (True) ຫຼື ຜິດ (False)?: (ຕອບ ຖືກ ຫຼື ຜິດ):"}</span>
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
          <p>
            {"ຈົ່ງຄິດໄລ່ຂະໜາດຂອງເວັກເຕີ ໂດຍນຳໃຊ້ເລຂາຄະນິດ: "}{" "}
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
              <span>{"(1) ໃນຮູບສາມແຈສາກ ABC ທີ່ມີມຸມ A = 90°, AB = 3 cm, AC = 4 cm. ຈົ່ງຊອກຫາຂະໜາດຂອງເວັກເຕີ BC (cm) (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: |BC| ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ O ແມ່ນຈຸດເຄິ່ງກາງຂອງຂ້າງ BC, ຂະໜາດຂອງເວັກເຕີ BO ຈະແມ່ນຈັກ cm? (ຕອບເປັນເລກທົດສະນິຍົມ, ຕົວຢ່າງ: 2.5):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: |BO| ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບແຮງງານດຶງເຮືອ (Forces on a Canal Boat): "}{" "}
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
              <span>{"(1) ຄົນສອງຄົນດຶງເຮືອໄປຕາມຄອງນ້ຳ. ແຮງດຶງ u ຂອງຄົນທຳອິດມີຂະໜາດແມ່ນ 80 N. ຖ້າແຮງດຶງ v ຂອງຄົນທີສອງເທົ່າກັບແຮງດຶງ u ຢ່າງສົມບູນ (u = v), ຂະໜາດຂອງແຮງ v ຈະແມ່ນຈັກນິວເຕີນ (N)? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: |v| ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"N"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເຮືອເຄື່ອນທີ່ຊື່ໄປທາງໜ້າ ແຕ່ມີແຮງຕ້ານຂອງນ້ຳ w ກົງກັນຂ້າມກັບທິດທາງການເຄື່ອນທີ່ ໂດຍມີຂະໜາດແມ່ນ 120 N. ເວັກເຕີແຮງຕ້ານ w ຈະຖືວ່າເປັນເວັກເຕີປະເພດໃດເມື່ອທຽບກັບທິດທາງເຄື່ອນທີ່? (ຕອບ: ເທົ່າກັນ, ຂະໜານກັນ, ຫຼື ກົງກັນຂ້າມ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
          <span key="u30-ans-1-1">{"(1) 8 (ເພາະວ່າຂະໜາດຂອງເວັກເຕີແມ່ນຄວາມຍາວສ່ວນຊື່ ເຊິ່ງບໍ່ສາມາດຕິດລົບໄດ້, ດັ່ງນັ້ນ |BA| = |AB| = 8 cm)"}</span>,
          <span key="u30-ans-1-2">{"(2) ກົງກັນຂ້າມ (ເພາະວ່າມີຂະໜາດເທົ່າກັນ ແຕ່ທິດທາງຕ່າງກັນ 180°)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u30-ans-2-1">{"(1) DC (ເພາະວ່າໃນຮູບສີ່ແຈຂ້າງຂະໜານ ຂ້າງ AB ແລະ DC ມີລວງຂະໜານກັນ, ຄວາມຍາວເທົ່າກັນ ແລະ ມີທິດທາງດຽວກັນ)"}</span>,
          <span key="u30-ans-2-2">{"(2) CB (ເພາະວ່າ AD ມີທິດທາງຈາກ A ຫາ D ດັ່ງນັ້ນເວັກເຕີກົງກັນຂ້າມແມ່ນ DA ຫຼື CB)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u30-ans-t1-1">{"(1) OC (ເພາະວ່າ O ແມ່ນຈຸດເຄິ່ງກາງ ດັ່ງນັ້ນ AO = OC (ມີທິດທາງ ແລະ ຂະໜາດດຽວກັນ))"}</span>,
          <span key="u30-ans-t1-2">{"(2) DO (ເພາະວ່າ OB = -OD = DO)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u30-ans-t2-1">{"(1) ຜິດ (ເພາະສອງເວັກເຕີຈະເທົ່າກັນໄດ້ ຕ້ອງມີທັງຂະໜາດ ແລະ ທິດທາງດຽວກັນ, ຖ້າມີແຕ່ຂະໜາດເທົ່າກັນອາດຈະຊີ້ໄປຄົນລະທິດ)"}</span>,
          <span key="u30-ans-t2-2">{"(2) ຖືກ (ເພາະວ່າການຂະໜານກັນແມ່ນການມີລວງດຽວກັນ, ທິດທາງຈະໄປທາງດຽວກັນ ຫຼື ກົງກັນຂ້າມກໍໄດ້)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u30-ans-s1-1">{"(1) 5 (ເພາະວ່າ |BC|² = AB² + AC² = 3² + 4² = 25 ⇒ |BC| = 5 cm)"}</span>,
          <span key="u30-ans-s1-2">{"(2) 2.5 (ເພາະວ່າ BO = BC / 2 = 5 / 2 = 2.5 cm)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u30-ans-s2-1">{"(1) 80 (ເພາະວ່າສອງເວັກເຕີເທົ່າກັນ ຈະມີຂະໜາດເທົ່າກັນສະເໝີ)"}</span>,
          <span key="u30-ans-s2-2">{"(2) ກົງກັນຂ້າມ (ເພາະວ່າແຮງ w ຕ້ານການເຄື່ອນທີ່ ດັ່ງນັ້ນມີທິດທາງກົງກັນຂ້າມ)"}</span>,
        ],
      },
    ],
    advice: "ເວັກເຕີເປັນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການສຶກສາຟີຊິກສາດ ແລະ ເລຂາຄະນິດວິເຄາະ! ການເຂົ້າໃຈຄວາມແຕກຕ່າງລະຫວ່າງ 'ລວງ' ແລະ 'ທິດທາງ' ຈະຊ່ວຍໃຫ້ເຮົາບໍ່ສັບສົນເດີ້!",
  },
};
