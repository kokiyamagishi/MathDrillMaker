import React from "react";
import { UnitData } from "../units2";

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ I - ບົດທີ 8: ການແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ (Speed, Distance, and Time Problems)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນລະຫວ່າງ ຄວາມໄວສະເລ່ຍ (v), ໄລຍະທາງ (S) ແລະ ເວລາ (t), ການແກ້ໂຈດບັນຫາລົດແລ່ນຂຶ້ນ-ລົງຄ້ອຍ, ແລະ ການແກ້ໂຈດບັນຫາກຣາຟການເຄື່ອນທີ່ສວນທາງກັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 39-44",
  subSections: [
    {
      title: "1. ຄວາມໄວສະເລ່ຍ ແລະ ສູດພື້ນຖານ (Average Speed Formulas)",
      keyPoint: {
        title: "ສູດຫຼັກການເຄື່ອນທີ່ສະເໝີ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການເຄື່ອນທີ່ສະເໝີແມ່ນການເຄື່ອນທີ່ທີ່ມີຄວາມໄວຄົງທີ່. ຄວາມສຳພັນລະຫວ່າງ ຄວາມໄວ (v), ໄລຍະທາງ (S) ແລະ ເວລາ (t) ແມ່ນ:"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "8px 0", fontSize: "1.6rem", fontWeight: "bold", color: "#1565C0" }}>
              <span>{"v = S / t"}</span>
              <span>{"   ;   "}</span>
              <span>{"S = v × t"}</span>
              <span>{"   ;   "}</span>
              <span>{"t = S / v"}</span>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ຕົວຢ່າງໂຈດຂຶ້ນ-ລົງຄ້ອຍ (Up and Down Hill):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ທ້າວ ແກ້ວ ຖີບລົດຂຶ້ນຄ້ອຍໄລຍະທາງ 10 km ດ້ວຍຄວາມໄວ 10 km/h, ແລ້ວຖີບລົງຄ້ອຍທາງເດີມ 10 km ດ້ວຍຄວາມໄວ 15 km/h. ຄວາມໄວສະເລ່ຍແມ່ນ:"}
                <br />
                {"- ໄລຍະທາງທັງໝົດ S = 10 + 10 = 20 km."}
                <br />
                {"- ເວລາທັງໝົດ t = t₁ + t₂ = (10/10) + (10/15) = 1 + 2/3 = 5/3 ຊົ່ວໂມງ."}
                <br />
                {"- ຄວາມໄວສະເລ່ຍ v = 20 / (5/3) = 20 × 3/5 = 12 km/h."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ ຄວາມໄວສະເລ່ຍ ບໍ່ແມ່ນການເອົາຄວາມໄວສອງອັນມາສະເລ່ຍກັນໂດຍກົງ (ເຊັ່ນ (10+15)/2 = 12.5 ແມ່ນຜິດ!), ແຕ່ຕ້ອງເອົາ ໄລຍະທາງທັງໝົດ ຫານໃຫ້ ເວລາທັງໝົດ ເທົ່ານັ້ນ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາຄວາມໄວສະເລ່ຍ ແລະ ເວລາເດີນທາງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ລົດຈັກຄັນໜຶ່ງແລ່ນໄດ້ 165 km ໃນເວລາ 2 ຊົ່ວໂມງ 45 ນາທີ (2.75 ຊົ່ວໂມງ) ⇒ ຄວາມໄວ v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"km/h"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ລົດຖີບແລ່ນຂຶ້ນຄ້ອຍ 12 km ດ້ວຍຄວາມໄວ 12 km/h ແລະ ລົງຄ້ອຍ 12 km ດ້ວຍຄວາມໄວ 24 km/h ⇒ ຄວາມໄວສະເລ່ຍ v ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                  <span>{"km/h"}</span>
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
                {"ໂຈດວາງແຜນການເດີນທາງໃຫ້ທັນເວລາ (Target Arrival Time): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
                {"ທ້າວ ພອນ ຕັ້ງໃຈຈະຂັບລົດໄລຍະທາງ 300 km ໃຫ້ຮອດໃນເວລາ 3 ຊົ່ວໂມງ. ແຕ່ໃນ 100 km ທຳອິດ, ລົດຕິດເຮັດໃຫ້ລາວຂັບໄດ້ພຽງຄວາມໄວ 50 km/h. ຖາມວ່າໃນໄລຍະທາງ 200 km ທີ່ເຫຼືອ ລາວຕ້ອງຂັບດ້ວຍຄວາມໄວເທົ່າໃດ ຈຶ່ງຈະຮອດຕາມກຳນົດ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: v = 200 / (3 - (100 / 50)) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"km/h"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ກຣາຟໄລຍະທາງ-ເວລາ ແລະ ການເຄື່ອນທີ່ສວນທາງກັນ (Distance-Time Graphs & Intersecting Paths)",
      keyPoint: {
        title: "ການແກ້ໂຈດສວນທາງກັນດ້ວຍພຶດຊະຄະນິດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ເມື່ອສອງວັດຖຸເຄື່ອນທີ່ສວນທາງກັນ, ເຮົາສາມາດຊອກຫາຈຸດພົບກັນ ແລະ ເວລາພົບກັນໄດ້ໂດຍການຕັ້ງສົມຜົນໄລຍະທາງໃຫ້ເທົ່າກັນ ຫຼື ໃຊ້ສົມຜົນກຣາຟ."}
              <br />
              {"- ຖ້າໄລຍະທາງລະຫວ່າງ A ແລະ B ແມ່ນ D. ວັດຖຸ 1 ອອກຈາກ A ດ້ວຍຄວາມໄວ v₁ ແລະ ວັດຖຸ 2 ອອກຈາກ B ດ້ວຍຄວາມໄວ v₂ ພ້ອມກັນ, ເວລາທີ່ທັງສອງຈະພົບກັນແມ່ນ:"}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#D84315", display: "block", textAlign: "center", margin: "8px 0" }, whiteSpace: "nowrap"}>{"t = D / (v₁ + v₂)"}</span>
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ວຽງຈັນ ແລະ ອ່າງນ້ຳງຶມ ຫ່າງກັນ 95 km. ລົດທີ 1 ອອກຈາກວຽງຈັນ g;]k 11:00 ດ້ວຍຄວາມໄວ 47.5 km/h. ລົດທີ 2 ອອກຈາກນ້ຳງຶມ g;]k 12:00 ດ້ວຍຄວາມໄວ 47.5 km/h. ທັງສອງຈະສວນທາງກັນໃນເວລາ 12:30 ຢູ່ໄລຍະທາງ 71.25 km ຈາກວຽງຈັນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດການເຄື່ອນທີ່ສວນທາງກັນ (Meeting Point): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ເມືອງ A ແລະ ເມືອງ B ຫ່າງກັນ 90 km. ລົດເມຄັນໜຶ່ງອອກຈາກເມືອງ A ເວລາ 6:00 ແລະ ຮອດເມືອງ B ເວລາ 8:00 (ຄວາມໄວ v = 45 km/h). ລົດເມອີກຄັນໜຶ່ງອອກຈາກເມືອງ B ເວລາ 6:00 ໄປຫາເມືອງ A. ທັງສອງຄັນສວນທາງກັນໃນເວລາ 7:00 ພໍດີ. ຖາມວ່າລົດຄັນທີ 2 ຕ້ອງແລ່ນດ້ວຍຄວາມໄວຈັກ km/h?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: v₂ = (90 - 45) / 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"km/h"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດການເດີນທາງຫຼາຍໄລຍະ (Multi-stage Journey): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ທ້າວ ບຸນ ເດີນທາງ 10 km: ລາວເລີ່ມເດີນທາງດ້ວຍການຍ່າງ 2 km ດ້ວຍຄວາມໄວ 4 km/h. ຫຼັງຈາກນັ້ນ, ລາວຂີ່ລົດເມຕໍ່ເປັນໄລຍະທາງ 8 km ດ້ວຍຄວາມໄວ 16 km/h. ຖາມວ່າລາວໃຊ້ເວລາເດີນທາງທັງໝົດຈັກຊົ່ວໂມງ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: t = (2 / 4) + (8 / 16) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
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
              {"ໂຈດການແລ່ນໄລ່ທັນກັນ (Catching Up): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ລົດຈັກຄັນໜຶ່ງອອກເດີນທາງຈາກວຽງຈັນເວລາ 8:00 ດ້ວຍຄວາມໄວສະເໝີ 40 km/h. ຕໍ່ມາໃນເວລາ 9:00 (1 ຊົ່ວໂມງຫຼັງຈາກນັ້ນ), ລົດເກັງຄັນໜຶ່ງອອກເດີນທາງຕາມຫຼັງເສັ້ນທາງດຽວກັນດ້ວຍຄວາມໄວສະເໝີ 60 km/h. ຖາມວ່າລົດເກັງຈະແລ່ນໄລ່ທັນລົດຈັກໃນເວລາຈັກໂມງ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ເວລາທີ່ໄລ່ທັນແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{": 00 ໂມງ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຄວາມໄວສະເລ່ຍ 3 ໄລຍະ (Three-stage Average Speed): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ນາງ ຈັນ ຂັບລົດ 12 km ທຳອິດດ້ວຍຄວາມໄວ 60 km/h. ຫຼັງຈາກນັ້ນ ຂີ່ເຮືອບິນ 1,500 km ດ້ວຍຄວາມໄວ 1,000 km/h. ສຸດທ້າຍ ຂີ່ລົດແທັກຊີ 40 km ດ້ວຍຄວາມໄວ 80 km/h. ຈົ່ງຊອກຫາຄວາມໄວສະເລ່ຍຂອງການເດີນທາງທັງໝົດ? (ປັດເສດເປັນເລກຖ້ວນ)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຄວາມໄວສະເລ່ຍ v ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"km/h"}</span>
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
            {"ຄິດໄລ່ໄລຍະທາງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດຍົນແລ່ນດ້ວຍຄວາມໄວສະເລ່ຍ 80 km/h ເປັນເວລາ 3.5 ຊົ່ວໂມງ ຈະໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄລຍະທາງ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຄວາມໄວສະເລ່ຍຮ່ວມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ລົດຈັກຄັນໜຶ່ງແລ່ນຂຶ້ນພູ 60 km ດ້ວຍຄວາມໄວ 30 km/h, ແລະ ລົງພູ 60 km ດ້ວຍຄວາມໄວ 60 km/h. ຄວາມໄວສະເລ່ຍຂອງການເຄື່ອນທີ່ທັງໝົດແມ່ນຈັກ km/h?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມໄວສະເລ່ຍ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"km/h."}</span>
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
          <span key="1-1">{"(1) 60 km/h (ຄິດໄລ່: 165 / 2.75 = 60)"}</span>,
          <span key="1-2">{"(2) 16 km/h (ຄິດໄລ່: S = 24 km, t = 12/12 + 12/24 = 1.5 ຊົ່ວໂມງ. v = 24 / 1.5 = 16)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2">{"200 km/h (ຄິດໄລ່: ເວລາທີ່ເຫຼືອແມ່ນ 1 ຊົ່ວໂມງ, ດັ່ງນັ້ນ 200 / 1 = 200 km/h)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"45 km/h (ຄິດໄລ່: ລົດຄັນທີ 1 ແລ່ນໄດ້ 45 km ພາຍໃນ 1 ຊົ່ວໂມງ, ດັ່ງນັ້ນ ລົດຄັນທີ 2 ຕ້ອງແລ່ນໄດ້ 90 - 45 = 45 km ພາຍໃນ 1 ຊົ່ວໂມງ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"1 (ຄິດໄລ່: t = 2/4 + 8/16 = 0.5 + 0.5 = 1 ຊົ່ວໂມງ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"11 (ຄິດໄລ່: ລົດເກັງແລ່ນ 2 ຊົ່ວໂມງ ໄດ້ 120 km. ລົດຈັກແລ່ນ 3 ຊົ່ວໂມງ ໄດ້ 120 km. ພົບກັນໃນເວລາ 8:00 + 3 = 11:00)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"705 (ຄິດໄລ່: S = 1552 km, t = 2.2 ຊົ່ວໂມງ. v = 1552 / 2.2 = 705.45 km/h)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"280 (ຄິດໄລ່: 80 × 3.5 = 280 km)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"40 (ຄິດໄລ່: S = 120 km, t = 60/30 + 60/60 = 2 + 1 = 3 ຊົ່ວໂມງ. v = 120 / 3 = 40 km/h)"}</span>
        ]
      }
    ],
    advice: "ດີເລີດ! ໂຈດບັນຫາກ່ຽວກັບຄວາມໄວ, ໄລຍະທາງ ແລະ ເວລາ ເປັນພາກສ່ວນສຳຄັນທີ່ນຳໃຊ້ໃນຟີຊິກສາດ ແລະ ຊີວິດປະຈຳວັນ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
