import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit16Data: UnitData = {
    
    unitNumber: 16,
    unitTitle: "ການປ່ຽນແປງຂອງສອງປະລິມານ ແລະ ອັດຕາສ່ວນພົວພັນ",
    unitGoal:
      "ຮຽນຮູ້ການສັງເກດຄວາມສຳພັນລະຫວ່າງສອງປະລິມານທີ່ປ່ຽນແປງໄປພ້ອມກັນ ແລະ ເຂົ້າໃຈແນວຄວາມຄິດຂອງອັດຕາສ່ວນພົວພັນ (比例)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 144-152",
    keyPoints: {
      hint: {
        text: "ເມື່ອປະລິມານໜຶ່ງເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ແລ້ວອີກປະລິມານໜຶ່ງກໍເພີ່ມຂຶ້ນ 2 ເທື່ອ, 3 ເທື່ອ... ຕາມກັນ, ເຮົາເອີ້ນວ່າ ສອງປະລິມານນັ້ນເປັນອັດຕາສ່ວນພົວພັນກັນເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອັດຕາສ່ວນພົວພັນ"}
          </h3>
          <p style={{ fontSize: "22px", margin: 0 }}>
            {"ຕົວຢ່າງ: ລາຄາຂອງປຶ້ມຂຽນ (1 ຫົວ ລາຄາ 80 ກີບ):"}
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              className="math-illustration"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"ຈຳນວນປຶ້ມ (ຫົວ)"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"1"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"2"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"3"}
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"4"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontWeight: "bold",
                    }}
                  >
                    {"ລາຄາລວມ (ກີບ)"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"80"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"160"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"240"}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {"320"}
                  </td>
                </tr>
              </tbody>
            </table>
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
              {"ຈົ່ງສັງເກດຕາຕະລາງລວດເຫຼັກ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ overflowX: "auto", padding: "8px" }}>
              <table
                className="math-illustration"
                style={{
                  minWidth: "300px",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#F5F5F5" }}>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"ຄວາມຍາວ (m)"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"1"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"2"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"3"}
                    </th>
                    <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"4"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        fontWeight: "bold",
                      }}
                    >
                      {"ນ້ຳໜັກ (g)"}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"20"}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                      {"40"}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#FFE082",
                      }}
                    >
                      {"(A)"}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        backgroundColor: "#FFE082",
                      }}
                    >
                      {"(B)"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                fontSize: "20px",
                padding: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(1) ຈຳນວນ (A) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>{"(2) ຈຳນວນ (B) ໃນຕາຕະລາງແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>
                  {
                    "(3) ຖ້າຄວາມຍາວເພີ່ມຂຶ້ນ 3 ເທື່ອ, ນ້ຳໜັກກໍຈະເພີ່ມຂຶ້ນຈັກເທື່ອ?"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ເທື່ອ"}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {
                    "(4) ຖ້າຄວາມຍາວແມ່ນ x m ແລະ ນ້ຳໜັກແມ່ນ y g. ຈົ່ງຂຽນການພົວພັນ y = "
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText:
        "💧 ຄວາມເລິກຂອງນ້ຳຈະເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີຕາມເວລາທີ່ຜ່ານໄປເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <div>
                  {
                    "🥤 ເປີດນ້ຳໃສ່ອ່າງ, ຜ່ານໄປ 2 ນາທີ ນ້ຳເລິກໄດ້ 6 cm. ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 6 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "100px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm"}</span>
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
                {"ຈົ່ງຄິດໄລ່ຄວາມເລິກຂອງນ້ຳໃນເວລາອື່ນ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <div>
                  {
                    "🥤 ຈາກຂໍ້ (1), ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 10 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"
                  }
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "100px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"cm"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາລາຄາປຶ້ມຂຽນ: "}{" "}
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
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "📐 ຖ້າຊື້ປຶ້ມຂຽນ 5 ຫົວ ຕ້ອງຈ່າຍເງິນ 400 ກີບ. ຖ້າຊື້ປຶ້ມຂຽນປະເພດດຽວກັນ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນຈັກກີບ?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"ກີບ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫານ້ຳໜັກລວດເຫຼັກ: "}{" "}
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
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {
                  "📐 ຖ້າລວດເຫຼັກຍາວ 3m ມີນ້ຳໜັກ 60g. ຖ້າລວດເຫຼັກປະເພດດຽວກັນຍາວ 9m ຈະມີນ້ຳໜັກຈັກ g?"
                }
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <span>{"ຄຳຕອບ:"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
                <span>{"g"}</span>
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
            <span key="1">{"(1) 60, (2) 80, (3) 3 ເທື່ອ, (4) 20 × x"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"18 cm (ຍ້ອນ 6 × 3 = 18)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"30 cm (ຍ້ອນ 6 × 5 = 30)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"1200 ກີບ (ຍ້ອນ 400 × 3 = 1200)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"180 g (ຍ້ອນ 60 × 3 = 180)"}</span>],
        },
      ],
      advice:
        "ອັດຕາສ່ວນພົວພັນແມ່ນມີປະໂຫຍດຫຼາຍໃນການຄິດໄລ່ສິ່ງຕ່າງໆທີ່ເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີ! ຈົ່ງຊອກຫາວ່າປະລິມານເພີ່ມຂຶ້ນຈັກເທື່ອ ແລ້ວຄູນເຂົ້າໄດ້ເລີຍ.",
    },
  };
