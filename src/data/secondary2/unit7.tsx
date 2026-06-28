import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ການຄູນເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ວິທີການຄູນເລກສ່ວນກັບເລກສ່ວນໂດຍການເອົາ ຕົວເສດຄູນຕົວເສດ ແລະ ຕົວສ່ວນຄູນຕົວສ່ວນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 23-26",
  subSections: [
    {
      title: "1. ການຄູນເລກສ່ວນຂັ້ນພື້ນຖານ (Basic Fraction Multiplication)",
      keyPoint: {
        title: "ຫຼັກການຄູນເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຄູນເລກສ່ວນ ແມ່ນໃຫ້ເອົາຕົວເສດ (ທາງເທິງ) ຄູນກັບຕົວເສດ ແລະ ເອົາຕົວສ່ວນ (ທາງລຸ່ມ) ຄູນກັບຕົວສ່ວນ:"}
            </p>
            
            {/* Visual Formula block */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", margin: "4px 0" }}>
              <span className="math" style={{ fontSize: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Fraction num="a" den="b" /> {" × "} <Fraction num="c" den="d" /> {" = "} <Fraction num={<span>{"a × c"}</span>} den={<span>{"b × d"}</span>} />
              </span>
            </div>

            {/* Visual Multiplication grid illustration */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  {"ແຜນວາດເນື້ອທີ່ສະແດງການຄູນ: "}
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    {"("}<Fraction num="2" den="3" />{" × "}<Fraction num="4" den="5" />{") = "}<Fraction num="8" den="15" />
                  </span>
                </span>
                <svg viewBox="0 0 150 100" style={{ width: "100%", maxWidth: "150px", height: "auto" }}>
                  {/* Grid 3x5 = 15 blocks */}
                  <rect x="0" y="0" width="150" height="100" fill="none" stroke="#37474F" strokeWidth="2" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="0" x2="100" y2="100" stroke="#37474F" strokeWidth="1" />
                  
                  <line x1="0" y1="20" x2="150" y2="20" stroke="#37474F" strokeWidth="1" />
                  <line x1="0" y1="40" x2="150" y2="40" stroke="#37474F" strokeWidth="1" />
                  <line x1="0" y1="60" x2="150" y2="60" stroke="#37474F" strokeWidth="1" />
                  <line x1="0" y1="80" x2="150" y2="80" stroke="#37474F" strokeWidth="1" />
                  
                  {/* Shading 2 rows/columns (out of 3 vertical intervals, representing 2/3) */}
                  {/* Shading 4 columns/rows (out of 5 horizontal intervals, representing 4/5) */}
                  <rect x="0" y="0" width="100" height="80" fill="#2196F3" opacity="0.6" />
                </svg>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "1.1rem", fontWeight: "bold", color: "#0D47A1", backgroundColor: "#E3F2FD", padding: "4px 12px", borderRadius: "6px", border: "1px solid #90CAF9" }}>
                  <span>{"ເນື້ອທີ່ສ່ວນສີຟ້າ = 8 ຫ້ອງ ("}</span>
                  <Fraction num="8" den="15" />
                  <span>{")"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ບໍ່ຄືກັບການບວກລົບ, ເວລາຄູນເລກສ່ວນ ບໍ່ຈໍາເປັນຕ້ອງຂຶ້ນພູດຮ່ວມເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄູນເລກສ່ວນຕໍ່ໄປນີ້ໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="3" /> {" × "} <Fraction num="4" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="7" /> {" × "} <Fraction num="2" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="1" den="4" /> {" × "} <Fraction num="3" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="8" /> {" × "} <Fraction num="3" den="7" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="2" den="9" /> {" × "} <Fraction num="5" den="7" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການຄູນເລກສ່ວນດ້ວຍການຄັດຈ້ອນ (Multiplication with Simplification)",
      keyPoint: {
        title: "ຫຼັກການຄັດຈ້ອນກ່ອນຄູນເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເຮົາສາມາດຄັດຈ້ອນຕົວເລກລະຫວ່າງຕົວເສດ ແລະ ຕົວສ່ວນ (ທັງແນວຕັ້ງ ຫຼື ແນວສະແຢງ) ກ່ອນການຄູນ ເພື່ອເຮັດໃຫ້ການຄິດໄລ່ງ່າຍຂຶ້ນ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄິດໄລ່ "} <Fraction num="3" den="4" /> {" × "} <Fraction num="8" den="9" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ຄັດຈ້ອນ 3 ກັບ 9 ➔ ຫານໃຫ້ 3 ໄດ້ 1 ແລະ 3"}</span>
                <span>{"• ຄັດຈ້ອນ 8 ກັບ 4 ➔ ຫານໃຫ້ 4 ໄດ້ 2 ແລະ 1"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"➔ ຈະເຫຼືອສຳນວນ: "}
                  <Fraction num="1" den="1" /> {" × "} <Fraction num="2" den="3" /> {" = "} <Fraction num="2" den="3" />
                </span>
              </div>
            </div>

            {/* Graphic visual card showing simplifying cross directions */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9" }}>
              <svg viewBox="0 0 200 60" style={{ width: "100%", maxWidth: "180px", height: "auto" }}>
                {/* Simplifying arrows */}
                <text x="30" y="25" fill="#333" fontSize="16" fontWeight="bold">{"3"}</text>
                <line x1="45" y1="20" x2="145" y2="40" stroke="#E53935" strokeWidth="2" strokeDasharray="3,3" />
                <text x="30" y="50" fill="#333" fontSize="16" fontWeight="bold">{"4"}</text>
                
                <text x="85" y="38" fill="#388E3C" fontSize="18" fontWeight="bold">{"×"}</text>
                
                <line x1="45" y1="45" x2="145" y2="25" stroke="#1E88E5" strokeWidth="2" strokeDasharray="3,3" />
                <text x="155" y="25" fill="#333" fontSize="16" fontWeight="bold">{"8"}</text>
                <text x="155" y="50" fill="#333" fontSize="16" fontWeight="bold">{"9"}</text>
              </svg>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຄັດຈ້ອນກ່ອນຄູນ ຈະຊ່ວຍຫຼີກເວັ້ນການຄູນຕົວເລກຂະໜາດໃຫຍ່ ເຊິ່ງປ້ອງກັນການຄິດໄລ່ຜິດພາດໄດ້ດີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄູນເລກສ່ວນ ໂດຍການຄັດຈ້ອນກ່ອນຄູນໃຫ້ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="3" den="4" /> {" × "} <Fraction num="8" den="9" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="5" den="6" /> {" × "} <Fraction num="3" den="10" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="7" den="12" /> {" × "} <Fraction num="4" den="14" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="9" den="16" /> {" × "} <Fraction num="8" den="27" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="15" den="28" /> {" × "} <Fraction num="14" den="25" /> {" ="}
                  </span>
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
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດບັນຫາ ແລະ ປະຕິບັດການຄູນເລກສ່ວນໃຫ້ລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການແບ່ງປັນເນື້ອທີ່ດິນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ທ້າວ ສົມສັກ ມີເນື້ອທີ່ດິນທັງໝົດ "} <Fraction num="4" den="5" /> {" ເຮັກຕາ. ລາວໄດ້ແບ່ງດິນ "} <Fraction num="2" den="3" /> {" ຂອງດິນທັງໝົດເພື່ອຂຸດໜອງລ້ຽງປາ. ຖາມວ່າເນື້ອທີ່ໜອງລ້ຽງປາມີຈັກເຮັກຕາ?"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
              <svg viewBox="0 0 200 100" style={{ width: "100%", maxWidth: "260px", height: "auto" }}>
                <rect x="10" y="10" width="180" height="80" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="2" rx="6" />
                {/* Pond section (2/3 of 4/5) */}
                <rect x="10" y="10" width="120" height="80" fill="#80DEEA" stroke="#00838F" strokeWidth="1" rx="4" />
                <text x="70" y="36" fill="#006064" fontSize="12" fontWeight="bold" textAnchor="middle">{"ໜອງປາ"}</text>
                <text x="34" y="62" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{"("}</text>
                <text x="44" y="53" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{"2"}</text>
                <line x1="39" y1="56" x2="49" y2="56" stroke="#006064" strokeWidth="1.2" />
                <text x="44" y="66" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{"3"}</text>
                <text x="69" y="62" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{" ຂອງ "}</text>
                <text x="94" y="53" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{"4"}</text>
                <line x1="89" y1="56" x2="99" y2="56" stroke="#006064" strokeWidth="1.2" />
                <text x="94" y="66" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{"5"}</text>
                <text x="104" y="62" fill="#006064" fontSize="10" fontWeight="bold" textAnchor="middle">{")"}</text>
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເນື້ອທີ່ໜອງລ້ຽງປາມີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"ເຮັກຕາ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄູນເລກສ່ວນສາມຕົວຕໍ່ເນື່ອງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຈົ່ງຄິດໄລ່ຄ່າຂອງສຳນວນຕໍ່ໄປນີ້: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num="5" den="6" /> {" × "} <Fraction num="3" den="4" /> {" × "} <Fraction num="8" den="15" />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຜົນຄູນແມ່ນ"}</span>
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
            {"ໂຈດບັນຫາປະລິມານນ້ຳດື່ມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ມີນ້ຳຢູ່ "} <Fraction num="3" den="4" /> {" ລິດຕ໌ ຢູ່ໃນຖັງ. ນາງ ດຳ ເອົານ້ຳອອກມາຊົມໃຊ້ "} <Fraction num="2" den="5" /> {" ຂອງນ້ຳທັງໝົດ. ຖາມວ່ານາງ ດຳ ໄດ້ໃຊ້ນ້ຳໄປທັງໝົດຈັກລິດຕ໌?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ປະລິມານນ້ຳທີ່ໃຊ້ໄປແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"L"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄິດໄລ່ຫາຄ່າ 𝑥 ຈາກສົມຜົນເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາຄ່າຂອງ 𝑥 ຈາກສົມຜົນເລກສ່ວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
              {"𝑥 ÷ "} <Fraction num="3" den="4" /> {" = "} <Fraction num="8" den="9" />
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: 𝑥 ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) "} <Fraction num="8" den="15" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="6" den="35" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="3" den="20" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="15" den="56" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="10" den="63" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) "} <Fraction num="2" den="3" /></span>,
          <span key="2-2">{"(2) "} <Fraction num="1" den="4" /></span>,
          <span key="2-3">{"(3) "} <Fraction num="1" den="6" /></span>,
          <span key="2-4">{"(4) "} <Fraction num="1" den="6" /></span>,
          <span key="2-5">{"(5) "} <Fraction num="3" den="10" /></span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="8" den="15" />
            <span>{" ເຮັກຕາ (ຄິດໄລ່: "}</span>
            <Fraction num="4" den="5" />
            <span>{" × "}</span>
            <Fraction num="2" den="3" />
            <span>{" = "}</span>
            <Fraction num="8" den="15" />
            <span>{")"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="1" den="3" />
            <span>{" (ຄິດໄລ່: "}</span>
            <Fraction num="5" den="6" />
            <span>{" × "}</span>
            <Fraction num="3" den="4" />
            <span>{" × "}</span>
            <Fraction num="8" den="15" />
            <span>{" = "}</span>
            <Fraction num="1" den="3" />
            <span>{")"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="3" den="10" />
            <span>{" L (ຄິດໄລ່: "}</span>
            <Fraction num="3" den="4" />
            <span>{" × "}</span>
            <Fraction num="2" den="5" />
            <span>{" = "}</span>
            <Fraction num="6" den="20" />
            <span>{" = "}</span>
            <Fraction num="3" den="10" />
            <span>{" L)"}</span>
          </span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2" style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
            <span>{"(1) "}</span>
            <Fraction num="2" den="3" />
            <span>{" (ຄິດໄລ່: 𝑥 = "}</span>
            <Fraction num="8" den="9" />
            <span>{" × "}</span>
            <Fraction num="3" den="4" />
            <span>{" = "}</span>
            <Fraction num="2" den="3" />
            <span>{")"}</span>
          </span>
        ]
      }
    ],
    advice: "ດີເລີດຫຼາຍ! ການຄູນເລກສ່ວນແມ່ນງ່າຍຫຼາຍ ພຽງແຕ່ເອົາຕົວເທິງຄູນຕົວເທິງ ແລະ ຕົວລຸ່ມຄູນຕົວລຸ່ມ. ຢ່າລືມຄັດຈ້ອນກ່ອນຄູນເພື່ອຄວາມງ່າຍດາຍເດີ້!"
  }
};
