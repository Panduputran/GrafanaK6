import { select } from "@clack/prompts";
import { MENU_OPTIONS } from "../core/constants.js";

export async function mainMenu() {
  return await select({
    message: "Pilih menu utama:",
    options: MENU_OPTIONS,
  });
}