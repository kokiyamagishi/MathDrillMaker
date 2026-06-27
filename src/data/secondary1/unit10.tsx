import React from "react";
import { UnitData } from "../units2";

export const unit10Data: UnitData = {
  unitNumber: 10,
  unitTitle: "ພາກທີ I - ບົດທີ 10: ສຳນວນເລກຄະນິດ (Arithmetic Expressions)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບລຳດັບການຄິດໄລ່ເລກຄະນິດ (Order of Operations), ການນຳໃຊ້ວົງເລັບ, ວົງຂໍ, ວົງປີກກາ, ແລະ ການຄິດໄລ່ສຳນວນທີ່ມີຫຼາຍເຄື່ອງໝາຍຢ່າງຖືກຕ້ອງ.",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 73-76",
  subSections: [
    {
      title: "1. ລຳດັບການຄິດໄລ່ທີ່ບໍ່ມີວົງເລັບ (Order of Operations without Parentheses)",
      keyPoint: {
        title: "ຫຼັກການຄຳນວນແບບບໍ່ມີວົງເລັບ (Rules without Parentheses)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນການຄິດໄລ່ສຳນວນເລກຄະນິດທີ່ບໍ່ມີວົງເລັບ, ເຮົາຕ້ອງປະຕິບັດຕາມລຳດັບຄວາມສຳຄັນຂອງເຄື່ອງໝາຍດັ່ງນີ້:"}
            </p>

            <div style={{ padding: "20px", backgroundColor: "#EDE7F6", borderRadius: "12px", border: "1px solid #B39DDB" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#5E35B1", fontWeight: "bold" }}>
                {"📌 ລຳດັບການຄິດໄລ່:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.7" }}>
                <strong>{"ຂັ້ນທີ 1:"}</strong>{" ຄິດໄລ່ການຄູນ ແລະ ການຫານ ແຕ່ຊ້າຍຫາຂວາ."}
                <br />
                <strong>{"ຂັ້ນທີ 2:"}</strong>{" ຄິດໄລ່ການບວກ ແລະ ການລົບ ແຕ່ຊ້າຍຫາຂວາ."}
              </p>
            </div>

            <div style={{ padding: "20px", backgroundColor: "#FFF9C4", borderRadius: "12px", border: "1px solid #FFF59D" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#F57F17", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຄິດໄລ່:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.6" }}>
                <strong>{"ຕົວຢ່າງ 1: "}</strong>{" 12 - 3 × 2"}
                <br />
                {"• ຄູນກ່ອນ: 3 × 2 = 6"}
                <br />
                {"• ລົບຕາມຫຼັງ: 12 - 6 = "}<strong>{"6"}</strong>
                <br />
                <br />
                <strong>{"ຕົວຢ່າງ 2: "}</strong>{" 15 ÷ 3 + 4 × 2"}
                <br />
                {"• ຫານ ແລະ ຄູນກ່ອນ: 15 ÷ 3 = 5 ແລະ 4 × 2 = 8"}
                <br />
                {"• ບວກຕາມຫຼັງ: 5 + 8 = "}<strong>{"13"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂໍ້ຄວນລະວັງ: ຫ້າມຄິດໄລ່ແຕ່ຊ້າຍຫາຂວາໂດຍບໍ່ສົນໃຈເຄື່ອງໝາຍເດັດຂາດ! ຕ້ອງເຮັດຄູນກັບຫານກ່ອນບວກກັບລົບສະເໝີ.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສຳນວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"18 - 4 × 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"10 + 20 ÷ 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"6 × 3 - 8 ÷ 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"25 - 5 × 4 + 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄິດໄລ່ທີ່ມີວົງເລັບ (Arithmetic with Parentheses)",
      keyPoint: {
        title: "ການນຳໃຊ້ວົງເລັບ ( )",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.5" }}>
              {"ເມື່ອສຳນວນມີເຄື່ອງໝາຍວົງເລັບ "}<strong>{"( )"}</strong>{", ພວກເຮົາຕ້ອງຄິດໄລ່ເລກທີ່ຢູ່ໃນວົງເລັບກ່ອນສະເໝີ, ບໍ່ວ່າເຄື່ອງໝາຍຈະເປັນໃດກໍຕາມ."}
            </p>

            <div style={{ padding: "12px 16px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px solid #C8E6C9" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#2E7D32", fontWeight: "bold" }}>
                {"📌 ຫຼັກການຄິດໄລ່:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                {"ຄິດໄລ່ຄ່າໃນວົງເລັບໃຫ້ສຳເລັດກ່ອນ, ແລ້ວຈຶ່ງດຳເນີນການນອກວົງເລັບຕາມລຳດັບ (ຄູນ/ຫານ ກ່ອນ ບວກ/ລົບ)."}
              </p>
            </div>

            <div style={{ padding: "12px 16px", backgroundColor: "#E1F5FE", borderRadius: "12px", border: "1px solid #B3E5FC" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#0277BD", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຄິດໄລ່:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                <strong>{"ຕົວຢ່າງ 1: "}</strong>{" 2 × (3 - 5) = 2 × (-2) = "}<strong>{"-4"}</strong>
                <br />
                <strong>{"ຕົວຢ່າງ 2: "}</strong>{" (5 × 3 - 4) × 2 = (15 - 4) × 2 = 11 × 2 = "}<strong>{"22"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໝາຍເຫດ: ຜົນລັບໃນວົງເລັບສາມາດເປັນຈຳນວນລົບໄດ້, ຕ້ອງລະວັງເຄື່ອງໝາຍເວລາຄູນ ຫຼື ຫານຕໍ່.",
          isBlue: false
        }
      },
      problems: [
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສຳນວນທີ່ມີວົງເລັບຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"4 × (9 - 6) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"3 × (2 - 7) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"(4 × 6 - 8) ÷ 4 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"(12 - 3 × 5) × (-2) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "3. ການຄິດໄລ່ທີ່ມີວົງຂໍ ແລະ ວົງປີກກາ (Brackets and Braces)",
      keyPoint: {
        title: "ຫຼັກການແກ້ເລກຈາກທາງໃນຫາທາງນອກ (Inside Out Rule)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.5" }}>
              {"ເມື່ອສຳນວນມີເຄື່ອງໝາຍວົງເລັບຫຼາຍຊັ້ນ, ເຮົາຕ້ອງຄິດໄລ່ຈາກທາງໃນຫາທາງນອກຕາມລຳດັບດັ່ງນີ້:"}
            </p>

            <div style={{ padding: "12px 16px", backgroundColor: "#F3E5F5", borderRadius: "12px", border: "1px solid #E1BEE7" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#4A148C", fontWeight: "bold" }}>
                {"🔄 ລຳດັບການຖອດເຄື່ອງໝາຍວົງເລັບ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                {"1. ໃນ "}<strong>{"ວົງເລັບ ( )"}</strong>{" ກ່ອນ ➔ 2. ໃນ "}<strong>{"ວົງຂໍ [ ]"}</strong>{" ➔ 3. ໃນ "}<strong>{"ວົງປີກກາ { }"}</strong>{" ສຸດທ້າຍ."}
              </p>
            </div>

            <div style={{ padding: "12px 16px", backgroundColor: "#F5F5F5", borderRadius: "12px", border: "1px solid #E0E0E0" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 6px 0", color: "#424242", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຄິດໄລ່ຂັ້ນຕອນລະອຽດ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                <strong>{"ຕົວຢ່າງ: "}</strong>{" [2 - 5 × (3 - 2)] - (5 - 1)"}
                <br />
                {"• ຂັ້ນຕອນ 1 (ຄຳນວນໃນວົງເລັບ): [2 - 5 × 1] - 4"}
                <br />
                {"• ຂັ້ນຕອນ 2 (ຄຳນວນໃນວົງຂໍ): -3 - 4"}
                <br />
                {"• ຂັ້ນຕອນ 3 (ຄຳນວນຜົນລັບສຸດທ້າຍ): "}<strong>{"-7"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເຄັດລັບ: ຂຽນແຕ່ລະຂັ້ນຕອນອອກມາເທື່ອລະໜ້ອຍ ຈະຊ່ວຍບໍ່ໃຫ້ຫຼົງເຄື່ອງໝາຍ ແລະ ໄລ່ເລກບໍ່ຜິດພາດ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ສຳນວນທີ່ມີວົງຂໍຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 1.25 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"15 - [3 × (8 - 6)] ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"[4 + 2 × (5 - 2)] × 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math">{"[10 - 4 × (1 - 3)] - 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math">{"30 ÷ [12 - (2 + 2 × 2)] ="}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ທົດສອບຄວາມສາມາດໃນການແກ້ໄຂສຳນວນທີ່ຊັບຊ້ອນ ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄິດໄລ່ສຳນວນຊ້ອນຫຼາຍຊັ້ນ (Complex Expression): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}<strong>{"10 - [ 3 × (2 - 5) + 4 ]"}</strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຜົນລັບແມ່ນ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການຊື້ເຄື່ອງ (Word Problem): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ສົມພອນ ມີເງິນ "}<strong>{"50,000 ກີບ"}</strong>{". ລາວຊື້ປຶ້ມຂຽນ 3 ຫົວ ລາຄາຫົວລະ "}<strong>{"8,000 ກີບ"}</strong>{" ແລະ ບິກ 2 ກ້ານ ລາຄາກ້ານລະ "}<strong>{"5,000 ກີບ"}</strong>{"."}
              <br />
              {"ປະໂຫຍກສັນຍາລັກເພື່ອຊອກຫາເງິນທີ່ເຫຼືອແມ່ນ: "}<strong>{"50,000 - (3 × 8,000 + 2 × 5,000)"}</strong>{". ຈົ່ງຄິດໄລ່ວ່າທ້າວ ສົມພອນ ຈະເຫຼືອເງິນທັງໝົດຈັກກີບ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ເງິນທີ່ເຫຼືອແມ່ນ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
              <span>{"ກີບ"}</span>
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
            {"ຄິດໄລ່ສຳນວນປະສົມເລກບວກ, ລົບ, ຄູນ, ຫານ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຜົນຮັບຂອງ: "}<strong>{"5 × (4 - 7) - [ 8 ÷ (-2) ]"}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຜົນຮັບແມ່ນ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ສຳນວນທີ່ມີທັງວົງເລັບ ແລະ ວົງຂໍ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຜົນຮັບຂອງ: "}<strong>{"12 - [ 2 × (5 - 3) + 6 ÷ 3 ]"}</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຜົນຮັບແມ່ນ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 6 (18 - 4 × 3 = 18 - 12 = 6)"}</span>,
          <span key="1-2">{"(2) 14 (10 + 20 ÷ 5 = 10 + 4 = 14)"}</span>,
          <span key="1-3">{"(3) 14 (6 × 3 - 8 ÷ 2 = 18 - 4 = 14)"}</span>,
          <span key="1-4">{"(4) 8 (25 - 5 × 4 + 3 = 25 - 20 + 3 = 5 + 3 = 8)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 12 (4 × (9 - 6) = 4 × 3 = 12)"}</span>,
          <span key="2-2">{"(2) -15 (3 × (2 - 7) = 3 × (-5) = -15)"}</span>,
          <span key="2-3">{"(3) 4 ((4 × 6 - 8) ÷ 4 = (24 - 8) ÷ 4 = 16 ÷ 4 = 4)"}</span>,
          <span key="2-4">{"(4) 6 ((12 - 3 × 5) × (-2) = (12 - 15) × (-2) = -3 × (-2) = 6)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 9 (15 - [3 × (8 - 6)] = 15 - [3 × 2] = 15 - 6 = 9)"}</span>,
          <span key="3-2">{"(2) 20 ([4 + 2 × (5 - 2)] × 2 = [4 + 2 × 3] × 2 = [4 + 6] × 2 = 10 × 2 = 20)"}</span>,
          <span key="3-3">{"(3) 13 ([10 - 4 × (1 - 3)] - 5 = [10 - 4 × (-2)] - 5 = [10 + 8] - 5 = 18 - 5 = 13)"}</span>,
          <span key="3-4">{"(4) 5 (30 ÷ [12 - (2 + 2 × 2)] = 30 ÷ [12 - (2 + 4)] = 30 ÷ [12 - 6] = 30 ÷ 6 = 5)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"15 (10 - [ 3 × (2 - 5) + 4 ] = 10 - [ 3 × (-3) + 4 ] = 10 - [ -9 + 4 ] = 10 - [ -5 ] = 10 + 5 = 15)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"16,000 (50,000 - (3 × 8,000 + 2 × 5,000) = 50,000 - (24,000 + 10,000) = 50,000 - 34,000 = 16,000 ກີບ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"-11 (5 × (4 - 7) - [ 8 ÷ (-2) ] = 5 × (-3) - (-4) = -15 + 4 = -11)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"6 (12 - [ 2 × (5 - 3) + 6 ÷ 3 ] = 12 - [ 2 × 2 + 2 ] = 12 - [ 4 + 2 ] = 12 - 6 = 6)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການຄິດໄລ່ສຳນວນເລກຄະນິດທີ່ມີຫຼາຍເຄື່ອງໝາຍ ຕ້ອງອາໄສຄວາມລະອຽດອ່ອນ ແລະ ມີສະມາທິສູງ. ຫຼັກການ PEMDAS (ວົງເລັບ -> ຄູນ/ຫານ -> ບວກ/ລົບ) ແມ່ນກະແຈຫຼັກທີ່ຈະຊ່ວຍໃຫ້ເຈົ້າແກ້ເລກໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ. ໝັ່ນຝຶກຝົນເລື້ອຍໆເດີ້!"
  }
};
