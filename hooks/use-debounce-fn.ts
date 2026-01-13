import { debounce } from "es-toolkit";
import { useCallback, useMemo, useState } from "react";
import { useLatest } from "@/hooks/use-latest";
import { useUnmount } from "@/hooks/use-unmount";
import type { DebouncedFunction, DebounceOptions } from "es-toolkit";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

export type { DebounceOptions };

export function useDebounceFn<Fn extends (...args: unknown[]) => unknown>(
  fn: Fn,
  debounceMs?: number,
  options?: DebounceOptions,
) {
  const fnRef = useLatest(fn);
  const [debouncedFn, setDebouncedFn] =
    useState<DebouncedFunction<(...args: Parameters<Fn>) => unknown>>();

  useIsomorphicLayoutEffect(() => {
    setDebouncedFn(
      debounce(
        (...args: Parameters<Fn>) => fnRef.current(...args),
        debounceMs ?? 1000,
        options,
      ),
    );
  }, [debounceMs, options]);

  useUnmount(() => debouncedFn?.cancel());

  return {
    run: debouncedFn,
    cancel: debouncedFn?.cancel,
    flush: debouncedFn?.flush,
  };
}
