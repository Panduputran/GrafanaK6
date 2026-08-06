import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 100 },   // Warm-up
    { duration: "1m", target: 300 },    // Increase load
    { duration: "1m", target: 500 },    // Heavy load
    { duration: "2m", target: 800 },    // Peak stress (800 VU)
    { duration: "1m", target: 200 },    // Recovery
    { duration: "30s", target: 0 },     // Cool-down
  ],
  thresholds: {
    http_req_failed: ["rate<0.05"],     // Maks. 5% error
    http_req_duration: ["p(95)<2000"],  // 95% respon < 2 detik
  },
};

export default function () {
  const res = http.get("https://s/");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(0.5); // jeda antar request per VU
}
