import React from "react";
import { UnitData } from "../units2";

export const unit15Data: UnitData = {
  unitNumber: 15,
  unitTitle: "ພາກທີ II - ບົດທີ 15: ຕຳລາໃນຮູບຮ່າງ y = a(x-b)² (Quadratic Functions in form y = a(x-b)²)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຍ້າຍຂະໜານປາຣາໂບນຕາມແກນນອນ (ແກນ Ox) ດ້ວຍໄລຍະ b, ສຶກສາຈຸດຈອມ S(b, 0), ສົມຜົນແກນເຄິ່ງຄື x = b, ແລະ ການຜັນປ່ຽນຂອງຕຳລາ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 77-80",
  subSections: [
    {
      title: "1. ການຍ້າຍຂະໜານຕາມແກນນອນ ແລະ ເມັດຈອມ (Horizontal Translation & Vertex)",
      keyPoint: {
        title: "ຫຼັກການຍ້າຍຂະໜານຂອງ y = a(x-b)²",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ກຣາຟຂອງຕຳລາ y = a(x-b)² ໄດ້ມາຈາກການຍ້າຍຂະໜານກຣາຟຂອງຕຳລາ y = ax² ຕາມແກນນອນ (Ox):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }, whiteSpace: "nowrap"}>{"ທິດທາງການຍ້າຍຂະໜານ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຖ້າ b > 0: "}</strong>{" ຍ້າຍຂະໜານໄປທາງຂວາ b ຫົວໜ່ວຍ."}</li>
                <li><strong>{"ຖ້າ b < 0: "}</strong>{" ຍ້າຍຂະໜານໄປທາງຊ້າຍ |b| ຫົວໜ່ວຍ."}</li>
              </ul>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ຄຸນລັກສະນະສະເພາະ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ເມັດຈອມ (Vertex):"}</strong>{" S(b, 0) ເຊິ່ງຈະຢູ່ເທິງແກນ Ox ສະເໝີ."}</li>
                <li><strong>{"ແກນເຄິ່ງຄື (Axis of Symmetry):"}</strong>{" ແມ່ນເສັ້ນຊື່ x = b (ຂະໜານກັບແກນ Oy)."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ລະວັງເຄື່ອງໝາຍ: ຕຳລາ y = 2(x-3)² ມີ b = 3 (ຍ້າຍໄປຂວາ 3), ແຕ່ y = 2(x+3)² ມີ b = -3 (ຍ້າຍໄປຊ້າຍ 3, ເພາະ x+3 = x-(-3))!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງກຳນົດທິດທາງການຍ້າຍຂະໜານ ແລະ ເມັດຈອມຂອງປາຣາໂບນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(1) y = 3(x - 5)² ໄດ້ມາຈາກການຍ້າຍ y = 3x² ໄປທາງຂວາ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຫົວໜ່ວຍ, ມີເມັດຈອມແມ່ນ S("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", 0)"}</span>
                </div>
              </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) y = -2(x + 4)² ໄດ້ມາຈາກການຍ້າຍ y = -2x² ໄປທາງຊ້າຍ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ຫົວໜ່ວຍ, ມີເມັດຈອມແມ່ນ S("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{", 0)"}</span>
                </div>
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
                {"ຈົ່ງຊອກຫາສົມຜົນແກນເຄິ່ງຄື x = b ຂອງປາຣາໂບນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຕຳລາ y = 4(x - 7)² ມີສົມຜົນແກນເຄິ່ງຄືແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຕຳລາ y = -0.5(x + 2)² ມີສົມຜົນແກນເຄິ່ງຄືແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ທິດທາງການຜັນປ່ຽນຂອງຕຳລາ (Increasing & Decreasing Intervals)",
      keyPoint: {
        title: "ການກຳນົດຫວ່າງຂຶ້ນ ແລະ ຫວ່າງແຮມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທິດທາງການຜັນປ່ຽນຂອງ y = a(x-b)² ຈະແບ່ງໂດຍແກນເຄິ່ງຄື x = b:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }, whiteSpace: "nowrap"}>{"ຖ້າ a > 0 (ປາຣາໂບນຫງາຍ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕຳລາຈະຫຼຸດ (decreasing) ໃນຫວ່າງ ]-∞, b]"}
                <br />
                {"- ຕຳລາຈະເພີ່ມ (increasing) ໃນຫວ່າງ [b, +∞["}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#FFEBEE", borderRadius: "8px", border: "1px solid #FFCDD2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#C62828" }, whiteSpace: "nowrap"}>{"ຖ້າ a < 0 (ປາຣາໂບນຂວ້ຳ):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຕຳລາຈະເພີ່ມ (increasing) ໃນຫວ່າງ ]-∞, b]"}
                <br />
                {"- ຕຳລາຈະຫຼຸດ (decreasing) ໃນຫວ່າງ [b, +∞["}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ເມັດຈອມ S(b, 0) ຈະເປັນເມັດຕ່ຳສຸດເມື່ອ a > 0 ແລະ ເປັນເມັດສູງສຸດເມື່ອ a < 0 ໂດຍຄ່າຕ່ຳສຸດ/ສູງສຸດຂອງ y ແມ່ນ 0 ສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງກຳນົດຫວ່າງເພີ່ມ ຫຼື ຫຼຸດຂອງຕຳລາ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຕຳລາ y = 2(x - 3)² (a > 0) ຈະຫຼຸດ (decreasing) ໃນຫວ່າງ ]-∞,"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"]"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຕຳລາ y = -3(x + 1)² (a < 0) ຈະຫຼຸດ (decreasing) ໃນຫວ່າງ ["}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{", +∞["}</span>
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
                {"ຈົ່ງຊອກຫາຄ່າຂອງ y ຈາກສົມຜົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ຕຳລາ y = -2(x - 3)². ຖ້າ x = 1, ຈົ່ງຄິດໄລ່ຄ່າຂອງ y ທີ່ສອດຄ່ອງ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: y ="}</span>
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
              {"ໂຈດຊອກຫາສົມຜົນປາຣາໂບນຈາກເມັດຈອມ ແລະ ເມັດຜ່ານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປາຣາໂບນ y = a(x-b)² ມີເມັດຈອມຢູ່ S(3, 0) ແລະ ຜ່ານເມັດ A(5, 8). ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດ a?"}
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
              {"ໂຈດການແກ້ສົມຜົນກຳລັງສອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາໃຈຜົນຂອງສົມຜົນ: 3(x - 2)² = 27 (ຊອກຫາຄ່າ x ທັງໝົດ)?"}
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
            {"ຈຳນວນເມັດຕັດລະຫວ່າງປາຣາໂບນ ແລະ ແກນ Ox: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ປາຣາໂບນໃນຮູບຮ່າງ y = a(x - b)² ຕັດ (ຫຼື ສຳຜັດ) ກັບແກນ Ox ຢູ່ຈັກເມັດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຈຳນວນເມັດແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ເມັດ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການສົມທຽບຕຳລາ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າປາຣາໂບນ y = -4(x - b)² ຖືກຍ້າຍຂະໜານມາຈາກ y = ax² ຕາມແກນ Ox. ຈົ່ງຊອກຫາຄ່າຂອງ a?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: a ="}</span>
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
          <span key="1-1">{"5 (ຄິດໄລ່: b = 5 ຍ້າຍໄປທາງຂວາ 5 ຫົວໜ່ວຍ)"}</span>,
          <span key="1-2">{"5 (ຄິດໄລ່: ເມັດຈອມແມ່ນ S(5, 0))"}</span>,
          <span key="1-3">{"4 (ຄິດໄລ່: b = -4 ຍ້າຍໄປທາງຊ້າຍ 4 ຫົວໜ່ວຍ)"}</span>,
          <span key="1-4">{"-4 (ຄິດໄລ່: ເມັດຈອມແມ່ນ S(-4, 0))"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"7 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = b = 7)"}</span>,
          <span key="2-2">{"-2 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = b = -2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"3 (ຄິດໄລ່: ຕຳລາຫງາຍ a > 0 ຫຼຸດໃນຫວ່າງ ]-∞, b] = ]-∞, 3])"}</span>,
          <span key="3-2">{"-1 (ຄິດໄລ່: ຕຳລາຂວ້ຳ a < 0 ຫຼຸດໃນຫວ່າງ [b, +∞[ = [-1, +∞[)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"-8 (ຄິດໄລ່: y = -2(1 - 3)² = -2(-2)² = -2 × 4 = -8)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"2 (ຄິດໄລ່: 8 = a(5 - 3)² = 4a ⇒ a = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"5, -1 (ຄິດໄລ່: (x - 2)² = 9 ⇒ x - 2 = ±3 ⇒ x = 5 ຫຼື x = -1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"1 (ຄິດໄລ່: ມີແຕ່ເມັດຈອມ S(b, 0) ເທົ່ານັ້ນທີ່ຢູ່ເທິງແກນ Ox, ດັ່ງນັ້ນມີພຽງ 1 ເມັດຕັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"-4 (ຄິດໄລ່: ສຳປະສິດໜ້າວົງເລັບກຳລັງສອງ a ບໍ່ປ່ຽນແປງໃນການຍ້າຍຂະໜານ, ດັ່ງນັ້ນ a = -4)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າເລີ່ມເຂົ້າໃຈການຍ້າຍຂະໜານປາຣາໂບນຕາມແກນນອນຢ່າງເລິກເຊິ່ງແລ້ວ. ບົດບາດຂອງ b ແມ່ນມີຄວາມສຳຄັນຫຼາຍໃນການກຳນົດເມັດຈອມ ແລະ ແກນເຄິ່ງຄື. ສູ້ໆຕໍ່ໄປ!"
  }
};
