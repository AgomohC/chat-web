"use client";
import { EnvVars } from "@/lib/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            gcTime: 1000 * 60 * 60 * 4,
            refetchOnReconnect: true,
            refetchOnWindowFocus: EnvVars.environment !== "development",
            retry: 2,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
