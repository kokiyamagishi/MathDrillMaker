import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit3Data: UnitData = {
  unitNumber: 3,
  unitTitle: "ພາກທີ I - ບົດທີ 3: ການຄັດຈ້ອນ ແລະ ການຂຶ້ນພູດຮ່ວມເລກສ່ວນ",
  unitGoal: "ຮຽນຮູ້ວິທີການຄັດຈ້ອນເລກສ່ວນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕໍ່າ ແລະ ການຂຶ້ນພູດຮ່ວມເພື່ອປຽບທຽບ ຫຼື ຄິດໄລ່",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.2 ໜ້າ 8-10",
  subSections: [
    {
      title: "1. ການຄັດຈ້ອນເລກສ່ວນ (Simplifying Fractions)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ວິທີຄັດຈ້ອນເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຄັດຈ້ອນເລກສ່ວນແມ່ນການຫານທັງຕົວເສດ (ທາງເທິງ) ແລະ ຕົວສ່ວນ (ທາງລຸ່ມ) ໃຫ້ແກ່ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD) ຂອງພວກມັນ ເພື່ອເຮັດໃຫ້ຕົວເລກໜ້ອຍລົງ ແຕ່ຄ່າເທົ່າເດີມ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຄັດຈ້ອນເລກສ່ວນ "} <Fraction num="36" den="30" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ຊອກຫາ GCD(36, 30) = 6"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ຫານທັງເທິງ ແລະ ລຸ່ມໃຫ້ 6: "} 
                  <Fraction num="36 ÷ 6" den="30 ÷ 6" /> {" = "} <Fraction num="6" den="5" />
                </span>
              </div>
            </div>

            {/* Visual representation grid */}
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "8px", backgroundColor: "#FFF9C4", borderRadius: "8px", border: "1px solid #FFF59D", fontSize: "1.15rem", color: "#F57F17" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ຮູບແບບບໍ່ທັນຄັດຈ້ອນ"}</span>
                <svg viewBox="0 0 120 24" style={{ width: "100%", maxWidth: "120px", height: "auto" }}>
                  <rect x="0" y="2" width="120" height="20" fill="none" stroke="#37474F" strokeWidth="2" />
                  {/* 6 parts grid */}
                  <line x1="20" y1="2" x2="20" y2="22" stroke="#37474F" strokeWidth="1" />
                  <line x1="40" y1="2" x2="40" y2="22" stroke="#37474F" strokeWidth="1" />
                  <line x1="60" y1="2" x2="60" y2="22" stroke="#37474F" strokeWidth="1" />
                  <line x1="80" y1="2" x2="80" y2="22" stroke="#37474F" strokeWidth="1" />
                  <line x1="100" y1="2" x2="100" y2="22" stroke="#37474F" strokeWidth="1" />
                  {/* Color 5/6 */}
                  <rect x="0" y="2" width="100" height="20" fill="#90CAF9" opacity="0.6" />
                </svg>
                <span className="math"><Fraction num="10" den="12" /></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: "2rem" }}>{"➔"}</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span>{"ຮູບແບບຄັດຈ້ອນຂັ້ນຕໍ່າ"}</span>
                <svg viewBox="0 0 120 24" style={{ width: "100%", maxWidth: "120px", height: "auto" }}>
                  <rect x="0" y="2" width="120" height="20" fill="none" stroke="#37474F" strokeWidth="2" />
                  {/* 6 parts grid */}
                  <line x1="20" y1="2" x2="20" y2="22" stroke="#37474F" strokeWidth="2" />
                  <line x1="40" y1="2" x2="40" y2="22" stroke="#37474F" strokeWidth="2" />
                  <line x1="60" y1="2" x2="60" y2="22" stroke="#37474F" strokeWidth="2" />
                  <line x1="80" y1="2" x2="80" y2="22" stroke="#37474F" strokeWidth="2" />
                  <line x1="100" y1="2" x2="100" y2="22" stroke="#37474F" strokeWidth="2" />
                  {/* Color 5/6 */}
                  <rect x="0" y="2" width="100" height="20" fill="#2196F3" opacity="0.8" />
                </svg>
                <span className="math"><Fraction num="5" den="6" /></span>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເມື່ອຄັດຈ້ອນໄດ້ເລກສ່ວນທີ່ບໍ່ສາມາດຫານຕໍ່ໄດ້ອີກ, ເຮົາເອີ້ນວ່າ ເລກສ່ວນຂັ້ນຕໍ່າເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄັດຈ້ອນເລກສ່ວນຕໍ່ໄປນີ້ໃຫ້ເປັນເລກສ່ວນຂັ້ນຕໍ່າ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="36" den="30" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="24" den="36" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="15" den="25" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="45" den="60" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                    <Fraction num="56" den="64" /> {" ="}
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
      title: "2. ການຂຶ້ນພູດຮ່ວມເລກສ່ວນ (Finding Common Denominators)",
      keyPoint: {
        title: "ຫຼັກການ ແລະ ວິທີຂຶ້ນພູດຮ່ວມເລກສ່ວນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຂຶ້ນພູດຮ່ວມແມ່ນການເຮັດໃຫ້ພູດ (ທາງລຸ່ມ) ຂອງສອງເລກສ່ວນຂຶ້ນໄປໃຫ້ເທົ່າກັນ ໂດຍການຄິດໄລ່ຫາ LCM ຂອງພູດທັງໝົດ:"}
            </p>
            
            {/* Visual example block */}
            <div style={{ padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "10px", border: "1px solid #A5D6A7", fontSize: "1.25rem", color: "#2E7D32" }}>
              <strong>{"ຕົວຢ່າງ: "}</strong>{"ຂຶ້ນພູດຮ່ວມຂອງ "} <Fraction num="3" den="8" /> {" ແລະ "} <Fraction num="5" den="24" />
              <div style={{ paddingLeft: "12px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px", color: "#37474F" }}>
                <span>{"• ຊອກຫາ LCM ຂອງພູດ (8 ແລະ 24) = 24"}</span>
                <span className="math" style={{ display: "inline-flex", alignItems: "center" }}>
                  {"• ປ່ຽນພູດຂອງ "} <Fraction num="3" den="8" /> {" ໃຫ້ເປັນ 24: "}
                  <Fraction num="3 × 3" den="8 × 3" /> {" = "} <Fraction num="9" den="24" />
                </span>
                <span>{"• ເລກສ່ວນທີສອງມີພູດ 24 ຢູ່ແລ້ວ ➔ ພູດຮ່ວມແມ່ນ 24"}</span>
              </div>
            </div>

            {/* Graphic visual card showing equivalent scaling */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9" }}>
              <svg viewBox="0 0 320 50" style={{ width: "100%", maxWidth: "300px", height: "auto" }}>
                {/* Visual arrow sizing equivalent fraction */}
                <rect x="10" y="5" width="80" height="40" fill="#FFF" stroke="#2E7D32" strokeWidth="2" rx="4" />
                <text x="50" y="30" fill="#2E7D32" fontSize="16" fontWeight="bold" textAnchor="middle">{"3/8"}</text>
                
                <text x="140" y="30" fill="#388E3C" fontSize="24" fontWeight="bold" textAnchor="middle">{"➔"}</text>
                <text x="140" y="16" fill="#388E3C" fontSize="10" fontWeight="bold" textAnchor="middle">{"ຄູນ 3 ທັງເທິງ-ລຸ່ມ"}</text>

                <rect x="190" y="5" width="80" height="40" fill="#E8F5E9" stroke="#1B5E20" strokeWidth="2" rx="4" />
                <text x="230" y="30" fill="#1B5E20" fontSize="16" fontWeight="bold" textAnchor="middle">{"9/24"}</text>
              </svg>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຂຶ້ນພູດຮ່ວມແມ່ນຂັ້ນຕອນທີ່ຈຳເປັນທີ່ສຸດ ກ່ອນທີ່ຈະສາມາດບວກ ຫຼື ລົບເລກສ່ວນທີ່ມີພູດຕ່າງກັນໄດ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຶ້ນພູດຮ່ວມຂອງເລກສ່ວນລຸ່ມນີ້ ແລ້ວຊອກຫາພູດຮ່ວມຂອງພວກມັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px 24px", padding: "8px 0" }}>
                {/* 5 Questions */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {"ພູດຮ່ວມຂອງ "} <Fraction num="3" den="8" /> {" ແລະ "} <Fraction num="5" den="24" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {"ພູດຮ່ວມຂອງ "} <Fraction num="1" den="4" /> {" ແລະ "} <Fraction num="5" den="6" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {"ພູດຮ່ວມຂອງ "} <Fraction num="2" den="3" /> {" ແລະ "} <Fraction num="1" den="5" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {"ພູດຮ່ວມຂອງ "} <Fraction num="5" den="12" /> {" ແລະ "} <Fraction num="7" den="18" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(5)"}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {"ພູດຮ່ວມຂອງ "} <Fraction num="3" den="10" /> {" ແລະ "} <Fraction num="4" den="15" /> {" ="}
                  </span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ວິເຄາະໂຈດບັນຫາ ແລະ ສົມທຽບອັດຕາສ່ວນໂດຍການຂຶ້ນພູດຮ່ວມກ່ອນເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາການປຽບທຽບປະລິມານນ້ຳ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ມີຂວດນ້ຳສອງໃບ. ຂວດໃບທີໜຶ່ງມີນ້ຳ "} <Fraction num="5" den="8" /> {" ລິດຕ໌. ຂວດໃບທີສອງມີນ້ຳ "} <Fraction num="7" den="12" /> {" ລິດຕ໌. ຢາກຮູ້ວ່າຂວດໃດມີນ້ຳຫຼາຍກວ່າ ແລະ ຫຼາຍກວ່າກັນຈັກລິດຕ໌? (ໃຫ້ຂຶ້ນພູດຮ່ວມເພື່ອປຽບທຽບ)"}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "8px 0" }}>
              {/* Bottle 1 Graphic */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <svg viewBox="0 0 60 100" style={{ width: "100%", maxWidth: "60px", height: "auto" }}>
                  <rect x="15" y="5" width="30" height="15" fill="none" stroke="#333" strokeWidth="2" />
                  <rect x="5" y="20" width="50" height="75" fill="none" stroke="#333" strokeWidth="2" rx="4" />
                  <rect x="5" y="48" width="50" height="47" fill="#90CAF9" rx="2" />
                  <text x="30" y="70" fill="#0D47A1" fontSize="11" fontWeight="bold" textAnchor="middle">{"5/8 L"}</text>
                </svg>
                <span style={{ fontSize: "1.1rem" }}>{"ຂວດໃບທີ 1"}</span>
              </div>
              {/* Bottle 2 Graphic */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <svg viewBox="0 0 60 100" style={{ width: "100%", maxWidth: "60px", height: "auto" }}>
                  <rect x="15" y="5" width="30" height="15" fill="none" stroke="#333" strokeWidth="2" />
                  <rect x="5" y="20" width="50" height="75" fill="none" stroke="#333" strokeWidth="2" rx="4" />
                  <rect x="5" y="51" width="50" height="44" fill="#BBDEFB" rx="2" />
                  <text x="30" y="70" fill="#1565C0" fontSize="11" fontWeight="bold" textAnchor="middle">{"7/12 L"}</text>
                </svg>
                <span style={{ fontSize: "1.1rem" }}>{"ຂວດໃບທີ 2"}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ຂວດໃບທີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "42px" }}></span>
              <span>{"ມີນ້ຳຫຼາຍກວ່າ ແລະ ຫຼາຍກວ່າ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"L"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຄັດຈ້ອນສຳນວນເລກສ່ວນຊ້ອນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຄັດຈ້ອນເລກສ່ວນຕໍ່ໄປນີ້ໃຫ້ເປັນເລກສ່ວນຂັ້ນຕໍ່າສຸດ: "}
              <span className="math" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                <Fraction num={<span>{"120"}</span>} den={<span>{"180"}</span>} />
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ເລກສ່ວນຂັ້ນຕໍ່າແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
            {"ສົມທຽບອັດຕາສ່ວນຄະແນນສອບເສັງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ທ້າວ ສົມພອນ ເສຍຄະແນນໄດ້ "} <Fraction num="18" den="24" /> {" ຂອງຄະແນນເຕັມ, ນາງ ວັນເພັງ ເສຍໄດ້ "} <Fraction num="14" den="16" /> {" ຂອງຄະແນນເຕັມ. ຖາມວ່າໃຜໄດ້ອັດຕາສ່ວນຄະແນນສູງກວ່າກັນ? (ຄໍາແນະນໍາ: ຄັດຈ້ອນເລກສ່ວນທັງສອງກ່ອນສົມທຽບ)"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ຜູ້ທີ່ໄດ້ຄະແນນອັດຕາສ່ວນສູງກວ່າແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຂຶ້ນພູດຮ່ວມຂອງສາມເລກສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາພູດຮ່ວມຂອງສາມເລກສ່ວນຕໍ່ໄປນີ້: "}
            <span className="math" style={{ display: "inline-flex", alignItems: "center", margin: "0 4px" }}>
              <Fraction num="1" den="4" /> {", "} <Fraction num="2" den="5" /> {" ແລະ "} <Fraction num="3" den="10" />
            </span>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ພູດຮ່ວມແມ່ນ"}</span>
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
          <span key="1-1">{"(1) "} <Fraction num="6" den="5" /></span>,
          <span key="1-2">{"(2) "} <Fraction num="2" den="3" /></span>,
          <span key="1-3">{"(3) "} <Fraction num="3" den="5" /></span>,
          <span key="1-4">{"(4) "} <Fraction num="3" den="4" /></span>,
          <span key="1-5">{"(5) "} <Fraction num="7" den="8" /></span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 24"}</span>,
          <span key="2-2">{"(2) 12"}</span>,
          <span key="2-3">{"(3) 15"}</span>,
          <span key="2-4">{"(4) 36"}</span>,
          <span key="2-5">{"(5) 30"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"(1) 1 (ຂວດໃບທີ 1 ມີນ້ຳຫຼາຍກວ່າ: 5/8 = 15/24 L, ຂວດໃບທີ 2 ມີ 7/12 = 14/24 L. ຫຼາຍກວ່າກັນ 15/24 - 14/24 = 1/24 L)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"(1) "} <Fraction num="2" den="3" /> {" (ຄັດຈ້ອນ 120/180 = 12/18 = 2/3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"(1) ນາງ ວັນເພັງ (ສົມພອນໄດ້ 18/24 = 3/4 = 6/8, ວັນເພັງໄດ້ 14/16 = 7/8. ດັ່ງນັ້ນ 7/8 > 6/8)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"(1) 20 (ຊອກ LCM ຂອງພູດ 4, 5, 10 = 20)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ການຄັດຈ້ອນ ແລະ ຂຶ້ນພູດຮ່ວມຊ່ວຍໃຫ້ພວກເຮົາມອງເຫັນຄວາມສຳພັນລະຫວ່າງເລກສ່ວນໄດ້ງ່າຍຂຶ້ນ ແລະ ເປັນກຸນແຈສຳຄັນໃນການບວກລົບເລກສ່ວນເດີ້!"
  }
};
