import { CalendarClock, HomeIcon, SearchIcon, Users } from "lucide-react";


export const navigationItems = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/feed",
  },
  {
    title: "Discover",
    icon: SearchIcon,
    href: "/feed/discover",
  },
  {
    title: "Following",
    icon: Users,
    href: "/feed/following",
  },
  {
    title: "Events",
    icon: CalendarClock,
    href: "/feed/events",
  },
];
