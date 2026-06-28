import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px", fontSize: "0.9em", lineHeight: "1.1" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", padding: "0 4px", textAlign: "center", display: "block", width: "100%" }}>{num}</span>
    <span style={{ padding: "0 4px", textAlign: "center", display: "block", width: "100%" }}>{den}</span>
  </span>
);

export const unit22Data: UnitData = {
  unitNumber: 22,
  unitTitle: "ພາກທີ III - ບົດທີ 22: ມາດຕາສ່ວນ (ຕໍ່)",
  unitGoal: "ຮຽນຮູ້ການແກ້ໂຈດບັນຫາຂັ້ນສູງກ່ຽວກັບມາດຕາສ່ວນ, ການຊອກຫາໄລຍະທາງຕົວຈິງຈາກແຜນທີ່, ການຄິດໄລ່ເວລາເດີນທາງ ແລະ ການວາງແຜນຜັງຜັງເມືອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 176-181",
  subSections: [
    {
      title: "1. การຊອກຫາໄລຍະທາງຕົວຈິງຈາກແຜນທີ່ (Finding Actual Distance from Maps)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ສູດຄິດໄລ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອຊອກຫາໄລຍະທາງຕົວຈິງ ໂດຍຮູ້ໄລຍະທາງໃນແຜນທີ່ ແລະ ມາດຕາສ່ວນ, ເຮົາໃຊ້ສູດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2E7D32", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>{"ໄລຍະທາງຕົວຈິງ = "}</span>
                <Fraction num={"ໄລຍະທາງໃນແຜນທີ່"} den={"ມາດຕາສ່ວນ"} />
              </span>
              <span style={{ fontSize: "1.25rem", color: "#1B5E20" }}>{"ຫຼື  ໄລຍະທາງຕົວຈິງ = ໄລຍະທາງໃນແຜນທີ່ × ຕົວຫານຂອງມາດຕາສ່ວນ"}</span>
            </div>

            <div style={{ padding: "16px", backgroundColor: "#F9F9F9", borderRadius: "8px", border: "1px solid #E0E0E0" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#37474F" }}>{"ຕົວຢ່າງການຄິດໄລ່:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ໃນແຜນທີ່ປະເທດລາວທີ່ມີມາດຕາສ່ວນ 1:1,500,000, ວັດແທກໄລຍະຫ່າງລະຫວ່າງ ແຂວງຫຼວງພະບາງ ຫາ ນະຄອນຫຼວງວຽງຈັນ ໄດ້ 14.5 cm."}
                <br />
                <strong>{"ໄລຍະທາງຕົວຈິງ:"}</strong> <span style={{ whiteSpace: "nowrap" }}>{"14.5 cm × 1,500,000 = 21,750,000 cm = 217.5 km."}</span>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝັ້ນໃຈໃນການປ່ຽນຫົວໜ່ວຍ: 1 km = 1,000 m = 100,000 cm!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:250,000, ວັດແທກໄລຍະທາງລະຫວ່າງເມືອງ A ຫາ B ໄດ້ 6 cm. ໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມືອງນີ້ແມ່ນຈັກ km? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະທາງຕົວຈິງ = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span style={{ flexShrink: 0 }}>{"km"}</span>
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
                {"ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:50,000, ວັດແທກໄລຍະທາງໃນແຜນຜັງໄດ້ 8 cm, 12 cm. ຈົ່ງຊອກຫາໄລຍະທາງຕົວຈິງເປັນ m? "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 }}>{"(1)"}</span>
                  {"ໄລຍະທາງ 8 cm ຕົວຈິງແມ່ນ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" m"}
                </p>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "2.0" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 }}>{"(2)"}</span>
                  {"ໄລຍະທາງ 12 cm ຕົວຈິງແມ່ນ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" m"}
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ໂຈດປະສົມເວລາເດີນທາງ ແລະ ການວາງແຜນຜັງ (Advanced Spacing and Travel Time Problems)",
      keyPoint: {
        title: "ໂຈດປະສົມເວລາເດີນທາງ ແລະ ການປັກເສົາ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດນຳໃຊ້ມາດຕາສ່ວນຮ່ວມກັບສູດວິທະຍາສາດ (ຄວາມໄວ, ເວລາ, ໄລຍະທາງ) ແລະ ການປັກເສົາເປັນຫວ່າງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງໂຈດເວລາເດີນທາງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.8", marginTop: "8px" }}>
                {"ໃນແຜນທີ່ 1:5,000,000, ວັດໄດ້ 134 mm (13.4 cm). "}
                <span style={{ whiteSpace: "nowrap" }}>{"ໄລຍະທາງຕົວຈິງ = 13.4 × 5,000,000 = 67,000,000 cm = 670 km."}</span>
                <br />
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                  <span>{"ຖ້າເຮືອບິນບິນດ້ວຍຄວາມໄວສະເລ່ຍ 134 km/h. ເວລາເດີນທາງ = "}</span>
                  <Fraction num={"670"} den={"134"} />
                  <span>{" = 5 ຊົ່ວໂມງ."}</span>
                </span>
                <br />
                {"ຖ້າອອກເດີນທາງເວລາ 12:20, ຈະຮອດຈຸດໝາຍເວລາ 17:20."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: (
            <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <span>{"💡 ວິທີຄິດໄລ່: "}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                <span>{"ຄວາມໄວ (Speed) = "}</span>
                <Fraction num={"ໄລຍະທາງ"} den={"ເວລາ"} />
              </span>
              <span>{" ແລະ "}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                <span>{"ເວລາ = "}</span>
                <Fraction num={"ໄລຍະທາງ"} den={"ຄວາມໄວ"} />
              </span>
            </span>
          ),
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນແຜນຜັງ 1:20,000, ວັດແທກໄລຍະທາງແຄມທາງໂຄ້ງໄດ້ 43.2 mm (4.32 cm). ຖ້າຕ້ອງການປັກເສົາໄຟຟ້ານ້ອຍຫ່າງກັນ 12 m, ໂດຍມີເສົາຢູ່ທັງສອງສົ້ນທາງ, ຈະຕ້ອງໃຊ້ເສົາໄຟຟ້າທັງໝົດຈັກຕົ້ນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ຕອບ: ໄລຍະທາງຕົວຈິງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"m , ຕ້ອງໃຊ້ເສົາທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"ຕົ້ນ"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນແຜນຜັງ 1:50,000, ໄລຍະທາງລະຫວ່າງຈຸດ A ຫາ B ແມ່ນ 239 mm (23.9 cm). ຖ້າສາຍໄຟຟ້າແຮງສູງຖືກດຶງຜ່ານເສົາໄຟຟ້າທີ່ມີໄລຍະຫ່າງແຕ່ລະຕົ້ນແມ່ນ 50 m. ຖ້າມີເສົາຢູ່ຈຸດ A ແລະ B ນຳ, ຈະຕ້ອງໃຊ້ເສົາໄຟຟ້າທັງໝົດຈັກຕົ້ນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span>{"ຕອບ: ໄລຍະທາງຕົວຈິງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"m , ຕ້ອງໃຊ້ເສົາທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"ຕົ້ນ"}</span>
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
              {"ໂຈດການປ່ຽນແຜນຜັງໃໝ່ (Scaling Modification): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມາດຕາສ່ວນຂອງແຜນຜັງເກົ່າແມ່ນ 1:24. ຕ້ອງການສ້າງແຜນຜັງໃໝ່ໃຫ້ມີຂະໜາດເປັນ 1/3 ຂອງແຜນຜັງເກົ່າ (ຫຍໍ້ລົງອີກ 3 ເທື່ອ). ຖາມວ່າມາດຕາສ່ວນຂອງແຜນຜັງໃໝ່ຈະເທົ່າກັບ 1 ຕໍ່ເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມາດຕາສ່ວນແຜນຜັງໃໝ່ແມ່ນ 1 :"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການປ່ຽນແຜນຜັງຂະຫຍາຍ (Rhombus scale): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມາດຕາສ່ວນຂອງແຜນຜັງເກົ່າແມ່ນ 1:60. ຕ້ອງການສ້າງແຜນຜັງໃໝ່ໃຫ້ມີຂະໜາດເປັນ 1/4 ຂອງແຜນຜັງເກົ່າ (ຫຍໍ້ລົງ 4 ເທື່ອ). ຖາມວ່າມາດຕາສ່ວນຂອງແຜນຜັງໃໝ່ຈະເທົ່າກັບ 1 ຕໍ່ເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ມາດຕາສ່ວນແຜນຜັງໃໝ່ແມ່ນ 1 :"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
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
            {"ໂຈດເວລາເດີນທາງຂອງຍົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນແຜນທີ່ 1:5,000,000, ວັດແທກໄລຍະທາງເດີນທາງຂອງຍົນໄດ້ 13.4 cm. ຖ້າຍົນບິນດ້ວຍຄວາມໄວສະເລ່ຍ 134 km/h, ແລະ ອອກເດີນທາງເວລາ 12:20. ຖາມວ່າຍົນຈະຮອດປາຍທາງເວລາຈັກໂມງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈະຮອດປາຍທາງເວລາ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຄິດໄລ່ຂະໜາດຕົວຈິງຂອງທົ່ງນາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນແຜນຜັງ 1:10,000. ວັດແທກຮູບສີ່ແຈສາກຂອງທົ່ງນາໄດ້ ຂ້າງຍາວ 6 cm, ຂ້າງກວ້າງ 2.5 cm. จົ່ງຊອກຫາຄວາມຍາວ ແລະ ຄວາມກວ້າງຕົວຈິງຂອງທົ່ງນານີ້ເປັນ m?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມຍາວຕົວຈິງ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"m"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມກວ້າງຕົວຈິງ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"m"}</span>
            </div>
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
          <span key="1-1" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Fraction num={<span>{"6 × 250,000"}</span>} den={"100,000"} />
          </span>,
          <span key="1-2">{"15"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num={<span>{"8 × 50,000"}</span>} den={"100"} />
            <span>{" = 4,000 m"}</span>
          </span>,
          <span key="2-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"(2) "}</span>
            <Fraction num={<span>{"12 × 50,000"}</span>} den={"100"} />
            <span>{" = 6,000 m"}</span>
          </span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"ໄລຍະທາງຕົວຈິງ = 4.32 cm × 20,000 = 86,400 cm = 864 m"}</span>,
          <span key="3-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"ຈຳນວນເສົາ = "}</span>
            <Fraction num={"864"} den={"12"} />
            <span>{" + 1 = 73 ຕົ້ນ"}</span>
          </span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"ໄລຍະທາງຕົວຈິງ = 23.9 cm × 50,000 = 1,195,000 cm = 11,950 m"}</span>,
          <span key="4-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"ຈຳນວນເສົາ = "}</span>
            <Fraction num={"11,950"} den={"50"} />
            <span>{" + 1 = 240 ຕົ້ນ"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"72 (ຄິດໄລ່: 24 × 3 = 72)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"240 (ຄິດໄລ່: 60 × 4 = 240)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"17:20 (ໄລຍະທາງ 670 km, ເວລາບິນ = 5 ຊົ່ວໂມງ; 12:20 + 5h = 17:20)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"- ຄວາມຍາວຕົວຈິງ = 600 m ("}</span>
            <Fraction num={<span>{"6 × 10,000"}</span>} den={"100"} />
            <span>{" = 600)"}</span>
          </span>,
          <span key="s2-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"- ຄວາມກວ້າງຕົວຈິງ = 250 m ("}</span>
            <Fraction num={<span>{"2.5 × 10,000"}</span>} den={"100"} />
            <span>{" = 250)"}</span>
          </span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຄິດໄລ່ມາດຕາສ່ວນ ແລະ ນຳໃຊ້ໃນຊີວິດຈິງ ຈະຊ່ວຍໃຫ້ເຮົາສາມາດວາງແຜນຜັງ, ແກ້ໂຈດເວລາເດີນທາງ ແລະ ການອອກແບບວິສະວະກຳໄດ້ຢ່າງເກັ່ງກ້າ!"
  }
};
