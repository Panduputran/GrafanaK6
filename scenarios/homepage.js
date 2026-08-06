import http from 'k6/http';
import { check, sleep } from 'k6';

export default function homepageScenario() {
  const baseUrl = __ENV.BASE_URL || 'https://test.k6.io';
  const res = http.get(`${baseUrl}/news.php`);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}