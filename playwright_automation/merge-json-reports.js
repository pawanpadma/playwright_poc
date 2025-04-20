const fs = require('fs');
const path = require('path');

const root = './downloaded-reports';

const reportPaths = fs
  .readdirSync(root)
  .flatMap((dir) => {
    const fullPath = path.join(root, dir, 'test-results.json');
    return fs.existsSync(fullPath) ? [fullPath] : [];
  });

const merged = {
  config: {},
  suites: [],
};

for (const reportPath of reportPaths) {
  const json = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  merged.suites.push(...json.suites);
}

fs.mkdirSync('./merged', { recursive: true });
fs.writeFileSync('./merged/merged-report.json', JSON.stringify(merged, null, 2));

console.log(`✅ Merged ${reportPaths.length} reports`);
