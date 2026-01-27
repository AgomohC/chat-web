import { routes } from "@/lib/routes"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export default function AuthLayout({
  children
}: {
  children: ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 min-h-dvh scroll-smooth gap-8">
      <Link href={routes.auth.login}>
        <Image
          src="/logos/neurachat-high-resolution-logo-transparent.png"
          alt="Neurachat logo icon"
          width={216}
          height={32}
        />
      </Link>
      <div className="flex w-full max-w-md flex-col items-center gap-6  p-8 sm:px-8 px-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {children}
      </div>

      <div className="text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Neurachat. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <button className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </button>
          <button className="hover:text-gray-600 transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  )
}
