import React from "react";
import { UnitData } from "../units2";

export const unit9Data: UnitData = {
  unitNumber: 9,
  unitTitle: "ພາກທີ I - ບົດທີ 9: ຄ່າສຳບູນ ແລະ ໄລຍະຫ່າງ (Absolute Value and Distance)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນເທິງເສັ້ນຊື່, ນິຍາມຂອງຄ່າສຳບູນ (Absolute Value) ຂອງໜຶ່ງຈຳນວນ, ແລະ ການຄິດໄລ່ກ່ຽວກັບຄ່າສຳບູນ.",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 65-68",
  subSections: [
    {
      title: "1. ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນເທິງເສັ້ນຊື່ (Distance on a Number Line)",
      keyPoint: {
        title: "ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ (Distance between two numbers)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "1.35rem", margin: 0, lineHeight: "1.4" }}>
              {"ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນ "}<strong>{"a"}</strong>{" ແລະ "}<strong>{"b"}</strong>{" ແມ່ນໄລຍະທາງລະຫວ່າງສອງຈຸດນັ້ນ, ມີຄ່າເປັນບວກ ຫຼື ສູນສະເໝີ. ສັນຍາລັກ: "}<strong>{"Distance(a, b) = |a - b|"}</strong>{"."}
            </p>

            <div style={{ padding: "8px 12px", backgroundColor: "#F0F4C3", borderRadius: "12px", border: "1px solid #C0CA33" }}>
              <h4 style={{ fontSize: "1.25rem", margin: "0 0 4px 0", color: "#827717", fontWeight: "bold" }}>
                {"📐 ວິທີການຄິດໄລ່ງ່າຍໆ:"}
              </h4>
              <p style={{ fontSize: "1.2rem", margin: 0, lineHeight: "1.4" }}>
                {"• ຖ້າ "}<strong>{"a ≥ b"}</strong>{", ໄລຍະຫ່າງແມ່ນ: "}<strong>{"a - b"}</strong>{" (ໃຫຍ່ ລົບ ນ້ອຍ)"}
                <br />
                {"• ຖ້າ "}<strong>{"a {" < "} b"}</strong>{", ໄລຍະຫ່າງແມ່ນ: "}<strong>{"b - a"}</strong>
              </p>
            </div>

            <div style={{ padding: "8px 12px", backgroundColor: "#E8EAF6", borderRadius: "12px", border: "1px solid #C5CAE9" }}>
              <h4 style={{ fontSize: "1.25rem", margin: "0 0 4px 0", color: "#1A237E", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຄິດໄລ່ໄລຍະຫ່າງ:"}
              </h4>
              <p style={{ fontSize: "1.2rem", margin: 0, lineHeight: "1.4" }}>
                <strong>{"1) ລະຫວ່າງ 5 ແລະ 2:"}</strong>{" ເນື່ອງຈາກ 5 > 2, ຈະໄດ້: 5 - 2 = "}<strong>{"3"}</strong>
                <br />
                <strong>{"2) ລະຫວ່າງ -3 ແລະ 4:"}</strong>{" ເນື່ອງຈາກ 4 > -3, ຈະໄດ້: 4 - (-3) = 4 + 3 = "}<strong>{"7"}</strong>
                <br />
                <strong>{"3) ລະຫວ່າງ -8 ແລະ -2:"}</strong>{" ເນື່ອງຈາກ -2 > -8, ຈະໄດ້: -2 - (-8) = -2 + 8 = "}<strong>{"6"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນບໍ່ມີທາງເປັນຄ່າລົບເດັດຂາດ! ຖ້າຄິດໄລ່ອອກມາເປັນຄ່າລົບ ສະແດງວ່າຜິດເດີ້.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນທີ່ກຳນົດໃຫ້ຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span>{"ລະຫວ່າງ 8 ແລະ 3 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span>{"ລະຫວ່າງ -5 ແລະ 2 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span>{"ລະຫວ່າງ -9 ແລະ -4 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span>{"ລະຫວ່າງ 0 ແລະ -6 ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ນິຍາມຂອງຄ່າສຳບູນ (Definition of Absolute Value)",
      keyPoint: {
        title: "ຄ່າສຳບູນແມ່ນຫຍັງ? (What is Absolute Value?)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.5" }}>
              {"ຄ່າສຳບູນຂອງ "}<strong>{"a"}</strong>{" (ຂຽນແທນດ້ວຍ "}<strong>{"|a|"}</strong>{") ແມ່ນໄລຍະຫ່າງຈາກຈຸດທີ່ສະແດງຈຳນວນ "}<strong>{"a"}</strong>{" ຫາຈຸດສູນ (0) ເທິງເສັ້ນຊື່."}
            </p>

            <div style={{ padding: "12px 16px", backgroundColor: "#E0F2F1", borderRadius: "12px", border: "1px solid #4DB6AC" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#00796B", fontWeight: "bold" }}>
                {"📌 ນິຍາມທາງຄະນິດສາດ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                {"• ຖ້າ "}<strong>{"a ≥ 0"}</strong>{" ຈະໄດ້: "}<strong>{"|a| = a"}</strong>{" (ຄ່າສຳບູນຂອງຈຳນວນບວກ/ສູນ ເທົ່າກັບຕົວມັນເອງ)"}
                <br />
                {"• ຖ້າ "}<strong>{"a {" < "} 0"}</strong>{" ຈະໄດ້: "}<strong>{"|a| = -a"}</strong>{" (ຄ່າສຳບູນຂອງຈຳນວນລົບ ຈະປ່ຽນເປັນຈຳນວນກົງກັນຂ້າມ)"}
              </p>
            </div>

            <div style={{ padding: "12px 16px", backgroundColor: "#FFF3E0", borderRadius: "12px", border: "1px solid #FFB74D" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#E65100", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງຄ່າສຳບູນ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                {"• "}<strong>{"|7| = 7"}</strong>{" (ໄລຍະຫ່າງຈາກ 7 ຫາ 0)"}
                <br />
                {"• "}<strong>{"|-10| = 10"}</strong>{" (ໄລຍະຫ່າງຈາກ -10 ຫາ 0)"}
                <br />
                {"• "}<strong>{"|0| = 0"}</strong>{" (ໄລຍະຫ່າງຈາກ 0 ຫາ 0)"}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງຈື່ສະເໝີວ່າ ຄ່າສຳບູນຂອງຈຳນວນໃດໜຶ່ງຈະອອກມາເປັນຄ່າບວກ (Positive Value) ຫຼື ສູນສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາຄ່າສຳບູນຂອງຈຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math">{"|-15| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math">{"|24| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math">{"|-1.5| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math">{"|-2026| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "3. ການຄິດໄລ່ກ່ຽວກັບຄ່າສຳບູນ (Absolute Value Arithmetic)",
      keyPoint: {
        title: "ຫຼັກການຄິດໄລ່ຄ່າສຳບູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນການຄິດໄລ່ເລກທີ່ມີເຄື່ອງໝາຍຄ່າສຳບູນ, ເຮົາຕ້ອງຄິດໄລ່ ແລະ ຖອດຄ່າສຳບູນອອກມາກ່ອນ, ແລ້ວຈຶ່ງດຳເນີນການຄິດໄລ່ຕາມຫຼັກການຄຳນວນເລກທຳມະດາ."}
            </p>

            <div style={{ padding: "20px", backgroundColor: "#F3E5F5", borderRadius: "12px", border: "1px solid #E1BEE7" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#4A148C", fontWeight: "bold" }}>
                {"📝 ຕົວຢ່າງການຄຳນວນ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.6" }}>
                {"• "}<strong>{"|-7| + 2"}</strong>{" = 7 + 2 = "}<strong>{"9"}</strong>
                <br />
                {"• "}<strong>{"|8| - |-6|"}</strong>{" = 8 - 6 = "}<strong>{"2"}</strong>
                <br />
                {"• "}<strong>{"|4| × |3| + 5"}</strong>{" = 4 × 3 + 5 = 12 + 5 = "}<strong>{"17"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝາຍເຫດ: ໃຫ້ຖອດຄ່າສຳບູນແຕ່ລະຕົວອອກມາກ່ອນ ແລ້ວຈຶ່ງເອົາມາ ບວກ, ລົບ, ຄູນ, ຫຼື ຫານ ກັນເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຜົນລັບຂອງການສະແດງຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(1) "}</span>
                  <span className="math">{"|-12| + 8 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(2) "}</span>
                  <span className="math">{"|15| - |-9| ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(3) "}</span>
                  <span className="math">{"|-6| × |4| - 7 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" , whiteSpace: "nowrap"}}>{"(4) "}</span>
                  <span className="math">{"|-25| ÷ |5| + 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄວາມເຂົ້າໃຈກ່ຽວກັບຄ່າສຳບູນ ແລະ ໄລຍະຫ່າງເພື່ອແກ້ໄຂບັນຫາຕົວຈິງ ແລະ ຄະນິດສາດລະດັບສູງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ຄວາມຕ່າງຂອງອຸນຫະພູມ (Temperature Difference): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຢູ່ເມືອງໜຶ່ງໃນລະດູໜາວ, ອຸນຫະພູມຕໍ່າສຸດແມ່ນ "}<strong>{"-8 °C"}</strong>{" ແລະ ອຸນຫະພູມສູງສຸດແມ່ນ "}<strong>{"12 °C"}</strong>{"."}
              {" ຈົ່ງຄິດໄລ່ໄລຍະຫ່າງລະຫວ່າງສອງອຸນຫະພູມນີ້ (ຜົນຕ່າງອຸນຫະພູມໃນຮູບແບບຄ່າສຳບູນ |12 - (-8)|)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຄວາມຕ່າງອຸນຫະພູມແມ່ນ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"°C"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນຄ່າສຳບູນ (Simple Absolute Value Equation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຊອກຫາຄ່າຂອງ "}<strong>{"𝑥"}</strong>{" ທີ່ເປັນຈຳນວນບວກ (𝑥 {" > "} 0) ທີ່ເຮັດໃຫ້ສົມຜົນ "}<strong>{"|𝑥 - 3| = 5"}</strong>{" ເປັນຈິງ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຄ່າຂອງ 𝑥 ທີ່ເປັນຈຳນວນບວກແມ່ນ 𝑥 ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຄິດໄລ່ຄ່າສຳບູນແບບປະສົມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຜົນຮັບຂອງການຄິດໄລ່: "}<strong>{"|-18| - |-10| + 3"}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຜົນຮັບແມ່ນ ="}</span>
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
            {"ໄລຍະຫ່າງລະຫວ່າງສອງຈຳນວນລົບ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາໄລຍະຫ່າງລະຫວ່າງ "}<strong>{"-15"}</strong>{" ແລະ "}<strong>{"-3"}</strong>{" ເທິງເສັ້ນຊື່."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ໄລຍະຫ່າງແມ່ນ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    }
  ],
  answers: {
    items: [
      {
        questionNumber: "1 (ໜ້າ 57)",
        answers: [
          <span key="1-1">{"(1) 5 (8 - 3 = 5)"}</span>,
          <span key="1-2">{"(2) 7 (2 - (-5) = 2 + 5 = 7)"}</span>,
          <span key="1-3">{"(3) 5 (-4 - (-9) = -4 + 9 = 5)"}</span>,
          <span key="1-4">{"(4) 6 (0 - (-6) = 0 + 6 = 6)"}</span>
        ]
      },
      {
        questionNumber: "1 (ໜ້າ 59)",
        answers: [
          <span key="2-1">{"(1) 15 (ຄ່າສຳບູນຂອງ -15 ແມ່ນ 15)"}</span>,
          <span key="2-2">{"(2) 24 (ຄ່າສຳບູນຂອງ 24 ແມ່ນ 24)"}</span>,
          <span key="2-3">{"(3) 1.5 (ຄ່າສຳບູນຂອງ -1.5 ແມ່ນ 1.5)"}</span>,
          <span key="2-4">{"(4) 2026 (ຄ່າສຳບູນຂອງ -2026 ແມ່ນ 2026)"}</span>
        ]
      },
      {
        questionNumber: "1 (ໜ້າ 61)",
        answers: [
          <span key="3-1">{"(1) 20 (|-12| + 8 = 12 + 8 = 20)"}</span>,
          <span key="3-2">{"(2) 6 (|15| - |-9| = 15 - 9 = 6)"}</span>,
          <span key="3-3">{"(3) 17 (|-6| × |4| - 7 = 6 × 4 - 7 = 24 - 7 = 17)"}</span>,
          <span key="3-4">{"(4) 8 (|-25| ÷ |5| + 3 = 25 ÷ 5 + 3 = 5 + 3 = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"20 (ໄລຍະຫ່າງລະຫວ່າງ 12 ແລະ -8 ແມ່ນ |12 - (-8)| = |12 + 8| = 20)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"8 (ຖ້າ |𝑥 - 3| = 5, ຈະໄດ້ 𝑥 - 3 = 5 ຫຼື 𝑥 - 3 = -5. ສະນັ້ນ 𝑥 = 8 ຫຼື 𝑥 = -2. ເນື່ອງຈາກເພິ່ນກຳນົດໃຫ້ 𝑥 ເປັນຈຳນວນບວກ, ດັ່ງນັ້ນ 𝑥 = 8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"11 (|-18| - |-10| + 3 = 18 - 10 + 3 = 8 + 3 = 11)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"12 (ໄລຍະຫ່າງລະຫວ່າງ -15 ແລະ -3 ແມ່ນ |-3 - (-15)| = |-3 + 15| = |12| = 12)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ໄລຍະຫ່າງ ແລະ ຄ່າສຳບູນ (Absolute Value) ເປັນພື້ນຖານສຳຄັນຫຼາຍໃນການຮຽນເລກຂັ້ນສູງ ເຊັ່ນ: ສົມຜົນ ແລະ ອະສົມຜົນຄ່າສຳບູນ, ຟັງຊັນ, ແລະ ເລຂາຄະນິດວິເຄາະ. ຈົ່ງໝັ່ນຝຶກຝົນເລື້ອຍໆເດີ້!"
  }
};
