import fs from "fs";
import path from "path";
import { logSuccess, logError } from "../core/utils.js";

export async function showSettings() {
  console.log("\n--- Application Settings ---");
  const configPath = path.resolve(process.cwd(), "config", "default.json");

  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    console.log("Configured Target Environments:");
    console.dir(config.environments, { depth: null, colors: true });
  } else {
    logError("Configuration file config/default.json not found.");
  }
  console.log();
}