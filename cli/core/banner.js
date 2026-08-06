import chalk from "chalk";
import { APP } from "./constants.js";

// Banner GrafanaK6 dengan warna Ungu Hex (#800080)
const ASCII_ART = `
   ______           ___                     __ __ _____     _______   ____
  / ____/________ _/ __/___ _____  ____ _  / //_// ___/    / ___/ /  / _/ 
 / / __/ ___/ __ \`/ /_/ __ \`/ __ \\/ __ \`/ / ,<  / __ \\    / /__/ /___/ /  
/ /_/ / /  / /_/ / __/ /_/ / / / / /_/ / / /| |/ /_/ /   / /__/ /___/ /   
\\____/_/   \\__,_|_/  \\__,_|_/ /_/\\__,_/ /_/ |_|\\____/   \\___/____/___/    
`;

export function showBanner() {
  console.clear();

  const purple = chalk.hex("#800080");
  const bgPurple = chalk.bgHex("#800080");

  const logo = purple.bold(ASCII_ART);
  const description = chalk.bold.white(APP.DESCRIPTION);
  const version = bgPurple.white.bold(` v${APP.VERSION} `);
  const github = chalk.dim.underline(APP.GITHUB);

  console.log(`${logo}`);
  console.log(`  ${description}  ${version}`);
  console.log(`  ${github}\n`);
}