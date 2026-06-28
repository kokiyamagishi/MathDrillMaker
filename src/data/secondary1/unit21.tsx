import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px", fontSize: "0.9em", lineHeight: "1.1" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", padding: "0 4px", textAlign: "center", display: "block", width: "100%" }}>{num}</span>
    <span style={{ padding: "0 4px", textAlign: "center", display: "block", width: "100%" }}>{den}</span>
  </span>
);

export const unit21Data: UnitData = {
  unitNumber: 21,
  unitTitle: "ພາກທີ III - ບົດທີ 21: ມາດຕາສ່ວນ (Scale)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງມາດຕາສ່ວນ, ມາດຕາສ່ວນຫຍໍ້ (Reduction Scale), ມາດຕາສ່ວນຂະຫຍາຍ (Enlargement Scale) ແລະ การປ່ຽນແປງຄິດໄລ່ໄລຍະທາງຕົວຈິງກັບໄລຍະທາງໃນແຜນຜັງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 168-172",
  subSections: [
    {
      title: "1. ຄວາມໝາຍຂອງມາດຕາສ່ວນ (Concept of Scale)",
      keyPoint: {
        title: "ສູດຄິດໄລ່ມາດຕາສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.4" }}>
              {"ມາດຕາສ່ວນ ແມ່ນອັດຕາສ່ວນລະຫວ່າງ ໄລຍະທາງໃນແຜນຜັງ (ຫຼື ແຜນວາດ) ກັບ ໄລຍະທາງຕົວຈິງ:"}
            </p>
            <div style={{ padding: "8px 12px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#1565C0", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>{"ມາດຕາສ່ວນ = "}</span>
                <Fraction num={"ໄລຍະທາງໃນຮູບແຕ້ມ"} den={"ໄລຍະທາງຕົວຈິງ"} />
              </span>
              <span style={{ fontSize: "1.15rem", color: "#0D47A1" }}>{"*ໝາຍເຫດ: ທັງສອງໄລຍະທາງຕ້ອງຄິດໄລ່ໃນຫົວໜ່ວຍດຽວກັນສະເໝີ (ເຊັ່ນ: ປ່ຽນເປັນ cm ທັງໝົດ)"}</span>
            </div>

            <div style={{ padding: "8px 12px", backgroundColor: "#F9F9F9", borderRadius: "8px", border: "1px solid #E0E0E0" }}>
              <span style={{ fontSize: "1.15rem", fontWeight: "bold", color: "#37474F" }}>{"ປະເພດຂອງມາດຕາສ່ວນ:"}</span>
              <ul style={{ fontSize: "1.1rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                  <strong>{"ມາດຕາສ່ວນຫຍໍ້: "}</strong>
                  <span>{" ເຊັ່ນ: "}</span>
                  <Fraction num={"1"} den={"100"} />
                  <span>{", 1:5,000... (ຄ່າຂອງມັນນ້ອຍກວ່າ 1). ໃຊ້ເພື່ອຍໍ້ຂະໜາດຕົວຈິງໃຫ້ມີຂະໜາດນ້ອຍລົງໃນເຈ້ຍ."}</span>
                </li>
                <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                  <strong>{"ມາດຕາສ່ວນຂະຫຍາຍ: "}</strong>
                  <span>{" ເຊັ່ນ: "}</span>
                  <Fraction num={"5"} den={"1"} />
                  <span>{", 10:1... (ຄ່າຂອງມັນໃຫຍ່ກວ່າ 1). ໃຊ້ເພື່ອຂະຫຍາຍວັດຖຸຂະໜາດນ້ອຍ (ເຊັ່ນ: ຈຸລັງ, ແມງໄມ້) ໃຫ້ເຫັນຊັດເຈນ."}</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີຈື່: 1:5,000 ໝາຍຄວາມວ່າ 1 cm ໃນແຜນຜັງ ຈະເທົ່າກັບ 5,000 cm (ຫຼື 50 m) ໃນໄລຍະທາງຕົວຈິງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມຕົວເລກ ຫຼື ມາດຕາສ່ວນທີ່ຖືກຕ້ອງໃສ່ຕາຕະລາງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄะແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0" }}>
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.4" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 }}>{"(1)"}</span>
                  {"ໄລຍະທາງຕົວຈິງ 200 m (20,000 cm), ໄລຍະທາງໃນແຜນຜັງ 2 cm. ມາດຕາສ່ວນແມ່ນ 1:"}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                </p>
                
                <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.4" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px", display: "inline-block", flexShrink: 0 }}>{"(2)"}</span>
                  {"ໄລຍະທາງຕົວຈິງ 12 m (1,200 cm), ມາດຕາສ່ວນ 1:100. ໄລຍະທາງໃນແຜນຜັງແມ່ນ "}
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  {" cm"}
                </p>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນແຜນຜັງຫ້ອງການໜຶ່ງມີມາດຕາສ່ວນຂະຫຍາຍແມ່ນ 5:1. ຖ້າໄລຍະທາງໃນຮູບແຕ້ມຂອງອົງປະກອບເຄື່ອງຈັກແມ່ນ 15 cm, ໄລຍະທາງຕົວຈິງຂອງມັນຈະມີຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະທາງຕົວຈິງ = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. การຄິດໄລ່ໄລຍະທາງຕົວຈິງ ແລະ ໄລຍະທາງໃນແຜນຜັງ (Scale Calculations)",
      keyPoint: {
        title: "ວິທີການປ່ຽນແປງຄິດໄລ່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີຫຼັກການຄິດໄລ່ພື້ນຖານດັ່ງນີ້:"}
            </p>
             <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li>
                  <strong>{"ຊອກຫາໄລຍະທາງຕົວຈິງ:"}</strong>
                  <div style={{ paddingLeft: "16px", whiteSpace: "nowrap" }}>{"ໄລຍະທາງຕົວຈິງ = ໄລຍະທາງໃນແຜນຜັງ × ສ່ວນສ່ວນ (ຕົວຫານ) ຂອງມາດຕາສ່ວນ."}</div>
                </li>
                <li style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                  <strong>{"ຊອກຫາໄລຍະທາງໃນແຜນຜັງ: "}</strong>
                  <span>{" ໄລຍະທາງໃນແຜນຜັງ = "}</span>
                  <Fraction num={"ໄລຍະທາງຕົວຈິງ"} den={"ສ່ວນສ່ວນ (ຕົວຫານ) ຂອງມາດຕາສ່ວນ"} />
                </li>
              </ul>
          </div>
        ),
        hint: {
          text: "💡 ຢ່າລືມປ່ຽນຫົວໜ່ວຍຈາກ cm ເປັນ m (ຫານໃຫ້ 100) ຫຼື ເປັນ km (ຫານໃຫ້ 100,000) ຫຼັງຈາກໄດ້ຄຳຕອບຕົວຈິງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມັດ A ແລະ B ແມ່ນ 100 km. ຖ້າແຕ້ມໃສ່ແຜນທີ່ທີ່ມີມາດຕາສ່ວນ 1:2,000,000, ໄລຍະຫ່າງລະຫວ່າງ A ແລະ B ໃນແຜນທີ່ ຈະຍາວຈັກ cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະໃນແຜນທີ່ = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span style={{ flexShrink: 0 }}>{"cm"}</span>
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
                {"ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:5,000. ຖ້າວັດແທກໄລຍະຫ່າງຂອງສອງສະຖານທີ່ໄດ້ 8 cm, ໄລຍະຫ່າງຕົວຈິງຂອງສອງສະຖານທີ່ນັ້ນຈະມີຈັກ m? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "1.375rem" }}>
                <div>
                  <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "24px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                  <span>{"ໄລຍະຕົວຈິງ (m) = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span>{" = "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
                  <span style={{ flexShrink: 0 }}>{"m"}</span>
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
              {"ໂຈດການຊອກຫາຂະໜາດໃນເຈ້ຍແຕ້ມຮູບ (Scale Selection): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕ້ອງການແຕ້ມແຜນຜັງສະໜາມບິນທີ່ມີຄວາມຍາວຕົວຈິງ AB = 800 m ໃສ່ປຶ້ມຂຽນຂອງນັກຮຽນ. ຖ້ານັກຮຽນເລືອກມາດຕາສ່ວນ 1:4,000, ຖາມວ່າຄວາມຍາວ AB ໃນປຶ້ມຂຽນຈະຍາວຈັກ cm? ແລະ ມັນເໝາະສົມທີ່ຈະແຕ້ມໃສ່ເຈ້ຍປຶ້ມຂຽນທີ່ມີຄວາມຍາວປະມານ 20 cm ຫຼື ບໍ່? (ຕອບ: 'ເໝາະສົມ' ຫຼື 'ບໍ່ເໝາະສົມ')"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄວາມຍາວໃນເຈ້ຍ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ຄວາມເໝາະສົມແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", minWidth: "100px", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
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
              {"ໂຈດການຊອກຫາໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມືອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໄລຍະຫ່າງລະຫວ່າງເມືອງ A ແລະ ເມືອງ B ໃນແຜນຜັງທີ່ມີມາດຕາສ່ວນ 1:5,000,000 ແມ່ນ 8.4 cm. ຈົ່ງຊອກຫາໄລຍະທາງຕົວຈິງລະຫວ່າງສອງເມືອງນີ້ມີຈັກ km?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໄລຍະທາງຕົວຈິງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"km."}</span>
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
            {"ໂຈດການແຕ້ມຮູບຫຍໍ້ກະດານດຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ກະດານດຳແຜ່ນໜຶ່ງມີຄວາມຍາວຕົວຈິງ 4 m และ ຄວາມກວ້າງ 2 m. ຖ້າຢາກແຕ້ມໃສ່ປຶ້ມຂຽນໂດຍໃຫ້ຄວາມຍາວຂອງມັນເທົ່າກັບ 10 cm, ເຮົາຈະຕ້ອງໃຊ້ມາດຕາສ່ວນເທົ່າໃດ? ແລະ ຄວາມກວ້າງຂອງກະດານໃນຮູບແຕ້ມຈະມີຈັກ cm?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ມາດຕາສ່ວນແມ່ນ 1:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຄວາມກວ້າງໃນຮູບແຕ້ມ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "50px", width: "50px", height: "30px", verticalAlign: "middle" }}></span>
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
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດຄິດໄລ່ມຸມ ແລະ ຂະໜາດໃນຮູບຂะຫຍາຍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບສາມແຈ ABC ທີ່ມີສາມຂ້າງແມ່ນ 3 cm, 4 cm, 5 cm. ເຮົາຂະຫຍາຍຮູບສາມແຈນີ້ດ້ວຍມາດຕາສ່ວນ 2:1 (ຂະຫຍາຍເປັນ 2 ເທື່ອ). ຖາມວ່າ ຮູບສາມແຈໃໝ່ທີ່ໄດ້ຈະເປັນຮູບສາມແຈຊະນິດໃດ? ແລະ ຂ້າງທີ່ຍາວທີ່ສຸດຂອງຮູບສາມແຈໃໝ່ຈະມີຈັກ cm?"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ເປັນຮູບສາມແຈ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "100px", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"- ຂ້າງຍາວທີ່ສຸດ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", minWidth: "80px", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"cm"}</span>
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
            <span>{"10000 (ຄິດໄລ່: "}</span>
            <Fraction num={"2"} den={"20000"} />
            <span>{" = "}</span>
            <Fraction num={"1"} den={"10000"} />
            <span>{")"}</span>
          </span>,
          <span key="1-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"12 (ຄິດໄລ່: "}</span>
            <Fraction num={"1200"} den={"100"} />
            <span>{" = 12)"}</span>
          </span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1"><Fraction num={"15"} den={"5"} /></span>,
          <span key="2-2">{"3"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1"><Fraction num={"10000000"} den={"2000000"} /></span>,
          <span key="3-2">{"5"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Fraction num={<span>{"8 × 5000"}</span>} den={"100"} />
          </span>,
          <span key="4-2">{"400"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1-1">{"20"}</span>,
          <span key="c1-2">{"ບໍ່ເໝາະສົມ (ເພາະຍາວເທົ່າກັບເຈ້ຍພໍດີ, ບໍ່ມີຂອບແຕ້ມ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"420 (ຄິດໄລ່: 8.4 × 5,000,000 = 42,000,000 cm = 420 km)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1-1" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span>{"- ມາດຕາສ່ວນແມ່ນ 1:40 ("}</span>
            <Fraction num={"10"} den={"400"} />
            <span>{" = "}</span>
            <Fraction num={"1"} den={"40"} />
            <span>{")"}</span>
          </span>,
          <span key="s1-2">{"- ຄວາມກວ້າງໃນຮູບແຕ້ມ = 5 cm (200 / 40 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1">{"- ເປັນຮູບສາມແຈສາກ (ເນື່ອງຈາກ 3² + 4² = 5²)"}</span>,
          <span key="s2-2">{"- ຂ້າງຍາວທີ່ສຸດ = 10 cm (5 × 2 = 10)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ຄວາມເຂົ້າໃຈເລື່ອງມາດຕາສ່ວນ ຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈແຜນທີ່, ແຜນຜັງອາຄານ, ແລະ ການຫຍໍ້-ຂະຫຍາຍຮູບພາບໄດ້ຢ່າງຖືກຕ້ອງ. ພະຍາຍາມຕໍ່ໄປ!"
  }
};
