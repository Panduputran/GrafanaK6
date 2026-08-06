import { cancel } from "@clack/prompts";
import { showBanner } from "./core/banner.js";
import { validateK6 } from "./core/validator.js";
import { handleNavigation } from "./core/router.js";

export async function startCLI() {
  showBanner();

  if (!validateK6()) {
    cancel("Error: k6 tidak ditemukan di sistem (PATH). Pastikan k6 sudah terinstall.");
    process.exit(1);
  }

  await handleNavigation();
}