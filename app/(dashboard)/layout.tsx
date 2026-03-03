import { AppSidebar } from "@/components/sidebars/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Suspense } from "react"
const ChatDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </Suspense>
  )
}

export default ChatDashboardLayout
