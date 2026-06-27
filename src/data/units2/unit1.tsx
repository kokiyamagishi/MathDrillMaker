import React from "react";
import { UnitData } from "../units2";
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

export const unit1Data: UnitData = {
    
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
              gridTemplateColumns: "1fr",
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
  };
