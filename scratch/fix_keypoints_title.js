const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/units3.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We want to transform the keyPoints structure of units 11-17
// Example input structure:
//     keyPoints: [
//       {
//         title: "1. ຮູບສາມແຈທ່ຽງ ແລະ ຮູບສາມແຈສະເໝີ",
//         content: (
//           <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//             <div style={{ display: "flex", gap: "24px", ...
//
// Example output structure:
//     keyPoints: [
//       {
//         content: (
//           <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//             <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"1. ຮູບສາມແຈທ່ຽງ ແລະ ຮູບສາມແຈສະເໝີ"}</h3>
//             <div style={{ display: "flex", gap: "24px", ...

// We will use a regex search for `title: "...",` followed by `content: (` and JSX block start
// Regex explained:
// title:\s*"([^"]+)",\s*content:\s*\(\s*(<div[^>]*>)\s*
const regex = /title:\s*"([^"]+)",\s*content:\s*\(\s*(<div style=\{\{\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*gap:\s*"24px"\s*\}\}>)\s*/g;

let count = 0;
content = content.replace(regex, (match, title, divTag) => {
  count++;
  console.log(`Fixing keyPoint title #${count}: "${title}"`);
  return `content: (\n          ${divTag}\n            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"${title}"}</h3>\n            `;
});

console.log(`Replaced ${count} titles in keyPoints.`);

if (count > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully fixed keyPoints in units3.tsx!");
} else {
  console.error("No matches found for keyPoints title replacement.");
}
