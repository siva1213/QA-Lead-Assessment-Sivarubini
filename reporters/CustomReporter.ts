import { Reporter, TestCase, TestResult, FullConfig, Suite } from '@playwright/test/reporter';
import * as fs from 'fs';

class CustomReporter implements Reporter {
  private results: any[] = [];

  onBegin(config: FullConfig, suite: Suite) {
    console.log('🚀 Starting the test run...');
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status.toUpperCase();
    const testInfo = {
      title: test.title,
      status: status,
      duration: result.duration,
      error: result.error?.message || '',
    };

    this.results.push(testInfo);
    console.log(`📌 Test: ${test.title} => ${status}`);
  }

  async onEnd() {
    console.log('✅ Test run complete. Saving report...');
    const outputPath = 'playwright-report/custom-report.json';
    fs.mkdirSync('playwright-report', { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Report saved to ${outputPath}`);
  }
}

export default CustomReporter;
