import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // Naik ke 100 user
    { duration: '2m', target: 300 }, // Naik ke 300 user
    { duration: '2m', target: 600 }, // Naik ke 600 user
    { duration: '1m', target: 0 },   // Turun perlahan
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% request harus < 1 detik
    http_req_failed: ['rate<0.05'],    // Maks 5% error
  },
};

export default function () {
  const res = http.get('https://v/');
  sleep(1);
}
