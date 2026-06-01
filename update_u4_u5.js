const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 4 ====
const u4BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຜ່ານຈຸດໃຈກາງ ຈາກຂອບໜຶ່ງຫາອີກຂອບໜຶ່ງ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຈາກຈຸດໃຈກາງ ຫາຂອບວົງມົນ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ລັດສະໝີ ມີຄວາມຍາວເປັນແນວໃດ ທຽບກັບ ເສັ້ນຜ່າກາງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"ໝາກບານ ເປັນຕົວແທນຂອງຮູບຊົງຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u4BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບວົງມົນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຜ່ານຈຸດໃຈກາງ ຈາກຂອບໜຶ່ງຫາອີກຂອບໜຶ່ງ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ເສັ້ນທີ່ຂີດຈາກຈຸດໃຈກາງ ຫາຂອບວົງມົນ ເອີ້ນວ່າຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕອບຄຳຖາມກ່ຽວກັບຄວາມສຳພັນ ແລະ ຮູບຊົງ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ລັດສະໝີ ມີຄວາມຍາວເປັນແນວໃດ ທຽບກັບ ເສັ້ນຜ່າກາງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"ໝາກບານ ເປັນຕົວແທນຂອງຮູບຊົງຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u4ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຄິດໄລ່ຄວາມຍາວລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີລັດສະໝີຍາວ 4 cm. ເສັ້ນຜ່າກາງຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີເສັ້ນຜ່າກາງຍາວ 10 cm. ລັດສະໝີຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຜ່າກາງ = ລັດສະໝີ x 2. ລັດສະໝີ = ເສັ້ນຜ່າກາງ ÷ 2."
    },`;

const u4ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາຄວາມຍາວຂອງເສັ້ນຜ່າກາງ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີລັດສະໝີຍາວ 4 cm. ເສັ້ນຜ່າກາງຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງຊອກຫາຄວາມຍາວຂອງລັດສະໝີ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ວົງມົນໜຶ່ງມີເສັ້ນຜ່າກາງຍາວ 10 cm. ລັດສະໝີຂອງວົງມົນນີ້ຍາວເທົ່າໃດ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"cm"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ເສັ້ນຜ່າກາງ = ລັດສະໝີ x 2. ລັດສະໝີ = ເສັ້ນຜ່າກາງ ÷ 2."
    },`;

const u4SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຖ້າວົງມົນມີລັດສະໝີ 15 cm, ເສັ້ນຜ່າກາງຈະແມ່ນເທົ່າໃດ cm?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຮູບຮ່າງຂອງໜ້າປັດໂມງທົ່ວໄປ ເປັນຮູບຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u4SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຄິດໄລ່: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"ຖ້າວົງມົນມີລັດສະໝີ 15 cm, ເສັ້ນຜ່າກາງຈະແມ່ນເທົ່າໃດ cm?"}</span>
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
            <p>{"ຈົ່ງຕອບຄຳຖາມ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຮູບຮ່າງຂອງໜ້າປັດໂມງທົ່ວໄປ ເປັນຮູບຫຍັງ?"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "120px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u4BasicOld, u4BasicNew);
content = content.replace(u4ChallengeOld, u4ChallengeNew);
content = content.replace(u4SummaryOld, u4SummaryNew);

// ==== Unit 5 ====
const u5BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ ແລະ ຊອກຕົວເສດ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"10 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"15 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"19 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"26 ÷ 6 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"40 ÷ 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u5BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຫານລຸ່ມນີ້ ແລະ ຊອກຕົວເສດ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"10 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"15 ÷ 4 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"19 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
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
            <div style={{ paddingLeft: "16px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
              <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໝາກກ້ວຍ 26 ໜ່ວຍ, ແບ່ງໃຫ້ລີງ 6 ໂຕເທົ່າໆກັນ. ແຕ່ລະໂຕຈະໄດ້ຈັກໜ່ວຍ ແລະ ເຫຼືອໝາກກ້ວຍຈັກໜ່ວຍ?"}</span>
              <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                <span>{"ຕອບ: ໄດ້ໂຕລະ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px", margin: "0 10px" }}></span>
                <span>{"ໜ່ວຍ, ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px", margin: "0 10px" }}></span>
                <span>{"ໜ່ວຍ."}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u5ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີປຶ້ມ 25 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກຫົວ ແລະ ເຫຼືອຈັກຫົວ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 30 ໜ່ວຍ, ຈັດໃສ່ກ່ອງ ກ່ອງລະ 8 ໜ່ວຍ. ຈະໄດ້ຈັກກ່ອງ ແລະ ເຫຼືອໄຂ່ຈັກໜ່ວຍ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກ່ອງ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນ 17 ຄົນ ຕ້ອງການນັ່ງໂຕະ ໂຕະລະ 3 ຄົນ. ຕ້ອງໃຊ້ໂຕະຈັກໜ່ວຍ ຈຶ່ງຈະພອນັ່ງທຸກຄົນ? (ລະວັງ: ຕົວເສດກໍຕ້ອງນັ່ງໂຕະ)"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຕ້ອງໃຊ້ໂຕະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 45,000 ກີບ, ຢາກຊື້ປຶ້ມຫົວລະ 6,000 ກີບ. ຈະຊື້ໄດ້ຫຼາຍທີ່ສຸດຈັກຫົວ ແລະ ເງິນທອນເຫຼືອເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຊື້ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເງິນທອນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກີບ."}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສຳລັບຂໍ້ 3, ຄົນທີ່ເຫຼືອ (ຕົວເສດ) ກໍຕ້ອງໄດ້ນັ່ງໂຕະຄືກັນ ສະນັ້ນຕ້ອງບວກໂຕະເພີ່ມອີກ 1 ໜ່ວຍ."
    },`;

const u5ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການແບ່ງປັນ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີປຶ້ມ 25 ຫົວ, ແບ່ງໃຫ້ນັກຮຽນ 4 ຄົນ ຄົນລະເທົ່າໆກັນ. ແຕ່ລະຄົນຈະໄດ້ຈັກຫົວ ແລະ ເຫຼືອຈັກຫົວ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 30 ໜ່ວຍ, ຈັດໃສ່ກ່ອງ ກ່ອງລະ 8 ໜ່ວຍ. ຈະໄດ້ຈັກກ່ອງ ແລະ ເຫຼືອໄຂ່ຈັກໜ່ວຍ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກ່ອງ, ເຫຼືອ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາທີ່ຕ້ອງພິຈາລະນາຕົວເສດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນ 17 ຄົນ ຕ້ອງການນັ່ງໂຕະ ໂຕະລະ 3 ຄົນ. ຕ້ອງໃຊ້ໂຕະຈັກໜ່ວຍ ຈຶ່ງຈະພອນັ່ງທຸກຄົນ? (ລະວັງ: ຕົວເສດກໍຕ້ອງນັ່ງໂຕະ)"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຕ້ອງໃຊ້ໂຕະ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ."}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີເງິນ 45,000 ກີບ, ຢາກຊື້ປຶ້ມຫົວລະ 6,000 ກີບ. ຈະຊື້ໄດ້ຫຼາຍທີ່ສຸດຈັກຫົວ ແລະ ເງິນທອນເຫຼືອເທົ່າໃດ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ: ຊື້ໄດ້"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຫົວ, ເງິນທອນ"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ກີບ."}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ສຳລັບຂໍ້ 3, ຄົນທີ່ເຫຼືອ (ຕົວເສດ) ກໍຕ້ອງໄດ້ນັ່ງໂຕະຄືກັນ ສະນັ້ນຕ້ອງບວກໂຕະເພີ່ມອີກ 1 ໜ່ວຍ."
    },`;

const u5SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຊອກຫາຄຳຕອບ: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"13 ÷ 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"20 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"33 ÷ 5 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"48 ÷ 7 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span>
                <span>{"ມີເຂົ້າໜົມ 19 ກ້ອນ ແບ່ງໃຫ້ 5 ຄົນ. ຈະໄດ້ຄົນລະເທົ່າໃດ ແລະ ເຫຼືອເທົ່າໃດ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "12px" }}>
                  <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ, ເຫຼືອ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ."}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u5SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຈົ່ງຊອກຫາຄຳຕອບ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span>{"13 ÷ 2 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"20 ÷ 3 ="}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                <span>{"ເສດ"}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span>
                <span>{"ມີເຂົ້າໜົມ 19 ກ້ອນ ແບ່ງໃຫ້ 5 ຄົນ. ຈະໄດ້ຄົນລະເທົ່າໃດ ແລະ ເຫຼືອເທົ່າໃດ?"}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "12px" }}>
                  <span>{"ຕອບ: ໄດ້ຄົນລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ, ເຫຼືອ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "50px", height: "40px" }}></span>
                  <span>{"ກ້ອນ."}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u5BasicOld, u5BasicNew);
content = content.replace(u5ChallengeOld, u5ChallengeNew);
content = content.replace(u5SummaryOld, u5SummaryNew);

// Update Unit 5 Answers
content = content.replace(/"\(1\) 3 ເສດ 1, \(2\) 3 ເສດ 3, \(3\) 3 ເສດ 4, \(4\) 4 ເສດ 2, \(5\) 5 ເສດ 5"/, '"(1) 3 ເສດ 1, (2) 3 ເສດ 3, (3) 3 ເສດ 4, (4) 4 ເສດ 2"');
content = content.replace(/"\(1\) 6 ເສດ 1, \(2\) 6 ເສດ 2, \(3\) 6 ເສດ 3, \(4\) 6 ເສດ 6, \(5\) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"/, '"(1) 6 ເສດ 1, (2) 6 ເສດ 2, (3) ໄດ້ 3 ກ້ອນ ເສດ 4 ກ້ອນ"');

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 4 and 5 updated');
