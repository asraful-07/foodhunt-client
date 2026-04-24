"use client";

import jwt, { JwtPayload } from "jsonwebtoken";

const getTokenSecondsRemaining = (token: string): number => {
  if (!token) return 0;
  try {
    const tokenPayload = jwt.decode(token) as JwtPayload;

    if (tokenPayload && !tokenPayload.exp) {
      return 0;
    }

    const remainingSeconds =
      (tokenPayload.exp as number) - Math.floor(Date.now() / 1000);

    return remainingSeconds > 0 ? remainingSeconds : 0;
  } catch (error) {
    console.error("Error decoding token:", error);
    return 0;
  }
};

export const setTokenInCookies = (
  name: string,
  token: string,
  fallbackMaxAgeInSeconds = 60 * 60 * 24, // 1 day
) => {
  let maxAgeInSeconds: number | undefined;

  if (name !== "better-auth.session_token") {
    maxAgeInSeconds = getTokenSecondsRemaining(token);
  }

  // Import client cookie utils dynamically to avoid circular imports
  import("./clientCookieUtils").then(({ setCookie }) => {
    setCookie(name, token, maxAgeInSeconds || fallbackMaxAgeInSeconds);
  });
};

export function isTokenExpiringSoon(
  token: string,
  thresholdInSeconds = 300,
): boolean {
  const remainingSeconds = getTokenSecondsRemaining(token);
  return remainingSeconds > 0 && remainingSeconds <= thresholdInSeconds;
}

export function isTokenExpired(token: string): boolean {
  const remainingSeconds = getTokenSecondsRemaining(token);
  return remainingSeconds === 0;
}
