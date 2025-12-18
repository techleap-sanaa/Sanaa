import { useState, useEffect } from "react";
import FeedItem from "@/components/FeedItem";
import FeedAside from "@/components/FeedAside";
import { mockFeedData } from "@/data/mockFeedData";
import { Loader2Icon } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function FeedPage() {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeedData(mockFeedData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <MainLayout asideContent={<FeedAside />}>
      <div className="mt-0 max-w-4xl mx-auto">

        {loading ? (
          <div className="text-center py-12 justify-center flex flex-col items-center">
            <Loader2Icon className="animate-spin size-8 text-red-800"/>
            <p className="text-white/70">Just a second...</p>
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
