import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MapleMedic",
  description:
    "How MapleMedic collects, uses and protects the information you share when registering interest.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const updated = "June 2026";

  return (
    <>
      <header className="border-b border-mist-200 bg-white">
        <div className="container-page flex h-16 items-center justify-between lg:h-20">
          <Link href="/" aria-label="MapleMedic home">
            <Logo />
          </Link>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <div className="container-page max-w-3xl py-16 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-maple-700">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-navy-400">Last updated: {updated}</p>

          <div className="prose-content mt-10 space-y-8 text-navy-700">
            <section>
              <p className="leading-relaxed">
                This Privacy Policy explains how MapleMedic handles the information
                you provide when you register interest or join our mailing list.
                We keep this simple and only collect what we need.
              </p>
            </section>

            <Block title="Information we collect">
              <p>When you register interest, MapleMedic collects:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your role (for example, UK-qualified doctor)</li>
                <li>Any optional message you choose to send</li>
              </ul>
            </Block>

            <Block title="How we use your information">
              <p>We use the information you provide to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Send you updates about MapleMedic clinics and recruitment plans</li>
                <li>Manage and respond to your expression of interest</li>
              </ul>
            </Block>

            <Block title="We do not sell your data">
              <p>
                MapleMedic does not sell your personal information to third
                parties. Your details are used only for the purposes described
                in this policy.
              </p>
            </Block>

            <Block title="Email updates and unsubscribing">
              <p>
                You can unsubscribe from MapleMedic emails at any time using the
                unsubscribe link in any message we send, or by contacting us at
                the email below.
              </p>
            </Block>

            <Block title="Requesting deletion of your information">
              <p>
                You can request that we delete the information we hold about you
                at any time. Just email us and we will remove your details.
              </p>
            </Block>

            <Block title="Contact">
              <p>
                For any privacy questions or requests, contact us at{" "}
                <a
                  href="mailto:hello@maplemed.co"
                  className="font-medium text-maple-700 underline hover:text-maple-800"
                >
                  hello@maplemed.co
                </a>
                .
              </p>
            </Block>

            <section id="terms" className="scroll-mt-24 border-t border-mist-200 pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                Terms
              </h2>
              <p className="mt-3 leading-relaxed">
                Information provided on this website is general only. MapleMedic is
                not a medical regulator, immigration adviser or government body,
                and nothing on this site guarantees employment, medical
                licensing or immigration outcomes. Official licensing,
                immigration and employment requirements must be checked with the
                relevant authorities. By registering interest, you acknowledge
                that doing so does not create any offer of employment or
                guarantee of future opportunities.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-navy-900">{title}</h2>
      <div className="mt-3 leading-relaxed">{children}</div>
    </section>
  );
}
