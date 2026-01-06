import { ErrorWrapper } from "@/core/api-client/neurachatFetcher";
import { ExceptionDto } from "@/core/api-client/neurachatSchemas";
import { logger } from "./logger";

export const getApiErrorMessage = (error: unknown): string => {
  const apiError = error as ErrorWrapper<ExceptionDto>;

  let message = apiError.message;
  logger.error(message);
  if (
    "data" in apiError &&
    apiError.data &&
    apiError.data?.messages.length > 0
  ) {
    for (const msg of apiError.data.messages) {
      logger.error(msg);
    }
    message = apiError.data.messages[0];
  }

  return message;
};
