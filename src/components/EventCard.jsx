import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventCard({ event }) {
  return (
    <Card className=" p-2 overflow-hidden max-h-28 bg-secondary-foreground border-none">
      <CardContent className=" p-0 space-y-2">
        <div className="flex items-start gap-2">
          <Avatar className="h-5 w-5 shrink-0">
            <AvatarImage
              src={event.creator.avatar}
              alt={event.creator.username}
            />
            <AvatarFallback className="text-xs">
              {event.creator.username?.[0]?.toUpperCase() || "E"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className=" inline-flex text-xs font-lato font-normal text-primary-foreground mt-0.5 ">
              {event.creator.username}
            </p>
          </div>
        </div>
        <article className="flex relative h-24 w-full overflow-hidden gap-2">
          <div className=" h-[3.75rem] w-[3.75rem] ">
            <img
              src={event.banner}
              alt={event.title}
              className="w-full h-full object-cover rounded-[0.3125rem]"
            />
          </div>
          <div>
            <h3 className="text-xs text-primary-foreground line-clamp-2 leading-relaxed text-wrap">
              {event.title}
            </h3>
            <p className="text-xs text-primary-foreground line-clamp-2 leading-relaxed text-wrap">
              <span className=" opacity-60">32nd February</span> <br />
              <span>Timbuktu</span>
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
