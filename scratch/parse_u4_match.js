const fs = require('fs');

function parseMatch() {
  const matchFiles = ['u4_match_3.json', 'u4_match_5.json', 'u4_match_6.json', 'u4_match_7.json'];
  for (const file of matchFiles) {
    const p = `scratch/${file}`;
    if (!fs.existsSync(p)) continue;
    
    const obj = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (obj.content) {
      fs.writeFileSync(`scratch/${file.replace('.json', '_content.txt')}`, obj.content, 'utf8');
      console.log(`Extracted content from ${file} into scratch/${file.replace('.json', '_content.txt')}`);
    }
  }
}

parseMatch();
