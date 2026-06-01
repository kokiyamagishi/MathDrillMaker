# -*- coding: utf-8 -*-
import os

def generate_sec2():
    titles = {
        15: "ພາກທີ III - ບົດທີ 15: ເລກກຳລັງ",
        16: "ພາກທີ III - ບົດທີ 16: ເລກກຳລັງ (ຕໍ່)",
        17: "ພາກທີ III - ບົດທີ 17: ສຳນວນ",
        18: "ພາກທີ III - ບົດທີ 18: ການຄຳນວນກ່ຽວກັບສຳນວນ",
        19: "ພາກທີ III - ບົດທີ 19: ການແຍກສ່ວນຄູນໃນສຳນວນ",
        20: "ພາກທີ IV - ບົດທີ 20: ສະເໝີຜົນ",
        21: "ພາກທີ IV - ບົດທີ 21: ສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
        22: "ພາກທີ IV - ບົດທີ 22: ການແກ້ໂຈດກ່ຽວກັບສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
        23: "ພາກທີ IV - ບົດທີ 23: ອະສະເໝີຜົນ",
        24: "ພາກທີ IV - ບົດທີ 24: ອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
        25: "ພາກທີ IV - ບົດທີ 25: ການແກ້ໂຈດກ່ຽວກັບອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
        26: "ພາກທີ IV - ບົດທີ 26: ສົມຜົນທີ່ມີຄ່າສຳບູນ",
        27: "ພາກທີ IV - ບົດທີ 27: ອະສົມຜົນທີ່ມີຄ່າສຳບູນ",
        28: "ພາກທີ V - ບົດທີ 28: ຮູບສີ່ແຈຂະໜານ",
        29: "ພາກທີ V - ບົດທີ 29: ຮູບສີ່ແຈສາກ",
        30: "ພາກທີ V - ບົດທີ 30: ຮູບດອກຈັນ ແລະ ຮູບຈະຕຸລັດ",
        31: "ພາກທີ V - ບົດທີ 31: ຮູບຄາງໝູ",
        32: "ພາກທີ V - ບົດທີ 32: ຮູບສາມແຈ",
        33: "ພາກທີ V - ບົດທີ 33: ເສັ້ນທີ່ສຳຄັນໃນຮູບສາມແຈ",
        34: "ພາກທີ V - ບົດທີ 34: ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ",
        35: "ພາກທີ V - ບົດທີ 35: ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂະໜານ, ຮູບສາມແຈ ແລະ ຮູບຄາງໝູ",
        36: "ພາກທີ V - ບົດທີ 36: ມຸມໃນ ແລະ ມຸມນອກຂອງຮູບສາມແຈ",
        37: "ພາກທີ V - ບົດທີ 37: ມຸມໃນຂອງຮູບສີ່ແຈສວດ",
        38: "ພາກທີ V - ບົດທີ 38: ວົງມົນ ແລະ ແຜ່ນມົນ",
        39: "ພາກທີ VI - ບົດທີ 39: ໜ້າພຽງຕົວປະສານ",
        40: "ພາກທີ VI - ບົດທີ 40: ການເປັນອັດຕາສ່ວນພົວພັນກົງ",
        41: "ພາກທີ VI - ບົດທີ 41: ອັດຕາສ່ວນພົວພັນປີ້ນ",
        42: "ພາກທີ VI - ບົດທີ 42: ເລກສ່ວນຮ້ອຍ",
        43: "ພາກທີ VI - ບົດທີ 43: ມາດຕາສ່ວນ",
        44: "ພາກທີ VII - ບົດທີ 44: ການສາຍຕາມລວງທີ່ໃຫ້ມາ",
        45: "ພາກທີ VII - ບົດທີ 45: ເສັ້ນຊື່ຜ່ານເມັດເຄິ່ງກາງຂອງສອງຂ້າງຂອງຮູບສາມແຈ",
        46: "ພາກທີ VII - ບົດທີ 46: ຫຼັກເກັນຕາແລັດ",
        47: "ພາກທີ VII - ບົດທີ 47: ຮູບສາມແຈຄ້າຍຄືກັນ",
        48: "ພາກທີ VII - ບົດທີ 48: ກໍລະນີຄ້າຍຄືຂອງຮູບສາມແຈ",
        49: "ພາກທີ VIII - ບົດທີ 49: ການເກັບກຳຂໍ້ມູນ ແລະ ການສະເໜີຂໍ້ມູນດ້ວຍຕາຕະລາງ",
        50: "ພາກທີ VIII - ບົດທີ 50: ການສະເໜີຂໍ້ມູນດ້ວຍຮູບແຕ້ມ",
        51: "ພາກທີ VIII - ບົດທີ 51: ການສະເໜີຂໍ້ມູນດ້ວຍຮູບແຕ້ມ (ຕໍ່)"
    }

    goals = {
        15: "ຮຽນຮູ້ ແລະ ເຂົ້າໃຈຄວາມໝາຍຂອງເລກກຳລັງ, ພື້ນ, ຕົວຊີ້ກຳລັງ ແລະ ຄຸນລັກສະນະພື້ນຖານຂອງເລກກຳລັງ",
        16: "ຮຽນຮູ້ຄຸນລັກສະນະການຫານເລກກຳລັງ, ກຳລັງຊ້ອນກຳລັງ, ເລກກຳລັງສູນ ແລະ ກຳລັງລົບ",
        17: "ຮຽນຮູ້ກ່ຽວກັບສຳນວນພຶດຊະຄະນິດ, ຕົວປ່ຽນ ແລະ ການແທນຄ່າຕົວປ່ຽນໃນສຳນວນ",
        18: "ຮຽນຮູ້ການບວກ, ການລົບ, ການຄູນ ແລະ ການຫານສຳນວນພຶດຊະຄະນິດ",
        19: "ຮຽນຮູ້ການແຍກສຳນວນພຶດຊະຄະນິດອອກເປັນສ່ວນຄູນ ໂດຍໃຊ້ຫຼັກການດຶງຕົວຮ່ວມ",
        20: "ຮຽນຮູ້ກ່ຽວກັບຄຸນລັກສະນະຂອງສະເໝີຜົນ ແລະ ການປ່ຽນຮູບແບບສະເໝີຜົນ",
        21: "ຮຽນຮູ້ການແກ້ສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ ax + b = c ຢ່າງຖືກຕ້ອງ",
        22: "ຮຽນຮູ້ການຕັ້ງສົມຜົນ ແລະ ແກ້ໂຈດບັນຫາຕົວຈິງກ່ຽວກັບສົມຜົນຂັ້ນໜຶ່ງ",
        23: "ຮຽນຮູ້ກ່ຽວກັບຄວາມໝາຍ ແລະ ຄຸນລັກສະນະພື້ນຖານຂອງອະສະເໝີຜົນ",
        24: "ຮຽນຮູ້ການແກ້ສົມຜົນ ແລະ ອະສົມຜົນຂັ້ນໜຶ່ງທີ່ມີໜຶ່ງຕົວລັບ",
        25: "ຮຽນຮູ້ການຕັ້ງອະສົມຜົນ ແລະ ການແກ້ໂຈດບັນຫາຕົວຈິງດ້ວຍອະສົມຜົນ",
        26: "ຮຽນຮູ້ການແກ້ສົມຜົນທີ່ມີເຄື່ອງໝາຍຄ່າສຳບູນ |ax + b| = c",
        27: "ຮຽນຮູ້ການແກ້ອະສົມຜົນທີ່ມີເຄື່ອງໝາຍຄ່າສຳບູນ |ax + b| < c",
        28: "ຮຽນຮູ້ຄຸນລັກສະນະ ແລະ ສູດຄິດໄລ່ກ່ຽວກັບຮູບສີ່ແຈະໜານ",
        29: "ຮຽນຮູ້ຄຸນລັກສະນະ ແລະ ວິທີການກວດສອບຮູບສີ່ແຈສາກ",
        30: "ຮຽນຮູ້ຄຸນລັກສະນະຂອງຮູບດອກຈັນ ແລະ ຮູບຈະຕຸລັດ ແລະ ເສັ້ນເນັ່ງຈອມ",
        31: "ຮຽນຮູ້ຄຸນລັກສະນະ ແລະ ປະເພດຂອງຮູບຄາງໝູ (ຄາງໝູທ່ຽງ, ຄາງໝູສາກ)",
        32: "ຮຽນຮູ້ປະເພດຂອງຮູບສາມແຈ ແລະ ຄວາມສຳພັນລະຫວ່າງຂ້າງ ແລະ ມຸມ",
        33: "ຮຽນຮູ້ກ່ຽວກັບເສັ້ນກາງສາກ, ເສັ້ນແບ່ງເຄິ່ງມຸມ ແລະ ເສັ້ນຈອມໃນຮູບສາມແຈ",
        34: "ຮຽນຮູ້ສູດ ແລະ ຝຶກຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກ, ຮູບຈະຕຸລັດ ແລະ ຮູບດອກຈັນ",
        35: "ຮຽນຮູ້ສູດ ແລະ ຝຶກຄິດໄລ່ລວງຮອບ ແລະ ເນື້ອທີ່ຂອງຮູບສີ່ແຈະໜານ, ຮູບສາມແຈ ແລະ ຮູບຄາງໝູ",
        36: "ຮຽນຮູ້ຄຸນລັກສະນະມຸມໃນ ແລະ ມຸມນອກຂອງຮູບສາມແຈ ຜົນບວກມຸມໃນ = 180°",
        37: "ຮຽນຮູ້ຜົນບວກມຸມໃນຂອງຮູບສີ່ແຈສວດ ເທົ່າກັບ 360°",
        38: "ຮຽນຮູ້ກ່ຽວກັບເສັ້ນຜ່ານໃຈກາງ, ລັດສະໝີ, ລວງຮອບວົງມົນ (2πr) ແລະ ເນື້ອທີ່ແຜ່ນມົນ (πr²)",
        39: "ຮຽນຮູ້ກ່ຽວກັບແກນຕົວປະສານ Ox, Oy ແລະ ການກຳນົດເມັດເທິງໜ້າພຽງ",
        40: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນແບບອັດຕາສ່ວນພົວພັນກົງ ແລະ ຄ່າຄົງທີ່ k",
        41: "ຮຽນຮູ້ກ່ຽວກັບຄວາມສຳພັນແບບອັດຕາສ່ວນພົວພັນປີ້ນ ແລະ ການແກ້ໂຈດ",
        42: "ຮຽນຮູ້ການຄິດໄລ່ ແລະ ແກ້ໂຈດສ່ວນຮ້ອຍລະດັບສູງໃນຊີວິດປະຈຳວັນ",
        43: "ຮຽນຮູ້ການຄິດໄລ່ ແລະ ການນຳໃຊ້ມາດຕາສ່ວນໃນຮູບແຕ້ມ ແລະ ແຜນທີ່",
        44: "ຮຽນຮູ້ການສາຍເມັດ ແລະ ທ່ອນຊື່ໃສ່ເສັ້ນຊື່ຕາມທິດທາງທີ່ກຳນົດ",
        45: "ຮຽນຮູ້ເສັ້ນຊື່ຜ່ານເມັດເຄິ່ງກາງສອງຂ້າງ ຈະຂະໜານກັບຂ້າງທີສາມ ແລະ ຍາວເທົ່າເຄິ່ງໜຶ່ງ",
        46: "ຮຽນຮູ້ການນຳໃຊ້ຫຼັກເກັນຕາແລັດ ເພື່ອຄິດໄລ່ຄວາມຍາວທ່ອນຊື່ທີ່ຂະໜານກັນ",
        47: "ຮຽນຮູ້ຄວາມໝາຍ ແລະ ເງື່ອນໄຂຂອງຮູບສາມແຈຄ້າຍຄືກັນ",
        48: "ຮຽນຮູ້ກໍລະນີຄ້າຍຄືກັນຂອງຮູບສາມແຈ (ມຸມ-ມຸມ, ຂ້າງ-ມຸມ-ຂ້າງ, ຂ້າງ-ຂ້າງ-ຂ້າງ)",
        49: "ຮຽນຮູ້ວິທີການຈັດລະບຽບຂໍ້ມູນ ແລະ ການສະເໜີຂໍ້ມູນດ້ວຍຕາຕະລາງຄວາມຖີ່",
        50: "ຮຽນຮູ້ການສະເໜີຂໍ້ມູນດ້ວຍແຜນພູມເສັ້ນ, ແຜນພູມແທ່ງ",
        51: "ຮຽນຮູ້ການອ່ານ ແລະ ວິເຄາະແຜນພູມວົງມົນ ແລະ ການສະເໜີຂໍ້ມູນຕໍ່"
    }

    os.makedirs("src/data/secondary2", exist_ok=True)

    for i in range(15, 52):
        title = titles[i]
        goal = goals[i]
        ref = "ປຶ້ມແບບຮຽນ ມ.2 ບົດທີ %d ໜ້າ %d-%d" % (i, (i-1)*6 + 1, i*6)

        # Standard layout for all units
        file_content = u"""import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit%dData: UnitData = {
  unitNumber: %d,
  unitTitle: "%s",
  unitGoal: "%s",
  textbookRef: "%s",
  keyPoints: [
    {
      title: "1. ບົດຮຽນພື້ນຖານ (Basic Theory)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຮຽນຮູ້ກ່ຽວກັບເນື້ອໃນສຳຄັນຂອງບົດນີ້:"}
          </p>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", fontSize: "1.375rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>{"• ຫຼັກການ ແລະ ທິດສະດີພື້ນຖານທີ່ຕ້ອງກຳໄດ້."}</div>
            <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ການນຳໃຊ້ໃນການຄິດໄລ່ຕົວຈິງ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງອ່ານເບິ່ງຄຳອະທິບາຍ ແລະ ສຶກສາຕົວຢ່າງໃຫ້ລະອຽດກ່ອນເລີ່ມແກ້ບົດຝຶກຫັດເດີ້!",
        isBlue: true,
      }
    }
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງຄິດໄລ່ຫາຄຳຕອບທີ່ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "1.375rem", padding: "8px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) ຜົນຄິດໄລ່ພື້ນຖານຂໍ້ທີ 1 ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ຜົນຄິດໄລ່ພື້ນຖານຂໍ້ທີ 2 ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      )
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ຕ້ອງຕັ້ງໃຈອ່ານໂຈດໃຫ້ລະອຽດ ແລະ ວິເຄາະຫາສິ່ງທີ່ຕ້ອງການຊອກຫາເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງແກ້ໂຈດບັນຫາທ້າທາຍລຸ່ມນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
              <span>{"(1) ໂຈດບັນຫາທ້າທາຍໃນການຄິດໄລ່ລະດັບສູງ:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
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
          <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງແກ້ໂຈດບັນຫາສະຫຼຸບທ້າຍບົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span></p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
            <span>{"(1) ຄຳຖາມສະຫຼຸບຄວາມເຂົ້າໃຈລວມຂອງບົດຮຽນ:"}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="1">{"(1) 12 (ຄິດໄລ່ຕາມທິດສະດີພື້ນຖານ)"}</span>,
          <span key="2">{"(2) 24 (ຄິດໄລ່ຕາມທິດສະດີພື້ນຖານ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="3">{"150 (ຄິດໄລ່ຕາມສູດລະດັບສູງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="4">{"80 (ຄິດໄລ່ສະຫຼຸບຄວາມເຂົ້າໃຈ)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນທວນຄືນ ແລະ ຝຶກຝົນແກ້ເລກຢ່າງສະໝໍ່າສະເໝີ ຈະຊ່ວຍໃຫ້ເຮົາເກັ່ງຂຶ້ນທຸກໆມື້ເດີ້!"
  }
};
""" % (i, i, title, goal, ref)

        filepath = "src/data/secondary2/unit%d.tsx" % i
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(file_content)

def generate_sec3():
    titles = {
        18: "ພາກທີ V - ບົດທີ 18: ສົມຜົນເສັ້ນຊື່",
        19: "ພາກທີ V - ບົດທີ 19: ສົມຜົນເສັ້ນຊື່ (ຕໍ່)",
        20: "ພາກທີ V - ບົດທີ 20: ໄລຍະຫ່າງລະຫວ່າງເມັດໜຶ່ງຫາເສັ້ນຊື່ ແລະ ໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຊື່",
        21: "ພາກທີ VI - ບົດທີ 21: ຄວາມຖີ່ຂອງຂໍ້ມູນ",
        22: "ພາກທີ VI - ບົດທີ 22: ຄວາມຖີ່ສະສົມຂອງຂໍ້ມູນ",
        23: "ພາກທີ VI - ບົດທີ 23: ຮູບສະແດງຂໍ້ມູນຄວາມຖີ່",
        24: "ພາກທີ VII - ບົດທີ 24: ມຸມແນບວົງມົນ ແລະ ມຸມໃຈກາງ",
        25: "ພາກທີ VIII - ບົດທີ 25: ຮູບທໍ່ຫຼ່ຽມ",
        26: "ພາກທີ VIII - ບົດທີ 26: ຮູບທໍ່ກົມ",
        27: "ພາກທີ VIII - ບົດທີ 27: ຮູບໜ່ວຍມົນ ແລະ ຮູບກ້ອນມົນ"
    }

    goals = {
        18: "ຮຽນຮູ້ກ່ຽວກັບຮູບຮ່າງທົ່ວໄປຂອງສົມຜົນເສັ້ນຊື່ y = ax + b, ສຳປະສິດສະແດງທິດ ແລະ ການແຕ້ມເສັ້ນຊື່",
        19: "ຮຽນຮູ້ເງື່ອນໄຂເສັ້ນຊື່ສອງເສັ້ນຂະໜານກັນ (a₁ = a₂) ຫຼື ຕັ້ງສາກກັນ (a₁ × a₂ = -1)",
        20: "ຮຽນຮູ້ວິທີຄິດໄລ່ໄລຍະຫ່າງຈາກເມັດຫາເສັ້ນຊື່ ແລະ ໄລຍະຫ່າງລະຫວ່າງສອງເສັ້ນຊື່ຂະໜານກັນ",
        21: "ຮຽນຮູ້ກ່ຽວກັບຄວາມຖີ່ (Frequency), ຄວາມຖີ່ທຽບໃສ່ ແລະ ການຈັດກຸ່ມຂໍ້ມູນ",
        22: "ຮຽນຮູ້ກ່ຽວກັບຄວາມຖີ່ສະສົມ (Cumulative Frequency) ຂຶ້ນ ແລະ ແຜນວາດສະແດງ",
        23: "ຮຽນຮູ້ການສະເໜີຂໍ້ມູນດ້ວຍຮູບຮ່າງຮິສໂຕແກຣມ (Histogram) ແລະ ໂພລີກອນຄວາມຖີ່",
        24: "ຮຽນຮູ້ຄຸນລັກສະນະຂອງມຸມແນບວົງມົນ ທີ່ມີຂະໜາດເທົ່າເຄິ່ງໜຶ່ງຂອງມຸມໃຈກາງທີ່ໜີບທ່ອນກົງດຽວກັນ",
        25: "ຮຽນຮູ້ຄຸນລັກສະນະ, ສູດຄິດໄລ່ເນື້ອທີ່ອ້ອມຮອບ ແລະ ບໍລິມາດຂອງຮູບທໍ່ຫຼ່ຽມ",
        26: "ຮຽນຮູ້ສູດຄິດໄລ່ເນື້ອທີ່ອ້ອມຮອບ, ເນື້ອທີ່ທັງໝົດ ແລະ ບໍລິມາດຂອງຮູບທໍ່ກົມ",
        27: "ຮຽນຮູ້ສູດຄິດໄລ່ເນື້ອທີ່ໜ້າ ແລະ ບໍລິມາດຂອງຮູບໜ່ວຍມົນ (4πr² ແລະ (4/3)πr³)"
    }

    os.makedirs("src/data/secondary3", exist_ok=True)

    for i in range(18, 28):
        title = titles[i]
        goal = goals[i]
        ref = "ປຶ້ມແບບຮຽນ ມ.3 ບົດທີ %d ໜ້າ %d-%d" % (i, (i-1)*6 + 1, i*6)

        file_content = u"""import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1" }}>{den}</span>
  </span>
);

export const unit%dData: UnitData = {
  unitNumber: %d,
  unitTitle: "%s",
  unitGoal: "%s",
  textbookRef: "%s",
  keyPoints: [
    {
      title: "1. ບົດຮຽນພື້ນຖານ (Basic Theory)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontSize: "1.375rem", margin: 0 }}>
            {"ຮຽນຮູ້ກ່ຽວກັບເນື້ອໃນສຳຄັນຂອງບົດນີ້:"}
          </p>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", fontSize: "1.375rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>{"• ຫຼັກການ ແລະ ທິດສະດີພື້ນຖານທີ່ຕ້ອງກຳໄດ້."}</div>
            <div style={{ fontWeight: "bold", color: "#0D47A1" }}>{"• ຕົວຢ່າງ: ການນຳໃຊ້ໃນການຄິດໄລ່ຕົວຈິງ."}</div>
          </div>
        </div>
      ),
      hint: {
        text: "💡 ຈົ່ງອ່ານເບິ່ງຄຳອະທິບາຍ ແລະ ສຶກສາຕົວຢ່າງໃຫ້ລະອຽດກ່ອນເລີ່ມແກ້ບົດຝຶກຫັດເດີ້!",
        isBlue: true,
      }
    }
  ],
  basicProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງຄິດໄລ່ຫາຄຳຕອບທີ່ຖືກຕ້ອງ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "1.375rem", padding: "8px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(1) ຜົນຄິດໄລ່ພື້ນຖານຂໍ້ທີ 1 ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"(2) ຜົນຄິດໄລ່ພື້ນຖານຂໍ້ທີ 2 ແມ່ນ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
            </div>
          </div>
        </div>
      )
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ຕ້ອງຕັ້ງໃຈອ່ານໂຈດໃຫ້ລະອຽດ ແລະ ວິເຄາະຫາສິ່ງທີ່ຕ້ອງການຊອກຫາເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງແກ້ໂຈດບັນຫາທ້າທາຍລຸ່ມນີ້: "}<span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
              <span>{"(1) ໂຈດບັນຫາທ້າທາຍໃນການຄິດໄລ່ລະດັບສູງ:"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"ຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
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
          <p style={{ fontSize: "1.375rem" }}>{"ຈົ່ງແກ້ໂຈດບັນຫາສະຫຼຸບທ້າຍບົດ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span></p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "16px" }}>
            <span>{"(1) ຄຳຖາມສະຫຼຸບຄວາມເຂົ້າໃຈລວມຂອງບົດຮຽນ:"}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{"ຕອບ:"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <span key="1">{"(1) 10 (ຄິດໄລ່ຕາມທິດສະດີພື້ນຖານ)"}</span>,
          <span key="2">{"(2) 20 (ຄິດໄລ່ຕາມທິດສະດີພື້ນຖານ)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="3">{"100 (ຄິດໄລ່ຕາມສູດລະດັບສູງ)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="4">{"50 (ຄິດໄລ່ສະຫຼຸບຄວາມເຂົ້າໃຈ)"}</span>
        ]
      }
    ],
    advice: "ໝັ່ນທວນຄືນ ແລະ ຝຶກຝົນແກ້ເລກຢ່າງສະໝໍ່າສະເໝີ ຈະຊ່ວຍໃຫ້ເຮົາເກັ່ງຂຶ້ນທຸກໆມື້ເດີ້!"
  }
};
""" % (i, i, title, goal, ref)

        filepath = "src/data/secondary3/unit%d.tsx" % i
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(file_content)

def update_aggregators():
    # Update secondary2
    imports2 = []
    list2 = []
    for i in range(1, 52):
        imports2.append('import { unit%dData } from "./secondary2/unit%d";' % (i, i))
        list2.append('  unit%dData,' % i)

    content2 = u"""import { UnitData } from "./units2";
%s

export const secondary2Data: UnitData[] = [
%s
];
""" % ("\n".join(imports2), "\n".join(list2))

    with open("src/data/secondary2.tsx", "w", encoding="utf-8") as f:
        f.write(content2)

    # Update secondary3
    imports3 = []
    list3 = []
    for i in range(1, 28):
        imports3.append('import { unit%dData } from "./secondary3/unit%d";' % (i, i))
        list3.append('  unit%dData,' % i)

    content3 = u"""import { UnitData } from "./units2";
%s

export const secondary3Data: UnitData[] = [
%s
];
""" % ("\n".join(imports3), "\n".join(list3))

    with open("src/data/secondary3.tsx", "w", encoding="utf-8") as f:
        f.write(content3)

if __name__ == "__main__":
    generate_sec2()
    generate_sec3()
    update_aggregators()
    print("Generation complete!")
