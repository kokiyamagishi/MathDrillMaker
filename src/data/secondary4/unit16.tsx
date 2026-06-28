import React from "react";
import { UnitData } from "../units2";

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ II - ບົດທີ 16: ຕຳລາໃນຮູບຮ່າງ y = a(x-p)² + q (Quadratic Functions in form y = a(x-p)² + q)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຍ້າຍຂະໜານປາຣາໂບນທັງສອງທິດທາງ (ແກນ Ox ແລະ ແກນ Oy), ສຶກສາເມັດຈອມ S(p, q), ສົມຜົນແກນເຄິ່ງຄື x = p, ແລະ ການກຳນົດຄ່າສູງສຸດ/ຕ່ຳສຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 81-82",
  subSections: [
    {
      title: "1. ການຍ້າຍຂະໜານ ແລະ ເມັດຈອມສອງມິຕິ (Two-Dimensional Translation & Vertex)",
      keyPoint: {
        title: "ຫຼັກການຍ້າຍຂະໜານ ແລະ ເມັດຈອມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຣາຟຂອງຕຳລາ y = a(x-p)² + q ໄດ້ມາຈາກການຍ້າຍຂະໜານກຣາຟ y = ax² ທັງສອງແກນ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E0F2F1", borderRadius: "8px", border: "1px solid #B2DFDB" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#004D40" , whiteSpace: "nowrap"}}>{"ການຍ້າຍຂະໜານ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"ຕາມແກນນອນ Ox ດ້ວຍໄລຍະ p ຫົວໜ່ວຍ (ໄປທາງຂວາຖ້າ p > 0, ໄປທາງຊ້າຍຖ້າ p < 0)."}</li>
                <li>{"ຕາມແກນຕັ້ງ Oy ດ້ວຍໄລຍະ q ຫົວໜ່ວຍ (ຂຶ້ນເທິງຖ້າ q > 0, ລົງລຸ່ມຖ້າ q < 0)."}</li>
              </ul>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#ECEFF1", borderRadius: "8px", border: "1px solid #CFD8DC" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#37474F" , whiteSpace: "nowrap"}}>{"ລັກສະນະເສັ້ນສະແດງ (ປາຣາໂບນ):"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ເມັດຈອມ (Vertex):"}</strong>{" S(p, q)"}</li>
                <li><strong>{"ແກນເຄິ່ງຄື (Axis of Symmetry):"}</strong>{" ແມ່ນເສັ້ນຊື່ x = p"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ຕຳລາ y = 2(x - 3)² + 4 ມີເມັດຈອມແມ່ນ S(3, 4) ແລະ ມີແກນເຄິ່ງຄືແມ່ນ x = 3.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງກຳນົດເມັດຈອມ ແລະ ແກນເຄິ່ງຄືຂອງປາຣາໂບນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = 3(x - 1)² - 2 ມີເມັດຈອມແມ່ນ S("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ແກນເຄິ່ງຄືແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = -2(x + 3)² + 4 ມີເມັດຈອມແມ່ນ S("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ແກນເຄິ່ງຄືແມ່ນ x ="}</span>
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
                {"ຈົ່ງຊອກຫາໄລຍະການຍ້າຍຂະໜານ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຍ້າຍປາຣາໂບນ y = -x² ໄປຂວາ 2 ແລະ ຂຶ້ນເທິງ 5 ຫົວໜ່ວຍ ຈະໄດ້ສົມຜົນ y = -(x - "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຍ້າຍປາຣາໂບນ y = 2x² ໄປຊ້າຍ 3 ແລະ ລົງລຸ່ມ 4 ຫົວໜ່ວy ຈະໄດ້ສົມຜົນ y = 2(x + "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ຄ່າສູງສຸດ, ຄ່າຕ່ຳສຸດ ແລະ ຫວ່າງການຜັນປ່ຽນ (Extrema & Variation Intervals)",
      keyPoint: {
        title: "ການສຶກສາຈຸດຕ່ຳສຸດ ແລະ ສູງສຸດ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຄ່າຂອງສຳປະສິດ a ເປັນຕົວກຳນົດວ່າຕຳລາຈະມີຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ຖ້າ a > 0 (ປາຣາໂບນຫງາຍ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕຳລາມີຄ່າຕ່ຳສຸດ (minimum value) ແມ່ນ y = q ຢູ່ເມັດຈອມ S(p, q)."}
                <br />
                {"- ເຂດຄ່າຂອງຕຳລາແມ່ນ y ∈ [q, +∞[."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#C62828" , whiteSpace: "nowrap"}}>{"ຖ້າ a < 0 (ປາຣາໂບນຂວ້ຳ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕຳລາມີຄ່າສູງສຸດ (maximum value) ແມ່ນ y = q ຢູ່ເມັດຈອມ S(p, q)."}
                <br />
                {"- ເຂດຄ່າຂອງຕຳລາແມ່ນ y ∈ ]-∞, q]."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດແມ່ນຄ່າຂອງຕົວປ່ຽນ y ເທົ່ານັ້ນ (y = q), ເຊິ່ງບັນລຸໄດ້ເມື່ອ x = p.",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າສູງສຸດ ຫຼື ຄ່າຕ່ຳສຸດຂອງຕຳລາຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຕຳລາ y = 2(x - 5)² + 3 ມີຄ່າຕ່ຳສຸດແມ່ນ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ເມື່ອ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຕຳລາ y = -4(x + 1)² + 7 ມີຄ່າສູງສຸດແມ່ນ y ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ເມື່ອ x ="}</span>
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
                {"ຈົ່ງກຳນົດເຂດຄ່າຂອງ y ຂອງຕຳລາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ກຳນົດຕຳລາ y = 3(x - 2)² + 1. ເຂດຄ່າຂອງ y ແມ່ນ y ≥ q. ຈົ່ງຊອກຫາຄ່າຂອງ q?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: q ="}</span>
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
              {"ໂຈດຊອກຫາສົມຜົນປາຣາໂບນຂັ້ນສູງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປາຣາໂບນ y = a(x - p)² + q ມີເມັດຈອມຢູ່ S(2, 9) ແລະ ຜ່ານເມັດ A(4, -3). ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ a?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາເມັດຕັດລະຫວ່າງປາຣາໂບນ ແລະ ແກນ Ox: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າ x ທີ່ເປັນເມັດຕັດລະຫວ່າງປາຣາໂບນ y = 2(x - 3)² - 8 ແລະ ແກນ Ox (ຊອກຫາ x ທັງໝົດ)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: x ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
            {"ການເຄື່ອນຍ້າຍເມັດຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າເຮົາເຄື່ອນຍ້າຍປາຣາໂບນ y = -2(x - 3)² + 4 ໄປທາງຊ້າຍ 3 ຫົວໜ່ວຍ ແລະ ລົງລຸ່ມ 4 ຫົວໜ່ວຍ ຈະໄດ້ເມັດຈອມໃໝ່ແມ່ນຫຍັງ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເມັດຈອມໃໝ່ແມ່ນ S("}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{", "}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
            <span>{")"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການສົມທຽບຕຳລາຂວ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຕຳລາ y = -5(x - 4)² + 10 ຈະຫຼຸດ (decreasing) ໃນຫວ່າງໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຫວ່າງ ["}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{", +∞["}</span>
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
          <span key="1-1">{"1 (ຄິດໄລ່: p = 1 ຈາກ x - 1)"}</span>,
          <span key="1-2">{"-2 (ຄິດໄລ່: q = -2)"}</span>,
          <span key="1-3">{"1 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = p = 1)"}</span>,
          <span key="1-4">{"-3 (ຄິດໄລ່: p = -3 ຈາກ x + 3 = x - (-3))"}</span>,
          <span key="1-5">{"4 (ຄິດໄລ່: q = 4)"}</span>,
          <span key="1-6">{"-3 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = p = -3)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"2 (ຄິດໄລ່: ຍ້າຍຂວາ 2 ຫົວໜ່ວຍ ⇒ p = 2)"}</span>,
          <span key="2-2">{"5 (ຄິດໄລ່: ຍ້າຍຂຶ້ນເທິງ 5 ຫົວໜ່ວຍ ⇒ q = 5)"}</span>,
          <span key="2-3">{"3 (ຄິດໄລ່: ຍ້າຍຊ້າຍ 3 ຫົວໜ່ວຍ ⇒ p = -3 ⇒ x - p = x + 3)"}</span>,
          <span key="2-4">{"4 (ຄິດໄລ່: ຍ້າຍລົງລຸ່ມ 4 ຫົວໜ່ວຍ ⇒ q = -4)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"3 (ຄິດໄລ່: ຕຳລາຫງາຍ a > 0 ມີຄ່າຕ່ຳສຸດແມ່ນ q = 3)"}</span>,
          <span key="3-2">{"5 (ຄິດໄລ່: ຄ່າຕ່ຳສຸດເກີດຂຶ້ນເມື່ອ x = p = 5)"}</span>,
          <span key="3-3">{"7 (ຄິດໄລ່: ຕຳລາຂວ້ຳ a < 0 ມີຄ່າສູງສຸດແມ່ນ q = 7)"}</span>,
          <span key="3-4">{"-1 (ຄິດໄລ່: ຄ່າສູງສຸດເກີດຂຶ້ນເມື່ອ x = p = -1)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"1 (ຄິດໄລ່: a = 3 > 0 ⇒ ຕ່ຳສຸດ y = q = 1, ດັ່ງນັ້ນ y ≥ 1)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"-3 (ຄິດໄລ່: -3 = a(4 - 2)² + 9 ⇒ -12 = 4a ⇒ a = -3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"5, 1 (ຄິດໄລ່: 2(x - 3)² - 8 = 0 ⇒ (x - 3)² = 4 ⇒ x = 5 ຫຼື x = 1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"0, 0 (ຄິດໄລ່: ເມັດຈອມເກົ່າ S(3, 4). ຍ້າຍຊ້າຍ 3 ⇒ p' = 3 - 3 = 0; ຍ້າຍລົງລຸ່ມ 4 ⇒ q' = 4 - 4 = 0. ເມັດຈອມໃໝ່ແມ່ນ S(0, 0))"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"4 (ຄິດໄລ່: a = -5 < 0 ຕຳລາຂວ້ຳ ຈະຫຼຸດໃນຫວ່າງ [b, +∞[ = [4, +∞[)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການເຄື່ອນຍ້າຍປາຣາໂບນທັງສອງມິຕິ (x-p)² + q ຈະຊ່ວຍໃຫ້ເຈົ້າສາມາດເຂົ້າໃຈຕຳລາຂັ້ນສອງທຸກໆຮູບຮ່າງໄດ້ຢ່າງສົມບູນ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
