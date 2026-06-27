import React from "react";
import { UnitData } from "../units2";

export const unit31Data: UnitData = {
  unitNumber: 31,
  unitTitle: "ພາກທີ IV - ບົດທີ 31: ການບວກ ແລະ ການລົບເວກເຕີ (Addition & Subtraction of Vectors)",
  unitGoal: "ຮຽນຮູ້ກົດເກນການບວກເວກເຕີດ້ວຍກົດເກນສາມແຈ (Chasles' Relation), ກົດເກນຮູບສີ່ແຈຂ້າງຂະໜານ, ແລະ ການລົບເວກເຕີດ້ວຍວິທີເລຂາຄະນິດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 147-149",
  subSections: [
    {
      title: "1. ການບວກເວກເຕີ ແລະ ກົດເກນພື້ນຖານ (Vector Addition & Fundamental Rules)",
      keyPoint: {
        title: "ກົດເກນສາມແຈ ແລະ ກົດເກນຮູບສີ່ແຈຂ້າງຂະໜານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການບວກເວກເຕີສອງຕົວ u ແລະ v ສາມາດເຮັດໄດ້ 2 ວິທີຫຼັກ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"1. ກົດເກນສາມແຈ (Chasles' Relation):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ວາງເມັດເລີ່ມຕົ້ນຂອງ v ຕໍ່ໃສ່ເມັດປາຍຂອງ u (ຜ່ານເມັດ B):"}
                <br />
                <strong>{"AB + BC = AC"}</strong>
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"2. ກົດເກນຮູບສີ່ແຈຂ້າງຂະໜານ (Parallelogram Rule):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ສໍາລັບສອງເວກເຕີທີ່ມີເມັດເລີ່ມຕົ້ນດຽວກັນ (A):"}
                <br />
                <strong>{"AB + AD = AC"}</strong>{" (ເມື່ອ C ແມ່ນເມັດຈອມກົງກັນຂ້າມຂອງຮູບສີ່ແຈຂ້າງຂະໜານ ABCD)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄຸນລັກສະນະການບວກ: u + v = v + u (ສະຫຼັບບ່ອນໄດ້) ແລະ (u + v) + w = u + (v + w) (ໂຮມໝູ່ໄດ້)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງເຮັດໃຫ້ສຳນວນເວກເຕີຕໍ່ໄປນີ້ງ່າຍດາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) AB + BC + CD = AC + CD ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) PQ + QP = PP ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" (ຂຽນຊື່ເວກເຕີ)"}</span>
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
                {"ໃຫ້ຮູບສີ່ແຈຂ້າງຂະໜານ ABCD. ຈົ່ງຕື່ມສຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) AB + AD ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) AB + BC ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການລົບເວກເຕີ (Vector Subtraction)",
      keyPoint: {
        title: "ການລົບເວກເຕີດ້ວຍຈຸດປະສານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການລົບເວກເຕີ u - v ແມ່ນການບວກເວກເຕີ u ດ້ວຍເວກເຕີກົງກັນຂ້າມ -v:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ສູດການລົບ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"AB - AC = CB  (ເພາະ AB - AC = AB + CA = CA + AB = CB)."}
                <br />
                {"- ຖ້າ ABCD ແມ່ນຮູບສີ່ແຈຂ້າງຂະໜານ: AB - AD = DB."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ການລົບເວກເຕີທີ່ມີເມັດເລີ່ມຕົ້ນດຽວກັນ (ເຊັ່ນ A) ຈະໄດ້ເວກເຕີໃໝ່ທີ່ຊີ້ຈາກເມັດປາຍຂອງເວກເຕີລົບ ຫາ ເມັດປາຍຂອງເວກເຕີຕັ້ງລົບ (CB)!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໄຂສຳນວນການລົບເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) XY - XZ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) PQ - RQ = PQ + QR ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ໃຫ້ຮູບສີ່ແຈຂ້າງຂະໜານ ABCD ທີ່ມີເມັດຕັດຂອງເສັ້ນເນັ່ງຈອມແມ່ນ O. ຈົ່ງຄິດໄລ່: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຄິດໄລ່ສຳນວນເວກເຕີ: S = OA + OB - OC - OD?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: S ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{" (ຂຽນຊື່ເວກເຕີ)"}</span>
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
              {"ໂຈດການລວມເວກເຕີໃນຮູບສາມແຈ (Vector Combination in Triangle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຮູບສາມແຈ ABC, ໃຫ້ M ແມ່ນເມັດເຄິ່ງກາງຂອງ BC (ດັ່ງນັ້ນ MB + MC = 0). ຈົ່ງຊອກຫາເວກເຕີທີ່ເທົ່າກັນກັບ AB + AC?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: AB + AC ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "AB + AC = (AM + MB) + (AM + MC) = 2AM + (MB + MC). ຍ້ອນ M ເປັນເມັດເຄິ່ງກາງ BC ⇒ MB + MC = 0 ⇒ AB + AC = 2AM!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຜົນບວກຮອບວົງຂອງສາມແຈ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບສາມແຈ ABC, ຜົນບວກຂອງເວກເຕີ AB + BC + CA ແມ່ນເວກເຕີໃດ?"}
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
          <span key="1-1">{"AD (ຄິດໄລ່: AB + BC + CD = AC + CD = AD)"}</span>,
          <span key="1-2">{"0 (ຄິດໄລ່: PQ + QP = PP = 0, ເຊິ່ງແມ່ນເວກເຕີສູນ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"AC (ຄິດໄລ່: ຕາມກົດເກນຮູບສີ່ແຈຂ້າງຂະໜານ)"}</span>,
          <span key="2-2">{"AC (ຄິດໄລ່: ຕາມກົດເກນສາມແຈ AB + BC = AC)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"ZY (ຄິດໄລ່: XY - XZ = ZY)"}</span>,
          <span key="3-2">{"PR (ຄິດໄລ່: PQ - RQ = PQ + QR = PR)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"0 (ຄິດໄລ່: OA - OC = CO + OA = CA. OB - OD = DO + OB = DB. ຍ້ອນ O ແມ່ນເມັດເຄິ່ງກາງຂອງ AC ແລະ BD ⇒ CA = 2CO, DB = 2OD = 2CO. ຂໍໂທດ: OA = -OC, OB = -OD ⇒ OA - OC = 2OA, OB - OD = 2OB. ຍ້ອນ O ເປັນຈຸດຕັດ, OA + OC = 0, OB + OD = 0 ⇒ OA + OB - OC - OD = (OA - OC) + (OB - OD) = 2OA + 2OB = 2(OA + OB) = 0 ຍ້ອນ OA = -OC, OB = -OD? ບໍ່, ຜົນບວກແມ່ນເວກເຕີສູນ 0 ຍ້ອນ OA + OC = 0, OB + OD = 0 ⇒ -OC = OA, -OD = OB ⇒ OA + OB + OA + OB = 2(OA+OB) = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"2AM (ຄິດໄລ່: AB + AC = (AM+MB) + (AM+MC) = 2AM + (MB+MC) = 2AM)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: AB + BC + CA = AC + CA = AA = 0)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການບວກ ແລະ ການລົບເວກເຕີ ແມ່ນຫົວຂໍ້ຫຼັກທີ່ສຳຄັນທີ່ສຸດໃນເລຂາຄະນິດເວກເຕີ. ເຈົ້າເລີ່ມມີພື້ນຖານທີ່ແໜ້ນໜາແລ້ວ! ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
