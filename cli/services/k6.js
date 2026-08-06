import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import ora from "ora";
import { logError, logSuccess } from "../core/utils.js";

export async function runK6Test({ env, testType, scenario }) {
  const targetScript = path.join("tests", `${testType}.js`);

  if (!fs.existsSync(targetScript)) {
    logError(`Test file not found: ${targetScript}`);
    return;
  }

  const reportsDir = path.resolve(process.cwd(), "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const reportFilename = `report-${testType}-${scenario}-${env}-${Date.now()}.json`;
  const reportPath = path.join(reportsDir, reportFilename);

  console.log(`\n[INFO] Running k6 load test...`);
  const spinner = ora(`[Env: ${env} | Type: ${testType} | Scenario: ${scenario}]`).start();
  spinner.stop();

  return new Promise((resolve) => {
    const k6 = spawn("k6", ["run", "--summary-export", reportPath, targetScript], {
      stdio: "inherit",
      cwd: process.cwd(),
      env: { 
        ...process.env, 
        APP_ENV: env,
        SCENARIO: scenario 
      },
    });

    k6.on("close", (code) => {
      if (code === 0) {
        logSuccess(`Test completed successfully!`);
        logSuccess(`Report saved to: reports/${reportFilename}\n`);
      } else {
        logError(`Test failed with status code ${code}\n`);
      }
      resolve();
    });
  });
}