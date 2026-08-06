import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 10 },  // ramp-up to 10 users
    { duration: "1m", target: 50 },   // increase to 50 users
    { duration: "1m", target: 100 },  // stress to 100 users
    { duration: "30s", target: 0 },   // ramp-down
  ],
  thresholds: {
    http_req_failed: ["rate<0.05"],   // <5% requests should fail
    http_req_duration: ["p(95)<1000"], // 95% of requests <1s
  },
};

export default function () {
  let res = http.get("https://v/");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1); // delay antar request
}
