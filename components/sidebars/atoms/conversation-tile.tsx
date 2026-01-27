import { Conversation } from "@/lib/models"
import { cn, generateInitials, safeString } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TimeDisplay } from "../../reusables/time-display"
import { UnreadMessageBadge } from "./unread-message-badge"
import { CircleCheck, Pin, VolumeOff } from "lucide-react"
import { MessageContentPreview } from "./message-content-preview"
import { useChecklist } from "@/hooks/use-checklist"
import { useSearchParamsUtils } from "@/hooks/use-search-param-utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity } from "react"

export const ConversationTile = (props: { conversation: Conversation }) => {
  const { isSelected } = useChecklist()

  const {
    id,
    name,
    isGroup,
    messages,
    unreadMessageCount,
    isPinned,
    avatar,
    isMuted
  } = props.conversation
  const latestMessage = messages[0]

  const latestMessageTimestamp = latestMessage ? latestMessage.timestamp : null
  const { createQueryString, getSearchParam } = useSearchParamsUtils()
  const avatarFallback = generateInitials(name)

  const isOnline = id % 2 == 0
  const isActive = getSearchParam("conversationId") == id.toString()

  const pathname = usePathname()

  const queryString = createQueryString("conversationId", id.toString())

  const conversationUrl = pathname + "?" + queryString

  return (
    <Link
      href={conversationUrl}
      className={cn(
        "flex w-full h-18 p-2 items-center gap-1 cursor-pointer hover:bg-accent rounded-lg relative",
        {
          "bg-accent": isActive
        }
      )}
    >
      <Avatar
        className={cn("h-14 w-14 rounded-full overflow-visible", {
          "border-2 border-primary": isSelected(id)
        })}
      >
        <AvatarImage
          src={safeString(avatar)}
          alt={safeString(name, "avatar")}
          className="object-cover rounded-full"
        />
        <AvatarFallback className="rounded-lg" delayMs={400}>
          {avatarFallback}
        </AvatarFallback>

        <Activity mode={isOnline ? "visible" : "hidden"}>
          <span className="absolute bottom-0 right-0 block size-4 rounded-full bg-primary" />
        </Activity>

        <Activity mode={isSelected(id) ? "visible" : "hidden"}>
          <div className="absolute bottom-0 bg-primary left-0 rounded-full size-fit ">
            <CircleCheck className="size-4 text-background" />
          </div>
        </Activity>
      </Avatar>

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex justify-between items-center w-full max-w-full gap-2">
          <div className="inline-flex items-center gap-0.5 min-w-0">
            <h2 className="text-base truncate">{name}</h2>

            <Activity mode={isMuted ? "visible" : "hidden"}>
              <VolumeOff size={12} className="mt-1 shrink-0 text-destructive" />
            </Activity>
          </div>
          <TimeDisplay dateTime={latestMessageTimestamp} />
        </div>
        <div className="flex empty:hidden justify-between gap-3 w-full max-w-full">
          <MessageContentPreview message={latestMessage} isGroup={isGroup} />
          {isPinned && !unreadMessageCount ? (
            <Pin />
          ) : unreadMessageCount ? (
            <UnreadMessageBadge unreadMessageCount={unreadMessageCount} />
          ) : null}
        </div>
      </div>
    </Link>
  )
}
