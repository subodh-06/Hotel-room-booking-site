import Cta from "@/components/ui/Cta";
import Faq from "@/components/ui/Faq";
import Footers from "@/components/ui/Footer";
import HeroSection from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import ExclusiveDeals from "@/components/ui/NotifyOffer";
import ImageBanner from "@/components/ui/ResponsiveImg";
import Stats from "@/components/ui/Stats";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <header>
    <Navbar/>
  </header>
  <main className="w-full">
  <HeroSection/>
  <ImageBanner/>
  <Cta/>
  <Stats/>
  <ExclusiveDeals/>
  <Faq/>
  </main>
  <Footers/>
  
  </>
  );
}
