const fs = require('fs');
const filePath = '/Users/kokiyamagishi/Antigravity/MathDrillMaker/src/data/units3.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 変更対象の文字列
const target = `<div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>`;

// 変更後の文字列（flexWrapをなくし、左寄せ justifyContent: "flex-start" に変更、gapも微調整）
const replacement = `<div style={{ display: "flex", justifyContent: "flex-start", gap: "32px", alignItems: "flex-start" }}>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated the layout in units3.tsx');
} else {
  console.error('Target string not found in units3.tsx');
}
