- name: Run tests
  run: |
    npx playwright test ${{ matrix.testFile }} --reporter=html || echo "failed" > status.txt
    if [ ! -f status.txt ]; then echo "passed" > status.txt; fi
  working-directory: playwright_automation
