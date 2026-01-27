import { useSearchParamsUtils } from "@/hooks/use-search-param-utils"
import { Folder } from "@/lib/models"
import { numberParsers } from "@/lib/number-parsers"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
export const FolderBadge = (props: { folder: Folder }) => {
  const { folder } = props
  const { createQueryString, getSearchParam } = useSearchParamsUtils()

  const pathname = usePathname()
  const queryString = createQueryString(
    "active-folder",
    encodeURIComponent(folder.id)
  )

  const folderUrl = `${pathname}?${queryString}`

  const count = numberParsers.formatToCompactNumber(
    folder.conversationsWithUnreadMessagesCount
  )
  const isActive =
    getSearchParam("active-folder") == encodeURIComponent(folder.id)

  return (
    <Link
      href={folderUrl}
      className={cn("inline-flex items-center gap-1 px-2 py-1 transition-all", {
        "bg-primary/10 rounded-2xl": isActive
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
