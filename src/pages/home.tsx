import { Navigation } from "@/components/sections/navigation";
import { AwardWinningHero } from "@/components/sections/award-winning-hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { LuxuryCursor } from "@/components/animated/luxury-cursor";
import { ContinuousFloatingElements } from "@/components/animated/continuous-animations";
import { EnhancedBackground } from "@/components/animated/enhanced-background";
import { LuxuryFeatures } from "@/components/sections/luxury-features";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      <EnhancedBackground />
      <LuxuryCursor />
      <ContinuousFloatingElements />
      <Navigation />
      <AwardWinningHero />
      <About />
      <Skills />
      <PortfolioShowcase />
      <Projects />
      <LuxuryFeatures />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
