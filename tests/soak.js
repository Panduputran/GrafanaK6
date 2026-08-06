import { sleep } from 'k6';
import healthScenario from '../scenarios/health.js';
import homepageScenario from '../scenarios/homepage.js';
import { defaultThresholds } from '../config/thresholds.js';

export const options = {
    stages: soakStages,
    thresholds: thresholds,
};

export default function () {

    healthCheck();

    sleep(1);

}