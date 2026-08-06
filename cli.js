import dotenv from "dotenv";
import { startCLI } from "./cli/index.js";

dotenv.config();

await startCLI();