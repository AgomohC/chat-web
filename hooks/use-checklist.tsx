import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo
} from "react"

type CheckedState = {
  selectedItems: Set<number>
  selectAll: (itemIds: number[]) => void
  deselectAll: () => void
  select: (itemId: number) => void
  deselect: (itemId: number) => void
  isSelected: (itemId: number) => boolean
}

const ChecklistContext = createContext<CheckedState | null>(null)

export function ChecklistProvider({ children }: { children: React.ReactNode }) {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  const selectAll = useCallback((itemIds: number[]) => {
    setSelectedItems(new Set(itemIds))
  }, [])

  const deselectAll = useCallback(() => {
    setSelectedItems(new Set())
  }, [])

  const select = useCallback((itemId: number) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      newSet.add(itemId)
      return newSet
    })
  }, [])

  const deselect = useCallback((itemId: number) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      newSet.delete(itemId)
      return newSet
    })
  }, [])

  const isSelected = useCallback(
    (itemId: number) => selectedItems.has(itemId),
    [selectedItems]
  )

  const value = useMemo(
    () => ({
      selectedItems,
      selectAll,
      deselectAll,
      select,
      deselect,
      isSelected
    }),
    [selectedItems, selectAll, deselectAll, select, deselect, isSelected]
  )

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  )
}

export const useChecklist = () => {
  const context = useContext(ChecklistContext)
  if (!context) {
    throw new Error("useChecklist must be used within a ChecklistProvider")
  }
  return context
}
