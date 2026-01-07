import { useUser, useClerk } from "@clerk/clerk-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, User, LogOut, BellIcon, Menu } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navigationItems } from "@/utils/navItems";
import { cn } from "@/lib/utils";

export default function AppHeader() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#18181A] backdrop-blur supports-[backdrop-filter]:bg-[#18181A]/60">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Mobile Menu Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="inline-flex items-center justify-center rounded-md text-white hover:opacity-80 transition-opacity focus:outline-none">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="bg-[#202123] border-none rounded-t-2xl pb-8 pt-14 px-1"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <SheetClose asChild key={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-4 py-3 text-[16px] transition-colors",
                        active
                          ? "bg-red-600 text-white font-semibold"
                          : "text-white hover:bg-[#2C2C2C]"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center ml-auto gap-4">
          {/* Bell icon - will act as notification trigger */}
          <BellIcon className="h-6 w-6 text-white hover:text-muted-foreground ease-in-out cursor-pointer" />

          {/* User dropdown menu */}
          <DropdownMenu>
            {/* User avatar and name */}
            <DropdownMenuTrigger asChild>
              <button className="flex gap-2 items-center hover:opacity-80 transition-opacity focus:outline-none bg-gray-200 py-[5px] px-2 rounded-full">
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    src={user?.imageUrl}
                    alt={
                      user?.username ||
                      user?.emailAddresses[0]?.emailAddress ||
                      "User"
                    }
                  />
                  <AvatarFallback>
                    {user?.username?.[0]?.toUpperCase() ||
                      user?.emailAddresses[0]?.emailAddress?.[0]?.toUpperCase() ||
                      "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm text-left font-medium leading-none">
                    {user?.username ||
                      user?.emailAddresses[0]?.emailAddress?.split("@")[0] ||
                      "User"}
                  </p>
                  <p className="text-xs text-left leading-none text-gray-700">
                    fan profile
                  </p>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 bg-[#202123] border-none"
            >
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link
                  to="/feed"
                  className="cursor-pointer flex items-center gap-1"
                >
                  <Avatar className="h-7 w-7">
                    <AvatarImage
                      src={user?.imageUrl}
                      alt={
                        user?.username ||
                        user?.emailAddresses[0]?.emailAddress ||
                        "User"
                      }
                    />
                    <AvatarFallback>
                      {user?.username?.[0]?.toUpperCase() ||
                        user?.emailAddresses[0]?.emailAddress?.[0]?.toUpperCase() ||
                        "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white ml-2 font-lato ">
                    {user?.username}
                  </span>
                </Link>
              </div>
              <DropdownMenuSeparator className="bg-white/20 m-2" />
              <div className="my-5 w-full flex items-center px-6 text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white cursor-pointer">
                <Link
                  to="/feed"
                  className="cursor-pointer flex items-center gap-1"
                >
                  <User className="mr-2 h-6 w-6 text-white" />
                  <span className="text-white font-lato font-normal ">
                    Profile
                  </span>
                </Link>
              </div>

              <DropdownMenuSeparator className="bg-white/20 m-2" />
              <div
                onClick={handleSignOut}
                className="cursor-pointer text-red-600 hover:bg-red-600 py-2 rounded-md hover:text-white my-5 w-full flex items-center px-6"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
