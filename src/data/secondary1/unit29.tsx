import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }, whiteSpace: "nowrap"}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }, whiteSpace: "nowrap"}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }, whiteSpace: "nowrap"}>{den}</span>
  </span>
);

export const unit29Data: UnitData = {
  unitNumber: 29,
  unitTitle: "ພາກທີ V - ບົດທີ 29: ການຊອກຫາພົດທີບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນ (Finding Unknown Terms of Proportion)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບວິທີການຊອກຫາພົດທີ່ບໍ່ທັນຮູ້ໃນອັດຕາສ່ວນ (Fourth Proportional) ໂດຍໃຊ້ຫຼັກການຄູນສະຫຼັບ (Cross-Multiplication) ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 227-232",
  subSections: [
    {
      title: "1. ຫຼັກການຄູນສະຫຼັບ ແລະ ພົດທີສີ່ (Cross-Multiplication Principle)",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານ: ຜົນຄູນໄຂວ່ເທົ່າກັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຖ້າເຮົາມີສອງອັດຕາສ່ວນທີ່ເທົ່າກັນ: "}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0", display: "inline-flex", alignItems: "center", gap: "8px", margin: "12px 0" }, whiteSpace: "nowrap"}>
                <Fraction num={"a"} den={"b"} />
                <span>{" = "}</span>
                <Fraction num={"c"} den={"d"} />
                <span>{"   ⇒   a × d = b × c"}</span>
              </span>
              <br />
              <span>{"ເຊິ່ງເຮົາສາມາດຊອກຫາພົດໃດໜຶ່ງທີ່ບໍ່ຮູ້ຄ່າ (ຕົວຢ່າງ: 𝑥) ໄດ້ຢ່າງງ່າຍດາຍ:"}</span>
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", borderLeft: "4px solid #4CAF50" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ສູດການຊອກຫາ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: "8px 0 0 0", paddingLeft: "20px", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                  <span>{"ຖ້າຊອກຫາ 𝑥 ໃນ "}</span>
                  <Fraction num={"a"} den={"b"} />
                  <span>{" = "}</span>
                  <Fraction num={"c"} den={"𝑥"} />
                  <span>{" ⇒ 𝑥 = "}</span>
                  <Fraction num={<span>{"b × c"}</span>} den={"a"} />
                </li>
                <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                  <span>{"ຖ້າຊອກຫາ 𝑥 ໃນ "}</span>
                  <Fraction num={"𝑥"} den={"b"} />
                  <span>{" = "}</span>
                  <Fraction num={"c"} den={"d"} />
                  <span>{" ⇒ 𝑥 = "}</span>
                  <Fraction num={<span>{"b × c"}</span>} den={"d"} />
                </li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ຜົນຄູນໄຂວ່ (Cross-Product) ຂອງສອງອັດຕາສ່ວນທີ່ເທົ່າກັນ ຈະມີຄ່າເທົ່າກັນສະເໝີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາພົດທີບໍ່ທັນຮູ້ (𝑥, 𝑦, 𝑧) ຈາກອັດຕາສ່ວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  <div><strong>{"(1)"}</strong>{" ຖ້າອັດຕາສ່ວນແມ່ນ:"}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                    <Fraction num={"35"} den={"25"} />
                    <span>{" = "}</span>
                    <Fraction num={"21"} den={"𝑥"} />
                    <span>{" ⇒ 35 × 𝑥 = 25 × 21 ⇒ 𝑥 = "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  </div>
                </div>
                <div style={{ fontSize: "1.375rem", lineHeight: "1.8", marginTop: "12px" }}>
                  <div><strong>{"(2)"}</strong>{" ຖ້າອັດຕາສ່ວນແມ່ນ:"}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                    <Fraction num={"24"} den={"32"} />
                    <span>{" = "}</span>
                    <Fraction num={"𝑦"} den={"64"} />
                    <span>{" ⇒ 32 × 𝑦 = 24 × 64 ⇒ 𝑦 = "}</span>
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  </div>
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
                {"ຊອກຫາຄ່າຂອງ 𝑧 ຈາກອັດຕາສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <Fraction num={"152"} den={"𝑧"} />
                  <span>{" = "}</span>
                  <Fraction num={"95"} den={"55"} />
                  <span>{" ⇒ 𝑧 = "}</span>
                  <Fraction num={<span className="answer-blank" style={{ display: "inline-block", minWidth: "70px", width: "70px", height: "24px", verticalAlign: "middle" }}></span>} den={"95"} />
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແກ້ໂຈດບັນຫາໂດຍການຕັ້ງອັດຕາສ່ວນ (Solving Real-world Problems)",
      keyPoint: {
        title: "ຂັ້ນຕອນການແກ້ໂຈດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນມີ 3 ຂັ້ນຕອນຫຼັກ:"}
            </p>
            <ol style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຕັ້ງຕົວປ່ຽນ: "}</strong>{" ກໍານົດຕົວປ່ຽນ (ເຊັ່ນ 𝑥) ແທນປະລິມານທີ່ຕ້ອງການຊອກຫາ."}</li>
              <li><strong>{"ຂຽນສົມຜົນອັດຕາສ່ວນ: "}</strong>{" ຕັ້ງອັດຕາສ່ວນໃຫ້ຖືກຕ້ອງຕາມຄວາມສຳພັນ."}</li>
              <li><strong>{"ຄິດໄລ່: "}</strong>{" ໃຊ້ຫຼັກການຄູນສະຫຼັບເພື່ອຊອກຫາຄ່າຂອງຕົວປ່ຽນນັ້ນ."}</li>
            </ol>
          </div>
        ),
        hint: {
          text: <span style={{ display: "inline-flex", flexDirection: "column", gap: "8px" }, whiteSpace: "nowrap"}>
            <span>{"💡 ຕົວຢ່າງ: ແປ້ງ 15 kg ເຮັດເຂົ້າຈີ່ໄດ້ 21 kg. ຖ້າມີແປ້ງ 22 kg ຈະເຮັດໄດ້ 𝑥 kg."}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
              <span>{"ຕັ້ງເປັນ: "}</span>
              <Fraction num={"21"} den={"15"} />
              <span>{" = "}</span>
              <Fraction num={"𝑥"} den={"22"} />
              <span>{" ⇒ 𝑥 = "}</span>
              <Fraction num={<span>{"21 × 22"}</span>} den={"15"} />
              <span>{" = 30.8 kg!"}</span>
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
                {"ຊີ້ນໝູ 600 g ລາຄາ 15,000 ກີບ. ຖ້າຕ້ອງການຊື້ຊີ້ນໝູ 900 g ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ສົມຜົນ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <Fraction num={"𝑥"} den={"900"} />
                  <span>{" = "}</span>
                  <Fraction num={"15,000"} den={"600"} />
                  <span>{" ⇒ 𝑥 = "}</span>
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
                {"ລົດຍົນຄັນໜຶ່ງໃຊ້ນ້ຳມັນ 13 ລິດ ເພື່ອແລ່ນໄດ້ໄລຍະທາງ 260 km. ຖ້າມີນ້ຳມັນ 85 ລິດ ຈະແລ່ນໄດ້ໄລຍະທາງຈັກ km? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ສົມຜົນ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <Fraction num={"𝑥"} den={"85"} />
                  <span>{" = "}</span>
                  <Fraction num={"260"} den={"13"} />
                  <span>{" ⇒ 𝑥 = "}</span>
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
              {"ໂຈດແຕ້ມແຜນຜັງເຮືອນ (Scale Model Plot): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນແຜນຜັງ, ຂະໜາດຫຍໍ້ 12 cm ແທນຂະໜາດຈິງ 2,400 cm. ຖ້າຫາກຂະໜາດຫຍໍ້ຂອງຄວາມກວ້າງແມ່ນ 6 cm, ຂະໜາດຈິງຈະແມ່ນຈັກ cm? ແລະ ຖ້າຂະໜາດຈິງແມ່ນ 1,600 cm, ຂະໜາດຫຍໍ້ b ຈະແມ່ນຈັກ cm?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຂະໜາດຈິງຂອງຄວາມກວ້າງ (a) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຂະໜາດຫຍໍ້ (b) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"cm"}</span>
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
              {"ໂຈດອັດຕາສ່ວນປະສົມໂລຫະ (Alloy Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທອງແດງມີມວນສານພົວພັນກົງກັບບໍລິມາດ. ບໍລິມາດທອງແດງ 8 cm³ ມີມວນສານ 71.2 g. ຖ້າມີບໍລິມາດ 50 cm³, ຈະມີມວນສານຈັກ g? (ປັດເສດເປັນເລກທົດສະນິຍົມ 1 ຕຳແໜ່ງ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ມວນສານ 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"g"}</span>
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
            {"ຄິດໄລ່ຫາຄ່າ 𝑦 ຈາກສົມຜົນອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"ຊອກຫາ 𝑦 ຈາກ: "}</span>
            <Fraction num={"34"} den={"136"} />
            <span>{" = "}</span>
            <Fraction num={"𝑦"} den={"6"} />
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑦 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດແລ່ນລົດໄຟ (Train Distance): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດໄຟແລ່ນໄດ້ໄລຍະທາງ 152 km ໃນເວລາ 2 ຊົ່ວໂມງ. ຖ້າແລ່ນດ້ວຍຄວາມໄວເທົ່າເດີມເປັນເວລາ 5 ຊົ່ວໂມງ ຈະໄດ້ໄລຍະທາງຈັກ km?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄລຍະທາງ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km."}</span>
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
          <span key="1-1">{"(1) 15 (ຄິດໄລ່: "} <Fraction num={<span>{"25 × 21"}</span>} den={"35"} /> {")"}</span>,
          <span key="1-2">{"(2) 48 (ຄິດໄລ່: "} <Fraction num={<span>{"24 × 64"}</span>} den={"32"} /> {")"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-comb">{"152 × 55, 88 (ຄິດໄລ່: "} <Fraction num={<span>{"152 × 55"}</span>} den={"95"} /> {")"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1"><Fraction num={<span>{"15,000 × 900"}</span>} den={"600"} /></span>,
          <span key="3-2">{"22,500"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1"><Fraction num={<span>{"260 × 85"}</span>} den={"13"} /></span>,
          <span key="4-2">{"1,700"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ຂະໜາດຈິງ a = 1,200 cm (ຄິດໄລ່: "} <Fraction num={<span>{"6 × 2,400"}</span>} den={"12"} /> {")"}</span>,
          <span key="c1-2">{"- ຂະໜາດຫຍໍ້ b = 8 cm (ຄິດໄລ່: "} <Fraction num={<span>{"1,600 × 12"}</span>} den={"2,400"} /> {")"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"445 (ຄິດໄລ່: "} <Fraction num={<span>{"71.2 × 50"}</span>} den={"8"} /> {")"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1.5 (ຄິດໄລ່: "} <Fraction num={<span>{"34 × 6"}</span>} den={"136"} /> {")"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"380 (ຄິດໄລ່: "} <Fraction num={<span>{"152 × 5"}</span>} den={"2"} /> {")"}</span>
        ]
      }
    ],
    advice: "ສຸດຍອດຫຼາຍ! ການຊອກຫາພົດທີບໍ່ທັນຮູ້ຂອງອັດຕາສ່ວນແມ່ນທັກສະທີ່ສຳຄັນທີ່ສຸດໃນຄະນິດສາດ ແລະ ວິທະຍາສາດ. ເຈົ້າເຮັດໄດ້ດີຫຼາຍ!"
  }
};
