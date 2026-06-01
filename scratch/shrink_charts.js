const fs = require('fs');
let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

// The regex /fontSize:\s*"12px",\s*}\s*>\s*\{\[0,\s*1,\s*2,\s*3,\s*4,\s*5,\s*6,\s*7,\s*8\]\.map/g
// didn't match because of spacing or comment before right: 0.
// Let's do a much simpler literal replace!
// We want to replace fontSize: "12px" in the Y-axis containers of Unit 15 (pages 60, 61, 62).
// Let's print out all occurrences of fontSize: "12px" first to verify.

let occurrences = 0;
content = content.replace(
  /fontSize:\s*"12px"/g,
  (match, offset) => {
    // Only replace within Unit 15 boundaries (approx character indices 241000 to 295000 in the file)
    if (offset > 240000 && offset < 296000) {
      occurrences++;
      return 'fontSize: "9px"';
    }
    return match;
  }
);

console.log(`Replaced ${occurrences} occurrences of fontSize: "12px" with fontSize: "9px".`);

// 3. Page 60 Q2 dotted graph box border page-overflow issue:
// The user said: "60ページの大問2の棒グラフなんですけど、グラフの周りを囲んでいる点線のボックスの線が、下のページに見切れてしまっています。こちらを修正してください。"
// The border is border: "1px dashed #ccc". It's wrapped around:
// <div className="math-illustration" style={{ padding: "10px", border: "1px dashed #ccc", borderRadius: "8px", backgroundColor: "#fff", fontSize: "14px" }}>
// This container holds the graph itself. If the box is too tall or overflows to the next page, we should slightly reduce its height or margin.
// Wait! Let's see: the parent has display: "flex", gap: "40px" at line 7989.
// If the dotted box has overflow or goes to the next page, it's because it's rendering too tall or basicProblems page size limit is exceeded.
// If the height of the chart is 160px (8 levels of 20px), plus Y-axis and title, total is around 220px.
// But the table is also in Q2!
// If they are rendered side-by-side using:
// <div style={{ display: "flex", gap: "40px" }}>
// Then the height is the max of Table (with Q1, Q2 answers) and Chart.
// If it's side-by-side, the height shouldn't overflow down to the next page unless the page is already too full.
// Oh! In basicProblems, Page 47 (which is Unit 6 basicProblems) has all 3 problems, but Unit 15 (Page 60) basicProblems has Q1 (colors chart and questions) and Q2 (table and animals chart and questions).
// Together on one page, they are very tall! Q1 has a 160px chart and questions. Q2 has a table, questions, and a 160px chart!
// So Page 60 basicProblems has TWO large charts + table + multiple questions! This easily overflows the page height!
// To prevent overflowing to the next page, we should make the charts more compact!
// Let's reduce padding / margins and container size:
// For the Q2 chart container:
// Change padding: "10px" to padding: "6px 10px".
// Reduce the chart height from 160px to 120px! (each level = 15px instead of 20px!).
// Wait! If n * 20 - 10px is used, that's 20px per level. If we reduce it to 15px per level:
// height: "120px", bottom: `${n * 15 - 8}px`, bar height 15px.
// This will shrink the Y axis height by 40px!
// Let's shrink BOTH Y-axis heights of Page 60 Q2, Page 61 Q1, Page 62 Q1 to 120px height! This saves 40px height per chart, which completely stops any page overflow and makes the layout incredibly clean and compact!
// Let's write a script to shrink the Y-axis height to 120px (15px per level) for pages 60, 61, 62!

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
