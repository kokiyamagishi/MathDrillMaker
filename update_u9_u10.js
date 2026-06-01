const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// ==== Unit 9 ====
const u9BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 คະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span><span>{"1 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span><span>{"2 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span><span>{"1000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span><span>{"5000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span><span>{"1 kg ເຄິ່ງ ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u9BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກເປັນກຣາມ (g): "} <span className="point-label">{"(ຂໍ້ລະ 2 คະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span><span>{"1 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span><span>{"2 kg ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງປ່ຽນຫົວໜ່ວຍນ້ຳໜັກລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(3)"}</span><span>{"1000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span><span>{"5000 g ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"kg"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(5)"}</span><span>{"1 kg ເຄິ່ງ ="}</span><span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px" }}></span><span>{"g"}</span>
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u9ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໝາກໂມໜ່ວຍໜຶ່ງໜັກ 2 kg, ໝາກຫຸ່ງໜ່ວຍໜຶ່ງໜັກ 500 g. ທັງສອງໜ່ວຍລວມກັນໜັກເທົ່າໃດ g?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"g"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊີ້ນໝູ 1 kg. ຖ້າແບ່ງອອກໄປ 300 g ຈະເຫຼືອຊີ້ນໝູເທົ່າໃດ g?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"g"}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນກຣາມ (g) ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບເດີ. (1 kg = 1000 g)"
    },`;

const u9ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການລວມນ້ຳໜັກ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ໝາກໂມໜ່ວຍໜຶ່ງໜັກ 2 kg, ໝາກຫຸ່ງໜ່ວຍໜຶ່ງໜັກ 500 g. ທັງສອງໜ່ວຍລວມກັນໜັກເທົ່າໃດ g?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາການລົບນ້ຳໜັກ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊີ້ນໝູ 1 kg. ຖ້າແບ່ງອອກໄປ 300 g ຈະເຫຼືອຊີ້ນໝູເທົ່າໃດ g?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"g"}</span>
                </div>
              </div>
            </div>
          )
        }
      ],
      hintIndex: 0,
      hintText: "ປ່ຽນທຸກຢ່າງໃຫ້ເປັນກຣາມ (g) ກ່ອນແລ້ວຈຶ່ງບວກ ຫຼື ລົບເດີ. (1 kg = 1000 g)"
    },`;

const u9SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(1)"}</span>{" 3 kg = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(2)"}</span>{" 4000 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" kg"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(3)"}</span>{" 1 kg 200 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(4)"}</span>{" ນ້ຳໜັກຄົນເຮົາຄວນໃຊ້ຫົວໜ່ວຍອັນໃດ? (kg ຫຼື g) = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span></div>
            </div>
          </div>
        )
      }
    ],`;

const u9SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ການປ່ຽນຫົວໜ່ວຍນ້ຳໜັກ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(1)"}</span>{" 3 kg = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(2)"}</span>{" 4000 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" kg"}</div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ນ້ຳໜັກປະສົມ ແລະ ການເລືອກຫົວໜ່ວຍ "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "16px" }}>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(3)"}</span>{" 1 kg 200 g = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>{" g"}</div>
              <div style={{ fontSize: "24px" }}><span style={{ fontWeight: "bold" }}>{"(4)"}</span>{" ນ້ຳໜັກຄົນເຮົາຄວນໃຊ້ຫົວໜ່ວຍອັນໃດ? (kg ຫຼື g) = "}<span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span></div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u9BasicOld, u9BasicNew);
content = content.replace(u9ChallengeOld, u9ChallengeNew);
content = content.replace(u9SummaryOld, u9SummaryNew);

// ==== Unit 10 ====
const u10BasicOld = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={15} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={24} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={16} bottom={5} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={38} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u10BasicNew = `    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຄິດໄລ່ບັ້ງເລກຄູນລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 6 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={15} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={24} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={16} bottom={5} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ຈົ່ງຕັ້ງບັ້ງເລກຄິດໄລ່ລຸ່ມນີ້ (ມີຕົວຈື່): "} <span className="point-label">{"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={38} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(5)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u10ChallengeOld = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາລຸ່ມນີ້: "} <span className="point-label">{"(ຂໍ້ລະ 5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 4 ແຕະ, ແຕ່ລະແຕະມີ 24 ໜ່ວຍ. ລວມທັງໝົດມີໄຂ່ຈັກໜ່ວຍ?"}</span>
                  <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                    <span>{"ຕອບ:"}</span>
                    <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                    <span>{"ໜ່ວຍ"}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ເຂົ້າໜົມ 5 ຖົງ, ຖົງລະ 15 ພັນກີບ. ຕ້ອງຈ່າຍເງິນເທົ່າໃດ?"}</span>
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
      hintText: "ຢ່າລືມເອົາຕົວຈື່ໄປບວກໃສ່ຫຼັງຈາກຄູນຫຼັກຫົວສິບແລ້ວ."
    },`;

const u10ChallengeNew = `    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບຈຳນວນໄຂ່: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(1)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ມີໄຂ່ 4 ແຕະ, ແຕ່ລະແຕະມີ 24 ໜ່ວຍ. ລວມທັງໝົດມີໄຂ່ຈັກໜ່ວຍ?"}</span>
                <div style={{ marginTop: "8px", paddingLeft: "40px", fontSize: "20px" }}>
                  <span>{"ຕອບ:"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "40px", margin: "0 10px" }}></span>
                  <span>{"ໜ່ວຍ"}</span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>{"ຈົ່ງແກ້ໂຈດບັນຫາກ່ຽວກັບການຈ່າຍເງິນ: "} <span className="point-label">{"(5 ຄະແນນ)"}</span></p>
              <div style={{ paddingLeft: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(2)"}</span>
                <span style={{ fontSize: "20px", marginLeft: "12px" }}>{"ຊື້ເຂົ້າໜົມ 5 ຖົງ, ຖົງລະ 15 ພັນກີບ. ຕ້ອງຈ່າຍເງິນເທົ່າໃດ?"}</span>
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
      hintText: "ຢ່າລືມເອົາຕົວຈື່ໄປບວກໃສ່ຫຼັງຈາກຄູນຫຼັກຫົວສິບແລ້ວ."
    },`;

const u10SummaryOld = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 10 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={17} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={28} bottom={3} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={19} bottom={5} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

const u10SummaryNew = `    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 1 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(1)"}</span>
                <VerticalMath top={17} bottom={4} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(2)"}</span>
                <VerticalMath top={28} bottom={3} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>{"ທົດສອບປະຈຳບົດ: ຕັ້ງບັ້ງເລກຄູນມີຈື່ 2 "} <span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingLeft: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(3)"}</span>
                <VerticalMath top={45} bottom={2} operator="×" columns={3} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>{"(4)"}</span>
                <VerticalMath top={19} bottom={5} operator="×" columns={3} />
              </div>
            </div>
          </div>
        )
      }
    ],`;

content = content.replace(u10BasicOld, u10BasicNew);
content = content.replace(u10ChallengeOld, u10ChallengeNew);
content = content.replace(u10SummaryOld, u10SummaryNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 9 and 10 updated');
