export const metadata = {
  title: "Benki Home",
  description: "Benki helps M&A teams build CIMs in days, not months. We integrate with your data room to generate drafts for every memo and financial model.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      {/* <LargeTestimonial /> */}
      {/* <Cta /> */}
    </>
  );
}
