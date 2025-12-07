import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#E10600]">
                SANAA
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                Welcome,{" "}
                {user?.username || user?.emailAddresses[0]?.emailAddress}
              </span>
              <UserButton signOutFallbackRedirectUrl="/" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome to Sanaa dashboard! Content will be added to this page
                soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
