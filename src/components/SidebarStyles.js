import { cn } from "@/lib/utils";

export const sidebarMenuButtonClass = cn(
  // layout
  "flex items-center gap-3 rounded-md px-3 py-3 text-[16px] transition-colors",
  // default
  "text-sidebar-foreground",
  // hover (dark, but subtle)
  "hover:bg-sidebar-accent/40",
  // active
  "data-[active=true]:bg-destructive data-[active=true]:text-destructive-foreground",
  // focus
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
);
