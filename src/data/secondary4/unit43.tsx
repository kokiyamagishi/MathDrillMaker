import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit43Data: UnitData = {
  unitNumber: 43,
  unitTitle: "ພາກທີ VII - ບົດທີ 43: ມັດທະຍະຖານ",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈວິທີຊອກຫາມັດທະຍະຖານ (Median) ຂອງຂໍ້ມູນທັງໃນກໍລະນີຈຳນວນຂໍ້ມູນເປັນເລກຄີກ ແລະ ເລກຄູ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 43 ໜ້າ 252-256",
  subSections: [
    {
      title: "1. ວິທີຊອກຫາມັດທະຍະຖານ (How to Find Median)",
      keyPoint: {
      title: "1. ວິທີຊອກຫາມັດທະຍະຖານ (How to Find Median)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ມັດທະຍະຖານ (ໝາຍດ້ວຍ "}
            <strong style={{ color: "#E65100" }}>{"Med"}</strong>
            {") ແມ່ນຄ່າທີ່ຢູ່ເຄິ່ງກາງຂອງຂໍ້ມູນທັງໝົດ ເມື່ອໄດ້ຈັດລຽງລຳດັບຂໍ້ມູນຈາກນ້ອຍຫາໃຫຍ່ (ຫຼື ໃຫຍ່ຫານ້ອຍ):"}
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
              <strong style={{ color: "#2E7D32" }}>{"• ຂັ້ນຕອນທີ 1:"}</strong>{" ຈັດລຽງຂໍ້ມູນຈາກນ້ອຍຫາໃຫຍ່ສະເໝີ! (ຫ້າມລືມຂັ້ນຕອນນີ້ເດັດຂາດ)"}
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#D84315" }}>{"• ຂັ້ນຕອນທີ 2 (ເບິ່ງຈຳນວນຂໍ້ມູນ n):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ຖ້າ "}<strong>{"n ເປັນເລກຄີກ"}</strong>{": ມັດທະຍະຖານແມ່ນຄ່າຂອງຂໍ້ມູນທີ່ຢູ່ຕຳແໜ່ງເຄິ່ງກາງພໍດີ "}
                <span style={{ fontWeight: "bold", color: "#E65100" }}>{"(ຕຳແໜ່ງ Med = "}<Fraction num="n + 1" den="2" />{")"}</span>
              </span>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ຖ້າ "}<strong>{"n ເປັນເລກຄູ່"}</strong>{": ມັດທະຍະຖານແມ່ນຄ່າສະເລ່ຍຂອງຂໍ້ມູນສອງຕົວທີ່ຢູ່ເຄິ່ງກາງ "}
                <span style={{ fontWeight: "bold", color: "#E65100" }}>{"(Med = "}<Fraction num="ຄ່າຕົວເຄິ່ງກາງຊ້າຍ + ຄ່າຕົວເຄິ່ງກາງຂວາ" den="2" />{")"}</span>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຂໍ້ຄວນລະວັງ: ກ່ອນຈະຫາຄ່າມັດທະຍະຖານ, ເຮົາຕ້ອງຈັດລຽງຂໍ້ມູນຈາກນ້ອຍຫາໃຫຍ່ກ່ອນສະເໝີເດີ້! ຖ້າບໍ່ລຽງລຳດັບ ຄຳຕອບຈະຜິດທັນທີ!",
        isBlue: true,
      },
    },
      problems: [
        {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາມັດທະຍະຖານ (Median) ຂອງຂໍ້ມູນກໍລະນີຈຳນວນຂໍ້ມູນເປັນເລກຄີກ (n is odd): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຊຸດຂໍ້ມູນ: 3, 1, 8, 7, 5 ຈະມີມັດທະຍະຖານເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນ: 15, 8, 12, 20, 25, 18, 30 ຈະມີມັດທະຍະຖານເທົ່າໃດ? (ຕອບເປັນຕົວເລກ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    },
    {
      title: "2. ບົດຮຽນພື້ນຖານ",
      keyPoint: { content: <span /> },
      problems: [
        {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຊອກຫາມັດທະຍະຖານ (Median) ຂອງຂໍ້ມູນກໍລະນີຈຳນວນຂໍ້ມູນເປັນເລກຄູ່ (n is even): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຊຸດຂໍ້ມູນ: 2, 8, 5, 10 ຈະມີມັດທະຍະຖານເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຊຸດຂໍ້ມູນ: 15, 12, 20, 18, 25, 22 ຈະມີມັດທະຍະຖານເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    }
      ]
    }
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ຂໍ້ມູນໄດ້ຮັບການຈັດລຽງແລ້ວ! ສະນັ້ນໃຫ້ໃຊ້ສູດຕຳແໜ່ງເຄິ່ງກາງ Med = x ມາຕັ້ງສົມຜົນຊອກຫາ x! ບົດທ້າທາຍ 2: ຖ້າ n ເປັນເລກຄູ່, ຄ່າ Med ແມ່ນຄ່າສະເລ່ຍຂອງສອງຕົວເຄິ່ງກາງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄົ້ນຫາຄ່າຂອງຕົວລັບຈາກຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: "}{" "}
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
                <span>{"(1) ກຳນົດຊຸດຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: 3, 5, x, 10, 12. ຖ້າມັດທະຍະຖານແມ່ນ 8, ຈົ່ງຊອກຫາຄ່າຂອງ x:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ກຳນົດຊຸດຂໍ້ມູນທີ່ຈັດລຽງແລ້ວ: 2, 4, y, y+2, 10, 12. ຖ້າມັດທະຍະຖານແມ່ນ 7, ຈົ່ງຊອກຫາຄ່າຂອງ y:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"y ="}</span>
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
              {"ຈົ່ງຊອກຫາມັດທະຍະຖານຈາກຕາຕະລາງຄວາມຖີ່ສະສົມ (Cumulative Frequency Table): "}{" "}
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
                <span>{"(1) ຈຳນວນຄົນໃນຄອບຄົວຂອງນັກຮຽນ 9 ຄົນ ບັນທຶກໄດ້ (ລຽງແລ້ວ): 2, 3, 3, 4, 4, 4, 5, 5, 6 ຄົນ. ມັດທະຍະຖານຂອງຈຳນວນຄົນໃນຄອບຄົວແມ່ນເທົ່າໃດ?:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈາກຂໍ້ (1) ຖ້າມີຄອບຄົວໃໝ່ທີ່ມີສະມາຊິກ 7 ຄົນ ເຂົ້າມາຕື່ມ (ລວມເປັນ 10 ຄອບຄົວ), ມັດທະຍະຖານໃໝ່ຂອງຂໍ້ມູນຊຸດນີ້ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາລະດັບການຈັດສັນເງິນເດືອນ ແລະ ລາຍຮັບ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແനນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ເງິນເດືອນຂອງພະນັກງານ 5 ຄົນໃນບໍລິສັດນ້ອຍແຫ່ງໜຶ່ງແມ່ນ: 2,500,000, 2,800,000, 3,000,000, 3,200,000, 15,000,000 ກີບ. ມັດທະຍະຖານຂອງເງິນເດືອນພະນັກງານແມ່ນຈັກກີບ?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ Med:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າໃຊ້ຄ່າສະເລ່ຍເລກຄະນິດແທນມັດທະຍະຖານ, ຄ່າສະເລ່ຍຈະແມ່ນຈັກກີບ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ x̄:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາສະຖິຕິການແພດ ແລະ ສຸຂະພາບ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແനນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ເວລາທີ່ຄົນເຈັບ 6 ຄົນລໍຖ້າພົບທ່ານໝໍ (ນາທີ) ແມ່ນ: 10, 35, 15, 20, 45, 25 ນາທີ. ມັດທະຍະຖານຂອງເວລາລໍຖ້າແມ່ນຈັກນາທີ? (ຕອບເປັນຕົວເລກ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ Med:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ອາຍຸຂອງເດັກນ້ອຍ 8 ຄົນທີ່ມາສັກຢາກັນພະຍາດແມ່ນ: 3, 5, 2, 8, 6, 4, 7, 5 ປີ. ມັດທະຍະຖານຂອງອາຍຸເດັກນ້ອຍແມ່ນຈັກປີ? (ຕອບເປັນຕົວເລກທົດສະນິຍົມ ຖ້າມີ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ Med:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ປີ"}</span>
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
          <span key="u43-ans-1-1">{"(1) 5 (ຈັດລຽງລຳດັບ: 1, 3, 5, 7, 8. ຕົວເຄິ່ງກາງແມ່ນ 5)"}</span>,
          <span key="u43-ans-1-2">{"(2) 18 (ຈັດລຽງລຳດັບ: 8, 12, 15, 18, 20, 25, 30. ຕົວເຄິ່ງກາງແມ່ນ 18)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u43-ans-2-1">{"(1) 6.5 (ຈັດລຽງລຳດັບ: 2, 5, 8, 10. ສອງຕົວເຄິ່ງກາງແມ່ນ 5 ແລະ 8, ຫາຄ່າສະເລ່ຍໄດ້ (5 + 8) ÷ 2 = 6.5)"}</span>,
          <span key="u43-ans-2-2">{"(2) 19 (ຈັດລຽງລຳດັບ: 12, 15, 18, 20, 22, 25. ສອງຕົວເຄິ່ງກາງແມ່ນ 18, 20, ຫາຄ່າສະເລ່ຍໄດ້ (18 + 20) ÷ 2 = 19)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u43-ans-t1-1">{"(1) 8 (ເພາະວ່າ x ຢູ່ຕຳແໜ່ງທີ 3 ຂອງຂໍ້ມູນ 5 ຕົວ ເຊິ່ງແມ່ນຄ່າມັດທະຍະຖານພໍດີ ດັ່ງນັ້ນ x = 8)"}</span>,
          <span key="u43-ans-t1-2">{"(2) 6 (ເພາະວ່າມັດທະຍະຖານຂອງ 6 ຕົວແມ່ນ (y + y + 2) ÷ 2 = y + 1. ຕັ້ງສົມຜົນ y + 1 = 7 ຈະໄດ້ y = 6)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u43-ans-t2-1">{"(1) 4 (ຂໍ້ມູນ 9 ຕົວ, ຕຳແໜ່ງທີ (9+1)/2 = 5 ເຊິ່ງແມ່ນເລກ 4)"}</span>,
          <span key="u43-ans-t2-2">{"(2) 4 (ຂໍ້ມູນ 10 ຕົວ ຈັດລຽງ: 2, 3, 3, 4, 4, 4, 5, 5, 6, 7. ຕົວເຄິ່ງກາງແມ່ນຕຳແໜ່ງ 5 ແລະ 6 ເຊິ່ງແມ່ນ 4 ແລະ 4, ຫາຄ່າສະເລ່ຍໄດ້ 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u43-ans-s1-1">{"(1) 3,000,000 (ຈັດລຽງລຳດັບ: 2.5 ລ້ານ, 2.8 ລ້ານ, 3.0 ລ້ານ, 3.2 ລ້ານ, 15 ລ້ານ. ຕົວເຄິ່ງກາງແມ່ນ 3,000,000 ກີບ)"}</span>,
          <span key="u43-ans-s1-2">{"(2) 5,300,000 (ເພາະຄ່າສະເລ່ຍເລກຄະນິດແມ່ນ (2.5 + 2.8 + 3.0 + 3.2 + 15) ÷ 5 = 5.3 ລ້ານກີບ. ຈະເຫັນວ່າມັດທະຍະຖານເໝາະສົມກວ່າຄ່າສະເລ່ຍໃນກໍລະນີມີ Outlier ສູງຫຼາຍ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u43-ans-s2-1">{"(1) 22.5 (ຈັດລຽງລຳດັບ: 10, 15, 18, 20, 22, 25 ແມ່ນຜິດ! ຕ້ອງຈັດລຽງຂໍ້ມູນຈິງ: 10, 15, 20, 25, 35, 45 ຈະໄດ້ຕົວເຄິ່ງກາງແມ່ນ 20 ແລະ 25, ຫາຄ່າສະເລ່ຍໄດ້ (20 + 25) ÷ 2 = 22.5 ນາທີ)"}</span>,
          <span key="u43-ans-s2-2">{"(2) 5 (ຈັດລຽງລຳດັບ: 2, 3, 4, 5, 5, 6, 7, 8. ຕົວເຄິ່ງກາງແມ່ນ 5 ແລະ 5, ຫາຄ່າສະເລ່ຍໄດ້ 5 ປີ)"}</span>,
        ],
      },
    ],
    advice: "ມັດທະຍະຖານ ເປັນຕົວແທນຂໍ້ມູນທີ່ດີຫຼາຍໃນກໍລະນີທີ່ຂໍ້ມູນມີຄ່າຜິດປົກກະຕິສູງເກີນໄປ (ເຊັ່ນ: ເງິນເດືອນຂອງພະນັກງານ ທີ່ເຈົ້າຂອງມີລາຍໄດ້ສູງກວ່າຄົນອື່ນຫຼາຍໆ) ເພາະມັນບໍ່ໄດ້ຮັບຜົນກະທົບຈາກຄ່າເຫຼົ່ານັ້ນເດີ້!",
  },
};
