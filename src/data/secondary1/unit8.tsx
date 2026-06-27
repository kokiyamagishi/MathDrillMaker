import React from "react";
import { UnitData } from "../units2";

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ I - ບົດທີ 8: ຈຳນວນໃນພື້ນຖານຕ່າງໆ (Numbers in Different Bases)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບລະບົບຕົວເລກໃນພື້ນຖານຕ່າງໆ (ພື້ນຖານ 10, ພື້ນຖານ 2, ແລະ ພື້ນຖານ 5), ການປ່ຽນຈຳນວນຈາກພື້ນຖານ 2 ແລະ 5 ໄປເປັນພື້ນຖານ 10, ແລະ ການປ່ຽນຈາກພື້ນຖານ 10 ໄປເປັນພື້ນຖານອື່ນໆ.",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 56-61",
  subSections: [
    {
      title: "1. ຄວາມເຂົ້າໃຈກ່ຽວກັບພື້ນຖານຕ່າງໆ (Bases)",
      keyPoint: {
        title: "ລະບົບພື້ນຖານຕົວເລກ (Number Systems)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• "}<strong>{"ພື້ນຖານ 10 (Base 10)"}</strong>{" ແມ່ນລະບົບຕົວເລກທຳມະດາທີ່ເຮົາໃຊ້ໃນຊີວິດປະຈຳວັນ, ເຊິ່ງໃຊ້ 10 ຕົວເລກຄື: "}
              <strong style={{ color: "#2E7D32" }}>{"0, 1, 2, 3, 4, 5, 6, 7, 8, 9"}</strong>{"."}
              <br />
              {"• "}<strong>{"ພື້ນຖານ 2 (Base 2 / Binary)"}</strong>{" ແມ່ນລະບົບຕົວເລກທີ່ໃຊ້ໃນຄອມພິວເຕີ, ເຊິ່ງມີພຽງແຕ່ 2 ຕົວເລກຄື: "}
              <strong style={{ color: "#D84315" }}>{"0, 1"}</strong>{"."}
              <br />
              {"• "}<strong>{"ພື້ນຖານ 5 (Base 5)"}</strong>{" ແມ່ນລະບົບຕົວເລກທີ່ໃຊ້ 5 ຕົວເລກຄື: "}
              <strong style={{ color: "#1565C0" }}>{"0, 1, 2, 3, 4"}</strong>{"."}
            </p>

            <div style={{ padding: "20px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px solid #81C784" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#2E7D32", fontWeight: "bold" }}>
                {"💡 ຂໍ້ຄວນຈຳ:"}
              </h4>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                {"ໃນລະບົບພື້ນຖານໃດໜຶ່ງ, ຈະບໍ່ມີຕົວເລກທີ່ມີຄ່າເທົ່າກັບ ຫຼື ໃຫຍ່ກວ່າພື້ນຖານນັ້ນຢ່າງເດັດຂາດ! ຕົວຢ່າງ:"}
                <br />
                {"- ໃນພື້ນຖານ 2: ຕົວເລກສູງສຸດແມ່ນ 1. ຈະບໍ່ມີເລກ 2, 3, 4... (ຕົວຢ່າງ: 101₂ ຖືກຕ້ອງ, ແຕ່ 120₂ ບໍ່ຖືກຕ້ອງ)"}
                <br />
                {"- ໃນພື້ນຖານ 5: ຕົວເລກສູງສຸດແມ່ນ 4. ຈະບໍ່ມີເລກ 5, 6... (ຕົວຢ່າງ: 243₅ ຖືກຕ້ອງ, ແຕ່ 351₅ ບໍ່ຖືກຕ້ອງ)"}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຕົວຫຍໍ້ທາງລຸ່ມຕົວເລກ ຕົວຢ່າງ: 101₂ ໝາຍເຖິງ 101 ໃນພື້ນຖານ 2, ແລະ 24₃ ໝາຍເຖິງ 24 ໃນພື້ນຖານ 3.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງບອກວ່າຈຳນວນໃດລຸ່ມນີ້ທີ່ຂຽນໄດ້ຖືກຕ້ອງຕາມຫຼັກການຂອງພື້ນຖານທີ່ກຳນົດໃຫ້: (ຕອບ 'ຖືກ' ຫຼື 'ຜິດ') "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"1021₂"}</span>
                  <span>{"ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"4301₅"}</span>
                  <span>{"ແມ່ນ:"}</span>
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
                {"ຈົ່ງບອກວ່າຈຳນວນໃດລຸ່ມນີ້ທີ່ຂຽນໄດ້ຖືກຕ້ອງຕາມຫຼັກການຂອງພື້ນຖານທີ່ກຳນົດໃຫ້ (ຊຸດທີ 2): (ຕອບ 'ຖືກ' ຫຼື 'ຜິດ') "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"1010₂"}</span>
                  <span>{"ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"3540₅"}</span>
                  <span>{"ແມ່ນ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປ່ຽນຈາກພື້ນຖານອື່ນໄປເປັນພື້ນຖານ 10",
      keyPoint: {
        title: "ການກະຈາຍຕາມກຳລັງຂອງພື້ນຖານ (Expanding with Powers)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອປ່ຽນຈຳນວນໃນພື້ນຖານ "}<strong>{"a"}</strong>{" ໄປເປັນພື້ນຖານ 10, ເຮົາຈະຂຽນຈຳນວນນັ້ນໃນຮູບແບບການກະຈາຍຄູນກັບກຳລັງຂອງພື້ນຖານ "}<strong>{"a"}</strong>{" ໂດຍເລີ່ມແຕ່ຂວາຫາຊ້າຍ (ເລີ່ມແຕ່ກຳລັງ 0)."}
            </p>

            <div style={{ padding: "20px", backgroundColor: "#E0F7FA", borderRadius: "12px", border: "1px solid #4DD0E1" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#006064", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການປ່ຽນ:"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.25rem" }}>
                <div>
                  <strong style={{ color: "#E65100" }}>{"1) ປ່ຽນ 213₅ ໄປເປັນພື້ນຖານ 10:"}</strong>
                  <br />
                  {"213₅ = 2 × 5² + 1 × 5¹ + 3 × 5⁰"}
                  <br />
                  {"= (2 × 25) + (1 × 5) + (3 × 1)"}
                  <br />
                  {"= 50 + 5 + 3 = "}<strong>{"58"}</strong>
                </div>
                <div style={{ borderTop: "1px dashed #80DEEA", paddingTop: "8px", marginTop: "4px" }}>
                  <strong style={{ color: "#E65100" }}>{"2) ປ່ຽນ 1101₂ ໄປເປັນພື້ນຖານ 10:"}</strong>
                  <br />
                  {"1101₂ = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰"}
                  <br />
                  {"= (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1)"}
                  <br />
                  {"= 8 + 4 + 0 + 1 = "}<strong>{"13"}</strong>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ສະເໝີວ່າ ທຸກໆຈຳນວນຂຶ້ນກຳລັງ 0 ຈະເທົ່າກັບ 1 ສະເໝີ (ຕົວຢ່າງ: 2⁰ = 1, 5⁰ = 1).",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປ່ຽນຈຳນວນໃນພື້ນຖານ 2 ແລະ 5 ຕໍ່ໄປນີ້ໃຫ້ເປັນຈຳນວນໃນພື້ນຖານ 10 (ຈຳນວນທຳມະຊາດ): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"1011₂ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"104₅ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
                {"ຈົ່ງປ່ຽນຈຳນວນໃນພື້ນຖານ 2 ແລະ 5 ຕໍ່ໄປນີ້ໃຫ້ເປັນຈຳນວນໃນພື້ນຖານ 10 (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"1101₂ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"203₅ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "3. การປ່ຽນຈາກພື້ນຖານ 10 ໄປເປັນພື້ນຖານອື່ນ",
      keyPoint: {
        title: "ການຫານແບບເອີຄຼິດ (Successive Euclidean Division)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເພື່ອປ່ຽນຈຳນວນທຳມະຊາດ (ພື້ນຖານ 10) ໄປເປັນພື້ນຖານໃດໜຶ່ງ, ເຮົາຈະຫານຈຳນວນນັ້ນໃຫ້ກັບພື້ນຖານທີ່ຕ້ອງການຫານຕໍ່ກັນໄປເລື້ອຍໆ ຈົນກວ່າຜົນຫານຈະເທົ່າກັບ 0, ຈາກນັ້ນໃຫ້ຂຽນເອົາຕົວເສດເລີ່ມແຕ່ຕົວເສດສຸດທ້າຍຂຶ້ນມາຫາຕົວເສດທຳອິດ."}
            </p>

            {/* Division explanation box */}
            <div style={{ padding: "16px", backgroundColor: "#F3E5F5", borderRadius: "12px", border: "1px solid #BA68C8" }}>
              <strong style={{ fontSize: "1.3rem", color: "#4A148C", display: "block", marginBottom: "8px" }}>
                {"📊 ຕົວຢ່າງ: ປ່ຽນ 13 ໄປເປັນພື້ນຖານ 2"}
              </strong>
              <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.6" }}>
                {"- 13 ÷ 2 = 6 ເສດ 1 (ຕົວເສດທຳອິດ)"}
                <br />
                {"- 6 ÷ 2 = 3 ເສດ 0"}
                <br />
                {"- 3 ÷ 2 = 1 ເສດ 1"}
                <br />
                {"- 1 ÷ 2 = 0 ເສດ 1 (ຕົວເສດສຸດທ້າຍ)"}
                <br />
                {"ຂຽນຕົວເສດຍ້ອນກັບຈາກລຸ່ມຂຶ້ນເທິງ: "}<strong>{"1101"}</strong>
                <br />
                {"ດັ່ງນັ້ນ, 13 = "}<strong>{"1101₂"}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຂຽນຜົນລັບແມ່ນໃຫ້ຂຽນຈາກຕົວເສດສຸດທ້າຍ (ຢູ່ລຸ່ມສຸດ) ຫາ ຕົວເສດທຳອິດ (ຢູ່ເທິງສຸດ) ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 5,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປ່ຽນຈຳນວນພື້ນຖານ 10 ຕໍ່ໄປນີ້ໃຫ້ເປັນພື້ນຖານທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ປ່ຽນ 19 ໄປເປັນພື້ນຖານ 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                  <span style={{ fontSize: "1.1rem", color: "#7F8C8D" }}>{"(ຕົວຢ່າງການຕອບ: 10011)"}</span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ປ່ຽນ 38 ໄປເປັນພື້ນຖານ 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                  <span style={{ fontSize: "1.1rem", color: "#7F8C8D" }}>{"(ຕົວຢ່າງການຕອບ: 123)"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 6,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງປ່ຽນຈຳນວນພື້ນຖານ 10 ຕໍ່ໄປນີ້ໃຫ້ເປັນພື້ນຖານທີ່ກຳນົດໃຫ້ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ປ່ຽນ 23 ໄປເປັນພື້ນຖານ 2 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ປ່ຽນ 44 ໄປເປັນພື້ນຖານ 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ຄວາມຮູ້ເລື່ອງເລກພື້ນຖານເພື່ອແກ້ໄຂບັນຫາໃນລະບົບຄອມພິວເຕີ ແລະ ການຈັດກຸ່ມ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ລະບົບເກັບຂໍ້ມູນຂອງຄອມພິວເຕີ (Binary bits): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນລະບົບຄອມພິວເຕີ, ຂໍ້ມູນ 1 ຕົວອັກສອນອາດຈະຖືກເກັບເປັນລະຫັດເລກພື້ນຖານ 2 ຂະໜາດ 8 ບິດ (8 bits). ຖ້າຄອມພິວເຕີສົ່ງລະຫັດ "}<strong>{"00100101₂"}</strong>{" ມາໃຫ້, ຈົ່ງແປງລະຫັດນີ້ໃຫ້ເປັນເລກພື້ນຖານ 10 ເພື່ອຮູ້ຄ່າຕົວຈິງຂອງມັນ."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຄ່າໃນພື້ນຖານ 10 ແມ່ນ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 3,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຈັດກຸ່ມໝາກກ້ຽງ (Grouping in Base 5): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຊາວສວນຄົນໜຶ່ງຕ້ອງການຈັດກຸ່ມໝາກກ້ຽງ 43 ໜ່ວຍ ໂດຍໃຊ້ກຸ່ມພື້ນຖານ 5 (ໝາຍຄວາມວ່າ ທຸກໆ 5 ໜ່ວຍຈະມັດເປັນ 1 ຖົງນ້ອຍ, ແລະ ທຸກໆ 5 ຖົງນ້ອຍຈະໃສ່ເປັນ 1 ກ່ອງໃຫຍ່). ຖ້າຂຽນຈຳນວນໝາກກ້ຽງ 43 ໜ່ວຍນີ້ເປັນເລກພື້ນຖານ 5 ຈະໄດ້ເທົ່າໃດ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ໝາກກ້ຽງ 43 ໜ່ວຍ ຂຽນເປັນເລກພື້ນຖານ 5 ໄດ້ ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
              <span>{"₅"}</span>
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
            {"ການປ່ຽນຈາກພື້ນຖານ 2 ໄປເປັນພື້ນຖານ 10: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າໃນພື້ນຖານ 10 ຂອງ "}<strong>{"11110₂"}</strong>{"."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"11110₂ ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 3,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການປ່ຽນຈາກພື້ນຖານ 10 ໄປເປັນພື້ນຖານ 5: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງປ່ຽນຈຳນວນ "}<strong>{"74"}</strong>{" ໃນພື້ນຖານ 10 ໄປເປັນພື້ນຖານ 5."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"74 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
            <span>{"₅"}</span>
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
          <span key="1-1">{"(1) ຜິດ (ເພາະວ່າໃນພື້ນຖານ 2 ຈະມີພຽງແຕ່ຕົວເລກ 0 ແລະ 1 ເທົ່ານັ້ນ, ບໍ່ສາມາດມີເລກ 2 ໄດ້)"}</span>,
          <span key="1-2">{"(2) ຖືກ (ເພາະວ່າຕົວເລກທັງໝົດໃນ 4301₅ ແມ່ນ 0, 1, 3, 4 ເຊິ່ງລ້ວນແຕ່ໜ້ອຍກວ່າ 5 ຢ່າງຖືກຕ້ອງ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u8-ans-2-1">{"(1) ຖືກ (ເພາະມີແຕ່ເລກ 0, 1)"}</span>,
          <span key="u8-ans-2-2">{"(2) ຜິດ (ເພາະມີເລກ 5 ປາກົດໃນພື້ນຖານ 5)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="2-1">{"(1) 11 (1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11)"}</span>,
          <span key="2-2">{"(2) 29 (104₅ = 1×5² + 0×5¹ + 4×5⁰ = 25 + 0 + 4 = 29)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="u8-ans-4-1">{"(1) 13"}</span>,
          <span key="u8-ans-4-2">{"(2) 53"}</span>
        ]
      },
      {
        questionNumber: 5,
        answers: [
          <span key="3-1">{"(1) 10011 (19 ÷ 2 = 9 ເສດ 1; 9 ÷ 2 = 4 ເສດ 1; 4 ÷ 2 = 2 ເສດ 0; 2 ÷ 2 = 1 ເສດ 0; 1 ÷ 2 = 0 ເສດ 1; ຂຽນຍ້ອນກັບໄດ້ 10011)"}</span>,
          <span key="3-2">{"(2) 123 (38 ÷ 5 = 7 ເສດ 3; 7 ÷ 5 = 1 ເສດ 2; 1 ÷ 5 = 0 ເສດ 1; ຂຽນຍ້ອນກັບໄດ້ 123)"}</span>
        ]
      },
      {
        questionNumber: 6,
        answers: [
          <span key="u8-ans-6-1">{"(1) 10111"}</span>,
          <span key="u8-ans-6-2">{"(2) 134"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"37 (00100101₂ = 1×2⁵ + 1×2² + 1×2⁰ = 32 + 4 + 1 = 37. ໝາຍເຫດ: ຕົວເລກ 0 ທາງໜ້າບໍ່ມີຜົນຕໍ່ຄ່າ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"133 (43 ÷ 5 = 8 ເສດ 3; 8 ÷ 5 = 1 ເສດ 3; 1 ÷ 5 = 0 ເສດ 1; ຂຽນຍ້ອນກັບໄດ້ 133₅, ໝາຍເຖິງ 1 ກ່ອງໃຫຍ່, 3 ຖົງນ້ອຍ, ແລະ ເຫຼືອເສດ 3 ໜ່ວຍ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"30 (11110₂ = 1×2⁴ + 1×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 8 + 4 + 2 + 0 = 30)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"244 (74 ÷ 5 = 14 ເສດ 4; 14 ÷ 5 = 2 ເສດ 4; 2 ÷ 5 = 0 ເສດ 2; ຂຽນຍ້ອນກັບໄດ້ 244₅)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ລະບົບເລກພື້ນຖານຕ່າງໆ ໂດຍສະເພາະພື້ນຖານ 2 (Binary) ແມ່ນຫົວໃຈຂອງເຕັກໂນໂລຢີດີຈີຕອນ ແລະ ວິທະຍາສາດຄອມພິວເຕີໃນປັດຈຸບັນ. ຄວາມເຂົ້າໃຈນີ້ຈະຊ່ວຍໃຫ້ເຈົ້າຮຽນຮູ້ກ່ຽວກັບຄອມພິວເຕີ ແລະ ການຂຽນໂປຣແກຣມໄດ້ງ່າຍຂຶ້ນໃນອະນາຄົດ!"
  }
};
