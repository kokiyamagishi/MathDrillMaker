const fs = require('fs');
const path = require('path');

const sourceFile = 'src/data/units5.tsx';
const targetDir = 'src/data/units5';

if (!fs.existsSync(sourceFile)) {
  console.error("Source file units5.tsx not found!");
  process.exit(1);
}

// Create units5 directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let content = fs.readFileSync(sourceFile, 'utf8');

// Find the export declaration and the array items
const arrayStart = content.indexOf('export const unitsData5: UnitData[] = [');
if (arrayStart === -1) {
  console.error("Could not locate export const unitsData5 in source file!");
  process.exit(1);
}

// We will split the array content. Since each unit starts with a { and has unitNumber: X,
// we can find the units by searching for { unitNumber: X or unitNumber: X.
// A safe way is to search for unitNumber: 1, unitNumber: 2 ... unitNumber: 17.
const units = [];

for (let u = 1; u <= 17; u++) {
  const currentSearch = new RegExp(`{\\s*\\n?\\s*unitNumber:\\s*${u},`);
  const nextSearch = new RegExp(`{\\s*\\n?\\s*unitNumber:\\s*${u + 1},`);

  const currentMatch = content.match(currentSearch);
  if (!currentMatch) {
    console.error(`Could not locate start of Unit ${u}`);
    process.exit(1);
  }

  const startIndex = currentMatch.index;
  let endIndex;

  if (u === 17) {
    // For unit 17, search for the ending of the array "];"
    const arrayEndIndex = content.lastIndexOf('];');
    if (arrayEndIndex === -1) {
      console.error("Could not locate end of unitsData5 array!");
      process.exit(1);
    }
    // Extract up to the last closing bracket before ];
    const unitContent = content.substring(startIndex, arrayEndIndex).trim();
    // Remove trailing comma if exists
    let cleanUnitContent = unitContent;
    if (cleanUnitContent.endsWith(',')) {
      cleanUnitContent = cleanUnitContent.substring(0, cleanUnitContent.length - 1);
    }
    units.push({ number: u, code: cleanUnitContent.trim() });
  } else {
    const nextMatch = content.match(nextSearch);
    if (!nextMatch) {
      console.error(`Could not locate start of Unit ${u + 1} for ending Unit ${u}`);
      process.exit(1);
    }
    const nextIndex = nextMatch.index;
    const unitContent = content.substring(startIndex, nextIndex).trim();
    // Remove trailing comma
    let cleanUnitContent = unitContent;
    if (cleanUnitContent.endsWith(',')) {
      cleanUnitContent = cleanUnitContent.substring(0, cleanUnitContent.length - 1);
    }
    units.push({ number: u, code: cleanUnitContent.trim() });
  }
}

// Now write each unit file
units.forEach((unit) => {
  const unitFileContent = `import React from "react";
import { UnitData } from "../units2";

export const unit${unit.number}Data: UnitData = ${unit.code};
`;
  const filePath = path.join(targetDir, `unit${unit.number}.tsx`);
  fs.writeFileSync(filePath, unitFileContent, 'utf8');
  console.log(`Successfully wrote ${filePath}`);
});

// Write the main import file src/data/units5.tsx
let imports = `import React from "react";
import { UnitData } from "./units2";
`;

for (let u = 1; u <= 17; u++) {
  imports += `import { unit${u}Data } from "./units5/unit${u}";\n`;
}

imports += `\nexport const unitsData5: UnitData[] = [\n`;
for (let u = 1; u <= 17; u++) {
  imports += `  unit${u}Data,\n`;
}
imports += `];\n`;

fs.writeFileSync(sourceFile, imports, 'utf8');
console.log("Successfully rewrote src/data/units5.tsx with clean imports!");
