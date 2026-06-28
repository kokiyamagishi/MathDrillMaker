import React from "react";
import { UnitData } from "../units2";

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ພາກທີ II - ບົດທີ 17: ຕຳລາໃນຮູບຮ່າງ y = ax² + bx + c (Quadratic Functions in form y = ax² + bx + c)",
  unitGoal: "ຮຽນຮູ້ການຜັນປ່ຽນຕຳລາຂັ້ນສອງທົ່ວໄປໃຫ້ເປັນຮູບຮ່າງມາດຕະຖານ (Canonical form), ກຳນົດເມັດຈອມ S(-b/2a, -Δ/4a), ຊອກຫາແກນເຄິ່ງຄື x = -b/2a, ແລະ ຊອກຫາສົມຜົນຕຳລາຈາກເມັດຈຸດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 83-85",
  subSections: [
    {
      title: "1. ການຜັນປ່ຽນຮູບຮ່າງ Canonical ແລະ ເມັດຈອມ (Canonical Form & Vertex Calculation)",
      keyPoint: {
        title: "ຫຼັກການ Canonical Form",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕຳລາຂັ້ນສອງ y = ax² + bx + c ສາມາດຂຽນໃນຮູບຮ່າງ Canonical ໄດ້ດັ່ງນີ້:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#F3E5F5", borderRadius: "8px", border: "1px solid #E1BEE7" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#4A148C" }, whiteSpace: "nowrap"}>
                {"y = a(x + b/(2a))² - Δ/(4a)"}
              </span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ເຊິ່ງໃນນີ້: Δ = b² - 4ac"}
                <br />
                {"- ເມັດຈອມ (Vertex): S(-b/(2a), -Δ/(4a)) ຫຼຶ S(p, q) ເຊິ່ງ p = -b/(2a) ແລະ q = -Δ/(4a)."}
                <br />
                {"- ສົມຜົນແກນເຄິ່ງຄື: x = -b/(2a)."}
              </p>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ວິທີງ່າຍໃນການຊອກຫາເມັດຈອມແມ່ນ ຄິດໄລ່ x_0 = -b/(2a) ກ່ອນ, ຫຼັງຈາກນັ້ນແທນ x_0 ໃສ່ສົມຜົນເພື່ອຊອກຫາ y_0 = f(x_0)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: y = x² - 4x + 5 ⇒ a=1, b=-4 ⇒ p = -(-4)/2 = 2. ແທນ x=2 ເຂົ້າ: y = 2² - 4(2) + 5 = 1 ⇒ ເມັດຈອມ S(2, 1)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາເມັດຈອມ ແລະ ແກນເຄິ່ງຄືຂອງປາຣາໂບນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = x² - 6x + 10 ມີເມັດຈອມແມ່ນ S("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{", "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{") ແລະ ແກນເຄິ່ງຄືແມ່ນ x ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = -x² - 4x - 1 ມີເມັດຈອມແມ່ນ S("}</span>
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
                {"ຈົ່ງຂຽນຕຳລາໃນຮູບຮ່າງ Canonical: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) y = 2x² - 8x + 5 ⇒ y = 2(x - "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) y = -3x² - 6x + 2 ⇒ y = -3(x + "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{")² +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຍ້າຍຂະໜານ ແລະ ການຊອກຫາສົມຜົນຈາກເມັດ (Translations & Parameter Fitting)",
      keyPoint: {
        title: "ຫຼັກການຍ້າຍຂະໜານລະຫວ່າງປາຣາໂບນ ແລະ ລະບົບສົມຜົນ 3 ຕົວປ່ຽນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ການຊອກຫາສົມຜົນ y = ax² + bx + c ທີ່ຜ່ານ 3 ເມັດທີ່ໃຫ້ມາ:"}
              <br />
              {"  ແທນຕົວປະສານ (x, y) ຂອງແຕ່ລະເມັດໃສ່ສົມຜົນ ເພື່ອສ້າງລະບົບສົມຜົນ 3 ຕົວປ່ຽນ (a, b, c) ແລ້ວແກ້ລະບົບສົມຜົນນັ້ນ."
              }
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }, whiteSpace: "nowrap"}>{"ການຍ້າຍຂະໜານລະຫວ່າງເມັດຈອມ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ໄລຍະການຍ້າຍຂະໜານຈາກ y_1 = a(x - p_1)² + q_1 ຫາ y_2 = a(x - p_2)² + q_2 ແມ່ນ:"}
                <br />
                {"- ຕາມແກນ Ox: p_2 - p_1"}
                <br />
                {"- ຕາມແກນ Oy: q_2 - q_1"}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ເພື່ອຊອກຫາສົມຜົນຜ່ານ (0,3), (1,4), (2,9): ຈາກ (0,3) ⇒ c=3. ຈາກ (1,4) ⇒ a+b+3=4 ⇒ a+b=1. ຈາກ (2,9) ⇒ 4a+2b+3=9 ⇒ 2a+b=3. ແກ້ໄດ້ a=2, b=-1, c=3 ⇒ y = 2x² - x + 3!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາໄລຍະການຍ້າຍຂະໜານລະຫວ່າງສອງປາຣາໂບນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຍ້າຍປາຣາໂບນ y = x² + 2x + 2 (ເມັດຈອມ S_1(-1, 1)) ເພື່ອໃຫ້ກາຍເປັນ y = x² - 6x + 7 (ເມັດຈອມ S_2(3, -2)):"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຍ້າຍຂະໜານຕາມແກນ Ox ໄປທາງຂວາ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ຫົວໜ່ວຍ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຍ້າຍຂະໜານຕາມແກນ Oy ລົງລຸ່ມ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ຫົວໜ່ວຍ"}</span>
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
                {"ຈົ່ງຊອກຫາຕຳລາຜ່ານສາມເມັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຕຳລາ y = ax² + bx + c ຜ່ານສາມເມັດ A(-1, 8), B(2, 2) ແລະ C(3, 4). ຈົ່ງຊອກຫາສຳປະສິດ b ຂອງຕຳລານີ້?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: b ="}</span>
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
              {"ໂຈດຊອກຫາສົມຜົນປາຣາໂບນຈາກເງື່ອນໄຂຈຸດຈອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ປາຣາໂບນ y = ax² + bx + c ມີເມັດຈອມຢູ່ S(1, -2) ແລະ ຜ່ານເມັດ A(2, 0). ຈົ່ງຊອກຫາຄ່າຂອງ c?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: c ="}</span>
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
              {"ໂຈດການແກ້ສົມຜົນຕັດແກນ Ox: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາເມັດຕັດທັງໝົດຂອງປາຣາໂບນ y = x² - 4x - 5 ກັບແກນ Ox (ຄ່າຂອງ x ທັງໝົດ)?"}
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
            {"ການກຳນົດທິດສະແດງປາຣາໂບນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ປາຣາໂບນ y = -2x² + 8x - 5 ເປັນປາຣາໂບນຫງາຍ ຫຼື ຂວ້ຳ, ແລະ ມີຄ່າສູງສຸດ ຫຼື ຕ່ຳສຸດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເປັນປາຣາໂບນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{" ແລະ ມີຄ່າ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໄລຍະຕັດແກນ Oy: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ປາຣາໂບນ y = 3x² - 5x - 7 ຕັດແກນ Oy ຢູ່ຈຸດໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຢູ່ເມັດ S(0, "}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{")"}</span>
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
          <span key="1-1">{"3 (ຄິດໄລ່: p = -b/2a = 6/2 = 3)"}</span>,
          <span key="1-2">{"1 (ຄິດໄລ່: q = f(3) = 3² - 6(3) + 10 = 9 - 18 + 10 = 1)"}</span>,
          <span key="1-3">{"3 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = 3)"}</span>,
          <span key="1-4">{"-2 (ຄິດໄລ່: p = -b/2a = 4/(-2) = -2)"}</span>,
          <span key="1-5">{"3 (ຄິດໄລ່: q = f(-2) = -(-2)² - 4(-2) - 1 = -4 + 8 - 1 = 3)"}</span>,
          <span key="1-6">{"-2 (ຄິດໄລ່: ແກນເຄິ່ງຄື x = -2)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"2 (ຄິດໄລ່: 2x² - 8x + 5 = 2(x² - 4x) + 5 = 2(x - 2)² - 3)"}</span>,
          <span key="2-2">{"3 (ຄິດໄລ່: 2x² - 8x + 5 = 2(x - 2)² - 3)"}</span>,
          <span key="2-3">{"1 (ຄິດໄລ່: -3x² - 6x + 2 = -3(x² + 2x) + 2 = -3(x + 1)² + 5)"}</span>,
          <span key="2-4">{"5 (ຄິດໄລ່: -3(x + 1)² + 5)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"4 (ຄິດໄລ່: ຈາກ x = -1 ຫາ x = 3 ແມ່ນຍ້າຍຂວາ 4 ຫົວໜ່ວຍ)"}</span>,
          <span key="3-2">{"3 (ຄິດໄລ່: ຈາກ y = 1 ຫາ y = -2 ແມ່ນຍ້າຍລົງ 3 ຫົວໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"-3 (ຄິດໄລ່: ແກ້ລະບົບສົມຜົນໄດ້ y = x² - 3x + 4 ⇒ b = -3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"0 (ຄິດໄລ່: y = 2(x - 1)² - 2 = 2x² - 4x ⇒ c = 0)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"5, -1 (ຄິດໄລ່: x² - 4x - 5 = (x - 5)(x + 1) = 0 ⇒ x = 5 ຫຼື -1)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ຂວ້ຳ (ຄິດໄລ່: a = -2 < 0)"}</span>,
          <span key="s2">{"ສູງສຸດ (ຄິດໄລ່: ປາຣາໂບນຂວ້ຳມີແຕ່ຄ່າສູງສຸດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s3">{"-7 (ຄິດໄລ່: ແທນ x = 0 ເຂົ້າ y = 3x² - 5x - 7 ⇒ y = -7)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ເຈົ້າໄດ້ຮຽນຮູ້ວິທີການຜັນປ່ຽນຕຳລາຂັ້ນສອງ ແລະ ການຊອກຫາອົງປະກອບຂອງປາຣາໂບນທົ່ວໄປຢ່າງຄົບຖ້ວນແລ້ວ. ນີ້ແມ່ນພື້ນຖານທີ່ດີຫຼາຍ!"
  }
};
