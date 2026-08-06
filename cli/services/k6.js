import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import ora from "ora";
import { logError, logSuccess } from "../core/utils.js";

export async function runK6Test({ env, testType, scenario }) {
  // Gunakan relative path dari root project
  const targetScript = path.join("tests", `${testType}.js`);

  if (!fs.existsSync(targetScript)) {
    logError(`File pengujian tidak ditemukan: ${targetScript}`);
    return;
  }

  const reportsDir = path.resolve(process.cwd(), "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const reportFilename = `report-${testType}-${scenario}-${env}-${Date.now()}.json`;
  const reportPath = path.join(reportsDir, reportFilename);

  console.log(`\n[INFO] Menjalankan pengujian k6...`);
  const spinner = ora(`[Env: ${env} | Type: ${testType} | Scenario: ${scenario}]`).start();
  spinner.stop();

  return new Promise((resolve) => {
    const k6 = spawn("k6", ["run", "--summary-export", reportPath, targetScript], {
      stdio: "inherit",
      cwd: process.cwd(), // Kunci: pastikan k6 jalan dari root folder
      env: { 
        ...process.env, 
        APP_ENV: env,
        SCENARIO: scenario 
      },
    });

    k6.on("close", (code) => {
      if (code === 0) {
        logSuccess(`Pengujian selesai dengan sukses!`);
        logSuccess(`Laporan disimpan di: reports/${reportFilename}\n`);
      } else {
        logError(`Pengujian gagal dengan status code ${code}\n`);
      }
      resolve();
    });
  });
}