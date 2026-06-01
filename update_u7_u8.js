const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 7 ====
const u7BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span><span>{"1 m ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span><span>{"2 cm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"mm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span><span>{"100 cm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"m"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span><span>{"50 mm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span><span>{"3 m ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u7BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span><span>{"1 m ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span><span>{"2 cm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"mm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span><span>{"100 cm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"m"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍຄວາມຍາວຕໍ່ໄປນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span><span>{"50 mm ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span><span>{"3 m ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"cm"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u7ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໄມ້ທ່ອນໜຶ່ງຍາວ 1 m 20 cm. ຖ້າປ່ຽນເປັນ cm ທັງໝົດ ຈະເທົ່າກັບຈັກ cm?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"cm"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ເຊືອກເສັ້ນໜຶ່ງຍາວ 50 cm. ຖ້າເອົາ 2 ເສັ້ນມາຕໍ່ກັນ ຈະຍາວເທົ່າໃດ m?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"m"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "1 m = 100 cm. ດັ່ງນັ້ນ 1 m 20 cm = 100 cm + 20 cm."
    },`;

const u7ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຄວາມຍາວ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໄມ້ທ່ອນໜຶ່ງຍາວ 1 m 20 cm. ຖ້າປ່ຽນເປັນ cm ທັງໝົດ ຈະເທົ່າກັບຈັກ cm?"}</span>
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
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການຕໍ່ຄວາມຍາວ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ເຊືອກເສັ້ນໜຶ່ງຍາວ 50 cm. ຖ້າເອົາ 2 ເສັ້ນມາຕໍ່ກັນ ຈະຍາວເທົ່າໃດ m?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"m"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "1 m = 100 cm. ດັ່ງນັ້ນ 1 m 20 cm = 100 cm + 20 cm."
    },`;

const u7SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(1)"}</span>{" 4 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" mm"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(2)"}</span>{" 200 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" m"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(3)"}</span>{" 1 m 50 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" cm"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(4)"}</span>{" 30 mm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" cm"}</div>
            </div>
          </div>
        )
      }
    ],`;

const u7SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(1)"}</span>{" 4 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" mm"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(2)"}</span>{" 200 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" m"}</div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍປະສົມ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(3)"}</span>{" 1 m 50 cm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" cm"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(4)"}</span>{" 30 mm = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" cm"}</div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u7BasicOld, u7BasicNew);
content = content.replace(u7ChallengeOld, u7ChallengeNew);
content = content.replace(u7SummaryOld, u7SummaryNew);

// ==== Unit 8 ====
const u8BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ບໍ່ມີຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={14} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={21} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={32} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={11} bottom={5} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={22} bottom={4} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u8BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ບໍ່ມີຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={14} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={21} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={32} bottom={3} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້ (ບໍ່ມີຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={11} bottom={5} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={22} bottom={4} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u8ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນຊັ້ນ ປ.3 ມີ 3 ຫ້ອງ, ແຕ່ລະຫ້ອງມີ 23 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ຄົນ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ປຶ້ມ 4 ຫົວ, ຫົວລະ 21 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ພັນກີບ"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ການຄູນຕາມທາງຕັ້ງເພື່ອຄວາມສະດວກໃນການຄິດໄລ່ເດີ."
    },`;

const u8ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຈຳນວນນັກຮຽນ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ນັກຮຽນຊັ້ນ ປ.3 ມີ 3 ຫ້ອງ, ແຕ່ລະຫ້ອງມີ 23 ຄົນ. ລວມທັງໝົດມີຈັກຄົນ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"ຄົນ"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບລາຄາ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ປຶ້ມ 4 ຫົວ, ຫົວລະ 21 ພັນກີບ. ຕ້ອງຈ່າຍເງິນທັງໝົດເທົ່າໃດພັນກີບ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"ພັນກີບ"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ໃຊ້ການຄູນຕາມທາງຕັ້ງເພື່ອຄວາມສະດວກໃນການຄິດໄລ່ເດີ."
    },`;

const u8SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={13} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={34} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={42} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={11} bottom={8} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u8SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນ 1 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={13} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={34} bottom={2} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນ 2 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={42} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={11} bottom={8} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u8BasicOld, u8BasicNew);
content = content.replace(u8ChallengeOld, u8ChallengeNew);
content = content.replace(u8SummaryOld, u8SummaryNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 7 and 8 updated');
