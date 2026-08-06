import { sleep } from 'k6';
import healthScenario from '../scenarios/health.js';
import homepageScenario from '../scenarios/homepage.js';

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '10s', target: 5 },
    { duration: '5s', target: 0 },
  ],
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