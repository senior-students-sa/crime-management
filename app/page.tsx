import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/components/navbar";
import darkModeLogo from "./assets/images/dark-mode-logo.png";
import aboutSystemDark from "./assets/images/about-system.png";
import aboutSystemLight from "./assets/images/light-mode-about-system.png";
import heroDashboardDark from "./assets/images/hero-section-image-dashboard.png";
import heroDashboardLight from "./assets/images/light-mode-hero-image.png";
// Dark mode card images
import card1ImageDark from "./assets/images/card-1-image.png";
// Light mode card images
import card1ImageLight from "./assets/images/light-mode-card-1.png";
import card2ImageLight from "./assets/images/light-mode-card-2-image.png";
import card3ImageLight from "./assets/images/light-mode-card-3.png";

const features = [
  { title: "Digital Forensics", imageDark: card1ImageDark, imageLight: card1ImageLight },
  { title: "Threat Assessment", imageDark: card1ImageDark, imageLight: card2ImageLight },
  { title: "Encrypted Comms", imageDark: card1ImageDark, imageLight: card3ImageLight },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] circuit-bg transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem] w-full overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-red-50/50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-28 px-4 sm:px-6 transition-colors duration-300">
        {/* Background Beams - hidden in light mode, visible in dark */}
        <BackgroundBeams className="dark:opacity-100 opacity-0" />
        
        {/* Light mode decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-red-100/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-red-50/60 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Hero Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                UNCOVER THE TRUTH. STOP THE THREAT.
              </h1>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-sm mx-auto lg:mx-0 leading-relaxed">
                Advanced investigative tools for a
                <br />
                dangerous world.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* Primary CTA */}
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-[#dc2626] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white uppercase tracking-wide hover:bg-[#b91c1c] transition-all duration-200 glow-crimson"
                >
                  Start Investigation
                </a>
                {/* Secondary CTA */}
                <a
                  href="#"
                  className="inline-flex items-center rounded-md border border-slate-300 dark:border-white/40 bg-white dark:bg-transparent px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-white uppercase tracking-wide hover:border-slate-400 dark:hover:border-white/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200 shadow-sm dark:shadow-none"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Hero Dashboard Image */}
            <div className="order-1 lg:order-2 relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="relative rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-[#0f0f0f]/95 shadow-2xl overflow-hidden hero-dashboard-glow transition-all duration-300">
                {/* Window Title Bar */}
                <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#141414] px-4 py-3 transition-colors duration-300">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#dc2626]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-white/60 font-medium ml-2 flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-[#dc2626]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Dashboard
                  </span>
                </div>
                {/* Dashboard Image - different images for light/dark mode */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-transparent">
                  {/* Light mode hero image */}
                  <Image
                    src={heroDashboardLight}
                    alt="InvestiAI Dashboard"
                    className="object-cover object-top w-full h-full dark:hidden"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Dark mode hero image */}
                  <Image
                    src={heroDashboardDark}
                    alt="InvestiAI Dashboard"
                    className="object-cover object-top w-full h-full hidden dark:block"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   {/* Features Section */}
   <section id="features" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative flex items-center justify-between rounded-2xl bg-[#EBEFF0] dark:bg-[#0f0f0f]/90 border border-[#D78E93] dark:border-white/10 overflow-hidden card-glow card-circuit transition-all duration-300 hover:shadow-md dark:hover:border-[#dc2626]/40 p-4 sm:p-6 min-h-[120px] sm:min-h-[160px]"
              >
                <div className="relative z-10 flex-shrink-0 min-w-0">
                  <h3 className="text-base sm:text-xl font-bold text-slate-700 dark:text-white leading-tight">
                    {feature.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                  <Image
                    src={feature.imageLight}
                    alt={feature.title}
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 dark:hidden"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                  />
                  <Image
                    src={feature.imageDark}
                    alt={feature.title}
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 hidden dark:block"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* What is this system? - same horizontal bounds as Hero (max-w-7xl) */}
      <section id="what-is" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50 dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="group/card rounded-2xl border border-[#D78E93] dark:border-[#dc2626]/30 bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-none flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#dc2626]/10 dark:hover:shadow-[#dc2626]/20 hover:border-[#dc2626]/50 dark:hover:border-[#dc2626]/60 hover:-translate-y-1">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="flex h-10 w-1 rounded-full bg-[#dc2626] shrink-0" aria-hidden />
                What is this system?
              </h2>
              <p className="mt-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                The Smart Investigation System is a web system that helps investigators manage cases in one place and get support for decision-making.
              </p>
              <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed">
                It organizes case information, suspects, witnesses, and evidence in a clear and structured way.
              </p>
            </div>
            <div className="relative w-full lg:w-80 xl:w-96 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5">
              <Image
                src={aboutSystemLight}
                alt="Investigation system overview"
                className="object-cover w-full h-full dark:hidden"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
              <Image
                src={aboutSystemDark}
                alt="Investigation system overview"
                className="object-cover w-full h-full hidden dark:block"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Problem Does It Solve? */}
      <section id="problem" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
            <span className="flex h-10 w-1 rounded-full bg-[#dc2626]" aria-hidden />
            What Problem Does It Solve?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg mb-8">
            Investigators often face problems like:
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Case information scattered in many files",
              "Difficulty connecting suspects and evidence",
              "Manual analysis that takes time",
              "Lack of clear summaries and insights",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 sm:px-5 sm:py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dc2626]/10 dark:bg-[#dc2626]/20 text-[#dc2626] text-sm font-semibold">
                  {i + 1}
                </span>
                <span className="text-slate-700 dark:text-gray-300 pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border-2 border-[#D78E93] dark:border-[#dc2626]/40 bg-[#EBEFF0] dark:bg-[#0f0f0f] p-6 sm:p-8">
            <p className="text-slate-800 dark:text-white font-medium leading-relaxed">
              This system helps solve these problems by organizing data and providing helpful suggestions.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-slate-900 dark:bg-black border-t border-slate-700 dark:border-white/10 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src={darkModeLogo}
                alt="InvestiAI"
                className="h-8 w-auto brightness-0 invert dark:brightness-100 dark:invert-0"
              />
              <span className="text-lg font-semibold text-white">InvestiAI</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#system" className="text-sm text-slate-300 hover:text-white transition-colors">The System</a>
              <a href="#intelligence" className="text-sm text-slate-300 hover:text-white transition-colors">Intelligence</a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Access System</a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 dark:border-white/10 text-center sm:text-left">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} InvestiAI. Advanced investigative tools for a dangerous world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
