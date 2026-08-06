import { config } from "./config.js";

export const smokeStages = [
    { duration: "10s", target: 1 },
];

export const loadStages = [
    { duration: "30s", target: config.vu },
    { duration: config.duration, target: config.vu },
    { duration: "30s", target: 0 },
];

export const stressStages = [
    { duration: "30s", target: config.vu },
    { duration: "1m", target: config.vu * 2 },
    { duration: "1m", target: config.vu * 3 },
    { duration: "30s", target: 0 },
];

export const soakStages = [
    { duration: "5m", target: config.vu },
    { duration: "30m", target: config.vu },
    { duration: "5m", target: 0 },
];