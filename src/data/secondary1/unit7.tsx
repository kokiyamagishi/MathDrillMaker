import React from "react";
import { UnitData } from "../units2";

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ແລະ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM), ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD), ຈຳນວນມູນທີ່ໜ້ອຍກວ່າ 100, ແລະ ການຂຽນຈຳນວນທຳມະຊາດເປັນຜົນຄູນຂອງຈຳນວນມູນ (ການແຍກຕົວປະກອບມູນ).",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.1 ໜ້າ 46-51",
  subSections: [
    {
      title: "1. ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM)",
      keyPoint: {
        title: "ທະວີຄູນ ແລະ ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM / ທ.ຮ.ນ)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• "}<strong>{"ທະວີຄູນ (Multiples)"}</strong>{" ຂອງຈຳນວນໃດໜຶ່ງແມ່ນຜົນຄູນຂອງຈຳນວນນັ້ນກັບ 1, 2, 3, 4, ..."}
              <br />
              {"• "}<strong>{"ທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM)"}</strong>{" ຂອງສອງ ຫຼື ຫຼາຍຈຳນວນ ແມ່ນຈຳນວນທຳມະຊາດທີ່ໜ້ອຍສຸດ (ຕ່າງຈາກ 0) ທີ່ຫານຂາດໃຫ້ທຸກໆຈຳນວນເຫຼົ່ານັ້ນ."}
            </p>

            {/* Visual Comparison Diagram */}
            <div style={{ padding: "20px", backgroundColor: "#E8F5E9", borderRadius: "12px", border: "1px solid #81C784" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#2E7D32", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຊອກຫາ LCM(3, 4):"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1B5E20" }}>{"ທະວີຄູນຂອງ 3: "}</span>
                  <span style={{ fontSize: "1.25rem" }}>
                    {"3, 6, 9, "}
                    <strong style={{ color: "#D84315", backgroundColor: "#FFCCBC", padding: "2px 6px", borderRadius: "4px" }}>{"12"}</strong>
                    {", 15, 18, 21, "}
                    <strong style={{ color: "#D84315", textDecoration: "underline" }}>{"24"}</strong>
                    {", 27, 30, 33, "}
                    <strong style={{ color: "#D84315", textDecoration: "underline" }}>{"36"}</strong>
                    {", ..."}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1B5E20" }}>{"ທະວີຄູນຂອງ 4: "}</span>
                  <span style={{ fontSize: "1.25rem" }}>
                    {"4, 8, "}
                    <strong style={{ color: "#D84315", backgroundColor: "#FFCCBC", padding: "2px 6px", borderRadius: "4px" }}>{"12"}</strong>
                    {", 16, 20, "}
                    <strong style={{ color: "#D84315", textDecoration: "underline" }}>{"24"}</strong>
                    {", 28, 32, "}
                    <strong style={{ color: "#D84315", textDecoration: "underline" }}>{"36"}</strong>
                    {", 40, ..."}
                  </span>
                </div>
                <div style={{ borderTop: "1px dashed #A5D6A7", paddingTop: "8px", marginTop: "4px" }}>
                  <p style={{ fontSize: "1.25rem", margin: 0, lineHeight: "1.5" }}>
                    {"• ທະວີຄູນຮ່ວມຂອງ 3 ແລະ 4 ແມ່ນ: {12, 24, 36, ...}"}
                    <br />
                    {"• ທະວີຄູນຮ່ວມທີ່ໜ້ອຍສຸດ (LCM) ຕ່າງ 0 ແມ່ນ "}
                    <strong style={{ color: "#D84315", fontSize: "1.35rem" }}>{"12"}</strong>
                    {". ດັ່ງນັ້ນ, LCM(3, 4) = 12."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ວິທີຊອກ LCM ທີ່ໄວ: ເລີ່ມຈາກທະວີຄູນຂອງຈຳນວນທີ່ໃຫຍ່ກວ່າ ແລ້ວກວດເບິ່ງວ່າຈຳນວນນັ້ນຫານຂາດໃຫ້ຈຳນວນທີ່ເຫຼືອບໍ່!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາທະວີຄູນຮ່ວມໜ້ອຍສຸດ (LCM) ຂອງຄູ່ຈຳນວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"LCM(6, 8) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                
                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"LCM(5, 15) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD)",
      keyPoint: {
        title: "ອຸປະຄູນ ແລະ ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD / ອ.ຮ.ຫ)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• "}<strong>{"ອຸປະຄູນ (Divisors)"}</strong>{" ຂອງຈຳນວນທຳມະຊາດໃດໜຶ່ງ ແມ່ນບັນດາຈຳນວນທຳມະຊາດທີ່ຫານຂາດໃຫ້ຈຳນວນນັ້ນ."}
              <br />
              {"• "}<strong>{"ອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD)"}</strong>{" ຂອງສອງ ຫຼື ຫຼາຍຈຳນວນ ແມ່ນຈຳນວນທຳມະຊາດທີ່ໃຫຍ່ສຸດ ທີ່ຫານຂາດໃຫ້ທຸກໆຈຳນວນເຫຼົ່ານັ້ນ."}
            </p>

            {/* Divisors lists for 24, 36, 48 */}
            <div style={{ padding: "20px", backgroundColor: "#E0F7FA", borderRadius: "12px", border: "1px solid #4DD0E1" }}>
              <h4 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", color: "#006064", fontWeight: "bold" }}>
                {"📊 ຕົວຢ່າງການຊອກຫາ GCD(24, 36, 48):"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.25rem" }}>
                <div>
                  {"• ອຸປະຄູນຂອງ 24: {1, 2, 3, 4, 6, 8, "}
                  <strong style={{ color: "#E65100", backgroundColor: "#FFE0B2", padding: "2px 6px", borderRadius: "4px" }}>{"12"}</strong>
                  {", 24}"}
                </div>
                <div>
                  {"• ອຸປະຄູນຂອງ 36: {1, 2, 3, 4, 6, 9, "}
                  <strong style={{ color: "#E65100", backgroundColor: "#FFE0B2", padding: "2px 6px", borderRadius: "4px" }}>{"12"}</strong>
                  {", 18, 36}"}
                </div>
                <div>
                  {"• ອຸປະຄູນຂອງ 48: {1, 2, 3, 4, 6, 8, "}
                  <strong style={{ color: "#E65100", backgroundColor: "#FFE0B2", padding: "2px 6px", borderRadius: "4px" }}>{"12"}</strong>
                  {", 16, 24, 48}"}
                </div>
                <div style={{ borderTop: "1px dashed #80DEEA", paddingTop: "8px", marginTop: "4px" }}>
                  <p style={{ margin: 0, lineHeight: "1.5" }}>
                    {"• ອຸປະຄູນຮ່ວມຂອງ 24, 36, 48 ແມ່ນ: {1, 2, 3, 4, 6, 12}"}
                    <br />
                    {"• ອຸປະຄູນຮ່ວມທີ່ໃຫຍ່ສຸດ (GCD) ແມ່ນ "}
                    <strong style={{ color: "#E65100", fontSize: "1.35rem" }}>{"12"}</strong>
                    {". ດັ່ງນັ້ນ, GCD(24, 36, 48) = 12."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ການຊອກ GCD ຊ່ວຍເຮົາໃນການຮຸບເລກສ່ວນໃຫ້ເປັນເລກສ່ວນຂາດຕົວທີ່ງ່າຍທີ່ສຸດ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຊອກຫາອຸປະຄູນຮ່ວມຫຼາຍສຸດ (GCD) ຂອງຄູ່ຈຳນວນລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"GCD(18, 30) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"GCD(16, 40) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "3. ຈຳນວນມູນ ແລະ ການແຍກຕົວປະກອບມູນ",
      keyPoint: {
        title: "ຈຳນວນມູນ (Prime Numbers) ແລະ ການຂຽນເປັນຜົນຄູນຂອງຈຳນວນມູນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• "}<strong>{"ຈຳນວນມູນ (Prime Numbers)"}</strong>{" ແມ່ນຈຳນວນທຳມະຊາດທີ່ໃຫຍ່ກວ່າ 1 ເຊິ່ງມີພຽງແຕ່ສອງອຸປະຄູນເທົ່ານັ້ນ ຄື: 1 ແລະ ຕົວມັນເອງ."}
              <br />
              {"• ຈຳນວນມູນທີ່ໜ້ອຍກວ່າ 100 ມີທັງໝົດ 25 ຈຳນວນຄື:"}
            </p>

            {/* List of Primes grid */}
            <div style={{ padding: "16px", backgroundColor: "#F3E5F5", borderRadius: "12px", border: "1px solid #BA68C8" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].map((p) => (
                  <span key={p} style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#4A148C",
                    backgroundColor: "#E1BEE7",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"• "}<strong>{"ການແຍກຕົວປະກອບມູນ (Prime Factorization)"}</strong>{" ແມ່ນການຂຽນຈຳນວນໃດໜຶ່ງໃນຮູບແບບຜົນຄູນຂອງບັນດາຈຳນວນມູນ. ເຊັ່ນ:"}
              <br />
              <strong style={{ fontSize: "1.45rem", color: "#7B1FA2", display: "block", textAlign: "center", margin: "8px 0" }}>
                {"36 = 2² × 3²"}
              </strong>
            </p>
          </div>
        ),
        hint: {
          text: "💡 ເລກ 2 ແມ່ນຈຳນວນມູນດຽວທີ່ເປັນເລກຄູ່! ເລກ 1 ບໍ່ແມ່ນຈຳນວນມູນ ເພາະມັນມີອຸປະຄູນພຽງຕົວດຽວ.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຂຽນຈຳນວນຕໍ່ໄປນີ້ເປັນຜົນຄູນຂອງຈຳນວນມູນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "12px 0" }}>
                {/* Sub-question 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span className="math">{"45 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                  <span style={{ fontSize: "1.1rem", color: "#7F8C8D" }}>{"(ຕົວຢ່າງການຕອບ: 3^2 * 5)"}</span>
                </div>

                {/* Sub-question 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span className="math">{"72 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "160px", height: "42px" }}></span>
                  <span style={{ fontSize: "1.1rem", color: "#7F8C8D" }}>{"(ຕົວຢ່າງການຕອບ: 2^3 * 3^2)"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ນຳໃຊ້ການແຍກຕົວປະກອບມູນເພື່ອຊອກຫາ LCM ແລະ GCD, ແລະ ແກ້ໄຂໂຈດບັນຫາຕົວຈິງ!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການຊອກຫາ LCM ແລະ GCD ໂດຍການແຍກຕົວປະກອບມູນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ຈົ່ງຊອກຫາ "}<strong>{"LCM(12, 18)"}</strong>{" ແລະ "}<strong>{"GCD(12, 18)"}</strong>{"."}
            </p>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"LCM(12, 18) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"GCD(12, 18) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາລະດັງສຽງລະຄັງຮ່ວມກັນ (LCM Application): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(1) ມີລະຄັງ 3 ໜ່ວຍ ທີ່ມີກຳນົດເວລາການດັງແຕກຕ່າງກັນ. ລະຄັງໜ່ວຍທີໜຶ່ງດັງທຸກໆ 4 ນາທີ, ໜ່ວຍທີສອງດັງທຸກໆ 6 ນາທີ, ແລະ ໜ່ວຍທີສາມດັງທຸກໆ 10 ນາທີ. ຖ້າລະຄັງທັງສາມໜ່ວຍດັງພ້ອມກັນໃນເວລານີ້, ຖາມວ່າອີກຈັກນາທີຕໍ່ມາພວກມັນຈຶ່ງຈະດັງພ້ອມກັນອີກຄັ້ງ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ອີກ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
              <span>{"ນາທີ ພວກມັນຈະດັງພ້ອມກັນອີກ."}</span>
            </div>
          </div>
        )
      }
    ]
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຊອກຫາ LCM ຂອງສອງຈຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ "}<strong>{"LCM(15, 20)"}</strong>{"."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"LCM(15, 20) ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການຊອກຫາ GCD ຂອງສອງຈຳນວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(1) ຈົ່ງຊອກຫາຄ່າຂອງ "}<strong>{"GCD(28, 42)"}</strong>{"."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"GCD(28, 42) ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "42px" }}></span>
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
          <span key="1-1">{"(1) 24 (ທະວີຄູນຂອງ 6: 6, 12, 18, 24, 30...; ທະວີຄູນຂອງ 8: 8, 16, 24, 32...; LCM ແມ່ນ 24)"}</span>,
          <span key="1-2">{"(2) 15 (ເພາະວ່າ 15 ຫານຂາດໃຫ້ 5, ດັ່ງນັ້ນ LCM ແມ່ນ 15)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"(1) 6 (ອຸປະຄູນຮ່ວມຂອງ 18 ແລະ 30 ແມ່ນ {1, 2, 3, 6}; GCD ແມ່ນ 6)"}</span>,
          <span key="2-2">{"(2) 8 (ອຸປະຄູນຮ່ວມຂອງ 16 ແລະ 40 ແມ່ນ {1, 2, 4, 8}; GCD ແມ່ນ 8)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3-1">{"(1) 3² × 5 ຫຼື 3^2 * 5 (ເພາະວ່າ 45 = 9 × 5 = 3 × 3 × 5)"}</span>,
          <span key="3-2">{"(2) 2³ × 3² ຫຼື 2^3 * 3^2 (ເພາະວ່າ 72 = 8 × 9 = 2 × 2 × 2 × 3 × 3)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="t1">{"LCM(12, 18) = 36 ແລະ GCD(12, 18) = 6 (ແຍກຕົວປະກອບ: 12 = 2² × 3, 18 = 2 × 3²; LCM = 2² × 3² = 36; GCD = 2 × 3 = 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="t2">{"60 ນາທີ (ເພາະວ່າ LCM(4, 6, 10) = 60. 4 = 2², 6 = 2 × 3, 10 = 2 × 5; ດັ່ງນັ້ນ LCM = 2² × 3 × 5 = 60)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"60 (ເພາະວ່າ 15 = 3 × 5, 20 = 2² × 5; ດັ່ງນັ້ນ LCM = 2² × 3 × 5 = 60)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"14 (ເພາະວ່າ 28 = 2² × 7, 42 = 2 × 3 × 7; ດັ່ງນັ້ນ GCD = 2 × 7 = 14)"}</span>
        ]
      }
    ],
    advice: "ດີຫຼາຍ! ການເຂົ້າໃຈ LCM, GCD ແລະ ຈຳນວນມູນ ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນຄະນິດສາດ. ມັນຈະຊ່ວຍໃຫ້ເຈົ້າຄຳນວນເລກສ່ວນ ແລະ ແກ້ໄຂສົມຜົນຕ່າງໆໄດ້ງ່າຍຂຶ້ນຢ່າງຫຼວງຫຼາຍ!"
  }
};
