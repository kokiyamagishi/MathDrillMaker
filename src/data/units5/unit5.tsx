import React from "react";
import { UnitData } from "../units2";

const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "middle", alignItems: "center", padding: "0 4px", fontSize: "0.95em", transform: "translateY(-0.05em)" }}>
    <span style={{ borderBottom: "1.5px solid currentColor", paddingBottom: "1px", lineHeight: 1, fontWeight: "bold" }}>{num}</span>
    <span style={{ paddingTop: "1.5px", lineHeight: 1, fontWeight: "bold" }}>{den}</span>
  </span>
);

export const unit5Data: UnitData = {
    unitNumber: 5,
    unitTitle: "ການຄູນ ແລະ ການຫານເລກສ່ວນ", // CN suffix to prevent overlap if required
    unitGoal:
      "ຮຽນຮູ້ວິທີການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ແລະ ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ ພ້ອມທັງການຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 46-57",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ການຄູນເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "#E3F2FD",
              border: "2px solid #2196F3",
              borderRadius: "8px",
            }}
          >
            {/* SVG Visual Explanation */}
            <div style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "6px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <svg width="500" height="130">
                {/* Cup 1 */}
                <rect x="10" y="15" width="24" height="70" fill="none" stroke="#2196F3" strokeWidth="2" rx="2"/>
                <rect x="10" y="65" width="24" height="20" fill="#90CAF9" rx="1"/>
                <text x="22" y="95" textAnchor="middle" style={{ fontSize: "11px" }}>{"2"}</text>
                <line x1="16" y1="99" x2="28" y2="99" stroke="black" strokeWidth="1"/>
                <text x="22" y="120" textAnchor="middle" style={{ fontSize: "11px" }}>{"7"}</text>

                {/* Cup 2 */}
                <rect x="42" y="15" width="24" height="70" fill="none" stroke="#2196F3" strokeWidth="2" rx="2"/>
                <rect x="42" y="65" width="24" height="20" fill="#90CAF9" rx="1"/>
                <text x="54" y="95" textAnchor="middle" style={{ fontSize: "11px" }}>{"2"}</text>
                <line x1="48" y1="99" x2="60" y2="99" stroke="black" strokeWidth="1"/>
                <text x="54" y="120" textAnchor="middle" style={{ fontSize: "11px" }}>{"7"}</text>

                {/* Cup 3 */}
                <rect x="74" y="15" width="24" height="70" fill="none" stroke="#2196F3" strokeWidth="2" rx="2"/>
                <rect x="74" y="65" width="24" height="20" fill="#90CAF9" rx="1"/>
                <text x="86" y="95" textAnchor="middle" style={{ fontSize: "11px" }}>{"2"}</text>
                <line x1="80" y1="99" x2="92" y2="99" stroke="black" strokeWidth="1"/>
                <text x="86" y="120" textAnchor="middle" style={{ fontSize: "11px" }}>{"7"}</text>

                {/* Operators */}
                <text x="110" y="55" style={{ fontSize: "18px", fontWeight: "bold" }} fill="#1565C0">{"× 3"}</text>
                <text x="146" y="55" style={{ fontSize: "18px", fontWeight: "bold" }} fill="#1565C0">{"→"}</text>

                {/* Result Cup */}
                <rect x="175" y="15" width="28" height="70" fill="none" stroke="#1565C0" strokeWidth="2.5" rx="2"/>
                <rect x="175" y="25" width="28" height="60" fill="#2196F3" rx="1"/>
                <text x="189" y="95" textAnchor="middle" style={{ fontSize: "12px", fontWeight: "bold" }} fill="#1565C0">{"6"}</text>
                <line x1="181" y1="99" x2="197" y2="99" stroke="#1565C0" strokeWidth="1.5"/>
                <text x="189" y="120" textAnchor="middle" style={{ fontSize: "12px", fontWeight: "bold" }} fill="#1565C0">{"7"}</text>
              </svg>
            </div>
            
            <div style={{ flex: "1 1 250px", fontSize: "22px", lineHeight: "1.6" }}>
              <div style={{ fontWeight: "bold", color: "#1565C0", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {"ສູດ: "}
                  <Fraction num="a" den="b" />
                  {" × c = "}
                  <Fraction num="a × c" den="b" />
                </span>
                <span style={{ color: "#aaa", fontWeight: "normal" }}>{"|"}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {"ຕົວຢ່າງ: "}
                  <strong>
                    <Fraction num="2" den="7" />
                    {" × 3 = "}
                    <Fraction num="2 × 3" den="7" />
                    {" = "}
                    <Fraction num="6" den="7" />
                  </strong>
                </span>
              </div>
              <div style={{ fontSize: "16px", color: "#555", marginTop: "8px" }}>
                {"* ເອົາຈຳນວນຖ້ວນຄູນໃສ່ຈຳນວນພູດ (ຕົວເທິງ) ເດີ້!"}
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: "28px", color: "#2E7D32", margin: 0 }}>
            {"2. ການຫານເລກສ່ວນໃຫ້ຈຳນວນຖ້ວນ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
            }}
          >
            {/* SVG Visual Explanation */}
            <div style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "6px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <svg width="500" height="130">
                {/* Block 1 (4/5) */}
                <rect x="10" y="20" width="80" height="50" fill="none" stroke="#4CAF50" strokeWidth="2" rx="2"/>
                <rect x="10" y="20" width="64" height="50" fill="#C8E6C9" rx="1"/>
                {/* Grid lines */}
                <line x1="26" y1="20" x2="26" y2="70" stroke="#4CAF50" strokeWidth="1"/>
                <line x1="42" y1="20" x2="42" y2="70" stroke="#4CAF50" strokeWidth="1"/>
                <line x1="58" y1="20" x2="58" y2="70" stroke="#4CAF50" strokeWidth="1"/>
                <line x1="74" y1="20" x2="74" y2="70" stroke="#4CAF50" strokeWidth="1"/>
                <text x="50" y="93" textAnchor="middle" style={{ fontSize: "11px" }}>{"4"}</text>
                <line x1="44" y1="97" x2="56" y2="97" stroke="black" strokeWidth="1"/>
                <text x="50" y="120" textAnchor="middle" style={{ fontSize: "11px" }}>{"5"}</text>

                {/* Operators */}
                <text x="102" y="52" style={{ fontSize: "18px", fontWeight: "bold" }} fill="#2E7D32">{"÷ 3"}</text>
                <text x="136" y="52" style={{ fontSize: "18px", fontWeight: "bold" }} fill="#2E7D32">{"→"}</text>

                {/* Block 2 (4/15) */}
                <rect x="160" y="20" width="80" height="50" fill="none" stroke="#2E7D32" strokeWidth="2.5" rx="2"/>
                <rect x="160" y="20" width="64" height="50" fill="#E8F5E9" rx="1"/>
                <rect x="160" y="20" width="64" height="16" fill="#4CAF50" rx="1"/>
                {/* Grid lines */}
                <line x1="176" y1="20" x2="176" y2="70" stroke="#2E7D32" strokeWidth="1"/>
                <line x1="192" y1="20" x2="192" y2="70" stroke="#2E7D32" strokeWidth="1"/>
                <line x1="208" y1="20" x2="208" y2="70" stroke="#2E7D32" strokeWidth="1"/>
                <line x1="224" y1="20" x2="224" y2="70" stroke="#2E7D32" strokeWidth="1"/>
                <line x1="160" y1="36" x2="240" y2="36" stroke="#2E7D32" strokeWidth="1" strokeDasharray="2,2"/>
                <line x1="160" y1="53" x2="240" y2="53" stroke="#2E7D32" strokeWidth="1" strokeDasharray="2,2"/>
                <text x="200" y="93" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#2E7D32">{"4"}</text>
                <line x1="192" y1="97" x2="208" y2="97" stroke="#2E7D32" strokeWidth="1.5"/>
                <text x="200" y="120" textAnchor="middle" style={{ fontSize: "11px", fontWeight: "bold" }} fill="#2E7D32">{"15"}</text>
              </svg>
            </div>

            <div style={{ flex: "1 1 250px", fontSize: "22px", lineHeight: "1.6" }}>
              <div style={{ fontWeight: "bold", color: "#2E7D32", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {"ສູດ: "}
                  <Fraction num="a" den="b" />
                  {" ÷ c = "}
                  <Fraction num="a" den="b × c" />
                </span>
                <span style={{ color: "#aaa", fontWeight: "normal" }}>{"|"}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {"ຕົວຢ່າງ: "}
                  <strong>
                    <Fraction num="4" den="5" />
                    {" ÷ 3 = "}
                    <Fraction num="4" den="5 × 3" />
                    {" = "}
                    <Fraction num="4" den="15" />
                  </strong>
                </span>
              </div>
              <div style={{ fontSize: "16px", color: "#555", marginTop: "8px" }}>
                {"* ເອົາຈຳນວນຖ້ວນຄູນໃສ່ພູດ (ຕົວລຸ່ມ) ເດີ້!"}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້ (ການຄູນ): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(1) "}</span>
                <Fraction num="2" den="7" />
                <span>{" × 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(2) "}</span>
                <Fraction num="5" den="8" />
                <span>{" × 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້ (ການຫານ): "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(1) "}</span>
                <Fraction num="4" den="5" />
                <span>{" ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(2) "}</span>
                <Fraction num="6" den="7" />
                <span>{" ÷ 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "🥛 ໃຊ້ວິທີການຄູນ ແລະ ຫານເລກສ່ວນ! ໃຫ້ຄູນໃສ່ຈຳນວນພູດສຳລັບການຄູນ, ແລະ ຄູນໃສ່ພູດສຳລັບການຫານເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນລຸ່ມນີ້ (ການຄູນ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                  {"🥤 ນ້ຳໝາກໄມ້ 1 ກະປ໋ອງ ມີປະລິມານ "}
                  <Fraction num="2" den="3" />
                  {" L. ຖ້າມີນ້ຳໝາກໄມ້ປະເພດດຽວກັນ 4 ກະປ໋ອງ ຈະມີປະລິມານນ້ຳທັງໝົດຈັກ L? (ຂຽນເປັນເລກສ່ວນ)"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"L"}</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນລຸ່ມນີ້ (ການຫານ): "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                  {"🥛 ມີນົມ "}
                  <Fraction num="3" den="4" />
                  {" L. ແບ່ງໃຫ້ 3 ຄົນດື່ມເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ນົມຈັກ L? (ຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"L"}</span>
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເພື່ອທົດສອບຄວາມເຂົ້າໃຈ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(1) "}</span>
                <Fraction num="3" den="10" />
                <span>{" × 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(2) "}</span>
                <Fraction num="2" den="9" />
                <span>{" × 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(3) "}</span>
                <Fraction num="8" den="9" />
                <span>{" ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span style={{ fontSize: "16px", color: "#888" }}>{"(ຄັດຈ້ອນເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span>{"(4) "}</span>
                <Fraction num="5" den="6" />
                <span>{" ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາເລກສ່ວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                  {"(1) 🌱 ໃສ່ຝຸ່ນດິນ 1 ຕາແມັດ ຕ້ອງການຝຸ່ນ "}
                  <Fraction num="2" den="5" />
                  {" kg. ຖ້າໃສ່ຝຸ່ນດິນ 3 ຕາແມັດ ຈະຕ້ອງໃຊ້ຝຸ່ນທັງໝົດຈັກ kg?"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"kg"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                  {"(2) 🎗️ ມີຣິບບິນຍາວ "}
                  <Fraction num="8" den="5" />
                  {" m. ຖ້າຕັດແບ່ງເປັນ 4 ສ່ວນເທົ່າກັນ, ຣິບບິນແຕ່ລະເສັ້ນຈະຍາວຈັກ m? (ຄັດຈ້ອນເປັນເລກສ່ວນຂັ້ນຕ່ຳ)"}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"m"}</span>
                </div>
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
            <span key="u5-ans-1-1">{"(1) 6/7"}</span>,
            <span key="u5-ans-1-2">{"(2) 5/4 (ຍ້ອນ 10/8 = 5/4)"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u5-ans-2-1">{"(1) 4/15"}</span>,
            <span key="u5-ans-2-2">{"(2) 3/7 (ຍ້ອນ 6/14 = 3/7)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u5-ans-t1-1">{"8/3 L ຫຼື 2 2/3 L (ຍ້ອນ 2/3 × 4 = 8/3)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u5-ans-t2-1">{"1/4 L (ຍ້ອນ 3/4 ÷ 3 = 3/12 = 1/4)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="u5-ans-s1-1">{"(1) 3/2 (ຍ້ອນ 15/10 = 3/2)"}</span>,
            <span key="u5-ans-s1-2">{"(2) 8/9"}</span>,
            <span key="u5-ans-s1-3">{"(3) 2/9 (ຍ້ອນ 8/36 = 2/9)"}</span>,
            <span key="u5-ans-s1-4">{"(4) 5/18"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="u5-ans-s2-1">{"(1) 6/5 kg ຫຼື 1 1/5 kg (ຍ້ອນ 2/5 × 3 = 6/5)"}</span>,
            <span key="u5-ans-s2-2">{"(2) 2/5 m (ຍ້ອນ 8/5 ÷ 4 = 8/20 = 2/5)"}</span>,
          ],
        },
      ],
      advice:
        "ຢ່າລືມກວດເບິ່ງສະເໝີວ່າ ເລກສ່ວນທີ່ໄດ້ສາມາດຄັດຈ້ອນໃຫ້ເປັນເລກສ່ວນຂັ້ນຕ່ຳໄດ້ບໍ່! ການຄັດຈ້ອນຈະຊ່ວຍໃຫ້ຄຳຕອບຂອງເຮົາຖືກຕ້ອງສົມບູນເດີ້.",
    },
  };
