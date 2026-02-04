import { SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { folders } from "@/lib/dummy-data"
import { FolderBadge } from "./folder-badge"
import { debounce, parseAsString, useQueryState } from "nuqs"

export const InnerSidebarHeader = () => {
  const [searchQuery, setSearchQuery] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({ shallow: false })
  )

  return (
    <SidebarHeader className="gap-3.5 border-b p-4">
      <div className="flex w-full  justify-between flex-col gap-2">
        <h1 className="text-foreground text-base font-medium">Neurachat</h1>

        <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar rounded-xl shadow-[inset_10px_0_10px_-5px_rgba(0,0,0,0.1),_inset_-10px_0_10px_-10px_rgba(0,0,0,0.1)] p-1">
          {folders.map((folder) => (
            <FolderBadge folder={folder} key={folder.name} />
          ))}
        </div>
      </div>
      <SidebarInput
        placeholder="Type to search..."
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value, {
            limitUrlUpdates: e.target.value === "" ? undefined : debounce(500)
          })
        }
      />
    </SidebarHeader>
  )
}
