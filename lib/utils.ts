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

export const safeArray = <T>(arr: unknown): T[] => {
  if (Array.isArray(arr)) return arr as T[];
  return [];
};
export const safeString = (str: unknown, fallback = ""): string => {
  if (typeof str === "string") return str;
  return fallback;
};
export const generateInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
};
