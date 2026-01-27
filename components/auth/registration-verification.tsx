import { routes } from "@/lib/routes"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export const RegistrationVerificationError = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {/* Background circles */}
          <circle cx="60" cy="60" r="58" fill="#FEE2E2" opacity="0.3" />
          <circle cx="60" cy="60" r="50" fill="#FEE2E2" opacity="0.5" />

          {/* Main error circle */}
          <circle cx="60" cy="60" r="40" fill="#EF4444" />

          {/* X mark */}
          <path
            d="M45 45L75 75M75 45L45 75"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Broken link illustration */}
          <g opacity="0.6">
            <rect x="35" y="15" width="20" height="8" rx="4" fill="#EF4444" />
            <rect x="65" y="15" width="20" height="8" rx="4" fill="#EF4444" />
            <path
              d="M55 19L65 19"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="2 2"
            />
          </g>

          {/* Alert dots */}
          <circle cx="20" cy="60" r="2" fill="#EF4444" opacity="0.4" />
          <circle cx="100" cy="60" r="2" fill="#EF4444" opacity="0.4" />
          <circle cx="60" cy="100" r="2" fill="#EF4444" opacity="0.4" />
        </svg>
      </div>

      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          The verification link may have expired or is invalid. This can happen
          if:
        </p>
        <ul className="text-xs text-gray-500 space-y-1 text-left bg-gray-50 p-4 rounded-lg">
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            <span>The link has already been used</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            <span>The link has expired (valid for 1 hours)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">•</span>
            <span>The link was copied incorrectly</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3 pt-2">
        <div className="w-full text-xs">
          Back to&nbsp;
          <Link href={routes.auth.login} className="text-emerald-700">
            Login
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          Need help? Contact support@emerem.xyz
        </p>
      </div>
    </div>
  )
}

export const RegistrationVerificationSuccess = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          className="animate-[scale-in_0.5s_ease-out]"
        >
          {/* Outer circle with gradient */}
          <circle
            cx="60"
            cy="60"
            r="58"
            fill="url(#successGradient)"
            opacity="0.1"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="url(#successGradient)"
            opacity="0.2"
          />

          {/* Main circle */}
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="#10B981"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          />

          {/* Checkmark with animation */}
          <path
            d="M45 60L54 69L75 48"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[draw_0.5s_ease-out_0.3s_both]"
            style={{
              strokeDasharray: 50,
              strokeDashoffset: 50
            }}
          />

          {/* Sparkles */}
          <circle
            cx="25"
            cy="35"
            r="3"
            fill="#10B981"
            className="animate-[ping_1s_ease-in-out_infinite]"
            opacity="0.6"
          />
          <circle
            cx="95"
            cy="45"
            r="2"
            fill="#10B981"
            className="animate-[ping_1s_ease-in-out_0.3s_infinite]"
            opacity="0.6"
          />
          <circle
            cx="85"
            cy="85"
            r="2.5"
            fill="#10B981"
            className="animate-[ping_1s_ease-in-out_0.6s_infinite]"
            opacity="0.6"
          />

          <defs>
            <linearGradient
              id="successGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="space-y-2">
        <p className="text-gray-600">
          Welcome to Neurachat! Your email has been verified and your account is
          ready to use.
        </p>
      </div>

      <div className="w-full text-xs">
        Back to&nbsp;
        <Link href={routes.auth.login} className="text-emerald-700">
          Login
        </Link>
      </div>
    </div>
  )
}

export const RegistrationVerificationLoader = () => {
  return (
    <div className="text-center space-y-6 py-8">
      <div className="flex justify-center">
        <Loader2 size={48} className="text-blue-600 animate-spin" />
      </div>
      <p className="text-xs text-gray-500">This will only take a moment...</p>
    </div>
  )
}
