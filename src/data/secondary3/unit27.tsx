import React from "react";
import { UnitData } from "../units2";

// Math-Drill standard Fraction notation (Horizontal Line, Numerator top, Denominator bottom)
const Fraction = ({ num, den }: { num: React.ReactNode; den: React.ReactNode }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", padding: "0 4px" }}>
    <span style={{ borderBottom: "1px solid currentColor", padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{num}</span>
    <span style={{ padding: "0 2px", lineHeight: "1.1", fontSize: "1.375rem" }}>{den}</span>
  </span>
);

export const unit27Data: UnitData = {
  unitNumber: 27,
  unitTitle: "ພາກທີ VIII - ບົດທີ 27: ຮູບໜ່ວຍມົນ ແລະ ຮູບກ້ອນມົນ",
  unitGoal: "ຮຽນຮູ້ ແລະ ນຳໃຊ້ສູດຄິດໄລ່ ເນື້ອທີ່ໜ້າ ແລະ ບໍລິມາດຂອງຮູບໜ່ວຍມົນ ແລະ ຮູບກ້ອນມົນ ຢ່າງຖືກຕ້ອງ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.3 ໜ້າ 145-150",
  subSections: [
    {
      title: "1. ເນື້ອທີ່ໜ້າຂອງຮູບໜ່ວຍມົນ (Surface Area of a Sphere)",
      keyPoint: {
        title: "ສູດເນື້ອທີ່ໜ້າຂອງຮູບໜ່ວຍມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບໜ່ວຍມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r"}</span> {" ຈະມີເນື້ອທີ່ໜ້າທັງໝົດຄິດໄລ່ຕາມສູດລຸ່ມນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#E3F2FD", borderRadius: "10px", border: "1px solid #90CAF9", fontSize: "1.25rem", color: "#1565C0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດເນື້ອທີ່ໜ້າ: "}
                <span className="math" style={{ marginLeft: "6px", fontWeight: "bold" }}>
                  {"S = 4πr²"}
                </span>
              </div>
              <div>{"• ເມື່ອ "} <span className="math">{"r"}</span> {" ແມ່ນລັດສະໝີ (ເຄິ່ງໜຶ່ງຂອງເສັ້ນຜ່ານໃຈກາງ) ແລະ "} <span className="math">{"π ≈ 3.14"}</span></div>
            </div>

            {/* 3D Sphere SVG Visual Asset */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "12px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #C8E6C9", fontSize: "1.15rem", color: "#2E7D32" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "100%" }}>
                <span style={{ fontWeight: "bold" }}>{"ຮູບສະແດງຮູບໜ່ວຍມົນ 3 ມິຕິ (Sphere)"}</span>
                <svg viewBox="0 0 200 130" style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                  <defs>
                    <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#E8F5E9" />
                      <stop offset="50%" stopColor="#81C784" />
                      <stop offset="100%" stopColor="#2E7D32" />
                    </radialGradient>
                  </defs>
                  
                  {/* The Sphere outer circle */}
                  <circle cx="100" cy="65" r="50" fill="url(#sphereGrad)" stroke="#1B5E20" strokeWidth="1.5" />
                  
                  {/* Equator Ellipse (Front half) */}
                  <path d="M 50,65 A 50,15 0 0,0 150,65" fill="none" stroke="#1B5E20" strokeWidth="1.5" />
                  {/* Equator Ellipse (Back half dashed) */}
                  <path d="M 50,65 A 50,15 0 0,1 150,65" fill="none" stroke="#1B5E20" strokeWidth="1.5" strokeDasharray="4,4" />
                  
                  {/* Center Point */}
                  <circle cx="100" cy="65" r="2.5" fill="#B71C1C" />
                  <text x="96" y="58" fill="#B71C1C" fontSize="8" fontWeight="bold">{"O"}</text>
                  
                  {/* Radius line */}
                  <line x1="100" y1="65" x2="150" y2="65" stroke="#B71C1C" strokeWidth="2" />
                  <text x="122" y="58" fill="#B71C1C" fontSize="10" fontWeight="bold">{"r"}</text>
                </svg>
              </div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ຂໍ້ແນະນຳ: ໃຫ້ຂຽນຄຳຕອບຕິດຄ່າ π ໄວ້ໄດ້ເລີຍ ເຊັ່ນ: ຖ້າຄິດໄລ່ໄດ້ 36 × π ໃຫ້ຂຽນ 36π ໃສ່ຫ້ອງຕອບເດີ້!",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາເນື້ອທີ່ໜ້າ S ຂອງຮູບໜ່ວຍມົນຕໍ່ໄປນີ້ (ຂຽນຕອບຕິດຄ່າ π): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບໜ່ວຍມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 3 cm"}</span> {" ມີເນື້ອທີ່ໜ້າແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບໜ່ວຍມົນທີ່ມີເສັ້ນຜ່ານໃຈກາງ "} <span className="math">{"d = 8 cm"}</span> {" (ລັດສະໝີ r = 4 cm) ມີເນື້ອທີ່ໜ້າແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບໜ່ວຍມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 5 cm"}</span> {" ມີເນື້ອທີ່ໜ້າແມ່ນຈັກ cm²?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຊອກຫາຄ່າທີ່ຕ້ອງການຂອງຮູບໜ່ວຍມົນຕໍ່ໄປນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ເນື້ອທີ່ໜ້າໂຄ້ງຂອງຮູບເຄິ່ງໜ່ວຍມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 6 cm"}</span> {" ແມ່ນຈັກ cm²? (ຄິດໄລ່ສະເພາະໜ້າໂຄ້ງ, ຕອບຕິດຄ່າ π)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າຮູບໜ່ວຍມົນໜຶ່ງມີເນື້ອທີ່ໜ້າແມ່ນ "} <span className="math">{"144π cm²"}</span> {". ລັດສະໝີ "} <span className="math">{"r"}</span> {" ຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ບໍລິມາດຂອງຮູບກ້ອນມົນ (Volume of a Sphere)",
      keyPoint: {
        title: "ສູດບໍລິມາດຂອງຮູບກ້ອນມົນ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ບໍລິມາດ (V) ຂອງຮູບກ້ອນມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r"}</span> {" ແມ່ນຄິດໄລ່ຕາມສູດລຸ່ມນີ້:"}
            </p>
            <div style={{ padding: "12px 16px", backgroundColor: "#FFFDE7", borderRadius: "10px", border: "1px solid #FFF59D", fontSize: "1.25rem", color: "#F57F17", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {"• ສູດບໍລິມາດ: "}
                <span className="math" style={{ marginLeft: "6px", fontWeight: "bold" }}>
                  {"V = "} <Fraction num="4" den="3" /> {"πr³"}
                </span>
              </div>
              <div>{"• ເມື່ອ "} <span className="math">{"r³"}</span> {" ແມ່ນລັດສະໝີຂຶ້ນກຳລັງສາມ "} <span className="math">{"(r × r × r)"}</span></div>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ບໍລິມາດຈະໃຊ້ຫົວໜ່ວຍເປັນຊັງຕີແມັດກ້ອນ (cm³) ຢ່າລືມຄູນລັດສະໝີກັນ 3 ເທື່ອເດີ້!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຄຳຖາມທີ 1: ຈົ່ງຊອກຫາບໍລິມາດ V ຂອງຮູບກ້ອນມົນຕໍ່ໄປນີ້ (ຂຽນຕອບຕິດຄ່າ π): "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ຮູບກ້ອນມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 3 cm"}</span> {" ມີບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຮູບກ້ອນມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 6 cm"}</span> {" ມີບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                  <span>{"ຮູບກ້ອນມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 9 cm"}</span> {" ມີບໍລິມາດແມ່ນຈັກ cm³?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
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
                {"ຄຳຖາມທີ 2: ຈົ່ງຄິດໄລ່ຫາຄ່າທີ່ກ່ຽວຂ້ອງລຸ່ມນີ້: "}<span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                  <span>{"ບໍລິມາດຂອງຮູບເຄິ່ງກ້ອນມົນທີ່ມີລັດສະໝີ "} <span className="math">{"r = 3 cm"}</span> {" ແມ່ນຈັກ cm³? (ຕອບຕິດຄ່າ π)"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
                  <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                  <span>{"ຖ້າບໍລິມາດຂອງຮູບກ້ອນມົນໜຶ່ງແມ່ນ "} <span className="math">{"288π cm³"}</span> {". ລັດສະໝີ "} <span className="math">{"r"}</span> {" ຂອງມັນແມ່ນຈັກ cm?"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    hintText: "💡 ບົດທ້າທາຍ: ຕັ້ງໃຈຄິດໄລ່ ແລະ ສັງເກດເບິ່ງການພົວພັນລະຫວ່າງຮູບຊົງສາມມິຕິຕ່າງໆເດີ້!",
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ການພົວພັນລະຫວ່າງຮູບຊົງກະບອກ ແລະ ຮູບໜ່ວຍມົນ (Cylinder and Sphere Interaction): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ຮູບຊົງກະບອກໜຶ່ງມີລັດສະໝີພື້ນ 6 cm ແລະ ຄວາມສູງ 12 cm ບັນຈຸຮູບໜ່ວຍມົນທີ່ມີລັດສະໝີ 6 cm ໄວ້ທາງໃນໄດ້ພໍດີ. ຈົ່ງຄິດໄລ່ບໍລິມາດຂອງສ່ວນທີ່ເຫຼືອພາຍໃນຮູບຊົງກະບອກຫຼັງຈາກລົບບໍລິມາດຂອງຮູບໜ່ວຍມົນອອກ (ຕອບຕິດຄ່າ π)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: ບໍລິມາດສ່ວນທີ່ເຫຼືອແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm³"}</span>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໜ້າຕັດພຽງຂອງຮູບໜ່ວຍມົນ (Cross Section of a Sphere): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"(2) ໜ້າຕັດພຽງໜຶ່ງຕັດຮູບໜ່ວຍມົນ ໂດຍໄລຍະຫ່າງຈາກໃຈກາງຮູບໜ່ວຍມົນຫາໜ້າຕັດພຽງແມ່ນ 3 cm. ຖ້າລັດສະໝີຂອງວົງມົນໜ້າຕັດທີ່ໄດ້ຮັບແມ່ນ 4 cm. ຈົ່ງຊອກຫາລັດສະໝີ R ຂອງຮູບໜ່ວຍມົນນັ້ນ ( cm)."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
              <span>{"ຕອບ: R ="}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
              <span>{"cm"}</span>
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
            {"ອັດຕາສ່ວນບໍລິມາດຮູບໜ່ວຍມົນ ແລະ ຮູບຊົງກະບອກ (Sphere to Cylinder Volume Ratio): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຈົ່ງຊອກຫາອັດຕາສ່ວນລະຫວ່າງ ບໍລິມາດຂອງຮູບໜ່ວຍມົນ ແລະ ບໍລິມາດຂອງຮູບຊົງກະບອກ ທີ່ສາມາດບັນຈຸຮູບໜ່ວຍມົນນັ້ນໄດ້ພໍດີ (ລັດສະໝີພື້ນ ແລະ ຄວາມສູງຂອງຮູບຊົງກະບອກເທົ່າກັບເສັ້ນຜ່ານໃຈກາງຂອງຮູບໜ່ວຍມົນ). ຕອບເປັນເລກສ່ວນ."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ອັດຕາສ່ວນແມ່ນ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
          </div>
        </div>
      )
    },
    {
      number: 2,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ການພົວພັນລະຫວ່າງເນື້ອທີ່ໜ້າ ແລະ ບໍລິມາດ (Surface Area to Volume Relation): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"(2) ຖ້າເນື້ອທີ່ໜ້າຂອງຮູບໜ່ວຍມົນໜຶ່ງແມ່ນ "} <span className="math">{"100π cm²"}</span> {". ຈົ່ງຄິດໄລ່ບໍລິມາດ V ຂອງຮູບກ້ອນມົນນັ້ນ (ຕອບຕິດຄ່າ π ແລະ ເປັນເລກສ່ວນ ເຊັ່ນ: 500π/3)."}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: V ="}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
            <span>{"cm³"}</span>
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
          <span key="1">{"(1) 36π (ເນື້ອທີ່ໜ້າ S = 4 × π × 3² = 36π cm²)"}</span>,
          <span key="2">{"(2) 64π (ລັດສະໝີ r = 4 cm ➔ S = 4 × π × 4² = 64π cm²)"}</span>,
          <span key="3">{"(3) 100π (S = 4 × π × 5² = 100π cm²)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="4">{"(1) 72π (ເນື້ອທີ່ໜ້າໂຄ້ງເຄິ່ງໜ່ວຍມົນ = 2 × π × 6² = 72π cm²)"}</span>,
          <span key="5">{"(2) 6 (ຈາກສູດ S = 4πr² ➔ 144π = 4πr² ➔ r² = 36 ➔ r = 6 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="6">{"144π (ບໍລິມາດຊົງກະບອກ = π × 6² × 12 = 432π cm³, ບໍລິມາດໜ່ວຍມົນ = (4/3) × π × 6³ = 288π cm³ ➔ ສ່ວນທີ່ເຫຼືອ = 432π - 288π = 144π cm³)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 2",
        answers: [
          <span key="7">{"5 (ອີງຕາມປີຕາກໍ R = √(3² + 4²) = √25 = 5 cm)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="8">{"2/3 (ບໍລິມາດໜ່ວຍມົນ V_s = (4/3)πr³, ບໍລິມາດຊົງກະບອກ V_c = πr² × 2r = 2πr³ ➔ V_s / V_c = (4/3) / 2 = 2/3)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 2",
        answers: [
          <span key="9">{"500π/3 (ຈາກ S = 100π ➔ 4πr² = 100π ➔ r = 5 cm ➔ ບໍລິມາດ V = (4/3) × π × 5³ = 500π/3 cm³)"}</span>
        ]
      }
    ],
    advice: "ຮູບໜ່ວຍມົນ ແລະ ຮູບກ້ອນມົນເປັນຮູບຊົງທີ່ມີປະສິດທິພາບທີ່ສຸດໃນທຳມະຊາດ ເຊັ່ນ: ຢອດນ້ຳ ຫຼື ດວງດາວຕ່າງໆ ໝັ່ນຄິດໄລ່ ແລະ ສຶກສາເພີ່ມເຕີມເດີ້!"
  }
};

export const dummyanswers = {
  items: [
    {
      questionNumber: 1,
      answers: [
        <span key="10">{"36π (V = (4/3) × π × 3³ = 36π cm³)"}</span>,
        <span key="11">{"288π (V = (4/3) × π × 6³ = 288π cm³)"}</span>,
        <span key="12">{"972π (V = (4/3) × π × 9³ = 972π cm³)"}</span>
      ]
    },
    {
      questionNumber: 2,
      answers: [
        <span key="13">{"18π (ບໍລິມາດເຄິ່ງກ້ອນມົນ = (2/3) × π × 3³ = 18π cm³)"}</span>,
        <span key="14">{"6 (ຈາກສູດ V = (4/3)πr³ ➔ 288π = (4/3)πr³ ➔ r³ = 216 ➔ r = 6 cm)"}</span>
      ]
    }
  ]
};
