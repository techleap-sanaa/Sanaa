import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventCard from "./EventCard";
import RecommendedUserCard from "./RecommendedUserCard";
import { mockEvents, mockRecommendedUsers } from "@/data/mockAsideData";
import { ChevronRight } from "lucide-react";

export default function FeedAside() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 w-80 ">
      <div className="space-y-3 rounded-lg w-full p-4 bg-[#202123] flex flex-col">
        <h2 className="text-sm font-normal text-white border-b-[0.5px] border-white border-opacity-60 pb-1">Upcoming Events</h2>
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <Button
          variant="outline"
          className=" w-fit self-center h-9 text-xs"
          onClick={() => navigate("/events")}
        >
          See more events
          {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
        </Button>
      </div>

      <div className="space-y-3 rounded-lg w-full p-4 bg-[#202123] border-none">
        <h2 className="text-sm font-normal text-white border-b border-white border-opacity-60 pb-1">Recommended for you</h2>
        <Card className=" w-full border-none">
          {/* <CardHeader className="pb-3">
            <CardTitle className="text-base">Creators you might like</CardTitle>
          </CardHeader> */}
          <CardContent className="py-4 px-0 w-full flex flex-col gap-2 bg-[#202123] border-none">
            <ScrollArea className=" w-full h-full gap-2 flex flex-row bg-[#202123] border-none p-0 m-0">
              {/* <div className="grid grid-cols-2 gap-3">
                {mockRecommendedUsers.map((user) => (
                  <RecommendedUserCard key={user.id} user={user} />
                ))}
              </div> */}
              <div className=" w-80 h-44 flex overflow-x-auto no-scrollbar gap-2 p-0 m-0">
                {mockRecommendedUsers.map((user) => (
                  <RecommendedUserCard key={user.id} user={user} />
                ))}
              </div>
            </ScrollArea>
            <Button
              variant="outline"
              className=" w-fit self-center h-9 text-xs"
              onClick={() => navigate("/creators")}
            >
              Find more creators
              {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
