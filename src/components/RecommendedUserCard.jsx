import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

export default function RecommendedUserCard({ user, onFollow }) {
  return (
    <Card className=" h-full w-28 bg-secondary-foreground border-none">
      <CardContent className="p-2 space-y-2 flex flex-col h-full justify-evenly">
        <div className="items-center gap-2 flex flex-col">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback>
              {user.username?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold truncate text-primary-foreground">{user.username}</h4>
            <p className="text-xs text-muted-foreground truncate">
              {user.category}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full self-end m-0"
          onClick={() => onFollow?.(user.id)}
        >
          <UserPlus className="h-3 w-3 text-destructive" />
          Follow
        </Button>
      </CardContent>
    </Card>
  );
}
