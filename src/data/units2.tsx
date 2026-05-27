import React from "react";
import {
  FruitGraph,
  AnimalTable,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  Shape,
  TapeDiagram,
  LaoBanknote,
} from "@/components/illustrations";

export interface UnitData {
  unitNumber: number;
  unitTitle: string;
  unitGoal: string;
  textbookRef: string;
  keyPoints:
    | {
        title?: string;
        content: React.ReactNode;
        hint?: {
          text: string;
          isBlue?: boolean;
        };
      }
    | {
        title?: string;
        content: React.ReactNode;
        hint?: {
          text: string;
          isBlue?: boolean;
        };
      }[];
  basicProblems: {
    number: number;
    content: React.ReactNode;
  }[];
  challengeProblems: {
    problems: {
      number: number;
      content: React.ReactNode;
    }[];
    hintIndex?: number;
    hintText: string;
  };
  summaryProblems: {
    number: number;
    content: React.ReactNode;
  }[];
  answers: {
    items: {
      questionNumber: number | string;
      answers: React.ReactNode[];
    }[];
    advice: string;
  };
}

export const unitsData: UnitData[] = [
  {
    unitNumber: 1,
    unitTitle: "ການສະເໜີຂໍ້ມູນ",
    unitGoal:
      "ຮຽນຮູ້ວິທີການຈັດລະບຽບ ແລະ ສະເໜີຂໍ້ມູນໂດຍໃຊ້ຕາຕະລາງ ແລະ ກຣາຟຮູບພາບ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 4〜11",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ການສະເໜີຂໍ້ມູນຊ່ວຍໃຫ້ພວກເຮົາເຂົ້າໃຈຂໍ້ມູນໄດ້ງ່າຍຂຶ້ນ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຕາຕະລາງ:"}</strong>{" "}
              {"ໃຊ້ເພື່ອສະຫຼຸບຈຳນວນທັງໝົດຂອງແຕ່ລະປະເພດ."}
            </li>
            <li>
              <strong>{"ກຣາຟຮູບພາບ:"}</strong>{" "}
              {"ໃຊ້ຮູບພາບເພື່ອປຽບທຽບຈຳນວນແຕ່ລະປະເພດຢ່າງຈະແຈ້ງ."}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "8px",
              fontSize: "16px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                {"ຕົວຢ່າງ ຕາຕະລາງ"}
              </p>
              <AnimalTable
                data={[
                  { animal: "ໝາ", emoji: "🐶", count: 5 },
                  { animal: "ແມວ", emoji: "🐱", count: 3 },
                  { animal: "ລີງ", emoji: "🐵", count: 2 },
                  { animal: "ທັງໝົດ", emoji: "📊", count: 10 },
                ]}
              />
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                {"ຕົວຢ່າງ ກຣາຟຮູບພາບ"}
              </p>
              <FruitGraph
                data={[
                  { fruit: "ໝາກແອັບເປິ້ນ", emoji: "🍎", count: 4 },
                  { fruit: "ໝາກກ້ຽງ", emoji: "🍊", count: 3 },
                  { fruit: "ໝາກກ້ວຍ", emoji: "🍌", count: 2 },
                ]}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ການແຕ້ມຮູບພາບໃນກຣາຟ ຕ້ອງແຕ້ມຈາກລຸ່ມຂຶ້ນເທິງ ແລະ ໃຫ້ມີໄລຍະຫ່າງເທົ່າກັນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ມີນັກຮຽນຈັກຄົນທີ່ມັກໝາກໄມ້ແຕ່ລະຊະນິດ? ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <div style={{ width: "80%", alignSelf: "center" }}>
                <FruitGraph
                  data={[
                    { fruit: "ໝາກມ່ວງ", emoji: "🥭", count: 6 },
                    { fruit: "ໝາກກ້ຽງ", emoji: "🍊", count: 4 },
                    { fruit: "ໝາກຫຸ່ງ", emoji: "🍈", count: 2 },
                    { fruit: "ໝາກນັດ", emoji: "🍍", count: 1 },
                  ]}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p>{"(1) ມີນັກຮຽນມັກໝາກມ່ວງຈັກຄົນ? (ໃນກຣາຟແມ່ນຮູບໝາກມ່ວງ)"}</p>
                <p>
                  {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ"}
                </p>
                <p>
                  {"(2) ໝາກໄມ້ຊະນິດໃດທີ່ມີນັກຮຽນມັກຫຼາຍທີ່ສຸດ ແລະ ໜ້ອຍທີ່ສຸດ?"}
                </p>
                <p>
                  {"ຕອບ: ຫຼາຍສຸດ "} <span className="answer-blank"></span>{" "}
                  {" , ໜ້ອຍສຸດ "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(3) ມີນັກຮຽນມັກໝາກນັດຈັກຄົນ? ຕອບ: "}
                  <span className="answer-blank"></span> {"ຄົນ"}
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງປຽບທຽບຂໍ້ມູນໃນກຣາຟ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <p>
                {
                  "(1) ລະຫວ່າງໝາກມ່ວງ ແລະ ໝາກກ້ຽງ, ໝາກໄມ້ຊະນິດໃດມີຄົນມັກຫຼາຍກວ່າ?"
                }
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span>
              </p>
              <p>{"(2) ນັກຮຽນທັງໝົດທີ່ຕອບແບບສອບຖາມມີຈັກຄົນ?"}</p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ"}
              </p>
            </div>
          </>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຕື່ມຂໍ້ມູນໃສ່ຕາຕະລາງລຸ່ມນີ້ ແລະ ຕອບຄຳຖາມ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div style={{ width: "100%", alignSelf: "center" }}>
                  <AnimalTable
                    data={[
                      { animal: "ໝາ", emoji: "🐶", count: 10 },
                      { animal: "ແມວ", emoji: "🐱", count: 4 },
                    ]}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p>
                    {"(1) ສັດລ້ຽງຊະນິດໃດມີຫຼາຍທີ່ສຸດ?"} {"ຕອບ: "}{" "}
                    <span className="answer-blank"></span>
                  </p>
                  <p>
                    {"(2) ໝາມີຫຼາຍກວ່າແມວຈັກໂຕ?"} {"ຕອບ: ຫຼາຍກວ່າ "}{" "}
                    <span className="answer-blank"></span> {"ໂຕ"}
                  </p>
                  <p>{"(3) ລວມມີສັດລ້ຽງທັງໝົດຈັກໂຕ?"}</p>
                  <p>
                    {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                    <span className="answer-blank answer-blank--large"></span>{" "}
                    {"ຕອບ: "} <span className="answer-blank"></span> {"ໂຕ"}
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <p>
                {
                  "ມີນັກຮຽນທັງໝົດ 21 ຄົນ. ຖ້າມີ 10 ຄົນມັກໝາ, ສ່ວນທີ່ເຫຼືອແມ່ນມັກແມວ. ຈະມີຄົນມັກແມວຈັກຄົນ? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຈຳນວນທັງໝົດແມ່ນໄດ້ມາຈາກການເອົາຈຳນວນແຕ່ລະປະເພດມາບວກກັນເດີ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງສັງເກດຕາຕະລາງດອກໄມ້ໃນສວນ ແລະ ຕອບຄຳຖາມ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div style={{ width: "80%", alignSelf: "center" }}>
                <table
                  className="drill-table math-illustration"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          backgroundColor: "#F5F5F5",
                          fontSize: "16px",
                        }}
                      >
                        {"ຊະນິດດອກໄມ້"}
                      </th>
                      <th
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          backgroundColor: "#F5F5F5",
                          fontSize: "16px",
                        }}
                      >
                        {"ຈຳນວນ (ດອກ)"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"ສີແດງ 🌹"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"12"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"ສີເຫຼືອງ 🌼"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"8"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"ສີຂາວ 🤍"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {"5"}
                      </td>
                    </tr>
                    <tr style={{ fontWeight: "bold" }}>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          backgroundColor: "#EAEAEA",
                          fontSize: "16px",
                        }}
                      >
                        {"ທັງໝົດ"}
                      </td>
                      <td
                        style={{
                          border: "1px solid #333",
                          padding: "8px",
                          backgroundColor: "#EAEAEA",
                          fontSize: "16px",
                        }}
                      >
                        {"(1)"}
                        <span className="answer-blank"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p>
                  {
                    "(2) ດອກໄມ້ສີໃດມີຫຼາຍທີ່ສຸດ ແລະ ຫຼາຍກວ່າດອກໄມ້ສີຂາວຈັກດອກ? "
                  }{" "}
                </p>
                <p>
                  {"ຕອບ: ສີ "} <span className="answer-blank"></span>{" "}
                  {" , ຫຼາຍກວ່າ "} <span className="answer-blank"></span>{" "}
                  {"ດອກ"}
                </p>
                <p>
                  {
                    "(3) ຖ້າເອົາດອກໄມ້ສີເຫຼືອງ ແລະ ສີຂາວມາລວມກັນ ຈະມີທັງໝົດຈັກດອກ?"
                  }
                </p>
                <p>
                  {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                  <span className="answer-blank answer-blank--large"></span>{" "}
                  {"ຕອບ: "} <span className="answer-blank"></span> {"ດອກ"}
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ marginTop: "16px" }}>
            <p style={{ marginBottom: "8px" }}>
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້ ໂດຍອີງຕາມຕາຕະລາງດອກໄມ້ຂ້າງເທິງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                paddingLeft: "8px",
              }}
            >
              <p>{"(1) ດອກໄມ້ສີແດງ ຫຼາຍກວ່າ ດອກໄມ້ສີເຫຼືອງ ຈັກດອກ? "}</p>
              <p>
                {"ຕອບ: ຫຼາຍກວ່າ "} <span className="answer-blank"></span>{" "}
                {"ດອກ"}
              </p>
              <p>{"(2) ດອກໄມ້ສີເຫຼືອງ ຫຼາຍກວ່າ ດອກໄມ້ສີຂາວ ຈັກດອກ? "}</p>
              <p>
                {"ຕອບ: ຫຼາຍກວ່າ "} <span className="answer-blank"></span>{" "}
                {"ດອກ"}
              </p>
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
            <span key="1">{"(1) 6 ຄົນ"}</span>,
            <span key="2">{"(2) ໝາກມ່ວງ ແລະ ໝາກຫຸ່ງ"}</span>,
            <span key="3">{"(3) ໝາກນັດ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="4">{"(1) ຫຼາຍກວ່າ"}</span>,
            <span key="5">
              {"(2) ປະໂຫຍກສັນຍະລັກ: 4+6+6+3+2=21, ຕອບ: 21 ຄົນ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="6">{"ທັງໝົດໃນຕາຕະລາງ: 10"}</span>,
            <span key="7">{"(1) ໝາ"}</span>,
            <span key="8">{"(2) ໝາ, ຫຼາຍກວ່າ 2 ໂຕ"}</span>,
            <span key="9">{"(3) ປະໂຫຍກສັນຍະລັກ: 10+4=14, ຕອບ: 14 ໂຕ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="10">{"(1) ປະໂຫຍກສັນຍະລັກ: 21-10=11, ຕອບ: 11"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="s1">{"ຂໍ້ 1: (1) ຕາຕະລາງ: 12, 8, 5, 25"}</span>,
            <span key="s2">{"(2) ສີແດງ, ຫຼາຍກວ່າ 7 ດອກ"}</span>,
            <span key="s3">{"(3) ປະໂຫຍກສັນຍະລັກ: 8+5=13, ຕອບ: 13 ດອກ"}</span>,
            <span key="s4">{"ຂໍ້ 2: (1) ຫຼາຍກວ່າ 4 ດອກ"}</span>,
            <span key="s5">{"(2) ຫຼາຍກວ່າ 3 ດອກ"}</span>,
          ],
        },
      ],
      advice:
        "ຕາຕະລາງຊ່ວຍໃຫ້ເຫັນຕົວເລກຊັດເຈນ. ເວລາປຽບທຽບ, ໃຫ້ເອົາຕົວເລກໃຫຍ່ລົບຕົວເລກນ້ອຍ!",
    },
  },
  {
    unitNumber: 2,
    unitTitle: "ການບວກຈໍານວນທີ່ມີ 2 ຕົວເລກ",
    unitGoal: "ຮຽນຮູ້ວິທີການຕັ້ງບັ້ງເລກບວກ ແລະ ການບວກທີ່ມີຈື່",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 12〜23",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ເວລາຕັ້ງບັ້ງເລກບວກ ຕ້ອງປະຕິບັດຕາມນີ້:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ວາງຫຼັກໃຫ້ຊື່ກັນ:"}</strong>{" "}
              {
                "ຂຽນຫຼັກຫົວໜ່ວຍໃຫ້ເຊິ່ງຫຼັກຫົວໜ່ວຍ, ຫຼັກຫົວສິບໃຫ້ເຊິ່ງຫຼັກຫົວສິບ."
              }
            </li>
            <li>
              <strong>{"ເລີ່ມບວກຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ໃຫ້ບວກຫຼັກຫົວໜ່ວຍກ່ອນ, ແລ້ວຈຶ່ງບວກຫຼັກຫົວສິບ."}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "24px 0",
              fontSize: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 1"}
              </p>
              <VerticalMath
                top={25}
                bottom={14}
                operator="+"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 2 (ມີຈື່)"}
              </p>
              <VerticalMath
                top={38}
                bottom={27}
                operator="+"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຂຽນຄຳຕອບ ຢ່າລືມຂຽນໃຫ້ຊື່ກັບຫຼັກຂອງມັນເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={24} bottom={15} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={42} bottom={15} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={35} bottom={23} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={51} bottom={27} operator="+" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໝາກກ້ຽງ 23 ໜ່ວຍ ແລະ ໝາກແອັບເປິ້ນ 15 ໜ່ວຍ. ລວມມີໝາກໄມ້ທັງໝົດຈັກໜ່ວຍ?"
              }
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ໜ່ວຍ "}{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ມີປຶ້ມຂຽນ 12 ຫົວ ແລະ ປຶ້ມແບບຮຽນ 25 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ?"}
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ຫົວ "}{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ບວກແບບມີຈື່): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (1)
                  </span>{" "}
                  <VerticalMath top={46} bottom={38} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (2)
                  </span>{" "}
                  <VerticalMath top={57} bottom={36} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (3)
                  </span>{" "}
                  <VerticalMath top={29} bottom={62} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (4)
                  </span>{" "}
                  <VerticalMath top={68} bottom={28} operator="+" />
                </div>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ມີນັກຮຽນ 28 ຄົນ ຢູ່ໃນຫ້ອງຮຽນ, ມີນັກຮຽນເຂົ້າມາຕື່ມອີກ 15 ຄົນ. ຈະມີນັກຮຽນທັງໝົດຈັກຄົນ?"
                }
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ "}{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາຕັ້ງບັ້ງເລກ ຢ່າລືມວາງຫຼັກໃຫ້ຊື່ກັນເດີ! ຖ້າບວກຫຼັກຫົວໜ່ວຍກາຍ 10 ຕ້ອງຈື່ 1 ໃສ່ຫຼັກຫົວສິບ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "16px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={34} bottom={12} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={60} bottom={28} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={47} bottom={25} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={8} bottom={91} operator="+" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີດອກໄມ້ສີແດງ 15 ດອກ ແລະ ສີເຫຼືອງ 20 ດອກ. ລວມມີດອກໄມ້ທັງໝົດຈັກດອກ?"
              }
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ດອກ "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 39"}</span>,
            <span key="2">{"(2) 57"}</span>,
            <span key="3">{"(3) 58"}</span>,
            <span key="4">{"(4) 78"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"ປະໂຫຍກສັນຍະລັກ: 23+15=38, ຕອບ: 38 ໜ່ວຍ"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="6">{"ປະໂຫຍກສັນຍະລັກ: 12+25=37, ຕອບ: 37 ຫົວ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="7">{"(1) 84"}</span>,
            <span key="8">{"(2) 93"}</span>,
            <span key="9">{"(3) 91"}</span>,
            <span key="10">{"(4) 96"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="11">{"ປະໂຫຍກສັນຍະລັກ: 28+15=43, ຕອບ: 43 ຄົນ"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="s1">{"(1) 46, (2) 88, (3) 72, (4) 99"}</span>,
            <span key="s2">{"ປະໂຫຍກສັນຍະລັກ: 15+20=35, ຕອບ: 35 ດອກ"}</span>,
          ],
        },
      ],
      advice:
        "ເວລາຕັ້ງບັ້ງເລກ, ຕ້ອງຂຽນຫຼັກຫົວໜ່ວຍໃຫ້ເຊິ່ງຫຼັກຫົວໜ່ວຍ ແລະ ເລີ່ມບວກຈາກຂວາໄປຊ້າຍສະເໝີ! ຖ້າບວກຫຼັກຫົວໜ່ວຍກາຍ 10 ຕ້ອງຈື່ 1 ໃສ່ຫຼັກຫົວສິບ.",
    },
  },
  {
    unitNumber: 3,
    unitTitle: "ການລົບຈໍານວນທີ່ມີ 2 ຕົວເລກ",
    unitGoal: "ຮຽນຮູ້ວິທີການຕັ້ງບັ້ງເລກລົບ ແລະ ການລົບທີ່ມີຍືມ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 24〜35",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ເວລາຕັ້ງບັ້ງເລກລົບ ຕ້ອງປະຕິບັດຕາມນີ້:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ວາງຫຼັກໃຫ້ຊື່ກັນ:"}</strong>{" "}
              {
                "ຂຽນຫຼັກຫົວໜ່ວຍໃຫ້ເຊິ່ງຫຼັກຫົວໜ່ວຍ, ຫຼັກຫົວສິບໃຫ້ເຊິ່ງຫຼັກຫົວສິບ."
              }
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ເລີ່ມລົບຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ໃຫ້ລົບຫຼັກຫົວໜ່ວຍກ່ອນ, ແລ້ວຈຶ່ງລົບຫຼັກຫົວສິບ."}
            </li>
            <li>
              <strong>{"ຖ້າລົບບໍ່ໄດ້ ຕ້ອງຍືມ:"}</strong>{" "}
              {"ເອົາ 1 ຈາກຫຼັກຫົວສິບມາເປັນ 10 ບວກໃສ່ຫຼັກຫົວໜ່ວຍ."}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "24px 0",
              fontSize: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 1"}
              </p>
              <VerticalMath
                top={47}
                bottom={12}
                operator="-"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ 2 (ມີຍືມ)"}
              </p>
              <VerticalMath
                top={42}
                bottom={18}
                operator="-"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາລົບ, ຖ້າລົບຫຼັກຫົວໜ່ວຍບໍ່ໄດ້ ຢ່າລືມຍືມ 1 ຈາກຫຼັກຫົວສິບເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={55} bottom={12} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={78} bottom={48} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={42} bottom={36} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={85} bottom={44} operator="-" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>{"ມີເປັດນ້ຳ 42 ໂຕ, ບິນໜີໄປ 16 ໂຕ. ເປັດນ້ຳຍັງເຫຼືອຈັກໂຕ?"}</p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ໂຕ "}{" "}
              <span className="point-label">{"(1.5 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໝາກມ່ວງ 24 ໜ່ວຍ ແລະ ໝາກຫຸ່ງ 32 ໜ່ວຍ. ໝາກໄມ້ຊະນິດໃດຫຼາຍກວ່າ? ຫຼາຍກວ່າເທົ່າໃດ?"
              }
            </p>
            <p>
              {"ຊະນິດທີ່ຫຼາຍກວ່າ: "} <span className="answer-blank"></span>{" "}
              <span className="point-label">{"(1 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(1 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ຫຼາຍກວ່າ "} <span className="answer-blank"></span>{" "}
              {"ໜ່ວຍ "} <span className="point-label">{"(1 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ລົບແບບມີຍືມ): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (1)
                  </span>{" "}
                  <VerticalMath top={75} bottom={28} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (2)
                  </span>{" "}
                  <VerticalMath top={63} bottom={37} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (3)
                  </span>{" "}
                  <VerticalMath top={87} bottom={49} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (4)
                  </span>{" "}
                  <VerticalMath top={50} bottom={36} operator="-" />
                </div>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ການຄິດໄລ່ຕໍ່ໄປນີ້ ຂໍ້ໃດມີຄຳຕອບຜິດ? ມາຊອກຫາຄຳຕອບທີ່ຖືກຕ້ອງ ໂດຍການຄິດໄລ່ກວດຄືນ."
                }
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    {"ກ"}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-number)",
                      fontSize: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {"56 − 19 = 43"}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    {"ຂ"}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-number)",
                      fontSize: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {"85 − 12 = 73"}
                  </div>
                </div>
              </div>
              <p>
                {"ຂໍ້ທີ່ຜິດ: "} <span className="answer-blank"></span>{" "}
                <span className="point-label">{"(1 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຄຳຕອບທີ່ຖືກຕ້ອງ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(1 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ການກວດຄືນ (ບວກ): "}{" "}
                <span className="answer-blank answer-blank--large"></span>{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ຖ້າລົບຫຼັກຫົວໜ່ວຍບໍ່ໄດ້, ຕ້ອງຍືມ 1 ຈາກຫຼັກຫົວສິບ ແລ້ວບວກ 10 ໃສ່ຫຼັກຫົວໜ່ວຍ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "16px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={92} bottom={51} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={64} bottom={38} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={80} bottom={45} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={71} bottom={6} operator="-" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ນາງແກ້ວມີເງິນ 95 ກີບ, ຊື້ສໍ 48 ກີບ. ນາງແກ້ວຍັງເຫຼືອເງິນຈັກກີບ?"}
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ກີບ "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 43"}</span>,
            <span key="2">{"(2) 30"}</span>,
            <span key="3">{"(3) 6"}</span>,
            <span key="4">{"(4) 41"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"ປະໂຫຍກສັນຍະລັກ: 42−16=26, ຕອບ: 26 ໂຕ"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="6">
              {"ໝາກຫຸ່ງ ຫຼາຍກວ່າ, ປະໂຫຍກສັນຍະລັກ: 32−24=8, ຕອບ: 8 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="7">{"(1) 47"}</span>,
            <span key="8">{"(2) 26"}</span>,
            <span key="9">{"(3) 38"}</span>,
            <span key="10">{"(4) 14"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="11">
              {"ຂໍ້ ກ ຜິດ. ຄຳຕອບທີ່ຖືກ: 56−19=37. ກວດ: 37+19=56 ✓"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 3",
          answers: [
            <span key="s1">{"(1) 41, (2) 26, (3) 35, (4) 65"}</span>,
            <span key="s2">{"ປະໂຫຍກສັນຍະລັກ: 95−48=47, ຕອບ: 47 ກີບ"}</span>,
          ],
        },
      ],
      advice:
        "ເວລາລົບ, ຕ້ອງເລີ່ມຈາກຫຼັກຫົວໜ່ວຍກ່ອນ! ຖ້າລົບບໍ່ໄດ້ ຕ້ອງຍືມ 1 ຈາກຫຼັກຫົວສິບ. ກວດຄືນໂດຍການບວກ: ຄຳຕອບ + ຕົວລົບ = ຕົວຕັ້ງ.",
    },
  },
  {
    unitNumber: 4,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກຄວາມຍາວ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບ ຊັງຕີແມັດ (cm) ແລະ ມິລິແມັດ (mm) ພ້ອມທັງວິທີນຳໃຊ້ບັນທັດວັດແທກຄວາມຍາວ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 36〜47",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.5,
              marginBottom: "8px",
            }}
          >
            {"ການວັດແທກຄວາມຍາວ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.5,
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <li>
              <strong>{"ຊັງຕີແມັດ (cm):"}</strong>{" "}
              {"ເປັນຫົວໜ່ວຍວັດແທກຄວາມຍາວ. ຄວາມຍາວ 1 ຊັງຕີແມັດ ຂຽນເປັນ "}{" "}
              <strong>{"1 cm"}</strong>
              {"."}
            </li>
            <li>
              <strong>{"ມິລິແມັດ (mm):"}</strong>{" "}
              {
                "ເປັນຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ນ້ອຍກວ່າ cm. 1 cm ແບ່ງເປັນ 10 ສ່ວນເທົ່າກັນ, 1 ສ່ວນຍາວ 1 ມິລິແມັດ ຂຽນເປັນ "
              }{" "}
              <strong>{"1 mm"}</strong>
              {"."}
            </li>
            <li style={{ color: "#E53935", fontWeight: "bold" }}>
              {"ຄວາມສຳພັນ: 1 cm = 10 mm"}
            </li>
          </ul>

          <div
            className="math-illustration"
            style={{ marginTop: "10px", fontSize: "16px" }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "2px",
                fontSize: "16px",
              }}
            >
              {"[ຕົວຢ່າງ 1] ຄວາມຍາວຂອງສໍດຳແມ່ນຈັກ cm?"}
            </p>
            <Ruler
              measuredLength={5}
              maxLength={7}
              objectType="pencil"
              showAnswer={true}
            />
          </div>

          <div
            className="math-illustration"
            style={{ marginTop: "8px", fontSize: "16px" }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "2px",
                fontSize: "16px",
              }}
            >
              {"[ຕົວຢ່າງ 2] ຄວາມຍາວຂອງເສັ້ນຊື່ແມ່ນຈັກ cm ແລະ mm?"}
            </p>
            <Ruler
              measuredLength={3.7}
              maxLength={6}
              objectType="line"
              showAnswer={true}
            />
            <p
              style={{
                textAlign: "center",
                color: "#E53935",
                fontWeight: "bold",
                marginTop: "1px",
                fontSize: "16px",
              }}
            >
              {"3 cm ກັບ 7 mm ຫຼື ເທົ່າກັບ 37 mm"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາວັດແທກ, ຕ້ອງວາງຂີດ 0 ຂອງບັນທັດໃຫ້ຊື່ກັບສົ້ນເບື້ອງໜຶ່ງເດີ!",
        isBlue: true,
      },
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "8px" }}>
              {"ຈົ່ງບອກຄວາມຍາວຂອງສິ່ງຂອງຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "4px",
                fontSize: "16px",
              }}
            >
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={8} maxLength={8.5} objectType="pencil" />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "35px" }}
                  ></span>{" "}
                  {"cm"}
                </p>
              </div>
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ຢາງລົບ:"}
                </p>
                <Ruler
                  measuredLength={3.6}
                  maxLength={4.5}
                  objectType="eraser"
                />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <p style={{ margin: "1px 0" }}>
                {"(1) 2 cm = "} <span className="answer-blank"></span> {"mm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(2) 48 mm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ minWidth: "30px" }}
                ></span>{" "}
                {"cm "}{" "}
                <span
                  className="answer-blank"
                  style={{ minWidth: "30px" }}
                ></span>{" "}
                {"mm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(3) 50 mm = "} <span className="answer-blank"></span> {"cm"}
              </p>
              <p style={{ margin: "1px 0" }}>
                {"(4) 7 cm 2 mm = "} <span className="answer-blank"></span>{" "}
                {"mm"}
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              {
                "ໂຕະໜຶ່ງມີຄວາມກວ້າງທາງນອນ 35 cm 5 mm, ທາງຕັ້ງ 20 cm. ທາງນອນຈະຍາວກວ່າທາງຕັ້ງຈັກ cm ແລະ mm? "
              }{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p style={{ margin: "1px 0" }}>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span
                className="answer-blank answer-blank--large"
                style={{ minWidth: "150px" }}
              ></span>
            </p>
            <p style={{ margin: "1px 0" }}>
              {"ຕອບ: "} <span className="answer-blank"></span> {"cm "}{" "}
              <span className="answer-blank"></span> {"mm"}
            </p>
          </div>
        ),
      },
    ],
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງບອກຄວາມຍາວຂອງສິ່ງຂອງຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px",
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ເສັ້ນຊື່:"}
                </p>
                <Ruler measuredLength={5.5} maxLength={7} objectType="line" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={4.8} maxLength={6} objectType="pencil" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
              <div style={{ width: "32%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(3) ຢາງລົບ:"}
                </p>
                <Ruler measuredLength={6.2} maxLength={7} objectType="eraser" />
                <p style={{ marginTop: "4px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
              marginBottom: "20px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <p>
                {"(1) 25 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(2) 48 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(3) 62 mm = "} <span className="answer-blank"></span> {"cm "}{" "}
                <span className="answer-blank"></span> {"mm"}
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກໃສ່ໃນບັອກ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <p>
                {"(1) 6 cm = "} <span className="answer-blank"></span> {"mm"}
              </p>
              <p>
                {"(2) 90 mm = "} <span className="answer-blank"></span> {"cm"}
              </p>
              <p>
                {"(3) 4 cm 3 mm = "} <span className="answer-blank"></span>{" "}
                {"mm"}
              </p>
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
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <p>
                {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "8px",
                }}
              >
                <div>
                  <span>{"(1) 7 cm + 5 cm"}</span>
                  <span style={{ marginLeft: "12px" }}>
                    {"="} <span className="answer-blank"></span> {"cm"}
                  </span>
                </div>
                <div>
                  <span>{"(2) 15 mm + 5 mm"}</span>
                  <span style={{ marginLeft: "12px" }}>
                    {"="} <span className="answer-blank"></span> {"mm = "}{" "}
                    <span className="answer-blank"></span> {"cm"}
                  </span>
                </div>
                <div>
                  <span>{"(3) 6 cm 4 mm + 5 mm"}</span>
                  <span style={{ marginLeft: "12px" }}>
                    {"="} <span className="answer-blank"></span> {"cm "}{" "}
                    <span className="answer-blank"></span> {"mm"}
                  </span>
                </div>
                <div>
                  <span>{"(4) 8 cm 7 mm − 3 cm"}</span>
                  <span style={{ marginLeft: "12px" }}>
                    {"="} <span className="answer-blank"></span> {"cm "}{" "}
                    <span className="answer-blank"></span> {"mm"}
                  </span>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນບັອກ "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "18px",
                    verticalAlign: "middle",
                    minWidth: "24px",
                  }}
                ></span>{" "}
                {"ໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p>
                  {"(1) 50 mm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "30px", minWidth: "30px" }}
                  ></span>{" "}
                  {"5 cm"}
                </p>
                <p>
                  {"(2) 3 cm 8 mm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "30px", minWidth: "30px" }}
                  ></span>{" "}
                  {"41 mm"}
                </p>
              </div>
            </div>
          ),
        },
        {
          number: 3,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                textAlign: "left",
              }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  <p style={{ marginBottom: "8px" }}>
                    {
                      "(1) ໂບສີແດງຍາວ 9 cm 5 mm, ໂບສີຟ້າຍາວ 7 cm. ໂບສີແດງຈະຍາວກວ່າໂບສີຟ້າຈັກ cm ແລະ mm?"
                    }
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                    <span
                      className="answer-blank answer-blank--large"
                      style={{ minWidth: "150px" }}
                    ></span>
                  </p>
                  <p>
                    {"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"cm "}{" "}
                    <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"mm"}
                  </p>
                </div>
                <div>
                  <p style={{ marginBottom: "8px" }}>
                    {
                      "(2) ມີໄມ້ໄຜ່ທັງໝົດຍາວ 15 cm, ຕັດອອກໄປໃຊ້ 6 cm 5 mm. ໄມ້ໄຜ່ຈະຍັງເຫຼືອຄວາມຍາວເທົ່າໃດ?"
                    }
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                    <span
                      className="answer-blank answer-blank--large"
                      style={{ minWidth: "150px" }}
                    ></span>
                  </p>
                  <p>
                    {"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"cm "}{" "}
                    <span className="answer-blank" style={{ minWidth: "50px" }}></span> {"mm"}
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "",
    },

    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">{"(1) 3 cm"}</span>,
            <span key="2">{"(2) 5 cm"}</span>,
            <span key="3">{"(3) 8 cm"}</span>,
            <span key="4">{"(4) 10 cm"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="5">{"(1) 2 cm 5 mm"}</span>,
            <span key="6">{"(2) 4 cm 8 mm"}</span>,
            <span key="7">{"(3) 6 cm 2 mm"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="8">{"(1) 60"}</span>,
            <span key="9">{"(2) 9"}</span>,
            <span key="10">{"(3) 43"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="11">{"(1) 12 cm"}</span>,
            <span key="12">{"(2) 20 mm = 2 cm"}</span>,
            <span key="13">{"(3) 6 cm 9 mm"}</span>,
            <span key="14">{"(4) 5 cm 7 mm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="15">{"(1) ="}</span>,
            <span key="16">{"(2) < (3 cm 8 mm = 38 mm)"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 3",
          answers: [
            <span key="17">
              {"(1) 9 cm 5 mm − 7 cm = 2 cm 5 mm, ຕອບ: 2 cm 5 mm"}
            </span>,
            <span key="18">
              {"(2) 15 cm − 6 cm 5 mm = 8 cm 5 mm, ຕອບ: 8 cm 5 mm"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 4",
          answers: [
            <span key="s1">{"1: (1) 8 cm, (2) 3 cm 6 mm"}</span>,
            <span key="s2">{"2: (1) 20, (2) 4 cm 8 mm, (3) 5, (4) 72"}</span>,
            <span key="s3">
              {
                "3: ປະໂຫຍກສັນຍະລັກ: 35 cm 5 mm − 20 cm = 15 cm 5 mm, ຕອບ: 15 cm 5 mm"
              }
            </span>,
          ],
        },
      ],
      advice:
        "1 cm ເທົ່າກັບ 10 mm ເດີ! ເວລາບວກ ຫຼື ລົບ ຕ້ອງໄລ່ຫົວໜ່ວຍດຽວກັນ, ເຊັ່ນ cm ບວກກັບ cm, mm ບວກກັບ mm. ຖ້າໄລ່ບໍ່ພໍ ຕ້ອງປ່ຽນ cm ເປັນ mm ກ່ອນເດີ!",
    },
  },
  {
    unitNumber: 5,
    unitTitle: "ຈຳນວນທີ່ມີ 3 ຕົວເລກ",
    unitGoal:
      "ຮຽນຮູ້ຈຳນວນ 3 ຫຼັກ, ການອ່ານ-ຂຽນ, ການປຽບທຽບ ແລະ ການຄິດໄລ່ຫົວສິບ ແລະ ຫົວຮ້ອຍ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 48〜67",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ຈຳນວນທີ່ມີ 3 ຕົວເລກ ປະກອບດ້ວຍ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຫຼັກຫົວຮ້ອຍ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 100 (ເຊັ່ນ: 3 ແມ່ນ 300)"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຫຼັກຫົວສິບ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 10 (ເຊັ່ນ: 5 ແມ່ນ 50)"}
            </li>
            <li>
              <strong>{"ຫຼັກຫົວໜ່ວຍ:"}</strong>{" "}
              {"ບອກຈຳນວນຂອງ 1 (ເຊັ່ນ: 7 ແມ່ນ 7)"}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              marginTop: "16px",
              fontSize: "16px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              {"ຕົວຢ່າງ: ຈຳນວນ 357"}
            </p>
            <PlaceValueTable hundreds={3} tens={5} ones={7} showAnswer={true} />
            <p
              style={{
                textAlign: "center",
                color: "#E53935",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {"357 = 300 + 50 + 7"}
            </p>
            <div style={{ marginTop: "8px", fontSize: "16px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  fontSize: "16px",
                }}
              >
                {"CNການປຽບທຽບຈຳນວນ:"}
              </p>
              <p style={{ textAlign: "center", fontSize: "16px" }}>
                {"325 "}
                <strong style={{ color: "#E53935" }}>{"<"}</strong>
                {" 413 (ເພາະ 3 < 4 ທີ່ຫຼັກຫົວຮ້ອຍ)"}
              </p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາປຽບທຽບຈຳນວນ, ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນເດີ! ຖ້າຫຼັກຫົວຮ້ອຍເທົ່າກັນ ກໍເບິ່ງຫຼັກຫົວສິບຕໍ່.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 100 ມີ 4 ບັດ, 10 ມີ 8 ບັດ, 1 ມີ 5 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 100 ມີ 5 ບັດ, 1 ມີ 7 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 321 = 100 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 10 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 1 ມີ "} <span className="answer-blank"></span> {" ບັດ"}
              </p>
              <p>
                {"(4) 630 = 100 ມີ "} <span className="answer-blank"></span>{" "}
                {" ບັດ, 10 ມີ "} <span className="answer-blank"></span> {" ບັດ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຂຽນຕົວເລກໃສ່ຫຼັກຫົວຮ້ອຍ, ຫຼັກຫົວສິບ ແລະ ຫຼັກຫົວໜ່ວຍ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(1) 256"}
                </p>
                <PlaceValueTable
                  hundreds={2}
                  tens={5}
                  ones={6}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(2) 709"}
                </p>
                <PlaceValueTable
                  hundreds={7}
                  tens={0}
                  ones={9}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "4px", fontWeight: "bold" }}>
                  {"(3) 840"}
                </p>
                <PlaceValueTable
                  hundreds={8}
                  tens={4}
                  ones={0}
                  hideHundreds={true}
                  hideTens={true}
                  hideOnes={true}
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) ຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ທີ່ມີ 21 ບັດແມ່ນ "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) ຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ທີ່ມີ 48 ບັດແມ່ນ "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 230 ແມ່ນຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ຈັກ "}{" "}
                <span className="answer-blank"></span> {" ບັດ"}
              </p>
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
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 30 + 80 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(2) 70 + 60 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(3) 150 − 90 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(4) 400 + 400 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(5) 100 + 500 = "} <span className="answer-blank"></span>
                </p>
                <p>
                  {"(6) 1000 − 600 = "} <span className="answer-blank"></span>
                </p>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນ "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "18px",
                    verticalAlign: "middle",
                  }}
                ></span>{" "}
                {" ໃຫ້ຖືກຕ້ອງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 789 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 879"}
                </p>
                <p>
                  {"(2) 817 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 808"}
                </p>
                <p>
                  {"(3) 500 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 300 + 400"}
                </p>
                <p>
                  {"(4) 1000 − 400 "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "35px" }}
                  ></span>{" "}
                  {" 600"}
                </p>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາປຽບທຽບຈຳນວນ, ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນ! ຖ້າຫຼັກຫົວຮ້ອຍເທົ່າກັນ ກໍເບິ່ງຫຼັກຫົວສິບຕໍ່.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 100 ມີ 7 ບັດ, 10 ມີ 3 ບັດ, 1 ມີ 9 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 100 ມີ 6 ບັດ, 10 ມີ 2 ບັດ = "}{" "}
                <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 460 ແມ່ນຈຳນວນທີ່ໄດ້ຈາກບັດ 10 ຈັກ "}{" "}
                <span className="answer-blank"></span> {" ບັດ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 40 + 90 = "} <span className="answer-blank"></span>
              </p>
              <p>
                {"(2) 500 + 200 = "} <span className="answer-blank"></span>
              </p>
              <p>
                {"(3) 1000 − 100 = "} <span className="answer-blank"></span>
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຕື່ມເຄື່ອງໝາຍ >, < ຫຼື = ໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "18px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {" ໃຫ້ຖືກຕ້ອງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 349 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 351"}
              </p>
              <p>
                {"(2) 607 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 518"}
              </p>
              <p>
                {"(3) 900 + 700 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 200"}
              </p>
              <p>
                {"(4) 160 "}{" "}
                <span className="answer-blank" style={{ width: "35px" }}></span>{" "}
                {" 80 + 90"}
              </p>
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
            <span key="u5-1">{"(1) 485"}</span>,
            <span key="u5-2">{"(2) 507"}</span>,
            <span key="u5-3">{"(3) 3 ບັດ, 2 ບັດ, 1 ບັດ"}</span>,
            <span key="u5-4">{"(4) 6 ບັດ, 3 ບັດ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u5-5">{"(1) 2, 5, 6"}</span>,
            <span key="u5-6">{"(2) 7, 0, 9"}</span>,
            <span key="u5-7">{"(3) 8, 4, 0"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [
            <span key="u5-8">{"(1) 210"}</span>,
            <span key="u5-9">{"(2) 480"}</span>,
            <span key="u5-10">{"(3) 23 ບັດ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u5-11">{"(1) 110"}</span>,
            <span key="u5-12">{"(2) 130"}</span>,
            <span key="u5-13">{"(3) 60"}</span>,
            <span key="u5-14">{"(4) 800"}</span>,
            <span key="u5-15">{"(5) 600"}</span>,
            <span key="u5-16">{"(6) 400"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u5-17">{"(1) <"}</span>,
            <span key="u5-18">{"(2) >"}</span>,
            <span key="u5-19">{"(3) < (500 < 700)"}</span>,
            <span key="u5-20">{"(4) = (600 = 600)"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 5",
          answers: [
            <span key="u5-s1">{"ຂໍ້ 1: (1) 739, (2) 620, (3) 46 ບັດ"}</span>,
            <span key="u5-s2">{"ຂໍ້ 2: (1) 130, (2) 700, (3) 900"}</span>,
            <span key="u5-s3">
              {"ຂໍ້ 3: (1) <, (2) >, (3) >, (4) < (160 < 170)"}
            </span>,
          ],
        },
      ],
      advice:
        "ຈຳນວນ 3 ຫຼັກ ປະກອບດ້ວຍຫຼັກຫົວຮ້ອຍ, ຫຼັກຫົວສິບ ແລະ ຫຼັກຫົວໜ່ວຍ. ເວລາປຽບທຽບຈຳນວນ ໃຫ້ເລີ່ມຈາກຫຼັກທີ່ຫຼາຍສຸດກ່ອນເດີ!",
    },
  },
  {
    unitNumber: 6,
    unitTitle: "ໂຈດບັນຫາກ່ຽວກັບການບວກ ແລະ ການລົບ",
    unitGoal:
      'ຮຽນຮູ້ວິທີແກ້ໂຈດບັນຫາທີ່ກ່ຽວກັບ "ຫຼາຍກວ່າ" ແລະ "ໜ້ອຍກວ່າ" ໂດຍໃຊ້ແຜນວາດ',
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 68〜71",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ເວລາແກ້ໂຈດບັນຫາ ໃຫ້ແຕ້ມແຜນວາດກ່ອນ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{'"ຫຼາຍກວ່າ" → ໃຊ້ການບວກ:'}</strong>{" "}
              {"ຖ້າ ກ ມີ 11, ຂ ມີຫຼາຍກວ່າ ກ 3 → ຂ = 11 + 3 = 14"}
            </li>
            <li>
              <strong>{'"ໜ້ອຍກວ່າ" → ໃຊ້ການລົບ:'}</strong>{" "}
              {"ຖ້າ ກ ມີ 14, ຂ ມີໜ້ອຍກວ່າ ກ 4 → ຂ = 14 − 4 = 10"}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "16px 0",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                border: "2px solid #90CAF9",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#E3F2FD",
                fontSize: "16px",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                {"ຕົວຢ່າງ"}
              </p>
              <p>{"ຝາກະຕຸກສີຂາວ 11 ຝາ"}</p>
              <p>{"ສີຟ້າມີຫຼາຍກວ່າ 3 ຝາ"}</p>
              <p
                style={{
                  color: "#E53935",
                  fontWeight: "bold",
                  marginTop: "8px",
                }}
              >
                {"ສີຟ້າ = 11 + 3 = 14 ຝາ"}
              </p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: 'ເວລາເຫັນຄໍາວ່າ "ຫຼາຍກວ່າ" ໃຫ້ຄິດ ບວກ! ເວລາເຫັນ "ໜ້ອຍກວ່າ" ໃຫ້ຄິດ ລົບ! ແຕ້ມແຜນວາດຈະຊ່ວຍໃຫ້ເຂົ້າໃຈງ່າຍຂຶ້ນ.',
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ມີໝາກຫຸ່ງ 14 ໜ່ວຍ, ໝາກມ່ວງມີໜ້ອຍກວ່າໝາກຫຸ່ງ 4 ໜ່ວຍ. ໝາກມ່ວງມີຈັກໜ່ວຍ? "
              }{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ໜ່ວຍ"}
            </p>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີສໍດຳທີ່ຍັງບໍ່ທັນໃຊ້ 12 ກ້ານ, ສໍດຳທີ່ໃຊ້ແລ້ວມີຫຼາຍກວ່າ 2 ກ້ານ. ສໍດຳທີ່ໃຊ້ແລ້ວມີຈັກກ້ານ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ກ້ານ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ນັກຮຽນຊາຍມີ 12 ຄົນ, ນັກຮຽນຍິງມີໜ້ອຍກວ່ານັກຮຽນຊາຍ 2 ຄົນ. ນັກຮຽນຍິງມີຈັກຄົນ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ຄົນ"}
            </p>
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
                {
                  "ທ້າວບຸນມີມີເງິນ 45 ກີບ. ນາງຄຳຫຼ້າມີເງິນຫຼາຍກວ່າທ້າວບຸນມີ 18 ກີບ. ນາງຄຳຫຼ້າມີເງິນຈັກກີບ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {"ກີບ"}
              </p>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ໃນຫ້ອງສະໝຸດມີປຶ້ມ 56 ຫົວ. ປຶ້ມເລື່ອງມີໜ້ອຍກວ່າປຶ້ມແບບຮຽນ 12 ຫົວ. ຖ້າປຶ້ມແບບຮຽນມີ 34 ຫົວ, ປຶ້ມເລື່ອງມີຈັກຫົວ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {"ຫົວ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        'ແຕ້ມແຜນວາດເສັ້ນ 2 ເສັ້ນ ໃຫ້ເສັ້ນຍາວແມ່ນສິ່ງທີ່ "ຫຼາຍກວ່າ" ແລ້ວຈະເຂົ້າໃຈງ່າຍ!',
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ມີດອກກຸຫຼາບສີແດງ 25 ດອກ, ສີຂາວມີໜ້ອຍກວ່າສີແດງ 8 ດອກ. ດອກກຸຫຼາບສີຂາວມີຈັກດອກ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ດອກ"}
            </p>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ທ້າວແດງມີສໍ 18 ກ້ານ, ທ້າວດຳມີສໍຫຼາຍກວ່າທ້າວແດງ 7 ກ້ານ. ທ້າວດຳມີສໍຈັກກ້ານ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {"ກ້ານ"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="u6-1">{"14 − 4 = 10, ຕອບ: 10 ໜ່ວຍ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="u6-2">{"12 + 2 = 14, ຕອບ: 14 ກ້ານ"}</span>],
        },
        {
          questionNumber: 3,
          answers: [<span key="u6-3">{"12 − 2 = 10, ຕອບ: 10 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u6-4">{"45 + 18 = 63, ຕອບ: 63 ກີບ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u6-5">{"34 − 12 = 22, ຕອບ: 22 ຫົວ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 6",
          answers: [
            <span key="u6-s1">{"ຂໍ້ 1: 25 − 8 = 17, ຕອບ: 17 ດອກ"}</span>,
            <span key="u6-s2">{"ຂໍ້ 2: 18 + 7 = 25, ຕອບ: 25 ກ້ານ"}</span>,
          ],
        },
      ],
      advice:
        'ເວລາເຫັນ "ຫຼາຍກວ່າ" ໃຫ້ຄິດ ບວກ! ເວລາເຫັນ "ໜ້ອຍກວ່າ" ໃຫ້ຄິດ ລົບ! ແຕ້ມແຜນວາດກ່ອນແລ້ວຈະບໍ່ສັບສົນ.',
    },
  },
  {
    unitNumber: 7,
    unitTitle: "ໂມງ ແລະ ປະຕິທິນ",
    unitGoal:
      "ຮຽນຮູ້ວິທີອ່ານເວລາ, ຄວາມສຳພັນລະຫວ່າງຊົ່ວໂມງ-ນາທີ-ວັນ, ແລະ ການນໍາໃຊ້ປະຕິທິນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 72〜81",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ສິ່ງສຳຄັນກ່ຽວກັບໂມງ ແລະ ປະຕິທິນ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ຊົ່ວໂມງ = 60 ນາທີ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ວັນ = 24 ຊົ່ວໂມງ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ອາທິດ = 7 ວັນ"}</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"1 ປີ = 12 ເດືອນ = 365 ວັນ"}</strong>
            </li>
            <li>
              <strong>{"ເຂັມສັ້ນ:"}</strong> {"ບອກ ໂມງ, "}{" "}
              <strong>{"ເຂັມຍາວ:"}</strong> {"ບອກ ນາທີ"}
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                border: "2px solid #A5D6A7",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#E8F5E9",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນທີ່ມີ 31 ວັນ"}</p>
              <p>{"1, 3, 5, 7, 8, 10, 12"}</p>
            </div>
            <div
              style={{
                border: "2px solid #FFCC80",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#FFF3E0",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນທີ່ມີ 30 ວັນ"}</p>
              <p>{"4, 6, 9, 11"}</p>
            </div>
            <div
              style={{
                border: "2px solid #EF9A9A",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                backgroundColor: "#FFEBEE",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{"ເດືອນ 2"}</p>
              <p>{"28 ຫຼື 29 ວັນ"}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເຂັມຍາວຊີ້ໄປເລກ 6 ແມ່ນ 30 ນາທີ ເພາະ 1 ຊ່ອງ = 5 ນາທີ, ເລກ 6 = 6 × 5 = 30 ນາທີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 1 ຊົ່ວໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ນາທີ"}
              </p>
              <p>
                {"(2) 1 ວັນ = "} <span className="answer-blank"></span>{" "}
                {" ຊົ່ວໂມງ"}
              </p>
              <p>
                {"(3) 15 ໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ໂມງແລງ"}
              </p>
              <p>
                {"(4) 1 ປີ = "} <span className="answer-blank"></span> {" ວັນ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບປະຕິທິນ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 1 ອາທິດ = "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(2) ເດືອນ 3 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(3) ເດືອນ 6 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ທ້າວບຸນມາອອກຈາກເຮືອນເວລາ 7 ໂມງ 10 ນາທີ, ຮອດໂຮງຮຽນເວລາ 7 ໂມງ 40 ນາທີ. ລາວໃຊ້ເວລາຈັກນາທີ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "16px",
                    verticalAlign: "middle",
                  }}
                ></span>{" "}
                {": "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 7 ໂມງແລງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງ (ແບບ 24 ຊົ່ວໂມງ)"}
                </p>
                <p>
                  {"(2) 22 ໂມງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງແລງ"}
                </p>
                <p>
                  {"(3) 18 ໂມງ = "} <span className="answer-blank"></span>{" "}
                  {" ໂມງແລງ"}
                </p>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ນາງຄຳຫຼ້າເລີ່ມອ່ານປຶ້ມເວລາ 3 ໂມງ 15 ນາທີ, ອ່ານຈົບເວລາ 4 ໂມງ. ນາງຄຳຫຼ້າອ່ານປຶ້ມໃຊ້ເວລາຈັກນາທີ? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຈື່ໄວ້ວ່າ 1 ໂມງແລງ = 13 ໂມງ, 2 ໂມງແລງ = 14 ໂມງ, ແລ້ວນັບຕໍ່ໄປ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 2 ຊົ່ວໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ນາທີ"}
              </p>
              <p>
                {"(2) 1 ປີ = "} <span className="answer-blank"></span>{" "}
                {" ເດືອນ"}
              </p>
              <p>
                {"(3) ເດືອນ 8 ມີ "} <span className="answer-blank"></span>{" "}
                {" ວັນ"}
              </p>
              <p>
                {"(4) 20 ໂມງ = "} <span className="answer-blank"></span>{" "}
                {" ໂມງແລງ"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ທ້າວສຸກໄປຕະຫຼາດເວລາ 8 ໂມງ 20 ນາທີ ແລະ ກັບເຮືອນເວລາ 9 ໂມງ. ລາວໃຊ້ເວລາຢູ່ຕະຫຼາດຈັກນາທີ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ນາທີ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ວັນຈັນ, ອັງຄານ, ພຸດ, ພະຫັດ, ສຸກ, ເສົາ, ອາທິດ. ຖ້າມື້ນີ້ແມ່ນວັນພຸດ, ອີກ 5 ວັນຈະເປັນວັນຫຍັງ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ວັນ "} <span className="answer-blank"></span>
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u7-1">{"(1) 60"}</span>,
            <span key="u7-2">{"(2) 24"}</span>,
            <span key="u7-3">{"(3) 3"}</span>,
            <span key="u7-4">{"(4) 365"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u7-5">{"(1) 7"}</span>,
            <span key="u7-6">{"(2) 31"}</span>,
            <span key="u7-7">{"(3) 30"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u7-8">{"40 − 10 = 30, ຕອບ: 30 ນາທີ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u7-9">{"(1) 19"}</span>,
            <span key="u7-10">{"(2) 10"}</span>,
            <span key="u7-11">{"(3) 6"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u7-12">{"60 − 15 = 45, ຕອບ: 45 ນາທີ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 7",
          answers: [
            <span key="u7-s1">{"ຂໍ້ 1: (1) 120, (2) 12, (3) 31, (4) 8"}</span>,
            <span key="u7-s2">{"ຂໍ້ 2: 60 − 20 = 40, ຕອບ: 40 ນາທີ"}</span>,
            <span key="u7-s3">{"ຂໍ້ 3: ວັນຈັນ"}</span>,
          ],
        },
      ],
      advice:
        "1 ຊົ່ວໂມງ = 60 ນາທີ, 1 ວັນ = 24 ຊົ່ວໂມງ. ຫຼັງທ່ຽງວັນ ໃຫ້ບວກ 12 ເຂົ້າ (ເຊັ່ນ: 3 ໂມງແລງ = 15 ໂມງ).",
    },
  },
  {
    unitNumber: 8,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກບໍລິມາດຂອງນໍ້າ",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍລິດ (L) ແລະ ມິນລີລິດ (mL) ແລະ ການວັດແທກບໍລິມາດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 82〜89",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ຫົວໜ່ວຍບໍລິມາດ (ປະລິມານນໍ້າ):"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ລິດ (L):"}</strong>{" "}
              {"ໃຊ້ສຳລັບບໍລິມາດໃຫຍ່ (ເຊັ່ນ: ນໍ້າໃນຄຸ, ກະຕຸກ)"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ມິນລີລິດ (mL):"}</strong>{" "}
              {"ໃຊ້ສຳລັບບໍລິມາດນ້ອຍ (ເຊັ່ນ: ນໍ້າໃນກະປ໋ອງ)"}
            </li>
            <li>
              <strong style={{ color: "#E53935" }}>{"1 L = 1000 mL"}</strong>
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                border: "2px solid #90CAF9",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#E3F2FD",
              }}
            >
              <p style={{ fontSize: "32px", marginBottom: "4px" }}>{"🫗"}</p>
              <p style={{ fontWeight: "bold" }}>{"1 L"}</p>
              <p>{"= 1000 mL"}</p>
            </div>
            <div
              style={{
                border: "2px solid #CE93D8",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#F3E5F5",
              }}
            >
              <p style={{ fontSize: "32px", marginBottom: "4px" }}>{"🥤"}</p>
              <p style={{ fontWeight: "bold" }}>{"500 mL"}</p>
              <p>{"= 0.5 L"}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "1 ລິດ ເທົ່າກັບ 1000 ມິນລີລິດ ເດີ! ຖ້າມີ 2 L ແລະ 600 mL ລວມກັນ ແມ່ນ 2 L 600 mL ຫຼື 2600 mL.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 8 L ແມ່ນບໍລິມາດ "} <span className="answer-blank"></span>{" "}
                {" ເທື່ອຂອງ 1 L"}
              </p>
              <p>
                {"(2) 1000 mL = "} <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 3 L = "} <span className="answer-blank"></span> {" mL"}
              </p>
              <p>
                {"(4) 2000 mL = "} <span className="answer-blank"></span> {" L"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຂຽນຫົວໜ່ວຍ L ຫຼື mL ທີ່ເໝາະສົມໃສ່ໃນ ( ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) ນໍ້າໝາກໄມ້ໃນກະຕຸກ: 450 ( "}{" "}
                <span className="answer-blank"></span> {" )"}
              </p>
              <p>
                {"(2) ນໍ້າໃນຄຸ: 9 ( "} <span className="answer-blank"></span>{" "}
                {" )"}
              </p>
              <p>
                {"(3) ນໍ້າອັດລົມໃນກະປ໋ອງ: 325 ( "}{" "}
                <span className="answer-blank"></span> {" )"}
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີກະຕຸກນໍ້າ 2 L ແລະ ກະຕຸກນ້ອຍ 600 mL. ຖ້າເອົາມາລວມກັນ ຈະມີນໍ້າທັງໝົດຈັກ L ຈັກ mL? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" L "}{" "}
              <span className="answer-blank"></span> {" mL"}
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ບໍລິມາດ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p>
                  {"(1) 3 L + 5 L = "} <span className="answer-blank"></span>{" "}
                  {" L"}
                </p>
                <p>
                  {"(2) 400 mL + 600 mL = "}{" "}
                  <span className="answer-blank"></span> {" mL = "}{" "}
                  <span className="answer-blank"></span> {" L"}
                </p>
                <p>
                  {"(3) 5 L − 2 L 300 mL = "}{" "}
                  <span className="answer-blank"></span> {" L "}{" "}
                  <span className="answer-blank"></span> {" mL"}
                </p>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ມີນໍ້າໃນຄຸ 10 L, ໃຊ້ໄປ 3 L 500 mL. ຍັງເຫຼືອນໍ້າຈັກ L ຈັກ mL? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" L "}{" "}
                <span className="answer-blank"></span> {" mL"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "1 L = 1000 mL ເດີ! ເວລາລົບ ຖ້າ mL ບໍ່ພໍ ໃຫ້ປ່ຽນ 1 L ເປັນ 1000 mL ແລ້ວລົບ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 5 L = "} <span className="answer-blank"></span> {" mL"}
              </p>
              <p>
                {"(2) 4000 mL = "} <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 2 L 500 mL = "} <span className="answer-blank"></span>{" "}
                {" mL"}
              </p>
              <p>
                {"(4) 1500 mL = "} <span className="answer-blank"></span>{" "}
                {" L "} <span className="answer-blank"></span> {" mL"}
              </p>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຄິດໄລ່: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) 6 L + 4 L = "} <span className="answer-blank"></span>{" "}
                {" L"}
              </p>
              <p>
                {"(2) 800 mL + 200 mL = "}{" "}
                <span className="answer-blank"></span> {" mL = "}{" "}
                <span className="answer-blank"></span> {" L"}
              </p>
              <p>
                {"(3) 7 L − 2 L 800 mL = "}{" "}
                <span className="answer-blank"></span> {" L "}{" "}
                <span className="answer-blank"></span> {" mL"}
              </p>
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
            <span key="u8-1">{"(1) 8"}</span>,
            <span key="u8-2">{"(2) 1"}</span>,
            <span key="u8-3">{"(3) 3000"}</span>,
            <span key="u8-4">{"(4) 2"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u8-5">{"(1) mL"}</span>,
            <span key="u8-6">{"(2) L"}</span>,
            <span key="u8-7">{"(3) mL"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u8-8">{"2 L 600 mL"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u8-9">{"(1) 8 L"}</span>,
            <span key="u8-10">{"(2) 1000 mL = 1 L"}</span>,
            <span key="u8-11">{"(3) 2 L 700 mL"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u8-12">{"10 L − 3 L 500 mL = 6 L 500 mL"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 8",
          answers: [
            <span key="u8-s1">
              {"ຂໍ້ 1: (1) 5000, (2) 4, (3) 2500, (4) 1 L 500 mL"}
            </span>,
            <span key="u8-s2">
              {"ຂໍ້ 2: (1) 10 L, (2) 1000 mL = 1 L, (3) 4 L 200 mL"}
            </span>,
          ],
        },
      ],
      advice:
        "1 L = 1000 mL ເດີ! ເວລາບວກ ຫຼື ລົບ ໃຫ້ຄິດ L ກັບ L, mL ກັບ mL. ຖ້າ mL ກາຍ 1000 ກໍປ່ຽນເປັນ L!",
    },
  },
  {
    unitNumber: 9,
    unitTitle: "ການບວກ ແລະ ການລົບ (ຈໍານວນ 3 ຕົວເລກ)",
    unitGoal: "ຮຽນຮູ້ວິທີບວກ ແລະ ລົບຈໍານວນ 3 ຕົວເລກ ຕາມທາງຕັ້ງ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 90〜107",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ການບວກ-ລົບ ຈໍານວນ 3 ຕົວເລກ ແມ່ນຄິດໄລ່ຕາມແຕ່ລະຫຼັກ:"}
          </p>
          <ul
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.6,
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ຂຽນຫຼັກໃຫ້ຊື່ກັນ:"}</strong>{" "}
              {"ຫຼັກຫົວໜ່ວຍ, ຫຼັກຫົວສິບ, ຫຼັກຫົວຮ້ອຍ"}
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>{"ເລີ່ມຈາກຂວາໄປຊ້າຍ:"}</strong>{" "}
              {"ບວກ/ລົບ ຫຼັກຫົວໜ່ວຍກ່ອນ → ຫຼັກຫົວສິບ → ຫຼັກຫົວຮ້ອຍ"}
            </li>
            <li>
              <strong>{"ຖ້າກາຍ 10 ຕ້ອງຈື່, ຖ້າລົບບໍ່ພໍ ຕ້ອງຍືມ"}</strong>
            </li>
          </ul>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              margin: "24px 0",
              fontSize: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ ບວກ"}
              </p>
              <VerticalMath
                top={256}
                bottom={38}
                operator="+"
                showAnswer={true}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {"ຕົວຢ່າງ ລົບ"}
              </p>
              <VerticalMath
                top={543}
                bottom={261}
                operator="-"
                showAnswer={true}
              />
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເຖິງວ່າຈະເປັນຈໍານວນ 3 ຫຼັກ, ແຕ່ກໍຄິດໄລ່ຕາມແຕ່ລະຫຼັກຄືເດີມ! ຈື່ວ່າ ເລີ່ມຈາກຫຼັກຫົວໜ່ວຍ (ຂວາ) ກ່ອນ.",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ການບວກ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={121} bottom={67} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={348} bottom={26} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={513} bottom={72} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={225} bottom={6} operator="+" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <>
            <p style={{ marginBottom: "12px", marginTop: "16px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ການລົບ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={468} bottom={35} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={730} bottom={418} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={952} bottom={647} operator="-" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ໃນຫ້ອງສະໝຸດມີປຶ້ມແບບຮຽນ 256 ຫົວ ແລະ ປຶ້ມເລື່ອງ 38 ຫົວ. ລວມມີປຶ້ມທັງໝົດຈັກຫົວ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຫົວ"}
            </p>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <>
              <p style={{ marginBottom: "12px" }}>
                {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້ (ມີຈື່/ຍືມ): "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
                </span>
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (1)
                  </span>{" "}
                  <VerticalMath top={138} bottom={42} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (2)
                  </span>{" "}
                  <VerticalMath top={59} bottom={531} operator="+" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (3)
                  </span>{" "}
                  <VerticalMath top={385} bottom={247} operator="-" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                    (4)
                  </span>{" "}
                  <VerticalMath top={600} bottom={358} operator="-" />
                </div>
              </div>
            </>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <p>
                {
                  "ໂຮງຮຽນມີນັກຮຽນ 435 ຄົນ. ນັກຮຽນຊາຍມີ 218 ຄົນ. ນັກຮຽນຍິງມີຈັກຄົນ? "
                }{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ຄົນ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ເວລາຕັ້ງບັ້ງເລກ 3 ຫຼັກ, ໃຫ້ຂຽນຫຼັກໃຫ້ຊື່ກັນ ແລ້ວຄິດໄລ່ທີລະຫຼັກຈາກຂວາໄປຊ້າຍ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <>
            <p style={{ marginBottom: "12px" }}>
              {"ຈົ່ງຄິດໄລ່ບັ້ງເລກລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (1)
                </span>{" "}
                <VerticalMath top={345} bottom={123} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (2)
                </span>{" "}
                <VerticalMath top={467} bottom={285} operator="+" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (3)
                </span>{" "}
                <VerticalMath top={876} bottom={543} operator="-" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold" }}>
                  (4)
                </span>{" "}
                <VerticalMath top={703} bottom={456} operator="-" />
              </div>
            </div>
          </>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ໃນໂຮງງານມີສິນຄ້າ 860 ຊິ້ນ, ຂາຍໄປ 375 ຊິ້ນ. ຍັງເຫຼືອສິນຄ້າຈັກຊິ້ນ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຊິ້ນ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <p>
              {
                "ມີເຂົ້າໜຽວ 425 kg ແລະ ເຂົ້າຈ້າວ 318 kg. ລວມມີເຂົ້າທັງໝົດຈັກ kg? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" kg"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u9-1">{"(1) 188"}</span>,
            <span key="u9-2">{"(2) 374"}</span>,
            <span key="u9-3">{"(3) 585"}</span>,
            <span key="u9-4">{"(4) 231"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u9-5">{"(1) 433"}</span>,
            <span key="u9-6">{"(2) 312"}</span>,
            <span key="u9-7">{"(3) 305"}</span>,
          ],
        },
        {
          questionNumber: 3,
          answers: [<span key="u9-8">{"256 + 38 = 294, ຕອບ: 294 ຫົວ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u9-9">{"(1) 180"}</span>,
            <span key="u9-10">{"(2) 590"}</span>,
            <span key="u9-11">{"(3) 138"}</span>,
            <span key="u9-12">{"(4) 242"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u9-13">{"435 − 218 = 217, ຕອບ: 217 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 9",
          answers: [
            <span key="u9-s1">
              {"ຂໍ້ 1: (1) 468, (2) 752, (3) 333, (4) 247"}
            </span>,
            <span key="u9-s2">{"ຂໍ້ 2: 860 − 375 = 485, ຕອບ: 485 ຊິ້ນ"}</span>,
            <span key="u9-s3">{"ຂໍ້ 3: 425 + 318 = 743, ຕອບ: 743 kg"}</span>,
          ],
        },
      ],
      advice:
        "ຈໍານວນ 3 ຫຼັກ ກໍຄິດໄລ່ຕາມແຕ່ລະຫຼັກຄືກັນ! ຂຽນຫຼັກໃຫ້ຊື່ກັນ, ເລີ່ມຈາກຂວາໄປຊ້າຍ. ຖ້າບວກກາຍ 10 ຕ້ອງຈື່, ຖ້າລົບບໍ່ພໍ ຕ້ອງຍືມ!",
    },
  },
  {
    unitNumber: 10,
    unitTitle: "ຮູບສາມແຈ ແລະ ຮູບສີ່ແຈ",
    unitGoal:
      "ຮຽນຮູ້ກ່ຽວກັບຮູບສາມແຈ, ຮູບສີ່ແຈ, ມຸມສາກ, ຮູບສີ່ແຈສາກ ແລະ ຮູບຈະຕຸລັດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 108〜119",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ຊະນິດຂອງຮູບຕ່າງໆ:"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape type="triangle" width={100} height={100} color="#FFCDD2" />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສາມແຈ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {"ມີ 3 ຂ້າງ, 3 ແຈ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="quadrilateral"
                width={100}
                height={100}
                color="#C8E6C9"
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສີ່ແຈ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {"ມີ 4 ຂ້າງ, 4 ແຈ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="rightTriangle"
                width={100}
                height={100}
                color="#BBDEFB"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສາມແຈສາກ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {"ມີ 1 ມຸມສາກ"}
              </span>
            </div>
          </div>
          <div
            className="math-illustration"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="rectangle"
                width={140}
                height={80}
                color="#FFF9C4"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບສີ່ແຈສາກ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {"4 ມຸມສາກ, ຂ້າງເຊິ່ງໜ້າເທົ່າກັນ"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Shape
                type="square"
                width={100}
                height={100}
                color="#E1BEE7"
                showRightAngle={true}
              />
              <strong style={{ fontSize: "14px" }}>{"ຮູບຈະຕຸລັດ"}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {"4 ມຸມສາກ, 4 ຂ້າງເທົ່າກັນ"}
              </span>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ຮູບສີ່ແຈສາກ ຈະມີຂ້າງຍາວ ແລະ ຂ້າງສັ້ນ, ສ່ວນຮູບຈະຕຸລັດ ທຸກຂ້າງຈະຍາວເທົ່າກັນໝົດ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງບອກຊື່ຂອງຮູບລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                fontSize: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Shape type="triangle" color="#F5F5F5" />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(1) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape type="square" color="#F5F5F5" showRightAngle={true} />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(2) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape
                  type="rectangle"
                  width={120}
                  height={80}
                  color="#F5F5F5"
                  showRightAngle={true}
                />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(3) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Shape
                  type="rightTriangle"
                  color="#F5F5F5"
                  showRightAngle={true}
                />
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {"(4) ຮູບ "} <span className="answer-blank"></span>
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຮູບສີ່ແຈສາກ ແລະ ຮູບຈະຕຸລັດ ມີຈັກມຸມສາກ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ມີ "} <span className="answer-blank"></span> {" ມຸມສາກ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຮູບສາມແຈ ມີຈັກຂ້າງ ແລະ ຈັກແຈ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: ມີ "} <span className="answer-blank"></span> {" ຂ້າງ ແລະ "}{" "}
              <span className="answer-blank"></span> {" ແຈ"}
            </p>
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
                {"ຈົ່ງຊອກຫາຄວາມຍາວຂອງຂ້າງທີ່ເຫຼືອ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                className="math-illustration"
                style={{
                  display: "flex",
                  gap: "32px",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {"(1) ຮູບສີ່ແຈສາກ"}
                  </p>
                  <Shape
                    type="rectangle"
                    width={160}
                    height={100}
                    color="#FFF"
                    showRightAngle={true}
                    sideLabels={{
                      top: "? cm",
                      bottom: "5 cm",
                      left: "3 cm",
                      right: "? cm",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {"(2) ຮູບຈະຕຸລັດ"}
                  </p>
                  <Shape
                    type="square"
                    width={120}
                    height={120}
                    color="#FFF"
                    showRightAngle={true}
                    sideLabels={{
                      top: "4 cm ",
                      bottom: "? cm",
                      left: "? cm",
                      right: "? cm",
                    }}
                  />
                </div>
              </div>
              <div
                className="math-illustration"
                style={{ fontSize: "16px" }}
              >
                <p style={{ fontSize: "16px" }}>
                  {"(1) ຂ້າງເທິງຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm, ຂ້າງຊ້າຍຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm"}
                </p>
                <p style={{ fontSize: "16px" }}>
                  {"(2) ທຸກຂ້າງຍາວ = "} <span className="answer-blank"></span>{" "}
                  {" cm"}
                </p>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ຖ້າເອົາຮູບສາມແຈສາກ 2 ຮູບທີ່ເທົ່າກັນມາປະກອບເຂົ້າກັນຕາມຂ້າງທີ່ຍາວທີ່ສຸດ, ຈະໄດ້ຮູບຫຍັງ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ຕອບ: ຮູບ "} <span className="answer-blank"></span>
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText:
        "ຮູບສີ່ແຈສາກ ຂ້າງທີ່ເຊິ່ງໜ້າກັນຈະຍາວເທົ່າກັນ. ຮູບຈະຕຸລັດ ທຸກຂ້າງຈະຍາວເທົ່າກັນ!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນ "}{" "}
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              ></span>{" "}
              {": "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {"(1) ຮູບສີ່ແຈ ມີ "} <span className="answer-blank"></span>{" "}
                {" ຂ້າງ."}
              </p>
              <p>
                {"(2) ຮູບສາມແຈ ມີ "} <span className="answer-blank"></span>{" "}
                {" ແຈ."}
              </p>
              <p>
                {"(3) ຮູບຈະຕຸລັດ ມີມຸມສາກ "}{" "}
                <span className="answer-blank"></span> {" ມຸມ."}
              </p>
              <p>
                {"(4) ຮູບສີ່ແຈສາກ ມີຂ້າງທີ່ເຊິ່ງໜ້າກັນຍາວ "}{" "}
                <span className="answer-blank"></span> {" ກັນ."}
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ຮູບສີ່ແຈສາກໜຶ່ງ ມີລວງກວ້າງ 3 cm ແລະ ລວງຍາວ 6 cm. ຜົນບວກຄວາມຍາວຂອງທັງ 4 ຂ້າງ ແມ່ນຈັກ cm? "
              }{" "}
              <span className="point-label">{"(6 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" cm"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u10-1">{"(1) ສາມແຈ"}</span>,
            <span key="u10-2">{"(2) ຈະຕຸລັດ"}</span>,
            <span key="u10-3">{"(3) ສີ່ແຈສາກ"}</span>,
            <span key="u10-4">{"(4) ສາມແຈສາກ"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u10-5">{"ມີ 4 ມຸມສາກ"}</span>],
        },
        {
          questionNumber: 3,
          answers: [<span key="u10-6">{"ມີ 3 ຂ້າງ ແລະ 3 ແຈ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u10-7">{"(1) ຂ້າງເທິງ 5 cm, ຂ້າງຊ້າຍ 3 cm"}</span>,
            <span key="u10-8">{"(2) 4 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u10-9">{"ຮູບສີ່ແຈສາກ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 10",
          answers: [
            <span key="u10-s1">{"ຂໍ້ 1: (1) 4, (2) 3, (3) 4, (4) ເທົ່າ"}</span>,
            <span key="u10-s2">{"ຂໍ້ 2: 3 + 6 + 3 + 6 = 18, ຕອບ: 18 cm"}</span>,
          ],
        },
      ],
      advice:
        "ຮູບຈະຕຸລັດ ແລະ ຮູບສີ່ແຈສາກ ລ້ວນແຕ່ມີ 4 ມຸມສາກ! ແຕ່ຈະຕຸລັດ ທຸກຂ້າງຍາວເທົ່າກັນ.",
    },
  },
  {
    unitNumber: 11,
    unitTitle: "ການຄູນ",
    unitGoal: "ຮຽນຮູ້ຄວາມໝາຍຂອງການຄູນ ແລະ ການນຳໃຊ້ສູດຄູນບັ້ງ 5",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 120〜130",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ຄວາມໝາຍຂອງການຄູນ:"}
          </p>
          <div
            className="math-illustration"
            style={{
              backgroundColor: "#FFF8E1",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid #FFD54F",
              marginBottom: "16px",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              {"(ຈໍານວນຂອງ 1 ເທື່ອ) × (ຈໍານວນເທື່ອ) = (ຈໍານວນທັງໝົດ)"}
            </p>
          </div>
          <p style={{ marginBottom: "8px" }}>
            <strong>{"ຕົວຢ່າງ:"}</strong>{" "}
            {"ເຂົ້າໜົມ 1 ຈານມີ 5 ກ້ອນ. ຖ້າມີ 3 ຈານ ຈະມີເຂົ້າໜົມທັງໝົດຈັກກ້ອນ?"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "16px",
              fontSize: "20px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
            <span style={{ fontSize: "20px" }}>{"(🍬🍬🍬🍬🍬)"}</span>
          </div>
          <p
            className="math-illustration"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#E53935",
              fontSize: "18px",
            }}
          >
            {"5 × 3 = 15 ກ້ອນ"}
          </p>

          <div
            className="math-illustration"
            style={{
              backgroundColor: "#E8F5E9",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid #81C784",
              marginTop: "24px",
              fontSize: "16px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            >
              {"ສູດຄູນບັ້ງ 5"}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "16px",
              }}
            >
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 1 = 5"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 2 = 10"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 3 = 15"}</p>
              </div>
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 4 = 20"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 5 = 25"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 6 = 30"}</p>
              </div>
              <div>
                <p style={{ fontSize: "16px" }}>{"5 × 7 = 35"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 8 = 40"}</p>
                <p style={{ fontSize: "16px" }}>{"5 × 9 = 45"}</p>
              </div>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຂຽນປະໂຫຍກສັນຍະລັກການຄູນ ໃຫ້ຂຽນສິ່ງທີ່ຢູ່ທາງໃນ 1 ກຸ່ມກ່ອນ ແລ້ວຄູນໃຫ້ຈຳນວນກຸ່ມເດີ!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນເປັນປະໂຫຍກສັນຍະລັກຂອງການຄູນ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                {
                  "(1) ໝາກແຕງ 1 ຖົງມີ 8 ໜ່ວຍ. ມີ 4 ຖົງ. ລວມທັງໝົດມີໝາກແຕງຈັກໜ່ວຍ?"
                }
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank"></span>{" "}
                {" × "} <span className="answer-blank"></span>
              </p>
              <p>{"(2) ຄວາມຍາວ 2 ເທື່ອຂອງເຫຼັກຕາປູ 5 cm ແມ່ນຈັກ cm?"}</p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "} <span className="answer-blank"></span>{" "}
                {" × "} <span className="answer-blank"></span>
              </p>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນບັ້ງ 5: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 5 × 3 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 5 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 5 × 2 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 5 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(5) 5 × 5 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(6) 5 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
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
                {
                  "ໝາກກ້ວຍໃນແຕ່ລະຈານມີ 5 ໜ່ວຍ. ຖ້າມີ 7 ຈານ ຈະມີໝາກກ້ວຍທັງໝົດຈັກໜ່ວຍ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ໜ່ວຍ"}
              </p>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {"ນັກຮຽນນັ່ງໂຕະລະ 5 ຄົນ. ຖ້າມີ 4 ໂຕະ ຈະມີນັກຮຽນທັງໝົດຈັກຄົນ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ຄົນ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ສູດຄູນບັ້ງ 5 ເຂົ້າຊ່ວຍເລີຍ! 5 × 7 ແລະ 5 × 4",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 5 × 4 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 5 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 5 × 1 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 5 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ດອກໄມ້ 1 ຊໍ່ມີ 5 ດອກ. ຖ້າມີ 6 ຊໍ່ ຈະມີດອກໄມ້ທັງໝົດຈັກດອກ? "}{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ດອກ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ປຶ້ມ 1 ຫົວລາຄາ 5 ກີບ. ຖ້າຊື້ 8 ຫົວ ຈະຕ້ອງຈ່າຍເງິນທັງໝົດຈັກກີບ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u11-1">{"(1) 8 × 4"}</span>,
            <span key="u11-2">{"(2) 5 × 2"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u11-3">{"(1) 15"}</span>,
            <span key="u11-4">{"(2) 30"}</span>,
            <span key="u11-5">{"(3) 10"}</span>,
            <span key="u11-6">{"(4) 40"}</span>,
            <span key="u11-7">{"(5) 25"}</span>,
            <span key="u11-8">{"(6) 45"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u11-9">{"5 × 7 = 35, ຕອບ: 35 ໜ່ວຍ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u11-10">{"5 × 4 = 20, ຕອບ: 20 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 11",
          answers: [
            <span key="u11-s1">{"ຂໍ້ 1: (1) 20, (2) 35, (3) 5, (4) 45"}</span>,
            <span key="u11-s2">{"ຂໍ້ 2: 5 × 6 = 30, ຕອບ: 30 ດອກ"}</span>,
            <span key="u11-s3">{"ຂໍ້ 3: 5 × 8 = 40, ຕອບ: 40 ກີບ"}</span>,
          ],
        },
      ],
      advice:
        "ທ່ອງສູດຄູນບັ້ງ 5 ໃຫ້ລ່ຽນໄຫຼ! ເວລາຂຽນປະໂຫຍກສັນຍະລັກ ໃຫ້ເອົາຈຳນວນໃນ 1 ກຸ່ມຂຶ້ນກ່ອນ.",
    },
  },
  {
    unitNumber: 12,
    unitTitle: "ການຄູນ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄູນບັ້ງ 6, 7, 8, 9 ແລະ 1",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 148〜175",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ສູດຄູນບັ້ງ 6, 7, 8, 9 ແລະ 1"}
          </p>
          <div
            className="math-illustration"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-around",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #90CAF9",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 6"}
              </p>
              <p style={{ fontSize: "14px" }}>{"6 × 1 = 6"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 2 = 12"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 3 = 18"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 4 = 24"}</p>
              <p style={{ fontSize: "14px" }}>{"6 × 5 = 30"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#FCE4EC",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #F48FB1",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 7"}
              </p>
              <p style={{ fontSize: "14px" }}>{"7 × 1 = 7"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 2 = 14"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 3 = 21"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 4 = 28"}</p>
              <p style={{ fontSize: "14px" }}>{"7 × 5 = 35"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#E8F5E9",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #A5D6A7",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 8"}
              </p>
              <p style={{ fontSize: "14px" }}>{"8 × 1 = 8"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 2 = 16"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 3 = 24"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 4 = 32"}</p>
              <p style={{ fontSize: "14px" }}>{"8 × 5 = 40"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
            <div
              style={{
                backgroundColor: "#FFF3E0",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid #FFCC80",
                width: "22%",
                minWidth: "115px",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {"ບັ້ງ 9"}
              </p>
              <p style={{ fontSize: "14px" }}>{"9 × 1 = 9"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 2 = 18"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 3 = 27"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 4 = 36"}</p>
              <p style={{ fontSize: "14px" }}>{"9 × 5 = 45"}</p>
              <p style={{ fontSize: "14px" }}>{"..."}</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              border: "1px dashed #CCC",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              {"ຈື່ໄວ້!"}
            </p>
            <p>{"ສູດຄູນບັ້ງ 1: ຈຳນວນໃດມາຄູນກັບ 1 ກໍຈະອອກຈຳນວນນັ້ນເອງ!"}</p>
            <p>{"(ຕົວຢ່າງ: 1 × 7 = 7, 1 × 9 = 9)"}</p>
          </div>
        </>
      ),
      hint: {
        text: "ທ່ອງສູດຄູນໃຫ້ລ່ຽນໄຫຼເລີຍເດີ! ເລີ່ມແຕ່ 6×1=6 ໄປຮອດ 9×9=81",
        isBlue: false,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 8 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 6 × 4 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 7 × 3 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 8 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 9 × 2 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(5) 6 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(6) 7 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(7) 8 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(8) 1 × 5 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {"ຊື້ປາ 2 ຖົງ, ແຕ່ລະຖົງມີ 6 ໂຕ. ລວມທັງໝົດມີປາຈັກໂຕ? "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໂຕ"}
            </p>
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
                {"1 ອາທິດມີ 7 ວັນ. ຖ້າ 4 ອາທິດຈະມີທັງໝົດຈັກວັນ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ວັນ"}
              </p>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {"ຊື້ປຶ້ມ 9 ຫົວ. ລາຄາຫົວລະ 8 ກີບ. ລວມເປັນເງິນທັງໝົດຈັກກີບ? "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ສູດຄູນໄດ້ເລີຍ! 7 ວັນ ມີ 4 ອາທິດ ກໍຄື 7 × 4.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຊອກຫາຄຳຕອບຂອງການຄູນລຸ່ມນີ້: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 6 × 9 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(2) 9 × 6 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(3) 7 × 8 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
              <div>
                {"(4) 8 × 7 = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ເຂົ້າໜົມ 1 ກ່ອງມີ 6 ກ້ອນ. ຖ້າຊື້ 7 ກ່ອງ ຈະມີເຂົ້າໜົມທັງໝົດຈັກກ້ອນ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກ້ອນ"}
            </p>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ຢາຍສໍດຳໃຫ້ເດັກນ້ອຍ 8 ຄົນ, ຄົນລະ 9 ກ້ານ. ຕ້ອງໃຊ້ສໍດຳທັງໝົດຈັກກ້ານ? "
              }{" "}
              <span className="point-label">{"(3 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກ້ານ"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="u12-1">{"(1) 24"}</span>,
            <span key="u12-2">{"(2) 21"}</span>,
            <span key="u12-3">{"(3) 48"}</span>,
            <span key="u12-4">{"(4) 18"}</span>,
            <span key="u12-5">{"(5) 48"}</span>,
            <span key="u12-6">{"(6) 49"}</span>,
            <span key="u12-7">{"(7) 72"}</span>,
            <span key="u12-8">{"(8) 5"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u12-b2-1">{"6 × 2 = 12, ຕອບ: 12 ໂຕ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u12-9">{"7 × 4 = 28, ຕອບ: 28 ວັນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u12-10">{"8 × 9 = 72, ຕອບ: 72 ກີບ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 12",
          answers: [
            <span key="u12-s1">{"ຂໍ້ 1: (1) 54, (2) 54, (3) 56, (4) 56"}</span>,
            <span key="u12-s2">{"ຂໍ້ 2: 6 × 7 = 42, ຕອບ: 42 ກ້ອນ"}</span>,
            <span key="u12-s3">{"ຂໍ້ 3: 9 × 8 = 72, ຕອບ: 72 ກ້ານ"}</span>,
          ],
        },
      ],
      advice:
        "ສູດຄູນ 6, 7, 8, 9 ອາດຈະຍາກແດ່, ແຕ່ພະຍາຍາມທ່ອງທຸກມື້ໃຫ້ຈື່ເດີ! 6×9 ກັບ 9×6 ແມ່ນອອກ 54 ຄືກັນ!",
    },
  },
  {
    unitNumber: 13,
    unitTitle: "ຫົວໜ່ວຍ ແລະ ວິທີວັດແທກຄວາມຍາວ (ຕໍ່)",
    unitGoal: "ຮຽນຮູ້ຫົວໜ່ວຍວັດແທກ ແມັດ (m) ແລະ ການປ່ຽນຫົວໜ່ວຍລະຫວ່າງ m ກັບ cm",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 176〜183",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {
              "ເມື່ອເຮົາສະແດງຄວາມຍາວຂອງວັດຖຸທີ່ຍາວຫຼາຍ ເຮົາຈະໃຊ້ຫົວໜ່ວຍທີ່ເອີ້ນວ່າ "
            }
            <strong>{"ແມັດ (m)"}</strong>
          </p>
          <div
            className="math-illustration"
            style={{
              padding: "16px",
              backgroundColor: "#E8F5E9",
              borderRadius: "8px",
              border: "2px solid #81C784",
              textAlign: "center",
              marginBottom: "24px",
              fontSize: "28px",
            }}
          >
            <p
              style={{ fontSize: "28px", fontWeight: "bold", color: "#2E7D32" }}
            >
              {"1 m = 100 cm"}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>{"1 ແມັດ ເທົ່າກັບ 100 ຊັງຕີແມັດ."}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>{"ຕົວຢ່າງ: 300 cm = 3 m, 2 m = 200 cm"}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>{"ຖ້າຄວາມຍາວແມ່ນ 120 cm ກໍຈະຂຽນເປັນ 1 m 20 cm."}</p>
            </div>
          </div>
        </>
      ),
      hint: {
        text: "ຈື່ໄວ້ວ່າ 1 m = 100 cm. ດັ່ງນັ້ນ 500 cm ກໍຄື 5 m!",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 300 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" m"}
              </div>
              <div>
                {"(2) 6 m = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(3) 2 m 50 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ນຳໃຊ້ໄມ້ແມັດ (1m) ວັດແທກຄວາມຍາວຂອງໄມ້ລຳໜຶ່ງໄດ້ 3 ເທື່ອ. ຖາມວ່າໄມ້ລຳນັ້ນຍາວຈັກ m? "
              }{" "}
              <span className="point-label">{"(4 ຄະແນນ)"}</span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" m"}
            </p>
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
                {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  {"(1) 425 cm = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" m "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" cm"}
                </div>
                <div>
                  {"(2) 307 cm = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" m "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "40px", display: "inline-block" }}
                  ></span>{" "}
                  {" cm"}
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ຈົ່ງຕື່ມຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ເໝາະສົມ (m ຫຼື cm) ໃສ່ໃນວົງເລັບ: "
                }{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  {"(1) ລວງກວ້າງຂອງຢາງລຶບ 15 ( "}{" "}
                  <span
                    className="answer-blank"
                    style={{
                      width: "40px",
                      display: "inline-block",
                      borderBottom: "none",
                    }}
                  ></span>{" "}
                  {" )"}
                </div>
                <div>
                  {"(2) ລວງສູງຂອງຕົ້ນໄມ້ 15 ( "}{" "}
                  <span
                    className="answer-blank"
                    style={{
                      width: "40px",
                      display: "inline-block",
                      borderBottom: "none",
                    }}
                  ></span>{" "}
                  {" )"}
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "425 cm ແຍກເປັນ 400 cm ກັບ 25 cm. 400 cm ແມ່ນ 4 m ເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຂຽນຈຳນວນທີ່ຖືກຕ້ອງໃສ່ໃນບ່ອນຫວ່າງ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) 500 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" m"}
              </div>
              <div>
                {"(2) 7 m = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(3) 2 m 5 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "60px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
              <div>
                {"(4) 340 cm = "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>{" "}
                {" m "}{" "}
                <span
                  className="answer-blank"
                  style={{ width: "40px", display: "inline-block" }}
                ></span>{" "}
                {" cm"}
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ຈົ່ງຕື່ມຫົວໜ່ວຍວັດແທກຄວາມຍາວທີ່ເໝາະສົມ (m, cm ຫຼື mm) ໃສ່ໃນວົງເລັບ: "
              }{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                {"(1) ລວງກວ້າງຂອງປຶ້ມແບບຮຽນ 18 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
              </div>
              <div>
                {"(2) ລວງກວ້າງຂອງຫ້ອງຮຽນ 6 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
              </div>
              <div>
                {"(3) ຄວາມໜາຂອງປຶ້ມຂຽນ 5 ( "}{" "}
                <span
                  className="answer-blank"
                  style={{
                    width: "40px",
                    display: "inline-block",
                    borderBottom: "none",
                  }}
                ></span>{" "}
                {" )"}
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
            <span key="u13-1">{"(1) 3"}</span>,
            <span key="u13-2">{"(2) 600"}</span>,
            <span key="u13-3">{"(3) 250"}</span>,
          ],
        },
        {
          questionNumber: 2,
          answers: [<span key="u13-b2-1">{"3"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u13-4">{"(1) 4 m 25 cm"}</span>,
            <span key="u13-5">{"(2) 3 m 7 cm"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u13-6">{"(1) cm"}</span>,
            <span key="u13-7">{"(2) m"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 13",
          answers: [
            <span key="u13-s1">
              {"ຂໍ້ 1: (1) 5, (2) 700, (3) 205, (4) 3 m 40 cm"}
            </span>,
            <span key="u13-s2">{"ຂໍ້ 2: (1) cm, (2) m, (3) mm"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຕົວເລກຫຼາຍກວ່າ 100 cm ໃຫ້ປ່ຽນເປັນ m. ຕົວຢ່າງ: 100 cm = 1 m. ລະວັງ 2 m 5 cm ຄື 205 cm ບໍ່ແມ່ນ 250 cm ເດີ້!",
    },
  },
  {
    unitNumber: 14,
    unitTitle: "ໂຈດບັນຫາກ່ຽວກັບການບວກ ແລະ ການລົບ (ຕໍ່)",
    unitGoal: "ແກ້ໂຈດບັນຫາການບວກ ແລະ ການລົບ ໂດຍນຳໃຊ້ແຜນວາດ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 184〜189",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ການນຳໃຊ້ແຜນວາດເຂົ້າໃນການແກ້ໂຈດບັນຫາ"}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>{"ເວລາແກ້ໂຈດບັນຫາ ຄວນແຕ້ມແຜນວາດເພື່ອໃຫ້ເຂົ້າໃຈງ່າຍຂຶ້ນ."}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>
                {
                  "ແຜນວາດຈະສະແດງໃຫ້ເຫັນ: ຈຳນວນທຳອິດ, ຈຳນວນທີ່ປ່ຽນແປງ (ມາຕື່ມ ຫຼື ເອົາອອກ) ແລະ ຈຳນວນທັງໝົດ."
                }
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              border: "1px dashed #CCC",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {"ຕົວຢ່າງການນຳໃຊ້ແຜນວາດ"}
            </p>
            <p>{"ມີໝາກຫຸ່ງ 23 ໜ່ວຍ. ຂາຍໄປ 15 ໜ່ວຍ. ຍັງເຫຼືອຈັກໜ່ວຍ?"}</p>
            <TapeDiagram
              type="single"
              totalLabel="ທຳອິດມີ 23 ໜ່ວຍ"
              leftLabel="ຂາຍໄປ 15 ໜ່ວຍ"
              rightLabel="ຍັງເຫຼືອ ?"
              leftWidthPercent={65}
            />
            <p style={{ textAlign: "center", marginTop: "12px" }}>
              {"ປະໂຫຍກສັນຍະລັກ: 23 - 15 = 8. ຕອບ: 8 ໜ່ວຍ"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ຖ້າຂາຍໄປ, ກິນໄປ ຫຼື ເອົາອອກ ໃຫ້ໃຊ້ການລົບ (-). ຖ້າມາຕື່ມ, ຊື້ເພີ່ມ ຫຼື ເອົາເຂົ້າ ໃຫ້ໃຊ້ການບວກ (+).",
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ມີເຈ້ຍຈຳນວນໜຶ່ງ ໃຊ້ໄປແລ້ວ 8 ໃບ, ຍັງເຫຼືອ 7 ໃບ. ຈຳນວນເຈ້ຍທີ່ມີທຳອິດແມ່ນຈັກໃບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ທຳອິດມີ ? ໃບ"
              leftLabel="ໃຊ້ໄປແລ້ວ 8 ໃບ"
              rightLabel="ຍັງເຫຼືອ 7 ໃບ"
              leftWidthPercent={50}
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໃບ"}
            </p>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໝາກບານ 8 ໜ່ວຍ ແລະ ໝາກກະຕໍ້ 12 ໜ່ວຍ. ອັນໃດຫຼາຍກວ່າ ແລະ ຫຼາຍກວ່າຈັກໜ່ວຍ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="compare"
              topBarLabel="ໝາກບານ"
              topBarValue="8 ໜ່ວຍ"
              topBarWidthPercent={40}
              bottomBarLabel="ໝາກກະຕໍ້"
              bottomBarValue="12 ໜ່ວຍ"
              bottomBarWidthPercent={60}
              differenceLabel="ຫຼາຍກວ່າ ? ໜ່ວຍ"
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ຫຼາຍກວ່າ "}{" "}
              <span className="answer-blank"></span> {" ໜ່ວຍ"}
            </p>
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
                {
                  "ຫ້ອງຮຽນມີນັກຮຽນຍິງ 18 ຄົນ, ນັກຮຽນຊາຍໜ້ອຍກວ່ານັກຮຽນຍິງ 2 ຄົນ. ນັກຮຽນຊາຍມີຈັກຄົນ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <TapeDiagram
                type="compare"
                topBarLabel="ຍິງ"
                topBarValue="18 ຄົນ"
                topBarWidthPercent={70}
                bottomBarLabel="ຊາຍ"
                bottomBarValue="? ຄົນ"
                bottomBarWidthPercent={55}
                differenceLabel="ໜ້ອຍກວ່າ 2 ຄົນ"
              />
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ຄົນ"}
              </p>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ຮ້ານຂາຍໝາກໄມ້ ມີໝາກພ້າວ 7 ໜ່ວຍ, ໝາກໂມຫຼາຍກວ່າໝາກພ້າວ 9 ໜ່ວຍ. ໝາກໂມແມ່ນມີຈັກໜ່ວຍ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <TapeDiagram
                type="compare"
                topBarLabel="ໝາກພ້າວ"
                topBarValue="7 ໜ່ວຍ"
                topBarWidthPercent={30}
                bottomBarLabel="ໝາກໂມ"
                bottomBarValue="? ໜ່ວຍ"
                bottomBarWidthPercent={70}
                differenceLabel="ຫຼາຍກວ່າ 9 ໜ່ວຍ"
              />
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ໜ່ວຍ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຖ້າໜ້ອຍກວ່າໃຫ້ໃຊ້ລົບ (-), ຖ້າຫຼາຍກວ່າໃຫ້ໃຊ້ບວກ (+) ເດີ້!",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ມີແມວຈຳນວນໜຶ່ງ. ມາຕື່ມອີກ 6 ໂຕ, ທັງໝົດເປັນ 14 ໂຕ. ແມວທີ່ມີທຳອິດແມ່ນຈັກໂຕ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ທັງໝົດ 14 ໂຕ"
              leftLabel="ທຳອິດມີ ? ໂຕ"
              rightLabel="ມາຕື່ມອີກ 6 ໂຕ"
              leftWidthPercent={60}
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໂຕ"}
            </p>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໄຂ່ຢູ່ເຮືອນ 8 ໜ່ວຍ ຊື້ມາຕື່ມອີກຈຳນວນໜຶ່ງ ລວມທັງໝົດເປັນ 20 ໜ່ວຍ. ໄຂ່ທີ່ຊື້ມາຕື່ມອີກແມ່ນມີຈັກໜ່ວຍ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <TapeDiagram
              type="single"
              totalLabel="ລວມທັງໝົດເປັນ 20 ໜ່ວຍ"
              leftLabel="ມີຢູ່ເຮືອນ 8 ໜ່ວຍ"
              rightLabel="ຊື້ມາຕື່ມອີກ ? ໜ່ວຍ"
              leftWidthPercent={40}
            />
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ໜ່ວຍ"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="u14-1">{"8 + 7 = 15, ຕອບ: 15 ໃບ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u14-2">
              {"12 - 8 = 4, ຕອບ: ໝາກກະຕໍ້ຫຼາຍກວ່າ 4 ໜ່ວຍ"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="u14-c1">{"18 - 2 = 16, ຕອບ: 16 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="u14-c2">{"7 + 9 = 16, ຕອບ: 16 ໜ່ວຍ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 14",
          answers: [
            <span key="u14-s1">{"ຂໍ້ 1: 14 - 6 = 8, ຕອບ: 8 ໂຕ"}</span>,
            <span key="u14-s2">{"ຂໍ້ 2: 20 - 8 = 12, ຕອບ: 12 ໜ່ວຍ"}</span>,
          ],
        },
      ],
      advice:
        "ຖ້າຊອກຫາຈຳນວນທຳອິດກ່ອນຈະເພີ່ມຂຶ້ນ ໃຫ້ໃຊ້ການລົບ! ຕົວຢ່າງ: ມີທັງໝົດ 14 ໂຕ, ມາໃໝ່ 6 ໂຕ ໝາຍຄວາມວ່າ ທຳອິດມີ 14 - 6 = 8 ໂຕ.",
    },
  },
  {
    unitNumber: 15,
    unitTitle: "ທະນະບັດ",
    unitGoal: "ຮຽນຮູ້ທະນະບັດຂອງລາວ ແລະ ການຄິດໄລ່ເງິນທອນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ໜ້າ 190〜195",
    keyPoints: {
      content: (
        <>
          <p
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            {"ທະນະບັດຂອງລາວທີ່ໃຊ້ໃນປະຈຸບັນ"}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>
                {"ຫົວໜ່ວຍຂອງເງິນລາວ ແມ່ນ "}
                <strong>{"ກີບ"}</strong>
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                }}
              ></div>
              <p>
                {
                  "ທະນະບັດທີ່ພົບເລື້ອຍໆ: 500 ກີບ, 1000 ກີບ, 2000 ກີບ, 5000 ກີບ, 10000 ກີບ"
                }
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "8px",
              }}
            >
              <LaoBanknote amount={500} width={80} />
              <LaoBanknote amount={1000} width={80} />
              <LaoBanknote amount={2000} width={80} />
              <LaoBanknote amount={5000} width={80} />
              <LaoBanknote amount={10000} width={80} />
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
              border: "1px dashed #CCC",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
              {"ວິທີການຄິດໄລ່ເງິນ"}
            </p>
            <p>
              {
                "ໃບ 1000 ກີບ 2 ໃບ ແລະ 500 ກີບ 1 ໃບ ເທົ່າກັບ 2500 ກີບ (ສອງພັນຫ້າຮ້ອຍກີບ)"
              }
            </p>
            <p
              style={{ marginTop: "8px", color: "#E53935", fontWeight: "bold" }}
            >
              {"ເງິນທອນ = ເງິນທີ່ຈ່າຍໄປ - ລາຄາເຄື່ອງ"}
            </p>
          </div>
        </>
      ),
      hint: {
        text: "ເວລາຊື້ເຄື່ອງ ຖ້າເຮົາຈ່າຍເງິນຫຼາຍກວ່າລາຄາເຄື່ອງ ເຮົາຈະໄດ້ເງິນທອນຄືນເດີ້!",
        isBlue: false,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງບອກວ່າເງິນທັງໝົດລວມເປັນຈັກກີບ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}
              </span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "16px",
              }}
            >
              <div style={{ fontSize: "16px" }}>
                <p style={{ fontSize: "16px" }}>
                  {"(1) ໃບ 1000 ກີບ 3 ໃບ ແລະ ໃບ 500 ກີບ 1 ໃບ = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "60px", display: "inline-block" }}
                  ></span>{" "}
                  {" ກີບ"}
                </p>
                <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
                  <LaoBanknote amount={1000} count={3} />
                  <LaoBanknote amount={500} count={1} />
                </div>
              </div>
              <div style={{ fontSize: "16px" }}>
                <p style={{ fontSize: "16px" }}>
                  {"(2) ໃບ 2000 ກີບ 2 ໃບ ແລະ ໃບ 5000 ກີບ 1 ໃບ = "}{" "}
                  <span
                    className="answer-blank"
                    style={{ width: "60px", display: "inline-block" }}
                  ></span>{" "}
                  {" ກີບ"}
                </p>
                <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
                  <LaoBanknote amount={2000} count={2} />
                  <LaoBanknote amount={5000} count={1} />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ຢາງລຶບລາຄາ 5500 ກີບ. ຖ້າບໍ່ຢາກໃຫ້ມີເງິນທອນ ຕ້ອງຈ່າຍໃບ 1000 ກີບ ຈັກໃບ ແລະ ໃບ 500 ກີບ ຈັກໃບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <LaoBanknote amount={1000} count={1} />
              {" ? ໃບ, "}
              <LaoBanknote amount={500} count={1} />
              {" ? ໃບ"}
            </div>
            <p>
              {"ຕອບ: ໃບ 1000 ກີບ "} <span className="answer-blank"></span>{" "}
              {" ໃບ ແລະ ໃບ 500 ກີບ "} <span className="answer-blank"></span>{" "}
              {" ໃບ"}
            </p>
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
                {
                  "ໃຊ້ເງິນໃບ 5000 ກີບ ຊື້ສໍສີລາຄາ 3000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ margin: "8px 0" }}>
                <LaoBanknote amount={5000} count={1} />
              </div>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
              </p>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <p>
                {
                  "ໃຊ້ເງິນໃບ 10000 ກີບ ຊື້ເຂົ້າຈີ່ລາຄາ 7000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
                }{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ margin: "8px 0" }}>
                <LaoBanknote amount={10000} count={1} />
              </div>
              <p>
                {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
                <span className="answer-blank answer-blank--large"></span>
              </p>
              <p>
                {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
              </p>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ເງິນທອນ = ເງິນທີ່ຈ່າຍ (5000) - ລາຄາເຄື່ອງ (3000)",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {
                "ໃຊ້ເງິນໃບ 10000 ກີບ ຊື້ປຶ້ມຂຽນ 3000 ກີບ ແລະ ສໍດຳ 1000 ກີບ. ຈະໄດ້ເງິນທອນເທົ່າໃດ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ margin: "8px 0" }}>
              <LaoBanknote amount={10000} count={1} />
            </div>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
            </p>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <p>
              {
                "ມີໃບ 5000 ກີບ 1 ໃບ, ໃບ 2000 ກີບ 2 ໃບ ແລະ ໃບ 1000 ກີບ 1 ໃບ. ລວມທັງໝົດມີເງິນຈັກກີບ? "
              }{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              className="math-illustration"
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "8px",
                flexWrap: "wrap",
                fontSize: "16px",
              }}
            >
              <LaoBanknote amount={5000} count={1} />
              <LaoBanknote amount={2000} count={2} />
              <LaoBanknote amount={1000} count={1} />
            </div>
            <p>
              {"ປະໂຫຍກສັນຍະລັກ: "}{" "}
              <span className="answer-blank answer-blank--large"></span>
            </p>
            <p>
              {"ຕອບ: "} <span className="answer-blank"></span> {" ກີບ"}
            </p>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="u15-1">{"(1) 3500, (2) 9000"}</span>],
        },
        {
          questionNumber: 2,
          answers: [
            <span key="u15-2">{"ໃບ 1000 ກີບ 5 ໃບ, ໃບ 500 ກີບ 1 ໃບ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="u15-c1">{"5000 - 3000 = 2000, ຕອບ: 2000 ກີບ"}</span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="u15-c2">{"10000 - 7000 = 3000, ຕອບ: 3000 ກີບ"}</span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 15",
          answers: [
            <span key="u15-s1">
              {"ຂໍ້ 1: 10000 - (3000 + 1000) = 6000, ຕອບ: 6000 ກີບ"}
            </span>,
            <span key="u15-s2">
              {"ຂໍ້ 2: 5000 + 4000 + 1000 = 10000, ຕອບ: 10000 ກີບ"}
            </span>,
          ],
        },
      ],
      advice:
        "ເວລາຄິດໄລ່ເງິນ ຖ້າຕົວເລກຫຼາຍເກີນໄປ ໃຫ້ຕັດເລກສູນ 3 ໂຕອອກແລ້ວຄິດໄລ່ກໍໄດ້ (ຕົວຢ່າງ: 5000-3000 ກໍຄື 5-3 = 2 ພັນ)",
    },
  },
];
