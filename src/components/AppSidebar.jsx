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
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const items = navigationItems;

export default function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();
  
  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="text-white border-none rounded-lg shadow-lg bg-[#202123] p-2 m-4 w-[288px] h-[calc(100vh-2rem)] sticky top-4">
      <SidebarHeader>
        <div className="flex flex-col gap-2 px-2">
          <div className="flex items-center w-full justify-between text-white py-4">
            {open ? (
              <>
              <span className="text-[32px] font-bold font-adumu">SANAA</span>
          <SidebarTrigger />
              </>

            ) : (
              <span className="text-lg font-bold font-adumu m-2">S</span>
            )}
          </div>
          {!open && (
            <div className="flex justify-center">
              <SidebarTrigger />
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={cn(
  "my-1 py-6",
  isActive(item.href)
    ? "bg-red-800 text-white"
    : "hover:bg-[#18181A] hover:text-white"
)}
                  >
                    <Link to={item.href}>
                    <span className="size-8 flex items-center justify-center">

                      <item.icon />
                    </span>
                      <span className="ml-2 text-[16px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* sidebar footer */}
      <SidebarFooter>
{/* settings dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex gap-2 items-center hover:bg-[#18181A] py-3 px-2 rounded-md w-full justify-center md:justify-start">
                <Settings className="h-6 w-6" />
                <p>Settings</p>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-70 bg-[#18181A] rounded-md border-none p-4 space-y-1">

              {/* setting items */}
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link to="/feed" className="cursor-pointer flex items-center gap-1">
                     <span className="text-white font-lato font-normal ">Profile and account settings</span>
                </Link>
              </div>
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link to="/feed" className="cursor-pointer flex items-center gap-1">
                     <span className="text-white font-lato font-normal ">Refine your interests</span>
                </Link>
              </div>
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link to="/feed" className="cursor-pointer flex items-center gap-1">
                     <span className="text-white font-lato font-normal ">Support and help</span>
                </Link>
              </div>
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link to="/feed" className="cursor-pointer flex items-center gap-1">
                     <span className="text-white font-lato font-normal ">Privacy policy</span>
                </Link>
              </div>
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link to="/feed" className="cursor-pointer flex items-center gap-1">
                     <span className="text-white font-lato font-normal ">Terms of use</span>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
