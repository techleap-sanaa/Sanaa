import { useState, useEffect } from "react";
import { mockFeedData } from "@/data/mockFeedData";
import { Loader2Icon } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import FeedAside from "@/components/app/FeedAside";
import FeedItem from "@/components/app/FeedItem";
import FeedItemSkeleton from "@/components/skeletons/feedItemSkeleton";

export default function FeedPage() {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeedData(mockFeedData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MainLayout asideContent={<FeedAside />}>
      <div className="mt-0 max-w-4xl mx-auto">
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <FeedItemSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4 mt-0">
            {feedData?.map((item) => (
              <FeedItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
