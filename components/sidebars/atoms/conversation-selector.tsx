import { Conversation } from "@/lib/models"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { ConversationTile } from "./conversation-tile"
import {
  AlarmClock,
  ArchiveX,
  CircleCheck,
  DoorOpen,
  Flag,
  Folder,
  Folders,
  MessageCircle,
  Mic,
  MicOff,
  Pin,
  PinOff,
  Trash2,
  User
} from "lucide-react"
import { MessageNotificationCircle } from "@untitledui/icons"
import { useChecklist } from "@/hooks/use-checklist"

export const ConversationSelector = (props: { conversation: Conversation }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ConversationTile conversation={props.conversation} />
      </ContextMenuTrigger>
      <ConversationMenu conversation={props.conversation} />
    </ContextMenu>
  )
}

export const ConversationMenu = (props: { conversation: Conversation }) => {
  const { select, isSelected } = useChecklist()

  return (
    <ContextMenuContent className="w-52">
      <ContextMenuItem>
        <ArchiveX />
        Archive
      </ContextMenuItem>

      {props.conversation.isPinned === true ? (
        <ContextMenuItem>
          <PinOff />
          Unpin
        </ContextMenuItem>
      ) : (
        <ContextMenuItem>
          <Pin />
          Pin
        </ContextMenuItem>
      )}

      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex gap-2">
            <Folders />
            Add to Folder
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-44">
          <ContextMenuItem>
            <User />
            Personal
          </ContextMenuItem>
          <ContextMenuItem>
            <Folder />
            Work
          </ContextMenuItem>

          <ContextMenuSeparator />
          <ContextMenuItem>Create Folder</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex gap-2">
            <MicOff />
            Mute
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-44">
          <ContextMenuItem>
            <AlarmClock />
            Mute For...
          </ContextMenuItem>
          <ContextMenuItem>
            <Mic />
            Unmute
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      {props.conversation.unreadMessageCount > 0 ? (
        <ContextMenuItem>
          <MessageCircle />
          Mark as read
        </ContextMenuItem>
      ) : (
        <ContextMenuItem>
          <MessageNotificationCircle />
          Mark as unread
        </ContextMenuItem>
      )}
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Flag />
        Report
      </ContextMenuItem>
      {props.conversation.type === "group" ? (
        <ContextMenuItem variant="destructive">
          <DoorOpen />
          Leave group
        </ContextMenuItem>
      ) : (
        <ContextMenuItem variant="destructive">
          <Trash2 />
          Delete
        </ContextMenuItem>
      )}

      {isSelected(props.conversation.id) ? null : (
        <>
          <ContextMenuSeparator />

          <ContextMenuItem
            onClick={() => {
              select(props.conversation.id)
            }}
          >
            <CircleCheck />
            Select
          </ContextMenuItem>
        </>
      )}
    </ContextMenuContent>
  )
}
