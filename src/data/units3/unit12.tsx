import React from "react";
import { UnitData } from "../units2";
import {
  ItemGrid,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  NumberLine,
  NumberCards,
  TapeDiagram,
  Shape,
} from "@/components/illustrations";

export const unit12Data: UnitData = {
    
    unitNumber: 12,
    unitTitle: "ການຫານຕາມທາງຕັ້ງ",
    unitGoal: "ຮຽນຮູ້ການຫານຕາມທາງຕັ້ງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: {
        text: "ການຫານເລກຫຼາຍຫຼັກຕ້ອງເລີ່ມຈາກຫຼັກທີ່ໃຫຍ່ທີ່ສຸດ (ຊ້າຍຫາຂວາ) ສະເໝີ! ຢ່າລືມຂັ້ນຕອນ: ຫານ -> ຄູນ -> ລົບ -> ຊັກລົງມາ.",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"12. ວິທີຄິດໄລ່ການຫານຕາມທາງຕັ້ງ"}
          </h3>
          <p style={{ fontSize: "22px" }}>
            {
              "ຕົວຢ່າງ: 76 ÷ 3. ພວກເຮົາເລີ່ມຫານຈາກຫຼັກສິບ (ຫຼັກໃຫຍ່ສຸດ) ແລ້ວຈຶ່ງຫານຫຼັກໜ່ວຍ."
            }
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                border: "2px dashed #4CAF50",
                padding: "24px",
                borderRadius: "12px",
                backgroundColor: "#F1F8E9",
              }}
            >
              <table
                className="math-illustration"
                style={{
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-number)",
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"76"}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"3"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"6 "}
                    </td>
                    <td
                      style={{
                        borderLeft: "3px solid #000",
                        borderTop: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "left",
                      }}
                    >
                      {"25"}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"16"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: "3px solid #000",
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {"15"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "4px 16px",
                        textAlign: "right",
                        whiteSpace: "pre",
                      }}
                    >
                      {" 1"}
                    </td>
                    <td
                      style={{ borderLeft: "3px solid #000", padding: "0" }}
                    ></td>
                  </tr>
                </tbody>
              </table>
              <span
                style={{
                  color: "#D32F2F",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {"ຄຳຕອບ: 25 ເສດ 1"}
              </span>
            </div>
            <div
              style={{ fontSize: "22px", maxWidth: "450px", lineHeight: "1.6" }}
            >
              <p
                style={{
                  margin: "4px 0",
                  fontWeight: "bold",
                  color: "#1976D2",
                }}
              >
                {"ຂັ້ນຕອນການຄິດໄລ່ 76 ÷ 3 ຕາມທາງຕັ້ງ:"}
              </p>
              <p style={{ margin: "4px 0" }}>{"① ຫຼັກສິບ (ຫານຫຼັກສິບກ່ອນ):"}</p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຫານ: 7 ÷ 3 = 2. ຂຽນ '2' ໃສ່ຫຼັກສິບຂອງຄຳຕອບ."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄູນ: 3 x 2 = 6. ຂຽນ '6' ໄວ້ກ້ອງເລກ 7."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ລົບ: 7 - 6 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 6."}
              </p>

              <p style={{ margin: "8px 0 4px 0" }}>
                {"② ຫຼັກໜ່ວຍ (ຊັກເລກຫຼັກໜ່ວຍລົງມາ):"}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຊັກລົງມາ: ຊັກເລກ '6' ລົງມາໃສ່ທາງຂ້າງເລກ 1 ຈະໄດ້ '16'."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຫານ: 16 ÷ 3 = 5. ຂຽນ '5' ໃສ່ຫຼັກໜ່ວຍຂອງຄຳຕອບ."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ຄູນ: 3 x 5 = 15. ຂຽນ '15' ໄວ້ກ້ອງເລກ 16."}
              </p>
              <p style={{ margin: "2px 0 2px 16px" }}>
                {"• ລົບ: 16 - 15 = 1. ຂຽນ '1' ໄວ້ກ້ອງເລກ 15 (ຕົວເສດ)."}
              </p>

              <p
                style={{
                  margin: "8px 0 0 0",
                  fontWeight: "bold",
                  color: "#D32F2F",
                }}
              >
                {"③ ຜົນຫານແມ່ນ 25, ເສດ 1."}
              </p>
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
              {"ຈົ່ງຄິດໄລ່ການຫານລຸ່ມນີ້ (ແນວຕັ້ງ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", q: "48 ÷ 2 =" },
                { n: "(2)", q: "69 ÷ 3 =" },
                { n: "(3)", q: "84 ÷ 4 =" },
                { n: "(4)", q: "55 ÷ 5 =" },
                { n: "(5)", q: "72 ÷ 6 =" },
                { n: "(6)", q: "96 ÷ 8 =" },
                { n: "(7)", q: "85 ÷ 5 =" },
                { n: "(8)", q: "91 ÷ 7 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການຫານ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p>
                {
                  "(9) ມີໝາກກ້ຽງ 84 ໜ່ວຍ, ແບ່ງໃຫ້ 4 ຄົນເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກໜ່ວຍ?"
                }
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ໜ່ວຍ"}</span>
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ການຫານ (ມີຕົວເສດ): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                }}
              >
                {[
                  { n: "(1)", q: "37 ÷ 3 =" },
                  { n: "(2)", q: "58 ÷ 4 =" },
                  { n: "(3)", q: "79 ÷ 5 =" },
                  { n: "(4)", q: "86 ÷ 6 =" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "24px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      {item.n}
                    </span>
                    <span>{item.q}</span>
                    <span
                      className="answer-blank"
                      style={{
                        display: "inline-block",
                        width: "80px",
                        height: "40px",
                      }}
                    ></span>
                  </div>
                ))}
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາການຫານທີ່ມີເສດ: "}{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p>
                  {
                    "(5) ມີປຶ້ມຂຽນ 76 ຫົວ, ຢາກຢາຍໃຫ້ 3 ຄົນເທົ່າໆກັນ. ຈະໄດ້ຄົນລະຈັກຫົວ ແລະ ຈະເຫຼືອຈັກຫົວ?"
                  }
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{"ຄຳຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ, ເຫຼືອ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"ຫົວ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintText: "ຝຶກຫານເທື່ອລະຫຼັກ ແລ້ວຊັກຕົວເລກຖັດໄປລົງມາເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ການຫານຕໍ່ໄປນີ້ຕາມທາງຕັ້ງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                { n: "(1)", q: "87 ÷ 3 =" },
                { n: "(2)", q: "95 ÷ 4 =" },
                { n: "(3)", q: "68 ÷ 5 =" },
                { n: "(4)", q: "99 ÷ 9 =" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "24px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.n}
                  </span>
                  <span>{item.q}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              ))}
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
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ບ່ອນວ່າງໃນການກວດຄືນການຫານ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p>
                {
                  "(5) ຈາກບັ້ງເລກ 47 ÷ 3 = 15 ເສດ 2. ຈົ່ງຕື່ມຕົວເລກກວດຄືນໃຫ້ຖືກຕ້ອງ:"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "22px",
                }}
              >
                <span>{"3 x "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{" + "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "40px",
                  }}
                ></span>
                <span>{" = 47"}</span>
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
            <span key="1">
              {
                "(1) 24, (2) 23, (3) 21, (4) 11, (5) 12, (6) 12, (7) 17, (8) 13, (9) 21 ໜ່ວຍ (84 ÷ 4)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">
              {
                "(1) 12 ເສດ 1, (2) 14 ເສດ 2, (3) 15 ເສດ 4, (4) 14 ເສດ 2, (5) ໄດ້ຄົນລະ 25 ຫົວ, ເຫຼືອ 1 ຫົວ (76 ÷ 3 = 25 ເສດ 1)"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">
              {
                "(1) 29, (2) 23 ເສດ 3, (3) 13 ເສດ 3, (4) 11, (5) 3 x 15 + 2 = 47"
              }
            </span>,
          ],
        },
      ],
      advice:
        "ຖ້າຕົວເສດໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບຕົວຫານ, ສະແດງວ່າເຮົາຄິດໄລ່ຜິດເດີ! ຕົວເສດຕ້ອງນ້ອຍກວ່າຕົວຫານສະεໝີ.",
    },
  };
