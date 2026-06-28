import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.25rem" }}>{den}</span>
  </span>
);

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພາກທີ V - ບົດທີ 27: ອັດຕາສ່ວນ (Ratio)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງອັດຕາສ່ວນ, ຄຸນລັກສະນະພື້ນຖານຂອງອັດຕາສ່ວນ (ການຄູນ ຫຼື ການຫານອັດຕາສ່ວນດ້ວຍຈຳນວນດຽວກັນ) ແລະ ການແກ້ໂຈດບັນຫາອັດຕາສ່ວນໃນຊີວິດຈິງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 206-210",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງອັດຕາສ່ວນ (Concept of Ratios)",
      keyPoint: {
        title: "ນິຍາມ ແລະ ການຂຽນອັດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
              <span>{"- "}<strong>{"ອັດຕາສ່ວນ"}</strong>{" ລະຫວ່າງສອງປະລິມານ a ແລະ b (ເຊິ່ງ b ≠ 0) ແມ່ນຜົນຫານລະຫວ່າງ a ແລະ b, ຂຽນເປັນສັນຍະລັກດ້ວຍ: "}</span>
              <Fraction num={"a"} den={"b"} />
              <span>{" ຫຼື "}<strong>{"a:b"}</strong>{"."}</span>
              <br />
              {"- a ເອີ້ນວ່າ ພົດທີໜຶ່ງ (First term) ແລະ b ເອີ້ນວ່າ ພົດທີສອງ (Second term)."}
            </p>
            
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຄຸນລັກສະນະພື້ນຖານ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                <span>{"ອັດຕາສ່ວນຈະບໍ່ປ່ຽນແປງ ຖ້າເຮົາຄູນ ຫຼື ຫານທັງພົດທີໜຶ່ງ ແລະ ພົດທີສອງດ້ວຍຈຳນວນດຽວກັນ (ທີ່ຕ່າງຈາກ 0):"}</span>
                <br />
                <span style={{ fontSize: "1.35rem", fontWeight: "bold", color: "#1565C0", paddingLeft: "16px", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>{"a:b = (a × n) : (b × n) = ("}</span>
                  <Fraction num={"a"} den={"m"} />
                  <span>{") : ("}</span>
                  <Fraction num={"b"} den={"m"} />
                  <span>{")"}</span>
                </span>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ອັດຕາສ່ວນ 15:50 ຫານໃຫ້ 5 ທັງສອງພົດ ຈະເທົ່າກັບ 3:10 ພໍດີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ບ່ອນວ່າງເພື່ອເຮັດໃຫ້ອັດຕາສ່ວນເທົ່າກັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(1)"}</span>
                  <Fraction num={"15"} den={"50"} />
                  <span>{" = "}</span>
                  <Fraction num={"3"} den={<span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "24px", verticalAlign: "middle" }}></span>} />
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span style={{ fontWeight: "bold", flexShrink: 0 }}>{"(2)"}</span>
                  <Fraction num={"5"} den={"100"} />
                  <span>{" = "}</span>
                  <Fraction num={"1"} den={<span className="answer-blank" style={{ display: "inline-block", minWidth: "40px", width: "40px", height: "24px", verticalAlign: "middle" }}></span>} />
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
                {"ໃນໂຮງຮຽນແຫ່ງໜຶ່ງ, ອັດຕາສ່ວນຂອງນັກຮຽນຍິງຕໍ່ນັກຮຽນຊາຍແມ່ນ 3:5. ຖ້າມີນັກຮຽນຊາຍທັງໝົດ 105 ຄົນ, ຈະມີນັກຮຽນຍິງຈັກຄົນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ຈຳນວນນັກຮຽນຍິງ = 105 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການນຳໃຊ້ອັດຕາສ່ວນໃນຊີວິດຈິງ (Applying Ratios)",
      keyPoint: {
        title: "ການແບ່ງສ່ວນຕາມອັດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດນຳໃຊ້ອັດຕາສ່ວນເພື່ອຄິດໄລ່ການແບ່ງສ່ວນແຈກຢາຍ ຫຼື ການສົມທຽບປະລິມານ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງໂຈດ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6" }}>
                {"ອັດຕາສ່ວນຂອງຜູ້ກູ້ຢືມເງິນຕໍ່ຜູ້ຝາກເງິນໃນທະນາຄານແມ່ນ 2:7. ຖ້າມີຜູ້ຝາກເງິນທັງໝົດ 630 ຄົນ."}
                <br />
                <strong>{"ຈຳນວນຜູ້ກູ້ຢືມ:"}</strong>{" 630 × (2/7) = 90 × 2 = 180 ຄົນ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຄິດໄລ່ແບ່ງສ່ວນແມ່ນໃຊ້ຫຼັກການຄູນ ແລະ ຫານເລກສ່ວນທຳມະດາ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນທະນາຄານແຫ່ງໜຶ່ງ, ອັດຕາສ່ວນຂອງຜູ້ກູ້ຢືມຕໍ່ຜູ້ຝາກເງິນແມ່ນ 2:7. ຖ້າມີຜູ້ຝາກເງິນທັງໝົດ 140 ຄົນ, ຈະມີຜູ້ກູ້ຢືມເງິນຈັກຄົນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ຈຳນວນຜູ້ກູ້ຢືມ = 140 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄົນ"}</span>
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
                {"ອັດຕາສ່ວນຂອງນັກຮຽນທີ່ເສັງເກັ່ງຂອງຫ້ອງ ມ.1 ຕໍ່ນັກຮຽນທັງໝົດແມ່ນ 1:4. ຖ້າມີນັກຮຽນເສັງເກັ່ງທັງໝົດ 9 ຄົນ, ຖາມວ່ານັກຮຽນທັງໝົດໃນຫ້ອງມີຈັກຄົນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                <div>{"ປະໂຫຍກສັນຍະລັກ:"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", marginTop: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ນັກຮຽນທັງໝົດ = 9 ×"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{"ຄົນ"}</span>
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
              {"ໂຈດການແບ່ງເນື້ອທີ່ດິນ (Land Division Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊາວກະສິກອນແບ່ງດິນ 525 ຕາແມັດ (m²) ອອກເປັນສາມສ່ວນ ໂດຍມີອັດຕາສ່ວນດິນປູກເຂົ້າ ຕໍ່ ດິນປູກມັນຕົ້ນ ແມ່ນ 6:5, ແລະ ດິນປູກມັນຕົ້ນ ຕໍ່ ດິນປູກໝາກຖົ່ວ ແມ່ນ 5:4. ຈົ່ງຊອກຫາເນື້ອທີ່ດິນປູກເຂົ້າ ແລະ ດິນປູກໝາກຖົ່ວ ຕາມລຳດັບ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເນື້ອທີ່ປູກເຂົ້າ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"m²"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເນື້ອທີ່ປູກໝາກຖົ່ວ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"m²"}</span>
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
              {"ໂຈດການສົມທຽບຮູບເລຂາຄະນິດ (Geometry Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບແຕ້ມໜຶ່ງມີຮູບວົງມົນ 8 ຮູບ ແລະ ຮູບຈະຕຸລັດ 12 ຮູບ. ຈົ່ງຊອກຫາອັດຕາສ່ວນທີ່ຫຍໍ້ສຸດລະຫວ່າງ ຈຳນວນຮູບວົງມົນ ຕໍ່ ຈຳນວນຮູບຈະຕຸລັດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ອັດຕາສ່ວນແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ໂຈດການທາສີຕາມອັດຕາສ່ວນ (Shading Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບຈະຕຸລັດໜຶ່ງແບ່ງອອກເປັນ 24 ຕາຕະລາງເທົ່າກັນ. ຖ້າຕ້ອງການທາສີໃຫ້ໄດ້ອັດຕາສ່ວນ 2/3 ຂອງຮູບທັງໝົດ, ຖາມວ່າຈະຕ້ອງທາສີຈັກຕາຕະລາງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຕ້ອງທາສີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ຕາຕະລາງ."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການຄິດໄລ່ປະລິມານນ້ຳໃນຖັງ (Volume Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖັງນ້ຳໜຶ່ງມີນ້ຳຢູ່ 3/4 ຂອງບໍລິມາດທັງໝົດ. ຖ້າຕື່ມນ້ຳອີກ 27 ລິດ ຈະເຮັດໃຫ້ນ້ຳເຕັມຖັງພໍດີ. ຈົ່ງຊອກຫາບໍລິມາດທັງໝົດຂອງຖັງນ້ຳນີ້ມີຈັກລິດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ບໍລິມາດທັງໝົດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ລິດ."}</span>
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
          <span key="1-1">{"(1) 10 (ເນື່ອງຈາກ 15:50 = 3:10)"}</span>,
          <span key="1-2">{"(2) 20 (ເນື່ອງຈາກ 5:100 = 1:20)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"3/5 (ຫຼື 3 : 5)"}</span>,
          <span key="2-2">{"63"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"2/7 (ຫຼື 2 : 7)"}</span>,
          <span key="3-2">{"40 (ຄິດໄລ່: 140 × 2/7 = 40)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"4 (ຫຼື 4/1)"}</span>,
          <span key="4-2">{"36 (ຄິດໄລ່: 9 × 4 = 36)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"- ເນື້ອທີ່ປູກເຂົ້າ = 210 m²"}</span>,
          <span key="c1-2">{"- ເນື້ອທີ່ປູກໝາກຖົ່ວ = 140 m²"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"2:3 (ຫຼື 2/3, ເນື່ອງຈາກ 8/12 ຫານໃຫ້ 4 ເທົ່າກັບ 2/3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"16 (ຄິດໄລ່: 24 × 2/3 = 16 ຕາຕະລາງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"108 (ສ່ວນທີ່ເຫຼືອແມ່ນ 1 - 3/4 = 1/4 ຂອງຖັງ; 1/4 ຂອງຖັງ = 27 ລິດ; ບໍລິມາດລວມ = 27 × 4 = 108 ລິດ)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການເຂົ້າໃຈກ່ຽວກັບອັດຕາສ່ວນ ແລະ ວິທີການແກ້ໂຈດສົມທຽບ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດແບ່ງປັນສິ່ງຂອງ, ວິເຄາະຂໍ້ມູນ ແລະ ຮຽນຮູ້ເລື່ອງອັດຕາສ່ວນພົວພັນໃນບົດຕໍ່ໄປໄດ້ຢ່າງດີ!"
  }
};
