import http from "k6/http";
import { sleep, check } from "k6";
import { config } from "../config/config.js";

export const options = {

    stages: [

        {
            duration: "30s",
            target: config.vu
        },

        {
            duration: "1m",
            target: config.vu * 2
        },

        {
            duration: "1m",
            target: config.vu * 3
        },

        {
            duration: "30s",
            target: 0
        }

    ]

};

export default function () {

    let res = http.get(config.baseUrl);

    check(res, {

        "Status 200": (r) => r.status === 200

    });

    sleep(1);

}