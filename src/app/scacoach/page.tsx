import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SCAcoach — Coming Soon | MapleMedic",
  description:
    "SCAcoach is coming soon — AI supported SCA consultation practice for UK GP trainees.",
  alternates: { canonical: "/scacoach" },
  robots: { index: true, follow: true },
};

export default function ScaCoachPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-16 lg:pt-20">
        <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-maple-700">
            SCAcoach
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            Coming Soon
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            We are building SCAcoach to help GP trainees practise Simulated
            Consultation Assessment style consultations. Check back shortly.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/gptool" className="btn-primary">
              Open GPTool
            </Link>
            <Link href="/" className="btn-secondary">
              MapleMedic home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
