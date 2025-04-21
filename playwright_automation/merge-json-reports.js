const fs = require('fs');
const path = require('path');

const inputDir = './downloaded-reports';
const outputDir = './merged';
const mergedResults = [];

function readAllJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      readAllJsonFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      mergedResults.push(content);
    }
  }
}

readAllJsonFiles(inputDir);

fs.writeFileSync(`${outputDir}/merged-report.json`, JSON.stringify({
  version: 1,
  files: mergedResults.flatMap(report => report.files || [])
}, null, 2));

console.log(`Merged ${mergedResults.length} report(s) into merged-report.json`);

