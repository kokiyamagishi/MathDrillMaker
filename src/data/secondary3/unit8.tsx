import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit8Data: UnitData = {
  unitNumber: 8,
  unitTitle: "ພາກທີ III - ບົດທີ 12: ຕຳລາຂັ້ນໜຶ່ງ",
  unitGoal: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈນິຍາມຂອງຕຳລາຂັ້ນໜຶ່ງ y = ax + b, ການກຳນົດສຳປະສິດສະໂລບ a ແລະ ຈຸດຕັດແກນ y (b), ການແຕ້ມເສັ້ນສະແດງ ແລະ ການຊອກຫາຄ່າຂອງຕຳລາ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 61-66",
  subSections: [
    {
      title: "1. ສຳປະສິດ ແລະ ຈຸດຕັດແກນ y ຂອງຕຳລາຂັ້ນໜຶ່ງ",
      keyPoint: {
        title: "ຮູບແບບທົ່ວໄປຂອງຕຳລາຂັ້ນໜຶ່ງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຕຳລາຂັ້ນໜຶ່ງແມ່ນຕຳລາທີ່ມີຮູບແບບທົ່ວໄປແມ່ນ "} <span className="math" style={{ fontWeight: "bold" }}><i>y</i>{" = ax + b"}</span> {" (ໃນນັ້ນ a ແລະ b ແມ່ນຈຳນວນຈິງ ແລະ a ≠ 0):"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• "} <span className="math" style={{ fontWeight: "bold" }}>{"a"}</span> {" ເອີ້ນວ່າ "} <span style={{ fontWeight: "bold" }}>{"ສຳປະສິດສະໂລບ"}</span> {" ຫຼື ອັດຕາການປ່ຽນແປງ ທີ່ສະແດງເຖິງຄວາມຊັນຂອງເສັ້ນຊື່."}</div>
              <div>{"• "} <span className="math" style={{ fontWeight: "bold" }}>{"b"}</span> {" ເອີ້ນວ່າ "} <span style={{ fontWeight: "bold" }}>{"ຈຸດຕັດແກນ "}<i>y</i></span> {" ເຊິ່ງແມ່ນຈຸດປະສານງານ (0, b) ທີ່ເສັ້ນຊື່ຕັດແກນຕັ້ງ."}</div>
            </div>

            {/* Linear Function Graph SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "10px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span>{"ເສັ້ນສະແດງຂອງຕຳລາ: "}<i>y</i>{" = 2"}<i>x</i>{" + 1"}</span>
                <svg viewBox="0 0 400 240" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
                  {/* Grid background */}
                  <path d="M 0,40 L 400,40 M 0,80 L 400,80 M 0,120 L 400,120 M 0,160 L 400,160 M 0,200 L 400,200" stroke="#E0E0E0" strokeWidth="1" />
                  <path d="M 40,0 L 40,240 M 80,0 L 80,240 M 120,0 L 120,240 M 160,0 L 160,240 M 200,0 L 200,240 M 240,0 L 240,240 M 280,0 L 280,240 M 320,0 L 320,240 M 360,0 L 360,240" stroke="#E0E0E0" strokeWidth="1" />
                  
                  {/* Axes */}
                  <line x1="20" y1="160" x2="380" y2="160" stroke="#37474F" strokeWidth="3" /> {/* x-axis */}
                  <line x1="200" y1="20" x2="200" y2="220" stroke="#37474F" strokeWidth="3" /> {/* y-axis */}
                  <text x="370" y="184" fill="#37474F" fontSize="16" fontWeight="bold"><i>x</i></text>
                  <text x="210" y="30" fill="#37474F" fontSize="16" fontWeight="bold"><i>y</i></text>

                  {/* Line y = 2x + 1. Scale: Origin (100,80), 1 unit = 20px. Point (0,1) -> (100, 60), Point (1,3) -> (120, 20) */}
                  <line x1="120" y1="240" x2="280" y2="-80" stroke="#E65100" strokeWidth="5" />

                  {/* Intercept Point (0, 1) */}
                  <circle cx="200" cy="120" r="7" fill="#D32F2F" />
                  <text x="212" y="126" fill="#D32F2F" fontSize="16" fontWeight="bold">{"(0, 1)"}</text>
                  
                  {/* Slope indication */}
                  <path d="M 200,120 L 240,120 L 240,40" fill="none" stroke="#2E7D32" strokeWidth="3" strokeDasharray="3,3" />
                  <text x="220" y="140" fill="#2E7D32" fontSize="14">{"ໄປຂວາ 1"}</text>
                  <text x="248" y="90" fill="#2E7D32" fontSize="14">{"ຂຶ້ນເທິງ 2"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈົ່ງຈື່ວ່າ ສຳປະສິດສະໂລບ a ບອກເຖິງຄວາມຊັນ (ຖ້າ a > 0 ເສັ້ນສະແດງຈະຂຶ້ນ, ຖ້າ a < 0 ເສັ້ນສະແດງຈະລົງ) ແລະ b ບອກຈຸດຕັດແກນ y ເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງກຳນົດສຳປະສິດສະໂລບ a ແລະ ຈຸດຕັດແກນ "}<i>y</i>{" (b) ຂອງຕຳລາຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຕຳລາ "} <span className="math"><i>y</i>{" = 3"}<i>x</i>{" + 5"}</span> {" ມີຄ່າຂອງ a ແລະ b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຕຳລາ "} <span className="math"><i>y</i>{" = -2"}<i>x</i>{" + 7"}</span> {" ມີຄ່າຂອງ a ແລະ b ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຕຳລາ "} <span className="math"><i>y</i>{" = 4"}<i>x</i>{" - 9"}</span> {" ມີຄ່າຂອງ a ແລະ b ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາສົມຜົນຕຳລາຂັ້ນໜຶ່ງ "}<i>y</i>{" = ax + b ຈາກເງື່ອນໄຂລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຖ້າສຳປະສິດສະໂລບ "} <span className="math">{"a = 4"}</span> {" ແລະ ຈຸດຕັດແກນ "}<i>y</i>{" ແມ່ນ "} <span className="math">{"b = -3"}</span> {", ສົມຜົນແມ່ນຫຍັງ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າເສັ້ນສະແດງຂະໜານກັບ "} <span className="math"><i>y</i>{" = -5"}<i>x</i></span> {" ແລະ ຕັດແກນ "}<i>y</i>{" ຢູ່ເມັດ "} <span className="math">{"(0, 2)"}</span> {", ສົມຜົນແມ່ນຫຍັງ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ການແທນຄ່າ ແລະ ຈຸດຕັດແກນ x ຂອງເສັ້ນສະແດງ",
      keyPoint: {
        title: "ການຊອກຫາຈຸດພິເສດເທິງເສັ້ນສະແດງ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການຊອກຫາຈຸດຕັດແກນນອນ (ແກນ "}<i>x</i>{") ແລະ ຄ່າຂອງຕຳລາຂັ້ນໜຶ່ງ:"}
            </p>
            
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div>{"• "} <span style={{ fontWeight: "bold" }}>{"ການຫາຄ່າ f("}<i>x</i>{"):"}</span> {" ແທນຄ່າ "}<i>x</i>{" ທີ່ກຳນົດໃສ່ສົມຜົນ ເພື່ອຊອກຫາຄ່າຂອງ "}<i>y</i>{"."}</div>
              <div>{"• "} <span style={{ fontWeight: "bold" }}>{"ຈຸດຕັດແກນ "}<i>x</i>{":"}</span> {" ແມ່ນຈຸດທີ່ "}<i>y</i>{" = 0. ດັ່ງນັ້ນ ເຮົາແກ້ສົມຜົນ ax + b = 0 ➔ "}<i>x</i>{" = "} <Fraction num="-b" den="a" /> {" ຈະໄດ້ຈຸດຕັດແມ່ນ ("} <Fraction num="-b" den="a" /> {", 0)."}</div>
              <div style={{ fontWeight: "bold", color: "#D84315" }}>{"• ຕົວຢ່າງ: ຕຳລາ "}<i>y</i>{" = 2"}<i>x</i>{" - 6 ➔ ໃຫ້ "}<i>y</i>{" = 0 ➔ 2"}<i>x</i>{" - 6 = 0 ➔ 2"}<i>x</i>{" = 6 ➔ "}<i>x</i>{" = 3."}</div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຈຸດຕັດແກນ y ໃຫ້ແທນ x = 0, ສ່ວນຈຸດຕັດແກນ x ແມ່ນໃຫ້ແທນ y = 0 ເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຄິດໄລ່ຫາຄ່າຂອງ "}<i>y</i>{" ຫຼື f("}<i>x</i>{") ຈາກຄ່າ "}<i>x</i>{" ທີ່ກຳນົດໃຫ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math"><i>y</i>{" = 3"}<i>x</i>{" - 1"}</span> {". ຖ້າຫາກ "} <span className="math"><i>x</i>{" = 4"}</span> {", ຄ່າຂອງ "}<i>y</i>{" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math"><i>y</i>{" = -4"}<i>x</i>{" + 9"}</span> {". ຖ້າຫາກ "} <span className="math"><i>x</i>{" = 2"}</span> {", ຄ່າຂອງ "}<i>y</i>{" ແມ່ນເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ໃຫ້ຕຳລາ "} <span className="math"><i>y</i>{" = "} <Fraction num="1" den="2" /> <i>x</i>{" + 3"}</span> {". ຖ້າຫາກ "} <span className="math"><i>x</i>{" = 6"}</span> {", ຄ່າຂອງ "}<i>y</i>{" ແມ່ນເທົ່າໃດ?"}</span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຕົວປະສານງານແກນ "}<i>x</i>{" (ຄ່າຂອງ "}<i>x</i>{") ທີ່ເປັນຈຸດຕັດແກນ "}<i>x</i>{": "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຈຸດຕັດແກນ "}<i>x</i>{" ຂອງເສັ້ນສະແດງຕຳລາ "} <span className="math"><i>y</i>{" = 2"}<i>x</i>{" - 8"}</span> {" ມີຄ່າ "}<i>x</i>{" ເທົ່າໃດ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຈຸດຕັດແກນ "}<i>x</i>{" ຂອງເສັ້ນສະແດງຕຳລາ "} <span className="math"><i>y</i>{" = -3"}<i>x</i>{" + 12"}</span> {" ມີຄ່າ "}<i>x</i>{" ເທົ່າໃດ?"}</span>
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
    hintText: "💡 ບົດທ້າທາຍ: ສ້າງລະບົບສົມຜົນຈາກສອງເມັດທີ່ກຳນົດໃຫ້ ເພື່ອຊອກຫາຄ່າຂອງ a ແລະ b ຢ່າງລະອຽດເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາສົມຜົນເສັ້ນຊື່ຜ່ານສອງເມັດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ເສັ້ນຊື່ເສັ້ນໜຶ່ງຜ່ານສອງເມັດ "} <span className="math">{"A(1, 5)"}</span> {" ແລະ "} <span className="math">{"B(3, 11)"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງສຳປະສິດສະໂລບ a ຂອງເສັ້ນຊື່ນີ້."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: a ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາເມັດຕັດກັນຂອງສອງເສັ້ນສະແດງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ຈົ່ງຊອກຫາຄ່າປະສານງານ "}<i>x</i>{" ຂອງເມັດຕັດກັນລະຫວ່າງສອງເສັ້ນຊື່ "} <span className="math"><i>y</i>{" = 3"}<i>x</i>{" - 1"}</span> {" ແລະ "} <span className="math"><i>y</i>{" = "}<i>x</i>{" + 5"}</span> {". (ຄຳແນະນຳ: ໃຫ້ຕັ້ງສົມຜົນ 3"}<i>x</i>{" - 1 = "}<i>x</i>{" + 5 ແລ້ວແກ້ຫາ "}<i>x</i>{")"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: "}<i>x</i>{" ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
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
            {"ໂຈດບັນຫາການຕື່ມນ້ຳໃສ່ອ່າງ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນອ່າງນ້ຳມີນ້ຳຢູ່ແລ້ວ 20 ລີດ, ເມື່ອໄຂກ໊ອກຕື່ມນ້ຳໃສ່ຕື່ມໃນອັດຕາ 3 ລີດຕໍ່ນາທີ. ຂຽນເປັນຕຳລາແມ່ນ "} <span className="math"><i>y</i>{" = 3"}<i>x</i>{" + 20"}</span> {" (ລີດ) ໂດຍ "}<i>x</i>{" ແມ່ນເວລາເປັນນາທີ. ຖ້າໄຂກ໊ອກນ້ຳເປັນເວລາ 10 ນາທີ, ຈະມີນ້ຳທັງໝົດໃນອ່າງຈັກລີດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ມີນ້ຳທັງໝົດ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"ລີດ"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຫາຄ່າຕຳລາຈາກເງື່ອນໄຂເລີ່ມຕົ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ໃຫ້ຕຳລາຂັ້ນໜຶ່ງ "} <span className="math">{"f("}<i>x</i>{") = ax + b"}</span> {" ໂດຍຮູ້ວ່າ "} <span className="math">{"f(0) = 4"}</span> {" ແລະ "} <span className="math">{"f(2) = 10"}</span> {". ຈົ່ງຊອກຫາຄ່າຂອງ "} <span className="math">{"f(5)"}</span> {"."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: f(5) ="}</span>
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
          <span key="1">{"(1) a = 3, b = 5 (ເພາະວ່າທຽບໃສ່ຮູບແບບ "}<i>y</i>{" = ax + b ຈະໄດ້ a = 3, b = 5)"}</span>,
          <span key="2">{"(2) a = -2, b = 7 (ເພາະວ່າທຽບໃສ່ຮູບແບບ "}<i>y</i>{" = ax + b ຈະໄດ້ a = -2, b = 7)"}</span>,
          <span key="3">{"(3) a = 4, b = -9 (ເພາະວ່າທຽບໃສ່ຮູບແບບ "}<i>y</i>{" = ax + b ຈະໄດ້ a = 4, b = -9)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) "}<i>y</i>{" = 4"}<i>x</i>{" - 3 (ແທນ a = 4, b = -3 ໃສ່ສົມຜົນທົ່ວໄປ "}<i>y</i>{" = ax + b)"}</span>,
          <span key="5">{"(2) "}<i>y</i>{" = -5"}<i>x</i>{" + 2 (ເສັ້ນຊື່ຂະໜານກັນມີ a ເທົ່າກັນ ➔ a = -5, ແລະ ຕັດແກນ "}<i>y</i>{" ຢູ່ (0, 2) ➔ b = 2)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"3 (ຊອກຫາຄວາມຊັນຈາກສູດ a = ("}<i>y</i>{"₂ - "}<i>y</i>{"₁) / ("}<i>x</i>{"₂ - "}<i>x</i>{"₁) = (11 - 5) / (3 - 1) = 6 / 2 = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"3 (ຕັ້ງສົມຜົນ 3"}<i>x</i>{" - 1 = "}<i>x</i>{" + 5 ➔ 2"}<i>x</i>{" = 6 ➔ "}<i>x</i>{" = 3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"50 (ແທນ "}<i>x</i>{" = 10 ນາທີ ໃສ່ຕຳລາ "}<i>y</i>{" = 3(10) + 20 = 30 + 20 = 50 ລີດ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"19 (ຈາກ f(0) = b ➔ b = 4. ຈາກ f(2) = 2a + 4 = 10 ➔ 2a = 6 ➔ a = 3. ດັ່ງນັ້ນ f("}<i>x</i>{") = 3"}<i>x</i>{" + 4 ➔ f(5) = 3(5) + 4 = 19)"}</span>
        ]
      }
    ],
    advice: "ຕຳລາຂັ້ນໜຶ່ງເປັນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນເລຂາຄະນິດວິເຄາະ, ຟີຊິກສາດກ່ຽວກັບການເຄື່ອນທີ່ສະໝໍ່າສະເໝີ ແລະ ການຄິດໄລ່ທຸລະກິດ ໝັ່ນຝຶກຝົນເປັນປະຈຳເດີ້!"
  }
};
