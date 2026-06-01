const fs = require('fs');

const path = 'src/data/units4.tsx';
let content = fs.readFileSync(path, 'utf8');

const u13_u14_code = `  {
    unitNumber: 13,
    unitTitle: "ທະວີຄູນ ແລະ ອຸປະຄູນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບທະວີຄູນ, ອຸປະຄູນ, ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 116-126",
    keyPoints: {
      hint: {
        text: "ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ແມ່ນຈຳນວນນ້ອຍສຸດທີ່ຫານຂາດໃຫ້ທັງສອງຕົວຫານ. ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ແມ່ນຈຳນວນໃຫຍ່ສຸດທີ່ສາມາດຫານທັງສອງຕົວຕັ້ງຫານໄດ້ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ (Even and Odd Numbers)"}
          </h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
            <div style={{ flex: "1 1 200px", padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "20px", color: "#1565C0" }}>{"ຈຳນວນຄູ່ (Even Numbers)"}</strong>
              <p style={{ fontSize: "16px", margin: "10px 0 0 0" }}>{"ຈຳນວນຖ້ວນທີ່ຫານຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8)."}</p>
              <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0" }}>{"0, 2, 4, 6, 8, 10..."}</p>
            </div>
            <div style={{ flex: "1 1 200px", padding: "16px", backgroundColor: "#FFF3E0", border: "2px solid #FF9800", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "20px", color: "#E65100" }}>{"ຈຳນວນຄີກ (Odd Numbers)"}</strong>
              <p style={{ fontSize: "16px", margin: "10px 0 0 0" }}>{"ຈຳນວນຖ້ວນທີ່ຫານບໍ່ຂາດໃຫ້ 2 (ຕົວເລກລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9)."}</p>
              <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0" }}>{"1, 3, 5, 7, 9, 11..."}</p>
            </div>
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
              {"ຈົ່ງຊອກຫາທະວີຄູນ ແລະ ອຸປະຄູນຕາມທີ່ກຳນົດ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຈົ່ງຊອກຫາ 3 ທະວີຄູນຮ່ວມທຳອິດຂອງ 3 ແລະ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ທະວີຄູນຮ່ວມນ້ອຍສຸດ (LCM) ຂອງ 3 ແລະ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຈົ່ງຊອກຫາອຸປະຄູນທັງໝົດຂອງ 12 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "200px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ (GCD) ຂອງ 12 ແລະ 18 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ຈຳນວນຄູ່ແມ່ນຕົວເລກທີ່ລົງທ້າຍດ້ວຍ 0, 2, 4, 6, 8. ສ່ວນຈຳນວນຄີກແມ່ນລົງທ້າຍດ້ວຍ 1, 3, 5, 7, 9 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຈຳແນກຈຳນວນຄູ່ ແລະ ຈຳນວນຄີກ ໂດຍຂຽນຄຳຕອບໃສ່ບ່ອນຫວ່າງ: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "20px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) ຈຳນວນ 48 ແມ່ນຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) ຈຳນວນ 75 ແມ່ນຈຳນວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📐 ຕ້ອງການຈັດວາງກະເບື້ອງຮູບຈະຕຸລັດຂະໜາດເທົ່າກັນ ໃສ່ໃນພື້ນທີ່ຮູບສາມແຈສາກ (ຫຼື ຮູບສີ່ແຈສາກ) ທີ່ມີລວງກວ້າງ 12m ແລະ ລວງຍາວ 18m. ຂະໜາດຄວາມຍາວຂ້າງທີ່ໃຫຍ່ທີ່ສຸດຂອງກະເບື້ອງຮູບຈະຕຸລັດທີ່ສາມາດປູໄດ້ພໍດີແມ່ນຈັກແມັດ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແຈກຢາຍສິ່ງຂອງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍎 ມີໝາກແອບເປິນ 18 ໜ່ວຍ ແລະ ໝາກກ້ຽງ 24 ໜ່ວຍ. ຖ້າຕ້ອງການແບ່ງໝາກໄມ້ທັງສອງປະເພດນີ້ ໃຫ້ເດັກນ້ອຍກຸ່ມໜຶ່ງໂດຍໃຫ້ແຕ່ລະຄົນໄດ້ຮັບເທົ່າໆກັນ ແລະ ບໍ່ໃຫ້ມີໝາກໄມ້ເຫຼືອ. ຈະສາມາດແບ່ງໃຫ້ເດັກນ້ອຍໄດ້ຫຼາຍທີ່ສຸດຈັກຄົນ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
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
          answers: [<span key="1">{"(1) 12, 24, 36, (2) 12, (3) 1, 2, 3, 4, 6, 12, (4) 6"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) ຈຳນວນຄູ່, (2) จຳນວນຄີກ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"6 m (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 12 ແລະ 18)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"6 ຄົນ (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 18 ແລະ 24)"}</span>],
        },
      ],
      advice:
        "ການຊອກຫາ LCM ແລະ GCD ຈະຊ່ວຍໃຫ້ເຮົາແກ້ໄຂບັນຫາການຈັດສັນພື້ນທີ່ ແລະ ການແບ່ງປັນສິ່ງຂອງໃນຊີວິດປະຈຳວັນໄດ້ຢ່າງມີປະສິດທິພາບ!",
    },
  },

  {
    unitNumber: 14,
    unitTitle: "ຄຸນລັກສະນະ, ການບວກ ແລະ ການລົບເລກສ່ວນ",
    unitGoal: "ຮຽນຮູ້ປະເພດຂອງເລກສ່ວນ, ການປ່ຽນຮູບແບບເລກສ່ວນ, ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີສ່ວນຄືກັນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.4 ໜ້າ 127-137",
    keyPoints: {
      hint: {
        text: "ເລກສ່ວນແທ້ມີຈຳນວນພູດນ້ອຍກວ່າພູດ. ເລກສ່ວນເກີນມີຈຳນວນພູດເທົ່າກັບ ຫຼື ໃຫຍ່ກວ່າພູດ. ເລກສ່ວນປະສົມແມ່ນປະກອບດ້ວຍຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນແທ້ເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ປະເພດຂອງເລກສ່ວນ (Types of Fractions)"}
          </h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {/* Proper fraction */}
            <div style={{ flex: "1 1 200px", padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#2E7D32" }}>{"ເລກສ່ວນແທ້ (Proper)"}</strong>
              <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ຈຳນວນພູດ ນ້ອຍກວ່າ ພູດ"}</p>
              <div style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>{"2/3"}</div>
            </div>

            {/* Improper fraction */}
            <div style={{ flex: "1 1 200px", padding: "16px", backgroundColor: "#FFE082", border: "2px solid #FFB300", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#FF8F00" }}>{"ເລກສ່ວນເກີນ (Improper)"}</strong>
              <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ຈຳນວນພູດ ໃຫຍ່ກວ່າ ຫຼື ເທົ່າກັບ ພູດ"}</p>
              <div style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>{"5/3"}</div>
            </div>

            {/* Mixed fraction */}
            <div style={{ flex: "1 1 200px", padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px", textAlign: "center" }}>
              <strong style={{ fontSize: "18px", color: "#1565C0" }}>{"ເລກສ່ວນປະສົມ (Mixed)"}</strong>
              <p style={{ fontSize: "14px", margin: "8px 0" }}>{"ມີຈຳນວນຖ້ວນ ແລະ ເລກສ່ວນແທ້"}</p>
              <div style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>{"1 2/3"}</div>
            </div>
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
              {"ຈົ່ງຄິດໄລ່ ແລະ ປ່ຽນຮູບແບບເລກສ່ວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ປ່ຽນເລກສ່ວນເກີນ 7/3 ໃຫ້ເປັນເລກສ່ວນປະສົມ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) ປ່ຽນເລກສ່ວນປະສົມ 1 3/4 ໃຫ້ເປັນເລກສ່ວນເກີນ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) ບວກເລກສ່ວນ: 2/5 + 1/5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) ລົບເລກສ່ວນ: 7/8 - 3/8 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "ການບວກ ແລະ ການລົບເລກສ່ວນທີ່ມີສ່ວນຄືກັນ ແມ່ນໃຫ້ບວກ ຫຼື ລົບສະເພາະຈຳນວນພູດ (ຕົວເທິງ) ເດີ້! ພູດ (ຕົວລຸ່ມ) ແມ່ນຮັກສາໄວ້ຄືເກົ່າ.",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", fontSize: "22px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) 1 2/5 + 2/5 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) 2 3/7 - 1 1/7 ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🥛 ທ້າວ ສົມພອນ ດື່ມນ້ຳນົມໄປ 2/5 L ໃນຕອນເຊົ້າ ແລະ ດື່ມອີກ 1/5 L ໃນຕອນແລງ. ຖ້າຕອນເລີ່ມຕົ້ນມີນ້ຳນົມຢູ່ 1 L, ຈະເຫຼືອນ້ຳນົມຈັກ L?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"L"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🎗️ ແມ່ມີໂບຍາວ 2 1/4 m. ຕ້ອງການຕັດໂບອອກໄປ 3/4 m ເພື່ອມັດຂອງຂວັນ. ໂບທີ່ເຫຼືອຈະຍາວຈັກແມັດ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"m"}</span>
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
          answers: [<span key="1">{"(1) 2 1/3, (2) 7/4, (3) 3/5, (4) 4/8 = 1/2"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 1 4/5, (2) 1 2/7"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"2/5 L (ຍ້ອນ 1 - (2/5 + 1/5) = 5/5 - 3/5 = 2/5)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"1 2/4 m ຫຼື 1 1/2 m (ຍ້ອນ 2 1/4 - 3/4 = 9/4 - 3/4 = 6/4 = 1 2/4)"}</span>],
        },
      ],
      advice:
        "ການປ່ຽນເລກສ່ວນປະສົມໃຫ້ເປັນເລກສ່ວນເກີນ ຈະຊ່ວຍໃຫ້ການບວກ ແລະ ການລົບເລກສ່ວນມີຄວາມສະດວກ ແລະ ຜິດພາດໜ້ອຍລົງເດີ້!",
    },
  },
`;

// Find where the unit array ends
const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// We insert u13_u14_code right before the last '];' but with a comma after the unit 12 object.
const newContent = content.substring(0, replacementPoint) + ',\n' + u13_u14_code + '];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 13 & 14 added successfully.");
