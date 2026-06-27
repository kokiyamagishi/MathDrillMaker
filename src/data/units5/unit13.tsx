import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ອັດຕາສ່ວນພົວພັນ ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນພົວພັນ  ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ , ການຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງ ແລະ ການຊອກຫາສູດການພົວພັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 146-159",
  keyPoints: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ"}
        </h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
          
          {/* Proportion */}
          <div style={{ flex: "1 1 300px", padding: "20px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px" }}>
            <strong style={{ fontSize: "20px", color: "#2E7D32" }}>{"ອັດຕາສ່ວນພົວພັນ"}</strong>
            <p style={{ fontSize: "16px", margin: "8px 0 16px 0", color: "#444" }}>
              {"ເມື່ອ x ເພີ່ມຂຶ້ນ 2, 3 ເທື່ອ, y ກໍເພີ່ມຂຶ້ນ 2, 3 ເທື່ອສະໝໍ່າສະເໝີ."}
            </p>
            
            {/* SVG Visual */}
            <div style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "6px", marginBottom: "16px", display: "flex", justifyContent: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
              <svg width="240" height="130">
                {/* Step 1 */}
                <rect x="35" y="70" width="20" height="20" fill="#81C784" rx="1"/>
                <text x="45" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=1"}</text>
                <text x="45" y="65" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=2"}</text>

                {/* Step 2 */}
                <rect x="95" y="50" width="20" height="40" fill="#4CAF50" rx="1"/>
                <text x="105" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=2"}</text>
                <text x="105" y="45" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=4"}</text>

                {/* Step 3 */}
                <rect x="155" y="30" width="20" height="60" fill="#2E7D32" rx="1"/>
                <text x="165" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=3"}</text>
                <text x="165" y="25" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=6"}</text>

                {/* Scaling arrows */}
                <path d="M 45,110 Q 105,130 165,110" fill="none" stroke="#2E7D32" strokeWidth="1" strokeDasharray="2,2"/>
                <polygon points="165,110 159,107 162,114" fill="#2E7D32"/>
                <text x="105" y="129" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#2E7D32">{"× 3"}</text>

                <path d="M 45,55 Q 105,10 165,20" fill="none" stroke="red" strokeWidth="1" strokeDasharray="2,2"/>
                <polygon points="165,20 159,17 162,23" fill="red"/>
                <text x="105" y="18" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="red">{"× 3"}</text>
              </svg>
            </div>

            <div style={{ fontWeight: "bold", fontSize: "20px", color: "#1b5e20" }}>{"ສູດ: y = a × x"}</div>
          </div>

          {/* Inverse Proportion */}
          <div style={{ flex: "1 1 300px", padding: "20px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px" }}>
            <strong style={{ fontSize: "20px", color: "#E65100" }}>{"ອັດຕາສ່ວນພົວພັນປີ້ນ"}</strong>
            <p style={{ fontSize: "16px", margin: "8px 0 16px 0", color: "#444", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
              {"ເມື່ອ x ເພີ່ມຂຶ້ນ 2, 4 ເທື່ອ, y ຈະຫຼຸດລົງ 2, 4 ເທື່ອ ("}
              <Fraction num="1" den="2" />
              {", "}
              <Fraction num="1" den="4" />
              {")."}
            </p>

            {/* SVG Visual */}
            <div style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "6px", marginBottom: "16px", display: "flex", justifyContent: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
              <svg width="240" height="130">
                {/* Step 1 */}
                <rect x="35" y="30" width="20" height="60" fill="#FFB74D" rx="1"/>
                <text x="45" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=1"}</text>
                <text x="45" y="25" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=8"}</text>

                {/* Step 2 */}
                <rect x="95" y="60" width="20" height="30" fill="#FF9800" rx="1"/>
                <text x="105" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=2"}</text>
                <text x="105" y="55" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=4"}</text>

                {/* Step 3 (actually x=4 for easy 1/4th division) */}
                <rect x="155" y="75" width="20" height="15" fill="#F57C00" rx="1"/>
                <text x="165" y="110" textAnchor="middle" style={{ fontSize: "10px" }} fill="#777">{"x=4"}</text>
                <text x="165" y="70" textAnchor="middle" style={{ fontSize: "10px", fontWeight: "bold" }}>{"y=2"}</text>
 
                {/* Scaling arrows */}
                <path d="M 45,110 Q 105,135 165,110" fill="none" stroke="#F57C00" strokeWidth="1" strokeDasharray="2,2"/>
                <polygon points="165,110 159,107 162,114" fill="#F57C00"/>
                <text x="105" y="129" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="#F57C00">{"× 4"}</text>
 
                <path d="M 45,5 Q 105,0 165,45" fill="none" stroke="red" strokeWidth="1" strokeDasharray="2,2"/>
                <polygon points="165,45 159,42 162,48" fill="red"/>
                <text x="105" y="18" textAnchor="middle" style={{ fontSize: "9px", fontWeight: "bold" }} fill="red">{"÷ 4"}</text>
              </svg>
            </div>

            <div style={{ fontWeight: "bold", fontSize: "20px", color: "#e65100" }}>{"ສູດ: y = a ÷ x  (ຫຼື x × y = a)"}</div>
          </div>

        </div>
      </div>
    ),
  },
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງສັງເກດຕາຕະລາງ ແລະ ຊອກຫາຄ່າ (A) ແລະ (B): "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div style={{ overflowX: "auto", padding: "8px" }}>
            <table style={{ minWidth: "300px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວງກວ້າງ x (cm)"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"2"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"3"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"4"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"6"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ລວງຍາວ y (cm)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(A)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(B)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc", backgroundColor: "#FFE082" }}>{"(C)"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "8px 16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ຈຳນວນ (A) ໃນຕາຕະລາງແມ່ນຈັກ cm?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຈຳນວນ (B) ໃນຕາຕະລາງແມ່ນຈັກ cm?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
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
            {"ຈົ່ງຊອກຫາຄ່າ (C) ແລະ ວິເຄາະຄວາມສຳພັນ: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "8px 16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(1) ຈຳນວນ (C) ໃນຕາຕະລາງແມ່ນຈັກ cm?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ຄວາມສຳພັນລະຫວ່າງ x ແລະ y ນີ້ ແມ່ນອັດຕາສ່ວນພົວພັນປີ້ນ ຫຼື ບໍ່?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText: "⚙️ ໂຈດບັນຫາຟັນເຟືອງ ແລະ ທໍ່ນ້ຳ ແມ່ນເປັນອັດຕາສ່ວນພົວພັນປີ້ນ! ຜົນຄູນ x × y ຈະເທົ່າກັນສະເໝີເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາຟັນເຟືອງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) ⚙️ ຟັນເຟືອງ A ມີແຂ້ວ 24 ແຂ້ວ ປິ່ນໄດ້ 6 ຮອບຕໍ່ນາທີ. ມັນຂົບກັບຟັນເຟືອງ B ທີ່ມີແຂ້ວ 16 ແຂ້ວ. ຟັນເຟືອງ B ຈະປິ່ນໄດ້ຈັກຮອບຕໍ່ນາທີ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ຮອບ/ນາທີ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາທໍ່ນ້ຳ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 💧 ຖ້າໃຊ້ທໍ່ນ້ຳ 2 ທໍ່ ຈະປ່ອຍນ້ຳໃສ່ອ່າງເຕັມໃນເວລາ 60 ນາທີ. ຖ້າຕ້ອງການໃຫ້ອ່າງເຕັມໃນເວລາ 30 ນາທີ, ຈະຕ້ອງໃຊ້ທໍ່ນ້ຳຂະໜາດດຽວກັນຈັກທໍ່?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ທໍ່"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມສຳພັນຂອງລາຄາດິນສໍ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 📐 ຖ້າຊື້ດິນສໍ 3 ກ້ານ ລາຄາ 15 ກີບ. ຖ້າຊື້ 9 ກ້ານ ຕ້ອງຈ່າຍເງິນ 45 ກີບ. ຄວາມສຳພັນລະຫວ່າງຈຳນວນດິນສໍ ແລະ ລາຄາ ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ອັດຕາສ່ວນພົວພັນປີ້ນ?"}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
              <span>{"ຄຳຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາຄວາມໄວລົດ ແລະ ເວລາ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 🚗 ຖ້າລົດຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວ 60 km/h ຈະໃຊ້ເວລາ 4 ຊົ່ວໂມງເພື່ອຮອດຈຸດໝາຍ. ຖ້າແລ່ນດ້ວຍຄວາມໄວ 80 km/h, ຈະໃຊ້ເວລາຈັກຊົ່ວໂມງ?"}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
              <span>{"ຄຳຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              <span>{"ຊົ່ວໂມງ"}</span>
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
          <span key="u13-ans-1-1">{"(1) 8 (ຍ້ອນ 24 ÷ 3 = 8)"}</span>,
          <span key="u13-ans-1-2">{"(2) 6 (ຍ້ອນ 24 ÷ 4 = 6)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u13-ans-2-1">{"(1) 4 (ຍ້ອນ 24 ÷ 6 = 4)"}</span>,
          <span key="u13-ans-2-2">{"(2) ແມ່ນ (ຍ້ອນຜົນຄູນ x × y = 24 ຄົງທີ່ສະເໝີ)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u13-ans-t1-1">{"(1) 9 ຮອບ (ຍ້ອນ 24 × 6 = 144, 144 ÷ 16 = 9)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u13-ans-t2-1">{"(1) 4 ທໍ່ (ຍ້ອນ 2 × 60 = 120, 120 ÷ 30 = 4)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u13-ans-s1-1">{"(1) ອັດຕາສ່ວນພົວພັນ (ຍ້ອນເມື່ອຈຳນວນດິນສໍເພີ່ມຂຶ້ນ 3 ເທື່ອ, ລາຄາກໍເພີ່ມຂຶ້ນ 3 ເທື່ອ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u13-ans-s2-1">{"(1) 3 ຊົ່ວໂມງ (ຍ້ອນໄລຍະທາງແມ່ນ 60 × 4 = 240 km, ດັ່ງນັ້ນ 240 ÷ 80 = 3)"}</span>,
        ],
      },
    ],
    advice: "ການຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ ຊ່ວຍໃຫ້ເຮົາຄາດຄະເນການປ່ຽນແປງຂອງສິ່ງຕ່າງໆໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງຊັດເຈນ!",
  },
};
