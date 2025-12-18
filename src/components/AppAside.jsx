import { ScrollArea } from "./ui/scroll-area";

export default function AppAside({ children }) {
  return (
    <aside className="hidden lg:flex w-80 mr-4 flex-shrink-0 h-full flex-col">
      <ScrollArea className="flex-1">
        <div>{children}</div>
      </ScrollArea>
    </aside>
  );
}
