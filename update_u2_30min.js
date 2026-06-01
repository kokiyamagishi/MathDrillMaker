const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

const u2KeyPointsOld = `        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#FFF9C4", padding: "20px", borderRadius: "12px", flexWrap: "wrap", marginTop: "12px" }}>
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
        </div>`;

const u2KeyPointsNew = `        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#FFF9C4", padding: "20px", borderRadius: "12px", flexWrap: "wrap", marginTop: "12px" }}>
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
            <div style={{ fontSize: "60px" }}>🕝</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{"2:30"}</div>
            <div>{"ສອງໂມງເຄິ່ງ (30 ນາທີ)"}</div>
          </div>
        </div>`;

content = content.replace(u2KeyPointsOld, u2KeyPointsNew);

const u2BasicOld = `              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"1 ຊົ່ວໂມງ 10 ນາທີ = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>`;

const u2BasicNew = `              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "22px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>{"(4)"}</span>
                <span>{"1 ຊົ່ວໂມງເຄິ່ງ (1 ຊົ່ວໂມງ 30 ນາທີ) = "}</span>
                <span className="answer-blank" style={{ display: "inline-block", width: "60px", height: "40px" }}></span>
                <span>{"ນາທີ"}</span>
              </div>`;

content = content.replace(u2BasicOld, u2BasicNew);

const u2AnswersOld = `          answers: [
            <span key="1">{"(1) 60, (2) 60, (3) 24, (4) 70"}</span>
          ]`;

const u2AnswersNew = `          answers: [
            <span key="1">{"(1) 60, (2) 60, (3) 24, (4) 90"}</span>
          ]`;

content = content.replace(u2AnswersOld, u2AnswersNew);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 2 30min updated');
