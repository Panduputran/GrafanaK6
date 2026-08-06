import http from 'k6/http';
import { check, sleep } from 'k6';

export default function healthScenario() {
  const baseUrl = __ENV.BASE_URL || 'https://test.k6.io';
  const res = http.get(baseUrl);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}