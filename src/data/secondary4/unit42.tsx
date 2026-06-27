import React from "react";
import { UnitData } from "../units2";

export const unit42Data: UnitData = {
  unitNumber: 42,
  unitTitle: "ພາກທີ V - ບົດທີ 42: ຄວາມໜ້າຈະເປັນພື້ນຖານ (Basic Probability)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບກຸ່ມຜົນອາດເກີດ (Sample Space), ເຫດການ (Event), ແລະ ສູດຄິດໄລ່ຄວາມໜ້າຈະເປັນແບບຄລາສສິກ P(A) = n(A) / n(S)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 212-217",
  subSections: [
    {
      title: "1. ກຸ່ມຜົນອາດເກີດ ແລະ ເຫດການ (Sample Space & Events)",
      keyPoint: {
        title: "ນິຍາມພື້ນຖານຂອງຄວາມໜ້າຈະເປັນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນທິດສະດີຄວາມໜ້າຈະເປັນ, ເຮົາມີຄຳສັບທີ່ຕ້ອງຈື່ດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"1. ກຸ່ມຜົນອາດເກີດ (Sample Space - S):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນກຸ່ມຂອງຜົນໄດ້ຮັບທັງໝົດທີ່ອາດຈະເກີດຂຶ້ນໄດ້ຈາກການທົດລອງແບບສຸ່ມ."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"2. ເຫດການ (Event - A):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນກຸ່ມຍ່ອຍ (Subset) ຂອງກຸ່ມຜົນອາດເກີດ S ທີ່ເຮົາສົນໃຈ (A ⊆ S)."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ ⇒ S = {1, 2, 3, 4, 5, 6}. ເຫດການ A ໄດ້ຄະແນນຄູ່ ⇒ A = {2, 4, 6}!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຈຳນວນອົງປະກອບຂອງເຫດການ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. ເຫດການ A ແມ່ນໄດ້ແຕ້ມທີ່ຫານຂາດໃຫ້ 3 ⇒ n(A) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ໂຍນຫຼຽນ 2 ອັນພ້ອມກັນ. ກຸ່ມຜົນອາດເກີດ S ມີຈຳນວນອົງປະກອບ n(S) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ສູດຄິດໄລ່ຄວາມໜ້າຈະເປັນ (Probability Formula)",
      keyPoint: {
        title: "ສູດຄວາມໜ້າຈະເປັນ ແລະ ຄຸນລັກສະນະ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄວາມໜ້າຈະເປັນຂອງເຫດການ A ທີ່ເກີດຂຶ້ນ ຄິດໄລ່ດ້ວຍອັດຕາສ່ວນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <strong style={{ fontSize: "1.5rem", color: "#E65100" }}>{"P(A) = n(A) / n(S)"}</strong>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຄວາມໜ້າຈະເປັນມີຄ່າລະຫວ່າງ 0 ຫາ 1: 0 ≤ P(A) ≤ 1."}
                <br />
                {"- ຖ້າ P(A) = 0: ເຫດການທີ່ບໍ່ມີທາງເກີດຂຶ້ນໄດ້."}
                <br />
                {"- ຖ້າ P(A) = 1: ເຫດການທີ່ເກີດຂຶ້ນຢ່າງແນ່ນອນ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຖົງໃສ່ໝາກບານສີແດງ 3 ໜ່ວຍ ແລະ ສີຟ້າ 5 ໜ່ວຍ. ສຸ່ມຈັບ 1 ໜ່ວຍ ⇒ P(ແດງ) = 3 / (3+5) = 3/8 = 0.375!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມໜ້າຈະເປັນຂອງເຫດການ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໂຍນໝາກກະລັອກ 1 ໜ່ວຍ. ຄວາມໜ້າຈະເປັນທີ່ຈະໄດ້ແຕ້ມເປັນຈຳນວນມູນ (Prime Number) ແມ່ນເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: P(A) ="}</span>
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
              {"ໂຈດໂຍນຫຼຽນສອງອັນ (Probability of Two Coins): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໂຍນຫຼຽນທີ່ທ່ຽງຕົງ 2 ອັນພ້ອມກັນ. ຄວາມໜ້າຈະເປັນທີ່ຈະໄດ້ຫຼຽນອອກກົງກັນຂ້າມກັນຢ່າງໜ້ອຍໜຶ່ງອັນ (ມີ ກ້ອຍ ຢ່າງໜ້ອຍ 1 ອັນ) ແມ່ນເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: P(A) ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ກຸ່ມຜົນອາດເກີດ S = {ຫົວ-ຫົວ, ຫົວ-ກ້ອຍ, ກ້ອຍ-ຫົວ, ກ້ອຍ-ກ້ອຍ} ⇒ n(S) = 4. ເຫດການມີກ້ອຍຢ່າງໜ້ອຍ 1 ອັນ A = {ຫົວ-ກ້ອຍ, ກ້ອຍ-ຫົວ, ກ້ອຍ-ກ້ອຍ} ⇒ n(A) = 3. ດັ່ງນັ້ນ P(A) = 3/4 = 0.75!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄວາມໜ້າຈະເປັນຂອງເຫດການທີ່ເປັນໄປບໍ່ໄດ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຄວາມໜ້າຈະເປັນຂອງເຫດການທີ່ເປັນໄປບໍ່ໄດ້ຢ່າງເດັດຂາດ ມີຄ່າເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
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
          <span key="1-1">{"2 (ຄິດໄລ່: ເຫດການ A = {3, 6} ⇒ n(A) = 2)"}</span>,
          <span key="1-2">{"4 (ຄິດໄລ່: S = {ຫົວ-ຫົວ, ຫົວ-ກ້ອຍ, ກ້ອຍ-ຫົວ, ກ້ອຍ-ກ້ອຍ} ⇒ n(S) = 4)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"0.5 (ຄິດໄລ່: ຈຳນວນມູນໃນໝາກກະລັອກແມ່ນ {2, 3, 5} ⇒ n(A) = 3. S = 6 ⇒ P(A) = 3/6 = 0.5)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"0.75 (ຄິດໄລ່: P(A) = 3/4 = 0.75)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0.75 (ຄິດໄລ່: P(A) = 0.75)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0 (ຄິດໄລ່: ເຫດການເປັນໄປບໍ່ໄດ້ ມີ P(A) = 0)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ເຈົ້າໄດ້ຮຽນຮູ້ພື້ນຖານຂອງຄວາມໜ້າຈະເປັນແລ້ວ. ມັນເປັນບົດຮຽນທີ່ມ່ວນ ແລະ ນຳໃຊ້ໃນເກມ ແລະ ການຕັດສິນໃຈຕ່າງໆ!"
  }
};
