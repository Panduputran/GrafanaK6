import { select } from "@clack/prompts";
import { TEST_TYPES } from "../core/constants.js";

export async function selectTestType() {
  return await select({
    message: "Pilih jenis pengujian (Test Type):",
    options: TEST_TYPES,
  });
}