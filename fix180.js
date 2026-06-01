const fs = require('fs');
let code = fs.readFileSync('src/data/units3.tsx', 'utf8');

code = code.replace(
  /<div style={{ position: "relative", height: "180px", width: "20px", fontWeight: "bold", fontSize: "14px" }}>\n\s*\{\[0, 1, 2, 3, 4, 5, 6\]\.map[^}]+\}\n\s*<\/div>/g,
  `<div style={{ position: "relative", height: "180px", width: "20px", fontWeight: "bold", fontSize: "14px" }}>
                  {[0, 1, 2, 3, 4, 5, 6].map(n => (
                    <span key={n} style={{ position: "absolute", bottom: (n * 30 - 7) + "px", right: 0 }}>
                      {n}
                    </span>
                  ))}
                </div>`
);

fs.writeFileSync('src/data/units3.tsx', code);
