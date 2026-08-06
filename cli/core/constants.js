export const APP = {
  NAME: "GrafanaK6 CLI",
  VERSION: "1.0.0",
  DESCRIPTION: "Interactive Load Testing Framework",
  GITHUB: "https://github.com/Panduputran",
};

export const MENU_OPTIONS = {
  RUN: "Run Load Test",
  REPORTS: "View Reports",
  SETTINGS: "Settings",
  EXIT: "Exit",
};

export const ENVIRONMENTS = [
  { label: "Development (Local)", value: "development" },
  { label: "Staging (Pre-Prod)", value: "staging" },
  { label: "Production (Live)", value: "production" },
];

export const TEST_TYPES = [
  { label: "Smoke Test (Minimal Load)", value: "smoke" },
  { label: "Load Test (Normal Load)", value: "load" },
  { label: "Stress Test (Heavy Load)", value: "stress" },
  { label: "Spike Test (Extreme Burst)", value: "spike" },
  { label: "Soak Test (Long Duration)", value: "soak" },
];

export const SCENARIOS = [
  { label: "Health Check API", value: "health" },
  { label: "Homepage Load", value: "homepage" },
];