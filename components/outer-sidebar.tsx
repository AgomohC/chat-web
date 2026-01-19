import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { routes } from "@/lib/routes";
import {
  ArchiveX,
  ContactRound,
  MessageCircle,
  UserRound,
  UsersRound,
} from "lucide-react";
import { NavUser } from "./nav-user";
import { usePathname } from "next/navigation";
import { useSearchParamsUtils } from "@/hooks/use-search-param-utils";
const navItem = [
  {
    title: "New Contact",
    url: routes.newContact,
    icon: UserRound,
  },
  {
    title: "New Group",
    url: routes.newGroup,
    icon: UsersRound,
  },
  {
    title: "Chats",
    url: routes.allChats,
    icon: MessageCircle,
  },
  {
    title: "Contacts",
    url: routes.contacts,
    icon: ContactRound,
  },
  {
    title: "Archived Chats",
    url: routes.archivedChats,
    icon: ArchiveX,
    hasChildRoutes: true,
  },
];

export const OuterSideBar = () => {
  const pathname = usePathname();

  const { createQueryString } = useSearchParamsUtils();

  const generateLinkFromSearchParam = (searchParam: URLSearchParams) => {
    const [key, value] = searchParam.toString().split("=");
    return pathname + "?" + createQueryString(key, value);
  };

  return (
    <Sidebar
      collapsible="none"
      className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center">
                  <Avatar className="rounded-none">
                    <AvatarImage src="/logos/neurachat-logo.png" alt="logo" />
                  </Avatar>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Neurachat</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navItem.map((item) => {
                const href =
                  typeof item.url === "string"
                    ? item.url
                    : generateLinkFromSearchParam(item.url);

                // If item.url is not a string, it means it is a url search param and those are never active
                const isActive =
                  typeof item.url !== "string"
                    ? false
                    : item.hasChildRoutes
                      ? pathname.includes(href)
                      : pathname === href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      isActive={isActive}
                      className="px-2.5 md:px-2"
                      asChild={item.url !== undefined}
                    >
                      <Link href={href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};
