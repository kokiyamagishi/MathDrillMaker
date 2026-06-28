import React from "react";
import { UnitData } from "../units2";

export const unit16Data: UnitData = {
  unitNumber: 16,
  unitTitle: "ພາກທີ II - ບົດທີ 16: ການວັດແທກຄວາມຍາວ ແລະ ຄວາມຍາວອ້ອມຮອບ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຫຼັກການປຽບທຽບຈຳນວນຂີດໝາຍ ແລະ ຫວ່າງໄລຍະຫ່າງ (Intervals), ແລະ ການຄິດໄລ່ຄວາມຍາວອ້ອມຮອບຂອງຮູບຫຼາຍແຈ (Perimeter) ແລະ ວົງມົນ (Circumference)",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 116-122",
  subSections: [
    {
      title: "1. ຫຼັກການຈຳນວນຂີດໝາຍ ແລະ ຫວ່າງໄລຍະຫ່າງ (Interval Logic)",
      keyPoint: {
        title: "ຄວາມສຳພັນລະຫວ່າງຈຳນວນຈຸດ (ຂີດ) ແລະ ຫວ່າງໄລຍະຫ່າງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນການວາງວັດຖຸ ຫຼື ປູກຕົ້ນໄມ້ເປັນໄລຍະໆ, ເຮົາມີຫຼັກການຄິດໄລ່ດັ່ງນີ້:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ມີຂີດໝາຍຢູ່ທັງສອງສົ້ນ: "}</strong>{" ຈຳນວນຂີດ = ຈຳນວນຫວ່າງ + 1"}</li>
              <li><strong>{"ບໍ່ມີຂີດໝາຍຢູ່ທັງສອງສົ້ນ: "}</strong>{" ຈຳນວນຂີດ = ຈຳນວນຫວ່າງ - 1"}</li>
              <li><strong>{"ມີຂີດໝາຍຢູ່ສົ້ນດຽວ: "}</strong>{" ຈຳນວນຂີດ = ຈຳນວນຫວ່າງ"}</li>
              <li><strong>{"ເປັນເສັ້ນວົງມົນປິດ: "}</strong>{" ຈຳນວນຂີດ = ຈຳນວນຫວ່າງ"}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"ຕົວຢ່າງໂຈດປູກຕົ້ນໄມ້:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ປູກຕົ້ນໄມ້ຕາມແຄມທາງຍາວ 2 km (2,000 m) ໂດຍໃຫ້ແຕ່ລະຕົ້ນຫ່າງກັນ 5 m. ຖ້າສົ້ນທາງທັງສອງເບື້ອງບໍ່ປູກຕົ້ນໄມ້ເລີຍ, ເຮົາຈະປູກໄດ້ທັງໝົດຈັກຕົ້ນ?"}
                <br />
                <strong>{"ວິທີຄິດ:"}</strong>{" ຈຳນວນຫວ່າງ = 2,000 / 5 = 400 ຫວ່າງ. ຍ້ອນສົ້ນທັງສອງບໍ່ປູກຕົ້ນໄມ້, ຈຳນວນຕົ້ນໄມ້ = 400 - 1 = 399 ຕົ້ນ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝັ່ນສັງເກດເງື່ອນໄຂຂອງສົ້ນທາງໃຫ້ດີວ່າ 'ປູກ' ຫຼື 'ບໍ່ປູກ' ເພື່ອບວກ ຫຼື ລົບ 1 ໃຫ້ຖືກຕ້ອງ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຕ້ອງການປັກເສົາຮົ້ວອ້ອມຮອບສວນຫຼັງບ້ານຕາມແນວຊື່ຍາວ 120 m ໂດຍໃຫ້ແຕ່ລະເສົາຫ່າງກັນ 4 m. ຖ້າປັກເສົາຢູ່ສົ້ນທາງທັງສອງເບື້ອງນຳ, ຈະຕ້ອງໃຊ້ເສົາທັງໝົດຈັກຕົ້ນ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ຈຳນວນເສົາ ="}</span>
                  <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ຕົ້ນ"}</span>
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
                {"ແຄມທາງຍາວ 300 m ຕ້ອງການຕັ້ງໂຄມໄຟຫ່າງກັນ 10 m ຕໍ່ດອກ. ຖ້າບໍ່ຕັ້ງໂຄມໄຟຢູ່ສົ້ນທາງທັງສອງເບື້ອງເລີຍ, ຈະຕ້ອງໃຊ້ໂຄມໄຟທັງໝົດຈັກດອກ? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: ຈຳນວນໂຄມໄຟ ="}</span>
                  <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"ດອກ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ຄວາມຍາວອ້ອມຮອບ (Perimeter and Circumference)",
      keyPoint: {
        title: "ສູດການຫາຄວາມຍາວອ້ອມຮອບ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາມີວິທີການຄິດໄລ່ຄວາມຍາວອ້ອມຮອບສອງແບບຫຼັກ:"}
            </p>
            <ul style={{ fontSize: "1.30rem", margin: 0, paddingLeft: "24px", lineHeight: "1.6" }}>
              <li><strong>{"ຮູບຫຼາຍແຈ: "}</strong>{" ເອົາຄວາມຍາວຂອງທຸກໆຂ້າງມາບວກກັນ."}</li>
              <li><strong>{"ວົງມົນ: "}</strong>{" ຄວາມຍາວອ້ອມຮອບ L = 2 × π × r  ຫຼື  L = π × d (ເຊິ່ງ r ແມ່ນລັດສະໝີ, d ແມ່ນເສັ້ນຜ່ານໃຈກາງ, ແລະ π ≈ 3.14)."}</li>
            </ul>

            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" }}>{"ຕົວຢ່າງການຄິດໄລ່ວົງມົນ:"}</span>
              <ul style={{ fontSize: "1.20rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>{"ວົງມົນມີລັດສະໝີ r = 10 cm ⇒ L = 2 × 3.14 × 10 = 62.8 cm."}</li>
                <li>{"ວົງມົນມີເສັ້ນຜ່ານໃຈກາງ d = 20 cm ⇒ L = 3.14 × 20 = 62.8 cm."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຄ່າຂອງ π (ປີ) ແມ່ນປະມານ 3.14 ສະເໝີເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄວາມຍາວອ້ອມຮອບຂອງຮູບສີ່ແຈທີ່ມີຄວາມຍາວຂ້າງແມ່ນ AB = 5 cm, BC = 11 cm, CD = 10.5 cm ແລະ AD = 21 cm? "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: L ="}</span>
                  <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"cm"}</span>
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວອ້ອມຮອບຂອງແຜ່ນມົນທີ່ມີລັດສະໝີ r = 5 cm? (ກຳນົດໃຫ້ π = 3.14) "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"ປະໂຫຍກສັນຍະລັກ: L ="}</span>
                  <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"= "}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span>{"cm"}</span>
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
              {"ໂຈດການປູກຕົ້ນໄມ້ອ້ອມຮອບສະໜາມມົນ (Closed Loop): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ສະໜາມຮູບວົງມົນແຫ່ງໜຶ່ງມີເສັ້ນຜ່ານສູນກາງ d = 100 m. ຕ້ອງການປູກຕົ້ນໄມ້ອ້ອມຮອບສະໜາມ ໂດຍໃຫ້ແຕ່ລະຕົ້ນຫ່າງກັນ 3.14 m ຕາມແນວເສັ້ນອ້ອມ. ຖາມວ່າຈະຕ້ອງປູກຕົ້ນໄມ້ທັງໝົດຈັກຕົ້ນ? (ກຳນົດ π = 3.14)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຕ້ອງປູກຕົ້ນໄມ້ທັງໝົດ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"ຕົ້ນ."}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຫາເສັ້ນຜ່ານໃຈກາງຈາກຄວາມຍາວອ້ອມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ລໍ້ລົດຖີບຄັນໜຶ່ງມີຄວາມຍາວອ້ອມຮອບວົງລໍ້ແມ່ນ 188.4 cm. ຈົ່ງຊອກຫາເສັ້ນຜ່ານໃຈກາງ (d) ຂອງລໍ້ລົດຖີບຄັນນີ້ມີຈັກ cm? (ກຳນົດ π = 3.14)"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເສັ້ນຜ່ານໃຈກາງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"cm."}</span>
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
            {"ໂຈດຄິດໄລ່ຄວາມຍາວອ້ອມຮອບຮູບປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຮູບຈະຕຸລັດໜຶ່ງມີຂ້າງຍາວ 10 cm. ເຮົາສ້າງຮູບເຄິ່ງວົງມົນແປກໃສ່ແຕ່ລະຂ້າງຂອງຮູບຈະຕຸລັດ (ດ້ານນອກ). ຈົ່ງຊອກຫາຄວາມຍາວອ້ອມຮອບຂອງຮູບປະສົມທີ່ໄດ້? (ກຳນົດ π = 3.14)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມຍາວອ້ອມຮອບແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"cm."}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ໂຈດການພົວພັນຄວາມຍາວອ້ອມຮອບສອງວົງມົນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ວົງມົນ A ມີລັດສະໝີເປັນ 3 ເທື່ອຂອງວົງມົນ B. ຖ້າວົງມົນ B ມີຄວາມຍາວອ້ອມຮອບແມ່ນ 20 cm, ວົງມົນ A ຈະມີຄວາມຍາວອ້ອມຮອບຈັກ cm?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຄວາມຍາວອ້ອມຮອບຂອງວົງມົນ A ແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm."}</span>
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
          <span key="1-1">{"120 / 4 + 1"}</span>,
          <span key="1-2">{"31"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"300 / 10 - 1"}</span>,
          <span key="2-2">{"29"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"5 + 11 + 10.5 + 21"}</span>,
          <span key="3-2">{"47.5"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"2 × 3.14 × 5"}</span>,
          <span key="4-2">{"31.4"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"100 (ຄິດໄລ່: 3.14 × 100 / 3.14 = 100 ຕົ້ນ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2">{"60 (ຄິດໄລ່: 188.4 / 3.14 = 60 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"62.8 (ຮູບປະສົມປະກອບມີ 4 ເຄິ່ງວົງມົນ ເຊິ່ງເທົ່າກັບ 2 ວົງມົນເຕັມທີ່ມີ d = 10; ດັ່ງນັ້ນ L = 2 × 3.14 × 10 = 62.8 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"60 (ຍ້ອນວ່າລັດສະໝີເປັນ 3 ເທື່ອ, ຄວາມຍາວອ້ອມຮອບກໍເປັນ 3 ເທື່ອສະເໝີ: 20 × 3 = 60 cm)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ຫຼັກການຫາຄວາມຍາວອ້ອມຮອບ ແລະ ຫວ່າງໄລຍະຫ່າງ ເປັນຄວາມຮູ້ທີ່ມີປະໂຫຍດ ແລະ ນຳໃຊ້ເລື້ອຍໆໃນຊີວິດຈິງ. ສູ້ຕໍ່ໄປເດີ້!"
  }
};
