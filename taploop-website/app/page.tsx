import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import UseCasesSection from "./components/UseCasesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
