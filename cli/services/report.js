import fs from "fs";
import path from "path";

export function getReportList() {
  const reportsDir = path.resolve(process.cwd(), "reports");

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
    return [];
  }

  return fs.readdirSync(reportsDir).filter((file) => 
    file.endsWith(".json") || file.endsWith(".html")
  );
}