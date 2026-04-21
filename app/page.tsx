import { HeroSection } from "@/components/shared/hero-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { TargetUsersSection } from "@/components/shared/target-users-section";
import { PricingSection } from "@/components/shared/pricing-section";
import { CTASection } from "@/components/shared/cta-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TargetUsersSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
