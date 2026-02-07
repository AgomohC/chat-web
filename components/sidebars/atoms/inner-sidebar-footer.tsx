import { Button } from "@/components/ui/button"
import { SidebarFooter } from "@/components/ui/sidebar"
import { useChecklist } from "@/hooks/use-checklist"
import { dummyConversations } from "@/lib/dummy-data"
import { cn } from "@/lib/utils"
import { MessageNotificationCircle } from "@untitledui/icons"
import { ArchiveX, MessageCircle, Mic, MicOff, Trash2, X } from "lucide-react"
import { Activity } from "react"

export const InnerSidebarFooter = () => {
  const { selectedItems, deselectAll } = useChecklist()

  const itemsById = new Map(dummyConversations.map((item) => [item.id, item]))

  const detailedSelectedItems = Array.from(selectedItems)
    .map((itemId) => itemsById.get(itemId))
    .filter(Boolean)
  const isMuted = detailedSelectedItems.some((item) => item.isMuted)
  const isUnread = detailedSelectedItems.some(
    (item) => item.unreadMessageCount > 0
  )
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        selectedItems.size > 0 ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <SidebarFooter className="flex flex-row py-2 px-3 justify-between items-center">
        <div className="flex gap-1 items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              deselectAll()
            }}
          >
            <X />
          </Button>
          <span>{selectedItems.size ? selectedItems.size : null}</span>
        </div>
        <div className="space-x-0.5">
          <Activity mode={isMuted ? "visible" : "hidden"}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="unmute conversations"
            >
              <Mic />
            </Button>
          </Activity>

          <Activity mode={!isMuted ? "visible" : "hidden"}>
            <Button variant="ghost" size="icon" aria-label="mute conversations">
              <MicOff />
            </Button>
          </Activity>
          <Button
            variant="ghost"
            size="icon"
            aria-label="archive conversations"
          >
            <ArchiveX />
          </Button>
          <Activity mode={isUnread ? "visible" : "hidden"}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="mark conversations as read"
            >
              <MessageCircle />
            </Button>
          </Activity>

          <Activity mode={!isUnread ? "visible" : "hidden"}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="mark conversations as unread"
            >
              <MessageNotificationCircle />
            </Button>
          </Activity>
          <Button
            variant="destructive"
            size="icon"
            aria-label="delete conversations"
          >
            <Trash2 />
          </Button>
        </div>
      </SidebarFooter>
    </div>
  )
}
