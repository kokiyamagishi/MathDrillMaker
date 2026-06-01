import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit31Data: UnitData = {
  unitNumber: 31,
  unitTitle: "ພາກທີ IV - ບົດທີ 31: ການບວກ ແລະ ການລົບເວັກເຕີ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຫຼັກການບວກ ແລະ ການລົບເວັກເຕີ ໂດຍນຳໃຊ້ຫຼັກເກັນຊາລ (Chasles' Relation) ແລະ ຫຼັກການຮູບສີ່ແຈຂ້າງຂະໜານ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 31 ໜ້າ 181-186",
  keyPoints: [
    {
      title: "1. ຫຼັກເກັນຊາລ ແລະ ການບວກເວັກເຕີ (Chasles' Identity & Vector Addition)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການບວກເວັກເຕີມີສອງກົດເກັນຫຼັກທີ່ຕ້ອງຈື່ຈຳໃຫ້ດີ:"}
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
              <strong style={{ color: "#E65100" }}>{"• ຫຼັກເກັນຊາລ (Triangle Law of Addition):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"AB + BC = AC"}
              </span>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"(ເມື່ອຈຸດປາຍຂອງເວັກເຕີທຳອິດ ເຕັງກັບຈຸດເລີ່ມຕົ້ນຂອງເວັກເຕີທີສອງ, ຜົນບວກຈະຊີ້ຈາກຈຸດເລີ່ມຕົ້ນທຳອິດຫາຈຸດປາຍສຸດ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ກົດເກັນຮູບສີ່ແຈຂ້າງຂະໜານ (Parallelogram Law):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", color: "#555" }}>
                {"ຖ້າ ABCD ແມ່ນຮູບສີ່ແຈຂ້າງຂະໜານ, ເຮົາຈະມີ: "}
                <strong style={{ color: "#D84315" }}>{"AB + AD = AC"}</strong>
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ການລົບເວັກເຕີ (Vector Subtraction):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                {"AB - AC = CB  (ຫຼື u - v = u + (-v))"}
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈື່ຈຳງ່າຍໆ ສຳລັບການລົບ: ຕົວອັກສອນເລີ່ມຕົ້ນຮ່ວມກັນ (A) ຈະຖືກຕັດອອກ ແລະ ຜົນລົບຈະຊີ້ກັບຄືນຈາກ C ຫາ B ເດີ້!",
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
            {"ຈົ່ງຮວບຮວມ ຫຼື ຄັດຈ້ອນສຳນວນເວັກເຕີ ໂດຍນຳໃຊ້ຫຼັກເກັນຊາລ: "}{" "}
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
              <span>{"(1) ຈົ່ງຄັດຈ້ອນສຳນວນ AB + BC (ຕອບເປັນສັນຍາລັກເວັກເຕີ, ຕົວຢ່າງ: AC):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈົ່ງຄັດຈ້ອນສຳນວນ PQ + QR + RS (ຕອບເປັນສັນຍາລັກເວັກເຕີ, ຕົວຢ່າງ: PS):"}</span>
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
            {"ຈົ່ງຄັດຈ້ອນສຳນວນເວັກເຕີ ໂດຍນຳໃຊ້ການລົບ: "}{" "}
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
              <span>{"(1) ຈົ່ງຄັດຈ້ອນສຳນວນ AB - AC (⚠️ ລະວັງທິດທາງ, ຕົວຢ່າງ: CB):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈົ່ງຄັດຈ້ອນສຳນວນ XY - XZ (ຕອບເປັນສັນຍາລັກເວັກເຕີ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ປ່ຽນເຄື່ອງໝາຍລົບເປັນເວັກເຕີກົງກັນຂ້າມກ່ອນ (ຕົວຢ່າງ: -AB = BA)! ບົດທ້າທາຍ 2: ໃຊ້ຄຸນລັກສະນະຂອງຮູບສີ່ແຈຂ້າງຂະໜານ ABCD ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນເວັກເຕີທີ່ຊັບຊ້ອນ ໂດຍການປ່ຽນເຄື່ອງໝາຍ: "}{" "}
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
                <span>{"(1) ຈົ່ງຄັດຈ້ອນສຳນວນ AB + CD - AD (ຄຳແນະນຳ: -AD = DA):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈົ່ງຄັດຈ້ອນສຳນວນ MN - PN + PR (ຄຳແນະນຳ: -PN = NP):"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຂະໜາດຂອງເວັກເຕີຜົນບວກ ໂດຍໃຊ້ເລຂາຄະນິດ: "}{" "}
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
                <span>{"(1) ໃນຮູບສາມແຈສາກ ABC ສາກຢູ່ A, ຖ້າ AB = 3 cm, AC = 4 cm. ຂະໜາດຂອງເວັກເຕີ |AB + AC| ຈະແມ່ນຈັກ cm? (ຄຳແນະນຳ: ສ້າງຮູບສີ່ແຈສາກ ABCD ຜົນບວກແມ່ນເສັ້ນເນັ່ງຈອມ AD):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: |AB + AC| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຂະໜາດຂອງເວັກເຕີຜົນລົບ |AB - AC| ຈະແມ່ນຈັກ cm? (ຄຳແນະນຳ: AB - AC = CB):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: |AB - AC| ="}</span>
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
            {"ຈົ່ງຄັດຈ້ອນສຳນວນໃນຮູບສີ່ແຈຂ້າງຂະໜານ ABCD (ເສັ້ນເນັ່ງຈອມຕັດກັນຢູ່ O): "}{" "}
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
              <span>{"(1) ສຳນວນ AO + OB ເທົ່າກັບເວັກເຕີໃດ? (ຕອບເປັນສັນຍາລັກເວັກເຕີ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ສຳນວນ OA + OB + OC + OD ຈະມີຜົນບວກເທົ່າກັບເວັກເຕີສູນ 0. ຈົ່ງບອກຜົນບວກຂອງ OA + OC ວ່າແມ່ນເວັກເຕີໃດ? (ຕອບ 0 ຫຼື AB):"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບຄວາມໄວຂອງເຮືອຂ້າມຟາກ (Ferry Boat Velocity in River Current): "}{" "}
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
              <span>{"(1) ເຮືອຂ້າມຟາກແລ່ນຕັ້ງສາກກັບຝັ່ງດ້ວຍຄວາມໄວ v₁ = 4 m/s. ກະແສນ້ຳພັດໄປຕາມຝັ່ງດ້ວຍຄວາມໄວ v₂ = 3 m/s. ຂະໜາດຄວາມໄວລວມຂອງເຮືອ v = |v₁ + v₂| ຈະແມ່ນຈັກ m/s? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: v ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m/s"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າເຮືອແລ່ນທວນກະແສນ້ຳຢ່າງສົມບູນ (v₁ ແລະ v₂ ທິດທາງກົງກັນຂ້າມກັນ), ຂະໜາດຄວາມໄວລວມ v = |v₁ + v₂| (ເຊິ່ງ v₂ ຕິດລົບ) ຈະແມ່ນຈັກ m/s? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: v ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"m/s"}</span>
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
          <span key="u31-ans-1-1">{"(1) AC (ຍ້ອນວ່າ AB + BC = AC ຕາມຫຼັກເກັນຊາລ)"}</span>,
          <span key="u31-ans-1-2">{"(2) PS (ຍ້ອນວ່າ PQ + QR + RS = PR + RS = PS)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u31-ans-2-1">{"(1) CB (ເພາະວ່າ AB - AC = CB ຕາມຫຼັກເກັນການລົບ)"}</span>,
          <span key="u31-ans-2-2">{"(2) ZY (ເພາະວ່າ XY - XZ = ZY)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u31-ans-t1-1">{"(1) CB (ຍ້ອນວ່າ AB + CD - AD = AB + CD + DA = AB + DA + CD = AB + DC + CD = AB + DD = AB + CD - AD = AB + CD + DA = DA + AB + CD = DB + CD = CB, ຂໍໂທດ! ຜັນປ່ຽນໄດ້: AB + DA + CD = DA + AB + CD = DB + CD = CB)"}</span>,
          <span key="u31-ans-t1-2">{"(2) MR (ຍ້ອນວ່າ MN - PN + PR = MN + NP + PR = MP + PR = MR)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u31-ans-t2-1">{"(1) 5 (ເພາະວ່າ AB + AC = AD ເຊິ່ງ AD ແມ່ນເສັ້ນເນັ່ງຈອມຂອງຮູບສີ່ແຈສາກ ABCD ທີ່ມີຂ້າງແມ່ນ 3 ແລະ 4, ຄວາມຍາວແມ່ນ 5 cm)"}</span>,
          <span key="u31-ans-t2-2">{"(2) 5 (ເພາະວ່າ AB - AC = CB. ຄວາມຍາວ CB ກໍແມ່ນຂ້າງກົງສາກ 5 cm ຂອງຮູບສາມແຈສາກ ABC)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u31-ans-s1-1">{"(1) AB (ຍ້ອນ AO + OB = AB ຕາມຫຼັກຊາລ)"}</span>,
          <span key="u31-ans-s1-2">{"(2) 0 (ຍ້ອນວ່າ O ແມ່ນຈຸດເຄິ່ງກາງຂອງ AC ດັ່ງນັ້ນ OA ແລະ OC ມີທິດທາງກົງກັນຂ້າມ ແລະ ຂະໜາດເທົ່າກັນ, ຜົນບວກຈຶ່ງແມ່ນເວັກເຕີສູນ 0)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u31-ans-s2-1">{"(1) 5 (ເພາະວ່າ v₁ ຕັ້ງສາກ v₂. v² = v₁² + v₂² = 16 + 9 = 25 ⇒ v = 5 m/s)"}</span>,
          <span key="u31-ans-s2-2">{"(2) 1 (ເພາະວ່າ v = |v₁ - v₂| = |4 - 3| = 1 m/s)"}</span>,
        ],
      },
    ],
    advice: "ຫຼັກເກັນຊາລ ເປັນເຄື່ອງໝາຍການຄິດໄລ່ພື້ນຖານຂອງພຶດຊະຄະນິດເວັກເຕີ! ຝຶກຝົນການປ່ຽນເຄື່ອງໝາຍລົບເປັນບວກ ຈະຊ່ວຍໃຫ້ເຮົາຄິດໄລ່ໄດ້ງ່າຍຂຶ້ນສະເໝີເດີ້!",
  },
};
