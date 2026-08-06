import { execSync } from "child_process";
import { logError } from "./utils.js";

export function checkK6Installed() {
  try {
    execSync("k6 version", { stdio: "ignore" });
    return true;
  } catch (error) {
    logError("k6 is not installed on your system.");
    console.log("Please install Grafana K6 first: https://k6.io/docs/get-started/installation/\n");
    return false;
  }
}