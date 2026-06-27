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

export const unit6Data: UnitData = {
    
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
  };
