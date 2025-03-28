  merge-reports:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Download all test results
        uses: actions/download-artifact@v3
        with:
          path: results

      - name: Merge Monocart reports
        run: |
          npx monocart-reporter-merge results/**/report.json --output results/merged-report.json

      - name: Generate Monocart report
        run: |
          npx monocart-reporter results/merged-report.json --output merged-report

      - name: Upload merged report
        uses: actions/upload-artifact@v3
        with:
          name: merged-report
          path: merged-report
