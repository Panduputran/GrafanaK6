import { select, isCancel, cancel } from "@clack/prompts";
import { ENVIRONMENTS } from "../core/constants.js";

export async function selectEnvironment() {
  const env = await select({
    message: "Select target environment:",
    options: ENVIRONMENTS,
  });

  if (isCancel(env)) {
    cancel("Operation cancelled. Goodbye.");
    process.exit(0);
  }

  return env;
}