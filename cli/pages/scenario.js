import { select, isCancel, cancel } from "@clack/prompts";
import { SCENARIOS } from "../core/constants.js";

export async function selectScenario() {
  const scenario = await select({
    message: "Select test scenario:",
    options: SCENARIOS,
  });

  if (isCancel(scenario)) {
    cancel("Operation cancelled. Goodbye.");
    process.exit(0);
  }

  return scenario;
}