import React from "react";
import { UnitData } from "../units2";

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພາກທີ III - ບົດທີ 27: ຫຼັກເກນຊີນ (The Law of Sines)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຫຼັກເກນຊີນໃນຮູບສາມແຈໃດໆ a/sin A = b/sin B = c/sin C = 2R, ການຊອກຫາຂ້າງ, ມຸມ ແລະ ລັດສະໝີວົງມົນອ້ອມນອກ R",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 125-129",
  subSections: [
    {
      title: "1. ຫຼັກເກນຊີນ ແລະ ການພົວພັນໃນຮູບສາມແຈ (The Law of Sines & Triangle Relationships)",
      keyPoint: {
        title: "ຫຼັກເກນຊີນພື້ນຖານ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC ໃດໆ ທີ່ມີຂ້າງກົງກັນຂ້າມມຸມ A, B, C ແມ່ນ a, b, c ແລະ R ແມ່ນລັດສະໝີວົງມົນອ້ອມນອກ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#0D47A1" }}>
                {"a / sin A = b / sin B = c / sin C = 2R"}
              </span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"- ຫຼັກເກນຊີນຊ່ວຍໃຫ້ເຮົາຊອກຫາຂ້າງ ຫຼື ມຸມ ຂອງຮູບສາມແຈເມື່ອຮູ້:"}
                <br />
                {"  1. ໜຶ່ງຂ້າງ ແລະ ສອງມຸມ."}
                <br />
                {"  2. ສອງຂ້າງ ແລະ ໜຶ່ງມຸມກົງກັນຂ້າມກັບຂ້າງໃດໜຶ່ງ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ສະເໝີ: ຜົນບວກຂອງສາມມຸມໃນຮູບສາມແຈແມ່ນ A + B + C = 180° ສະເໝີ. ເຮົາສາມາດຊອກຫາມຸມທີສາມໄດ້ສະເໝີຖ້າຮູ້ສອງມຸມ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ b = 3√2, ມຸມ B = 30° ແລະ c = 6. ຈົ່ງຊອກຫາມຸມ C: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ sin C ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"(2) ຄ່າຂອງມຸມ C ທີ່ເປັນໄປໄດ້ (ມຸມແຫຼມ ຫຼື ມຸມເຫວີ) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"° ຫຼື"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"°"}</span>
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
                {"ໃນຮູບສາມແຈ ABC, ໃຫ້ b = 2, ມຸມ A = 60° ແລະ ມຸມ B = 45°. ຈົ່ງຊອກຫາ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຂ້າງ a (ຂ້າງ BC) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ລັດສະໝີວົງມົນອ້ອມນອກ R ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການນຳໃຊ້ຕົວຈິງ ແລະ ໂຈດບັນຫາລະດັບສູງ (Real-World Applications & Advanced Problems)",
      keyPoint: {
        title: "ການວັດແທກໄລຍະທາງທາງອ້ອມ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຫຼັກເກນຊີນສາມາດນຳໃຊ້ວັດແທກໄລຍະທາງທີ່ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ໂດຍກົງ (ເຊັ່ນ ໄລຍະຫ່າງຂ້າມແມ່ນ້ຳ):"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຂັ້ນຕອນແກ້ໂຈດ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"1. ສ້າງຮູບສາມແຈສົມມຸດລະຫວ່າງຈຸດທີ່ກຳນົດ."}
                <br />
                {"2. ຄິດໄລ່ມຸມທີສາມຈາກ A + B + C = 180°."}
                <br />
                {"3. ນຳໃຊ້ສູດ: a / sin A = b / sin B ເພື່ອຊອກຫາຂ້າງທີ່ຕ້ອງການ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຢ່າງ: ໄລຍະຫ່າງລະຫວ່າງຈຸດ A ຫາ ຍອດຜາ P ໂດຍມີເສັ້ນຖານ AB = 80 ແມັດ, ມຸມ BAP = 75° ແລະ ABP = 45°. ມຸມ APB = 180° - 120° = 60°. ຈະໄດ້ AP / sin 45° = 80 / sin 60° ⇒ AP = 80√6 / 3 ແມັດ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງແກ້ໂຈດວັດແທກໄລຍະຫ່າງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ເພື່ອວັດແທກໄລຍະທາງຂ້າມແມ່ນ້ຳຈາກ A ຫາ P, ເຮົາແທ້ມຖານ AB = 100 ແມັດ, ມຸມ BAP = 75°, ມຸມ ABP = 45° (ມຸມ P = 60°):"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຄ່າຂອງ sin 60° ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ໄລຍະຫ່າງ AP ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{" ແມັດ (ຂຽນໃນຮູບຮ່າງ √6)"}</span>
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
                {"ຈົ່ງຊອກຫາຂ້າງຂອງຮາມສາມແຈທີ່ມີອັດຕາສ່ວນມຸມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ໃນຮູບສາມແຈ ABC ທີ່ມີມຸມ A, B, C ເປັນອັດຕາສ່ວນ 1:2:9, ລັດສະໝີວົງມົນອ້ອມນອກ R = 1. ຈົ່ງຊອກຫາຂ້າງ AB (ຂ້າງ c)?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                <span>{"ຕອບ: AB ="}</span>
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
              {"ໂຈດອັດຕາສ່ວນໄຕມູມມິຕິ (Ratios in Law of Sines): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຮູບສາມແຈ ABC, ໃຫ້ອັດຕາສ່ວນຂ້າງ a:b:c = 4:5:6. ຈົ່ງຊອກຫາອັດຕາສ່ວນ sin A : sin B : sin C?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
              <span>{"ຕອບ: sin A : sin B : sin C ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາລັດສະໝີວົງມົນອ້ອມນອກ (Circumradius Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃຫ້ຮູບສາມແຈ ABC ມີຂ້າງ a = 5 ແລະ ມຸມ A = 150°. ຈົ່ງຊອກຫາລັດສະໝີວົງມົນອ້ອມນອກ R?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: R ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ຍ້ອນ a/sin A = b/sin B = c/sin C ⇒ sin A : sin B : sin C = a : b : c = 4:5:6! ສໍາລັບ R: a/sin A = 2R ⇒ 5 / sin 150° = 2R. ຍ້ອນ sin 150° = 1/2 ⇒ 5 / (1/2) = 10 = 2R ⇒ R = 5!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄ່າຂອງ a/sin A: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນຮູບສາມແຈ ABC ທີ່ມີລັດສະໝີວົງມົນອ້ອມນອກ R = 4. ຄ່າຂອງອັດຕາສ່ວນ a / sin A ແມ່ນເທົ່າໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ:"}</span>
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
            {"ຄຳນວນຂ້າງກົງກັນຂ້າມມຸມ 45°: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃຫ້ຮູບສາມແຈ ABC ມີ R = 3. ຈົ່ງຊອກຫາຂ້າງ a ຖ້າມຸມ A = 45°?"}
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
          <span key="1-1">{"√2 / 2 (ຄິດໄລ່: sin C = c sin B / b = 6 × (1/2) / (3√2) = 3 / (3√2) = 1/√2 = √2/2)"}</span>,
          <span key="1-2">{"45 (ຄິດໄລ່: sin C = √2/2 ⇒ C = 45° ຫຼື 135°)"}</span>,
          <span key="1-3">{"135 (ຄິດໄລ່: sin C = √2/2 ⇒ C = 45° ຫຼື 135°)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"√6 (ຄິດໄລ່: a = b sin A / sin B = 2 × sin 60° / sin 45° = 2 × (√3/2) / (√2/2) = 2√3 / √2 = √6)"}</span>,
          <span key="2-2">{"√2 (ຄິດໄລ່: 2R = b / sin B = 2 / sin 45° = 2 / (√2/2) = 4/√2 = 2√2 ⇒ R = √2)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"√3 / 2 (ຄິດໄລ່: sin 60° = √3 / 2)"}</span>,
          <span key="3-2">{"100√6 / 3 (ຄິດໄລ່: AP = AB sin B / sin P = 100 × sin 45° / sin 60° = 100 × (√2/2) / (√3/2) = 100√2 / √3 = 100√6 / 3)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4">{"√2 (ຄິດໄລ່: ມຸມ A, B, C ມີອັດຕາສ່ວນ 1:2:9 ⇒ C = 135° ⇒ AB = c = 2R sin C = 2(1) sin 135° = 2 × √2/2 = √2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"4:5:6 (ຄິດໄລ່: sin A : sin B : sin C = a : b : c = 4:5:6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"5 (ຄິດໄລ່: 2R = a / sin A = 5 / sin 150° = 5 / (1/2) = 10 ⇒ R = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"8 (ຄິດໄລ່: a/sin A = 2R = 2(4) = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"3√2 (ຄິດໄລ່: a = 2R sin A = 2(3) sin 45° = 6 × √2/2 = 3√2)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການນຳໃຊ້ຫຼັກເກນຊີນ ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ໄຂບັນຫາເລຂາຄະນິດ ແລະ ວັດແທກໄລຍະທາງໃນຊີວິດຈິງໄດ້ຢ່າງງ່າຍດາຍ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
