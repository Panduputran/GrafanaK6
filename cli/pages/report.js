import { getReportList } from "../services/report.js";
import { logError, logSuccess } from "../core/utils.js";

export async function showReports() {
  console.log("\n--- Test Reports ---");
  const files = getReportList();

  if (files.length === 0) {
    logError("No report files found in the /reports directory.");
  } else {
    logSuccess(`Found ${files.length} report file(s):`);
    files.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file}`);
    });
  }
  console.log();
}