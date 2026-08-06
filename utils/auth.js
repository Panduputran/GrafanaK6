import http from "k6/http";
import { check } from "k6";
import { config } from "../config/config.js";

let cachedToken = null;

/**
 * Mengambil Bearer Token
 * Prioritas:
 * 1. TOKEN dari environment (.env / -e TOKEN=...)
 * 2. Login otomatis jika USE_LOGIN=true
 */
export function getToken() {

    // Jika token sudah pernah diambil
    if (cachedToken) {
        return cachedToken;
    }

    // Jika user memberikan TOKEN secara langsung
    if (config.token && config.token.trim() !== "") {
        cachedToken = config.token;
        return cachedToken;
    }

    // Jika tidak menggunakan login
    if (!config.useLogin) {
        return null;
    }

    // Login otomatis
    const payload = JSON.stringify({
        username: config.username,
        password: config.password
    });

    const params = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const res = http.post(
        `${config.baseUrl}${config.loginEndpoint}`,
        payload,
        params
    );

    check(res, {
        "Login Success": (r) => r.status === 200,
    });

    const body = JSON.parse(res.body);

    /*
        Ubah sesuai format API.

        Contoh:

        {
            "token":"xxxxx"
        }

        atau

        {
            "data":{
                "token":"xxxxx"
            }
        }

    */

    cachedToken = body.token;

    return cachedToken;
}