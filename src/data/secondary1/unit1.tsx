import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit1Data: UnitData = {
  unitNumber: 1,
  unitTitle: "ພາກທີ I - ບົດທີ 1: ຈຳນວນທຳມະຊາດ",
  unitGoal:
    "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍຂອງຈຳນວນທຳມະຊາດ, ການໃຊ້ເຄື່ອງໝາຍກຸ່ມ (∈, ∉), ການຂຽນຈຳນວນໃນຮູບແບບກະຈາຍ ແລະ ເລກໂຣມັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 4-9",
  keyPoints: [
    {
      title: "1. ຈຳນວນທຳມະຊາດ ແລະ ເຄື່ອງໝາຍກຸ່ມ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຈຳນວນທຳມະຊາດ ແມ່ນຈຳນວນທີ່ເຮົາໃຊ້ໃນການນັບ ເຊັ່ນ: 1, 2, 3, 4, ..."}
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ກຸ່ມຂອງຈຳນວນທຳມະຊາດ ສັນຍະລັກດ້ວຍ "}<strong>{"N"}</strong>
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <strong>{"∈"}</strong>{" (ແມ່ນອົງປະກອບ): ໃຊ້ບອກວ່າຈຳນວນນັ້ນຢູ່ໃນກຸ່ມ."}
              <span style={{ color: "#0D47A1", fontWeight: "bold", marginLeft: "12px" }}>{"ຕົວຢ່າງ: 8 ∈ N"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <strong>{"∉"}</strong>{" (ບໍ່ແມ່ນອົງປະກອບ): ໃຊ້ບອກວ່າຈຳນວນນັ້ນບໍ່ຢູ່ໃນກຸ່ມ."}
              <span style={{ color: "#D32F2F", fontWeight: "bold", marginLeft: "12px" }}>{"ຕົວຢ່າງ: 0.4 ∉ N"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຈຳນວນທົດສະນິຍົມ (0.4) ແລະ ເລກສ່ວນ ບໍ່ແມ່ນຈຳນວນທຳມະຊາດເດີ!",
        isBlue: true,
      },
    },
    {
      title: "2. ການຂຽນຈຳນວນໃນຮູບແບບກະຈາຍ",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ການຂຽນຈຳນວນໃນຮູບແບບກະຈາຍ ແມ່ນການຂຽນຕາມຄ່າຂອງແຕ່ລະຫຼັກ:"}
          </p>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
              fontSize: "1.375rem",
              textAlign: "center",
              fontWeight: "bold",
              color: "#2E7D32",
            }}
          >
            {"572 = 5 × 100 + 7 × 10 + 2"}
            <br />
            <span style={{ fontSize: "1.125rem", color: "#555", fontWeight: "normal" }}>
              {"(ຫ້າຮ້ອຍເຈັດສິບສອງ)"}
            </span>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາຂຽນຮູບແບບກະຈາຍ ຕ້ອງເລີ່ມຄູນຈາກຫຼັກໃຫຍ່ສຸດກ່ອນສະເໝີ!",
      },
    },
    {
      title: "3. ເລກໂຣມັນ (Roman Numerals)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຕົວເລກພື້ນຖານຂອງເລກໂຣມັນມີ 7 ຕົວດັ່ງນີ້:"}
          </p>
          <table
            className="drill-table math-illustration"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              fontSize: "1.125rem",
              marginBottom: "12px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#F5F5F5" }}>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"ເລກໂຣມັນ"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"I"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"V"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"X"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"L"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"C"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"D"}</th>
                <th style={{ border: "1px solid #333", padding: "6px" }}>{"M"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #333", padding: "6px", fontWeight: "bold" }}>{"ຄ່າເລກອາຣັບ"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"1"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"5"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"10"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"50"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"100"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"500"}</td>
                <td style={{ border: "1px solid #333", padding: "6px" }}>{"1000"}</td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#FFF3E0",
              border: "2px solid #FF9800",
              borderRadius: "8px",
              fontSize: "1.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{"• ຫຼັກການບວກ: ຂຽນຄ່າໜ້ອຍໄວ້ທາງຂວາ → "}<strong>{"VI = 5 + 1 = 6"}</strong></div>
            <div>{"• ຫຼັກການລົບ: ຂຽນຄ່າໜ້ອຍໄວ້ທາງຊ້າຍ → "}<strong>{"IV = 5 - 1 = 4"}</strong></div>
          </div>
        </div>
      ),
      hint: {
        text: "ຕົວເລກໂຣມັນຈະບໍ່ມີເລກ 0 ແລະ ຈະບໍ່ຂຽນສັນຍະລັກຊ້ຳກັນເກີນ 3 ເທື່ອເດີ!",
        isBlue: true,
      },
    },
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ "}<strong>{"∈"}</strong>{" ຫຼື "}<strong>{"∉"}</strong>{" ໃສ່ບ່ອນວ່າງໃຫ້ຖືກຕ້ອງ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) 8"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) 0.4"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(3) 125"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(4) 2.5"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(5)"} <Fraction num="3" den="4" /></span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N"}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບແບບກະຈາຍຂອງຈຳນວນຕໍ່ໄປນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ຈຳນວນ 4,765 = 4 × 1000 + 7 × 100 +"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              <span>{"+ 5"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ຄ່າຂອງ 3 × 10000 + 5 × 1000 + 2 × 10 + 4 ແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "📏 ສັງເກດລວງຍາວຂອງທ່ອນຊື່ແຕ່ລະເສັ້ນ ໂດຍປຽບທຽບຕົວເລກ cm ຂອງມັນ ແລ້ວຕື່ມເຄື່ອງໝາຍ < ຫຼື > ເດີ! ສ່ວນເລກໂຣມັນ ຢ່າລືມຫຼັກການບວກແລະລົບ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງສັງເກດທ່ອນຊື່ລຸ່ມນີ້ ແລ້ວປຽບທຽບໂດຍຕື່ມເຄື່ອງໝາຍ "}<strong>{"<"}</strong>{" ຫຼື "}<strong>{">"}</strong>{" ໃສ່ບ່ອນວ່າງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            {/* SVG Visual Representation of Lines */}
            <div style={{ alignSelf: "center", width: "100%", maxWidth: "500px", backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 400 120" style={{ width: "100%", height: "auto" }}>
                {/* Line AB = 3cm (approx 90px) */}
                <line x1="30" y1="30" x2="120" y2="30" stroke="#1E88E5" strokeWidth="4" strokeLinecap="round" />
                <line x1="30" y1="24" x2="30" y2="36" stroke="#1E88E5" strokeWidth="2" />
                <line x1="120" y1="24" x2="120" y2="36" stroke="#1E88E5" strokeWidth="2" />
                <text x="140" y="35" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333", fontFamily: "Inter" }}>{"[AB] = 3 cm"}</text>

                {/* Line CD = 5cm (approx 150px) */}
                <line x1="30" y1="70" x2="180" y2="70" stroke="#43A047" strokeWidth="4" strokeLinecap="round" />
                <line x1="30" y1="64" x2="30" y2="76" stroke="#43A047" strokeWidth="2" />
                <line x1="180" y1="64" x2="180" y2="76" stroke="#43A047" strokeWidth="2" />
                <text x="200" y="75" style={{ fontSize: "16px", fontWeight: "bold", fill: "#333", fontFamily: "Inter" }}>{"[CD] = 5 cm"}</text>
              </svg>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ທ່ອນຊື່ [AB]"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ທ່ອນຊື່ [CD]"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 3"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"5"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຕົວເລກໂຣມັນ ແລະ ຕົວເລກອາຣັບຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "1.375rem",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ປ່ຽນເລກອາຣັບ 14 ໃຫ້ເປັນເລກໂຣມັນ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ປ່ຽນເລກໂຣມັນ XIV ໃຫ້ເປັນເລກອາຣັບ: "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) 12"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N (ຕື່ມ ∈ ຫຼື ∉)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) 1.5"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"N (ຕື່ມ ∈ ຫຼື ∉)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(3) ປ່ຽນເລກອາຣັບ 25 ໃຫ້ເປັນເລກໂຣມັນ: "}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້ກ່ຽວກັບເລກໂຣມັນ ແລະ ການປຽບທຽບ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແനນ, ລວມ 4 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              fontSize: "1.375rem",
              padding: "8px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(1) ປ່ຽນເລກໂຣມັນ IX ໃຫ້ເປັນເລກອາຣັບ: "}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span>{"(2) ປຽບທຽບ 35"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"53 (ຕື່ມ < ຫຼື >)"}</span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="u1-ans-1-1">{"(1) ∈"}</span>,
          <span key="u1-ans-1-2">{"(2) ∉"}</span>,
          <span key="u1-ans-1-3">{"(3) ∈"}</span>,
          <span key="u1-ans-1-4">{"(4) ∉"}</span>,
          <span key="u1-ans-1-5">{"(5) ∉"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u1-ans-2-1">{"(1) 6 × 10"}</span>,
          <span key="u1-ans-2-2">{"(2) 35,024"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u1-ans-t1-1">{"(1) < (ເພາະວ່າ 3 cm < 5 cm)"}</span>,
          <span key="u1-ans-t1-2">{"(2) <"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u1-ans-t2-1">{"(1) XIV (10 + 4)"}</span>,
          <span key="u1-ans-t2-2">{"(2) 14"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u1-ans-s1-1">{"(1) ∈ (ເພາະ 12 ແມ່ນຈຳນວນທຳມະຊາດ)"}</span>,
          <span key="u1-ans-s1-2">{"(2) ∉ (ເພາະ 1.5 ແມ່ນເລກທົດສະນິຍົມ)"}</span>,
          <span key="u1-ans-s1-3">{"(3) XXV (20 + 5)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u1-ans-s2-1">{"(1) 9 (10 - 1)"}</span>,
          <span key="u1-ans-s2-2">{"(2) < (ເພາະ 35 ໜ້ອຍກວ່າ 53)"}</span>,
        ],
      },
    ],
    advice: "ຈຳນວນທຳມະຊາດແມ່ນເລກຖ້ວນບວກທີ່ບໍ່ມີຈຸດທົດສະນິຍົມ. ເວລາປຽບທຽບລວງຍາວໃຫ້ປຽບທຽບຕົວເລກເດີ!",
  },
};
