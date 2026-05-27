import React from "react";
import { UnitData } from "../units2";

export const unit17Data: UnitData = {
  unitNumber: 17,
  unitTitle: "ສະຫຼຸບບົດຮຽນປະຖົມສຶກສາ ປີທີ 5",
  unitGoal:
    "ທົບທວນຄືນບົດຮຽນທັງໝົດທີ່ໄດ້ຮຽນມາໃນຊັ້ນ ປ.5 ເພື່ອກຽມຄວາມພ້ອມໃນການສອບເສັງຈົບຊັ້ນ",
  textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 190-200",
  keyPoints: {
    hint: {
      text: "ນີ້ແມ່ນບົດທົດສອບລວມຂອງທຸກໆບົດຮຽນເດີ້! ພະຍາຍາມແກ້ໄຂດ້ວຍຕົນເອງເພື່ອວັດແທກລະດັບຄວາມເຂົ້າໃຈຂອງຕົນເອງ!",
    },
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
          {"1. ສິ່ງທີ່ໄດ້ຮຽນມາທັງໝົດໃນ ປ.5 (P5 Summary)"}
        </h3>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#FFE082",
            border: "2px solid #FFB300",
            borderRadius: "8px",
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          <div>{"• ການຄູນ, การຫານເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ."}</div>
          <div>{"• ບໍລິມາດຂອງຮູບກ່ອງສາກ ແລະ ເນື້ອທີ່ຮູບຫຼາຍແຈ."}</div>
          <div>{"• ອັດຕາສ່ວນພົວພັນ ແລະ ສ່ວນຮ້ອຍ."}</div>
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
            {"ຈົ່ງຄິດໄລ່ເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນລຸ່ມນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) 1.2 × 2.5"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) 2/3 × 5"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາເລຂາຄະນິດລຸ່ມນີ້: "}{" "}
            <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
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
              <span>{"(1) ຮູບສາມແຈທີ່ມີພື້ນ 6 cm ແລະ ລວງສູງ 4 cm. ເນື້ອທີ່ຂອງຮູບສາມແຈນີ້ແມ່ນຈັກ cm²?"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>{"(2) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງຈະຍາວຈັກ cm? (ກຳນົດ Pi = 3.14)"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "16px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  challengeProblems: {
    hintText:
      "⚖️ ໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາປະລິມານ! ສ່ວນຮູບກ່ອງສາກ ບໍລິມາດແມ່ນ ພື້ນ × ລວງສູງ (ລວງກວ້າງ × ລວງຍາວ × ລວງສູງ) ເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນຂອງເຂົ້າໜົມຫວານ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 🥛 ຕ້ອງການເຮັດເຂົ້າໜົມຫວານ ໂດຍໃຊ້ນ້ຳຕານ ແລະ ແປ້ງ ໃນອັດຕາສ່ວນ 3 : 5. ຖ້າໃຊ້ແປ້ງ 250 g, ຈະຕ້ອງໃຊ້ນ້ຳຕານຈັກ g?"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
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
                <span>{"g"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດຂອງນ້ຳໃນຖັງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
                padding: "8px 16px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"(1) 📦 ຖັງນ້ຳຮູບກ່ອງສາກໃບໜຶ່ງ ມີລວງກວ້າງ 1.2 m, ลວງຍາວ 1.5 m ແລະ ລວງສູງ 1 m. ບໍລິມາດຂອງຖັງນ້ຳໃບນີ້ຈະແມ່ນຈັກ m³?"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  paddingLeft: "16px",
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
                <span>{"m³"}</span>
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
            {"ຈົ່ງແກ້ໂຈດບັນຫາການຫຼຸດລາຄາສິນຄ້າ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 🚴 ສິນຄ້າຊະນິດໜຶ່ງລາຄາ 5,000 ກີບ. ຖ້າຫຼຸດລາຄາໃຫ້ 15%, ລາຄາສຸດທ້າຍຂອງສິນຄ້ານີ້ແມ່ນຈັກກີບ?"}
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
                marginTop: "8px",
              }}
            >
              <span>{"ຄຳຕອບ:"}</span>
              <span
                className="answer-blank"
                style={{
                  display: "inline-block",
                  width: "150px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            {"ຈົ່ງແກ້ໂຈດບັນຫາໄລຍະທາງຂອງລົດແລ່ນ: "}{" "}
            <span className="point-label">{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "20px",
              padding: "8px 16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.5" }}>
              {"(1) 🚗 ລົດຄັນໜຶ່ງແລ່ນດ້ວຍຄວາມໄວສະເລ່ຍ 60 km/h. ໃນເວລາ 2.5 ຊົ່ວໂມງ ລົດຄັນນີ້ຈະແລ່ນໄດ້ໄລຍະທາງທັງໝົດຈັກ km?"}
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingLeft: "16px",
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
              <span>{"km"}</span>
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
          <span key="u17-ans-1-1">{"(1) 3"}</span>,
          <span key="u17-ans-1-2">{"(2) 10/3 (ຫຼື 3 1/3)"}</span>,
        ],
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u17-ans-2-1">{"(1) 12 cm² (ຍ້ອນ 6 × 4 ÷ 2 = 12)"}</span>,
          <span key="u17-ans-2-2">{"(2) 62.8 cm (ຍ້ອນ 20 × 3.14 = 62.8)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="u17-ans-t1-1">{"(1) 150 g (ຍ້ອນ 250 ÷ 5 = 50, ດັ່ງນັ້ນ 3 × 50 = 150 g)"}</span>,
        ],
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="u17-ans-t2-1">{"(1) 1.8 m³ (ຍ້ອນ 1.2 × 1.5 × 1 = 1.8 m³)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="u17-ans-s1-1">{"(1) 4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ຕ້ອງຈ່າຍ 5,000 - 750 = 4,250 ກີບ)"}</span>,
        ],
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="u17-ans-s2-1">{"(1) 150 km (ຍ້ອນ 60 × 2.5 = 150 km)"}</span>,
        ],
      },
    ],
    advice:
      "ຊົມເຊີຍທຸກຄົນທີ່ຮຽນຈົບບົດຮຽນ ປ.5 ຢ່າງສົມບູນ! ຄວາມຮູ້ທັງໝົດນີ້ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນຕໍ່ຊັ້ນມັດທະຍົມ ແລະ ການນຳໃຊ້ໃນຊີວິດ.",
  },
};
