import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/sections/benefits";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingSection } from "@/components/sections/pricing";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-fixed-breathe absolute left-1/2 top-1/2 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(155,225,93,0.22),rgba(76,201,240,0.18)_34%,transparent_68%)] blur-2xl" />
        <div className="animate-fixed-orbit absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-[34%_66%_61%_39%/42%_38%_62%_58%] border border-primary/25 bg-[conic-gradient(from_90deg,transparent,rgba(76,201,240,0.24),transparent,rgba(155,225,93,0.2),transparent)] opacity-80 blur-[0.5px]" />
        <div className="animate-fixed-orbit absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-[60%_40%_46%_54%/45%_58%_42%_55%] border border-accent/25 bg-[conic-gradient(from_220deg,transparent,rgba(155,225,93,0.24),transparent,rgba(76,201,240,0.18),transparent)] opacity-75 blur-[0.5px] [animation-direction:reverse] [animation-duration:22s]" />
        <div className="animate-wave-drift bg-arc-lines absolute left-1/2 top-[-4rem] h-[58rem] w-[58rem] -translate-x-1/2 rounded-full opacity-[0.52] blur-[0.2px]" />
        <div className="animate-wave-drift absolute left-1/2 top-[2rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-radial-lines opacity-[0.24] [animation-duration:24s]" />
        <div className="absolute left-1/2 top-[5rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(123,92,255,0.42),transparent_66%)] opacity-100 blur-3xl" />
        <div className="animate-drift-soft absolute left-1/2 top-[-3rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/18 blur-[120px]" />
        <div className="animate-float-delay absolute left-[3%] top-[30rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/12 blur-[120px]" />
        <div className="animate-drift-soft-delay absolute right-[2%] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-violet-400/12 blur-[120px]" />
        <div className="animate-float-slow absolute bottom-[-4rem] left-1/2 h-[20rem] w-[38rem] -translate-x-1/2 rounded-full bg-fuchsia-500/14 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <BenefitsSection />
        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
