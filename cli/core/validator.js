import { execSync } from "child_process";

export function validateK6() {
  try {
    execSync("k6 version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}