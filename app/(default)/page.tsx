"use client";

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Cta from "@/components/cta";
import Zigzag from "@/components/zigzag";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      <Hero />
      <Zigzag />
      {!isMobile && <BusinessCategories />}
      <Cta />
    </>
  );
}
