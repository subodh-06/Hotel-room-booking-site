import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footers from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ExclusiveDeals from "@/components/NotifyOffer";
import ImageBanner from "@/components/ResponsiveImg";
import Stats from "@/components/Stats";


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
