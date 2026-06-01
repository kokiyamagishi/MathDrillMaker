const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 2 ====
const u2Old = `  {
    unitNumber: 2,
    unitTitle: "ເວລາ ແລະ ໄລຍະເວລາ",
    unitGoal: "ຮຽນຮູ້ເວລາ ແລະ ໄລຍະເວລາ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "ໜຶ່ງວັນມີ 24 ຊົ່ວໂມງ" },
      content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"2. ເວລາ ແລະ ໄລຍະເວລາ"}</h3>
        <p style={{ fontSize: "20px" }}>{"ພວກເຮົາໃຊ້ໂມງເພື່ອບອກເວລາ. ໜຶ່ງວັນມີ 24 ຊົ່ວໂມງ. ໜຶ່ງຊົ່ວໂມງມີ 60 ນາທີ."}</p>
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#FFF9C4", padding: "20px", borderRadius: "12px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕐</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"1:00"}</div>
            <div>{"ໜຶ່ງໂມງຕົງ"}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕒</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"3:00"}</div>
            <div>{"ສາມໂມງຕົງ"}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕕</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"6:00"}</div>
            <div>{"ຫົກໂມງຕົງ"}</div>
          </div>
        </div>
      </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"1 ມື້ (1 ວັນ) = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"1 ຊົ່ວໂມງເຄິ່ງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(4 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "20px" }}>
                <span>{"(4) ນາງນ້ອຍໃຊ້ເວລາເຮັດວຽກບ້ານ 60 ນາທີ. ເທົ່າກັບຈັກຊົ່ວໂມງ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດກ່ຽວກັບໄລຍະເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນາງດາວເລີ່ມອ່ານປຶ້ມເວລາ 8:00 ໂມງ ແລະ ອ່ານແລ້ວເວລາ 9:30 ໂມງ. ລາວໃຊ້ເວລາອ່ານປຶ້ມດົນປານໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມອອກຈາກຄິວລົດເວລາ 10:00 ໂມງ. ໃຊ້ເວລາເດີນທາງ 2 ຊົ່ວໂມງ. ລົດເມຈະໄປຮອດສະຖານີປາຍທາງເວລາຈັກໂມງ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໄລຍະເວລາ = ເວລາສິ້ນສຸດ - ເວລາເລີ່ມຕົ້ນ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ເຂັມສັ້ນຂອງໂມງ ຊີ້ບອກຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ເຂັມຍາວຂອງໂມງ ຊີ້ບອກຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ຕອນເຊົ້າຂອງມື້ໃໝ່ ເລີ່ມແຕ່ເວລາໃດ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"1 ຊົ່ວໂມງ ມີຈັກນາທີ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
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
            <span key="1">{"(1) 60, (2) 24, (3) 1, (4) 120, (5) 90 (ເພາະ 60 + 30)"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="2">{"(1) 1 ຊົ່ວໂມງ 30 ນາທີ, (2) 12:00 ໂມງ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="3">{"(1) ຊົ່ວໂມງ, (2) ນາທີ, (3) ທ່ຽງຄືນ (24:00 ຫຼື 0:00), (4) 60 ນາທີ"}</span>
          ]
        }
      ],
      advice: "ການຮູ້ເວລາຊ່ວຍໃຫ້ນ້ອງໆເປັນຄົນກົງຕໍ່ເວລາ. ຝຶກເບິ່ງໂມງຕົວຈິງຢູ່ບ້ານເລື້ອຍໆຈະຊ່ວຍໃຫ້ຈື່ໄດ້ດີຂຶ້ນ."
    }
  }`;

const u2New = `  {
    unitNumber: 2,
    unitTitle: "ເວລາ ແລະ ໄລຍະເວລາ",
    unitGoal: "ຮຽນຮູ້ເວລາ, ໄລຍະເວລາ ແລະ ວິນາທີ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: {
      hint: { text: "1 ນາທີມີ 60 ວິນາທີ. 1 ຊົ່ວໂມງມີ 60 ນາທີ." },
      content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"2. ເວລາ ແລະ ໄລຍະເວລາ"}</h3>
        <p style={{ fontSize: "20px" }}>{"ພວກເຮົາໃຊ້ໂມງເພື່ອບອກເວລາ. ໜຶ່ງວັນມີ 24 ຊົ່ວໂມງ. ໜຶ່ງຊົ່ວໂມງມີ 60 ນາທີ. ແລະ ໜຶ່ງນາທີມີ 60 ວິນາທີ (ວິນາທີແມ່ນຫົວໜ່ວຍທີ່ນ້ອຍທີ່ສຸດທີ່ເຂັມນ້ອຍໆຍ່າງໄວໆນັ້ນເອງ)."}</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ backgroundColor: "#E8F5E9", padding: "16px", borderRadius: "12px", border: "2px solid #4CAF50", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2E7D32" }}>{"1 ມື້ (ວັນ) = 24 ຊົ່ວໂມງ"}</div>
          </div>
          <div style={{ backgroundColor: "#E3F2FD", padding: "16px", borderRadius: "12px", border: "2px solid #2196F3", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1565C0" }}>{"1 ຊົ່ວໂມງ = 60 ນາທີ"}</div>
          </div>
          <div style={{ backgroundColor: "#FFF3E0", padding: "16px", borderRadius: "12px", border: "2px solid #FF9800", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#E65100" }}>{"1 ນາທີ = 60 ວິນາທີ"}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#FFF9C4", padding: "20px", borderRadius: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕐</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"1:00"}</div>
            <div>{"ໜຶ່ງໂມງຕົງ"}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕒</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"3:00"}</div>
            <div>{"ສາມໂມງຕົງ"}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕕</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"6:00"}</div>
            <div>{"ຫົກໂມງຕົງ"}</div>
          </div>
        </div>
      </div>
      )
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"1 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ວິນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"1 ມື້ (1 ວັນ) = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ຊົ່ວໂມງ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"1 ຊົ່ວໂມງ 10 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ການບວກລົບເວລາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 1.5 ຄະແນນ, ລວມ 3 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"10 ນາທີ + 20 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(6)"}</span>
                <span>{"30 ນາທີ + 30 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 3,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(3 ຄະແນນ)"}</span></p>
            <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "20px" }}>
                <span>{"(7) ນາງນ້ອຍໃຊ້ເວລາເຮັດວຽກບ້ານ 60 ນາທີ. ເທົ່າກັບຈັກຊົ່ວໂມງ?"}</span>
                <div style={{ marginTop: "12px", paddingLeft: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                  <span>{"ຊົ່ວໂມງ"}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດກ່ຽວກັບໄລຍະເວລາ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນາງດາວເລີ່ມອ່ານປຶ້ມເວລາ 8:00 ໂມງ ແລະ ອ່ານແລ້ວເວລາ 9:30 ໂມງ. ລາວໃຊ້ເວລາອ່ານປຶ້ມດົນປານໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ລົດເມອອກຈາກຄິວລົດເວລາ 10:00 ໂມງ. ໃຊ້ເວລາເດີນທາງ 2 ຊົ່ວໂມງ. ລົດເມຈະໄປຮອດສະຖານີປາຍທາງເວລາຈັກໂມງ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດກ່ຽວກັບວິນາທີ ແລະ ການບວກລົບເວລາ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ທ້າວຄຳແລ່ນແຂ່ງຂັນໃຊ້ເວລາ 1 ນາທີ 20 ວິນາທີ. ຖ້າປ່ຽນເປັນວິນາທີທັງໝົດ ຈະເທົ່າກັບຈັກວິນາທີ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ວິນາທີ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ພັກຜ່ອນຕອນທ່ຽງ 60 ນາທີ. ຖ້າກິນເຂົ້າໃຊ້ເວລາ 20 ນາທີ, ຈະເຫຼືອເວລາຫລິ້ນຈັກນາທີ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ນາທີ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໄລຍະເວລາ = ເວລາສິ້ນສຸດ - ເວລາເລີ່ມຕົ້ນ. 1 ນາທີ = 60 ວິນາທີ."
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຄວາມຮູ້ກ່ຽວກັບເວລາ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"1 ຊົ່ວໂມງ ມີຈັກນາທີ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"1 ນາທີ ມີຈັກວິນາທີ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ການຄິດໄລ່ເວລາ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"15 ນາທີ + 15 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"50 ວິນາທີ - 20 ວິນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
                <span>{"ວິນາທີ"}</span>
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
            <span key="1">{"(1) 60, (2) 60, (3) 24, (4) 70"}</span>
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="2">{"(5) 30, (6) 60"}</span>
          ]
        },
        {
          questionNumber: 3,
          answers: [
            <span key="3">{"(7) 1 ຊົ່ວໂມງ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="4">{"(1) 1 ຊົ່ວໂມງ 30 ນາທີ, (2) 12:00 ໂມງ"}</span>
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 2",
          answers: [
            <span key="5">{"(3) 80 ວິນາທີ, (4) 40 ນາທີ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="6">{"(1) 60 ນາທີ, (2) 60 ວິນາທີ"}</span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 2",
          answers: [
            <span key="7">{"(3) 30 ນາທີ, (4) 30 ວິນາທີ"}</span>
          ]
        }
      ],
      advice: "ການຮູ້ເວລາຊ່ວຍໃຫ້ນ້ອງໆເປັນຄົນກົງຕໍ່ເວລາ. 1 ນາທີ ມີ 60 ວິນາທີ ຢ່າລືມເດີ້!"
    }
  }`;

content = content.replace(u2Old, u2New);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 2 updated');
