const fs = require('fs');

const path = 'src/data/units5.tsx';
let content = fs.readFileSync(path, 'utf8');

const u15_u16_u17_code = `  {
    unitNumber: 15,
    unitTitle: "ຮູບກ້ອນ",
    unitGoal: "ຮຽນຮູ້ກ່ຽວກັບຮູບກ້ອນເລຂາຄະນິດ (立体) ເຊັ່ນ: ຮູບຫຼັງຄາຫຼາຍແຈ (Prism) ແລະ ຮູບຫຼັງຄາມົນ (Cylinder), ອົງປະກອບ ແລະ ແຜນວາດຄີ່",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 172-183",
    keyPoints: {
      hint: {
        text: "ຮູບຫຼັງຄາຫຼາຍແຈ ມີໜ້າຂ້າງເປັນຮູບສີ່ແຈສາກ. ສ່ວນຮູບຫຼັງຄາມົນ ມີໜ້າຂ້າງທີ່ເມື່ອຄີ່ອອກຈະເປັນຮູບສີ່ແຈສາກເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ອົງປະກອບຂອງຮູບຫຼັງຄາ (Prisms and Cylinders)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", borderRadius: "8px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px", textAlign: "center" }}>
              <thead>
                <tr style={{ backgroundColor: "#F5F5F5" }}>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ປະເພດຮູບກ້ອນ"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໜ້າພື້ນ (Base)"}</th>
                  <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໜ້າຂ້າງ (Side)"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ຮູບຫຼັງຄາສາມແຈ (Triangular Prism)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຮູບສາມແຈ (2 ໜ້າ)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຮູບສີ່ແຈສາກ (3 ໜ້າ)"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ຮູບຫຼັງຄາມົນ (Cylinder)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຮູບວົງມົນ (2 ໜ້າ)"}</td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໜ້າໂຄ້ງ (ຄີ່ອອກເປັນສີ່ແຈສາກ)"}</td>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຮູບກ້ອນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຮູບຫຼັງຄາສາມແຈ ມີໜ້າທັງໝົດຈັກໜ້າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ໜ້າ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຮູບຫຼັງຄາສາມແຈ ມີຈອມທັງໝົດຈັກຈອມ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຈອມ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ເມື່ອຄີ່ໜ້າໂຄ້ງຂອງຮູບຫຼັງຄາມົນ (Cylinder) ອອກ, ຈະໄດ້ຮູບໃດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "📐 ຄວາມຍາວອ້ອມຮອບຂອງໜ້າພື້ນຮູບວົງມົນ ຈະເທົ່າກັບລວງຍາວຂອງໜ້າຂ້າງຮູບສີ່ແຈສາກພໍດີເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາແຜນວາດຄີ່: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📐 ເມື່ອແຕ້ມແຜນວາດຄີ່ຂອງຮູບຫຼັງຄາມົນ ທີ່ມີເສັ້ນຜ່ານໃຈກາງຂອງພື້ນວົງມົນແມ່ນ 10 cm. ລວງຍາວຂອງໜ້າຂ້າງຮູບສີ່ແຈສາກຈະແມ່ນຈັກ cm?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາອົງປະກອບຮູບຫຼັງຄາ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຮູບຫຼັງຄາຫ້າແຈ (Pentagonal Prism) ຈະມີເສັ້ນຂອບ (Edges) ທັງໝົດຈັກເສັ້ນ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"ເສັ້ນ"}</span>
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
          answers: [<span key="1">{"(1) 5 ໜ້າ (2 ໜ້າພື້ນ + 3 ໜ້າຂ້າງ), (2) 6 ຈອມ, (3) ຮູບສີ່ແຈສາກ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"31.4 cm (ຍ້ອນເທົ່າກັບຄວາມຍາວອ້ອມວົງມົນ 10 × 3.14 = 31.4)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"15 ເສັ້ນ (ຍ້ອນໜ້າພື້ນເທິງມີ 5, ພື້ນລຸ່ມມີ 5 ແລະ ແນວຕັ້ງມີ 5)"}</span>],
        },
      ],
      advice:
        "ຮູບຫຼັງຄາເລຂາຄະນິດມີຄວາມງາມໃນໂຄງສ້າງສາມມິຕິຫຼາຍ! ການຈື່ຈຳຄວາມສຳພັນລະຫວ່າງໜ້າພື້ນ ແລະ ໜ້າຂ້າງ ຈະຊ່ວຍໃຫ້ເຮົາສ້າງແຜນວາດຄີ່ໄດ້ຢ່າງຖືກຕ້ອງສະເໝີ.",
    },
  },

  {
    unitNumber: 16,
    unitTitle: "ລະບົບຫົວໜ່ວຍວັດແທກສາກົນ",
    unitGoal: "ເຂົ້າໃຈຄວາມສຳພັນລະຫວ່າງຫົວໜ່ວຍວັດແທກຄວາມຍາວ, ເນື້ອທີ່, ບໍລິມາດ ແລະ ນ້ຳໜັກໃນລະບົບເມດ (Metre System)",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 184-189",
    keyPoints: {
      hint: {
        text: "ລະບົບຫົວໜ່ວຍເມດໃຊ້ຫຼັກສິບ! ເມື່ອເພີ່ມຂຶ້ນ 10 ເທື່ອ, 100 ເທື່ອ ຈະມີການປ່ຽນຫົວໜ່ວຍທີ່ເປັນລະບົບສະໝໍ່າສະເໝີເດີ້!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ລະບົບຫົວໜ່ວຍວັດແທກ (System of Units)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#E8F5E9", border: "2px solid #4CAF50", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div><strong>{"• ຄວາມຍາວ (Length):"}</strong>{" 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm"}</div>
            <div><strong>{"• ເນື້ອທີ່ (Area):"}</strong>{" 1 ha = 10,000 m², 1 a = 100 m²"}</div>
            <div><strong>{"• ນ້ຳໜັກ (Weight):"}</strong>{" 1 t (ໂຕນ) = 1,000 kg, 1 kg = 1,000 g"}</div>
            <div><strong>{"• ບໍລິມາດ (Volume):"}</strong>{" 1 L = 1,000 mL = 1,000 cm³"}</div>
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
              {"ຈົ່ງຕື່ມຈຳນວນທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1.5 kg ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1.5 m ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 2.5 L ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"mL"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 3 ha ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"m²"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "⚖️ ປ່ຽນຫົວໜ່ວຍທັງໝົດໃຫ້ເປັນ kg ກ່ອນ ແລ້ວຈຶ່ງເອົາມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📦 ແມ່ຊື້ໝາກກ້ຽງ 1.5 kg ແລະ ໝາກມ່ວງ 800 g. ໝາກໄມ້ທັງໝົດທີ່ແມ່ຊື້ມີນ້ຳໜັກລວມກັນຈັກ kg?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"kg"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາບໍລິມາດນ້ຳຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"💧 ຖັງນ້ຳໃບໜຶ່ງມີຄວາມຈຸ 1 m³. ຖ້າມີນ້ຳຢູ່ 400 L, ຈະຕ້ອງເທນ້ຳໃສ່ຕື່ມອີກຈັກ L ຈຶ່ງຈະເຕັມຖັງ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"L"}</span>
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
          answers: [<span key="1">{"(1) 1500 g, (2) 150 cm, (3) 2500 mL, (4) 30,000 m² (ຍ້ອນ 1 ha = 10,000 m²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"2.3 kg (ຍ້ອນ 800 g = 0.8 kg, ແລະ 1.5 + 0.8 = 2.3 kg)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"600 L (ຍ້ອນ 1 m³ = 1000 L, 1000 - 400 = 600)"}</span>],
        },
      ],
      advice:
        "ລະບົບຫົວໜ່ວຍສາກົນໃຊ້ການພົວພັນຫຼັກສິບ (10, 100, 1000) ທີ່ສະໝໍ່າສະເໝີຫຼາຍ! ຈື່ຈຳຕາຕະລາງປ່ຽນຫົວໜ່ວຍຈະຊ່ວຍໃຫ້ເຮົາບໍ່ສັບສົນໃນຊີວິດປະຈຳວັນ.",
    },
  },

  {
    unitNumber: 17,
    unitTitle: "ສະຫຼຸບບົດຮຽນປະຖົມສຶກສາ ປີທີ 5",
    unitGoal: "ທົບທວນຄືນບົດຮຽນທັງໝົດທີ່ໄດ້ຮຽນມາໃນຊັ້ນ ປ.5 ເພື່ອກຽມຄວາມພ້ອມໃນການສອບເສັງຈົບຊັ້ນ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.5 ໜ້າ 190-200",
    keyPoints: {
      hint: {
        text: "ນີ້ແມ່ນບົດທົດສອບລວມຂອງທຸກໆບົດຮຽນເດີ້! ພະຍາຍາມແກ້ໄຂດ້ວຍຕົນເອງເພື່ອວັດແທກລະດັບຄວາມເຂົ້າໃຈຂອງຕົນເອງ!",
      },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
            {"1. ສິ່ງທີ່ໄດ້ຮຽນມາທັງໝົດໃນ ປ.5 (P5 Summary)"}
          </h3>
          <div style={{ padding: "16px", backgroundColor: "#FFE082", border: "2px solid #FFB300", borderRadius: "8px", fontSize: "18px", lineHeight: "1.8" }}>
            <div>{"• ການຄູນ, ການຫານເລກທົດສະນິຍົມ ແລະ ເລກສ່ວນ."}</div>
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
              {"ຈົ່ງແກ້ເລກທົດສອບຄວາມຮູ້ນຳກັນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1.2 × 2.5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 2/3 × 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບສາມແຈທີ່ມີພື້ນ 6 cm ແລະ ລວງສູງ 4 cm. ເນື້ອທີ່ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"cm²"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ວົງມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງຍາວ 20 cm. ເສັ້ນອ້ອມວົງແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"cm"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      hintText: "⚖️ ໃຊ້ອັດຕາສ່ວນເພື່ອຊອກຫາປະລິມານ! ສ່ວນຫຼາຍແມ່ນໃຊ້ສູດອັດຕາສ່ວນທີ່ເທົ່າກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາລວມ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🥛 ຕ້ອງການເຮັດເຂົ້າໜົມຫວານ ໂດຍໃຊ້ນ້ຳຕານ ແລະ ແປ້ງ ໃນອັດຕາສ່ວນ 3 : 5. ຖ້າໃຊ້ແປ້ງ 250 g, ຈະຕ້ອງໃຊ້ນ້ຳຕານຈັກ g?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"g"}</span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາສ່ວນຮ້ອຍຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🚴 ສິນຄ້າຊະນິດໜຶ່ງລາຄາ 5,000 ກີບ. ຖ້າຫຼຸດລາຄາໃຫ້ 15%, ລາຄາສຸດທ້າຍຂອງສິນຄ້ານີ້ແມ່ນຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
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
          answers: [<span key="1">{"(1) 3 (ຍ້ອນ 1.2 × 2.5 = 3.0), (2) 10/3 (ຫຼື 3 1/3), (3) 12 cm² (6 × 4 ÷ 2), (4) 62.8 cm (20 × 3.14)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"150 g (ຍ້ອນ 250 ÷ 5 = 50, ດັ່ງນັ້ນ 3 × 50 = 150)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"4,250 ກີບ (ຍ້ອນຫຼຸດລາຄາ 5,000 × 0.15 = 750 ກີບ, ລາຄາສຸດທ້າຍ 5,000 - 750 = 4,250)"}</span>],
        },
      ],
      advice:
        "ຊົມເຊີຍທຸກຄົນທີ່ຮຽນຈົບບົດຮຽນ ປ.5 ຢ່າງສົມບູນ! ຄວາມຮູ້ທັງໝົດນີ້ແມ່ນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນການຮຽນຕໍ່ຊັ້ນມັດທະຍົມ ແລະ ການນຳໃຊ້ໃນຊີວິດ.",
    },
  },
];
`;

const replacementPoint = content.lastIndexOf('];');

if (replacementPoint === -1) {
  console.error("Could not find array end.");
  process.exit(1);
}

// Check if there is already a comma right before the array ends
const preSnippet = content.substring(0, replacementPoint).trimEnd();
const hasComma = preSnippet.endsWith(',');

const newContent = preSnippet + (hasComma ? '\n' : ',\n') + u15_u16_u17_code + '\n];';

fs.writeFileSync(path, newContent, 'utf8');
console.log("Unit 15, 16, & 17 added successfully.");
