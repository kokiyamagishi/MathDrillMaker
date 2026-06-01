import os

file_path = "/Users/openclaw/Antigravity/MathDrillMaker/src/data/units2.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

original_had_crlf = "\r\n" in content
content = content.replace("\r\n", "\n")

# Target block for Page 17 Problem 1 layout (without styling)
old_block = """              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={8} maxLength={8.5} objectType="pencil" />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "35px" }}
                  ></span>{" "}
                  {"cm"}
                </p>
              </div>
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ຢາງລົບ:"}
                </p>
                <Ruler
                  measuredLength={3.6}
                  maxLength={4.5}
                  objectType="eraser"
                />
                <p style={{ margin: "4px 0" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>"""

new_block = """              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(1) ສໍດຳ:"}
                </p>
                <Ruler measuredLength={8} maxLength={8.5} objectType="pencil" />
                <p style={{ margin: "4px 0", fontSize: "22px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "35px", fontSize: "22px" }}
                  ></span>{" "}
                  {"cm"}
                </p>
              </div>
              <div style={{ width: "48%" }}>
                <p style={{ margin: "4px 0", fontWeight: "bold" }}>
                  {"(2) ຢາງລົບ:"}
                </p>
                <Ruler
                  measuredLength={3.6}
                  maxLength={4.5}
                  objectType="eraser"
                />
                <p style={{ margin: "4px 0", fontSize: "22px" }}>
                  {"ຕອບ: "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px", fontSize: "22px" }}
                  ></span>{" "}
                  {"cm "}{" "}
                  <span
                    className="answer-blank"
                    style={{ minWidth: "20px", fontSize: "22px" }}
                  ></span>{" "}
                  {"mm"}
                </p>
              </div>"""

old_block = old_block.replace("\r\n", "\n")
new_block = new_block.replace("\r\n", "\n")

if old_block in content:
    content = content.replace(old_block, new_block)
    print("Styling for Page 17 Problem 1 applied successfully.")
else:
    print("Could not find the target block on Page 17 to style.")

if original_had_crlf:
    content = content.replace("\n", "\r\n")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
