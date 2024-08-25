export const metadata = {
  title: "Benki Home",
  description: "Benki helps M&A teams build CIMs in days, not months. We integrate with your data room to generate drafts for every memo and financial model.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="sm:scale-40 md:scale-70 lg:scale-100">
        <BusinessCategories />
      </div>
      {/* <FeaturesPlanet /> */}
      <Zigzag />
      <Cta />
    </>
  );
}
