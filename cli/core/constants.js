export const APP = {
  NAME: "Grafana K6 CLI",
  VERSION: "1.0.0",
  DESCRIPTION: "Interactive Load Testing Framework",
  GITHUB: "https://github.com/Panduputran",
};

export const MENU_OPTIONS = [
  { value: "run", label: "Run Load Test" },
  { value: "reports", label: "View Reports" },
  { value: "settings", label: "Settings" },
  { value: "exit", label: "Exit" },
];

export const ENVIRONMENTS = [
  { value: "development", label: "Development (Local/Dev)" },
  { value: "staging", label: "Staging (Pre-Prod)" },
  { value: "production", label: "Production" },
];

export const TEST_TYPES = [
  { value: "smoke", label: "Smoke Test (Minimal Load)" },
  { value: "load", label: "Load Test (Normal Load)" },
  { value: "stress", label: "Stress Test (Heavy Load)" },
  { value: "spike", label: "Spike Test (Extreme Burst)" },
  { value: "soak", label: "Soak Test (Long Duration)" },
];

export const SCENARIOS = [
  { value: "health", label: "Health Check API" },
  { value: "homepage", label: "Homepage Load" },
];