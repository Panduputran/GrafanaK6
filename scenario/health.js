import http from "k6/http";
import { check } from "k6";
import { config } from "../config/config.js";
import { getToken } from "../utils/auth.js";

export function healthCheck() {

    const token = getToken();

    const headers = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const res = http.get(
        `${config.baseUrl}/health`,
        { headers }
    );

    check(res, {
        "Status is 200": (r) => r.status === 200,
    });

    return res;
}