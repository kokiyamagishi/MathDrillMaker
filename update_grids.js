const fs = require('fs');

function updateFile(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  let changed = false;

  // The regex looks for flex containers that wrap VerticalMath problems.
  // We can look for <div style={{ display: "flex", ... flexWrap: "wrap" ... }}>
  // However, it's safer to just replace instances that match specific known patterns in units2.tsx and units3.tsx
  // We know paddingLeft: "16px" or gap: "24px" is common.

  const replacements = [
    {
      old: /display: "flex",\s*flexWrap: "wrap",\s*gap: "24px",\s*paddingLeft: "16px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", paddingLeft: "16px"'
    },
    {
      old: /display: "flex",\s*justifyContent: "space-between",\s*flexWrap: "wrap",\s*rowGap: "24px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"'
    },
    {
      old: /display: "flex",\s*justifyContent: "space-between",\s*flexWrap: "wrap",\s*rowGap: "16px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px"'
    },
    {
      old: /display: "flex",\s*flexWrap: "wrap",\s*gap: "40px",\s*paddingLeft: "16px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", paddingLeft: "16px"'
    },
    {
      old: /display: "flex",\s*justifyContent: "space-around",\s*flexWrap: "wrap",\s*gap: "24px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"'
    },
    {
      old: /display: "flex",\s*flexWrap: "wrap",\s*justifyContent: "space-around",\s*gap: "24px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"'
    },
    {
      old: /display: "flex",\s*justifyContent: "center",\s*gap: "24px",\s*margin: "16px 0",\s*flexWrap: "wrap"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", margin: "16px 0"'
    },
    {
      old: /display: "flex",\s*flexWrap: "wrap",\s*gap: "24px",\s*justifyContent: "center",\s*marginBottom: "16px"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "16px"'
    },
    {
      old: /display: "flex",\s*flexWrap: "wrap",\s*gap: "24px",\s*justifyContent: "center"/g,
      new: 'display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"'
    }
  ];

  let original = content;
  for (const rep of replacements) {
    content = content.replace(rep.old, rep.new);
  }

  // Handle specific manual cases if the regex missed some flex wraps that we know contain VerticalMath
  // Let's also check if there are 4 items inside a repeat(3, 1fr) grid, it's fine, it'll just wrap to the next row automatically.

  if (content !== original) {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Updated layout in ${filename}`);
  }
}

updateFile('src/data/units2.tsx');
updateFile('src/data/units3.tsx');
