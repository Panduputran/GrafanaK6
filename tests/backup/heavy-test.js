import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 100 },  
    { duration: "1m", target: 300 },    
    { duration: "1m", target: 500 },    
    { duration: "2m", target: 800 },   
    { duration: "1m", target: 200 },   
    { duration: "30s", target: 0 },     
  ],
  thresholds: {
    http_req_failed: ["rate<0.05"],     
    http_req_duration: ["p(95)<2000"],  // 95% respon < 2 detik
  },
};

export default function () {
  const res = http.get("https://v/");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(0.5); 
}
