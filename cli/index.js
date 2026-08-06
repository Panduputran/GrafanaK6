import { checkK6Installed } from "./core/validator.js";
import { showBanner } from "./core/banner.js";
import { handleNavigation } from "./core/router.js";

export async function startCLI() {
  if (!checkK6Installed()) {
    process.exit(1);
  }

  showBanner();
  await handleNavigation();
}