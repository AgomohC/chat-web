export const EnvVars = {
  environment: process.env.NEXT_PUBLIC_ENV || "development",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
};

export enum COOKIE_STORAGE_KEYS {
  ACCESS_TOKEN = "accessToken",
}
