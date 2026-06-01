import sys

filepath = 'src/data/units4.tsx'

with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

broken_start = '{"(2) 86'
start_idx = content.find(broken_start)

if start_idx == -1:
    print("Could not find the starting point in the file!")
    sys.exit(1)

replace_anchor = 'style={{\n                    display: "inline-block",'
replace_start_idx = content.find(replace_anchor, start_idx)

if replace_start_idx == -1:
    print("Could not find the replacement start anchor!")
    sys.exit(1)

# Find the answers items in Unit 8.
# We search for the 'answers: {' keyword which follows replace_start_idx
answers_idx = content.find('answers: {', replace_start_idx)
if answers_idx == -1:
    print("Could not find 'answers: {' after the starting point!")
    sys.exit(1)

# Inside answers: {, we look for the list items: [
items_idx = content.find('items: [', answers_idx)
if items_idx == -1:
    print("Could not find 'items: [' inside answers!")
    sys.exit(1)

# Find the 3rd 'questionNumber:' after items_idx.
# 1st: questionNumber: 1
# 2nd: questionNumber: 2
# 3rd: questionNumber: "ທ້າທາຍ 1"
curr_idx = items_idx
for i in range(3):
    curr_idx = content.find('questionNumber:', curr_idx + 1)
    if curr_idx == -1:
        print(f"Could not find questionNumber occurrence {i+1}!")
        sys.exit(1)

# Find the '{' that starts this 3rd item object. It should be before the questionNumber
object_start_idx = content.rfind('{', items_idx, curr_idx)
if object_start_idx == -1:
    print("Could not find the curly brace starting the 3rd answers item!")
    sys.exit(1)

print(f"Replacing from index {replace_start_idx} to {object_start_idx}")

# Replacement contains correct Unit 8 definition
replacement = """style={{
                    display: "inline-block",
                    width: "120px",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກຫານທີ່ມີຕົວເສດລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ)"}</span>
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(3) 68 ÷ 5 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(4) 79 ÷ 6 ="}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "150px",
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
      hintText: "ໃຊ້ການຫານເພື່ອຊອກຫາຈຳນວນຖົງ, ຕົວເສດທີ່ເຫຼືອແມ່ນຈຳນວນເຂົ້າໜົມທີ່ບໍ່ພໍໃស່ຖົງເດີ້!",
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາຕໍ່ໄປນີ້: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "20px",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  {"🍬 ມີເຂົ້າໜົມ 95 ກ້ອນ. ແບ່ງໃສ່ຖົງ ຖົງລະ 6 ກ້ອນ. ຈະໄດ້ເຂົ້າໜົມຈັກຖົງ ແລະ ຍັງເຫຼືອເຂົ້າໜົມຈັກກ້ອນ?"}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                  <span>{"ຄຳຕອບ:"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "200px",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                {"ຈົ່ງນຳໃຊ້ຄຸນລັກສະນະການຫານເພື່ອຊອກຫາຜົນຫານຢ່າງວ່ອງໄວ: "}{" "}
                <span className="point-label">{"(5 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFF9C4",
                    padding: "12px",
                    borderRadius: "6px",
                    fontSize: "18px",
                  }}
                >
                  {"ຄຸນລັກສະນະ: ຖ້າຫານຕົວຕັ້ງຫານ ແລະ ຕົວຫານໃຫ້ 10, ຜົນຫານຈະບໍ່ປ່ຽນແປງ."}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>{"(2) 150 ÷ 30 = 15 ÷"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "60px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"="}</span>
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
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              {"ຈົ່ງຄິດໄລ່ເລກຫານລຸ່ມນີ້: "}{" "}
              <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(1) 485 ÷ 21 ="}</span>
                <span
                  className="answer-blank"
                  style={{ display: "inline-block", width: "100px", height: "40px" }}
                ></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>{"(2) 422 ÷ 15 ="}</span>
                <span
                  className="answer-blank"
                  style={{ display: "inline-block", width: "100px", height: "40px" }}
                ></span>
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
              {"ຈົ່ງແກ້ໂຈດບັນຫາການແບ່ງກຸ່ມຕໍ່ໄປນີ້: "}{" "}
              <span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                paddingLeft: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "20px",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.5" }}>
                {"⛵ ມີນັກຮຽນທັງໝົດ 47 ຄົນ ຕ້ອງການຂີ່ເຮືອທ່ອງທ່ຽວ. ຖ້າເຮືອແຕ່ລະລຳສາມາດບັນຈຸຄົນໄດ້ຫຼາຍສຸດ 4 ຄົນ, ຈະຕ້ອງໃຊ້ເຮືອຢ່າງໜ້ອຍຈັກລຳ ຈຶ່ງຈະສາມາດພານັກຮຽນໄປໄດ້ທັງໝົດ?"}
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
                  style={{ display: "inline-block", width: "120px", height: "40px" }}
                ></span>
                <span>{"ລຳ"}</span>
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
          answers: [<span key="1">{"(1) 23 ເສດ 2, (2) 28 ເສດ 2"}</span>],
        },
        {
          questionNumber: 2,
          answers: [<span key="2">{"(3) 13 ເສດ 3, (4) 13 ເສດ 1"}</span>],
        },
        """

new_content = content[:replace_start_idx] + replacement + content[object_start_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully restored Unit 8 and prepared answers structure in units4.tsx!")
