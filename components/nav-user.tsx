"use client"

import {
  Bell,
  ChevronsUpDown,
  LogOut,
  Settings,
  UserRoundPen
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import { useUserControllerGetCurrentUser } from "@/core/api-client/neurachatComponents"
import { generateInitials, safeString } from "@/lib/utils"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { useLogout } from "./auth/hooks/use-logout"
import { AvatarWithLoader } from "./reusables/avatar-with-loader"

export function NavUser() {
  const { status, data: user } = useUserControllerGetCurrentUser(
    {},
    {
      placeholderData: {
        status: "success",
        data: {
          avatarUrl: null,
          email: "anonymous@example.com",
          username: "Anonymous",
          id: 1,
          createdAt: "2026-01-13T18:06:36.789Z",
          updatedAt: "2026-01-13T18:06:36.789Z",
          status: "verified"
        },
        timestamp: "2026-01-13T18:06:36.789Z",
        message: "User fetched successfully"
      }
    }
  )

  const { isMobile } = useSidebar()
  const { logout } = useLogout()

  const initials = generateInitials(
    safeString(user?.data?.username, "Anonymous")
  )

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={status == "pending"}>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
            >
              <AvatarWithLoader
                src={safeString(user?.data?.avatarUrl)}
                alt={safeString(user?.data?.username, "avatar")}
                fallback={initials}
                loading={status === "pending"}
                classnames={{
                  root: "h-8 w-8 rounded-full",
                  fallback: "rounded-full",
                  skeleton: "h-8 w-8 rounded-full"
                }}
              />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {safeString(user?.data?.username, "Anonymous")}
                </span>
                <span className="truncate text-xs">
                  {safeString(user?.data?.email, "anonymous")}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage
                    src={safeString(user?.data?.avatarUrl)}
                    alt={safeString(user?.data?.username)}
                  />
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {safeString(user?.data?.username, "Anonymous")}
                  </span>
                  <span className="truncate text-xs">
                    {safeString(user?.data?.email, " anonymous")}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={routes.profile}>
                  <UserRoundPen />
                  Profile
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={routes.settings}>
                  <Settings />
                  Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => {
                logout()
              }}
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
