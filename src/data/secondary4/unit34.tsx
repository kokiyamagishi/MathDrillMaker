import React from "react";
import { UnitData } from "../units2";

export const unit34Data: UnitData = {
  unitNumber: 34,
  unitTitle: "ພາກທີ IV - ບົດທີ 34: ເວກເຕີຮ່ວມແຜ່ນພຽງ (Coplanar Vectors)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເວກເຕີຮ່ວມແຜ່ນພຽງ, ເງື່ອນໄຂໃຫ້ສາມເວກເຕີຮ່ວມແຜ່ນພຽງ w = x·u + y·v, ແລະ ການວິເຄາະຄວາມເປັນເອກະລາດເຊິ່ງກັນແລະກັນໃນອາວະກາດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 167-171",
  subSections: [
    {
      title: "1. ນິຍາມ ແລະ ເງື່ອນໄຂການຮ່ວມແຜ່ນພຽງ (Definition & Conditions for Coplanar Vectors)",
      keyPoint: {
        title: "ເວກເຕີຮ່ວມແຜ່ນພຽງແມ່ນຫຍັງ?",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນອາວະກາດ, ສາມເວກເຕີ u, v ແລະ w ຖືກເອີ້ນວ່າ ຮ່ວມແຜ່ນພຽງກັນ (Coplanar) ຖ້າທິດທາງຂອງພວກມັນຂະໜານກັບແຜ່ນພຽງດຽວກັນ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8EAF6", borderRadius: "8px", border: "1px solid #C5CAE9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#3F51B5" }}>{"ເງື່ອນໄຂທາງຄະນິດສາດ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຖ້າສອງເວກເຕີ u ແລະ v ບໍ່ຂະໜານກັນ, ສາມເວກເຕີ u, v, w ຈະຮ່ວມແຜ່ນພຽງກັນ ກໍຕໍ່ເມື່ອມີສອງຈຳນວນຈິງ x ແລະ y ທີ່ເຮັດໃຫ້:"}
                <br />
                <strong style={{ fontSize: "1.375rem", color: "#1A237E" }}>{"w = x·u + y·v"}</strong>
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#00796B" }}>{"ຄຸນລັກສະນະສໍາຄັນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ທຸກໆສອງເວກເຕີ u ແລະ v ໃດໆ ຈະຮ່ວມແຜ່ນພຽງກັນສະເໝີ."}</li>
                <li>{"ຖ້າສາມເວກເຕີ u, v, w ບໍ່ຮ່ວມແຜ່ນພຽງກັນ, ພວກມັນຈະເປັນເອກະລາດເຊິ່ງກັນແລະກັນໃນອາວະກາດ."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີກວດສອບ: ຕັ້ງລະບົບສົມຜົນເພື່ອຊອກຫາ x ແລະ y. ຖ້າມີໃຈຜົນທີ່ສອດຄ່ອງ, ສະແດງວ່າສາມເວກເຕີຮ່ວມແຜ່ນພຽງກັນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າຂອງ x ແລະ y ຈາກການພົວພັນເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ u = [1, 2], v = [1, 0] ແລະ w = [5, 4]. ຖ້າ w = x·u + y·v ຈະໄດ້ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{" ແລະ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ u = [2, -1], v = [0, 3] ແລະ w = [6, 0]. ຖ້າ w = x·u + y·v ຈະໄດ້ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{" ແລະ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
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
                {"ຈົ່ງຕື່ມຂໍ້ມູນກ່ຽວກັບຄວາມຮ່ວມແຜ່ນພຽງຂອງເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ໃຫ້ u = [1, 0, 0], v = [0, 1, 0] ແລະ w = [2, 3, 0]. ຖ້າ w = x·u + y·v, ສະແດງວ່າ u, v, w "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{" (ເລືອກ: ຮ່ວມແຜ່ນພຽງ / ບໍ່ຮ່ວມແຜ່ນພຽງ)"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໃຫ້ u = [1, 0, 0], v = [0, 1, 0] ແລະ w = [0, 0, 1]. ສາມເວກເຕີນີ້ "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{" (ເລືອກ: ຮ່ວມແຜ່ນພຽງ / ບໍ່ຮ່ວມແຜ່ນພຽງ)"}</span>
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
              {"ໂຈດການຮ່ວມແຜ່ນພຽງຂອງສີ່ເມັດ (Coplanar Points in Space): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ສີ່ເມັດ A(1, 1, 1), B(2, 3, 1), C(1, 2, 2) ແລະ D(2, 4, k). ຊອກຫາຄ່າ k ເພື່ອໃຫ້ສີ່ເມັດ A, B, C, D ຕັ້ງຢູ່ເທິງແຜ່ນພຽງດຽວກັນ (ຮ່ວມແຜ່ນພຽງກັນ)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: k ="}</span>
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
            {"ຄວາມຮ່ວມແຜ່ນພຽງຂອງສອງເວກເຕີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນອາວະກາດ, ສອງເວກເຕີໃດໆ ຈະຮ່ວມແຜ່ນພຽງກັນສະເໝີ ແມ່ນ ຫຼື ບໍ່?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{" (ຕອບ: ແມ່ນ / ບໍ່ແມ່ນ)"}</span>
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
          <span key="1-1">{"2 (ຄິດໄລ່: 2x = 4 ⇒ x = 2)"}</span>,
          <span key="1-2">{"3 (ຄິດໄລ່: x + y = 5 ⇒ 2 + y = 5 ⇒ y = 3)"}</span>,
          <span key="1-3">{"3 (ຄິດໄລ່: 2x = 6 ⇒ x = 3)"}</span>,
          <span key="1-4">{"1 (ຄິດໄລ່: -x + 3y = 0 ⇒ -3 + 3y = 0 ⇒ y = 1)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"ຮ່ວມແຜ່ນພຽງ (ຄິດໄລ່: w = 2u + 3v, ເຊິ່ງແມ່ນການລວມເສັ້ນຊື່)"}</span>,
          <span key="2-2">{"ບໍ່ຮ່ວມແຜ່ນພຽງ (ຄິດໄລ່: ບໍ່ມີ x, y ທີ່ເຮັດໃຫ້ w = x·u + y·v ຍ້ອນມີອົງປະກອບແກນ z)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"2 (ຄິດໄລ່: k - 1 = y = 1 ⇒ k = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"2 (ຄິດໄລ່: k = 2 ເຮັດໃຫ້ AD = AB + AC)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ແມ່ນ (ຄິດໄລ່: ສອງເວກເຕີໃດໆ ສາມາດກຳນົດແຜ່ນພຽງໜຶ່ງດຽວຜ່ານພວກມັນໄດ້ສະເໝີ)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ເຈົ້າເຂົ້າໃຈຫຼັກການຂອງຄວາມຮ່ວມແຜ່ນພຽງຂອງເວກເຕີໃນອາວະກາດແລ້ວ. ນີ້ແມ່ນກະແຈສຳຄັນໃນການກ້າວໄປສູ່ການຮຽນເລຂາຄະນິດ 3 ມິຕິ!"
  }
};
