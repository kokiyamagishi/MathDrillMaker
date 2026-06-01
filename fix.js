const fs = require('fs');
let code = fs.readFileSync('src/data/units3.tsx', 'utf8');

code = code.replace(
  /<div style={{ display: "flex", flexDirection: "column-reverse", height: "160px", fontWeight: "bold", fontSize: "12px" }}>\n\s*\{\[1, 2, 3, 4, 5, 6, 7, 8\]\.map[^}]+\}\n\s*<\/div>/g,
  `<div style={{ position: "relative", height: "160px", width: "20px", fontWeight: "bold", fontSize: "12px" }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <span key={n} style={{ position: "absolute", bottom: (n * 20 - 6) + "px", right: 0 }}>
                        {n}
                      </span>
                    ))}
                  </div>`
);

code = code.replace(
  /<span ><\/span>\n\s*<span style={{ borderTop: "2px solid #000", width: "100%", textAlign: "center" }}>\{"([^"]+)"\}<\/span>/g,
  `<span style={{ display: "inline-block", width: "40px", height: "30px" }}></span>\n                    <span style={{ borderTop: "2px solid #000", width: "40px", textAlign: "center", paddingTop: "8px", height: "30px" }}>{"$1"}</span>`
);

code = code.replace(
  /<span ><\/span>\n\s*<span style={{ borderTop: "2px solid #000", width: "100%", textAlign: "center" }}><\/span>\n\s*<span ><\/span>/g,
  `<span style={{ display: "inline-block", width: "40px", height: "30px" }}></span>\n                  <span style={{ borderTop: "2px solid #000", width: "40px", textAlign: "center" }}></span>\n                  <span style={{ display: "inline-block", width: "40px", height: "30px" }}></span>`
);

fs.writeFileSync('src/data/units3.tsx', code);
