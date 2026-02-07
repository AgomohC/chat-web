import { Sidebar } from "../ui/sidebar"
import { ChecklistProvider } from "@/hooks/use-checklist"
import { InnerSidebarHeader } from "./atoms/inner-sidebar-header"
import { InnerSidebarContent } from "./atoms/inner-sidebar-content"
import { InnerSidebarFooter } from "./atoms/inner-sidebar-footer"

export const InnerSidebar = () => {
  return (
    <ChecklistProvider>
      <Sidebar
        collapsible="none"
        className="hidden flex-1 md:flex max-w-[calc(var(--sidebar-width)-calc(var(--sidebar-width-icon)+1px))]"
      >
        <InnerSidebarHeader />
        <InnerSidebarContent />
        <InnerSidebarFooter />
      </Sidebar>
    </ChecklistProvider>
  )
}
