import pc from "picocolors";

export function logSuccess(msg) {
  console.log(pc.green(`[SUCCESS] ${msg}`));
}

export function logError(msg) {
  console.log(pc.red(`[ERROR] ${msg}`));
}