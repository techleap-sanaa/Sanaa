import FindInspo from "../components/FindInspo";
import Hero from "../components/Hero";
import LandingLayout from "../components/layout/LandingLayout";
import FinalCTA from "../components/FinalCTA";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <FindInspo />
      <FinalCTA />
    </LandingLayout>
  );
}

export default LandingPage;
