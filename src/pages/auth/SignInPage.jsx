import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-3/5 rounded-2xl shadow-md flex justify-between p-2 gap-3">
        <div className="w-3/6 py-36 px-6 rounded-2xl bg-[#E10600] align-middle">
          <div className="text-3xl text-white font-bold text-left">
            Welcome back
          </div>
          <h2 className="mt-2 text-white font-light text-[18px] max-w-[20rem] text-left">
            Log in to connect with your creative circle, and discover new
            inspiration
          </h2>
        </div>
        <div className="w-3/6">
          <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
        </div>
      </div>
    </div>
  );
}
