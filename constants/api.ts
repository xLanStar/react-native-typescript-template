export const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const API_BASE = "/api";

export const API_LOGIN_URL = API_BASE + "/auth/login";

/**
 * Auth API URLs
 */
const AUTH_BASE = "/auth/browser/v1";
export const AUTH_CONFIG_URL = AUTH_BASE + "/config";

const AUTH_URL = AUTH_BASE + "/auth";

export const AUTH_SESSION_URL = AUTH_URL + "/session";
export const AUTH_LOGIN_URL = AUTH_URL + "/login";
export const AUTH_PROVIDER_REDIRECT_URL = AUTH_URL + "/provider/redirect";
export const AUTH_PROVIDER_TOKEN_URL = AUTH_URL + "/provider/token";

/**
 * API URLs
 */
