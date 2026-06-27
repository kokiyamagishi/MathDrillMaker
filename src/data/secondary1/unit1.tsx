import React from "react";
import { UnitData } from "../units2";

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ຈຳນວນທຳມະຊາດ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງຈຳນວນທຳມະຊາດ, ລະບົບການຂຽນ ແລະ ການອ່ານຈຳນວນ, ການປຽບທຽບ, ການຂອບຂັ້ນ ແລະ ເລກໂຣແມັງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 1-10",
  subSections: [
    {
      title: "1. ຈຳນວນທຳມະຊາດ ແລະ ລະບົບການຂຽນຈຳນວນ",
      keyPoint: {
        title: "ຫຼັກການພື້ນຖານຂອງຈຳນວນທຳມະຊາດ ແລະ ການຂຽນໃນຮູບແບບກະຈາຍ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈຳນວນທຳມະຊາດແມ່ນຈຳນວນທີ່ເຮົາໃຊ້ໃນການນັບ ຫຼື ບັນທຶກສິ່ງຂອງຕ່າງໆ ເຊິ່ງສັນຍາລັກດ້ວຍກຸ່ມ "}
              <strong style={{ color: "#1E88E5" }}>{"ℕ = {1, 2, 3, 4, 5, ...}"}</strong>
              {". ການຂຽນຈຳນວນໃນຮູບແບບກະຈາຍແມ່ນການຂຽນຕາມຄ່າປະຈຳຫຼັກຂອງແຕ່ລະຕົວເລກ:"}
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "12px", border: "1px dashed #B0BEC5", margin: "8px 0" }}>
              <span className="math" style={{ fontSize: "1.6rem", display: "inline-flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                {"4 957 = (4 × 1000) + (9 × 100) + (5 × 10) + 7"}
              </span>
            </div>

            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1565C0", display: "block", marginBottom: "8px" }}>
                {"💡 ຕາຕະລາງຫຼັກ ແລະ ຄ່າປະຈຳຫຼັກ (Place Value Chart):"}
              </span>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "1.1rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1565C0", color: "#FFFFFF" }}>
                      <th style={{ padding: "8px", border: "1px solid #90CAF9" }}>{"ຫຼັກພັນ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #90CAF9" }}>{"ຫຼັກຮ້ອຍ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #90CAF9" }}>{"ຫຼັກສິບ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #90CAF9" }}>{"ຫຼັກໜ່ວຍ"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#FFFFFF" }}>
                      <td style={{ padding: "8px", border: "1px solid #90CAF9", fontWeight: "bold" }}>{"4"}</td>
                      <td style={{ padding: "8px", border: "1px solid #90CAF9", fontWeight: "bold" }}>{"9"}</td>
                      <td style={{ padding: "8px", border: "1px solid #90CAF9", fontWeight: "bold" }}>{"5"}</td>
                      <td style={{ padding: "8px", border: "1px solid #90CAF9", fontWeight: "bold" }}>{"7"}</td>
                    </tr>
                    <tr style={{ backgroundColor: "#F5F7FA", color: "#555" }}>
                      <td style={{ padding: "6px", border: "1px solid #90CAF9", fontSize: "0.95rem" }}>{"4,000"}</td>
                      <td style={{ padding: "6px", border: "1px solid #90CAF9", fontSize: "0.95rem" }}>{"900"}</td>
                      <td style={{ padding: "6px", border: "1px solid #90CAF9", fontSize: "0.95rem" }}>{"50"}</td>
                      <td style={{ padding: "6px", border: "1px solid #90CAF9", fontSize: "0.95rem" }}>{"7"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈື່ໄວ້ວ່າ: ການຕື່ມເລກ 0 ໃສ່ເບື້ອງຂວາຂອງຈຳນວນທຳມະຊາດໃດໜຶ່ງ ຈະເຮັດໃຫ້ຄ່າຂອງມັນເພີ່ມຂຶ້ນ 10 ເທົ່າ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນຈຳນວນຕໍ່ໄປນີ້ໃນຮູບແບບກະຈາຍ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ fontSize: "1.375rem", lineHeight: "2" }}>
                  <span style={{ fontWeight: "bold", marginRight: "12px" }}>{"(1)"}</span>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"507 = (5 × "}
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "30px", width: "30px", height: "24px", verticalAlign: "middle", margin: "0 4px" }}></span>
                    {") + (0 × 10) +"}
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "30px", width: "30px", height: "24px", verticalAlign: "middle", margin: "0 4px" }}></span>
                  </span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ fontSize: "1.375rem", lineHeight: "2", marginTop: "12px" }}>
                  <span style={{ fontWeight: "bold", marginRight: "12px" }}>{"(2)"}</span>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"2 532 = (2 × 1000) + ("}
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "30px", width: "30px", height: "24px", verticalAlign: "middle", margin: "0 4px" }}></span>
                    {"× 100) + (3 ×"}
                    <span className="answer-blank" style={{ display: "inline-block", minWidth: "30px", width: "30px", height: "24px", verticalAlign: "middle", margin: "0 4px" }}></span>
                    {") + 2"}
                  </span>
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
                {"ຈົ່ງຂຽນຈຳນວນຕໍ່ໄປນີ້ເປັນຕົວເລກ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຊາວເກົ້າພັນແປດສິບ ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "100px", width: "100px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຫ້າລ້ານເຈັດແສນສາມສິບພັນຮ້ອຍແປດສິບຫົກ ("}</span>
                  <span className="answer-blank" style={{ display: "inline-block", minWidth: "120px", width: "120px", height: "42px" }}></span>
                  <span>{")"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການປຽບທຽບ, ການຂອບຂັ້ນ ແລະ ເລກໂຣແມັງ",
      keyPoint: {
        title: "ການປຽບທຽບຈຳນວນ, ການຂອບຂັ້ນ ແລະ ສັນຍາລັກເລກໂຣແມັງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"1. "}<strong>{"ການປຽບທຽບ:"}</strong>{" ປຽບທຽບຈາກຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ (ຊ້າຍຫາຂວາ) ເຊັ່ນ: "}
              <strong style={{ color: "#E65100" }}>{"8 913 > 8 590"}</strong>{" (ຫຼັກພັນເທົ່າກັນ, ແຕ່ຫຼັກຮ້ອຍ 9 > 5)."}
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"2. "}<strong>{"ການຂອບຂັ້ນ:"}</strong>{" ການກຳນົດຂອບເຂດຂອງຈຳນວນໃດໜຶ່ງດ້ວຍຄ່າໃກ້ຄຽງຫຼຸດ ແລະ ຄ່າໃກ້ຄຽງລື່ນ ເຊັ່ນ: ຂອບຂັ້ນ 8 913 ຢູ່ຫຼັກຮ້ອຍແມ່ນ: "}
              <strong style={{ color: "#2E7D32" }}>{"8 900 < 8 913 < 9 000"}</strong>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"3. "}<strong>{"ເລກໂຣແມັງ:"}</strong>{" ປະກອບດ້ວຍສັນຍາລັກພື້ນຖານ 7 ຕົວ: "}
              <strong>{"I=1, V=5, X=10, L=50, C=100, D=500, M=1000"}</strong>
              {". ຕົວຢ່າງ: IV = 4, IX = 9, XIV = 14, XL = 40."}
            </p>
          </div>
        ),
        hint: {
          text: "💡 ສັນຍາລັກເລກໂຣແມັງທີ່ມີຄ່ານ້ອຍຂຽນໄວ້ທາງໜ້າ (ຊ້າຍ) ຂອງຕົວທີ່ມີຄ່າໃຫຍ່ກວ່າ ແມ່ນການລົບອອກ ເຊັ່ນ: IX = 10 - 1 = 9!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ < , > ຫຼື = ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນន, ລວມ 5 ຄະແນន)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"4 398"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span className="math">{"3 999"}</span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"57 243"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
                  <span className="math">{"57 420"}</span>
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
                {"ຈົ່ງຂຽນເປັນເລກໂຣແມັງ ຫຼື ເລກອາຣັບໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເລກອາຣັບ 19 = ເລກໂຣແມັງ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ເລກໂຣແມັງ CXLIX = ເລກອາຣັບ"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສັງເກດເບິ່ງຫຼັກການຂຽນຈຳນວນທຳມະຊາດ ແລະ ຄ່າປະຈຳຫຼັກໃຫ້ດີໆ ເພື່ອແກ້ໄຂໂຈດບັນຫາລະດັບສູງນີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດຊອກຫາຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດ: "}<span className="point-label">{"(5 ຄະແນន)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ມີບັດຕົວເລກ 5 ໃບຄື: "}<strong>{"3, 1, 0, 0, 2"}</strong>
              {". ຈົ່ງນຳໃຊ້ບັດທັງໝົດນີ້ຂຽນເປັນຈຳນວນທີ່ມີ 5 ຕົວເລກ ທີ່ມີຄ່າສູງສຸດ ແລະ ຈຳນວນທີ່ມີຄ່າຕ່ຳສຸດ (ໂດຍບໍ່ໃຫ້ເລກ 0 ຢູ່ທາງໜ້າຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ)."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"- ຈຳນວນທີ່ມີຄ່າສູງສຸດແມ່ນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"- ຈຳນວນທີ່ມີຄ່າຕ່ຳສຸດແມ່ນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "140px", height: "42px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຂອບຂັ້ນຈຳນວນທຳມະຊາດ: "}<span className="point-label">{"(5 ຄະແນន)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຂອບຂັ້ນຈຳນວນ "}<strong>{"85 243"}</strong>{" ດ້ວຍຄ່າໃກ້ຄຽງຫຼຸດ ແລະ ຄ່າໃກ້ຄຽງລື່ນຢູ່ຫຼັກສິບ ແລະ ຫຼັກຮ້ອຍ ໃຫ້ຖືກຕ້ອງ:"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span>{" - ຂອບຂັ້ນຢູ່ຫຼັກສິບ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{" < "} 85 243 {" < "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span>{" - ຂອບຂັ້ນຢູ່ຫຼັກຮ້ອຍ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{" < "} 85 243 {" < "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
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
            {"ການອ່ານ ແລະ ຂຽນຈຳນວນທຳມະຊາດຂະໜາດໃຫຍ່: "}<span className="point-label">{"(5 ຄະແນន)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງອ່ານຈຳນວນຖ້ວນ "}<strong>{"12 045 237 086"}</strong>{" ເປັນຕົວອັກສອນແນວໃດ? ຈົ່ງຕື່ມໃສ່ບ່ອນວ່າງລຸ່ມນີ້ໃຫ້ສົມບູນ:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
            <span>{"- ອ່ານວ່າ: ສິບສອງຕື້ ສີ່ສິບຫ້າລ້ານ ສອງແສນສາມສິບເຈັດພັນ ..."}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{"ຕື່ມໃສ່ບ່ອນທີ່ເຫຼືອໃຫ້ຄົບຖ້ວນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "42px" }}></span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການປຽບທຽບເລກໂຣແມັງ: "}<span className="point-label">{"(5 ຄະແນន)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຕື່ມເຄື່ອງໝາຍ <, > ຫຼື = ໃສ່ບ່ອນວ່າງລະຫວ່າງເລກໂຣແມັງຕໍ່ໄປນີ້:"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "8px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
              <span>{"d) XCVI"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              <span>{"CXIV"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
              <span>{"e) CLXXX"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "42px" }}></span>
              <span>{"CLXXIX"}</span>
            </div>
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
          <span key="1-1">{"(1) 507 = (5 × 100) + (0 × 10) + 7"}</span>,
          <span key="1-2">{"(2) 2 532 = (2 × 1000) + (5 × 100) + (3 × 10) + 2"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 29 080"}</span>,
          <span key="2-2">{"(2) 5 730 186"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 4 398 > 3 999"}</span>,
          <span key="3-2">{"(2) 57 243 < 57 420"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"(1) XIX"}</span>,
          <span key="4-2">{"(2) 149 (C = 100, XL = 40, IX = 9)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1-1">{"- ຄ່າສູງສຸດ: 32 100"}</span>,
          <span key="t1-2">{"- ຄ່າຕ່ຳສຸດ: 10 023"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2-1">{"- ຫຼັກສິບ: 85 240 < 85 243 < 85 250"}</span>,
          <span key="t2-2">{"- ຫຼັກຮ້ອຍ: 85 200 < 85 243 < 85 300"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ແປດສິບຫົກ (ຄຳອ່ານເຕັມແມ່ນ: ສິບສອງຕື້ ສີ່ສິບຫ້າລ້ານ ສອງແສນສາມສິບເຈັດພັນ ແປດສິບຫົກ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2-1">{"d) XCVI < CXIV (96 < 114)"}</span>,
          <span key="s2-2">{"e) CLXXX > CLXXIX (180 > 179)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການເຂົ້າໃຈລະບົບຈຳນວນທຳມະຊາດ ແລະ ເລກໂຣແມັງ ເປັນພື້ນຖານທີ່ດີຫຼາຍສຳລັບວິຊາຄະນິດສາດ. ພະຍາຍາມຕໍ່ໄປເດີ້!"
  }
};
