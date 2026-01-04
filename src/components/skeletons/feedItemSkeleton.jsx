import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedItemSkeleton() {
  return (
    <Card className="overflow-hidden bg-[#202123] border-none rounded-xl mx-auto">
      {/* Media Skeleton */}
      <div className="w-full aspect-video rounded-t-xl overflow-hidden">
        <Skeleton className="w-full h-full bg-gray-500" />
      </div>

      <CardContent className="p-4 md:p-6 space-y-4">
        {/* Title and Metadata */}
        <div>
          <Skeleton className="h-4 w-40 mb-2 bg-gray-500" />
          <Skeleton className="h-6 w-3/4 mb-2 bg-gray-500" />
          <Skeleton className="h-3 w-24 bg-gray-500" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-gray-500" />
          <Skeleton className="h-4 w-32 bg-gray-500" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-gray-500" />
          <Skeleton className="h-4 w-full bg-gray-500" />
          <Skeleton className="h-4 w-2/3 bg-gray-500" />
        </div>
      </CardContent>

      <CardFooter className="p-4 md:p-6 pt-0 flex flex-col">
        {/* Action Buttons */}
        <div className="flex justify-center gap-3 w-full mb-4">
          <Skeleton className="flex-1 h-12 bg-gray-500" />
          <Skeleton className="flex-1 h-12 bg-gray-500" />
        </div>

        {/* Interaction Buttons */}
        <div className="flex gap-2 w-full">
          <Skeleton className="h-10 w-20 rounded-full bg-gray-500" />
          <Skeleton className="h-10 w-20 rounded-full bg-gray-500" />
        </div>
      </CardFooter>
    </Card>
  );
}
