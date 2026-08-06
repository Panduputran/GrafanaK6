import { select, isCancel, cancel } from "@clack/prompts";
import { TEST_TYPES } from "../core/constants.js";

export async function selectTestType() {
  const testType = await select({
    message: "Select test type:",
    options: TEST_TYPES,
  });

  if (isCancel(testType)) {
    cancel("Operation cancelled. Goodbye.");
    process.exit(0);
  }

  return testType;
}