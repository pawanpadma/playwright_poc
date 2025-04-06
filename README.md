  - name: Search for JSON Files
        run: |
          node -e "
          const fs = require('fs');
          const path = require('path');
          function getAllJsonFiles(dirPath, arrayOfFiles = []) {
              const files = fs.readdirSync(dirPath);
              files.forEach(file => {
                  const filePath = path.join(dirPath, file);
                  if (fs.statSync(filePath).isDirectory()) {
                      arrayOfFiles = getAllJsonFiles(filePath, arrayOfFiles);
                  } else if (file.endsWith('.json')) {
                      arrayOfFiles.push(filePath);
                  }
              });
              console.log(arrayOfFiles);
          }
          const jsonFiles = getAllJsonFiles('./results');
          console.log(JSON.stringify(jsonFiles));
          "
