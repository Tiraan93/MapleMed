import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
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
          <p className="text-sm font-semibold text-maple-400">
            By NHS Doctors, for NHS Doctors
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            MapleMedic
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-200">
            We match NHS- trained doctors with
            Canadian clinics we&apos;ve visited in person and we trust. Then we
            guide you through licensing, give you general guidance on your work
            permit, and help your family move. Our support is free for you.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist-200">
            Founded by Doctors Trained in the NHS with first hand experience of
            relocating to Canada.
          </p>

          <p className="mt-6 text-lg italic text-white">
            Adventure &amp; Opportunity: on your terms.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end [&_a]:whitespace-nowrap">
            <div className="flex flex-col items-center">
              <p className="mb-2 text-sm font-semibold text-white">
                I am a Doctor looking for work
              </p>
              <a href="#for-gps" className="btn-primary">
                See how it works
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 text-sm font-semibold text-white">
                I run a clinic in Canada
              </p>
              <a href="#for-clinics" className="btn-ghost-light">
                Hire a Doctor
              </a>
            </div>
            <div>
              <a href="mailto:admin@maplemedic.com" className="btn-ghost-light">
                Contact us: admin@maplemedic.com
              </a>
            </div>
          </div>
        </div>
      </div>

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
