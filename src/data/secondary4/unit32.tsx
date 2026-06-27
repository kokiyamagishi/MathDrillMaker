import React from "react";
import { UnitData } from "../units2";

export const unit32Data: UnitData = {
  unitNumber: 32,
  unitTitle: "ພາກທີ IV - ບົດທີ 32: ການຄູນເວກເຕີດ້ວຍສະກາແລ (Vector Multiplication by a Scalar)",
  unitGoal: "ຮຽນຮູ້ການຄູນເວກເຕີດ້ວຍສະກາແລ a·u, ທິດທາງ ແລະ ຂະໜາດຂອງເວກເຕີຜົນຄູນ, ຄຸນລັກສະນະພຶດຊະຄະນິດ, ແລະ ການພິສູດຈຸດຮ່ວມເສັ້ນຊື່ (Collinearity)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 150-153",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງ a·u (Definition & Properties of Scalar Multiplication)",
      keyPoint: {
        title: "ນິຍາມການຄູນເວກເຕີດ້ວຍສະກາແລ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຜົນຄູນຂອງເວກເຕີ u ດ້ວຍສະກາແລ a (ຈຳນວນຈິງ) ແມ່ນເວກເຕີ a·u ທີ່ມີເງື່ອນໄຂດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຄຸນລັກສະນະເວກເຕີໃຫມ່:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຂະໜາດ (Magnitude):"}</strong>{" |a·u| = |a| × |u|"}</li>
                <li><strong>{"ທິດທາງ (Direction):"}</strong>
                  <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                    <li>{"ຖ້າ a > 0: a·u ມີທິດທາງດຽວກັນກັບ u."}</li>
                    <li>{"ຖ້າ a < 0: a·u ມີທິດທາງກົງກັນຂ້າມກັບ u."}</li>
                    <li>{"ຖ້າ a = 0 ຫຼື u = 0: a·u = 0 (ເວກເຕີສູນ)."}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ຄຸນລັກສະນະພຶດຊະຄະນິດ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"a(b·u) = (ab)·u"}</li>
                <li>{"(a + b)·u = a·u + b·u"}</li>
                <li>{"a(u + v) = a·u + a·v"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄວາມຂະໜານ (Collinearity): ສອງເວກເຕີ u ແລະ v (v ≠ 0) ຂະໜານກັນ ກໍຕໍ່ເມື່ອມີຈຳນວນຈິງ k ທີ່ເຮັດໃຫ້ u = k·v!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຂະໜາດ ແລະ ທິດທາງຂອງເວກເຕີຜົນຄູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໃຫ້ |u| = 4. ດັ່ງນັ້ນ ເວກເຕີ v = -3u ຈະມີຂະໜາດ |v| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແລະ ມີທິດທາງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                  <span>{" ກັບ u."}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ເວກເຕີ w = 2.5u ຈະມີຂະໜາດ |w| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແລະ ມີທິດທາງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                  <span>{" ກັບ u."}</span>
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
                {"ຈົ່ງເຮັດໃຫ້ສຳນວນເວກເຕີຕໍ່ໄປນີ້ງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) 2(3u - 2v) + 3(u + v) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"u -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"v"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) 5(u - 2v) - 3(2u - 3v) = -u -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"v"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເມັດເຄິ່ງກາງ ແລະ ການພິສູດສາມເມັດຊື່ດຽວກັນ (Midpoint & Collinearity)",
      keyPoint: {
        title: "ສູດເມັດເຄິ່ງກາງ ແລະ ເງື່ອນໄຂຈຸດຮ່ວມເສັ້ນຊື່",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ຖ້າ I ແມ່ນເມັດເຄິ່ງກາງຂອງທ່ອນຊື່ AB, ດັ່ງນັ້ນສໍາລັບທຸກໆເມັດ O ໃດໆ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100" }}>
                {"OI = (1/2)(OA + OB)"}
              </span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຫຼື ຖ້າ O ຢູ່ຈຸດ I ຈະໄດ້: IA + IB = 0."}
              </p>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ສາມເມັດ A, B, C ນອນເທິງເສັ້ນຊື່ດຽວກັນ (Collinear) ກໍຕໍ່ເມື່ອ ເວກເຕີ AB ແລະ AC ຂະໜານກັນ: AC = k·AB."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ສູດເມັດເຄິ່ງກາງ OI = (1/2)(OA + OB) ເປັນເຄື່ອງມືພື້ນຖານໃນເລຂາຄະນິດເວກເຕີເພື່ອຊອກຫາຈຸດໃຈກາງ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຄົງຄ່າອັດຕາສ່ວນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ G ແມ່ນເມັດຖ່ວງໜັກຂອງຮູບສາມແຈ ABC ແລະ M ແມ່ນເມັດເຄິ່ງກາງຂອງ BC:"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ພົວພັນລະຫວ່າງ AG ແລະ AM ແມ່ນ AG ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"AM"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ພົວພັນລະຫວ່າງ GM ແລະ AM ແມ່ນ GM ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"AM"}</span>
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
                {"ຈົ່ງຊອກຫາຕົວຄູນ k ເພື່ອໃຫ້ສາມເມັດຊື່ດຽວກັນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ສາມເມັດ A, B, C ນອນເທິງເສັ້ນຊື່ດຽວກັນ ໂດຍມີຄວາມສຳພັນ AB = 3u - 2v ແລະ AC = 9u - kv. ຈົ່ງຊອກຫາຄ່າຂອງ k?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: k ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
              {"ໂຈດພິສູດເມັດຖ່ວງໜັກ (Centroid Vector Identity): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ G ແມ່ນເມັດຖ່ວງໜັກຂອງຮູບສາມແຈ ABC. ດັ່ງນັ້ນ GA + GB + GC = 0. ສໍາລັບຈຸດ O ໃດໆ, ຕົວຄູນ m ທີ່ສອດຄ່ອງກັບ OA + OB + OC = m·OG ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: m ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "OA + OB + OC = (OG+GA) + (OG+GB) + (OG+GC) = 3OG + (GA+GB+GC). ຍ້ອນ G ເປັນເມັດຖ່ວງໜັກ ⇒ GA+GB+GC = 0 ⇒ OA + OB + OC = 3OG. ດັ່ງນັ້ນ m = 3!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າຂອງ 0·u: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ສໍາລັບທຸກໆເວກເຕີ u ໃດໆ, ຜົນຄູນ 0·u ຈະໄດ້ເວກເຕີໃໝ່ແມ່ນຫຍັງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເວກເຕີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
          <span key="1-1">{"12 (ຄິດໄລ່: |-3u| = |-3| × |u| = 3 × 4 = 12)"}</span>,
          <span key="1-2">{"ກົງກັນຂ້າມ (ຄິດໄລ່: ຍ້ອນ -3 < 0)"}</span>,
          <span key="1-3">{"10 (ຄິດໄລ່: |2.5u| = 2.5 × 4 = 10)"}</span>,
          <span key="1-4">{"ດຽວກັນ (ຄິດໄລ່: ຍ້ອນ 2.5 > 0)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"9 (ຄິດໄລ່: 2(3u - 2v) + 3(u + v) = 6u - 4v + 3u + 3v = 9u - v)"}</span>,
          <span key="2-2">{"1 (ຄິດໄລ່: 2(3u - 2v) + 3(u + v) = 9u - v)"}</span>,
          <span key="2-3">{"1 (ຄິດໄລ່: 5(u - 2v) - 3(2u - 3v) = 5u - 10v - 6u + 9v = -u - v)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"2/3 (ຄິດໄລ່: ຕາມຄຸນລັກສະນະເສັ້ນຈອມຖ່ວງໜັກ AG = (2/3)AM)"}</span>,
          <span key="3-2">{"1/3 (ຄິດໄລ່: ຕາມຄຸນລັກສະນະເສັ້ນຈອມຖ່ວງໜັກ GM = (1/3)AM)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"6 (ຄິດໄລ່: ຕ້ອງມີ AC = 3AB ⇒ 9u - kv = 3(3u - 2v) = 9u - 6v ⇒ k = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"3 (ຄິດໄລ່: OA + OB + OC = 3OG + (GA+GB+GC) = 3OG)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ສູນ (ຄິດໄລ່: 0·u = 0, ເຊິ່ງແມ່ນເວກເຕີສູນ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຄູນເວກເຕີດ້ວຍສະກາແລ ເປັນພື້ນຖານໃນການສຶກສາຄວາມຂະໜານ ແລະ ເມັດຖ່ວງໜັກໃນເລຂາຄະນິດ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
