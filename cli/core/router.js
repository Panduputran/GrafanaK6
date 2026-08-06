import { cancel, isCancel } from "@clack/prompts";
import { mainMenu } from "../pages/menu.js";
import { selectEnvironment } from "../pages/environment.js";
import { selectScenario } from "../pages/scenario.js";
import { selectTestType } from "../pages/testType.js";
import { showReports } from "../pages/report.js";
import { showSettings } from "../pages/settings.js";
import { runK6Test } from "../services/k6.js";

export async function handleNavigation() {
  while (true) {
    const action = await mainMenu();

    if (isCancel(action) || action === "exit") {
      cancel("Operasi dibatalkan. Sampai jumpa.");
      process.exit(0);
    }

    switch (action) {
      case "run":
        await startTestFlow();
        break;
      case "reports":
        await showReports();
        break;
      case "settings":
        await showSettings();
        break;
    }
  }
}

async function startTestFlow() {
  const env = await selectEnvironment();
  if (isCancel(env)) return;

  const testType = await selectTestType();
  if (isCancel(testType)) return;

  const scenario = await selectScenario();
  if (isCancel(scenario)) return;

  await runK6Test({ env, testType, scenario });
}