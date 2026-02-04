import { useSearchParamsUtils } from "@/hooks/use-search-param-utils"
import { Folder } from "@/lib/models"
import { numberParsers } from "@/lib/number-parsers"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { parseAsString, useQueryState } from "nuqs"

export const FolderBadge = (props: { folder: Folder }) => {
  const { folder } = props

  const [activeFolder, setActiveFolder] = useQueryState(
    "active-folder",
    parseAsString.withDefault("").withOptions({ shallow: false })
  )
  const { createQueryString } = useSearchParamsUtils()

  const pathname = usePathname()
  const queryString = createQueryString("active-folder", folder.slug)

  const folderUrl = `${pathname}?${queryString}`

  const count = numberParsers.formatToCompactNumber(
    folder.conversationsWithUnreadMessagesCount
  )
  const isActive =
    folder.slug == "default" ? !activeFolder : activeFolder == folder.slug

  return (
    <Link
      href={folder.slug == "default" ? pathname : folderUrl}
      onClick={(e) => {
        e.preventDefault()
        if (folder.slug == "default") {
          setActiveFolder("")
        } else {
          setActiveFolder(folder.slug)
        }
      }}
      className={cn("inline-flex items-center gap-1 px-2 py-1 transition-all", {
        "bg-primary/10 rounded-lg": isActive
      })}
    >
      <p className="text-sm text-primary leading-3.5 capitalize">
        {folder.name}
      </p>
      <span className="rounded-full bg-primary text-background text-xs text-center h-4 min-w-4 w-fit select-none px-0.5 inline-flex items-center justify-center">
        {count}
      </span>
    </Link>
  )
}
