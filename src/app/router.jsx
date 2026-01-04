import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import DashboardPage from "../pages/shared/DashboardPage";
import SettingsPage from "../pages/shared/SettingsPage";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import PublicRoute from "../components/shared/PublicRoute";
import NotFoundPage from "@/pages/shared/NotFoundPage";
import FeedPage from "@/pages/shared/FeedPage";
import DiscoverPage from "@/pages/fan/DiscoverPage";
import EventsPage from "@/pages/fan/EventsPage";
import FollowingPage from "@/pages/fan/FollowingPage";

// --- TODO: Hello guys, here is where we will put all our pages/routes from now on
// --- follow the structure/style below to add a route/page

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-in/*",
    element: (
      <PublicRoute>
        <SignInPage />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up/*",
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/feed",
    element: (
      <ProtectedRoute>
        <FeedPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/discover",
    element: (
      <ProtectedRoute>
        <DiscoverPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/events",
    element: (
      <ProtectedRoute>
        <EventsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/following",
    element: (
      <ProtectedRoute>
        <FollowingPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
