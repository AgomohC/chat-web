/**
 * @see https://claude.ai/chat/836a7fba-b11b-4cd7-bb0f-42c82db0cdc2
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogConfig {
  enabled: boolean;
  minLevel: LogLevel;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const LOG_COLORS: Record<LogLevel, string> = {
  debug: "#9333ea", // purple
  info: "#0ea5e9", // blue
  warn: "#f59e0b", // orange
  error: "#ef4444", // red
};

const LOG_BACKGROUNDS: Record<LogLevel, string> = {
  debug: "#faf5ff",
  info: "#f0f9ff",
  warn: "#fffbeb",
  error: "#fef2f2",
};

class Logger {
  private config: LogConfig = {
    enabled: process.env.NODE_ENV !== "production",
    minLevel: "debug",
  };

  configure(config: Partial<LogConfig>) {
    this.config = { ...this.config, ...config };
  }

  private shouldLog(level: LogLevel): boolean {
    return (
      this.config.enabled &&
      LOG_LEVELS[level] >= LOG_LEVELS[this.config.minLevel]
    );
  }

  private getCallerInfo(): { file: string; func: string } {
    const err = new Error();
    const stack = err.stack?.split("\n");

    // Stack trace format varies by browser
    // Chrome/Edge: "    at functionName (file:line:column)"
    // Firefox: "functionName@file:line:column"

    if (stack && stack.length > 3) {
      const callerLine = stack[3].trim();

      // Chrome/Edge format
      if (callerLine.includes("at ")) {
        const match = callerLine.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
        if (match) {
          const func =
            match[1] === "Object.<anonymous>" ? "anonymous" : match[1];
          const fullPath = match[2];
          const file = fullPath.split("/").pop() || fullPath;
          return { file, func };
        }

        // Handle anonymous functions: "at file:line:column"
        const anonymousMatch = callerLine.match(/at\s+(.+?):(\d+):(\d+)/);
        if (anonymousMatch) {
          const fullPath = anonymousMatch[1];
          const file = fullPath.split("/").pop() || fullPath;
          return { file, func: "anonymous" };
        }
      }

      // Firefox format
      const firefoxMatch = callerLine.match(/^(.+?)@(.+?):(\d+):(\d+)/);
      if (firefoxMatch) {
        const func = firefoxMatch[1] || "anonymous";
        const fullPath = firefoxMatch[2];
        const file = fullPath.split("/").pop() || fullPath;
        return { file, func };
      }
    }

    return { file: "unknown", func: "unknown" };
  }

  private formatTimestamp(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ms = now.getMilliseconds().toString().padStart(3, "0");
    return `${hours}:${minutes}:${seconds}.${ms}`;
  }

  private log(level: LogLevel, ...args: unknown[]) {
    if (!this.shouldLog(level)) return;

    const timestamp = this.formatTimestamp();
    const { file, func } = this.getCallerInfo();
    const color = LOG_COLORS[level];
    const bgColor = LOG_BACKGROUNDS[level];

    // Format the log with colors
    console.log(
      `%c${level.toUpperCase()}%c [${timestamp}] %c${file}%c::%c${func}%c`,
      `background: ${bgColor}; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;`,
      `color: #6b7280;`,
      `color: ${color}; font-weight: bold;`,
      `color: #6b7280;`,
      `color: ${color}; font-style: italic;`,
      `color: inherit;`,
      ...args,
    );
  }

  debug(...args: unknown[]) {
    this.log("debug", ...args);
  }

  info(...args: unknown[]) {
    this.log("info", ...args);
  }

  warn(...args: unknown[]) {
    this.log("warn", ...args);
  }

  error(...args: unknown[]) {
    this.log("error", ...args);
  }
}

// Export a singleton instance
export const logger = new Logger();

// Usage example:
// import { logger } from './logger';
//
// function MyComponent() {
//   logger.info('Component mounted');
//   logger.debug('Debug info:', { data: 'value' });
//   logger.warn('Warning message');
//   logger.error('Error occurred:', new Error('Something went wrong'));
// }
