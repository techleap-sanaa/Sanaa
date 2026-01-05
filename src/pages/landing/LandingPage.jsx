import Hero from "@/components/landinpage/Hero";
import LandingLayout from "@/components/layout/LandingLayout";
import AboutSanaaCreate from "@/components/landinpage/AboutSanaaCreate";
import SanaaAccordion from "@/components/landinpage/Accordion";
import FindInspo from "@/components/landinpage/FindInspo";
import FinalCta from "@/components/landinpage/FinalCta";
import FindYourNiche from "@/components/landinpage/FindYourNiche";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <AboutSanaaCreate />
      <FindInspo />
      <SanaaAccordion />
      <FindYourNiche />
      <FinalCta />
    </LandingLayout>
  );
}

export default LandingPage;
