import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Background: the MapleMedic logo, dimmed, with a navy gradient overlay
          so the headline stays readable. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/maplemed-logo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 sm:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-maple-700/20 blur-3xl" />
      </div>

      <div className="container-page relative pb-20 pt-32 sm:pb-24 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Adventure &amp; Opportunity: on{" "}
            <span className="italic text-maple-400">your</span> terms
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-200">
            The only platform that lets UK GPs test Canada through locum
            placements before making any permanent move &mdash; with proper
            support and a real way back if you need it. We believe that once you
            experience what MapleMedic has to offer, you&rsquo;ll want to grow
            with us for the long term.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#join" className="btn-primary">
              Join the mailing list
            </a>
            <a href="#mission" className="btn-ghost-light">
              Learn about MapleMedic
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider into the light page */}
      <div aria-hidden="true" className="relative">
        <svg
          viewBox="0 0 1440 80"
          className="block h-10 w-full sm:h-14"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80h1440V32c-240 32-480 48-720 48S240 64 0 32z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
