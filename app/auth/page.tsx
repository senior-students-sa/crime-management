import Link from "next/link";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Sign in | InvestiAI",
  description: "Sign in to your InvestiAI account.",
};

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] circuit-bg transition-colors duration-300">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto">
          {/* Login card */}
          <div className="rounded-2xl border border-[#D78E93] dark:border-[#dc2626]/30 bg-white dark:bg-[#0a0a0a] p-8 sm:p-10 shadow-lg dark:shadow-none transition-all duration-300 hover:shadow-xl hover:shadow-[#dc2626]/10 dark:hover:shadow-[#dc2626]/15 hover:border-[#dc2626]/50 dark:hover:border-[#dc2626]/60">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-gray-400">
              Enter your credentials to access your account.
            </p>

            <form className="mt-8 space-y-6" action="#" method="post">
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-slate-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 dark:focus:ring-[#dc2626]/30 outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium text-slate-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm font-medium text-[#dc2626] hover:text-[#b91c1c] dark:hover:text-[#f87171] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 dark:focus:ring-[#dc2626]/30 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#dc2626] px-4 py-3.5 text-base font-semibold text-white uppercase tracking-wide hover:bg-[#b91c1c] transition-colors glow-crimson"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-base text-slate-600 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-[#dc2626] hover:text-[#b91c1c] dark:hover:text-[#f87171] transition-colors"
              >
                Create a new account
              </Link>
            </p>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
}
