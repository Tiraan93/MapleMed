import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Clinics from "@/components/Clinics";
import Doctors from "@/components/Doctors";
import Process from "@/components/Process";
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
        <About />
        <Clinics />
        <Doctors />
        <Process />
        <Join />
        <FAQ />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
