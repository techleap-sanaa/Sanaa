import FindInspo from "@/components/FindInspo";
import Hero from "@/components/Hero";
import LandingLayout from "@/components/layout/LandingLayout";
import FinalCta from "@/components/FinalCta";
import AboutSanaaCreate from "@/components/AboutSanaaCreate";
import SanaaAccordion from "@/components/Accordion";
import FindYourNiche from "@/components/FindYourNiche";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <AboutSanaaCreate />
      <FindInspo />
      <FindYourNiche />
      <FinalCta />
      <SanaaAccordion />
    </LandingLayout>
  );
}

export default LandingPage;
