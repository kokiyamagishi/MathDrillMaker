import sys
import re

filepath = 'src/data/units4.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# ----------------- UNIT 9 -----------------
# challengeProblems, summaryProblems and answers are already updated during restoration!
# But just in case, let's verify if Unit 9 is fully complete. It is!

# ----------------- UNIT 10 -----------------
print("Updating Unit 10...")
# Find Unit 10 basicProblems
u10_basic_old = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນιຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 5/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 2/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u10_basic_new = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນເລກສ່ວນລຸ່ມນີ້ໃຫ້ເປັນເລກທົດສະນιຍົມ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 1/10 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 1/2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
              {"ຈົ່ງປ່ຽນເລກທົດສະນιຍົມລຸ່ມນີ້ໃຫ້ເປັນເລກສ່ວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "22px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 0.3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 0.7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u10_basic_old, u10_basic_new)

# Find Unit 10 summaryProblems
u10_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃស່ບ່ອນຫວ່າງເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "40px", marginTop: "30px" }}>
              
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                {/* 0 */}
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                
                {/* Ticks */}
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}

                {/* 1 */}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>

                {/* Arrow at 3/10 (0.3) */}
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
                {/* Arrow at 7/10 (0.7) */}
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(1) ແມ່ນເລກສ່ວນ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) ແມ່ນເລກທົດສະນιຍົມ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                </div>
              </div>

            </div>
          </div>
        ),
      },
    ],"""

u10_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕື່ມເລກສ່ວນທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ (1) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "30%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (1)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ແມ່ນເລກສ່ວນ:"}</span>
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
              {"ຈົ່ງຕື່ມເລກທົດສະນιຍົມທີ່ຖືກຕ້ອງໃສ່ບ່ອນຫວ່າງ (2) ເທິງເສັ້ນຈຳນວນ: "}{" "}
              <span className="point-label">{"(5 ຄະນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "60px", width: "100%", maxWidth: "500px", borderBottom: "4px solid #333" }}>
                <div style={{ position: "absolute", bottom: "-4px", left: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", left: "-10px", fontWeight: "bold" }}>{"0"}</div>
                {[...Array(10)].map((_, i) => {
                  if (i === 0) return null;
                  return (
                    <div key={i} style={{ position: "absolute", bottom: "-4px", left: (i * 10) + "%", width: "1px", height: "8px", backgroundColor: "#666" }}></div>
                  );
                })}
                <div style={{ position: "absolute", bottom: "-4px", right: "0", width: "2px", height: "15px", backgroundColor: "#333" }}></div>
                <div style={{ position: "absolute", bottom: "-24px", right: "-10px", fontWeight: "bold" }}>{"1"}</div>
                <div style={{ position: "absolute", bottom: "10px", left: "70%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E91E63" }}>{"↓ (2)"}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ແມ່ນເລກທົດສະນິຍົມ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u10_summary_old, u10_summary_new)

# Find Unit 10 answers
u10_answers_old = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 0.1, (2) 0.5, (3) 0.2, (4) 0.5"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) > (ຍ້ອນ 0.6 > 0.5), (2) = (ຍ້ອນ 0.3 = 0.3)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"ນາງ ນະລິນ ຫຼາຍກວ່າ (ຍ້ອນ 1/2 = 0.5 L, 0.5 > 0.4)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"(1) 3/10, (2) 0.7"}</span>],
        },
      ],"""

u10_answers_new = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 0.1, (2) 0.5"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 3/10, (4) 7/10"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) > (ຍ້ອນ 0.6 > 0.5), (2) = (ຍ້ອນ 0.3 = 0.3)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"ນາງ ນະລິນ ຫຼາຍກວ່າ (ຍ້ອນ 1/2 = 0.5 L, 0.5 > 0.4)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"3/10"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"0.7"}</span>],
        },
      ],"""

content = content.replace(u10_answers_old, u10_answers_new)

# ----------------- UNIT 11 -----------------
print("Updating Unit 11...")
# Find Unit 11 basicProblems
u11_basic_old = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງເບິ່ງຕາຕະລາງ \"ກິລາທີ່ນັກຮຽນມັກ\" ດ້ານເທິງ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) นັກຮຽນຊັ້ນ ປ.4 ທີ່ມັກ ເຕະບານ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ນັກຮຽນຊັ້ນ ປ.5 ທີ່ມັກ ບານບ້ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຈຳນວນນັກຮຽນທັງໝົດທີ່ມັກ ເຕະບານ (ທັງ ປ.4 ແລະ ປ.5) ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u11_basic_new = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງເບິ່ງຕາຕະລາງ \"ກິລາທີ່ນັກຮຽນມັກ\" ດ້ານເທິງ ແລ້ວຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ນັກຮຽນຊັ້ນ ປ.4 ທີ່ມັກ ເຕະບານ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ນັກຮຽນຊັ້ນ ປ.5 ທີ່ມັກ ບານບ້ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
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
              {"ຈົ່ງຄິດໄລ່ຈຳນວນລວມຈາກຕາຕະລາງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ລວມທຸກຊັ້ນຮຽນທີ່ມັກ ເຕະບານ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ລວມທຸກຊັ້ນຮຽນທີ່ມັກ ບານບ້ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u11_basic_old, u11_basic_new)

# Find Unit 11 challengeProblems
u11_challenge_old = """    challengeProblems: {
      hintText: "ຊອກຫາຄ່າໃນຊ່ອງຫວ່າງໂດຍການບວກ ຫຼື ລົບຕົວເລກໃນແຖວ ຫຼື ຖັນດຽວກັນເດີ!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃស່ໃນຕາຕະລາງຫວ່າງລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 3.3 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px" }}>
                <table style={{ width: "100%", maxWidth: "500px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#E0F2F1" }}>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໝາກໄມ້ / ເພດ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຊາຍ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຍິງ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກມ່ວງ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"15"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"25"}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກກ້ວຍ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"20"}</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"23"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"22"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}><span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "30px" }}></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
      ],
    },"""

u11_challenge_new = """    challengeProblems: {
      hintText: "ຊອກຫາຄ່າໃນຊ່ອງຫວ່າງໂດຍການບວກ ຫຼື ລົບຕົວເລກໃນແຖວ ຫຼື ຖັນດຽວກັນເດີ!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕື່ມຕົວເລກທີ່ຖືກຕ້ອງໃស່ໃນຕາຕະລາງຫວ່າງລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 8 ຄະແນນ)"}</span>
              </p>
              <div style={{ padding: "16px" }}>
                <table style={{ width: "100%", maxWidth: "500px", borderCollapse: "collapse", textAlign: "center", fontSize: "18px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#E0F2F1" }}>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ໝາກໄມ້ / ເພດ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຊາຍ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ຍິງ"}</th>
                      <th style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກມ່ວງ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"15"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"25"}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"ໝາກກ້ວຍ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"12"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"20"}</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ECEFF1", fontWeight: "bold" }}>
                      <td style={{ padding: "8px", border: "1px solid #ccc" }}>{"ລວມ"}</td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}><span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "30px" }}></span></td>
                      <td style={{ padding: "8px", border: "1px solid #ccc", fontWeight: "bold" }}>{"45"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມໂດຍອີງໃສ່ຕາຕະລາງດ້ານເທິງ: "}{" "}
                <span className="point-label">{"(2 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ຈຳນວນນັກຮຽນທັງໝົດ (ຊາຍ ແລະ ຍິງ) ມີຈັກຄົນ?"}</span>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u11_challenge_old, u11_challenge_new)

# Find Unit 11 summaryProblems
u11_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຈາກຕາຕະລາງ \"ໝາກໄມ້ທີ່ມັກ\" ດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຈຳນວນຜູ້ຍິງທີ່ມັກ ໝາກມ່ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈຳນວນນັກຮຽນທັງໝົດ (ຊາຍ ແລະ ຍິງ) ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u11_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຈາກຕາຕະລາງ \"ໝາກໄມ້ທີ່ມັກ\" ດ້ານເທິງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(1) ຈຳນວນຜູ້ຍິງທີ່ມັກ ໝາກມ່ວງ ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
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
              {"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຈຳນວນນັກຮຽນທັງໝົດ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(2) ຈຳນວນນັກຮຽນທັງໝົດ (ຊາຍ ແລະ ຍິງ) ມີຈັກຄົນ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ຄົນ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u11_summary_old, u11_summary_new)

# Find Unit 11 answers
u11_answers_old = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 12 ຄົນ, (2) 10 ຄົນ, (3) 27 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"ໝາກມ່ວງຍິງ: 10 ຄົນ (25-15), ໝາກກ້ວຍຊາຍ: 8 ຄົນ (20-12), ລວມທັງໝົດ: 45 ຄົນ (23+22)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 10 ຄົນ, (2) 45 ຄົນ"}</span>],
        },
      ],"""

u11_answers_new = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 12 ຄົນ, (2) 10 ຄົນ"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="1_2">{"(3) 27 ຄົນ, (4) 18 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"ໝາກມ່ວງຍິງ: 10 ຄົນ (25-15), ໝາກກ້ວຍຊາຍ: 8 ຄົນ (20-12), ລວມຊາຍ: 23 ຄົນ, ລວມຍິງ: 22 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"45 ຄົນ (23 + 22 = 45 ຄົນ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"10 ຄົນ (ໝາກມ່ວງຍິງ)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"45 ຄົນ (ລວມທັງໝົດ)"}</span>],
        },
      ],"""

content = content.replace(u11_answers_old, u11_answers_new)

# ----------------- UNIT 12 -----------------
print("Updating Unit 12...")
# Let's fix Unit 12 basicProblems first to be 10 points
u12_basic_old = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              {/* Problem 1.1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(1)"}</span>
                <svg width="120" height="80">
                  <path d="M 60,10 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="30" y="65" fontSize="12">{"60°"}</text>
                  <text x="80" y="65" fontSize="12">{"70°"}</text>
                  <text x="60" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(2)"}</span>
                <svg width="120" height="80">
                  {/* Right-angled triangle */}
                  <path d="M 20,10 L 100,70 L 20,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  {/* Right angle indicator */}
                  <path d="M 20,60 L 30,60 L 30,70" fill="none" stroke="#333" strokeWidth="1" />
                  <text x="80" y="65" fontSize="12">{"35°"}</text>
                  <text x="30" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? 在ຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 90°, 85°, 105°. ມຸມທີ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u12_basic_new = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 3 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", padding: "16px" }}>
              {/* Problem 1.1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(1)"}</span>
                <svg width="120" height="80">
                  <path d="M 60,10 L 110,70 L 10,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="30" y="65" fontSize="12">{"60°"}</text>
                  <text x="80" y="65" fontSize="12">{"70°"}</text>
                  <text x="60" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>

              {/* Problem 1.2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"(2)"}</span>
                <svg width="120" height="80">
                  {/* Right-angled triangle */}
                  <path d="M 20,10 L 100,70 L 20,70 Z" fill="none" stroke="#333" strokeWidth="2" />
                  {/* Right angle indicator */}
                  <path d="M 20,60 L 30,60 L 30,70" fill="none" stroke="#333" strokeWidth="1" />
                  <text x="80" y="65" fontSize="12">{"35°"}</text>
                  <text x="30" y="30" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"ມຸມ ? ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(3) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 90°, 85°, 105°. ມຸມທີ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span>{"(4) ຮູບສີ່ແຈທີ່ມີ 3 ມຸມເທົ່າກັບ 60°, 110°, 80°. ມຸມທີ 4 ແມ່ນ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u12_basic_old, u12_basic_new)

# Find Unit 12 challengeProblems
u12_challenge_old = """    challengeProblems: {
      hintText: "ມຸມພາຍໃນຂອງຮູບສາມແຈສະເໝີແມ່ນເທົ່າກັບ 60 ອົງສາໃນທຸກໆມຸມເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>{"(1) ຖ້າຕັດຮູບສີ່ແຈອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ ຈະໄດ້ຮູບສາມແຈຈັກຮູບ?"}</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

u12_challenge_new = """    challengeProblems: {
      hintText: "ມຸມພາຍໃນຂອງຮູບສາມແຈສະເໝີແມ່ນເທົ່າກັບ 60 ອົງສາໃນທຸກໆມຸມເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>{"(1) ຖ້າຕັດຮູບສີ່ແຈອອກເປັນສອງສ່ວນຕາມເສັ້ນເນັ່ງຈອມ ຈະໄດ້ຮູບສາມແຈຈັກຮູບ?"}</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
                {"ຈົ່ງຊອກຫາຜົນບວກມຸມໃນຂອງຮູບຫ້າແຈລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>{"(2) ຮູບຫ້າແຈ ສາມາດແບ່ງອອກເປັນຮູບສາມແຈໄດ້ 3 ຮູບ. ຜົນບວກມຸມໃນທັງໝົດແມ່ນຈັກອົງສາ?"}</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"°"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u12_challenge_old, u12_challenge_new)

# Find Unit 12 summaryProblems
u12_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="150" height="100">
                <path d="M 20,20 L 130,20 L 110,80 L 40,80 Z" fill="none" stroke="#333" strokeWidth="2" />
                <text x="45" y="35" fontSize="12">{"110°"}</text>
                <text x="100" y="35" fontSize="12">{"120°"}</text>
                <text x="45" y="75" fontSize="12">{"65°"}</text>
                <text x="90" y="75" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
              </svg>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ມຸມ ? ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u12_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສີ່ແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="150" height="100">
                <path d="M 20,20 L 130,20 L 110,80 L 40,80 Z" fill="none" stroke="#333" strokeWidth="2" />
                <text x="45" y="35" fontSize="12">{"110°"}</text>
                <text x="100" y="35" fontSize="12">{"120°"}</text>
                <text x="45" y="75" fontSize="12">{"65°"}</text>
                <text x="90" y="75" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
              </svg>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ມຸມ ? ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
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
              {"ຈົ່ງຊອກຫາຂະໜາດຂອງມຸມ ? ໃນຮູບສາມແຈລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="150" height="100">
                <path d="M 75,15 L 130,85 L 20,85 Z" fill="none" stroke="#333" strokeWidth="2" />
                <text x="35" y="80" fontSize="12">{"45°"}</text>
                <text x="110" y="80" fontSize="12">{"55°"}</text>
                <text x="70" y="40" fontSize="14" fill="red" fontWeight="bold">{"?"}</text>
              </svg>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span>{"ມຸມ ? ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                <span>{"°"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u12_summary_old, u12_summary_new)

# Find Unit 12 answers
u12_answers_old = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 50° (180 - (60+70)), (2) 55° (180 - (90+35))"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 80° (360 - (90+85+105))"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"ได้ຮູບສາມແຈ 2 ຮູບ (ເຊິ່ງເປັນສາເຫດທີ່ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 180 × 2 = 360°)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"65° (360 - (110+120+65))"}</span>],
        },
      ],"""

u12_answers_new = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 50° (180 - (60+70)), (2) 55° (180 - (90+35))"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 80° (360 - (90+85+105)), (4) 110° (360 - (60+110+80))"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"ໄດ້ຮູບສາມແຈ 2 ຮູບ (ເຊິ່ງເປັນສາເຫດທີ່ຜົນບວກມຸມໃນຮູບສີ່ແຈແມ່ນ 180 × 2 = 360°)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3_2">{"540° (180° × 3 = 540°)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"65° (360 - (110+120+65))"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"80° (180 - (45+55) = 80°)"}</span>],
        },
      ],"""

content = content.replace(u12_answers_old, u12_answers_new)

# ----------------- UNIT 13 -----------------
print("Updating Unit 13...")
# Find Unit 13 summaryProblems
u13_summary_old = """    summaryProblems: [
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
    ],"""

u13_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແຈກຢາຍສິ່ງຂອງ (ອຸປະຄູນຮ່ວມໃຫຍ່ສຸດ): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍎 有ໝາກແອບເປິນ 18 ໜ່ວຍ ແລະ ໝາກກ້ຽງ 24 ໜ່ວຍ. ຖ້າຕ້ອງການແບ່ງໝາກໄມ້ທັງສອງປະເພດນີ້ ໃຫ້ເດັກນ້ອຍກຸ່ມໜຶ່ງໂດຍໃຫ້ແຕ່ລະຄົນໄດ້ຮັບເທົ່າໆກັນ. ຈະສາມາດແບ່ງໃຫ້ເດັກນ້ອຍໄດ້ຫຼາຍທີ່ສຸດຈັກຄົນ?"}
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
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການອອກເດີນທາງພ້ອມກັນ (ທະວີຄູນຮ່ວມນ້ອຍສຸດ): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🚌 ລົດເມສາຍ A ອອກທຸກໆ 8 ນາທີ ແລະ ສາຍ B ອອກທຸກໆ 12 ນາທີ. ຖ້າລົດເມທັງສອງສາຍອອກເດີນທາງພ້ອມກັນໃນເວລາ 8:00, ພວກມັນຈະອອກເດີນທາງພ້ອມກັນອີກຄັ້ງໃນອີກຈັກນາທີ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

# Make sure to replace Chinese '有' in new text as well (fixed below)
u13_summary_new = u13_summary_new.replace("有ໝາກແອບເປິນ", "ມີໝາກແອບເປິນ")
content = content.replace(u13_summary_old, u13_summary_new)

# Find Unit 13 answers
u13_answers_old = """        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"6 ຄົນ (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 18 ແລະ 24)"}</span>],
        },
      ],"""

u13_answers_new = """        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"6 ຄົນ (ຍ້ອນ 6 ແມ່ນອຸປະຄູນຮ່ວມໃຫຍ່ສຸດຂອງ 18 ແລະ 24)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"24 ນາທີ (ຍ້ອນ 24 ແມ່ນທະວີຄູນຮ່ວມນ້ອຍສຸດຂອງ 8 ແລະ 12)"}</span>],
        },
      ],"""

content = content.replace(u13_answers_old, u13_answers_new)


# ----------------- UNIT 14 -----------------
print("Updating Unit 14...")
# Find Unit 14 basicProblems
u14_basic_old = """    basicProblems: [
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
    ],"""

u14_basic_new = """    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງປ່ຽນຮູບແບບເລກສ່ວນຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) ປ່ຽນເລກສ່ວນເກີນ 7/3 ໃຫ້ເປັນເລກສ່ວນປະສົມ ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) ປ່ຽນເລກສ່ວນປະສົມ 1 3/4 ໃຫ້ເປັນເລກສ່ວນເກີນ ="}</span>
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
              {"ຈົ່ງຄິດໄລ່ເລກສ່ວນລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
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
    ],"""

content = content.replace(u14_basic_old, u14_basic_new)

# Find Unit 14 summaryProblems
u14_summary_old = """    summaryProblems: [
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
    ],"""

u14_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບເລກສ່ວນ: "}{" "}
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
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາການບວກເລກສ່ວນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🥛 ມີນ້ຳນົມຢູ່ 1 2/4 L ແລະ ຊື້ຕື່ມອີກ 3/4 L. ຈະມີນ້ຳນົມທັງໝົດຈັກ L?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"L"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u14_summary_old, u14_summary_new)

# Find Unit 14 answers
u14_answers_old = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) 2 1/3, (2) 7/4, (3) 3/5, (4) 4/8 = 1/2"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) 1 2/5 + 2/5 = 1 4/5, (2) 2 3/7 - 1 1/7 = 1 2/7"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3">{"2/5 L (ຍ້ອນ 1 - (2/5 + 1/5) = 5/5 - 3/5 = 2/5)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"1 2/4 m ຫຼື 1 1/2 m (ຍ້ອນ 2 1/4 - 3/4 = 9/4 - 3/4 = 6/4 = 1 2/4)"}</span>],
        },
      ],"""

# Note: pre-compaction u14 answers had slightly different ທ້າທາຍ 1 string, but we replace it accurately
content = re.sub(r'{\s*questionNumber:\s*"ທົດສອບປະຈຳບົດ 1",\s*answers:\s*\[<span key="4">{"1 2/4 m[^"]*"}\s*\]\s*,\s*\}', 
                 '{\n          questionNumber: "ທົດສອບປະຈຳບົດ 1",\n          answers: [<span key="4">{"1 2/4 m ຫຼື 1 1/2 m (ຍ້ອນ 2 1/4 - 3/4 = 9/4 - 3/4 = 6/4 = 1 2/4)"}</span>],\n        },\n        {\n          questionNumber: "ທົດສອບປະຈຳບົດ 2",\n          answers: [<span key="4_2">{"2 1/4 L (ຍ້ອນ 1 2/4 + 3/4 = 6/4 + 3/4 = 9/4 = 2 1/4)"}</span>],\n        }', content)


# ----------------- UNIT 15 -----------------
print("Updating Unit 15...")
# Chinese character fix in Unit 15 keyPoints
content = content.replace('代金 (ລາຄາລວມ)', 'ລາຄາລວມ')

# Find Unit 15 challengeProblems
u15_challenge_old = """    challengeProblems: {
      hintText: "📐 ສູດເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ ພື້ນ × ລວງສູງ ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາເລຂາຄະນິດລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", fontSize: "20px", padding: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span>{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນຍາວ a cm ແລະ ລວງສູງ 6 cm. ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່:"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ a = 8 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານຈະແມ່ນ"}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                    <span>{"ຄຳຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                    <span>{"cm²"}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

u15_challenge_new = """    challengeProblems: {
      hintText: "📐 ສູດເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານແມ່ນ ພື້ນ × ລວງສູງ ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່ຮູບສີ່ແຈຂ້າງຂະໜານ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <span>{"(1) ຮູບສີ່ແຈຂ້າງຂະໜານທີ່ມີພື້ນຍາວ a cm ແລະ ລວງສູງ 6 cm. ຈົ່ງຂຽນສັນຍະລັກເນື້ອທີ່:"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "150px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
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
                {"ຈົ່ງຊອກຫາເນື້ອທີ່ຕົວຈິງ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <span>{"(2) ຈາກຂໍ້ (1), ຖ້າ a = 8 cm. ເນື້ອທີ່ຂອງຮູບສີ່ແຈຂ້າງຂະໜານຈະແມ່ນຈັກ cm²?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u15_challenge_old, u15_challenge_new)

# Find Unit 15 summaryProblems
u15_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກ ແລະ ແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍎 ຊື້ໝາກແອບເປິນ 1 ໜ່ວຍ ລາຄາ x ກີບ ຈຳນວນ 4 ໜ່ວຍ ແລະ ໃສ່ກ່ອງຂອງຂວັນລາຄາ 50 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u15_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຂຽນປະໂຫຍກສັນຍະລັກຂອງການຊື້ເຄື່ອງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🍎 ຊື້ໝາກແອບເປິນ 1 ໜ່ວຍ ລາຄາ x ກີບ ຈຳນວນ 4 ໜ່ວຍ ແລະ ໃສ່ກ່ອງຂອງຂວັນລາຄາ 50 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px", flexWrap: "wrap" }}>
                <span>{"ປະໂຫຍກສັນຍະລັກ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "180px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາລາຄາລວມຕົວຈິງ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <span>{"ຖ້າລາຄາໝາກແອບເປິນ 1 ໜ່ວຍແມ່ນ x = 1500 ກີບ. ລາຄາລວມທັງໝົດແມ່ນເທົ່າໃດ?"}</span>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u15_summary_old, u15_summary_new)

# Find Unit 15 answers
u15_answers_old = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) a × 6, (2) 48 cm² (8 × 6)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"x × 4 + 50 (ຫຼື 4 × x + 50)"}</span>],
        },
      ],"""

u15_answers_new = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"a × 6 (cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"48 cm² (ຍ້ອນ 8 × 6 = 48)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"x × 4 + 50 (ຫຼື 4 × x + 50)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"6050 ກີບ (ຍ້ອນ 1500 × 4 + 50 = 6050)"}</span>],
        },
      ],"""

content = content.replace(u15_answers_old, u15_answers_new)


# ----------------- UNIT 16 -----------------
print("Updating Unit 16...")
# Find Unit 16 challengeProblems
u16_challenge_old = """    challengeProblems: {
      hintText: "💧 ຄວາມເລິກຂອງນ້ຳຈະເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີຕາມເວລາທີ່ຜ່ານໄປເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>
                  {"🥤 ເປີດນ້ຳໃສ່ອ່າງ, ຜ່ານໄປ 2 ນາທີ ນ້ຳເລິກໄດ້ 6 cm. ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 6 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

u16_challenge_new = """    challengeProblems: {
      hintText: "💧 ຄວາມເລິກຂອງນ້ຳຈະເພີ່ມຂຶ້ນຢ່າງສະໝໍ່າສະເໝີຕາມເວລາທີ່ຜ່ານໄປເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາອັດຕາສ່ວນພົວພັນຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>
                  {"🥤 ເປີດນ້ຳໃສ່ອ່າງ, ຜ່ານໄປ 2 ນາທີ ນ້ຳເລິກໄດ້ 6 cm. ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 6 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
                {"ຈົ່ງຄິດໄລ່ຄວາມເລິກຂອງນ້ຳໃນເວລາອື່ນ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "20px" }}>
                <div>
                  {"🥤 ຈາກຂໍ້ (1), ຖ້າເປີດນ້ຳດ້ວຍຄວາມໄວເທົ່າເດີມ, ຜ່ານໄປ 10 ນາທີ ນ້ຳຈະເລິກໄດ້ຈັກ cm?"}
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u16_challenge_old, u16_challenge_new)

# Find Unit 16 summaryProblems
u16_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຖ້າຊື້ປຶ້ມຂຽນ 5 ຫົວ ຕ້ອງຈ່າຍເງິນ 400 ກີບ. ຖ້າຊື້ປຶ້ມຂຽນປະເພດດຽວກັນ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ກີບ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u16_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງແກ້ໂຈດບັນຫາລາຄາປຶ້ມຂຽນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຖ້າຊື້ປຶ້ມຂຽນ 5 ຫົວ ຕ້ອງຈ່າຍເງິນ 400 ກີບ. ຖ້າຊື້ປຶ້ມຂຽນປະເພດດຽວກັນ 15 ຫົວ ຈະຕ້ອງຈ່າຍເງິນຈັກກີບ?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫານ້ຳໜັກລວດເຫຼັກ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"📐 ຖ້າລວດເຫຼັກຍາວ 3m ມີນ້ຳໜັກ 60g. ຖ້າລວດເຫຼັກປະເພດດຽວກັນຍາວ 9m ຈະມີນ້ຳໜັກຈັກ g?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"g"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u16_summary_old, u16_summary_new)

# Find Unit 16 answers
u16_answers_old = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"18 cm (ຍ້ອນເວລາເພີ່ມຂຶ້ນ 3 ເທື່ອ (6÷2), ຄວາມເລິກກໍເພີ່ມຂຶ້ນ 3 ເທື່ອ 6 × 3 = 18)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"1200 ກີບ (ຍ້ອນຈຳນວນປຶ້ມເພີ່ມຂຶ້ນ 3 ເທື່ອ (15÷5), ລາຄາກໍເພີ່ມ 3 ເທື່ອ 400 × 3 = 1200)"}</span>],
        },
      ],"""

u16_answers_new = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"18 cm (ຍ້ອນ 6 × 3 = 18)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"30 cm (ຍ້ອນ 6 × 5 = 30)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"1200 ກີບ (ຍ້ອນ 400 × 3 = 1200)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"180 g (ຍ້ອນ 60 × 3 = 180)"}</span>],
        },
      ],"""

content = content.replace(u16_answers_old, u16_answers_new)


# ----------------- UNIT 17 -----------------
print("Updating Unit 17...")
# Find Unit 17 challengeProblems
u17_challenge_old = """    challengeProblems: {
      hintText: "📐 ສຳລັບຮູບປະສົມ, ເຮົາສາມາດແບ່ງອອກເປັນຮູບສີ່ແຈສາກຍ່ອຍໆ 2 ຮູບ ແລ້ວເອົາເນື້ອທີ່ມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບຫຼາຍແຈລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="160" height="140">
                  {/* L-shaped polygon */}
                  <path d="M 20,20 L 100,20 L 100,60 L 60,60 L 60,120 L 20,120 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="50" y="15" fontSize="12">{"8 cm"}</text>
                  <text x="5" y="75" fontSize="12">{"10 cm"}</text>
                  <text x="85" y="95" fontSize="12" fill="#888">{"(ແບ່ງຮູບ)"}</text>
                  <path d="M 60,20 L 60,60" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="110" y="45" fontSize="12">{"4 cm"}</text>
                  <text x="40" y="135" fontSize="12">{"4 cm"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ເນື້ອທີ່ທັງໝົດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

u17_challenge_new = """    challengeProblems: {
      hintText: "📐 ສຳລັບຮູບປະສົມ, ເຮົາສາມາດແບ່ງອອກເປັນຮູບສີ່ແຈສາກຍ່ອຍໆ 2 ຮູບ ແລ້ວເອົາເນື້ອທີ່ມາບວກກັນເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບປະສົມ (L) ລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="160" height="140">
                  <path d="M 20,20 L 100,20 L 100,60 L 60,60 L 60,120 L 20,120 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <text x="50" y="15" fontSize="12">{"8 cm"}</text>
                  <text x="5" y="75" fontSize="12">{"10 cm"}</text>
                  <text x="85" y="95" fontSize="12" fill="#888">{"(ແບ່ງຮູບ)"}</text>
                  <path d="M 60,20 L 60,60" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="110" y="45" fontSize="12">{"4 cm"}</text>
                  <text x="40" y="135" fontSize="12">{"4 cm"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ເນື້ອທີ່ທັງໝົດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
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
                {"ຈົ່ງຄິດໄລ່ເນື້ອທີ່ຂອງຮູບສີ່ແຈສາກທີ່ຖືກຕັດ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
                <svg width="160" height="140">
                  <rect x="20" y="20" width="120" height="80" fill="none" stroke="#333" strokeWidth="2" />
                  <rect x="100" y="20" width="40" height="30" fill="#ECEFF1" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
                  <text x="70" y="15" fontSize="12">{"12 cm"}</text>
                  <text x="145" y="65" fontSize="12">{"8 cm"}</text>
                  <text x="115" y="45" fontSize="11" fill="red">{"(ສ່ວນຕັດ 4x3)"}</text>
                </svg>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span>{"ເນື້ອທີ່ທັງໝົດ ="}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm²"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u17_challenge_old, u17_challenge_new)

# Find Unit 17 summaryProblems
u17_summary_old = """    summaryProblems: [
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
                {"🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກ ມີລວງກວ້າງ 20m และ ລວງຍາວ 50m. ເນື້ອທີ່ຂອງດິນນາຕອນນີ້ເທົ່າກັບຈັກ a?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"a"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u17_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ດິນນາເປັນ ອາ (a): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🌾 ດິນນາຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກ ມີລວງກວ້າງ 20m ແລະ ລວງຍາວ 50m. ເນື້ອທີ່ຂອງດິນນາຕອນນີ້ເທົ່າກັບຈັກ a?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"a"}</span>
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
              {"ຈົ່ງຊອກຫາເນື້ອທີ່ດິນນາເປັນ ເຮັກຕາ (ha): "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"🌾 ດິນສວນຕອນໜຶ່ງເປັນຮູບສີ່ແຈສາກ ມີລວງກວ້າງ 300m ແລະ ລວງຍາວ 400m. ເນື້ອທີ່ຂອງສວນຕອນນີ້ເທົ່າກັບຈັກ ha?"}
              </p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                <span>{"ຄຳຕອບ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
                <span>{"ha"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u17_summary_old, u17_summary_new)

# Find Unit 17 answers
u17_answers_old = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"56 cm² (ແບ່ງເປັນຮູບສີ່ແຈສາກຂະໜາດ 4×4 = 16 cm² ແລະ ຮູບຂະໜາດ 4×10 = 40 cm², 16 + 40 = 56)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"10 a (ຍ້ອນເນື້ອທີ່ແມ່ນ 20 × 50 = 1000 m², ແລະ 1000 m² = 10 a)"}</span>],
        },
      ],"""

u17_answers_new = """        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="3">{"56 cm² (16 + 40 = 56 cm²)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="3_2">{"84 cm² (ຍ້ອນ 12 × 8 - 4 × 3 = 96 - 12 = 84 cm²)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="4">{"10 a (ຍ້ອນ 20 × 50 = 1000 m² = 10 a)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="4_2">{"12 ha (ຍ້ອນ 300 × 400 = 120000 m² = 12 ha)"}</span>],
        },
      ],"""

content = content.replace(u17_answers_old, u17_answers_new)


# ----------------- UNIT 18 -----------------
print("Updating Unit 18...")
# Find Unit 18 challengeProblems
u18_challenge_old = """    challengeProblems: {
      hintText: "📐 ລວງຍາວຂອບທັງໝົດຂອງຮູບກ່ອງສາກ = (ກວ້າງ + ຍາວ + ສູງ) × 4 ເດີ້!",
      problems: [
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
                  {"📦 ຕ້ອງການເຮັດໂຄງຮູບກ່ອງສາກດ້ວຍເສັ້ນລວດ ໂດຍມີລວງກວ້າງ 4cm, ລວງຍາວ 6cm ແລະ ລວງສູງ 5cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

u18_challenge_new = """    challengeProblems: {
      hintText: "📐 ລວງຍາວຂອບທັງໝົດຂອງຮູບກ່ອງສາກ = (ກວ້າງ + ຍາວ + ສູງ) × 4 ເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ່ອງສາກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📦 ຕ້ອງການເຮັດໂຄງຮູບກ່ອງສາກດ້ວຍເສັ້ນລວດ ໂດຍມີລວງກວ້າງ 4cm, ລວງຍາວ 6cm ແລະ ລວງສູງ 5cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
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
                {"ຈົ່ງແກ້ໂຈດບັນຫາໂຄງເສັ້ນລວດຮູບກ້ອງສາກ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"📦 ຕ້ອງການເຮັດໂຄງຮູບກ້ອງສາກ (ຮູບກ້ອນສາກ) ດ້ວຍເສັ້ນລວດ ໂດຍມີລວງຍາວຂອບແຕ່ລະຂ້າງ 6cm. ຈະຕ້ອງໃຊ້ເສັ້ນລວດຍາວທັງໝົດຈັກ cm?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },"""

content = content.replace(u18_challenge_old, u18_challenge_new)

# Find Unit 18 summaryProblems
u18_summary_old = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຕອບຄຳຖາມຈາກຮູບກ່ອງສາກຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="180" height="140">
                {/* 3D Wireframe of Cuboid */}
                {/* Back face */}
                <rect x="50" y="20" width="100" height="70" fill="none" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                {/* Connector lines */}
                <line x1="20" y1="50" x2="50" y2="20" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="120" y1="120" x2="150" y2="90" stroke="#333" strokeWidth="1.5" />
                <line x1="20" y1="120" x2="50" y2="90" stroke="#ccc" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="120" y1="50" x2="150" y2="20" stroke="#333" strokeWidth="1.5" />
                {/* Front face */}
                <rect x="20" y="50" width="100" height="70" fill="none" stroke="#333" strokeWidth="2" />
                {/* Solid outlines */}
                <line x1="120" y1="50" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="20" y1="120" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="150" y1="20" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                <line x1="50" y1="90" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                {/* Vertices labels */}
                <text x="15" y="45" fontSize="12" fontWeight="bold">{"A"}</text>
                <text x="125" y="45" fontSize="12" fontWeight="bold">{"B"}</text>
                <text x="125" y="135" fontSize="12" fontWeight="bold">{"C"}</text>
                <text x="15" y="135" fontSize="12" fontWeight="bold">{"D"}</text>
                <text x="45" y="15" fontSize="12" fontWeight="bold">{"E"}</text>
                <text x="155" y="15" fontSize="12" fontWeight="bold">{"F"}</text>
                <text x="155" y="105" fontSize="12" fontWeight="bold">{"G"}</text>
                <text x="45" y="105" fontSize="12" fontWeight="bold">{"H"}</text>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span>{"(1) ໜ້າທີ່ຂະໜານກັບ ໜ້າ ABCD ແມ່ນໜ້າ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span>{"(2) ໜ້າທີ່ຕັ້ງສາກກັບ ໜ້າ ABCD ມີທັງໝົດຈັກໜ້າ?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                  <span>{"ໜ້າ"}</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

u18_summary_new = """    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຂະໜານກັນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <svg width="180" height="140">
                <rect x="50" y="20" width="100" height="70" fill="none" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="20" y1="50" x2="50" y2="20" stroke="#ccc" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="120" y1="120" x2="150" y2="90" stroke="#333" strokeWidth="1.5" />
                <line x1="20" y1="120" x2="50" y2="90" stroke="#ccc" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="120" y1="50" x2="150" y2="20" stroke="#333" strokeWidth="1.5" />
                <rect x="20" y="50" width="100" height="70" fill="none" stroke="#333" strokeWidth="2" />
                <line x1="120" y1="50" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="20" y1="120" x2="120" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="150" y1="20" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                <line x1="50" y1="90" x2="150" y2="90" stroke="#333" strokeWidth="2" />
                <text x="15" y="45" fontSize="12" fontWeight="bold">{"A"}</text>
                <text x="125" y="45" fontSize="12" fontWeight="bold">{"B"}</text>
                <text x="125" y="135" fontSize="12" fontWeight="bold">{"C"}</text>
                <text x="15" y="135" fontSize="12" fontWeight="bold">{"D"}</text>
                <text x="45" y="15" fontSize="12" fontWeight="bold">{"E"}</text>
                <text x="155" y="15" fontSize="12" fontWeight="bold">{"F"}</text>
                <text x="155" y="105" fontSize="12" fontWeight="bold">{"G"}</text>
                <text x="45" y="105" fontSize="12" fontWeight="bold">{"H"}</text>
              </svg>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "20px" }}>
                <span>{"(1) ໜ້າທີ່ຂະໜານກັບ ໜ້າ ABCD ແມ່ນໜ້າ:"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
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
              {"ຈົ່ງຊອກຫາໜ້າທີ່ຕັ້ງສາກກັນ: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", padding: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "20px" }}>
                <span>{"(2) ໜ້າທີ່ຕັ້ງສາກກັບ ໜ້າ ABCD ມີທັງໝົດຈັກໜ້າ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ໜ້າ"}</span>
              </div>
            </div>
          </div>
        ),
      },
    ],"""

content = content.replace(u18_summary_old, u18_summary_new)

# Find Unit 18 answers
u18_answers_old = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) ຮູບກ້ອງສາກ, (2) 12 ເսັ້ນ, (3) 8 ຈອມ, (4) 6 ໜ້າ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"60 cm (ຍ້ອນມີຂອບແນວກວ້າງ 4, ແນວຍາວ 4, ແນວສູງ 4, (4+6+5)×4 = 60)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) ໜ້າ EFGH, (2) 4 ໜ້າ (ໜ້າ ABFE, BCGF, CDHG, DAEH)"}</span>],
        },
      ],"""

u18_answers_new = """    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [<span key="1">{"(1) ຮູບກ້ອງສາກ, (2) 12 ເເສັ້ນ, (3) 8 ຈອມ, (4) 6 ໜ້າ"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"60 cm (ຍ້ອນ (4+6+5) × 4 = 60)"}</span>],
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [<span key="2_2">{"72 cm (ຍ້ອນ 6 × 12 = 72)"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"ໜ້າ EFGH"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [<span key="3_2">{"4 ໜ້າ (ໜ້າ ABFE, BCGF, CDHG, DAEH)"}</span>],
        },
      ],"""

content = content.replace(u18_answers_old, u18_answers_new)

# Save the final content
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS: Successfully applied all fixes, issue reorganizations, and Chinese char fixes to units4.tsx!")
