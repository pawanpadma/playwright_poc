  merge-reports:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Download artifacts
        uses: actions/download-artifact@v4
        with:
          pattern: html-report-*
          path: reports

      - name: Install merge tool
        run: npm install -D playwright-merge-html-reports

      - name: Merge HTML reports
        run: |
          npx playwright-merge-html-reports \
            --input ./reports \
            --output merged-report

      - name: Upload merged HTML report
        uses: actions/upload-artifact@v4
        with:
          name: merged-html-report
          path: merged-report/
