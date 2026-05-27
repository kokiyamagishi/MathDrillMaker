import React from "react";
import { UnitData } from "./units2";
import { ItemGrid } from "@/components/illustrations";

export const unitsData1: UnitData[] = [
  {
    unitNumber: 1,
    unitTitle: "ການປຽບທຽບຈຳນວນ",
    unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບຈຳນວນ ໂດຍການຈັບຄູ່ໜຶ່ງຕໍ່ໜຶ່ງ ເພື່ອເບິ່ງວ່າອັນໃດຫຼາຍກວ່າ ຫຼື ໜ້ອຍກວ່າ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 6〜9",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ເຮົາມາປຽບທຽບຈຳນວນນຳກັນວ່າ ອັນໃດຫຼາຍກວ່າ, ໜ້ອຍກວ່າ ຫຼື ເທົ່າກັນ."}</p>
          <div className="math-illustration" style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "12px", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              <ItemGrid item="🐶" count={4} columns={4} backgroundColor="#E3F2FD" />
              <ItemGrid item="🐱" count={3} columns={4} backgroundColor="#FFF9C4" />
            </div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#D32F2F" }}>{"-> ໝາ ຫຼາຍກວ່າ ແມວ"}</div>
          </div>
        </div>
      ),
      hint: {
        text: "ໃຊ້ວິທີການຈັບຄູ່ໜຶ່ງຕໍ່ໜຶ່ງ ເພື່ອເບິ່ງວ່າອັນໃດເຫຼືອ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າອັນໃດຫຼາຍກວ່າ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(1) ລົດ 🚗 ກັບ ລົດຖີບ 🚲"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🚗" count={6} columns={6} />
                  <ItemGrid item="🚲" count={4} columns={6} />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(2) ແອັບເປິ້ນ 🍎 ກັບ ກ້ວຍ 🍌"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🍎" count={5} columns={7} />
                  <ItemGrid item="🍌" count={7} columns={7} />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(3) ໝີ 🐻 ກັບ ກະຕ່າຍ 🐰"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🐻" count={8} columns={8} />
                  <ItemGrid item="🐰" count={6} columns={8} />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າອັນໃດໜ້ອຍກວ່າ: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ minWidth: "150px" }}>{"(1) ເສື້ອ 👕 ກັບ ໂສ້ງ 👖"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <ItemGrid item="👕" count={5} columns={5} />
                <ItemGrid item="👖" count={4} columns={5} />
              </div>
              <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
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
              <p>{"ຈົ່ງສັງເກດຮູບພາບແລ້ວຕອບຄຳຖາມ. ໂຕໃດມີຈຳນວນເທົ່າກັນ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px", border: "2px solid #2196F3", borderRadius: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }}>{"ກົບ 🐸:"}</span>
                  <ItemGrid item="🐸" count={5} columns={6} backgroundColor="#E8F5E9" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }}>{"ເຕົ່າ 🐢:"}</span>
                  <ItemGrid item="🐢" count={4} columns={6} backgroundColor="#E8F5E9" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }}>{"ປາ 🐟:"}</span>
                  <ItemGrid item="🐟" count={5} columns={6} backgroundColor="#E8F5E9" />
                </div>
              </div>
              <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "80px" }}></span> {" ກັບ "} <span className="answer-blank" style={{ minWidth: "80px" }}></span></p>
            </div>
          ),
        }
      ],
      hintIndex: 0,
      hintText: "ນັບຈຳນວນຂອງແຕ່ລະສັດໃຫ້ຄັກໆ ແລ້ວເບິ່ງວ່າໂຕໃດມີຈຳນວນເທົ່າກັນເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງປຽບທຽບຈຳນວນຕໍ່ໄປນີ້ແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p>{"(1) ໝາກບານ ⚽ ກັບ ດອກປີກໄກ່ 🏸, ອັນໃດຫຼາຍກວ່າ?"}</p>
                <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
                  <ItemGrid item="⚽" count={7} columns={7} />
                  <ItemGrid item="🏸" count={9} columns={9} />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
              <div>
                <p>{"(2) ສໍດຳ ✏️ ກັບ ຢາງລົບ 🧽, ອັນໃດໜ້ອຍກວ່າ?"}</p>
                <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
                  <ItemGrid item="✏️" count={8} columns={8} backgroundColor="#FFF3E0" />
                  <ItemGrid item="🧽" count={6} columns={6} backgroundColor="#FFF3E0" />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
            </div>
          </div>
        ),
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) ລົດ 🚗"}</span>,
            <span key="2">{"(2) ກ້ວຍ 🍌"}</span>,
            <span key="3">{"(3) ໝີ 🐻"}</span>,
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="4">{"(1) ໂສ້ງ 👖"}</span>,
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="5">{"ກົບ 🐸 ກັບ ປາ 🐟 (ຢ່າງລະ 5 ໂຕ)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="6">{"(1) ດອກປີກໄກ່ 🏸 ຫຼາຍກວ່າ"}</span>,
            <span key="7">{"(2) ຢາງລົບ 🧽 ໜ້ອຍກວ່າ"}</span>
          ]
        }
      ],
      advice: "ເວລາປຽບທຽບ, ລອງໃຊ້ວິທີຈັບຄູ່ເບິ່ງ! ອັນທີ່ເຫຼືອແມ່ນອັນທີ່ຫຼາຍກວ່າ, ສ່ວນອັນທີ່ໝົດກ່ອນແມ່ນໜ້ອຍກວ່າເດີ."
    }
  },
  {
    unitNumber: 2,
    unitTitle: "ຈຳນວນແຕ່ 1 ເຖິງ 10 ແລະ 0",
    unitGoal: "ຮຽນຮູ້ການນັບຈຳນວນແຕ່ 1 ເຖິງ 10 ແລະ ຄວາມໝາຍຂອງເລກ 0",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 10〜21",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຝຶກນັບຈຳນວນ ແລະ ຂຽນຕົວເລກນຳກັນ."}</p>
          <div className="math-illustration" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: "8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "22px" }}>🍎</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>1</div>
            </div>
            <div style={{ textAlign: "center", padding: "8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "22px" }}>🍎🍎</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>2</div>
            </div>
            <div style={{ textAlign: "center", padding: "8px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#E8F5E9", minWidth: "48px" }}>
              <div style={{ fontSize: "22px" }}>🍎🍎🍎</div>
              <div style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>3</div>
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
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(1)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍓" count={3} columns={5} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(2)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍉" count={6} columns={5} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(3)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="" count={0} columns={5} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(4)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍊" count={8} columns={5} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(5)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍒" count={2} columns={5} /></div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "24px", fontWeight: "bold" }}>{"(6)"}</span>
                <div style={{ flex: 1 }}><ItemGrid item="🍎" count={10} columns={5} /></div>
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
    <span>1</span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span>2</span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span>4</span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span>
  </div>

  {/* 2行目 */}
  <div style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
    <span>6</span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span>7</span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span className="answer-blank" style={{ display: "inline-block", width: "32px", height: "32px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
    <span>9</span><span style={{ margin: "0 4px" }}>{"→"}</span>
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
              <div style={{ backgroundColor: "#E0F7FA", padding: "16px", borderRadius: "12px", border: "2px solid #00BCD4" }}>
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
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(1)"}</span>
                <span>0</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>2</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>4</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(2)"}</span>
                <span>9</span><span>,</span>
                <span>8</span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>5</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", width: "40px" }}>{"(3)"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span>,</span>
                <span>7</span><span>,</span>
                <span>8</span><span>,</span>
                <span>9</span><span>,</span>
                <span>10</span>
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
            <span key="11">{"(3) 6"}</span>
          ]
        }
      ],
      advice: "ຝຶກນັບຕົວເລກທັງນັບຂຶ້ນ ແລະ ນັບລົງເລື້ອຍໆ ຈະຊ່ວຍໃຫ້ຈື່ໄດ້ງ່າຍຂຶ້ນເດີ! ຖ້າບໍ່ມີຫຍັງເລີຍ ຢ່າລືມຕື່ມເລກ 0."
    }
  },
  {
    unitNumber: 3,
    unitTitle: "ລຳດັບທີ",
    unitGoal: "ຮຽນຮູ້ການບອກລຳດັບທີ (ທີໜຶ່ງ, ທີສອງ...) ແລະ ຕຳແໜ່ງ (ຊ້າຍ, ຂວາ, ໜ້າ, ຫຼັງ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 22〜24",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາບອກລຳດັບທີຂອງສັດນຳກັນ."}</p>
          <div className="math-illustration" style={{ display: "flex", gap: "8px", fontSize: "24px", justifyContent: "center", backgroundColor: "#E8F5E9", padding: "16px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🐶</span><span style={{ fontSize: "22px" }}>{"1"}</span></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🐱</span><span style={{ fontSize: "22px" }}>{"2"}</span></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🐰</span><span style={{ fontSize: "22px" }}>{"3"}</span></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🐻</span><span style={{ fontSize: "22px" }}>{"4"}</span></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🐼</span><span style={{ fontSize: "22px" }}>{"5"}</span></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span>🦊</span><span style={{ fontSize: "22px" }}>{"6"}</span></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px", backgroundColor: "#FFF3E0", padding: "16px", borderRadius: "8px" }}>
            <p style={{ fontWeight: "bold" }}>{"- ຈາກເບື້ອງຊ້າຍ, ໂຕທີ 1 ແມ່ນ 🐶 (ໝາ)"}</p>
            <p style={{ fontWeight: "bold" }}>{"- ຈາກເບື້ອງຂວາ, ໂຕທີ 2 ແມ່ນ 🐼 (ໝີແພນດ້າ)"}</p>
          </div>
        </div>
      ),
      hint: {
        text: "ຕ້ອງອ່ານຄຳຖາມດີໆວ່າ ໃຫ້ນັບຈາກເບື້ອງຊ້າຍ ຫຼື ເບື້ອງຂວາ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ເບິ່ງຮູບລົດລຸ່ມນີ້ ແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", gap: "8px", fontSize: "32px", justifyContent: "center", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px", border: "2px dashed #9E9E9E", flexWrap: "wrap" }}>
              <span>🚗</span><span>🚕</span><span>🚙</span><span>🚌</span><span>🚎</span><span>🏎️</span><span>🚓</span><span>🚑</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
              <p>{"(1) ຈາກເບື້ອງຊ້າຍ, ຄັນທີ 3 ແມ່ນລົດຫຍັງ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
              <p>{"(2) ຈາກເບື້ອງຂວາ, ຄັນທີ 2 ແມ່ນລົດຫຍັງ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
              <p>{"(3) ລົດ 🚌 ແມ່ນລົດຄັນທີເທົ່າໃດຈາກເບື້ອງຊ້າຍ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
              <p>{"(4) ລົດ 🚕 ແມ່ນລົດຄັນທີເທົ່າໃດຈາກເບື້ອງຂວາ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ມີເດັກນ້ອຍຢືນລຽນແຖວກັນ 7 ຄົນ. ນາງ ນາລີ ຢືນຢູ່ລຳດັບທີ 3 ຈາກທາງໜ້າ. ຖາມວ່າ ນາງ ນາລີ ຈະຢືນຢູ່ລຳດັບທີເທົ່າໃດ ຈາກທາງຫຼັງ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}>
                <div style={{ display: "flex", gap: "12px", fontSize: "32px", padding: "16px", border: "1px solid #CCC", borderRadius: "16px", position: "relative", flexWrap: "wrap" }}>
                  <div style={{ position: "absolute", top: "-25px", left: "0", fontSize: "14px", fontWeight: "bold" }}>{"ໜ້າ"}</div>
                  <div style={{ position: "absolute", top: "-25px", right: "0", fontSize: "14px", fontWeight: "bold" }}>{"ຫຼັງ"}</div>
                  <span>👦</span><span>👧</span><span style={{ border: "2px solid red", borderRadius: "50%", padding: "4px" }}>👧</span><span>👦</span><span>👦</span><span>👧</span><span>👦</span>
                </div>
              </div>
              <p>{"ຕອບ: ຈາກທາງຫຼັງແມ່ນລຳດັບທີ "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລອງແຕ້ມຮູບວົງມົນ 7 ອັນ ແລ້ວນັບເບິ່ງທັງສອງເບື້ອງເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ສັງເກດຮູບພາບແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gap: "12px", backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "16px", width: "fit-content", margin: "0 auto", fontSize: "48px", border: "4px solid #1976D2" }}>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍎</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍌</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍇</div>
              
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍉</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍓</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍍</div>
              
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🥭</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🍊</div>
              <div style={{ textAlign: "center", border: "1px dashed #90CAF9", padding: "8px" }}>🥝</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
              <p>{"(1) ໝາກສະຕໍເບີຣີ 🍓 ຢູ່ຖັດຈາກໝາກຫຍັງທາງເບື້ອງຊ້າຍ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
              <p>{"(2) ໝາກກ້ວຍ 🍌 ຢູ່ທາງເທິງຂອງໝາກຫຍັງ? "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span></p>
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
            <span key="1">{"(1) 🚙 (ລົດສີຟ້າ)"}</span>,
            <span key="2">{"(2) 🚓 (ລົດຕຳຫຼວດ)"}</span>,
            <span key="3">{"(3) ທີ 4"}</span>,
            <span key="4">{"(4) ທີ 7"}</span>,
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="5">{"ລຳດັບທີ 5 ຈາກທາງຫຼັງ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="6">{"(1) ໝາກໂມ 🍉"}</span>,
            <span key="7">{"(2) ໝາກສະຕໍເບີຣີ 🍓"}</span>
          ]
        }
      ],
      advice: "ການບອກຕຳແໜ່ງ (ຊ້າຍ, ຂວາ, ໜ້າ, ຫຼັງ, ເທິງ, ລຸ່ມ) ແມ່ນສຳຄັນຫຼາຍ. ຕ້ອງເບິ່ງໃຫ້ດີວ່າເຂົາຖາມຈາກຈຸດໃດເດີ!"
    }
  },
  {
    unitNumber: 4,
    unitTitle: "ການແບ່ງຈຳນວນອອກເປັນສອງສ່ວນ",
    unitGoal: "ຮຽນຮູ້ການແບ່ງຈຳນວນໜຶ່ງອອກເປັນສອງຈຳນວນ (ເຊັ່ນ: 5 ແມ່ນ 2 ກັບ 3).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 25〜41",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ຈຳນວນໜຶ່ງສາມາດແບ່ງອອກເປັນສອງສ່ວນໄດ້."}</p>
          <div className="math-illustration" style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#FFF9C4", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", fontSize: "22px" }}>
            <div style={{ textAlign: "center", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px" }}>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "#F57F17" }}>5</div>
              <div style={{ marginTop: "8px" }}><ItemGrid item="🍎" count={5} columns={5} /></div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold" }}>{"="}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px" }}>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#388E3C" }}>2</div>
                <div><ItemGrid item="🍎" count={2} columns={2} backgroundColor="#E8F5E9" /></div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>{"ກັບ"}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px" }}>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#1976D2" }}>3</div>
                <div><ItemGrid item="🍎" count={3} columns={3} backgroundColor="#E3F2FD" /></div>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຄິດວ່າເອົາຈຳນວນຫຍັງມາໂຮມກັນແລ້ວໄດ້ເທົ່າກັບຈຳນວນໃຫຍ່!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "12px" }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"5"}</span>
                <span>{"ແມ່ນ"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2196F3" }}>{"2"}</span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"7"}</span>
                <span>{"ແມ່ນ"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2196F3" }}>{"4"}</span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"6"}</span>
                <span>{"ແມ່ນ"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2196F3" }}>{"3"}</span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"8"}</span>
                <span>{"ແມ່ນ"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2196F3" }}>{"2"}</span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F5F5F5", padding: "16px", borderRadius: "12px", gridColumn: "span 2", width: "fit-content", margin: "0 auto" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"10"}</span>
                <span>{"ແມ່ນ"}</span>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2196F3" }}>{"5"}</span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>

            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ນາງ ມະນີ ມີດອກໄມ້ທັງໝົດ 10 ດອກ. ລາວແບ່ງໃສ່ຈອກສີແດງ 6 ດອກ. ລາວຈະຕ້ອງໃສ່ດອກໄມ້ໃນຈອກສີຟ້າຈັກດອກ ເພື່ອໃຫ້ໝົດພໍດີ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "16px", margin: "12px 0", backgroundColor: "#F9FBE7", padding: "16px", borderRadius: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <ItemGrid item="🌹" count={6} columns={3} backgroundColor="transparent" emojiSize="24px" />
                  <div style={{ width: "60px", height: "60px", backgroundColor: "#FFCDD2", border: "2px solid #F44336", borderRadius: "0 0 12px 12px", borderTop: "none" }}></div>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>{"ຈອກສີແດງ (6)"}</div>
                </div>
                <div style={{ fontSize: "32px", fontWeight: "bold", paddingBottom: "30px" }}>{"+"}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "32px", display: "flex", alignItems: "center", height: "68px" }}>{"?"}</div>
                  <div style={{ width: "60px", height: "60px", backgroundColor: "#BBDEFB", border: "2px solid #2196F3", borderRadius: "0 0 12px 12px", borderTop: "none" }}></div>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>{"ຈອກສີຟ້າ"}</div>
                </div>
                <div style={{ fontSize: "32px", fontWeight: "bold", paddingBottom: "30px" }}>{"="}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <ItemGrid item="🌹" count={10} columns={5} backgroundColor="transparent" emojiSize="24px" />
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>{"ທັງໝົດ 10 ດອກ"}</div>
                </div>
              </div>
              <p>{"ຕອບ: ຈອກສີຟ້າຕ້ອງໃສ່ "} <span className="answer-blank" style={{ minWidth: "60px", display: "inline-block" }}></span> {" ດອກ"}</p>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "10 ແມ່ນ 6 ກັບຫຍັງນໍ? ໃຊ້ນິ້ວມືທັງ 10 ຊ່ວຍໄດ້!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຊອກຫາທຸກວິທີທີ່ຈະແບ່ງ 5 ອອກເປັນສອງສ່ວນ (ໂດຍບໍ່ເອົາ 0): "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#EFEBE9", padding: "24px", borderRadius: "16px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"5 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"5 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"5 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"5 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
                <span>{"ກັບ"}</span>
                <span className="answer-blank" style={{ width: "40px", height: "40px" }}></span>
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
            <span key="2">{"(2) 3"}</span>,
            <span key="3">{"(3) 3"}</span>,
            <span key="4">{"(4) 6"}</span>,
            <span key="5">{"(5) 5"}</span>,
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="6">{"4 ດອກ (ເພາະ 10 ແມ່ນ 6 ກັບ 4)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="7">{"(1 ກັບ 4), (2 ກັບ 3), (3 ກັບ 2), (4 ກັບ 1) [ສະຫຼັບທີ່ກັນໄດ້]"}</span>
          ]
        }
      ],
      advice: "ການແບ່ງຈຳນວນອອກເປັນສອງສ່ວນ ແມ່ນພື້ນຖານທີ່ສຳຄັນຫຼາຍສຳລັບການບວກ ແລະ ການລົບໃນບົດຕໍ່ໄປ. ພະຍາຍາມຈື່ຄູ່ຂອງຕົວເລກທີ່ລວມກັນເປັນ 10 ໃຫ້ໄດ້ເດີ!"
    }
  },
  {
    unitNumber: 5,
    unitTitle: "ການບວກ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການບວກ, ເຄື່ອງໝາຍບວກ (+) ແລະ ເຄື່ອງໝາຍເທົ່າກັບ (=).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 42〜55",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ເມື່ອເຮົາເອົາສອງຈຳນວນມາໂຮມເຂົ້າກັນ ເອີ້ນວ່າ "}<strong>{"ການບວກ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E8F5E9", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap", fontSize: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍎" count={3} columns={3} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#F44336" }}>+</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍏" count={2} columns={2} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>2</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#F44336" }}>=</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍎" count={5} columns={5} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>5</div>
            </div>
          </div>
          <p style={{ marginTop: "12px" }}>
            <strong style={{ color: "#F44336", fontSize: "24px" }}>+</strong> {" ອ່ານວ່າ ບວກ"}<br />
            <strong style={{ color: "#F44336", fontSize: "24px" }}>=</strong> {" ອ່ານວ່າ ເທົ່າກັບ"}<br />
            <span style={{ fontSize: "22px" }}>{"3 + 2 = 5 ອ່ານວ່າ 3 ບວກ 2 ເທົ່າກັບ 5"}</span>
          </p>
        </div>
      ),
      hint: {
        text: "ການບວກ ແມ່ນການເອົາຈຳນວນມາໂຮມເຂົ້າກັນເພື່ອໃຫ້ໄດ້ຫຼາຍຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"3 + 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"2 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"5 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"6 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"4 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"1 + 8 ="}</span>
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
            <p>{"ມີລົດສີແດງ 4 ຄັນ ແລະ ລົດສີຟ້າ 5 ຄັນ. ລວມມີລົດທັງໝົດຈັກຄັນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ຄັນ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ການບວກກັບ 0: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"5 + 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"0 + 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"0 + 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p>{"ໃນຈານມີໝາກກ້ວຍ 3 ໜ່ວຍ. ທ້າວສອນ ເອົາມາໃສ່ຕື່ມອີກ 0 ໜ່ວຍ. ໃນຈານຈະມີໝາກກ້ວຍຈັກໜ່ວຍ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໜ່ວຍ"}</p>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ການບວກກັບ 0 ໝາຍຄວາມວ່າ ບໍ່ໄດ້ເອົາຫຍັງມາເພີ່ມຕື່ມເລີຍ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"2 + 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"5 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"1 + 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"+ 6 = 8"}</span>
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
            <span key="1">{"(1) 4, (2) 6, (3) 8, (4) 8, (5) 8, (6) 9"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 4 + 5 = 9, ຕອບ: 9 ຄັນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 3, (3) 0"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">{"ຕອບ: 3 ໜ່ວຍ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">{"(1) 7, (2) 9, (3) 10, (4) 10, (5) 2"}</span>
          ]
        }
      ],
      advice: "ການບວກແມ່ນການເອົາຈຳນວນມາລວມກັນ. ຖ້າບວກກັບ 0, ຈຳນວນນັ້ນຈະບໍ່ປ່ຽນແປງເດີ! ພະຍາຍາມໃຊ້ນິ້ວມື ຫຼື ຝາກະຕຸກນ້ຳເພື່ອຊ່ວຍໃນການຄິດໄລ່."
    }
  },
  {
    unitNumber: 6,
    unitTitle: "ການລົບ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການລົບ, ເຄື່ອງໝາຍລົບ (-) ແລະ ການຄິດໄລ່.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 56〜71",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ເມື່ອເຮົາເອົາຈຳນວນໜຶ່ງອອກຈາກຈຳນວນທັງໝົດ ເອີ້ນວ່າ "}<strong>{"ການລົບ"}</strong>{"."}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#FFF3E0", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={5} columns={5} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>5</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#FF9800" }}>-</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={3} columns={3} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#FF9800" }}>=</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <ItemGrid item="🍌" count={2} columns={2} backgroundColor="#FFF" emojiSize="24px" />
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>2</div>
            </div>
          </div>
          <p style={{ marginTop: "12px" }}>
            <strong style={{ color: "#FF9800", fontSize: "24px" }}>-</strong> {" ອ່ານວ່າ ລົບ"}<br />
            <span style={{ fontSize: "22px" }}>{"5 - 3 = 2 ອ່ານວ່າ 5 ລົບ 3 ເທົ່າກັບ 2"}</span>
          </p>
        </div>
      ),
      hint: {
        text: "ການລົບ ແມ່ນການເອົາອອກ ຫຼື ແບ່ງອອກ ແລ້ວຊອກຫາສ່ວນທີ່ຍັງເຫຼືອ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 - 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"7 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 - 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"8 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"9 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"10 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <p>{"ນາງ ແກ້ວ ມີເຂົ້າໜົມ 8 ກ້ອນ, ລາວກິນໄປ 3 ກ້ອນ. ລາວຈະຍັງເຫຼືອເຂົ້າໜົມຈັກກ້ອນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ກ້ອນ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ການລົບກັບ 0: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"6 - 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"9 - 9 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"0 - 0 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
              <p>{"ມີນົກ 5 ໂຕ ເກາະຢູ່ເທິງງ່າໄມ້. ບິນໜີໄປ 5 ໂຕ. ຈະຍັງເຫຼືອນົກຈັກໂຕຢູ່ເທິງງ່າໄມ້? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
              <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໂຕ"}</p>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຖ້າລົບອອກ 0 ໝາຍຄວາມວ່າ ບໍ່ໄດ້ເອົາອອກເລີຍ. ແຕ່ຖ້າລົບອອກໝົດ ຈະຍັງເຫຼືອ 0!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"8 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"10 - 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"7 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"- 3 = 6"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"9 -"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"= 2"}</span>
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
            <span key="1">{"(1) 3, (2) 5, (3) 3, (4) 4, (5) 4, (6) 8"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 8 - 3 = 5, ຕອບ: 5 ກ້ອນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 6, (2) 0, (3) 0"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="4">{"ຕອບ: 0 ໂຕ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="5">{"(1) 3, (2) 3, (3) 3, (4) 9, (5) 7"}</span>
          ]
        }
      ],
      advice: "ການລົບແມ່ນການເອົາອອກ. ຖ້າເອົາອອກໝົດ (ລົບດ້ວຍຕົວມັນເອງ) ຈະຍັງເຫຼືອ 0 ສະເໝີ! ໃຊ້ວິທີນັບຖອຍຫຼັງຊ່ວຍກໍໄດ້."
    }
  },
  {
    unitNumber: 7,
    unitTitle: "ຈຳນວນທີ່ຫຼາຍກວ່າ 10",
    unitGoal: "ຮຽນຮູ້ການນັບ ແລະ ຂຽນຈຳນວນແຕ່ 11 ເຖິງ 20.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 72〜83",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ຈຳນວນທີ່ໃຫຍ່ກວ່າ 10 ນຳກັນ. 10 ໂຮມກັບຈຳນວນອື່ນ ຈະໄດ້ຈຳນວນໃໝ່!"}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px", backgroundColor: "#FFF", padding: "8px", borderRadius: "8px" }}>
                <span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span>
                <span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span><span>🥚</span>
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>10</div>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ກັບ"}</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", backgroundColor: "#FFF", padding: "8px", borderRadius: "8px" }}>
                <span>🥚</span><span>🥚</span><span>🥚</span>
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>3</div>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ອ່ານວ່າ"}</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "#1976D2" }}>13</div>
              <div style={{ fontSize: "22px" }}>{"ສິບສາມ"}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
            <p>{"- 10 ກັບ 1 ອ່ານວ່າ 11 (ສິບເອັດ)"}</p>
            <p>{"- 10 ກັບ 5 ອ່ານວ່າ 15 (ສິບຫ້າ)"}</p>
            <p>{"- 10 ກັບ 10 ອ່ານວ່າ 20 (ຊາວ)"}</p>
          </div>
        </div>
      ),
      hint: {
        text: "ຈຳນວນແຕ່ 11 ຫາ 19 ແມ່ນເກີດຈາກ 10 ລວມກັບ 1 ຫາ 9!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"10 ກັບ 2 ເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"10 ກັບ 6 ເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"10 ກັບ 8 ເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ກັບ 9 ເປັນ 19"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກລຽນລຳດັບແຕ່ 10 ຫາ 20: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "24px", alignItems: "center", justifyContent: "center", marginTop: "16px", backgroundColor: "#FCE4EC", padding: "16px", borderRadius: "12px" }}>
              <span>10</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span>12</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span>14</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span>15</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span>17</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span>19</span><span style={{ margin: "0 4px" }}>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງບວກ ແລະ ລົບ ຈຳນວນທີ່ມີ 2 ຕົວເລກ ກັບ 1 ຕົວເລກ (ບໍ່ມີຈື່, ບໍ່ມິຍືມ): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"12 + 3 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"15 + 4 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"18 - 5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"16 - 6 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                  <span>{"10 + 10 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "12 + 3 ແມ່ນເອົາແຕ່ 2 ກັບ 3 ມາບວກກັນ ເປັນ 5 ແລ້ວເອົາ 10 ມາໃສ່ໜ້າ ເປັນ 15. ການລົບກໍເຊັ່ນກັນເດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງສັງເກດຈຳນວນແລ້ວຕື່ມເຄື່ອງໝາຍ > (ຫຼາຍກວ່າ) ຫຼື < (ໜ້ອຍກວ່າ) ໃສ່ບັອກ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ width: "30px", textAlign: "right" }}>{"14"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"17"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ width: "30px", textAlign: "right" }}>{"20"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"19"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ width: "30px", textAlign: "right" }}>{"11"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"13"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ width: "30px", textAlign: "right" }}>{"18"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"16"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span style={{ width: "80px", textAlign: "right" }}>{"10 + 5"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                <span>{"14"}</span>
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
            <span key="1">{"(1) 12, (2) 16, (3) 18, (4) 10"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"11, 13, 16, 18, 20"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 15, (2) 19, (3) 13, (4) 10, (5) 20"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) <, (2) >, (3) <, (4) >, (5) 15 > 14 (ຕື່ມ >)"}</span>
          ]
        }
      ],
      advice: "ເມື່ອມີຈຳນວນ 10 ໃຫ້ເບິ່ງວ່າຫຼັກຫົວໜ່ວຍແມ່ນເລກຫຍັງ ຈະຊ່ວຍໃຫ້ອ່ານ ແລະ ຄິດໄລ່ໄດ້ໄວຂຶ້ນ!"
    }
  },
  {
    unitNumber: 8,
    unitTitle: "ເວລາ",
    unitGoal: "ຮຽນຮູ້ການອ່ານໂມງບອກເວລາ (ໂມງກົງ ແລະ ໂມງເຄິ່ງ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 84〜85",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີການອ່ານໂມງນຳກັນ. ໂມງມີເຂັມສັ້ນ ແລະ ເຂັມຍາວ:"}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#FFFDE7", padding: "16px", borderRadius: "12px" }}>
            <p>{"- "}<strong>{"ເຂັມສັ້ນ"}</strong>{" ຊີ້ບອກຊົ່ວໂມງ (ໂມງ)"}</p>
            <p>{"- "}<strong>{"ເຂັມຍາວ"}</strong>{" ຊີ້ບອກນາທີ"}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexWrap: "wrap", marginTop: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #1976D2", backgroundColor: "#FFF" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(210deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>12</div>
                <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>3</div>
                <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>6</div>
                <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>9</div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>
                {"ເຂັມສັ້ນຊີ້ເລກ 7"}<br/>{"ເຂັມຍາວຊີ້ເລກ 12"}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F44336", backgroundColor: "#FFEBEE", padding: "8px 16px", borderRadius: "8px" }}>{"7 ໂມງ"}</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #1976D2", backgroundColor: "#FFF" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(225deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>12</div>
                <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>3</div>
                <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "22px", fontWeight: "bold" }}>6</div>
                <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "22px", fontWeight: "bold" }}>9</div>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>
                {"ເຂັມສັ້ນຊີ້ລະຫວ່າງກາງ 7 ກັບ 8"}<br/>{"ເຂັມຍາວຊີ້ເລກ 6"}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F44336", backgroundColor: "#FFEBEE", padding: "8px 16px", borderRadius: "8px" }}>{"7 ໂມງເຄິ່ງ"}</div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຖ້າເຂັມຍາວຊີ້ເລກ 12 ແມ່ນໂມງກົງ. ຖ້າເຂັມຍາວຊີ້ເລກ 6 ແມ່ນໂມງເຄິ່ງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ໂມງລຸ່ມນີ້ແມ່ນຈັກໂມງ? ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(270deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "24px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #4CAF50", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(345deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                  <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>12</div>
                  <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>3</div>
                  <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontSize: "14px", fontWeight: "bold" }}>6</div>
                  <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: "bold" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "24px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ໂມງເຄິ່ງ"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ເວລາຕື່ນນອນຂອງທ້າວແກ້ວ ແມ່ນ 6 ໂມງກົງ. ເວລາກິນເຂົ້າເຊົ້າ ແມ່ນ 6 ໂມງເຄິ່ງ. ຈົ່ງບອກວ່າເຂັມຍາວໃນໂມງກິນເຂົ້າເຊົ້າຈະຊີ້ໃສ່ເລກຫຍັງ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "16px" }}>
                <span>{"ຕອບ: ເຂັມຍາວຊີ້ໃສ່ເລກ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໂມງເຄິ່ງ (30 ນາທີ) ເຂັມຍາວຈະໝູນມາຮອດເຄິ່ງໜຶ່ງຂອງໜ້າປັດໂມງພໍດີ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໂມງລຸ່ມນີ້ແມ່ນຈັກໂມງ? ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(90deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(0deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "24px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ໂມງ"}</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</div>
                <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #FF9800", backgroundColor: "#FFF" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "30px", backgroundColor: "#F44336", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(135deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "45px", backgroundColor: "#2196F3", transformOrigin: "bottom center", transform: "translate(-50%, -100%) rotate(180deg)" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#000", transform: "translate(-50%, -50%)" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "24px" }}>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ໂມງເຄິ່ງ"}</span>
                </div>
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
            <span key="1">{"(1) 9, (2) 11"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: ເລກ 6"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) 3, (2) 4"}</span>
          ]
        }
      ],
      advice: "ອ່ານໂມງໃຫ້ສັງເກດເຂັມຍາວກ່ອນໝູ່: ຖ້າຊີ້ເລກ 12 ແມ່ນໂມງກົງ, ຖ້າຊີ້ເລກ 6 ແມ່ນໂມງເຄິ່ງ. ຈາກນັ້ນຈຶ່ງໄປເບິ່ງເຂັມສັ້ນວ່າຊີ້ໄປເລກຫຍັງ."
    }
  },
  {
    unitNumber: 9,
    unitTitle: "ຮູບຮ່າງຂອງສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາ",
    unitGoal: "ສັງເກດ ແລະ ຈຳແນກຮູບຮ່າງຂອງວັດຖຸຕ່າງໆ ເຊັ່ນ: ກັບ, ທໍ່, ໜ່ວຍມົນ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 86〜89",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາມີຮູບຮ່າງແຕກຕ່າງກັນ. ມາສັງເກດເບິ່ງຮູບຮ່າງເຫຼົ່ານີ້ນຳກັນ:"}</p>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", backgroundColor: "#E8EAF6", padding: "24px", borderRadius: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#FFCDD2", border: "2px solid #F44336", borderRadius: "8px", boxShadow: "4px 4px 0 #D32F2F" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບກັບ"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ກັບສະບູ)"}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "60px", height: "90px", backgroundColor: "#C8E6C9", border: "2px solid #4CAF50", borderRadius: "30px/10px", boxShadow: "4px 4px 0 #388E3C" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບທໍ່"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ກະປ໋ອງ)"}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#FFF9C4", border: "2px solid #FFC107", borderRadius: "50%", boxShadow: "4px 4px 0 #FFA000" }}></div>
              <div style={{ fontSize: "22px", fontWeight: "bold" }}>{"ຮູບໜ່ວຍມົນ"}</div>
              <div style={{ fontSize: "22px", color: "#666" }}>{"(ເຊັ່ນ: ໝາກບານ)"}</div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ຮູບກັບມີໜ້າພຽງ, ຮູບທໍ່ກິ້ງໄດ້ທາງຂ້າງແຕ່ມີໜ້າພຽງສອງເບື້ອງ, ສ່ວນໜ່ວຍມົນແມ່ນກິ້ງໄດ້ທຸກທິດທາງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າສິ່ງຂອງລຸ່ມນີ້ມີຮູບຮ່າງຄືກັບອັນໃດ (ກັບ, ທໍ່, ໜ່ວຍມົນ): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ໝາກກ້ຽງ 🍊 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ກ່ອງຂອງຂວັນ 🎁 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ຈອກນ້ຳ 🥛 ມີຮູບຮ່າງເປັນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຖ້າເອົາຮູບທໍ່ມາວາງນອນ, ມັນຈະສາມາດກິ້ງໄດ້ຄືກັບໜ່ວຍມົນຫຼືບໍ່? (ຕອບ ໄດ້ ຫຼື ບໍ່ໄດ້): "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "80px" }}></span></p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງສັງເກດຫຸ່ນຍົນທີ່ປະກອບຈາກຮູບຮ່າງຕ່າງໆລຸ່ມນີ້ ແລ້ວນັບຈຳນວນແຕ່ລະຮູບຮ່າງ: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                <div style={{ position: "relative", width: "160px", height: "240px", padding: "16px", backgroundColor: "#F5F5F5", borderRadius: "12px" }}>
                  {/* Robot Head - ກັບ */}
                  <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", width: "40px", height: "40px", backgroundColor: "#FFCDD2", border: "2px solid #333" }}></div>
                  {/* Robot Body - ກັບ */}
                  <div style={{ position: "absolute", top: "60px", left: "50%", transform: "translateX(-50%)", width: "60px", height: "80px", backgroundColor: "#FFCDD2", border: "2px solid #333" }}></div>
                  {/* Robot Arms - ທໍ່ */}
                  <div style={{ position: "absolute", top: "70px", left: "15px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px", transform: "rotate(30deg)" }}></div>
                  <div style={{ position: "absolute", top: "70px", right: "15px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px", transform: "rotate(-30deg)" }}></div>
                  {/* Robot Legs - ທໍ່ */}
                  <div style={{ position: "absolute", top: "140px", left: "45px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px" }}></div>
                  <div style={{ position: "absolute", top: "140px", right: "45px", width: "20px", height: "60px", backgroundColor: "#C8E6C9", border: "2px solid #333", borderRadius: "10px/5px" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(1) ມີຮູບກັບ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(2) ມີຮູບທໍ່ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"(3) ມີຮູບໜ່ວຍມົນ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"ອັນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສັງເກດດີໆເດີ! ແຂນ ແລະ ຂາຂອງຫຸ່ນຍົນແມ່ນຮູບທໍ່. ສ່ວນຫົວ ແລະ ຕົນຕົວແມ່ນຮູບກັບ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງບອກຊື່ຮູບຮ່າງທີ່ສາມາດຕັ້ງຊ້ອນກັນໃຫ້ສູງໆໄດ້ດີທີ່ສຸດ ແມ່ນຮູບຮ່າງໃດ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "16px" }}>
              <span>{"ຕອບ: ຮູບ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="1">{"(1) ໜ່ວຍມົນ, (2) ກັບ, (3) ທໍ່"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ຕອບ: ໄດ້ (ເພາະຂ້າງຂອງມັນມົນ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) ຮູບກັບ 2 ອັນ, (2) ຮູບທໍ່ 4 ອັນ, (3) ຮູບໜ່ວຍມົນ 0 ອັນ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"ຕອບ: ຮູບກັບ (ເພາະມີໜ້າພຽງທຸກດ້ານ ເຮັດໃຫ້ຊ້ອນກັນໄດ້ໝັ້ນຄົງ)"}</span>
          ]
        }
      ],
      advice: "ສັງເກດສິ່ງຂອງໃນເຮືອນຂອງນ້ອງໆເບິ່ງວ່າ ອັນໃດເປັນຮູບກັບ ອັນໃດເປັນຮູບທໍ່ ແລະ ອັນໃດເປັນຮູບໜ່ວຍມົນ. ມັນຊ່ວຍໃຫ້ເຮົາເຂົ້າໃຈເລື່ອງຮູບຮ່າງໄດ້ດີຂຶ້ນຫຼາຍ!"
    }
  },
  {
    unitNumber: 10,
    unitTitle: "ການຄິດໄລ່ຂອງ 3 ຈຳນວນ",
    unitGoal: "ຮຽນຮູ້ການບວກ ແລະ ການລົບ 3 ຈຳນວນລຽນຕິດ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 90〜94",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການຄິດໄລ່ເລກທີ່ຍາວຂຶ້ນກວ່າເກົ່ານຳກັນ. ວິທີຄິດໄລ່ແມ່ນ ໃຫ້ຄິດໄລ່ຈາກຊ້າຍໄປຂວາຕາມລຳດັບ."}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#FCE4EC", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>{"3 + 2 + 4 = ?"}</div>
            
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ fontSize: "22px", color: "#666" }}>{"ຂັ້ນຕອນທີ 1: ເອົາ 3 + 2"}</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", backgroundColor: "#FFF", padding: "8px 16px", borderRadius: "8px", border: "2px solid #E91E63" }}>{"3 + 2 = 5"}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ fontSize: "22px", color: "#666" }}>{"ຂັ້ນຕອນທີ 2: ເອົາ 5 ໄປບວກ 4"}</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", backgroundColor: "#FFF", padding: "8px 16px", borderRadius: "8px", border: "2px solid #2196F3" }}>{"5 + 4 = 9"}</div>
              </div>
            </div>
            
            <div style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginTop: "16px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 3 + 2 + 4 = 9"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ບໍ່ວ່າຈະເປັນການບວກ ຫຼື ການລົບ, ໃຫ້ເຮັດເລກຄູ່ທຳອິດຢູ່ເບື້ອງຊ້າຍມືກ່ອນສະເໝີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"4 + 1 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"3 + 4 + 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"8 - 3 - 1 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"9 - 2 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"5 + 3 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"7 - 4 + 5 ="}</span>
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
            <p>{"ມີນົກ 4 ໂຕ ເກາະຢູ່ຕົ້ນໄມ້. ບິນມາຕື່ມອີກ 3 ໂຕ, ຈາກນັ້ນບິນໜີໄປ 2 ໂຕ. ຈະຍັງເຫຼືອນົກຈັກໂຕຢູ່ຕົ້ນໄມ້? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໂຕ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາຕົວເລກທີ່ຫາຍໄປ ເພື່ອເຮັດໃຫ້ປະໂຫຍກສັນຍະລັກຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"2 + 4 +"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"= 9"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"10 - 2 -"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"= 5"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{"6 +"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px", margin: 0 }}></span>
                    <span>{"- 1 = 8"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສຳລັບຂໍ້ (1), 2+4=6, ດັ່ງນັ້ນ 6 ບວກຫຍັງຈຶ່ງຈະເປັນ 9?"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 + 5 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"10 - 5 - 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 - 3 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"3 + 7 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"8 - 0 + 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
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
            <span key="1">{"(1) 7, (2) 10, (3) 4, (4) 3, (5) 6, (6) 8"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 4 + 3 - 2 = 5, ຕອບ: 5 ໂຕ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 3, (2) 3, (3) 3"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 10, (2) 3, (3) 9, (4) 6, (5) 10"}</span>
          ]
        }
      ],
      advice: "ການຄິດໄລ່ເລກ 3 ຈຳນວນ, ຖ້າຄິດໄລ່ຕາມລຳດັບຈາກຊ້າຍໄປຂວາເທື່ອລະຄູ່ ຈະບໍ່ເຮັດໃຫ້ເຮົາຫຼົງງ່າຍ. ຄ່ອຍໆເຮັດໄປເທື່ອລະຂັ້ນຕອນເດີ!"
    }
  },
  {
    unitNumber: 11,
    unitTitle: "ການປຽບທຽບຄວາມຍາວ",
    unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບຄວາມຍາວຂອງສິ່ງຂອງຕ່າງໆ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 95〜98",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີປຽບທຽບວ່າ ອັນໃດຍາວກວ່າ ຫຼື ອັນໃດສັ້ນກວ່ານຳກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#F1F8E9", padding: "24px", borderRadius: "16px", border: "2px dashed #8BC34A", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "16px" }}>{"ວິທີການປຽບທຽບ:"}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "24px" }}>📏</span>
                <div style={{ flex: 1 }}>
                  <p>{"1. ວາງສົ້ນໜຶ່ງໃຫ້ພຽງກັນ"}</p>
                  <p>{"2. ແລ້ວສັງເກດເບິ່ງອີກສົ້ນໜຶ່ງວ່າ ອັນໃດຍື່ນອອກໄປຫຼາຍກວ່າ ແມ່ນອັນນັ້ນຍາວກວ່າ."}</p>
                </div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px", backgroundColor: "#FFF", padding: "16px", borderRadius: "8px", fontSize: "22px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "2px", height: "40px", backgroundColor: "#F44336", marginRight: "8px" }}></div>
                <div style={{ width: "200px", height: "16px", backgroundColor: "#FFC107", borderRadius: "4px", border: "1px solid #333" }}></div>
                <span style={{ marginLeft: "12px", fontSize: "22px", fontWeight: "bold" }}>{"ຍາວກວ່າ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "2px", height: "40px", backgroundColor: "#F44336", marginRight: "8px" }}></div>
                <div style={{ width: "150px", height: "16px", backgroundColor: "#4CAF50", borderRadius: "4px", border: "1px solid #333" }}></div>
                <span style={{ marginLeft: "12px", fontSize: "22px" }}>{"ສັ້ນກວ່າ"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສຳຄັນທີ່ສຸດແມ່ນຕ້ອງວາງສົ້ນເບື້ອງໜຶ່ງໃຫ້ພຽງກັນກ່ອນຈຶ່ງຈະປຽບທຽບໄດ້!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງສັງເກດສໍດຳລຸ່ມນີ້ ແລ້ວຕອບຄຳຖາມ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ backgroundColor: "#E3F2FD", padding: "24px", borderRadius: "12px", position: "relative" }}>
              {/* Reference line */}
              <div style={{ position: "absolute", left: "24px", top: "20px", bottom: "20px", width: "2px", backgroundColor: "#F44336", borderLeft: "2px dashed #F44336" }}></div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginLeft: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ກ."}</span>
                  <div style={{ width: "180px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ຂ."}</span>
                  <div style={{ width: "240px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ຄ."}</span>
                  <div style={{ width: "140px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: "bold", width: "30px" }}>{"ງ."}</span>
                  <div style={{ width: "200px", height: "20px", backgroundColor: "#FFEB3B", border: "1px solid #333", borderRadius: "0 10px 10px 0" }}></div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ສໍດຳກ້ານໃດຍາວທີ່ສຸດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ສໍດຳກ້ານໃດສັ້ນທີ່ສຸດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງສັງເກດເສັ້ນຊື່ 2 ເສັ້ນລຸ່ມນີ້. ເສັ້ນໃດຍາວກວ່າກັນ? (ຂຽນຊື່ເສັ້ນໃສ່ບັອກ) "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px", backgroundColor: "#FAFAFA", borderRadius: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ເສັ້ນ ກ:"}</span>
                  {/* Straight line */}
                  <div style={{ width: "200px", height: "6px", backgroundColor: "#2196F3" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ເສັ້ນ ຂ:"}</span>
                  {/* Zig-zag line but visually shorter overall length */}
                  <div style={{ width: "200px", height: "40px", position: "relative" }}>
                    <div style={{ position: "absolute", top: "20px", left: "0", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "-5px", left: "43px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "20px", left: "86px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "-5px", left: "129px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(30deg)", transformOrigin: "left center" }}></div>
                    <div style={{ position: "absolute", top: "20px", left: "172px", width: "50px", height: "6px", backgroundColor: "#4CAF50", transform: "rotate(-30deg)", transformOrigin: "left center" }}></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span>{"ຕອບ: ເສັ້ນທີ່ຍາວກວ່າແມ່ນ ເສັ້ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຊື່ທີ່ຄົດງໍ ຖ້າຈັບຢືດອອກໃຫ້ຊື່ ມັນຈະຍາວອອກໄປອີກເດີ! ລອງຄິດພາບເບິ່ງ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ມີເຊືອກ 3 ເສັ້ນ. ເຊືອກສີແດງຍາວກວ່າເຊືອກສີຟ້າ, ແຕ່ເຊືອກສີແດງສັ້ນກວ່າເຊືອກສີເຫຼືອງ. ເຊືອກສີໃດຍາວທີ່ສຸດ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ backgroundColor: "#F9F9F9", padding: "16px", borderRadius: "8px", border: "1px dashed #CCC", display: "flex", flexDirection: "column", gap: "16px", width: "fit-content" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີແດງ:"}</span>
                <div style={{ height: "8px", width: "150px", backgroundColor: "#F44336", borderRadius: "4px" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີຟ້າ:"}</span>
                <div style={{ height: "8px", width: "100px", backgroundColor: "#2196F3", borderRadius: "4px" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "80px", fontWeight: "bold" }}>{"ສີເຫຼືອງ:"}</span>
                <div style={{ height: "8px", width: "200px", backgroundColor: "#FFEB3B", border: "1px solid #FBC02D", borderRadius: "4px" }}></div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "8px" }}>
              <span>{"ຕອບ: ເຊືອກສີ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            <span key="1">{"(1) ສໍດຳ ຂ, (2) ສໍດຳ ຄ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: ເສັ້ນ ຂ (ເພາະມັນຄົດງໍ ຖ້າຢືດອອກຈະຍາວກວ່າເສັ້ນຊື່ ກ)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"ຕອບ: ເຊືອກສີເຫຼືອງ (ຍາວທີ່ສຸດ)"}</span>
          ]
        }
      ],
      advice: "ການປຽບທຽບຄວາມຍາວ ຕ້ອງວາງຈຸດເລີ່ມຕົ້ນໃຫ້ເທົ່າກັນກ່ອນ. ຖ້າເປັນເສັ້ນໂຄ້ງ ຫຼື ເສັ້ນຊິກແຊັກ, ຄວາມຍາວແທ້ຈິງຂອງມັນຈະຍາວກວ່າທີ່ຕາເຮົາເຫັນເມື່ອມັນຫົດຕົວຢູ່."
    }
  },
  {
    unitNumber: 12,
    unitTitle: "ການບວກ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການບວກເລກທີ່ມີຜົນບວກຫຼາຍກວ່າ 10 (ການບວກທີ່ມີຈື່).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 99〜110",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການບວກເລກທີ່ມີຜົນບວກກາຍ 10 ນຳກັນ. ວິທີທີ່ງ່າຍທີ່ສຸດແມ່ນ "}<strong>{"ການສ້າງໃຫ້ເປັນ 10 ກ່ອນ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FFF3E0", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center", marginBottom: "16px" }}>{"ຕົວຢ່າງ: 9 + 4 = ?"}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>1</div>
                <div style={{ fontSize: "22px" }}>{"ແຍກ 4 ອອກເປັນ 1 ກັບ 3"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>2</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 9 ບວກກັບ 1 ເພື່ອໃຫ້ເປັນ 10"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FF9800", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>3</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 10 ມາບວກກັບ 3 ທີ່ເຫຼືອ ເທົ່າກັບ 13"}</div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                <div style={{ fontSize: "32px", fontWeight: "bold", letterSpacing: "8px" }}>{"9 + 4"}</div>
                {/* V shape under 4 */}
                <div style={{ position: "absolute", top: "35px", right: "6px", fontSize: "22px", color: "#666" }}>/ \</div>
                <div style={{ position: "absolute", top: "50px", right: "0px", display: "flex", gap: "12px", fontSize: "22px", fontWeight: "bold" }}>
                  <span style={{ color: "#F44336" }}>1</span>
                  <span>3</span>
                </div>
                {/* 10 grouping */}
                <div style={{ position: "absolute", top: "70px", left: "0px", width: "70px", height: "2px", backgroundColor: "#F44336", borderBottom: "2px dashed #F44336" }}></div>
                <div style={{ position: "absolute", top: "75px", left: "20px", fontSize: "22px", color: "#F44336", fontWeight: "bold" }}>{"ລວມກັນເປັນ 10"}</div>
              </div>
            </div>
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginTop: "80px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 9 + 4 = 13"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ພະຍາຍາມຈື່ຄູ່ຂອງຕົວເລກທີ່ລວມກັນເປັນ 10 ໃຫ້ໄດ້ (ເຊັ່ນ: 9 ກັບ 1, 8 ກັບ 2, 7 ກັບ 3...) ຈະຊ່ວຍໃຫ້ບວກເລກໄວຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"9 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"8 + 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"7 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"6 + 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"8 + 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"5 + 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ທ້າວຄຳ ມີໝາກບານ 7 ໜ່ວย. ພໍ່ຊື້ໃຫ້ຕື່ມອີກ 6 ໜ່ວຍ. ທ້າວຄຳມີໝາກບານທັງໝົດຈັກໜ່ວຍ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ໜ່ວຍ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ບັອກ ເພື່ອໃຫ້ຜົນບວກເທົ່າກັບຈຳນວນທີ່ກຳນົດໃຫ້: "} <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"8 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 13"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"9 +"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 15"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"+ 6 = 14"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລອງຄິດເບິ່ງວ່າ: 8 ຕ້ອງບວກຫຍັງຈຶ່ງເປັນ 10? ຕ້ອງບວກ 2 ແມ່ນບໍ່. ຫຼັງຈາກນັ້ນ 10 ຕ້ອງບວກຫຍັງອີກຈຶ່ງເປັນ 13? ບວກອີກ 3. ສະແດງວ່າຕົວເລກນັ້ນແມ່ນ 2+3=5 ນັ້ນເອງ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"9 + 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"7 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"8 + 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"4 + 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"5 + 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
            <span key="1">{"(1) 14, (2) 12, (3) 13, (4) 11, (5) 15, (6) 14"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 7 + 6 = 13, ຕອບ: 13 ໜ່ວຍ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 6, (3) 8"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 15, (2) 15, (3) 16, (4) 13, (5) 12"}</span>
          ]
        }
      ],
      advice: "ວິທີສ້າງໃຫ້ເປັນ 10 ແມ່ນວິທີທີ່ໄວທີ່ສຸດ! ເມື່ອເຫັນເລກ 9 ໃຫ້ຄິດເຖິງ 1, ເຫັນ 8 ໃຫ້ຄິດເຖິງ 2. ເມື່ອຝຶກເລື້ອຍໆ ນ້ອງໆຈະສາມາດຕອບໄດ້ໃນໃຈເລີຍ."
    }
  },
  {
    unitNumber: 13,
    unitTitle: "ການປຽບທຽບປະລິມານ",
    unitGoal: "ຮຽນຮູ້ວິທີປຽບທຽບປະລິມານນ້ຳ ຫຼື ຂອງແຫຼວອື່ນໆ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 111〜114",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>{"ມາຮຽນຮູ້ວິທີປຽບທຽບວ່າ ພາຊະນະໃດບັນຈຸນ້ຳໄດ້ຫຼາຍກວ່າກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#E3F2FD", padding: "12px", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>{"ວິທີປຽບທຽບມີ 2 ວິທີຫຼັກ:"}</p>
            
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div className="math-illustration" style={{ flex: 1, minWidth: "250px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px", border: "2px solid #2196F3" }}>
                <p style={{ fontWeight: "bold", color: "#1976D2", fontSize: "22px", marginBottom: "4px" }}>{"ວິທີ 1: ຖອກໃສ່ກັນ"}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "8px 0" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🍾</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກ ກ"}</span>
                  </div>
                  <div style={{ fontSize: "28px", alignSelf: "center" }}>{"→"}</div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🏺</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກ ຂ"}</span>
                  </div>
                </div>
                <p>{"ຖອກນ້ຳຈາກຕຸກ ກ ໃຫ້ເຕັມ, ແລ້ວຖອກນ້ຳຈາກຕຸກ ກ ໃສ່ຕຸກ ຂ ທີ່ວ່າງເປົ່າ."}</p>
                <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                  <li>{"ຖ້ານ້ຳລົ້ນ: ກ ໃຫຍ່ກວ່າ"}</li>
                  <li>{"ຖ້ານ້ຳບໍ່ເຕັມ: ຂ ໃຫຍ່ກວ່າ"}</li>
                </ul>
              </div>
              
              <div className="math-illustration" style={{ flex: 1, minWidth: "250px", backgroundColor: "#FFF", padding: "12px", borderRadius: "12px", border: "2px solid #4CAF50" }}>
                <p style={{ fontWeight: "bold", color: "#388E3C", fontSize: "22px", marginBottom: "4px" }}>{"ວິທີ 2: ໃຊ້ຈອກນ້ອຍວັດແທກ"}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "8px 0" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px" }}>🍾</div>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"ຕຸກໜຶ່ງ"}</span>
                  </div>
                  <div style={{ fontSize: "28px", alignSelf: "center" }}>{"="}</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "24px" }}>🥛🥛🥛🥛</span>
                  </div>
                </div>
                <p>{"ຖອກນ້ຳຈາກຕຸກແຕ່ລະອັນໃສ່ຈອກນ້ອຍທີ່ມີຂະໜາດເທົ່າກັນ ແລ້ວນັບຈຳນວນຈອກ."}</p>
                <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                  <li>{"ອັນໃດຖອກໄດ້ຈອກຫຼາຍກວ່າ ແມ່ນບັນຈຸໄດ້ຫຼາຍກວ່າ."}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ການເບິ່ງດ້ວຍຕາເປົ່າອາດຈະຫຼອກເຮົາໄດ້ ຖ້າຕຸກມີຮູບຮ່າງແຕກຕ່າງກັນ. ວິທີທີ່ແນ່ນອນທີ່ສຸດແມ່ນການວັດແທກຕົວຈິງ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້ ໂດຍອີງໃສ່ວິທີທີ 2 (ໃຊ້ຈອກນ້ອຍວັດແທກ): "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#FAFAFA", padding: "24px", borderRadius: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ຕຸກ ກ:"}</span>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span>
                </div>
                <span style={{ fontSize: "18px" }}>{"(ຖອກໄດ້ 5 ຈອກ)"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>{"ຕຸກ ຂ:"}</span>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span><span style={{ fontSize: "32px" }}>🥛</span>
                </div>
                <span style={{ fontSize: "18px" }}>{"(ຖອກໄດ້ 3 ຈອກ)"}</span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ຕຸກໃດບັນຈຸນ້ຳໄດ້ຫຼາຍກວ່າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ຕຸກທີ່ບັນຈຸນ້ຳໄດ້ໜ້ອຍກວ່າ ແມ່ນຕຸກໃດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ນາງມະນີ ເອົານ້ຳໝາກກ້ຽງຈາກກ່ອງໃຫຍ່ ຖອກໃສ່ຈອກນ້ອຍໄດ້ 8 ຈອກ. ທ້າວສອນ ເອົານ້ຳໝາກກ້ຽງຈາກຕຸກ ຖອກໃສ່ຈອກນ້ອຍຂະໜາດດຽວກັນໄດ້ 6 ຈອກ. ພາຊະນະໃດບັນຈຸນ້ຳໝາກກ້ຽງໄດ້ຫຼາຍກວ່າ? ແລະ ຫຼາຍກວ່າຈັກຈອກ? "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ພາຊະນະທີ່ບັນຈຸໄດ້ຫຼາຍກວ່າແມ່ນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຫຼາຍກວ່າກັນ ຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ຈອກ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຢາກຮູ້ວ່າຫຼາຍກວ່າກັນເທົ່າໃດ ແມ່ນໃຫ້ເອົາຈຳນວນທີ່ຫຼາຍກວ່າ ມາລົບ ຈຳນວນທີ່ໜ້ອຍກວ່າເດີ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕຸກ A, B, C ສາມາດຖອກນ້ຳໃສ່ຈອກນ້ອຍຂະໜາດດຽວກັນໄດ້ 4 ຈອກ, 7 ຈອກ ແລະ 5 ຈອກ ຕາມລຳດັບ. ຈົ່ງລຽງລຳດັບຕຸກ ຈາກຕຸກທີ່ບັນຈຸນ້ຳໄດ້ໜ້ອຍທີ່ສຸດ ໄປຫາ ຕຸກທີ່ບັນຈຸນ້ຳໄດ້ຫຼາຍທີ່ສຸດ. "} <span className="point-label">{"(10 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#F9F9F9", padding: "16px", borderRadius: "8px", border: "1px dashed #CCC", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#1976D2" }}>{"A"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"4 ຈອກ"}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#D32F2F" }}>{"B"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛🥛<br/>🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"7 ຈອກ"}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}>{"C"}</div>
                <div style={{ fontSize: "24px" }}>🥛🥛🥛🥛🥛</div>
                <div style={{ fontSize: "14px" }}>{"5 ຈອກ"}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", marginTop: "16px" }}>
              <span>{"ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              <span>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              <span>{"→"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
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
            <span key="1">{"(1) ຕຸກ ກ (ເພາະຖອກໄດ້ 5 ຈອກ), (2) ຕຸກ ຂ (ເພາະຖອກໄດ້ພຽງ 3 ຈອກ)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: ກ່ອງໃຫຍ່ ບັນຈຸໄດ້ຫຼາຍກວ່າ. ຫຼາຍກວ່າກັນ 2 ຈອກ (8 - 6 = 2)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"ຕອບ: A → C → B (ເພາະ 4 < 5 < 7)"}</span>
          ]
        }
      ],
      advice: "ການໃຊ້ຈອກນ້ອຍທີ່ມີຂະໜາດເທົ່າກັນເປັນເຄື່ອງວັດແທກ ແມ່ນວິທີທີ່ດີທີ່ສຸດໃນການປຽບທຽບປະລິມານ ເພາະມັນຈະບອກເຮົາໄດ້ວ່າ ຫຼາຍກວ່າ ຫຼື ໜ້ອຍກວ່າກັນເທົ່າໃດຢ່າງຊັດເຈນ!"
    }
  },
  {
    unitNumber: 14,
    unitTitle: "ການລົບ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ການລົບເລກທີ່ມີຕົວຕັ້ງລົບຫຼາຍກວ່າ 10 (ການລົບແບບຢືມ).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 115〜127",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການລົບເລກທີ່ຕົວຕັ້ງລົບຫຼາຍກວ່າ 10 ນຳກັນ. ວິທີທີ່ງ່າຍທີ່ສຸດແມ່ນ "}<strong>{"ແບ່ງອອກເປັນ 10 ກັບຈຳນວນທີ່ເຫຼືອ"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#E8F5E9", padding: "16px", borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center", marginBottom: "8px" }}>{"ຕົວຢ່າງ: 13 - 9 = ?"}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>1</div>
                <div style={{ fontSize: "22px" }}>{"ແຍກ 13 ອອກເປັນ 10 ກັບ 3"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>2</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 10 ມາລົບອອກ 9 ເຫຼືອ 1"}</div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4CAF50", color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>3</div>
                <div style={{ fontSize: "22px" }}>{"ເອົາ 1 ທີ່ໄດ້ ມາບວກກັບ 3 ທີ່ແຍກໄວ້ຕອນທຳອິດ ເທົ່າກັບ 4"}</div>
              </div>
            </div>
            
            {/* Line Diagram for visual explanation */}
            <div className="math-illustration" style={{ marginTop: "16px", padding: "12px", backgroundColor: "#FFF", borderRadius: "12px", border: "2px solid #8BC34A" }}>
              <p style={{ fontWeight: "bold", textAlign: "center", marginBottom: "8px", fontSize: "22px" }}>{"ແຜນວາດເສັ້ນ (ເສັ້ນສະແດງຈຳນວນ)"}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {/* Total 13 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ທັງໝົດ 13:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "76.9%", height: "100%", backgroundColor: "#2196F3", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>10</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "#FF9800", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>3</div>
                  </div>
                </div>
                
                {/* Minus 9 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ເອົາອອກ 9:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "69.2%", height: "100%", backgroundColor: "#F44336", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>{"ລົບອອກ 9"}</div>
                    <div style={{ width: "7.7%", height: "100%", backgroundColor: "#4CAF50", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>1</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "transparent" }}></div>
                  </div>
                </div>
                
                {/* Remaining */}
                <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                  <div style={{ width: "80px", textAlign: "right", paddingRight: "8px", fontSize: "22px" }}>{"ສ່ວນທີ່ເຫຼືອ:"}</div>
                  <div style={{ display: "flex", width: "100%", height: "28px" }}>
                    <div style={{ width: "69.2%", height: "100%", backgroundColor: "transparent" }}></div>
                    <div style={{ width: "7.7%", height: "100%", backgroundColor: "#4CAF50", border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>1</div>
                    <div style={{ width: "23.1%", height: "100%", backgroundColor: "#FF9800", border: "1px solid #000", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "20px" }}>3</div>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "4px", fontWeight: "bold", color: "#4CAF50", fontSize: "22px" }}>{"1 + 3 = 4"}</div>
              </div>
            </div>
            
            <div style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginTop: "16px", color: "#D32F2F" }}>
              {"ດັ່ງນັ້ນ, 13 - 9 = 4"}
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ແຍກ 10 ອອກມາກ່ອນ ແລ້ວເອົາ 10 ໄປລົບໃຫ້ຕົວລົບ ຈະເຮັດໃຫ້ຄິດໄລ່ໄດ້ງ່າຍຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"12 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"15 - 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"11 - 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"14 - 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"16 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"13 - 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ນາງໃຈ ມີເຂົ້າໜົມ 15 ກ້ອນ. ລາວແບ່ງໃຫ້ນ້ອງ 7 ກ້ອນ. ນາງໃຈຈະເຫຼືອເຂົ້າໜົມຈັກກ້ອນ? "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div className="math-illustration" style={{ padding: "24px", backgroundColor: "#F9F9F9", borderRadius: "12px", border: "2px dashed #CCC", margin: "16px 0" }}>
              {/* Simple Line Diagram for the problem */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "100px", textAlign: "right", paddingRight: "16px", fontSize: "18px", fontWeight: "bold" }}>{"ທັງໝົດ:"}</div>
                  <div style={{ display: "flex", flex: 1, height: "40px", maxWidth: "400px" }}>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#FFCDD2", border: "2px solid #333", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", fontWeight: "bold" }}>{"15 ກ້ອນ"}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "100px", textAlign: "right", paddingRight: "16px", fontSize: "18px", fontWeight: "bold" }}>{"ແບ່ງໃຫ້:"}</div>
                  <div style={{ display: "flex", flex: 1, height: "40px", maxWidth: "400px" }}>
                    <div style={{ width: "46.6%", height: "100%", backgroundColor: "#F44336", border: "2px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "18px", fontWeight: "bold" }}>{"7 ກ້ອນ"}</div>
                    <div style={{ width: "53.4%", height: "100%", backgroundColor: "#C8E6C9", border: "2px solid #333", borderLeft: "none", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", fontWeight: "bold" }}>{"? ເຫຼືອ"}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>{"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank answer-blank--large"></span></p>
            <p>{"ຕອບ: "} <span className="answer-blank" style={{ display: "inline-block", width: "50px" }}></span> {"ກ້ອນ"}</p>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຕື່ມຕົວເລກໃສ່ບັອກ ເພື່ອໃຫ້ປະໂຫຍກສັນຍະລັກຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"14 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 9"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"12 -"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"= 4"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"- 8 = 7"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                  <span>{"- 5 = 6"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຂໍ້ (3) ຕົວຕັ້ງລົບລົບອອກ 8 ແລ້ວເຫຼືອ 7. ສະແດງວ່າຖ້າເອົາ 8 ມາບວກກັບ 7 ກໍຈະໄດ້ຕົວຕັ້ງລົບນັ້ນເອງ!"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"17 - 8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"11 - 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"15 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"13 - 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", gridColumn: "span 2", width: "fit-content", margin: "0 auto" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"18 - 9 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
            <span key="1">{"(1) 3, (2) 7, (3) 7, (4) 7, (5) 7, (6) 7"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"ປະໂຫຍກສັນຍະລັກ: 15 - 7 = 8, ຕອບ: 8 ກ້ອນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 5, (2) 8, (3) 15, (4) 11"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 9, (2) 5, (3) 6, (4) 8, (5) 9"}</span>
          ]
        }
      ],
      advice: "ການໃຊ້ແຜນວາດເສັ້ນ (ເສັ້ນສະແດງຈຳນວນ) ຈະຊ່ວຍໃຫ້ເຮົາເຫັນພາບການລົບໄດ້ຊັດເຈນຂຶ້ນ. ເວລາແກ້ໂຈດບັນຫາ ລອງແຕ້ມເສັ້ນສະແດງແບບງ່າຍໆເບິ່ງເດີ!"
    }
  },
  {
    unitNumber: 15,
    unitTitle: "ເງິນກີບ ແລະ ການປຽບທຽບ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບເງິນລາວ (ເງິນກີບ) ແລະ ການປຽບທຽບມູນຄ່າ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 128〜129",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮູ້ຈັກກັບເງິນກີບ ທີ່ເຮົາໃຊ້ໃນຊີວິດປະຈຳວັນນຳກັນ."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#F3E5F5", padding: "24px", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "16px", border: "2px solid #9C27B0" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px", textAlign: "center" }}>{"ໃບເງິນກີບທີ່ຄວນຮູ້ຈັກ:"}</p>
            
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px" }}>
              {/* 500 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#E91E63", borderRadius: "4px", border: "1px solid #C2185B", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>500</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 500 ກີບ"}</span>
              </div>
              
              {/* 1000 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#4CAF50", borderRadius: "4px", border: "1px solid #388E3C", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>1000</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 1,000 ກີບ"}</span>
              </div>
              
              {/* 2000 Kip Note */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div className="math-illustration" style={{ width: "140px", height: "70px", backgroundColor: "#2196F3", borderRadius: "4px", border: "1px solid #1976D2", position: "relative", boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  <span style={{ fontSize: "28px", fontWeight: "bold" }}>2000</span>
                </div>
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>{"ໃບ 2,000 ກີບ"}</span>
              </div>
            </div>
            
            <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#FFF", borderRadius: "8px" }}>
              <p><strong>{"ການປຽບທຽບມູນຄ່າ:"}</strong></p>
              <p>{"ໃບ 1,000 ກີບ ມີຄ່າເທົ່າກັບ ໃບ 500 ກີບ ຈຳນວນ 2 ໃບ (500 + 500 = 1000)"}</p>
              <p>{"ໃບ 2,000 ກີບ ມີຄ່າເທົ່າກັບ ໃບ 1,000 ກີບ ຈຳນວນ 2 ໃບ (1000 + 1000 = 2000)"}</p>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ເງິນກີບແຕ່ລະໃບມີສີແຕກຕ່າງກັນ. ຈື່ສີຂອງໃບເງິນກໍຊ່ວຍໃຫ້ຈຳແນກໄດ້ງ່າຍຂຶ້ນ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງສັງເກດຮູບໃບເງິນລຸ່ມນີ້ ແລ້ວບອກວ່າມີມູນຄ່າລວມກັນທັງໝົດເທົ່າໃດ? "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#E91E63", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>500</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#4CAF50", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>1000</div>
                  <div style={{ width: "80px", height: "40px", backgroundColor: "#2196F3", borderRadius: "2px", border: "1px solid #333", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>2000</div>
                </div>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ທ້າວບຸນ ມີເງິນ 1 ໃບ ມູນຄ່າ 2,000 ກີບ. ລາວຕ້ອງການປ່ຽນເປັນໃບ 500 ກີບ. ລາວຈະໄດ້ໃບ 500 ກີບ ທັງໝົດຈັກໃບ? "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຕອບ: ໄດ້ໃບ 500 ກີບ ທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ໃບ"}</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຖ້າປ່ຽນເປັນໃບ 1,000 ກີບ ຈະໄດ້ທັງໝົດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ໃບ"}</span>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໃບ 1,000 ກີບ ປ່ຽນເປັນໃບ 500 ກີບ ໄດ້ 2 ໃບ. ແລ້ວ 2,000 ກີບເດ ຈະໄດ້ຈັກໃບນໍ?"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ນາງດາວໄປຮ້ານຄ້າ, ລາວຊື້ເຂົ້າໜົມ 1,000 ກີບ ແລະ ຊື້ນ້ຳຫວານ 2,000 ກີບ. ລາວຈ່າຍດ້ວຍໃບ 2,000 ກີບ ຈຳນວນ 2 ໃບ. ແມ່ຄ້າຕ້ອງທອນເງິນໃຫ້ນາງດາວເທົ່າໃດ? "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <span>{"ຕອບ: ແມ່ຄ້າຕ້ອງທອນເງິນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <span>{"ຖ້າດາວຊື້ພຽງແຕ່ເຂົ້າໜົມ 1,000 ກີບ ແມ່ຄ້າຕ້ອງທອນເງິນເທົ່າໃດ? (ຈ່າຍດ້ວຍ 2,000 ກີບ 1 ໃບ)"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px", marginTop: "4px", paddingLeft: "44px" }}>
              <span>{"ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              <span>{"ກີບ"}</span>
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
            <span key="1">{"(1) 2000, (2) 3000"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"ຕອບ: 4 ໃບ (ເພາະ 500 + 500 + 500 + 500 = 2000)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ທອນ 1000 ກີບ, (2) ທອນ 1000 ກີບ"}</span>
          ]
        }
      ],
      advice: "ເງິນແມ່ນສິ່ງສຳຄັນໃນຊີວິດປະຈຳວັນ. ຝຶກນັບເງິນແທ້ໆນຳພໍ່ແມ່ເວລາໄປຕະຫຼາດ ຈະຊ່ວຍໃຫ້ເຮົາເກັ່ງເລກຂຶ້ນຫຼາຍເລີຍ!"
    }
  },
  {
    unitNumber: 16,
    unitTitle: "ຮູບຮ່າງຂອງສິ່ງຕ່າງໆທີ່ຢູ່ອ້ອມຕົວເຮົາ (ຕໍ່)",
    unitGoal: "ຝຶກການຈຳແນກ ແລະ ນຳໃຊ້ຮູບຮ່າງຕ່າງໆ (ກັບ, ທໍ່, ໜ່ວຍມົນ) ໃນການແກ້ບັນຫາ.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 130〜135",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາທົບທວນເລື່ອງຮູບຮ່າງ ແລະ ເບິ່ງວ່າຮູບຮ່າງເຫຼົ່ານີ້ເມື່ອເບິ່ງຈາກຫຼາຍໆດ້ານ ມັນຈະເປັນຮູບແນວໃດ."}</p>
          <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", backgroundColor: "#E0F7FA", padding: "24px", borderRadius: "16px", border: "2px solid #00BCD4", fontSize: "22px" }}>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px", flex: 1, minWidth: "200px" }}>
              <div style={{ fontWeight: "bold", fontSize: "22px", color: "#0097A7" }}>{"ຮູບທໍ່"}</div>
              <div style={{ width: "60px", height: "90px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "30px/10px", boxShadow: "4px 4px 0 #0097A7" }}></div>
              <p style={{ textAlign: "center", fontSize: "22px" }}>{"ຖ້າເບິ່ງຈາກທາງເທິງລົງມາ ຈະເຫັນເປັນຮູບ "}<strong>{"ວົງມົນ"}</strong></p>
              <div style={{ width: "50px", height: "50px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "50%" }}></div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px", flex: 1, minWidth: "200px" }}>
              <div style={{ fontWeight: "bold", fontSize: "22px", color: "#0097A7" }}>{"ຮູບກັບ"}</div>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4", borderRadius: "8px", boxShadow: "4px 4px 0 #0097A7" }}></div>
              <p style={{ textAlign: "center", fontSize: "22px" }}>{"ຖ້າເບິ່ງຈາກທາງເທິງ ຫຼື ທາງຂ້າງ ຈະເຫັນເປັນຮູບ "}<strong>{"ຈະຕຸລັດ ຫຼື ສີ່ແຈສາກ"}</strong></p>
              <div style={{ width: "60px", height: "60px", backgroundColor: "#B2EBF2", border: "2px solid #00BCD4" }}></div>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສິ່ງຂອງບາງຢ່າງ ເວລາເບິ່ງຈາກດ້ານໜ້າ ກັບ ດ້ານເທິງ ອາດຈະເຫັນເປັນຮູບຮ່າງທີ່ບໍ່ຄືກັນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງບອກວ່າ ຖ້າເອົາວັດຖຸລຸ່ມນີ້ມາວາງເທິງເຈ້ຍ ແລ້ວເອົາສໍດຳຂີດຕາມຂອບພື້ນຂອງມັນ, ຈະໄດ້ຮູບຮ່າງຫຍັງ? (ວົງມົນ ຫຼື ສີ່ແຈ) "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "24px" }}>🥫</span>
                <span>{"ກະປ໋ອງນົມ (ຮູບທໍ່) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "24px" }}>📦</span>
                <span>{"ກ່ອງເຈ້ຍ (ຮູບກັບ) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ fontSize: "24px" }}>⚽</span>
                <span>{"ໝາກບານ (ຮູບໜ່ວຍມົນ):"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ fontSize: "24px" }}>🧻</span>
                <span>{"ເຈ້ຍອະນາໄມ (ຮູບທໍ່) ຕັ້ງໄວ້:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ນາງວຽງ ແຕ້ມຮູບ ໂດຍໃຊ້ຮູບຮ່າງຕ່າງໆ. ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <p>{"ລາວໃຊ້ຮູບສີ່ແຈ 2 ຮູບ ສຳລັບຕົວລົດ. ລາວຄວນໃຊ້ຮູບຮ່າງຫຍັງ ສຳລັບລໍ້ລົດ? (ເພື່ອໃຫ້ລົດແລ່ນໄດ້)"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ຄວນໃຊ້ຮູບ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <p>{"ຖ້າລາວຕ້ອງການແຕ້ມຮູບເຮືອນ, ຫຼັງຄາເຮືອນຄວນໃຊ້ຮູບຮ່າງຫຍັງຈຶ່ງຈະເໝາະສົມ?"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                  <span>{"ຕອບ: ຄວນໃຊ້ຮູບ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ລໍ້ລົດຕ້ອງກິ້ງໄດ້ ແມ່ນບໍ່? ຮູບຮ່າງຫຍັງນໍທີ່ກິ້ງໄດ້ດີທີ່ສຸດ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງບອກຮູບຮ່າງຂອງເງົາ ຖ້າເອົາວັດຖຸລຸ່ມນີ້ໄປວາງກາງແດດ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <p>{"ຖ້າເອົາຮູບໜ່ວຍມົນ (ເຊັ່ນ ໝາກບານ) ມາວາງ, ເງົາຂອງມັນທີ່ຕົກໃສ່ພື້ນ ຈະເປັນຮູບຮ່າງຫຍັງ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"ຕອບ: ເປັນຮູບ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <p>{"ຖ້າເອົາຮູບກັບ (ເຊັ່ນ ກ່ອງເຈ້ຍ) ມາວາງ, ເງົາຂອງມັນທີ່ຕົກໃສ່ພື້ນ ຈະເປັນຮູບຮ່າງຫຍັງ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"ຕອບ: ເປັນຮູບ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="1">{"(1) ວົງມົນ, (2) ສີ່ແຈ, (3) ວົງມົນ, (4) ວົງມົນ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ວົງມົນ (ເພື່ອໃຫ້ກິ້ງໄດ້), (2) ສາມແຈ (ສຳລັບຫຼັງຄາເຮືອນ)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ວົງມົນ, (2) ສີ່ແຈ"}</span>
          ]
        }
      ],
      advice: "ຮູບຮ່າງສາມມິຕິ (ກັບ, ທໍ່, ໜ່ວຍມົນ) ເມື່ອເບິ່ງແຕ່ດ້ານດຽວ ຫຼື ເບິ່ງເງົາຂອງມັນ ຈະເຫັນເປັນຮູບຮ່າງສອງມິຕິ (ສີ່ແຈ, ວົງມົນ) ນັ້ນເອງ."
    }
  },
  {
    unitNumber: 17,
    unitTitle: "ຈຳນວນທີ່ຫຼາຍກວ່າ 20",
    unitGoal: "ຮຽນຮູ້ການນັບ, ການອ່ານ ແລະ ການຂຽນຈຳນວນຮອດ 100.",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 136〜153",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ມາຮຽນການນັບເລກທີ່ຫຼາຍກວ່າ 20 ນຳກັນ. ວິທີນັບທີ່ງ່າຍທີ່ສຸດຄື "}<strong>{"ການມັດເປັນກຸ່ມລະ 10"}</strong>{"."}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FFF8E1", padding: "24px", borderRadius: "16px", border: "2px solid #FFC107", display: "flex", flexDirection: "column", gap: "16px", fontSize: "22px" }}>
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>{"ຕົວຢ່າງ: ມີໄມ້ດິ້ວທັງໝົດເທົ່າໃດ?"}</p>
            
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-end", flexWrap: "wrap", justifyContent: "center" }}>
              {/* Bundle of 10s */}
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ position: "relative", width: "40px", height: "80px" }}>
                    <div style={{ position: "absolute", left: "5px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "12px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "19px", width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", left: "26px", width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                    <div style={{ position: "absolute", top: "35px", left: "0", width: "40px", height: "10px", backgroundColor: "#F44336", borderRadius: "5px" }}></div>
                  </div>
                </div>
              </div>
              
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>{"ກັບ"}</div>
              
              {/* Single ones */}
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#8D6E63", borderRadius: "2px" }}></div>
                <div style={{ width: "5px", height: "80px", backgroundColor: "#795548", borderRadius: "2px" }}></div>
              </div>
            </div>
            
            <div className="math-illustration" style={{ display: "flex", justifyContent: "space-around", marginTop: "16px", backgroundColor: "#FFF", padding: "16px", borderRadius: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "22px", color: "#F44336", fontWeight: "bold" }}>{"3 ມັດ (ກຸ່ມລະ 10)"}</p>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{"30"}</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "22px", color: "#2196F3", fontWeight: "bold" }}>{"ກັບອີກ 4 ອັນ"}</p>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{"4"}</p>
              </div>
            </div>
            
            <p style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", color: "#D32F2F", marginTop: "16px" }}>
              {"ລວມເປັນ 34 (ສາມສິບສີ່)"}
            </p>
          </div>
        </div>
      ),
      hint: {
        text: "ເວລາອ່ານ ໃຫ້ອ່ານຫຼັກສິບກ່ອນ (ເຊັ່ນ ສາມສິບ) ແລ້ວຈຶ່ງອ່ານຫຼັກຫົວໜ່ວຍ (ເຊັ່ນ ສີ່).",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຂຽນຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"2 ກຸ່ມລະສິບ ກັບ 5 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"4 ກຸ່ມລະສິບ ກັບ 8 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"6 ກຸ່ມລະສິບ ກັບ 0 ອັນ ເປັນ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p>{"ຈົ່ງຕື່ມຕົວເລກທີ່ຂາດຫາຍໄປໃສ່ໃນລຳດັບ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"48, 49, "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{", 51, 52"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"75, 76, 77, "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{", 79"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງອ່ານຈຳນວນແລ້ວຂຽນເປັນຕົວເລກ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເຈັດສິບເກົ້າ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ເກົ້າສິບເອັດ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຊາວສອງ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"ສາມສິບຫ້າ :"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ຄຳວ່າ 'ເອັດ' ໝາຍເຖິງເລກ 1 ເວລາມັນຢູ່ທາງຫຼັງຂອງຫຼັກສິບເດີ! (ເຊັ່ນ 21 = ຊາວເອັດ)"
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໃຫ້ຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <p>{"ຖ້າມີ 9 ກຸ່ມລະສິບ ກັບອີກ 10 ອັນ. ຈຳນວນທັງໝົດຈະແມ່ນເທົ່າໃດ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ຕອບ: ຈຳນວນທັງໝົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <p>{"ຖ້າມີ 5 ກຸ່ມລະສິບ ກັບອີກ 12 ອັນ. ຈຳນວນທັງໝົດຈະແມ່ນເທົ່າໃດ?"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ຕອບ: ຈຳນວນທັງໝົດແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
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
            <span key="1">{"(1) 25, (2) 48, (3) 60"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(1) 50, (2) 78"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="3">{"(1) 79, (2) 91, (3) 22, (4) 35"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">{"(1) 100, (2) 62 (ເພາະ 12 ອັນ ສາມາດແຍກອອກເປັນ 1 ກຸ່ມລະສິບ ກັບອີກ 2 ອັນ)"}</span>
          ]
        }
      ],
      advice: "ເມື່ອຈຳນວນຮອດ 10 ໃຫ້ມັດລວມກັນເປັນ 1 ກຸ່ມລະສິບ. ເມື່ອມີ 10 ກຸ່ມລະສິບ ມັນກໍຄື 100 (ໜຶ່ງຮ້ອຍ) ນັ້ນເອງ!"
    }
  },
  {
    unitNumber: 18,
    unitTitle: "ເລກລາວ",
    unitGoal: "ຮຽນຮູ້ການອ່ານ ແລະ ການຂຽນຕົວເລກລາວ (໑, ໒, ໓...).",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 154〜161",
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>{"ນອກຈາກຕົວເລກອາຣັບ (1, 2, 3) ທີ່ເຮົາໃຊ້ແລ້ວ, ປະເທດເຮົາຍັງມີຕົວເລກລາວອີກດ້ວຍ. ມາຮູ້ຈັກນຳກັນ:"}</p>
          <div className="math-illustration" style={{ backgroundColor: "#FCE4EC", padding: "24px", borderRadius: "16px", border: "2px solid #E91E63", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"1"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໑"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"6"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໖"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"2"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໒"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"7"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໗"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"3"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໓"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"8"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໘"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"4"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໔"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"9"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໙"}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"5"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໕"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "12px 24px", borderRadius: "8px", border: "1px solid #CCC" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{"0"}</span>
              <span style={{ fontSize: "24px" }}>{"="}</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#E91E63" }}>{"໐"}</span>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: "ສັງເກດດີໆເດີ! ເລກ ໒ (2) ກັບ ເລກ ໓ (3) ຂຽນຄ້າຍຄືກັນແຕ່ ໓ ມີຫາງຍາວກວ່າ.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຕົວເລກອາຣັບລຸ່ມນີ້ ໃຫ້ເປັນຕົວເລກລາວ: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"4"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"7"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"5"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"10"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"25"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"8"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(7)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"9"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(8)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"12"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(9)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"20"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(10)"}</span>
                <span style={{ fontSize: "24px", minWidth: "30px" }}>{"50"}</span>
                <span>{"="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ ໂດຍຂຽນຄຳຕອບເປັນຕົວເລກລາວ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"໔ + ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"໑໐ - ໓ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"໑໕ - ໕ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "24px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span>{"໘ + ໒ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນເປັນຕົວເລກອາຣັບໃນໃຈກ່ອນ 4+5=? ແລ້ວຈຶ່ງປ່ຽນຄຳຕອບກັບເປັນເລກລາວ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ໃຫ້ຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
              <p>{"ຈົ່ງຂຽນປີປັດຈຸບັນ (ຕົວຢ່າງ: 2024) ເປັນຕົວເລກລາວ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ປີ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
              <p>{"ຈົ່ງຂຽນອາຍຸຂອງນ້ອງເອງ ເປັນຕົວເລກລາວ:"}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span>{"ອາຍຸ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ປີ"}</span>
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
            <span key="1">{"(1) ໔, (2) ໗, (3) ໕, (4) ໑໐, (5) ໒໕, (6) ໘, (7) ໙, (8) ໑໒, (9) ໒໐, (10) ໕໐"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) ໙ (4+5=9), (2) ໗ (10-3=7), (3) ໑໐ (15-5=10), (4) ໑໐ (8+2=10)"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ໒໐໒໔ (ຫຼື ຕາມປີປັດຈຸບັນ), (2) ຂຽນອາຍຸເປັນຕົວເລກລາວ (ເຊັ່ນ ໖ ປີ ຫຼື ໗ ປີ)"}</span>
          ]
        }
      ],
      advice: "ຕົວເລກລາວເປັນເອກະລັກຂອງຊາດລາວເຮົາ. ນ້ອງໆຄວນຝຶກຂຽນໃຫ້ງາມໆ ແລະ ຈື່ໃຫ້ໄດ້ທຸກຕົວເດີ!"
    }
  }
];
