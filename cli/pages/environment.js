import { select } from "@clack/prompts";
import { ENVIRONMENTS } from "../core/constants.js";

export async function selectEnvironment() {
  return await select({
    message: "Pilih target environment:",
    options: ENVIRONMENTS,
  });
}