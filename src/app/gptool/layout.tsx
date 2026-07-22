import type { Metadata } from "next";
import { Header } from "@/components/gptool/Header";

export const metadata: Metadata = {
  title: "MapleMedic GPTool — Portfolio Case Reviews",
  description:
    "Generate structured GP portfolio case reviews for SCA and RCGP training. Describe your case and get capabilities, learning needs, and reflection in seconds.",
  alternates: { canonical: "/gptool" },
  robots: { index: true, follow: true },
};

export default function GpToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gptool min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <footer className="border-t border-mist-200 bg-white px-4 py-6">
        <div className="mx-auto max-w-6xl text-center text-xs text-navy-400 sm:px-6">
          AI generated drafts must be reviewed before portfolio submission. Not
          medical advice.
        </div>
      </footer>
    </div>
  );
}
