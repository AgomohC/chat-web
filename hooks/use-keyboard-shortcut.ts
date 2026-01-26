import { useEffect, useSyncExternalStore } from "react"

type Callback = () => void

const keyCallbacks = new Map<string, Set<Callback>>()

function subscribe(onStoreChange: () => void) {
  const handler = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && keyCallbacks.has(e.key)) {
      keyCallbacks.get(e.key)!.forEach((cb) => cb())
      onStoreChange()
    }
  }

  window.addEventListener("keydown", handler)
  return () => window.removeEventListener("keydown", handler)
}

function getSnapshot() {
  return null
}

function getServerSnapshot() {
  return null
}

export function useKeyboardShortcut(key: string, callback: Callback) {
  useEffect(() => {
    if (!keyCallbacks.has(key)) {
      keyCallbacks.set(key, new Set())
    }

    keyCallbacks.get(key)!.add(callback)

    return () => {
      const set = keyCallbacks.get(key)
      if (!set) return

      set.delete(callback)
      if (set.size === 0) {
        keyCallbacks.delete(key)
      }
    }
  }, [key, callback])

  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
