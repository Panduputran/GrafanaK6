import { sleep } from 'k6';
import healthScenario from '../scenarios/health.js';
import homepageScenario from '../scenarios/homepage.js';
import { defaultThresholds } from '../config/thresholds.js';

export const options = {
  stages: [
    { duration: '2s', target: 2 },
    { duration: '5s', target: 20 }, // Spike mendadak
    { duration: '2s', target: 0 },
  ],
  thresholds: defaultThresholds,
};

export default function () {
  const scenario = __ENV.SCENARIO || 'health';

  if (scenario === 'homepage') {
    homepageScenario();
  } else {
    healthScenario();
  }

  sleep(1);
}