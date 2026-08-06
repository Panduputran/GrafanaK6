export const defaultThresholds = {
  http_req_failed: ['rate<0.01'], // error rate < 1%
  http_req_duration: ['p(95)<500'], // 95% request harus di bawah 500ms
};