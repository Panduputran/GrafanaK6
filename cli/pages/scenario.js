import { select } from "@clack/prompts";
import { SCENARIOS } from "../core/constants.js";

export async function selectScenario() {
  return await select({
    message: "Pilih skenario pengujian:",
    options: SCENARIOS,
  });
}