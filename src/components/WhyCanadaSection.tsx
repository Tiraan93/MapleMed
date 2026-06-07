type Offer = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const OFFERS: Offer[] = [
  {
    title: "Licensing pathway guidance",
    body: "General guidance to help you understand the steps toward Canadian registration.",
    icon: (
      <>
        <path d="M9 3h6a2 2 0 0 1 2 2v0H7v0a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" />
        <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="m8.5 13 2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Future MapleMed clinic opportunities",
    body: "Be considered for roles as our clinics open and grow across Canada.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Flexible locum and long-term options",
    body: "Explore shorter-term locum work or settle into a longer-term position.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Doctor community and buddy groups",
    body: "Connect with peers who understand the move, the work and the transition.",
    icon: (
      <>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5.5M20.5 19a5.5 5.5 0 0 0-4-5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Practical relocation and family support",
    body: "Help thinking through the practical side of moving — with family in mind.",
    icon: (
      <>
        <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Potential pathway to clinic ownership",
    body: "Opportunities to grow into ownership as MapleMed and your career develop.",
    icon: (
      <>
        <path d="m12 3 2.5 5.2 5.5.8-4 4 .9 5.6L12 16l-4.9 2.6.9-5.6-4-4 5.5-.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function WhyCanadaSection() {
  return (
    <section id="why-canada" className="section bg-white">
      <div className="container-page">
        {/* Heading + intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Canada?</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            A clear need. A meaningful opportunity.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Canada has a clear and urgent need for family doctors. Millions of
            people are without regular access to a family physician, and many
            rural, remote and Indigenous communities face even greater
            challenges in accessing primary care.
          </p>
        </div>

        {/* Career move + MapleMed difference */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="card h-full">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maple-50 text-maple-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2.3 6 5.6 6c2 0 3.3 1.2 4.4 2.7C11.1 7.2 12.4 6 14.4 6c3.3 0 4.8 3.6 3.1 6.5C19 16.65 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-semibold text-navy-900">
              A meaningful career move
            </h3>
            <p className="mt-3 leading-relaxed text-navy-600">
              For UK-trained doctors, Canada offers more than a career move. It
              offers the chance to practise meaningful medicine, work with new
              patient populations, contribute to communities where doctors are
              genuinely needed, and build a different kind of life — with space,
              nature, four seasons and professional opportunity.
            </p>
          </article>

          <article className="relative h-full overflow-hidden rounded-2xl bg-navy-900 p-6 text-white shadow-card">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-maple-700/25 blur-2xl" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-maple-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 21V5a2 2 0 0 1 2-2h7l-1.5 3L14 7H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="relative mt-5 text-xl font-semibold">
              Why MapleMed is different
            </h3>
            <p className="relative mt-3 leading-relaxed text-mist-200">
              Most recruitment models are built around placing doctors into
              existing clinics. MapleMed is different. We are building and
              operating our own clinics, which means our success depends on
              doctors staying, thriving and building long-term careers with us.
            </p>
          </article>
        </div>

        {/* What we offer */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold tracking-tight text-navy-900">
            What we offer
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERS.map((offer) => (
              <li key={offer.title} className="card card-hover h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {offer.icon}
                  </svg>
                </span>
                <h4 className="mt-4 text-base font-semibold text-navy-900">
                  {offer.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                  {offer.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunity + reality */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-sky-accentBorder bg-sky-accent p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-navy-900">
              The opportunity
            </h3>
            <p className="mt-3 leading-relaxed text-navy-700">
              A move to Canada can offer significant professional and financial
              upside, especially once a doctor is established in practice.
              Earnings vary depending on province, clinic model, workload,
              patient list size and personal circumstances, but the opportunity
              can be materially different from many UK GP roles.
            </p>
          </article>

          <article className="rounded-2xl border border-mist-200 bg-mist-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-navy-900">The reality</h3>
            <p className="mt-3 leading-relaxed text-navy-700">
              Moving country is a major decision. It may mean leaving behind your
              current professional network, family routines and social life in
              the UK. MapleMed is being built with that reality in mind, with
              flexible scheduling, doctor buddy groups, family support and
              shorter-term options for doctors who want to explore Canada before
              making a permanent move.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-center text-white shadow-card sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-maple-700/20 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Join the MapleMed community
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-mist-200">
              Canada needs family doctors. MapleMed is building clinics for
              doctors who want to do meaningful work, build a better lifestyle
              and be part of something from the beginning.
            </p>
            <a href="#join" className="btn-primary mt-8">
              Register Interest
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-navy-400">
          Medical licensing, immigration and employment eligibility are subject
          to official Canadian regulatory and immigration requirements. MapleMed
          does not guarantee registration, immigration approval or employment.
        </p>
      </div>
    </section>
  );
}
