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
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-[18rem] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.06]" />
      </div>

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
  );
}
