import Link from "next/link";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Create account | InvestiAI",
  description: "Create your InvestiAI account.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] circuit-bg transition-colors duration-300">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto">
          <div className="rounded-2xl border border-[#D78E93] dark:border-[#dc2626]/30 bg-white dark:bg-[#0a0a0a] p-8 sm:p-10 shadow-lg dark:shadow-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Create a new account
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-gray-400">
              Enter your details to get started.
            </p>

            <form className="mt-8 space-y-6" action="#" method="post">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-slate-700 dark:text-gray-300"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Doe"
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 outline-none transition-colors"
                />
              </div>
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
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-slate-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#dc2626] px-4 py-3.5 text-base font-semibold text-white uppercase tracking-wide hover:bg-[#b91c1c] transition-colors glow-crimson"
              >
                Create account
              </button>
            </form>

            <p className="mt-8 text-center text-base text-slate-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/auth"
                className="font-medium text-[#dc2626] hover:text-[#b91c1c] dark:hover:text-[#f87171] transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
