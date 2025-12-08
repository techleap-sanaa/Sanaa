import FindInspo from "@/components/FindInspo";
import Hero from "@/components/Hero";
import LandingLayout from "@/components/layout/LandingLayout";
import FinalCta from "@/components/FinalCta";
import AboutSanaaCreate from "@/components/AboutSanaaCreate";
import SanaaAccordion from "@/components/Accordion";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <AboutSanaaCreate/>
      <FindInspo />
      <SanaaAccordion/>
      <FinalCta />

    </LandingLayout>
  );
}

export default LandingPage;
