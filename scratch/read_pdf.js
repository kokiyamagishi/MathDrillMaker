const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const pdfPath = path.join(__dirname, '../MathTextbookSecondary2.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

console.log('Instantiating PDFParse...');

const parser = new PDFParse({ data: dataBuffer });

parser.getText({ first: 15 }).then(function(result) {
  console.log('PDF text extracted successfully!');
  const outputText = result.text;
  const outputPath = path.join(__dirname, '../scratch/textbook2_sample.txt');
  fs.writeFileSync(outputPath, outputText, 'utf-8');
  console.log(`Saved sample text to: ${outputPath}`);
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
