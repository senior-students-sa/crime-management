import Link from "next/link";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Forgot password | InvestiAI",
  description: "Reset your InvestiAI account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] circuit-bg transition-colors duration-300">
      <Navbar />

      <main className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto">
          <div className="rounded-2xl border border-[#D78E93] dark:border-[#dc2626]/30 bg-white dark:bg-[#0a0a0a] p-8 sm:p-10 shadow-lg dark:shadow-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-gray-400">
              Enter your email and we&apos;ll send you a link to reset your password.
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
                  className="mt-2.5 block w-full rounded-lg border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-500 focus:border-[#dc2626] focus:ring-2 focus:ring-[#dc2626]/20 outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#dc2626] px-4 py-3.5 text-base font-semibold text-white uppercase tracking-wide hover:bg-[#b91c1c] transition-colors glow-crimson"
              >
                Send reset link
              </button>
            </form>

            <p className="mt-8 text-center">
              <Link
                href="/auth"
                className="text-base font-medium text-[#dc2626] hover:text-[#b91c1c] dark:hover:text-[#f87171] transition-colors"
              >
                ← Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
