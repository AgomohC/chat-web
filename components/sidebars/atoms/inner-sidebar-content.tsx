import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent
} from "@/components/ui/sidebar"
import { dummyConversations } from "@/lib/dummy-data"
import { ConversationSelector } from "./conversation-selector"

export const InnerSidebarContent = () => {
  return (
    <SidebarContent className="relative">
      <SidebarGroup className="px-4">
        <SidebarGroupContent>
          {dummyConversations.map((conversation) => (
            <ConversationSelector
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}
