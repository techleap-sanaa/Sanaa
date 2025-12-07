import { SignUp } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-3/5 gap-5 rounded-2xl shadow-md flex p-3">
        <div className="w-3/6">
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        </div>

        <div className="w-3/6 py-36 px-6 rounded-2xl bg-[#E10600] align-middle">
          <div className="text-3xl text-white font-bold text-left">
            Let's get started
          </div>
          <h2 className="mt-2 text-white font-light text-[18px] text-left">
            Join the vibrant community of artists, performers and creators
          </h2>
        </div>
      </div>
    </div>
  );
}
