import FindInspo from "@/components/FindInspo";
import Hero from "@/components/Hero";
import LandingLayout from "@/components/layout/LandingLayout";
import FinalCta from "@/components/FinalCta";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <FindInspo />
      <FinalCta />
    </LandingLayout>
  );
}

export default LandingPage;
