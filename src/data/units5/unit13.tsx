import React from "react";
import { UnitData } from "../units2";

export const unit13Data: UnitData = {
  unitNumber: 13,
  unitTitle: "ອັດຕາສ່ວນພົວພັນ ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບອັດຕາສ່ວນພົວພັນ (比例) ແລະ ອັດຕາສ່ວນພົວພັນປີ້ນ (反比例), ການຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງ ແລະ ການຊອກຫາສູດການພົວພັນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 146-159",
  keyPoints: {
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ອັດຕາສ່ວນພົວພັນ ແລະ ພົວພັນປີ້ນ (Proportion & Inverse)"}
        </h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
          {/* Proportion */}
          <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px" }}>
            <strong style={{ fontSize: "18px", color: "#2E7D32" }}>{"ອັດຕາສ່ວນພົວພັນ (Proportion)"}</strong>
            <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ກໍເພີ່ມຂຶ້ນສະໝໍ່າສະເໝີ."}</p>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>{"ສູດ: y = a × x"}</div>
          </div>

          {/* Inverse Proportion */}
          <div style={{ flex: "1 1 240px", padding: "16px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px" }}>
            <strong style={{ fontSize: "18px", color: "#E65100" }}>{"ອັດຕາສ່ວນພົວພັນປີ້ນ (Inverse)"}</strong>
            <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ເມື່ອ x ເພີ່ມຂຶ້ນ, y ຈະຫຼຸດລົງສະໝໍ່າສະເໝີ."}</p>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>{"ສູດ: y = a ÷ x (ຫຼື x × y = a)"}</div>
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
              <span>{"(2) ຈຳນວນ (B) 在ຕາຕະລາງແມ່ນຈັກ cm?"}</span>
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
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 📐 ຖ້າຊື້ດິນສໍ 3 ກ້ານ ລາຄາ 15 ກີບ. ຖ້າຊື້ 9 ກ້ານ ຕ້ອງຈ່າຍເງິນ 45 ກີບ. ຄວາມສຳພັນລະຫວ່າງຈຳນວນດິນສໍ ແລະ ລາຄາ ແມ່ນອັດຕາສ່ວນພົວພັນ ຫຼື ອັດຕາສ່ວນພົວພັນປີ້ນ?"}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", paddingLeft: "16px", marginTop: "4px" }}>
              <span>{"ຄຳຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
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
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
