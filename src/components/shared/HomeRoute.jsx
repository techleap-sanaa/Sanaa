import LoaderPage from "@/pages/shared/LoaderPage";
import { useAuth } from "@clerk/clerk-react";
import LandingPage from "@/pages/landing/LandingPage";
import FeedPage from "@/pages/shared/FeedPage";

export default function HomeRoute() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <LoaderPage />;
  }

  // If user is signed in, show feed page
  if (isSignedIn) {
    return <FeedPage />;
  }

  // If user is not signed in, show landing page
  return <LandingPage />;
}
