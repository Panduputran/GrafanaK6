import { select, isCancel, cancel } from "@clack/prompts";
import { MENU_OPTIONS } from "../core/constants.js";

export async function showMainMenu() {
  const choice = await select({
    message: "Select main menu:",
    options: [
      { label: MENU_OPTIONS.RUN, value: "run" },
      { label: MENU_OPTIONS.REPORTS, value: "reports" },
      { label: MENU_OPTIONS.SETTINGS, value: "settings" },
      { label: MENU_OPTIONS.EXIT, value: "exit" },
    ],
  });

  if (isCancel(choice)) {
    cancel("Operation cancelled. Goodbye.");
    process.exit(0);
  }

  return choice;
}