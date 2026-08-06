import { showMainMenu } from "../pages/menu.js";
import { selectEnvironment } from "../pages/environment.js";
import { selectTestType } from "../pages/testType.js";
import { selectScenario } from "../pages/scenario.js";
import { showReports } from "../pages/report.js";
import { showSettings } from "../pages/settings.js";
import { runK6Test } from "../services/k6.js";

export async function handleNavigation() {
  while (true) {
    const action = await showMainMenu();

    switch (action) {
      case "run": {
        const env = await selectEnvironment();
        const testType = await selectTestType();
        const scenario = await selectScenario();
        await runK6Test({ env, testType, scenario });
        break;
      }
      case "reports": {
        await showReports();
        break;
      }
      case "settings": {
        await showSettings();
        break;
      }
      case "exit": {
        console.log("Goodbye!");
        process.exit(0);
      }
    }
  }
}