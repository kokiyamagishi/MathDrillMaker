import React from "react";
import { UnitData } from "../units2";

export const unit7Data: UnitData = {
  unitNumber: 7,
  unitTitle: "ພາກທີ I - ບົດທີ 7: ເປີເຊັນ ແລະ ດອກເບ້ຍ (Percentages and Interest)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບການນຳໃຊ້ສ່ວນຮ້ອຍ ຫຼື ເປີເຊັນ (%), ສູດຄິດໄລ່ດອກເບ້ຍດ່ຽວ (Simple Interest) ແລະ ດອກເບ້ຍທົບຕົ້ນ (Compound Interest) ແລະ ການຄິດໄລ່ການຊື້ຜ່ອນ ຫຼື ດາວເຄື່ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 32-38",
  subSections: [
    {
      title: "1. ສ່ວນຮ້ອຍ ແລະ ດອກເບ້ຍດ່ຽວ (Percentages & Simple Interest)",
      keyPoint: {
        title: "ດອກເບ້ຍດ່ຽວ (Simple Interest)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ດອກເບ້ຍດ່ຽວ ແມ່ນດອກເບ້ຍທີ່ຄິດໄລ່ຈາກຕົ້ນທຶນເດີມສະເໝີ ໂດຍບໍ່ເອົາດອກເບ້ຍມາສະສົມເຂົ້າເປັນຕົ້ນທຶນໃໝ່. ສູດຄິດໄລ່:"}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1565C0", display: "block", textAlign: "center", margin: "12px 0" , whiteSpace: "nowrap"}}>
                {"I = (P × R × T) / 100"}
              </span>
              {"ເຊິ່ງ P ແມ່ນ ຕົ້ນທຶນ (Principal), R ແມ່ນ ອັດຕາການຂະຫຍາຍຕົວ/ອັດຕາດອກເບ້ຍ (Rate %), T ແມ່ນ ເວລາເປັນປີ (Time)."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຝາກປະຢັດ 32.5 ລ້ານກີບ ໃນອັດຕາດອກເບ້ຍ 15% ຕໍ່ປີ ເປັນເວລາ 4 ປີ ຈະໄດ້ດອກເບ້ຍ:"}
                <br />
                <strong>{"I = (32.5 × 15 × 4) / 100 = 19.5 ລ້ານກີບ."}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວລາ T ຕ້ອງຄິດໄລ່ເປັນຫົວໜ່ວຍ 'ປີ' ສະເໝີ. ຖ້າໂຈດໃຫ້ເປັນເດືອນ ຕ້ອງເອົາມາຫານໃຫ້ 12 ກ່ອນ ເຊັ່ນ: 6 ເດືອນ = 6/12 = 0.5 ປີ!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຄິດໄລ່ຫາດອກເບ້ຍດ່ຽວ (ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ):"}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(1) ຝາກເງິນ 10 ລ້ານກີບ ອັດຕາດອກເບ້ຍ 8% ຕໍ່ປີ ພາຍໃນ 3 ປີ ⇒ ດອກເບ້ຍ I ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                  <span>{"(2) ກູ້ຢືມເງິນ 5 ລ້ານກີບ ອັດຕາດອກເບ້ຍ 10% ຕໍ່ປີ ພາຍໃນ 6 ເດືອນ (0.5 ປີ) ⇒ ດອກເບ້ຍ I ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຊອກຫາອັດຕາດອກເບ້ຍດ່ຽວ R ຕໍ່ປີ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຝາກເງິນ 50 ລ້ານກີບ (P = 50) ເປັນເວລາ 3 ປີ (T = 3) ໄດ້ຮັບດອກເບ້ຍທັງໝົດ 15 ລ້ານກີບ (I = 15)."}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ສູດ: R = (I × 100) / (P × T) = (15 × 100) / (50 × 3) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"% ຕໍ່ປີ"}</span>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ດອກເບ້ຍທົບຕົ້ນ ແລະ ການຊື້ຜ່ອນ (Compound Interest & Installments)",
      keyPoint: {
        title: "ດອກເບ້ຍທົບຕົ້ນ (Compound Interest)",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"- ດອກເບ້ຍທົບຕົ້ນ ແມ່ນການເອົາດອກເບ້ຍທີ່ໄດ້ຮັບໃນແຕ່ລະງວດ ມາສະສົມເຂົ້າເປັນຕົ້ນທຶນຂອງງວດຖັດໄປ. ສູດຄິດໄລ່ເງິນລວມ A ພາຍໃນ n ປີ:"}
              <br />
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#D84315", display: "block", textAlign: "center", margin: "12px 0" , whiteSpace: "nowrap"}}>
                {"A = P × (1 + r)^n"}
              </span>
              {"ເຊິ່ງ P ແມ່ນ ຕົ້ນທຶນເລີ່ມຕົ້ນ, r ແມ່ນ ອັດຕາດອກເບ້ຍທົບຕົ້ນ (ຂຽນເປັນເລກທົດສະນິຍົມ ເຊັ່ນ 4% = 0.04), n ແມ່ນ ຈຳນວນປີ."}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#E65100" , whiteSpace: "nowrap"}}>{"ຕົວຢ່າງ:"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ຝາກເງິນທົບຕົ້ນ 50 ລ້ານກີບ ໃນອັດຕາ 4% (0.04) ຕໍ່ປີ ເປັນເວລາ 3 ປີ ຈະໄດ້ເງິນທັງໝົດ:"}
                <br />
                <strong>{"A = 50 × (1.04)³ = 50 × 1.124864 = 56.2432 ລ້ານກີບ."}</strong>
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ສໍາລັບການຊື້ຜ່ອນ (Installment), ເຮົາຄິດໄລ່ໂດຍການຫັກເງິນຈ່າຍສົດເລີ່ມຕົ້ນ (Downpayment) ອອກກ່ອນ, ແລ້ວຈຶ່ງເອົາສ່ວນທີ່ເຫຼືອມາຫານໃຫ້ຈຳນວນງວດ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 3,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດດອກເບ້ຍທົບຕົ້ນ (Compound Interest): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຝາກເງິນທົບຕົ້ນ 10 ລ້ານກີບ ໃນອັດຕາ 2% (0.02) ຕໍ່ປີ ເປັນເວລາ 2 ປີ. ຈະໄດ້ຮັບເງິນລວມໃນບັນຊີທັງໝົດຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.375rem", flexWrap: "nowrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ: A = 10,000,000 × (1.02)² ="}</span>
                <span className="answer-blank answer-blank--large" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໂຈດການຊື້ຜ່ອນເຄື່ອງ (Downpayment & Installment): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <p style={{ fontSize: "1.375rem", margin: 0 }}>
                {"ຊື້ຄອມພິວເຕີໂນດບຸກລາຄາ 3 ລ້ານກີບ ໂດຍຈ່າຍສົດເລີ່ມຕົ້ນ 30% ຂອງລາຄາ, ສ່ວນທີ່ເຫຼືອແມ່ນແບ່ງຈ່າຍເປັນງວດພາຍໃນ 6 ເດືອນ (ບໍ່ຄິດໄລ່ດອກເບ້ຍ). ຖາມວ່າຕ້ອງຈ່າຍງວດລະຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"- ເງິນຈ່າຍສົດເລີ່ມຕົ້ນ (30%) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{"- ເງິນທີ່ຕ້ອງຈ່າຍໃນແຕ່ລະງວດ (6 ເດືອນ) ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                  <span>{"ກີບ / ເດືອນ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດການຄິດໄລ່ດອກເບ້ຍທົບຕົ້ນຂັ້ນສູງ (Advanced Compound): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຝາກເງິນທົບຕົ້ນ 4 ລ້ານກີບ (P = 4,000,000) ເປັນເວລາ 2 ປີ (n = 2) ໄດ້ຮັບເງິນລວມທັງໝົດໃນບັນຊີແມ່ນ 4.8672 ລ້ານກີບ (A = 4,867,200). ຈົ່ງຊອກຫາອັດຕາດອກເບ້ຍທົບຕົ້ນ r ຕໍ່ປີ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem" }}>
              <span>{"ອັດຕາດອກເບ້ຍ r ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{"% ຕໍ່ປີ"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດກູ້ຢືມຊື້ລົດຈັກພ້ອມດອກເບ້ຍ (Installment with Interest): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຢືມເງິນ 10 ລ້ານກີບ ເພື່ອໄປຊື້ລົດຈັກ ໂດຍມີອັດຕາດອກເບ້ຍດ່ຽວແມ່ນ 5% ຕໍ່ປີ, ຕ້ອງຈ່າຍຄືນທັງໝົດ (ທັງຕົ້ນທຶນ ແລະ ດອກເບ້ຍ) ພາຍໃນ 2 ປີ. ຖ້າແບ່ງຈ່າຍເປັນ 24 ງວດ (ເດືອນລະງວດ), ຕ້ອງຈ່າຍງວດລະຈັກກີບ?"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.375rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເງິນລວມທັງໝົດທີ່ຕ້ອງຈ່າຍຄືນ (A) ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{"- ເງິນທີ່ຕ້ອງຈ່າຍແຕ່ລະງວດ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                <span>{"ກີບ/ງວດ"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: ""
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ສ່ວນຮ້ອຍ ແລະ ອັດຕາສ່ວນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ໃນໂຮງຮຽນແຫ່ງໜຶ່ງມີນັກຮຽນຍິງ 500 ຄົນ ຈາກນັກຮຽນທັງໝົດ 800 ຄົນ. ຄິດເປັນຈັກສ່ວນຮ້ອຍ (%) ຂອງນັກຮຽນທັງໝົດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ນັກຮຽນຍິງຄິດເປັນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"%"}</span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ດອກເບ້ຍດ່ຽວໄລຍະສັ້ນ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຝາກເງິນ 2 ລ້ານກີບ ໃນອັດຕາດອກເບ້ຍດ່ຽວ 9% ຕໍ່ປີ ພາຍໃນ 6 ເດືອນ ຈະໄດ້ຮັບດອກເບ້ຍຈັກກີບ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ໄດ້ຮັບດອກເບ້ຍ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
            <span>{"ກີບ."}</span>
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
          <span key="1-1">{"(1) 2,400,000 ກີບ (ຄິດໄລ່: 10,000,000 × 8 × 3 / 100)"}</span>,
          <span key="1-2">{"(2) 250,000 ກີບ (ຄິດໄລ່: 5,000,000 × 10 × 0.5 / 100)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="2-1">{"10 (ຄິດໄລ່: R = 15 × 100 / (50 × 3) = 1500 / 150 = 10%)"}</span>
        ]
      },
      {
        questionNumber: 3,
        answers: [
          <span key="3">{"10,404,000 (ຄິດໄລ່: A = 10,000,000 × 1.02 × 1.02)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="4-1">{"- ເງິນສົດເລີ່ມຕົ້ນ = 900,000 ກີບ (3,000,000 × 0.30)"}</span>,
          <span key="4-2">{"- ເງິນງວດ = 350,000 ກີບ (ຄິດໄລ່: (3,000,000 - 900,000) / 6)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"10 (ຄິດໄລ່: (1+r)² = 4.8672 / 4.0 = 1.2168 ⇒ 1+r = 1.103 ⇒ r ≈ 10%)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="c2-1">{"- ເງິນລວມ A = 11,000,000 ກີບ (ດອກເບ້ຍ I = 10,000,000 × 0.05 × 2 = 1,000,000)"}</span>,
          <span key="c2-2">{"- ງວດລະ = 458,333 ກີບ (ຄິດໄລ່: 11,000,000 / 24)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"62.5 (ຄິດໄລ່: (500 / 800) × 100 = 62.5%)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="s2">{"90,000 (ຄິດໄລ່: I = 2,000,000 × 9 × 0.5 / 100 = 90,000 ກີບ)"}</span>
        ]
      }
    ],
    advice: "ສຸດຍອດຫຼາຍ! ເຈົ້າໄດ້ຜ່ານການຮຽນຮູ້ກ່ຽວກັບເປີເຊັນ, ດອກເບ້ຍ ແລະ ການຊື້ຜ່ອນຢ່າງລະອຽດແລ້ວ. ນີ້ແມ່ນຄວາມຮູ້ທີ່ມີປະໂຫຍດສູງສຸດທາງດ້ານການເງິນໃນຊີວິດປະຈຳວັນ!"
  }
};
