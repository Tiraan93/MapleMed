import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForGps from "@/components/ForGps";
import ForClinics from "@/components/ForClinics";
import Founders from "@/components/Founders";
import OurStory from "@/components/OurStory";
import Join from "@/components/Join";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForGps />
        <ForClinics />
        <Founders />
        <OurStory />
        <Join />
        <FAQ />
        <Trust />
        <Contact />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
