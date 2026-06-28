import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";

export const unit2Data: UnitData = {
    unitNumber: 2,
    unitTitle: "ຈຳນວນແຕ່ 1 ເຖິງ 10 ແລະ 0",
    unitGoal: "ຮຽນຮູ້ການນັບຈຳນວນແຕ່ 1 ເຖິງ 10 ແລະ ຄວາມໝາຍຂອງເລກ 0",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 10〜21",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຝຶກນັບຈຳນວນ ແລະ ຂຽນຕົວເລກນຳກັນ."}</p>
          <div className="math-illustration" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>1</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>2</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>3</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>4</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>5</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎<br />🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>6</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎<br />🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>7</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎<br />🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>8</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎<br />🍎🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>9</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "20px", whiteSpace: "nowrap" }}>🍎🍎🍎🍎🍎<br />🍎🍎🍎🍎🍎</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "4px" }}>10</div>
            </div>
          </div>
          <p style={{ marginTop: "12px", textAlign: "center", fontSize: "22px", color: "#D32F2F", fontWeight: "bold", backgroundColor: "#FFEBEE", padding: "12px", borderRadius: "8px" }}>
            {"ຖ້າບໍ່ມີຫຍັງເລີຍ ເຮົາເອີ້ນວ່າ 0 (ສູນ)."}
          </p>
        </div>
      ),
      hint: {
        text: "ໃຊ້ນິ້ວມືຊ່ວຍນັບຈຳນວນໄດ້ເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງຕາມຈຳນວນຮູບ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍓" count={3} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍉" count={6} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="" count={0} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍊" count={8} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍒" count={2} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "30px", fontWeight: "bold" }, whiteSpace: "nowrap"}>{"(6) "}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍎" count={10} columns={10} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກທີ່ຖືກຕ້ອງໃສ່ໃນບັອກ (ລຳດັບຕົວເລກ): "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "22px", backgroundColor: "#F3E5F5", padding: "16px", borderRadius: "12px" }}>
  
  {/* 1行目 */}
  <div style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
    <span>1</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span>2</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span>4</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span>
  </div>

  {/* 2行目 */}
  <div style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
    <span>6</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span>7</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span>9</span><span style={{ margin: "0 4px" }, whiteSpace: "nowrap"}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span>
  </div>
</div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງນັບຈຳນວນສັດແຕ່ລະຊະນິດທີ່ຢູ່ໃນສວນ ແລ້ວຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ backgroundColor: "#ffffffff", padding: "16px", borderRadius: "12px", border: "2px solid #00BCD4" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px", fontSize: "24px", textAlign: "center" }}>
                  <span>🦆</span><span>🦋</span><span>🐸</span><span>🦆</span><span>🦋</span><span>🦋</span>
                  <span>🐸</span><span>🦆</span><span>🦆</span><span>🦋</span><span>🐸</span><span>🦋</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "16px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                  <span>🦆 =</span> <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                  <span>🦋 =</span> <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                  <span>🐸 =</span> <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px" }}>
                  <span>🐢 =</span> <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ນັບສັດແຕ່ລະຊະນິດຢ່າງລະມັດລະວັງ. ຖ້າບໍ່ມີສັດຊະນິດນັ້ນເລີຍ ຕ້ອງຕື່ມເລກຫຍັງນໍ?"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃສ່ໃນບັອກໃຫ້ເປັນລຳດັບ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }, whiteSpace: "nowrap"}>{"(1) "}</span>
                <span>0</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>2</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>4</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }, whiteSpace: "nowrap"}>{"(2) "}</span>
                <span>9</span><span>,</span>
                <span>8</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>5</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }, whiteSpace: "nowrap"}>{"(3) "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>7</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>9</span><span>,</span>
                <span>10</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }, whiteSpace: "nowrap"}>{"(4) "}</span>
                <span>10</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>8</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>6</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }, whiteSpace: "nowrap"}>{"(5) "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>2</span><span>,</span>
                <span>3</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>5</span>
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
            <span key="1">{"(1) 3"}</span>,
            <span key="2">{"(2) 6"}</span>,
            <span key="3">{"(3) 0"}</span>,
            <span key="4">{"(4) 8"}</span>,
            <span key="5">{"(5) 2"}</span>,
            <span key="6">{"(6) 10"}</span>,
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="7">{"3, 5, 8, 10"}</span>,
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="8">{"🦆 = 4, 🦋 = 5, 🐸 = 3, 🐢 = 0"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="9">{"(1) 1, 3"}</span>,
            <span key="10">{"(2) 7, 6"}</span>,
            <span key="11">{"(3) 6, 8"}</span>,
            <span key="12">{"(4) 9, 7"}</span>,
            <span key="13">{"(5) 1, 4"}</span>
          ]
        }
      ],
      advice: "ຝຶກນັບຕົວເລກທັງນັບຂຶ້ນ ແລະ ນັບລົງເລື້ອຍໆ ຈະຊ່ວຍໃຫ້ຈື່ໄດ້ງ່າຍຂຶ້ນເດີ! ຖ້າບໍ່ມີຫຍັງເລີຍ ຢ່າລືມຕື່ມເລກ 0."
    }
  };
