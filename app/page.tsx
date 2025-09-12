import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { BuiltForEveryoneSection } from '@/components/sections/built-for-everyone-section';
import { FutureSection } from '@/components/sections/future-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { TrustIndicatorsSection } from '@/components/sections/trust-indicators-section';
import { CTABannerSection } from '@/components/sections/cta-banner-section';
import { HeaderWithModal } from '@/components/layout/header-with-modal';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithModal />
      <main>
        <HeroSection />
        <StatsSection />
        <BuiltForEveryoneSection />
        <FutureSection />
        <FeaturesSection />
        <CategoriesSection />
        <HowItWorksSection />
        <TrustIndicatorsSection />
        <CTABannerSection />
      </main>
      <Footer />
    </div>
  );
}