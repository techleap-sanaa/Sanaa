import { navigationItems } from "@/utils/navItems";
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sidebarMenuButtonClass } from "./SidebarStyles";

const items = navigationItems;

export default function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();

  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar
      collapsible="icon"
      className="
        bg-sidebar
        text-sidebar-foreground
        border-none
        rounded-lg
        shadow-lg
        p-2
        m-4
        w-[288px]
        group-data-[collapsible=icon]:w-[4rem]
        h-[calc(100vh-2rem)]
        sticky top-4
        bg-[#202123]
      "
    >
      <SidebarHeader>
        <div
          className={cn(
            "flex items-center px-2 py-4 align-middle transition-all",
            open ? "flex-row justify-between" : "flex-col justify-center gap-3"
          )}
        >
          {open ? (
            <span className="text-[32px] font-bold font-adumu text-white">SANAA</span>
          ) : (
            <span className="text-[32px] font-bold font-adumu text-white">S</span>
          )}
          <SidebarTrigger className="w-8 h-8 text-white" />
        </div>
      </SidebarHeader>
      <SidebarContent className="no-scrollbar">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = isActive(item.href);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      data-active={active}
                      className={sidebarMenuButtonClass}
                    >
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 w-full py-5 my-1"
                      >
                        {/* icon */}
                        <span className="size-8 flex items-center justify-center shrink-0 text-white">
                          <item.icon className="h-5 w-5" />
                        </span>

                        {/* label (hidden when collapsed) */}
                        <span className="truncate group-data-[collapsible=icon]:hidden text-white">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* sidebar footer */}

      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                sidebarMenuButtonClass,
                "w-full justify-center md:justify-start"
              )}
            >
              <Settings className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">
                Settings
              </span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-72 bg-sidebar rounded-md border-none p-2"
          >
            {[
              "Profile and account settings",
              "Refine your interests",
              "Support and help",
              "Privacy policy",
              "Terms of use",
            ].map((label) => (
              <Link
                key={label}
                to="/feed"
                className="
            flex items-center px-4 py-2 rounded-md
            text-sidebar-foreground
            hover:bg-destructive hover:text-destructive-foreground
            transition-colors
          "
              >
                {label}
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
