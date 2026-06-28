import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }}>{den}</span>
  </span>
);

export const unit28Data: UnitData = {
  unitNumber: 28,
  unitTitle: "ພາກທີ V - ບົດທີ 28: ອັດຕາສ່ວນພົວພັນ (Direct Proportion)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນ (Direct Proportion), ຕົວປະສິດອັດຕາສ່ວນພົວພັນ (Proportionality Coefficient, k) ແລະ ວິທີແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນດ້ວຍສາມວິທີຫຼັກ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 211-216",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນພົວພັນ ແລະ ຕົວປະສິດ (Concept & Coefficient of Proportion)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ຕົວປະສິດ k",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສອງປະລິມານ 𝑥 ແລະ 𝑦 ເອີ້ນວ່າ "}<strong>{"ອັດຕາສ່ວນພົວພັນກົງ"}</strong>{" ຖ້າວ່າມີຕົວເລກ k ທີ່ບໍ່ແມ່ນສູນ ເຮັດໃຫ້ 𝑦 ເທົ່າກັບ k ຄູນ 𝑥:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", paddingLeft: "16px", display: "inline-flex", alignItems: "center" }}>
                {"𝑦 = k × 𝑥   ຫຼື   "}
                <Fraction num="𝑦" den="𝑥" />
                {" = k"}
              </span>
              <br />
              {"- ຕົວເລກ k ເອີ້ນວ່າ "}<strong>{"ຕົວປະສິດອັດຕາສ່ວນພົວພັນ (Coefficient of Proportionality)"}</strong>{"."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຊື້ປຶ້ມຂຽນ 1 ຫົວ ລາຄາ 4,500 ກີບ."}
                <br />
                {"- ຖ້າຊື້ 5 ຫົວ ຕ້ອງຈ່າຍ: 4,500 × 5 = 22,500 ກີບ."}
                <br />
                {"- ຖ້າຊື້ 𝑥 ຫົວ ຕ້ອງຈ່າຍ: 𝑦 = 4,500 × 𝑥 (ເຊິ່ງ k = 4,500 ແມ່ນຕົວປະສິດອັດຕາສ່ວນພົວພັນ)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: (
            <span>
              {"💡 ຖ້າ 𝑥 ເພີ່ມຂຶ້ນ 2 ເທື່ອ, 𝑦 ກໍຈະເພີ່ມຂຶ້ນ 2 ເທື່ອຕາມລຳດັບ ເຊິ່ງຄົງອັດຕາສ່ວນ "}
              <Fraction num="𝑦" den="𝑥" />
              {" = k ໄວ້ສະເໝີ!"}
            </span>
          ),
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງໃນຕາຕະລາງອັດຕາສ່ວນພົວພັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"(ຮູ້ວ່າຍອດລາຄາ ປາກກາ (𝑦) ພົວພັນກົງກັບຈຳນວນປາກກາ (𝑥) ໂດຍມີ ຕົວປະສິດ k = 3,000)"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span style={{ flexShrink: 0 }}>{"(1) ຈຳນວນປາກກາ 𝑥 = 6 ກ້ານ ⇒ ລາຄາ 𝑦 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"ກີບ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span style={{ flexShrink: 0 }}>{"(2) ລາຄາ 𝑦 = 24,000 ກີບ ⇒ ຈຳນວນປາກກາ 𝑥 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px", flexShrink: 0 }}></span>
                  <span style={{ flexShrink: 0 }}>{"ກ້ານ"}</span>
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
                {"ຄ່າຈ້າງຂອງກຳມະກອນຄົນໜຶ່ງແມ່ນ 336,000 ກີບ ຕໍ່ການເຮັດວຽກ 14 ວັນ. ຈົ່ງຊອກຫາຕົວປະສິດອັດຕາສ່ວນພົວພັນ k (ຄ່າຈ້າງຕໍ່ 1 ວັນ)? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"k ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ກີບ/ວັນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ວິທີແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນ (Solving Proportion Problems)",
      keyPoint: {
        title: "ສອງວິທີຫຼັກ: ວິທີຊອກຫາຫົວໜ່ວຍກ່ອນ ແລະ ວິທີຄູນສະຫຼັບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີ 2 ວິທີການແກ້ທີ່ນິຍົມໃຊ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"1. ວິທີຊອກຫາຫົວໜ່ວຍກ່ອນ (Unit Rate Method): "}</strong>{" ຊອກຫາຄ່າຂອງ 1 ຫົວໜ່ວຍກ່ອນ (ເຊັ່ນ: ລາຄາ 1 ແມັດ), ແລ້ວຈຶ່ງຄູນໃຫ້ຈຳນວນທີ່ຕ້ອງການ."}</li>
              <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}>
                <strong>{"2. ວິທີຄູນສະຫຼັບ (Cross-Multiplication): "}</strong>
                {" ຖ້າ 𝑥"}<sub style={{ fontSize: "0.75rem", bottom: "-0.1em" }}>{"1"}</sub>{" ພົວພັນກັບ 𝑦"}<sub style={{ fontSize: "0.75rem", bottom: "-0.1em" }}>{"1"}</sub>{" ແລະ 𝑥"}<sub style={{ fontSize: "0.75rem", bottom: "-0.1em" }}>{"2"}</sub>{" ພົວພັນກັບ 𝑦"}<sub style={{ fontSize: "0.75rem", bottom: "-0.1em" }}>{"2"}</sub>{", ເຮົາໄດ້: "}
                <span style={{ display: "inline-flex", alignItems: "center", paddingLeft: "4px" }}>
                  <Fraction num={<span>{"𝑥"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"1"}</sub></span>} den={<span>{"𝑦"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"1"}</sub></span>} />
                  {" = "}
                  <Fraction num={<span>{"𝑥"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"2"}</sub></span>} den={<span>{"𝑦"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"2"}</sub></span>} />
                  {" ⇒ 𝑦"}<sub style={{ fontSize: "0.75rem", bottom: "-0.1em" }}>{"2"}</sub>{" = "}
                  <Fraction num={<span>{"𝑥"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"2"}</sub>{" × 𝑦"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"1"}</sub></span>} den={<span>{"𝑥"}<sub style={{ fontSize: "0.65rem", bottom: "-0.1em" }}>{"1"}</sub></span>} />
                </span>
              </li>
            </ul>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຜ້າ 20 m ລາຄາ 100,000 ກີບ ⇒ 1 m ລາຄາ 5,000 ກີບ. ດັ່ງນັ້ນ ຜ້າ 7 m ລາຄາ 5,000 × 7 = 35,000 ກີບ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຜ້າແພ 20 m ມີລາຄາ 100,000 ກີບ. ຖ້າຊື້ຜ້າແພຊະນິດດຽວກັນນີ້ 7 m ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ລາຄາ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ກີບ"}</span>
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
                {"ລົດຍົນຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວສະເໝີ ໄດ້ໄລຍະທາງ 165 km ໂດຍໃຊ້ເວລາ 3 ຊົ່ວໂມງ. ຖ້າແລ່ນຕໍ່ເນື່ອງດ້ວຍຄວາມໄວເດີມເປັນເວລາ 9 ຊົ່ວໂມງ, ລົດຍົນຈະແລ່ນໄດ້ໄລຍະທາງຈັກ km? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະທາງ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"km"}</span>
                </div>
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
              {"ໂຈດການພົວພັນຄ່າແຮງງານຫຼາຍວັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຳມະກອນຄົນໜຶ່ງເຮັດວຽກ 14 ວັນ ໄດ້ຮັບຄ່າຈ້າງ 336,000 ກີບ. ຖ້າລາວເຮັດວຽກ 21 ວັນ ແລະ 30 ວັນ ຈະໄດ້ຮັບຄ່າຈ້າງທັງໝົດຈັກກີບຕາມລຳດັບ? (ຄຳນວນໂດຍໃຊ້ k ທີ່ຊອກໄດ້ຈາກຂໍ້ 2)"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄ່າຈ້າງ 21 ວັນ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄ່າຈ້າງ 30 ວັນ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການແລກປ່ຽນເຄື່ອງຂອງ (Exchange Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນການແລກປ່ຽນສິນຄ້າແບບພື້ນເມືອງ, ເຂົ້າໜົມ 6 ກ້ອນ ແລກໝາກບີໄດ້ 4 ໜ່ວຍ. ຖ້າມີເຂົ້າໜົມ 18 ກ້ອນ ຈະແລກໝາກບີໄດ້ຈັກໜ່ວຍ? ແລະ ຖ້າຢາກໄດ້ໝາກບີ 10 ໜ່ວຍ ຕ້ອງໃຊ້ເຂົ້າໜົມຈັກກ້ອນ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ແລກໝາກບີໄດ້ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ໜ່ວຍ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຕ້ອງໃຊ້ເຂົ້າໜົມ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ກ້ອນ"}</span>
              </div>
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
            {"ໂຈດປະລິມານນ້ຳມັນ ແລະ ໄລຍະທາງ (Fuel Consumption): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດຈັກຄັນໜຶ່ງໃຊ້ນ້ຳມັນ 2 ລິດ ແລ່ນໄດ້ໄລຍະທາງ 100 km. ຖ້າມີນ້ຳມັນເຫຼືອຢູ່ໃນຖັງ 5.5 ລິດ, ລົດຈັກຄັນນີ້ຈະແລ່ນໄດ້ໄລຍະທາງຕົວຈິງຈັກ km?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ແລ່ນໄດ້ໄລຍະທາງ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການຊອກຫາໄລຍະເວລາເດີນທາງ (Travel Time): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດຍົນແລ່ນໄດ້ໄລຍະທາງ 165 km ໃນເວລາ 3 ຊົ່ວໂມງ. ຖ້າແລ່ນດ້ວຍຄວາມໄວສະເໝີຄືເກົ່າໃຫ້ໄດ້ໄລຍະທາງ 660 km, ຈະຕ້ອງໃຊ້ເວລາເດີນທາງທັງໝົດຈັກຊົ່ວໂມງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕ້ອງໃຊ້ເວລາ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຊົ່ວໂມງ."}</span>
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
          <span key="1-1">{"(1) 18,000 (ຄິດໄລ່: 6 × 3,000)"}</span>,
          <span key="1-2">{"(2) 8 (ຄິດໄລ່: 24,000 / 3,000)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"336,000 / 14"}</span>,
          <span key="2-2">{"24,000"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"100,000 / 20 × 7"}</span>,
          <span key="3-2">{"35,000"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"165 / 3 × 9"}</span>,
          <span key="4-2">{"495"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ຄ່າຈ້າງ 21 ວັນ = 504,000 ກີບ"}</span>,
          <span key="c1-2">{"- ຄ່າຈ້າງ 30 ວັນ = 720,000 ກີບ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"- ແລກໝາກບີໄດ້ = 12 ໜ່ວຍ (18 × 4 / 6 = 12)"}</span>,
          <span key="c2-2">{"- ຕ້ອງໃຊ້ເຂົ້າໜົມ = 15 ກ້ອນ (10 × 6 / 4 = 15)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"275 (ຄິດໄລ່: 100 / 2 × 5.5 = 275 km)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"12 (ຄິດໄລ່: 660 / (165 / 3) = 660 / 55 = 12 ຊົ່ວໂມງ)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ອັດຕາສ່ວນພົວພັນກົງ ເປັນໜຶ່ງໃນຫົວຂໍ້ຄະນິດສາດທີ່ນຳໃຊ້ຫຼາຍທີ່ສຸດໃນການຊື້ຂາຍ, ການຄິດໄລ່ການເດີນທາງ ແລະ ການຜະລິດ. ເກັ່ງຫຼາຍ!"
  }
};
