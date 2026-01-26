import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { COOKIE_STORAGE_KEYS } from "./lib/constants"

// Extracts the pathname from a URL http://localhost:3000/auth/login -> /auth/login
const trimBaseUrl = (url: string) => "/" + url.split("/").slice(3).join("/")

const urlHelper = (url: string) => {
  return {
    value: url || "",
    equals: (b: string) => url === b
  }
}

const authRoutes = [
  "/auth/login",
  "/auth/verify-registration",
  "/auth/reset-password",
  "/auth/register",
  "/auth/forgot-password"
]
const getAuthToken = (request: NextRequest): string | null =>
  request.cookies.get(COOKIE_STORAGE_KEYS.ACCESS_TOKEN)?.value || null

export function proxy(request: NextRequest) {
  const nextUrl = urlHelper(trimBaseUrl(request.nextUrl.toString()))

  const authToken = getAuthToken(request)

  if (authRoutes.some((route) => nextUrl.value.startsWith(route))) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  if (!nextUrl.value.includes("/auth")) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"]
}
