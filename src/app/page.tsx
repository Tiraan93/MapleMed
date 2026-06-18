import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import OurStory from "@/components/OurStory";
import Join from "@/components/Join";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Difference />
        <HowItWorks />
        <OurStory />
        <Join />
        <FAQ />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
