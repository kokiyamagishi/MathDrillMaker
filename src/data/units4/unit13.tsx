import React from "react";
import { UnitData } from "../units2";
import { VerticalMath } from "@/components/illustrations";

export const unit13Data: UnitData = {
    
    unitNumber: 13,
    unitTitle: "ທະວີຄູນ ແລະ ອຸປະຄູນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທະວີຄູນ, ອຸປະຄູນ, ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 116-126",
    keyPoints: {
      hint: {
        text: "ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ແມ່ນຈຳນວນນ້ອຍສຸດທີ່ຫານຂາດໃຫ້ທັງສອງຕົວຫານ. ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ແມ່ນຈຳນວນໃຫຍ່ສຸດທີ່ສາມາດຫານທັງສອງຕົວຕັ້ງຫານໄດ້ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ"}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#E3F2FD",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#1565C0" }}>
                {"ຈຳນວນຄູ່"}
              </strong>
              <p style={{ fontSize: "22px", margin: "10px 0 0 0" }}>
                {"ຈຳນວນຖ້ວນທີ່ຫານຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8)."}
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "10px 0 0 0",
                }}
              >
                {"0, 2, 4, 6, 8, 10..."}
              </p>
            </div>
            <div
              style={{
                flex: "1 1 200px",
                padding: "16px",
                backgroundColor: "#FFF3E0",
                border: "2px solid #FF9800",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "22px", color: "#E65100" }}>
                {"ຈຳນວນຄີກ"}
              </strong>
              <p style={{ fontSize: "22px", margin: "10px 0 0 0" }}>
                {
                  "ຈຳນວນຖ້ວນທີ່ຫານບໍ່ຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9)."
                }
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "10px 0 0 0",
                }}
              >
                {"1, 3, 5, 7, 9, 11..."}
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
              {"ຈົ່ງຊອກຫາທະວີຄູນ ແລະ ອຸປະຄູນຕາມທີ່ກຳນົດ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                fontSize: "20px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {"(1) ຈົ່ງຊອກຫາ 3 ທະວີຄູນຮ່ວມທຳອິດຂອງ 3 ແລະ 4 ແມ່ນ"}
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(2) ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ຂອງ 3 ແລະ 4 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(3) ຈົ່ງຊອກຫາອຸປະຄູນທັງໝົດຂອງ 12 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "200px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span>{"(4) ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ຂອງ 12 ແລະ 18 ແມ່ນ"}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
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
        "ຈຳນວນຄູ່ແມ່ນຕົວເລກທີ່ລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8. ສ່ວນຈຳນວນຄີກແມ່ນລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງຈຳແນກຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ ໂດຍຂຽນຄຳຕອບໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
              </p>
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
                  <span>{"(1) ຈຳນວນ 48 ແມ່ນຈຳນວນ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "100px",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span>{"(2) ຈຳນວນ 75 ແມ່ນຈຳນວນ"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "100px",
                      height: "40px",
                    }}
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
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
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
                    "📐 ຕ້ອງການຈັດວາງກະເບື້ອງຮູບຈະຕຸລັດຂະໜາດເທົ່າກັນ ໃສ່ໃນພື້ນທີ່ຮູບສາມແຈສາກ (ຫຼື ຮູບສີ່ແຈສາກ) ທີ່ມີລວງກວ້າງ 12m ແລະ ລວງຍາວ 18m. ຂະໜາດຄວາມຍາວຂ້າງທີ່ໃຫຍ່ທີ່ສຸດຂອງກະເບື້ອງຮູບຈະຕຸລັດທີ່ສາມາດປູໄດ້ພໍດີແມ່ນຈັກແມັດ?"
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
                      width: "100px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"m"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແຈກຢາຍສິ່ງຂອງ (ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ): "}{" "}
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
                  "🍎 ມີໝາກແອບເປິນ 18 ໜ່ວຍ ແລະ ໝາກກ້ຽງ 24 ໜ່ວຍ. ຖ້າຕ້ອງການແບ່ງໝາກໄມ້ທັງສອງປະເພດນີ້ ໃຫ້ເດັກນ້ອຍກຸ່ມໜຶ່ງໂດຍໃຫ້ແຕ່ລະຄົນໄດ້ຮັບເທົ່າໆກັນ. ຈະສາມາດແບ່ງໃຫ້ເດັກນ້ອຍໄດ້ຫຼາຍທີ່ສຸດຈັກຄົນ?"
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
                <span>{"ຄົນ"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການອອກເດີນທາງພ້ອມກັນ (ທະວີຄູນຮ່ວມນ້ອຍສຸດ): "}{" "}
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
                  "🚌 ລົດເມສາຍ A ອອກທຸກໆ 8 ນາທີ ແລະ ສາຍ B ອອກທຸກໆ 12 ນາທີ. ຖ້າລົດເມທັງສອງສາຍອອກເດີນທາງພ້ອມກັນໃນເວລາ 8:00, ພວກມັນຈະອອກເດີນທາງພ້ອມກັນອີກຄັ້ງໃນອີກຈັກນາທີ?"
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
                <span>{"ນາທີ"}</span>
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
              {"(1) 12, 24, 36, (2) 12, (3) 1, 2, 3, 4, 6, 12, (4) 6"}
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) ຈຳນວນຄູ່, (2) ຈຳນວນຄີກ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="3">
              {"6 m (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 12 ແລະ 18)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="4">
              {"6 ຄົນ (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 18 ແລະ 24)"}
            </span>,
          ],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="4_2">
              {"24 ນາທີ (ຍ້ອນ 24 ແມ່ນທະວີຄູນຮ່ວມນ້ອຍສຸດຂອງ 8 ແລະ 12)"}
            </span>,
          ],
        },
      ],
      advice:
        "ການຊອກຫາ LCM ແລະ GCD ຈະຊ່ວຍໃຫ້ເຮົາແກ້ໄຂບັນຫາການຈັດສັນພື້ນທີ່ ແລະ ການແບ່ງປັນສິ່ງຂອງໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງມີປະສິດທິພາບ!",
    },
  };
