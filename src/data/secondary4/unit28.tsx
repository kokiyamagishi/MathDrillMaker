import React from "react";
import { UnitData } from "../units2";

export const unit28Data: UnitData = {
  unitNumber: 28,
  unitTitle: "ພາກທີ III - ບົດທີ 28: ຫຼັກເກນໂກຊີນ (The Law of Cosines)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຫຼັກເກນໂກຊີນໃນຮູບສາມແຈໃດໆ a² = b² + c² - 2bc cos A, ການຄິດໄລ່ຂ້າງ ແລະ ມຸມ, ແລະ ການປະສົມປະສານຫຼັກເກນຊີນ-ໂກຊີນໃນການແກ້ໂຈດ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 130-134",
  subSections: [
    {
      title: "1. ຫຼັກເກນໂກຊີນ ແລະ ການຫາຂ້າງທີສາມ (The Law of Cosines & Finding the Third Side)",
      keyPoint: {
        title: "ຫຼັກເກນໂກຊີນພື້ນຖານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ໃດໆ ທີ່ມີຂ້າງກົງກັນຂ້າມມຸມ A, B, C ແມ່ນ a, b, c ຕາມລໍາດັບ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"ສູດຫຼັກເກນໂກຊີນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li><strong>{"ຊອກຫາຂ້າງ a:"}</strong>{" a² = b² + c² - 2bc cos A"}</li>
                <li><strong>{"ຊອກຫາຂ້າງ b:"}</strong>{" b² = a² + c² - 2ac cos B"}</li>
                <li><strong>{"ຊອກຫາຂ້າງ c:"}</strong>{" c² = a² + b² - 2ab cos C"}</li>
              </ul>
            </div>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຫຼັກເກນໂກຊີນແມ່ນຮູບແບບທົ່ວໄປຂອງຫຼັກເກນປີຕາກໍ (ເມື່ອ A = 90°, cos 90° = 0 ຈະກາຍເປັນ a² = b² + c²)."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ຫຼັກເກນໂກຊີນມີປະໂຫຍດຫຼາຍໃນການຊອກຫາຂ້າງທີສາມ ເມື່ອເຮົາຮູ້ສອງຂ້າງ ແລະ ມຸມລະຫວ່າງສອງຂ້າງນັ້ນ (SAS)!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ b = 2, a = √3 - 1, ແລະ ມຸມ C = 120°. ຈົ່ງຊອກຫາຂ້າງ c (AB): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ cos 120° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າຂອງ c² = 6. ດັ່ງນັ້ນຂ້າງ c (AB) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ a = 1, b = 2, ແລະ c = √3. ຈົ່ງຄິດໄລ່: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ cos A = (b² + c² - a²) / 2bc ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າຂອງມຸມ A ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ອົງສາ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ມຸມ ແລະ ການປະສົມປະສານຫຼັກເກນ (Finding Angles & Combined Methods)",
      keyPoint: {
        title: "ການຫາທຸກມຸມເມື່ອຮູ້ສາມດ້ານ (SSS)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເມື່ອຮູ້ສາມດ້ານ a, b, c, ເຮົາສາມາດຊອກຫາມຸມໃດໜຶ່ງໄດ້ສະເໝີ ໂດຍນຳໃຊ້ສູດຍ້າຍຂ້າງ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ສູດຊອກຫາມຸມ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px", paddingLeft: "24px" }}>
                <li>{"cos A = (b² + c² - a²) / 2bc"}</li>
                <li>{"cos B = (a² + c² - b²) / 2ac"}</li>
                <li>{"cos C = (a² + b² - c²) / 2ab"}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຫຼັງຈາກຊອກຫາມຸມທຳອິດໂດຍໃຊ້ຫຼັກເກນໂກຊີນ, ມຸມທີສອງສາມາດຊອກໄດ້ງ່າຍຂຶ້ນໂດຍການໃຊ້ຫຼັກເກນຊີນ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ b = √6 - √2, c = 2√3, ແລະ ມຸມ A = 45°. ຈົ່ງຊອກຫາ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ a² = 8. ດັ່ງນັ້ນຂ້າງ a ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ຄ່າຂອງມຸມ C ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ອົງສາ"}</span>
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
                {"ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຸດສັງເກດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃຫ້ຈຸດ A ຫ່າງຈາກຈຸດ P ແມ່ນ AP = 50√6 ແມັດ, ແລະ ຈຸດ A ຫ່າງຈາກ Q ແມ່ນ AQ = 100√2 ແມັດ. ມຸມ PAQ = 30°. ຈົ່ງຊອກຫາໄລຍະຫ່າງ PQ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ຕອບ: PQ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{" ແມັດ (ຂຽນໃນຮູບຮ່າງ √2)"}</span>
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
              {"ໂຈດຊອກຫາຂ້າງຂອງສາມແຈ (Trigonometry Parameter Calculation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ໃຫ້ a = 3, ມຸມ B = 45°, ມຸມ C = 15°. ຈົ່ງຊອກຫາຂ້າງ b (AC)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: b ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" (ຂຽນຮູບຮ່າງ √ ຖ້າມີ)"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຊອກຫາມຸມໃຫຍ່ສຸດ (Finding the Largest Angle): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ໃຫ້ຂ້າງ a = 3, b = 5, c = 7. ຈົ່ງຊອກຫາຄ່າຂອງມຸມທີ່ໃຫຍ່ທີ່ສຸດ (ມຸມ C ກົງກັນຂ້າມດ້ານຍາວສຸດ)?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: ມຸມໃຫຍ່ສຸດແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" ອົງສາ"}</span>
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
            {"ສູດຫຼັກເກນໂກຊີນສໍາລັບມຸມ C = 90°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຖ້າ C = 90°, ຫຼັກເກນ c² = a² + b² - 2ab cos C ຈະກາຍເປັນສູດໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: c² ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄຳນວນດ້ານ c ຈາກມຸມ 60°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບສາມແຈ ABC ມີ a = 3, b = 8, ມຸມ C = 60°. ຈົ່ງຊອກຫາຂ້າງ c?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: c ="}</span>
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
          <span key="1-1">{"-1/2 (ຄິດໄລ່: cos 120° = -1/2)"}</span>,
          <span key="1-2">{"√6 (ຄິດໄລ່: c² = 2² + (√3-1)² - 2(2)(√3-1)(-1/2) = 4 + 4 - 2√3 + 2√3 - 2 = 6 ⇒ c = √6)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"√3 / 2 (ຄິດໄລ່: cos A = (4 + 3 - 1) / 4√3 = 6 / 4√3 = √3/2)"}</span>,
          <span key="2-2">{"30 (ຄິດໄລ່: cos A = √3/2 ⇒ A = 30°)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"2√2 (ຄິດໄລ່: a = √8 = 2√2)"}</span>,
          <span key="3-2">{"120 (ຄິດໄລ່: cos C = (a²+b²-c²)/2ab = -1/2 ⇒ C = 120°)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"50√2 (ຄິດໄລ່: PQ² = AP² + AQ² - 2 AP AQ cos 30° = 15000 + 20000 - 30000 = 5000 ⇒ PQ = 50√2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"√6 (ຄິດໄລ່: b = a sin B / sin A = 3 × sin 45° / sin 120° = √6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"120 (ຄິດໄລ່: cos C = (9 + 25 - 49)/30 = -1/2 ⇒ C = 120°)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"a² + b² (ຄິດໄລ່: cos 90° = 0 ⇒ c² = a² + b²)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"7 (ຄິດໄລ່: c² = 9 + 64 - 48 cos 60° = 73 - 24 = 49 ⇒ c = 7)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການນຳໃຊ້ຫຼັກເກນໂກຊີນ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໄຂບັນຫາເລຂາຄະນິດ ແລະ ວັດແທກໄລຍະທາງໃນຊີວິດຈິງໄດ້ຢ່າງງ່າຍດາຍ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
