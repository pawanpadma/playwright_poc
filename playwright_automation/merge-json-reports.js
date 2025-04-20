const fs = require('fs');
const path = require('path');

const reportPaths = fs
  .readdirSync('./downloaded-reports')
  .filter((folder) => folder.startsWith('shard-'))
  .map((folder) => path.join('./downloaded-reports', folder, 'test-results.json'));

const merged = {
  config: {},
  suites: [],
};

for (const reportPath of reportPaths) {
  const json = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  merged.suites.push(...json.suites);
}

fs.writeFileSync('./merged/merged-report.json', JSON.stringify(merged, null, 2));
console.log(`✅ Merged ${reportPaths.length} reports`);
