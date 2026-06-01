import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit40Data: UnitData = {
  unitNumber: 40,
  unitTitle: "ພາກທີ VII - ບົດທີ 40: ການແບ່ງປະເພດຂໍ້ມູນສະຖິຕິ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີແບ່ງປະເພດຂໍ້ມູນສະຖິຕິ ອອກເປັນຂໍ້ມູນຄຸນນະພາບ (Qualitative Data) ແລະ ຂໍ້ມູນປະລິມານ (Quantitative Data) ພ້ອມທັງຂໍ້ມູນບໍ່ຕໍ່ເນື່ອງ ແລະ ຕໍ່ເນື່ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 40 ໜ້າ 235-240",
  keyPoints: [
    {
      title: "1. ປະເພດຂອງຂໍ້ມູນສະຖິຕິ (Types of Statistical Data)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຂໍ້ມູນສະຖິຕິສາມາດແບ່ງອອກເປັນສອງປະເພດໃຫຍ່ໆດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• 1. ຂໍ້ມູນຄຸນນະພາບ (Qualitative / Categorical Data):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ແມ່ນຂໍ້ມູນທີ່ບອກລັກສະນະ, ສະພາບ ຫຼື ຄຸນສົມບັດ ທີ່ບໍ່ສາມາດວັດແທກເປັນຕົວເລກຄິດໄລ່ໄດ້ໂດຍກົງ."}
                <br />
                <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#2E7D32" }}>
                  {"(ຕົວຢ່າງ: ເພດ, ສັນຊາດ, ກຸ່ມເລືອດ, ລະດັບການສຶກສາ, ຄວາມຄິດເຫັນ)"}
                </span>
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• 2. ຂໍ້ມູນປະລິມານ (Quantitative / Numerical Data):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ແມ່ນຂໍ້ມູນທີ່ເປັນຕົວເລກ ທີ່ສາມາດນຳມາບວກ, ລົບ, ຄູນ, ຫານ ຫຼື ຄິດໄລ່ຄ່າສະເລ່ຍໄດ້."}
                <br />
                <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                  {"- ຂໍ້ມູນບໍ່ຕໍ່ເນື່ອງ (Discrete): ໄດ້ຈາກການນັບ (ຕົວຢ່າງ: ຈຳນວນຄົນ, ຈຳນວນລົດ, ຈຳນວນປຶ້ມ)."}
                  <br />
                  {"- ຂໍ້ມູນຕໍ່ເນື່ອງ (Continuous): ໄດ້ຈາກການວັດແທກ (ຕົວຢ່າງ: ສ່ວນສູງ, ນ້ຳໜັກ, ອຸນຫະພູມ, ເວລາ)."}
                </span>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ວິທີຈື່ຈຳງ່າຍໆ: ຂໍ້ມູນຄຸນນະພາບແມ່ນບອກ 'ລັກສະນະ' (Categorical), ສ່ວນຂໍ້ມູນປະລິມານແມ່ນບອກ 'ຕົວເລກວັດແທກ' (Numerical) ເດີ້!",
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
            {"ຈົ່ງຈຳແນກປະເພດຂໍ້ມູນ ວ່າແມ່ນຂໍ້ມູນຄຸນນະພາບ ຫຼື ຂໍ້ມູນປະລິມານ: "}{" "}
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
              <span>{"(1) 'ກຸ່ມເລືອດ A, B, AB, O ຂອງນັກຮຽນ' ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 'ສ່ວນສູງ (cm) ຂອງນັກຮຽນໃນຫ້ອງ' ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
            {"ຈົ່ງຈຳແນກຂໍ້ມູນປະລິມານ ວ່າແມ່ນຂໍ້ມູນບໍ່ຕໍ່ເນື່ອງ (Discrete) ຫຼື ຂໍ້ມູນຕໍ່ເນື່ອງ (Continuous): "}{" "}
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
              <span>{"(1) 'ຈຳນວນພີ່ນ້ອງຮ່ວມອຸທອນ (ຄົນ) ຂອງນັກຮຽນ' ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ບໍ່ຕໍ່ເນື່ອງ ຫຼື ຕໍ່ເນື່ອງ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 'ນ້ຳໜັກຕົວ (kg) ຂອງເດັກເກີດໃໝ່' ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ບໍ່ຕໍ່ເນື່ອງ ຫຼື ຕໍ່ເນື່ອງ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ລະວັງຕົວເລກທີ່ໃຊ້ເປັນລະຫັດ (ເຊັ່ນ ລະຫັດໄປສະນີ, ເບີໂທລະສັບ) ທີ່ບໍ່ສາມາດນຳມາບວກລົບກັນໄດ້! ບົດທ້າທາຍ 2: ຂໍ້ມູນລະດັບຄວາມພໍໃຈກໍແມ່ນຄຸນນະພາບເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຈຳແນກກໍລະນີພິເສດຂອງຕົວເລກ ທີ່ບໍ່ແມ່ນຂໍ້ມູນປະລິມານ: "}{" "}
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
                <span>{"(1) 'ລະຫັດໄປສະນີ ຂອງແຂວງຕ່າງໆໃນປະເທດລາວ (ຕົວຢ່າງ: 01000)' ແມ່ນຂໍ້ມູນຄຸນນະພາບ ຫຼື ປະລິມານ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) 'ເບີໂທລະສັບມືຖື ຂອງນັກຮຽນ' ແມ່ນຂໍ້ມູນຄຸນນະພາບ ຫຼື ປະລິມານ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
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
              {"ຈົ່ງຈຳແນກປະເພດຂໍ້ມູນການປະເມີນລະດັບ (Ordinal Qualitative Data): "}{" "}
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
                <span>{"(1) 'ລະດັບຄວາມເພິ່ງພໍໃຈຕໍ່ການບໍລິການ (ດີຫຼາຍ, ດີ, ປານກາງ, ປັບປຸງ)' ແມ່ນຂໍ້ມູນຄຸນນະພາບ ຫຼື ປະລິມານ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) 'ຄະແນນສອບເສັງວິຊາຄະນິດສາດ (ເຕັມ 10)' ແມ່ນຂໍ້ມູນຄຸນນະພາບ ຫຼື ປະລິມານ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
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
            {"ຈົ່ງຈຳແນກວິທີການເກັບກຳຂໍ້ມູນສະຖິຕິ: "}{" "}
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
              <span>{"(1) ການເກັບກຳຂໍ້ມູນໂດຍການສົ່ງແບບສອບຖາມ (Questionnaire) ໄປຫາລູກຄ້າ ເພື່ອຖາມກຸ່ມເລືອດ ແລະ ຄວາມຄິດເຫັນ ຈະໄດ້ຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ການຊັ່ງນ້ຳໜັກ ແລະ ວັດສ່ວນສູງຂອງນັກຮຽນໃນຫ້ອງຮ່ວມກັບຕາຕະລາງບັນທຶກ ຈະໄດ້ຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
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
            {"ຈົ່ງແກ້ໂջດບັນຫາຕົວຈິງກ່ຽວກັບການຈັດການຖານຂໍ້ມູນຂອງຮ້ານສະດວກຊື້ (Convenience Store Inventory Management): "}{" "}
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
              <span>{"(1) ຜູ້ຈັດການຮ້ານບັນທຶກ 'ຊື່ສິນຄ້າ ແລະ ປະເພດສິນຄ້າ (ເຄື່ອງດື່ມ, ອາຫານ, ເຄື່ອງໃຊ້)' ເພື່ອຈັດໝວດໝູ່. ຂໍ້ມູນນີ້ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຜູ້ຈັດການບັນທຶກ 'ຈຳນວນສິນຄ້າທີ່ຂາຍໄດ້ (ຊິ້ນ)' ໃນແຕ່ລະວັນ ເພື່ອຄິດໄລ່ລາຍຮັບ. ຂໍ້ມູນນີ້ແມ່ນຂໍ້ມູນປະເພດໃດ? (ຕອບ: ຄຸນນະພາບ ຫຼື ປະລິມານ):"}</span>
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
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u40-ans-1-1">{"(1) ຄຸນນະພາບ (ເພາະວ່າກຸ່ມເລືອດເປັນຂໍ້ຄວາມບອກລັກສະນະ ສະພາບ ທີ່ບໍ່ສາມາດເອົາມາຄິດໄລ່ເລກໄດ້)"}</span>,
          <span key="u40-ans-1-2">{"(2) ປະລິມານ (ເພາະວ່າສ່ວນສູງເປັນຕົວເລກວັດແທກ ທີ່ສາມາດນຳມາຫາຄ່າສະເລ່ຍໄດ້)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u40-ans-2-1">{"(1) ບໍ່ຕໍ່ເນື່ອງ (ເພາະວ່າຈຳນວນຄົນໄດ້ຈາກການນັບ ແລະ ຕ້ອງເປັນຕົວເລກຖ້ວນສະເໝີ)"}</span>,
          <span key="u40-ans-2-2">{"(2) ຕໍ່ເນື່ອງ (ເພາະວ່ານ້ຳໜັກໄດ້ຈາກການວັດແທກ ເຊິ່ງສາມາດມີຄ່າທົດສະນິຍົມລະອຽດໄດ້)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u40-ans-t1-1">{"(1) ຄຸນນະພາບ (ເພາະລະຫັດໄປສະນີເຖິງວ່າຈະເປັນຕົວເລກ ແຕ່ມີໄວ້ເປັນສັນຍາລັກບອກແຂວງ ບໍ່ສາມາດເອົາມາບວກລົບກັນໄດ້)"}</span>,
          <span key="u40-ans-t1-2">{"(2) ຄຸນນະພາບ (ເພາະເບີໂທລະສັບມີໄວ້ເປັນສັນຍາລັກຕິດຕໍ່ ບໍ່ສາມາດນຳມາຄິດໄລ່ເລກຄະນິດໄດ້)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u40-ans-t2-1">{"(1) ຄຸນນະພາບ (ເພາະລະດັບຄວາມເພິ່ງພໍໃຈບອກເຖິງຄຸນສົມບັດ ຫຼື ສະພາບຄວາມຮູບສຶກ ເຖິງວ່າຈະສາມາດຈັດລຳດັບໄດ້ກໍຕາມ)"}</span>,
          <span key="u40-ans-t2-2">{"(2) ປະລິມານ (ເພາະຄະແນນເປັນຕົວເລກທີ່ສາມາດນຳມາບວກລົບ ແລະ ຫາຄ່າສະເລ່ຍຫ້ອງໄດ້)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u40-ans-s1-1">{"(1) ຄຸນນະພາບ (ເພາະວ່າໄດ້ຂໍ້ມູນກຸ່ມເລືອດ ແລະ ຄວາມຄິດເຫັນ)"}</span>,
          <span key="u40-ans-s1-2">{"(2) ປະລິມານ (ເພາະວ່າໄດ້ຂໍ້ມູນສ່ວນສູງ ແລະ ນ້ຳໜັກ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u40-ans-s2-1">{"(1) ຄຸນນະພາບ (ເພາະຊື່ສິນຄ້າ ແລະ ປະເພດສິນຄ້າ ບອກເຖິງໝວດໝູ່ລັກສະນະ)"}</span>,
          <span key="u40-ans-s2-2">{"(2) ປະລິມານ (ເພາະຈຳນວນສິນຄ້າທີ່ຂາຍໄດ້ເປັນຕົວເລກທີ່ນຳມາບວກ ແລະ ຫາລາຍຮັບໄດ້)"}</span>,
        ],
      },
    ],
    advice: "ການເຂົ້າໃຈຄວາມແຕກຕ່າງລະຫວ່າງຂໍ້ມູນຄຸນນະພາບ ແລະ ປະລິມານ ເປັນບາດກ້າວທຳອິດທີ່ສຳຄັນທີ່ສຸດ ໃນການເລືອກວິທີວິເຄາະສະຖິຕິ ແລະ ການສະເໜີຂໍ້ມູນໃຫ້ເໝາະສົມເດີ້!",
  },
};
