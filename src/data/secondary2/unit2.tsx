import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

// Specifically smaller Fraction component for the formula box to guarantee it fits beautifully
const SmallFraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 2px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 1px", lineHeight: "1.1", fontSize: "1.05rem" }}>{num}</span>
    <span style={{ padding: "0 1px", lineHeight: "1.1", fontSize: "1.05rem" }}>{den}</span>
  </span>
);

export const unit2Data: UnitData = {
  unitNumber: 2,
  unitTitle: "ພາກທີ I - ບົດທີ 2: ທະວີຄູນ ແລະ ອຸປະຄູນ ຂອງເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການຊອກຫາ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ແລະ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD) ຂອງເລກສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 5-7",
  subSections: [
    {
      title: "1. ການຊອກຫາ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ຂອງເລກສ່ວນ",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ວິທີຊອກຫາ LCM ຂອງເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.5" }}>
              {"ການຊອກຫາ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ຂອງເລກສ່ວນ ແມ່ນການຊອກຫາ LCM ຂອງຕົວເສດ ຫານໃຫ້ GCD ຂອງຕົວສ່ວນ:"}
            </p>
            
            {/* Visual Formula block - smaller text size to perfectly fit */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.15rem", display: "inline-flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
                <span style={{ fontWeight: "bold" }}>{"LCM ຂອງເລກສ່ວນ ="}</span> 
                <SmallFraction num="LCM (ຂອງຕົວເສດ)" den="GCD (ຂອງຕົວສ່ວນ)" />
              </span>
            </div>

            {/* Visual Step-by-Step illustration */}
            <div style={{ padding: "12px", backgroundColor: "#FFF9C4", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.2rem", color: "#E65100" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຊອກຫາ LCM ຂອງ "} <Fraction num="2" den="9" /> {" ແລະ "} <Fraction num="5" den="12" />
              <div style={{ padding: "10px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #FFE082", fontSize: "1.1rem", marginTop: "6px", display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <div>
                  <span style={{ fontWeight: "bold", color: "#1565C0" }}>{"ຂັ້ນຕອນທີ 1: ຊອກຫາ LCM ຂອງຕົວເສດ (2 ແລະ 5)"}</span>
                  <div style={{ paddingLeft: "12px", marginTop: "2px" }}>
                    {"• ທະວີຄູນຂອງ 2: 2, 4, 6, 8, "}<strong>{"10"}</strong>{", 12, ..."} <br />
                    {"• ທະວີຄູນຂອງ 5: 5, "}<strong>{"10"}</strong>{", 15, ..."} ➔ LCM = 10
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #FFE082", paddingTop: "6px" }}>
                  <span style={{ fontWeight: "bold", color: "#E65100" }}>{"ຂັ້ນຕອນທີ 2: ຊອກຫາ GCD ຂອງຕົວສ່ວນ (9 ແລະ 12)"}</span>
                  <div style={{ paddingLeft: "12px", marginTop: "2px" }}>
                    {"• ອຸປະຄູນ ຂອງ 9: 1, "}<strong>{"3"}</strong>{", 9"} <br />
                    {"• ອຸປະຄູນ ຂອງ 12: 1, 2, "}<strong>{"3"}</strong>{", 4, 6, 12"} ➔ GCD = 3
                  </div>
                </div>
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "6px", textAlign: "center" }}>
                {"➔ LCM = "} <span className="math"><Fraction num="10" den="3" /></span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອຊອກຫາ LCM ຂອງເລກສ່ວນ, ໃຫ້ໃຊ້ LCM ສໍາລັບສ່ວນເທິງສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາ LCM (ທະວີຄູນຮ່ວມໜ້ອຍສຸດ) ຂອງເລກສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"LCM ຂອງ "} <Fraction num="2" den="9" /> {" ແລະ "} <Fraction num="5" den="12" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
                
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"LCM ຂອງ "} <Fraction num="3" den="4" /> {" ແລະ "} <Fraction num="9" den="10" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"LCM ຂອງ "} <Fraction num="1" den="3" /> {" ແລະ "} <Fraction num="2" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"LCM ຂອງ "} <Fraction num="4" den="5" /> {" ແລະ "} <Fraction num="6" den="7" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"LCM ຂອງ "} <Fraction num="5" den="6" /> {" ແລະ "} <Fraction num="7" den="8" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຊອກຫາ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD) ຂອງເລກສ່ວນ",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ວິທີຊອກຫາ GCD ຂອງເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.5" }}>
              {"ການຊອກຫາ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD) ຂອງເລກສ່ວນ ແມ່ນການຊອກຫາ GCD ຂອງຕົວເສດ ຫານໃຫ້ LCM ຂອງຕົວສ່ວນ:"}
            </p>
            
            {/* Visual Formula block - smaller text size to perfectly fit */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.15rem", display: "inline-flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
                <span style={{ fontWeight: "bold" }}>{"GCD ຂອງເລກສ່ວນ ="}</span> 
                <SmallFraction num="GCD (ຂອງຕົວເສດ)" den="LCM (ຂອງຕົວສ່ວນ)" />
              </span>
            </div>

            {/* Visual Step-by-Step illustration */}
            <div style={{ padding: "12px", backgroundColor: "#FFF9C4", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.2rem", color: "#2E7D32" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຊອກຫາ GCD ຂອງ "} <Fraction num="12" den="5" /> {" ແລະ "} <Fraction num="2" den="25" />
              <div style={{ padding: "10px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #FFE082", fontSize: "1.1rem", marginTop: "6px", display: "flex", flexDirection: "column", gap: "6px", color: "#37474F" }}>
                <div>
                  <span style={{ fontWeight: "bold", color: "#2E7D32" }}>{"ຂັ້ນຕອນທີ 1: ຊອກຫາ GCD ຂອງຕົວເສດ (12 ແລະ 2)"}</span>
                  <div style={{ paddingLeft: "12px", marginTop: "2px" }}>
                    {"• ອຸປະຄູນ ຂອງ 12: 1, "}<strong>{"2"}</strong>{", 3, 4, 6, 12"} <br />
                    {"• ອຸປະຄູນ ຂອງ 2: 1, "}<strong>{"2"}</strong> ➔ GCD = 2
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #FFE082", paddingTop: "6px" }}>
                  <span style={{ fontWeight: "bold", color: "#1565C0" }}>{"ຂັ້ນຕອນທີ 2: ຊອກຫາ LCM ຂອງຕົວສ່ວນ (5 ແລະ 25)"}</span>
                  <div style={{ paddingLeft: "12px", marginTop: "2px" }}>
                    {"• ທະວີຄູນ ຂອງ 5: 5, 10, 15, 20, "}<strong>{"25"}</strong>{", 30, ..."} <br />
                    {"• ທະວີຄູນ ຂອງ 25: "}<strong>{"25"}</strong>{", 50, ..."} ➔ LCM = 25
                  </div>
                </div>
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "6px", textAlign: "center" }}>
                {"➔ GCD = "} <span className="math"><Fraction num="2" den="25" /></span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອຊອກຫາ GCD ຂອງເລກສ່ວນ, ໃຫ້ໃຊ້ GCD ສໍາລັບສ່ວນເທິງສະເໝີເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາ GCD (ອຸປະຄູນຮ່ວມຫຼາຍສຸດ) ຂອງເລກສ່ວນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"GCD ຂອງ "} <Fraction num="12" den="5" /> {" ແລະ "} <Fraction num="2" den="25" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"GCD ຂອງ "} <Fraction num="8" den="9" /> {" ແລະ "} <Fraction num="6" den="15" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"GCD ຂອງ "} <Fraction num="3" den="8" /> {" ແລະ "} <Fraction num="9" den="20" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"GCD ຂອງ "} <Fraction num="4" den="7" /> {" ແລະ "} <Fraction num="6" den="21" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>

                <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"GCD ຂອງ "} <Fraction num="5" den="12" /> {" ແລະ "} <Fraction num="15" den="18" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "30px", verticalAlign: "middle" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດບັນຫາ ແລະ ຕັ້ງໃຈຄິດໄລ່ຫາ LCM ຫຼື GCD ໃຫ້ຖືກຕ້ອງເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແລ່ນອ້ອມສະໜາມ (LCM): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ສິດ ແລະ ນາງ ນາ ແລ່ນອ້ອມສະໜາມກິລາແຫ່ງໜຶ່ງ. ທ້າວ ສິດ ແລ່ນ 1 ຮອບໃຊ້ເວລາ "} <Fraction num="3" den="4" /> {" ນາທີ. ນາງ ນາ ແລ່ນ 1 ຮອບໃຊ້ເວລາ "} <Fraction num="5" den="6" /> {" ນາທີ. ຖ້າທັງສອງເລີ່ມອອກແລ່ນພ້ອມກັນຈາກຈຸດດຽວກັນ, ພວກເຂົາຈະມາພົບກັນຢູ່ຈຸດເລີ່ມຕົ້ນອີກຄັ້ງຫຼັງຈາກຈັກນາທີ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 300 100" style={{ width: "100%", maxWidth: "250px", height: "auto" }}>
                {/* Oval running track */}
                <rect x="10" y="10" width="280" height="80" rx="40" fill="none" stroke="#FF5722" strokeWidth="6" />
                <rect x="25" y="25" width="250" height="50" rx="25" fill="#E8F5E9" stroke="#81C784" strokeWidth="2" />
                <circle cx="150" cy="10" r="6" fill="#3F51B5" />
                <text x="150" y="48" fill="#2E7D32" fontSize="13" fontWeight="bold" textAnchor="middle">{"ສະໜາມກິລາ (ຈຸດເລີ່ມຕົ້ນ ຢູ່ເທິງ)"}</text>
              </svg>
            </div>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ພວກເຂົາຈະພົບກັນຫຼັງຈາກ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ນາທີ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງແຖບເຈ້ຍ (GCD): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ມີແຖບເຈ້ຍສອງເສັ້ນທີ່ມີຄວາມຍາວ "} <Fraction num="12" den="5" /> {" ແມັດ ແລະ "} <Fraction num="18" den="5" /> {" ແມັດ. ຕ້ອງການຕັດແຖບເຈ້ຍທັງສອງເປັນທ່ອນສັ້ນໆ ທີ່ມີຄວາມຍາວເທົ່າກັນ ແລະ ຍາວທີ່ສຸດໂດຍບໍ່ໃຫ້ມີເຈ້ຍເຫຼືອ. ຖາມວ່າແຕ່ລະທ່ອນຈະຍາວຈັກແມັດ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 300 80" style={{ width: "100%", maxWidth: "250px", height: "auto" }}>
                {/* Paper Strip 1 */}
                <rect x="10" y="10" width="160" height="20" fill="#FFCDD2" stroke="#B71C1C" strokeWidth="2" rx="3" />
                <text x="90" y="25" fill="#B71C1C" fontSize="12" fontWeight="bold" textAnchor="middle">{"12/5 ແມັດ"}</text>
                {/* Paper Strip 2 */}
                <rect x="10" y="45" width="240" height="20" fill="#BBDEFB" stroke="#0D47A1" strokeWidth="2" rx="3" />
                <text x="130" y="60" fill="#0D47A1" fontSize="12" fontWeight="bold" textAnchor="middle">{"18/5 ແມັດ"}</text>
              </svg>
            </div>
            <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
              <span>{"ຕອບ: ແຕ່ລະທ່ອນຈະຍາວ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
              <span>{"ແມັດ"}</span>
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
            {"ຊອກຫາ LCM ຂອງສາມເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາ LCM (ທະວີຄູນຮ່ວມໜ້ອຍສຸດ) ຂອງສາມເລກສ່ວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", margin: "0 4px" }}>
              <Fraction num="1" den="2" /> {", "} <Fraction num="2" den="3" /> {" ແລະ "} <Fraction num="3" den="4" />
            </span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: LCM ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຊອກຫາ GCD ຂອງສາມເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາ GCD (ອຸປະຄູນຮ່ວມຫຼາຍສຸດ) ຂອງສາມເລກສ່ວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", margin: "0 4px" }}>
              <Fraction num="4" den="9" /> {", "} <Fraction num="6" den="27" /> {" ແລະ "} <Fraction num="8" den="15" />
            </span>
          </p>
          <div style={{ fontSize: "1.375rem", lineHeight: "1.7" }}>
            <span>{"ຕອບ: GCD ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "30px", verticalAlign: "middle" }}></span>
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
          <span key="1-1">{"(1) "} <Fraction num="10" den="3" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="9" den="2" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="2" den="1" /> {" (ຫຼື 2)"}</span>,
          <span key="1-4">{"(4) 12"}</span>,
          <span key="1-5">{"(5) "} <Fraction num="35" den="2" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) "} <Fraction num="2" den="25" /></span>,
          <span key="2-2">{"(2) "} <Fraction num="2" den="45" /></span>,
          <span key="2-3">{"(3) "} <Fraction num="3" den="40" /></span>,
          <span key="2-4">{"(4) "} <Fraction num="2" den="21" /></span>,
          <span key="2-5">{"(5) "} <Fraction num="5" den="36" /></span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) "} <Fraction num="15" den="2" /> {" ນາທີ (ຊອກ LCM ຂອງ 3/4 ແລະ 5/6: LCM(3,5)/GCD(4,6) = 15/2 ນາທີ ຫຼື 7.5 ນາທີ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) "} <Fraction num="6" den="5" /> {" ແມັດ (ຊອກ GCD ຂອງ 12/5 ແລະ 18/5: GCD(12,18)/LCM(5,5) = 6/5 ແມັດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) 6 (ຊອກ LCM ຂອງ 1/2, 2/3, 3/4: LCM(1,2,3)/GCD(2,3,4) = 6/1 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) "} <Fraction num="2" den="135" /> {" (ຊອກ GCD ຂອງ 4/9, 6/27, 8/15 ➔ GCD(4,6,8)/LCM(9,27,15) = 2/135)"}</span>
        ]
      }
    ],
    advice: "ຍອດຢ້ຽມຫຼາຍ! ການຄິດໄລ່ LCM ແລະ GCD ຂອງເລກສ່ວນຊ່ວຍໃຫ້ພວກເຮົາແກ້ໄຂບັນຫາທີ່ເກີດຂຶ້ນພ້ອມກັນ ຫຼື ການແບ່ງປັນສິ່ງຂອງໄດ້ຢ່າງມີປະສິດທິພາບ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
