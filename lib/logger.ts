type LogLevel = "debug" | "info" | "warn" | "error"

interface LogConfig {
  enabled: boolean
  minLevel: LogLevel
}

class Logger {
  private config: LogConfig = {
    enabled: process.env.NODE_ENV !== "production",
    minLevel: "debug"
  }

  configure(config: Partial<LogConfig>) {
    this.config = { ...this.config, ...config }
  }

  private formatTimestamp(): string {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const ms = now.getMilliseconds().toString().padStart(3, "0")
    return `${hours}:${minutes}:${seconds}.${ms}`
  }

  debug(...args: unknown[]) {
    const timestamp = this.formatTimestamp()
    console.debug(`%cDEBUG%c [${timestamp}]`, ...args)
  }

  info(...args: unknown[]) {
    const timestamp = this.formatTimestamp()
    console.info(`%cINFO%c [${timestamp}]`, ...args)
  }

  warn(...args: unknown[]) {
    const timestamp = this.formatTimestamp()
    console.warn(`%cWARN%c [${timestamp}]`, ...args)
  }

  error(...args: unknown[]) {
    const timestamp = this.formatTimestamp()
    console.error(`%cERROR%c [${timestamp}]`, ...args)
  }
}
export const logger = new Logger()
