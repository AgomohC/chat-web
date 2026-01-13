import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCookie } from "cookies-next";
import { COOKIE_STORAGE_KEYS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBearerToken = () => {
  const token = getCookie(COOKIE_STORAGE_KEYS.ACCESS_TOKEN);
  if (!token) return undefined;
  return `Bearer ${token}`;
};
