const fs = require('fs');
const path = require('path');

const dirPath = '/Users/openclaw/Antigravity/MathDrillMaker/src/data/units5';
const files = fs.readdirSync(dirPath);

files.forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}')) {
            console.log(`Updating ${file}...`);
            content = content.replaceAll('{"(5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}', '{"(5 ຄະແນນ)"}');
            fs.writeFileSync(filePath, content, 'utf8');
        }
    }
});
console.log('Done!');
