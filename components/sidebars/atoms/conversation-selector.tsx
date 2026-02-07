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
  const { select, isSelected, deselect } = useChecklist()

  return (
    <ContextMenuContent className="w-52">
      <ContextMenuItem aria-label="archive conversation">
        <ArchiveX />
        Archive
      </ContextMenuItem>

      {props.conversation.isPinned === true ? (
        <ContextMenuItem aria-label="unpin conversation">
          <PinOff />
          Unpin
        </ContextMenuItem>
      ) : (
        <ContextMenuItem aria-label="pin conversation">
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
          <ContextMenuItem aria-label="add conversation to personal folder">
            <User />
            Personal
          </ContextMenuItem>
          <ContextMenuItem aria-label="add conversation to work folder">
            <Folder />
            Work
          </ContextMenuItem>

          <ContextMenuSeparator />
          <ContextMenuItem aria-label="create new folder">
            Create Folder
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <ContextMenuItem aria-label="mute conversation">
            <MicOff />
            Mute
          </ContextMenuItem>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-44">
          <ContextMenuItem aria-label="mute conversation for a period of time">
            <AlarmClock />
            Mute For...
          </ContextMenuItem>
          <ContextMenuItem aria-label="unmute conversation">
            <Mic />
            Unmute
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      {props.conversation.unreadMessageCount > 0 ? (
        <ContextMenuItem aria-label="mark conversation as read">
          <MessageCircle />
          Mark as read
        </ContextMenuItem>
      ) : (
        <ContextMenuItem aria-label="mark conversation as unread">
          <MessageNotificationCircle />
          Mark as unread
        </ContextMenuItem>
      )}
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive" aria-label="report conversation">
        <Flag />
        Report
      </ContextMenuItem>
      {props.conversation.type === "group" ? (
        <ContextMenuItem variant="destructive" aria-label="leave group">
          <DoorOpen />
          Leave group
        </ContextMenuItem>
      ) : (
        <ContextMenuItem variant="destructive" aria-label="delete conversation">
          <Trash2 />
          Delete
        </ContextMenuItem>
      )}

      {isSelected(props.conversation.id) ? (
        <>
          <ContextMenuSeparator />

          <ContextMenuItem
            onClick={() => {
              deselect(props.conversation.id)
            }}
            aria-label="Unselect conversation"
          >
            <CircleCheck />
            Unselect
          </ContextMenuItem>
        </>
      ) : (
        <>
          <ContextMenuSeparator />

          <ContextMenuItem
            onClick={() => {
              select(props.conversation.id)
            }}
            aria-label="select conversation"
          >
            <CircleCheck />
            Select
          </ContextMenuItem>
        </>
      )}
    </ContextMenuContent>
  )
}
