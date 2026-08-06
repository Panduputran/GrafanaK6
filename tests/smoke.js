import { sleep } from "k6";
import { smokeStages } from "../config/stages.js";
import { thresholds } from "../config/thresholds.js";
import { healthCheck } from "../scenarios/health.js";

export const options = {
    stages: smokeStages,
    thresholds: thresholds,
};

export default function () {

    healthCheck();

    sleep(1);

}