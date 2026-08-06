import { getReportList } from "../services/report.js";
import { logError, logSuccess } from "../core/utils.js";

export async function showReports() {
  console.log("\n--- Laporan Pengujian ---");
  const files = getReportList();

  if (files.length === 0) {
    logError("Belum ada file laporan tersimpan di folder /reports.");
  } else {
    logSuccess(`Ditemukan ${files.length} file laporan:`);
    files.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file}`);
    });
  }
  console.log();
}