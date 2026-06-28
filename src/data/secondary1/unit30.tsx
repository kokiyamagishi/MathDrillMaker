import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" , whiteSpace: "nowrap"}}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" , whiteSpace: "nowrap"}}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" , whiteSpace: "nowrap"}}>{den}</span>
  </span>
);

export const unit30Data: UnitData = {
  unitNumber: 30,
  unitTitle: "ພາກທີ V - ບົດທີ 30: ການຄິດໄລ່ສ່ວນຮ້ອຍ (Percentage Calculations)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງສ່ວນຮ້ອຍ (%), ວິທີການຊອກຫາສ່ວນຮ້ອຍຂອງຈຳນວນໜຶ່ງ ແລະ ການຄິດໄລ່ສ່ວນຮ້ອຍໃນຊີວິດປະຈຳວັນ ເຊັ່ນ ລາຄາຫຼຸດ, ກຳໄລ ແລະ ສ່ວນຫຼຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 237-242",
  subSections: [
    {
      title: "1. ຄວາມໝາຍ ແລະ ວິທີຄິດໄລ່ສ່ວນຮ້ອຍ (Understanding and Calculating Percentages)",
      keyPoint: {
        title: "ສ່ວນຮ້ອຍ (%) ແມ່ນຫຍັງ?",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
              <span>{"- ສ່ວນຮ້ອຍ (%) ແມ່ນອັດຕາສ່ວນທີ່ມີພູດເປັນ 100. ເຊັ່ນ: "}</span>
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", display: "inline-flex", alignItems: "center", gap: "4px", paddingLeft: "16px" , whiteSpace: "nowrap"}}>
                <span>{"𝑥% = "}</span>
                <Fraction num={"𝑥"} den={"100"} />
              </span>
              <br />
              <span>{"- ເພື່ອຊອກຫາ "}<strong>{"𝑥% ຂອງຈຳນວນ A"}</strong>{" ເຮົາຄູນ A ໃຫ້ກັບ 𝑥%:"}</span>
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#2E7D32", display: "inline-flex", alignItems: "center", gap: "4px", paddingLeft: "16px" , whiteSpace: "nowrap"}}>
                <span>{"ຜົນໄດ້ຮັບ = A × ("}</span>
                <Fraction num={"𝑥"} den={"100"} />
                <span>{")"}</span>
              </span>
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1B5E20" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                <span>{"ໃນເນີຍແຂງ 280 g ມີໄຂມັນຢູ່ 45%. ມວນສານຂອງໄຂມັນຕົວຈິງແມ່ນ:"}</span>
                <br />
                <span style={{ fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px" , whiteSpace: "nowrap"}}>
                  <span>{"280 × ("}</span>
                  <Fraction num={"45"} den={"100"} />
                  <span>{") = 280 × 0.45 = 126 g."}</span>
                </span>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ງ່າຍໆ: ສ່ວນຮ້ອຍແມ່ນການປຽບທຽບທຸກໆປະລິມານໃສ່ກັບ 100 ສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາປະລິມານສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{" 25% ຂອງ 520 kg ⇒ 520 × ("}</span>
                  <Fraction num={"25"} den={"100"} />
                  <span>{") = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" kg"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{" 15% ຂອງ 40 kg ⇒ 40 × ("}</span>
                  <Fraction num={"15"} den={"100"} />
                  <span>{") = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" kg"}</span>
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
                {"ຈົ່ງຄິດໄລ່ຫາຄ່າ 125% ຂອງ 200 g: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: 200 ×"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "42px", flexShrink: 0 }}></span>
                <span>{" = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "42px", flexShrink: 0 }}></span>
                <span>{"g"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ອັດຕາສ່ວນຮ້ອຍ (Finding the Percentage of a Number)",
      keyPoint: {
        title: "ວິທີຊອກຫາວ່າເປັນຈັກສ່ວນຮ້ອຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ເພື່ອຊອກຫາວ່າປະລິມານ B ເປັນຈັກສ່ວນຮ້ອຍຂອງ A, ເຮົາໃຊ້ສູດ:"}
              <br />
              <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#D84315", display: "inline-flex", alignItems: "center", gap: "4px", margin: "8px 0" , whiteSpace: "nowrap"}}>
                <span>{"ສ່ວນຮ້ອຍ = ("}</span>
                <Fraction num={"B"} den={"A"} />
                <span>{") × 100%"}</span>
              </span>
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                <span>{"ມີນັກຮຽນທັງໝົດ 350 ຄົນ, ມາຮ່ວມກິດຈະກຳ 280 ຄົນ. ຄິດເປັນສ່ວນຮ້ອຍແມ່ນ:"}</span>
                <br />
                <span style={{ fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px" , whiteSpace: "nowrap"}}>
                  <span>{"("}</span>
                  <Fraction num={"280"} den={"350"} />
                  <span>{") × 100% = 0.8 × 100% = 80%."}</span>
                </span>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: <span style={{ display: "inline-flex", flexDirection: "column", gap: "8px" , whiteSpace: "nowrap"}}>
            <span>{"💡 ຕົວຢ່າງ: 9.1 g ເປັນຈັກສ່ວນຮ້ອຍຂອງ 91 g?"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
              {"ຄິດໄລ່: ("}
              <Fraction num={"9.1"} den={"91"} />
              {") × 100% = 10%!"}
            </span>
          </span>,
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາວ່າ 280 ຄົນ ຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງ 350 ຄົນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: ("}</span>
                <Fraction num={<span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "24px", verticalAlign: "middle" }}></span>} den={<span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "24px", verticalAlign: "middle" }}></span>} />
                <span>{") × 100 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"%"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນການສອບເສັງວິຊາຄະນິດສາດ, ນັກຮຽນຕອບຖືກ 18 ຂໍ້ ຈາກທັງໝົດ 25 ຂໍ້. ຖາມວ່ານັກຮຽນຕອບຖືກຄິດເປັນຈັກສ່ວນຮ້ອຍ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: ("}</span>
                <Fraction num={"18"} den={"25"} />
                <span>{") × 100 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"%"}</span>
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
              {"ໂຈດການຂຶ້ນ-ຫຼຸດລາຄາ (Price Fluctuations): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໝໍ້ຫຸງເຂົ້າໜ່ວຍໜຶ່ງມີລາຄາ 200,000 ກີບ. ຕົ້ນເດືອນມີການຂຶ້ນລາຄາ 10%, ຫຼັງຈາກນັ້ນໃນທ້າຍເດືອນມີການຫຼຸດລາຄາລົງ 10% ຂອງລາຄາໃໝ່ນັ້ນ. ຖາມວ່າລາຄາໃນທ້າຍເດືອນແມ່ນຈັກກີບ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ລາຄາຫຼັງຂຶ້ນ 10% ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ລາຄາທ້າຍເດືອນຫຼັງຫຼຸດ 10% ="}</span>
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
              {"ໂຈດການຄິດໄລ່ກຳໄລສ່ວນຮ້ອຍ (Profit Percentage): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ວຽງ ຊື້ເສື້ອມາມາໃນລາຄາ 345,000 ກີບ ແລະ ຢາກຂາຍໃຫ້ໄດ້ກຳໄລ 72,450 ກີບ. ຖາມວ່າກຳໄລທີ່ຢາກໄດ້ຄິດເປັນຈັກສ່ວນຮ້ອຍຂອງລາຄາຊື້?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ກຳໄລສ່ວນຮ້ອຍ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"%"}</span>
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
            {"ຊອກຫາອັດຕາສ່ວນຮ້ອຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາວ່າ 600 ເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງ 200?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເທົ່າກັບ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"%"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຫາປະລິມານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ 90% ຂອງ 1,000 m?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເທົ່າກັບ"}</span>
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
          <span key="1-1">{"(1) 130 (ຄິດໄລ່: 520 × 0.25)"}</span>,
          <span key="1-2">{"(2) 6 (ຄິດໄລ່: 40 × 0.15)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"1.25 (ຫຼື "} <Fraction num={"125"} den={"100"} /> {")"}</span>,
          <span key="2-2">{"250 (ຄິດໄລ່: 200 × 1.25)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1"><Fraction num={"280"} den={"350"} /></span>,
          <span key="3-2">{"80"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"72"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ລາຄາຫຼັງຂຶ້ນ = 220,000 ກີບ"}</span>,
          <span key="c1-2">{"- ລາຄາທ້າຍເດືອນ = 198,000 ກີບ"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"21 (ຄິດໄລ່: "} <Fraction num={"72,450"} den={"345,000"} /> {" × 100)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"300 (ຄິດໄລ່: ("} <Fraction num={"600"} den={"200"} /> {") × 100)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"900 (ຄິດໄລ່: 1,000 × 0.90)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ເຈົ້າໄດ້ຮຽນຮູ້ກ່ຽວກັບການຄິດໄລ່ສ່ວນຮ້ອຍຢ່າງຈະແຈ້ງແລ້ວ. ມັນເປັນປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ສ່ວນຫຼຸດ ແລະ ລາຄາເຄື່ອງຂອງຕ່າງໆ!"
  }
};
