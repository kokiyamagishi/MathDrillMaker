import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit32Data: UnitData = {
  unitNumber: 32,
  unitTitle: "ພາກທີ IV - ບົດທີ 32: ການຄູນເວັກເຕີກັບຈຳນວນຈິງ ແລະ ເງື່ອນໄຂຮ່ວມເສັ້ນຊື່",
  unitGoal:
    "ຮຽນຮູ້ ແລະ ນຳໃຊ້ຄຸນລັກສະນະຂອງການຄູນເວັກເຕີກັບຈຳນວນຈິງ k · u ພ້ອມທັງເງື່ອນໄຂທີ່ເຮັດໃຫ້ສອງເວັກເຕີຂະໜານກັນ ແລະ ສາມເມັດຮ່ວມເສັ້ນຊື່ດຽວກັນ (Collinearity)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ບົດທີ 32 ໜ້າ 187-192",
  keyPoints: [
    {
      title: "1. ການຄູນເວັກເຕີກັບຈຳນວນຈິງ (Scalar Multiplication of a Vector)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຜົນຄູນຂອງເວັກເຕີ u ກັບຈຳນວນຈິງ k ແມ່ນເວັກເຕີ k · u ທີ່ມີລັກສະນະດັ່ງນີ້:"}
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
              <strong style={{ color: "#E65100" }}>{"• ທິດທາງຂອງເວັກເຕີ k · u:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ຖ້າ "}
                <strong style={{ color: "#2E7D32" }}>{"k > 0"}</strong>
                {": ມີທິດທາງ ດຽວກັນ ກັບ u."}
                <br />
                {"- ຖ້າ "}
                <strong style={{ color: "#D84315" }}>{"k < 0"}</strong>
                {": ມີທິດທາງ ກົງກັນຂ້າມ ກັບ u."}
                <br />
                {"- ຖ້າ "}
                <strong style={{ color: "#757575" }}>{"k = 0"}</strong>
                {": ຜົນຮັບແມ່ນເວັກເຕີສູນ 0."}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ຂະໜາດຂອງ k · u:"}</strong>
              <br />
              <span style={{ paddingLeft: "20px", fontWeight: "bold", color: "#D84315" }}>
                {"|k · u| = |k| · |u|  (ຂະໜາດແມ່ນຄ່າບວກສະເໝີ)"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #FFE082", paddingTop: "8px" }}>
              <strong style={{ color: "#E65100" }}>{"• ເງື່ອນໄຂຮ່ວມເສັ້ນຊື່ດຽວກັນ (Collinear Condition):"}</strong>
              <br />
              <span style={{ paddingLeft: "20px" }}>
                {"- ສອງເວັກເຕີ u ແລະ v ຂະໜານກັນ (u || v) ກໍຕໍ່ເມື່ອມີຈຳນວນຈິງ k ທີ່ເຮັດໃຫ້: "}
                <strong style={{ color: "#D84315" }}>{"v = k · u"}</strong>
                <br />
                {"- ສາມເມັດ A, B, C ຮ່ວມເສັ້ນຊື່ດຽວກັນ ກໍຕໍ່ເມື່ອມີຈຳນວນຈິງ k ທີ່ເຮັດໃຫ້: "}
                <strong style={{ color: "#D84315" }}>{"AB = k · AC"}</strong>
              </span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຕົວຢ່າງ: ຖ້າ AB = 3 · AC, ໝາຍຄວາມວ່າ A, B, C ຢູ່ເທິງເສັ້ນຊື່ດຽວກັນ ແລະ ຂ້າງ AB ຍາວເປັນ 3 ເທົ່າຂອງ AC ເດີ້!",
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
            {"ຈົ່ງຊອກຫາຂະໜາດຂອງເວັກເຕີ ຫຼັງຈາກຄູນກັບຈຳນວນຈິງ: "}{" "}
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
              <span>{"(1) ໃຫ້ເວັກເຕີ u ມີຂະໜາດ |u| = 6 cm. ຂະໜາດຂອງເວັກເຕີ v = -3u ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກບວກສະເໝີ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>
                {"(2) ໃຫ້ເວັກເຕີ u ມີຂະໜາດ |u| = 10 cm. ຂະໜາດຂອງເວັກເຕີ v = "} <Fraction num="1" den="2" /> {"u ຈະແມ່ນຈັກ cm? (ຕອບເປັນຕົວເລກຖ້ວນ):"}
              </span>
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
            {"ຈົ່ງກຳນົດຄ່າສຳປະສິດ k ຈາກຄວາມສຳພັນລະຫວ່າງຈຸດເທິງເສັ້ນຊື່: "}{" "}
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
              <span>{"(1) ໃຫ້ C ແມ່ນຈຸດເຄິ່ງກາງຂອງ AB ( AC = CB ). ຈົ່ງຫາຄ່າ k ທີ່ເຮັດໃຫ້ AC = k · AB (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 1/2):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຈົ່ງຫາຄ່າ k ທີ່ເຮັດໃຫ້ CA = k · CB (⚠️ ລະວັງທິດທາງກົງກັນຂ້າມ, ຕອບຕົວເລກຖ້ວນຕິດລົບ):"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "💡 ບົດທ້າທາຍ 1: ໃຫ້ຄິດໄລ່ຄັດຈ້ອນສຳນວນໃນວົງເລັບກ່ອນ! ບົດທ້າທາຍ 2: ໃຊ້ເງື່ອນໄຂ v = k · u ເພື່ອຊອກຫາຄ່າຂອງ m ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄັດຈ້ອນສຳນວນພຶດຊະຄະນິດຂອງເວັກເຕີ (Simplifying Vector Algebra Expressions): "}{" "}
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
                <span>{"(1) ຈົ່ງຄັດຈ້ອນສຳນວນ A = 3 · (u + 2v) - 2 · (u - v) (ຕອບໃນຮູບຮ່າງ au+bv, ຕົວຢ່າງ: u+8v):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ຈົ່ງຄັດຈ້ອນສຳນວນ B = 2 · (3u - v) + 5 · (-u + v) (ຕອບໃນຮູບຮ່າງ au+bv, ຕົວຢ່າງ: u+3v):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: B ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາຄ່າຂອງຕົວປ່ຽນ ເພື່ອໃຫ້ສອງເວັກເຕີຂະໜານກັນ: "}{" "}
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
                <span>{"(1) ໃຫ້ສອງເວັກເຕີ u = 2a + 3b ແລະ v = 6a + mb. ຖ້າ u ແລະ v ຂະໜານກັນ (v = k · u), ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>{"(2) ໃຫ້ສອງເວັກເຕີ u = a - 2b ແລະ v = ma + 4b. ຖ້າ u ແລະ v ຂະໜານກັນ, ຄ່າ m ຈະແມ່ນເທົ່າໃດ? (ຕອບເປັນຕົວເລກຖ້ວນຕິດລົບ):"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຕອບ: m ="}</span>
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
            {"ຈົ່ງຊອກຫາຄວາມສຳພັນລະຫວ່າງຈຸດເທິງເສັ້ນຊື່ ໂດຍໃຊ້ຈຸດເຄິ່ງກາງ: "}{" "}
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
              <span>{"(1) ໃຫ້ M ແມ່ນຈຸດເຄິ່ງກາງຂອງຂ້າງ AB. ຈົ່ງຫາຄ່າ k ທີ່ເຮັດໃຫ້ MA + MB = k · AB (ຄຳແນະນຳ: MA ແລະ MB ແມ່ນເວັກເຕີກົງກັນຂ້າມກັນ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: k ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ໃຫ້ G ແມ່ນຈຸດໃຈກາງ (Centroid) ຂອງຮູບສາມແຈ ABC ທີ່ມີ M ແມ່ນຈຸດເຄິ່ງກາງຂອງ BC. ຈົ່ງຫາຄ່າ k ທີ່ເຮັດໃຫ້ AG = k · AM (ຕອບເປັນເລກສ່ວນ, ຕົວຢ່າງ: 2/3):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: k ="}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບການຂະຫຍາຍແຮງດຶງສະມໍ (Anchor Chain Tension Scaling): "}{" "}
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
              <span>{"(1) ແຮງດຶງຂອງສະມໍ u ມີຂະໜາດແມ່ນ 150 N. ເພື່ອຄວາມປອດໄພຂອງເຮືອໃຫຍ່, ວິສະວະກອນຕ້ອງເພີ່ມແຮງເປັນ 3 ເທົ່າ ໂດຍໃຊ້ແຮງໃໝ່ v = 3u. ຂະໜາດຂອງແຮງ v ແມ່ນຈັກ N?:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: |v| ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"N"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>{"(2) ຈາກຂໍ້ (1), ຖ້າແຮງດຶງໃໝ່ຊີ້ໄປໃນທິດທາງກົງກັນຂ້າມເພື່ອຜ່ອນຄວາມໄວ (v' = -2u), ຂະໜາດຂອງແຮງ v' ຈະແມ່ນຈັກນິວເຕີນ (N)? (ຕອບເປັນຕົວເລກບວກສະເໝີ):"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຕອບ: |v'| ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"N"}</span>
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
          <span key="u32-ans-1-1">{"(1) 18 (ເພາະວ່າ |v| = |-3| · |u| = 3 * 6 = 18 cm)"}</span>,
          <span key="u32-ans-1-2">{"(2) 5 (ເພາະວ່າ |v| = 1/2 · |u| = 0.5 * 10 = 5 cm)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u32-ans-2-1">{"(1) 1/2 (ເພາະວ່າ C ແມ່ນຈຸດເຄິ່ງກາງ ດັ່ງນັ້ນຄວາມຍາວ AC ແມ່ນເຄິ່ງໜຶ່ງຂອງ AB)"}</span>,
          <span key="u32-ans-2-2">{"(2) -1 (ເພາະວ່າ CA ແລະ CB ມີຄວາມຍາວເທົ່າກັນ ແຕ່ມີທິດທາງກົງກັນຂ້າມ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u32-ans-t1-1">{"(1) u+8v (ເພາະວ່າ 3u + 6v - 2u + 2v = (3 - 2)u + (6 + 2)v = u + 8v)"}</span>,
          <span key="u32-ans-t1-2">{"(2) u+3v (ເພາະວ່າ 6u - 2v - 5u + 5v = (6 - 5)u + (-2 + 5)v = u + 3v)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u32-ans-t2-1">{"(1) 9 (ຍ້ອນວ່າ v = 6a + mb = 3 · (2a + 3b) = 6a + 9b ດັ່ງນັ້ນ m = 9)"}</span>,
          <span key="u32-ans-t2-2">{"(2) -2 (ຍ້ອນວ່າ v = ma + 4b = -2 · (a - 2b) = -2a + 4b ດັ່ງນັ້ນ m = -2)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u32-ans-s1-1">{"(1) 0 (ຍ້ອນວ່າ MA + MB = 0, ສອງເວັກເຕີມີທິດກົງກັນຂ້າມ ແລະ ຂະໜາດເທົ່າກັນ ດັ່ງນັ້ນ k = 0)"}</span>,
          <span key="u32-ans-s1-2">{"(2) 2/3 (ຍ້ອນວ່າຈຸດໃຈກາງ G ຢູ່ຫ່າງຈາກຈອມ A ເປັນ 2/3 ຂອງລວງຍາວເສັ້ນຈອມ AM)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u32-ans-s2-1">{"(1) 450 (ເພາະວ່າ |v| = 3 * 150 = 450 N)"}</span>,
          <span key="u32-ans-s2-2">{"(2) 300 (ເພາະວ່າ |v'| = |-2| * 150 = 300 N)"}</span>,
        ],
      },
    ],
    advice: "ການຄູນເວັກເຕີກັບຈຳນວນຈິງ ເປັນພື້ນຖານໃນການຂະຫຍາຍ ຫຼື ຫຍໍ້ຂະໜາດຂອງແຮງ ແລະ ຄວາມໄວ! ການຮ່ວມເສັ້ນຊື່ດຽວກັນເປັນຫຼັກການທີ່ດີເລີດໃນການພິສູດທາງເລຂາຄະນິດເດີ້!",
  },
};
