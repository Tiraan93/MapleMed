import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Background: the MapleMed logo, dimmed, with a navy gradient overlay
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mist-200">
            <span className="h-1.5 w-1.5 rounded-full bg-maple-400" />
            Building modern clinics in Canada
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Building modern clinics in Canada with{" "}
            <span className="text-maple-400">UK-trained medical talent.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-200">
            MapleMed is developing healthcare clinics in Canada and building a
            team of UK-qualified doctors and international medical professionals
            to deliver high-quality, accessible care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#join" className="btn-primary">
              Join the mailing list
            </a>
            <a href="#about" className="btn-ghost-light">
              Learn about MapleMed
            </a>
          </div>

          <p className="mt-8 flex max-w-2xl items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-mist-200">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-mist-300"
            >
              <path
                d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Medical licensing, immigration and employment eligibility are subject
            to official Canadian regulatory and immigration requirements.
          </p>
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
